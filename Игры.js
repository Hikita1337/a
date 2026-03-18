Получение текущего состояния Рулетки
curl -X GET "https://cs2run.app/roulette/state" \
     -H "Accept: application/json, text/plain, */*" \
     -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2ODYxLCJpYXQiOjE3NzMyNDI4OTYsImV4cCI6MTc3NDEwNjg5Nn0.qnl3fU3m5LKIwzQAWQemydZ_M4cXvCNEMbe_ZjD2kP4" \
     -H "Accept-Language: ru"


Ответ апи {
  "success": true,
  "date": "2026-03-18T16:15:58.946Z",
  "data": {
    "jackpot": {
      "id": 9863,
      "amount": 58.21000000000024,
      "payload": [
        3,
        2,
        3
      ],
      "status": 1
    },
    "round": {
      "id": 6647318,
      "status": 3,
      "bettingTime": -4589,
      "endTime": 3411,
      "randomOffset": 0.3916581665462363,
      "randomNumber": 4,
      "spinNumber": 4,
      "winnerNumber": 1,
      "multiplier": null,
      "multiplierNumber": 1
    },
    "history": [
      {
        "id": 6647317,
        "winnerNumber": 2
      },
      {
        "id": 6647316,
        "winnerNumber": 2
      },
      {
        "id": 6647315,
        "winnerNumber": 1
      },
      {
        "id": 6647314,
        "winnerNumber": 2
      },
      {
        "id": 6647313,
        "winnerNumber": 1
      },
      {
        "id": 6647312,
        "winnerNumber": 1
      },
      {
        "id": 6647311,
        "winnerNumber": 2
      },
      {
        "id": 6647310,
        "winnerNumber": 1
      },
      {
        "id": 6647309,
        "winnerNumber": 1
      },
      {
        "id": 6647308,
        "winnerNumber": 3
      },
      {
        "id": 6647307,
        "winnerNumber": 2
      },
      {
        "id": 6647306,
        "winnerNumber": 2
      },
      {
        "id": 6647305,
        "winnerNumber": 2
      },
      {
        "id": 6647304,
        "winnerNumber": 1
      },
      {
        "id": 6647303,
        "winnerNumber": 1
      },
      {
        "id": 6647302,
        "winnerNumber": 2
      },
      {
        "id": 6647301,
        "winnerNumber": 2
      },
      {
        "id": 6647300,
        "winnerNumber": 2
      },
      {
        "id": 6647299,
        "winnerNumber": 2
      },
      {
        "id": 6647298,
        "winnerNumber": 2
      },
      {
        "id": 6647297,
        "winnerNumber": 1
      },
      {
        "id": 6647296,
        "winnerNumber": 1
      },
      {
        "id": 6647295,
        "winnerNumber": 2
      },
      {
        "id": 6647294,
        "winnerNumber": 1
      },
      {
        "id": 6647293,
        "winnerNumber": 2
      },
      {
        "id": 6647292,
        "winnerNumber": 2
      },
      {
        "id": 6647291,
        "winnerNumber": 2
      },
      {
        "id": 6647290,
        "winnerNumber": 2
      },
      {
        "id": 6647289,
        "winnerNumber": 2
      },
      {
        "id": 6647288,
        "winnerNumber": 2
      },
      {
        "id": 6647287,
        "winnerNumber": 1
      },
      {
        "id": 6647286,
        "winnerNumber": 1
      },
      {
        "id": 6647285,
        "winnerNumber": 2
      },
      {
        "id": 6647284,
        "winnerNumber": 2
      },
      {
        "id": 6647283,
        "winnerNumber": 1
      },
      {
        "id": 6647282,
        "winnerNumber": 1
      },
      {
        "id": 6647281,
        "winnerNumber": 2
      },
      {
        "id": 6647280,
        "winnerNumber": 2
      },
      {
        "id": 6647279,
        "winnerNumber": 1
      },
      {
        "id": 6647278,
        "winnerNumber": 3
      },
      {
        "id": 6647277,
        "winnerNumber": 2
      },
      {
        "id": 6647276,
        "winnerNumber": 2
      },
      {
        "id": 6647275,
        "winnerNumber": 2
      },
      {
        "id": 6647274,
        "winnerNumber": 1
      },
      {
        "id": 6647273,
        "winnerNumber": 2
      },
      {
        "id": 6647272,
        "winnerNumber": 1
      },
      {
        "id": 6647271,
        "winnerNumber": 2
      },
      {
        "id": 6647270,
        "winnerNumber": 1
      },
      {
        "id": 6647269,
        "winnerNumber": 2
      },
      {
        "id": 6647268,
        "winnerNumber": 2
      },
      {
        "id": 6647267,
        "winnerNumber": 1
      },
      {
        "id": 6647266,
        "winnerNumber": 2
      },
      {
        "id": 6647265,
        "winnerNumber": 2
      },
      {
        "id": 6647264,
        "winnerNumber": 2
      },
      {
        "id": 6647263,
        "winnerNumber": 3
      },
      {
        "id": 6647262,
        "winnerNumber": 1
      },
      {
        "id": 6647261,
        "winnerNumber": 1
      },
      {
        "id": 6647260,
        "winnerNumber": 2
      },
      {
        "id": 6647259,
        "winnerNumber": 3
      },
      {
        "id": 6647258,
        "winnerNumber": 2
      },
      {
        "id": 6647257,
        "winnerNumber": 2
      },
      {
        "id": 6647256,
        "winnerNumber": 1
      },
      {
        "id": 6647255,
        "winnerNumber": 2
      },
      {
        "id": 6647254,
        "winnerNumber": 2
      },
      {
        "id": 6647253,
        "winnerNumber": 1
      },
      {
        "id": 6647252,
        "winnerNumber": 1
      },
      {
        "id": 6647251,
        "winnerNumber": 2
      },
      {
        "id": 6647250,
        "winnerNumber": 2
      },
      {
        "id": 6647249,
        "winnerNumber": 1
      },
      {
        "id": 6647248,
        "winnerNumber": 1
      },
      {
        "id": 6647247,
        "winnerNumber": 2
      },
      {
        "id": 6647246,
        "winnerNumber": 2
      },
      {
        "id": 6647245,
        "winnerNumber": 2
      },
      {
        "id": 6647244,
        "winnerNumber": 2
      },
      {
        "id": 6647243,
        "winnerNumber": 2
      },
      {
        "id": 6647242,
        "winnerNumber": 2
      },
      {
        "id": 6647241,
        "winnerNumber": 1
      },
      {
        "id": 6647240,
        "winnerNumber": 1
      },
      {
        "id": 6647239,
        "winnerNumber": 1
      },
      {
        "id": 6647238,
        "winnerNumber": 1
      },
      {
        "id": 6647237,
        "winnerNumber": 2
      },
      {
        "id": 6647236,
        "winnerNumber": 2
      },
      {
        "id": 6647235,
        "winnerNumber": 2
      },
      {
        "id": 6647234,
        "winnerNumber": 3
      },
      {
        "id": 6647233,
        "winnerNumber": 3
      },
      {
        "id": 6647232,
        "winnerNumber": 1
      },
      {
        "id": 6647231,
        "winnerNumber": 2
      },
      {
        "id": 6647230,
        "winnerNumber": 2
      },
      {
        "id": 6647229,
        "winnerNumber": 2
      },
      {
        "id": 6647228,
        "winnerNumber": 2
      },
      {
        "id": 6647227,
        "winnerNumber": 2
      },
      {
        "id": 6647226,
        "winnerNumber": 3
      },
      {
        "id": 6647225,
        "winnerNumber": 1
      },
      {
        "id": 6647224,
        "winnerNumber": 1
      },
      {
        "id": 6647223,
        "winnerNumber": 2
      },
      {
        "id": 6647222,
        "winnerNumber": 2
      },
      {
        "id": 6647221,
        "winnerNumber": 1
      },
      {
        "id": 6647220,
        "winnerNumber": 1
      },
      {
        "id": 6647219,
        "winnerNumber": 2
      },
      {
        "id": 6647218,
        "winnerNumber": 2
      }
    ],
    "bets": [
      null,
      [
        {
          "id": 139532950,
          "number": 1,
          "status": 1,
          "deposit": 0.75,
          "walletDeposit": 0.75,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 1017524,
            "name": "король голднов run",
            "avatar": "https://avatars.steamstatic.com/c975533dcfd802e3d8c16cab13f91a626dc86ab7_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532952,
          "number": 1,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532953,
          "number": 1,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532956,
          "number": 1,
          "status": 1,
          "deposit": 9.7667818069458,
          "walletDeposit": 800,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 2610228,
            "name": "°Grego°",
            "avatar": "https://avatars.steamstatic.com/e9af1b78526aad8c21115c48a3610d3bf3e141db_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532957,
          "number": 1,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532958,
          "number": 1,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532959,
          "number": 1,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532960,
          "number": 1,
          "status": 1,
          "deposit": 5,
          "walletDeposit": 5,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 828533,
            "name": "раскумар",
            "avatar": "https://avatars.steamstatic.com/b7e1c29bc3f640cb6c341bb8977febb190617256_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532961,
          "number": 1,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532963,
          "number": 1,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532964,
          "number": 1,
          "status": 1,
          "deposit": 1.5,
          "walletDeposit": 1.5,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 724483,
            "name": "dnz",
            "avatar": "https://avatars.steamstatic.com/bf410e07f3b407ce017e55dd6c6dc4839029bff6_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532965,
          "number": 1,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532968,
          "number": 1,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532973,
          "number": 1,
          "status": 1,
          "deposit": 14.5,
          "walletDeposit": 14.5,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 676108,
            "name": "Ovy.Скоробогатый",
            "avatar": "https://avatars.steamstatic.com/d4cd7acd16499e2b92a50b0394481a279dfc6c76_medium.jpg",
            "blm": false
          },
          "items": [
            {
              "id": 8184853359,
              "itemId": 14865,
              "name": "Sticker | qikert (Foil) | Katowice 2019",
              "colorId": 3,
              "gameId": 730,
              "reservedId": 12779
            },
            {
              "id": 8184853360,
              "itemId": 13066,
              "name": "Sticker | Natus Vincere | Cologne 2016",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 10903
            }
          ],
          "itemsCount": 2
        }
      ],
      [
        {
          "id": 139532949,
          "number": 2,
          "status": 1,
          "deposit": 1.2398929595947266,
          "walletDeposit": 101.56,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 3860341,
            "name": "Вторсырье",
            "avatar": "https://avatars.steamstatic.com/3b8f579059c1051dd1bbef995f0e275c6a145d49_medium.jpg",
            "blm": false
          },
          "items": [
            {
              "id": 8184852504,
              "itemId": 2671,
              "name": "P90 | Off World (Field-Tested)",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 3498
            },
            {
              "id": 8184852505,
              "itemId": 2703,
              "name": "P90 | Teardown (Well-Worn)",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 3540
            },
            {
              "id": 8184852506,
              "itemId": 2704,
              "name": "P90 | Traction (Battle-Scarred)",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 3546
            },
            {
              "id": 8184852507,
              "itemId": 2940,
              "name": "SCAR-20 | Jungle Slipstream (Well-Worn)",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 3897
            }
          ],
          "itemsCount": 4
        },
        {
          "id": 139532954,
          "number": 2,
          "status": 1,
          "deposit": 2.75,
          "walletDeposit": 2.75,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4114279,
            "name": "Denben",
            "avatar": "https://avatars.steamstatic.com/74a61ec69ab6b0315b4a0d389f5614836f475102_medium.jpg",
            "blm": false
          },
          "items": [
            {
              "id": 8184852861,
              "itemId": 61147,
              "name": "SSG 08 | Blush Pour (Factory New)",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 27827
            }
          ],
          "itemsCount": 1
        },
        {
          "id": 139532966,
          "number": 2,
          "status": 1,
          "deposit": 0.43279051780700684,
          "walletDeposit": 35.45,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 2091437,
            "name": ".",
            "avatar": "https://avatars.steamstatic.com/37d8017d24e567cd4e3ef8ee84099334e2c058b1_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532967,
          "number": 2,
          "status": 1,
          "deposit": 1.8600000143051147,
          "walletDeposit": 1.86,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4114279,
            "name": "Denben",
            "avatar": "https://avatars.steamstatic.com/74a61ec69ab6b0315b4a0d389f5614836f475102_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532969,
          "number": 2,
          "status": 1,
          "deposit": 0.43279051780700684,
          "walletDeposit": 35.45,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 2091437,
            "name": ".",
            "avatar": "https://avatars.steamstatic.com/37d8017d24e567cd4e3ef8ee84099334e2c058b1_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532972,
          "number": 2,
          "status": 1,
          "deposit": 0.25,
          "walletDeposit": 0.25,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 65916,
            "name": "bibix",
            "avatar": "https://avatars.steamstatic.com/16f6a0960c05fc80d0e1be34e5dab6ba42fccad6_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532975,
          "number": 2,
          "status": 1,
          "deposit": 8.594767570495605,
          "walletDeposit": 704,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 2565459,
            "name": "six seven uoy",
            "avatar": "https://avatars.steamstatic.com/acf67207768cdc5be5f09aca6a9f7830bf27d6f7_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        }
      ],
      [
        {
          "id": 139532942,
          "number": 3,
          "status": 1,
          "deposit": 0.20000000298023224,
          "walletDeposit": 0.2,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 728883,
            "name": "Spar",
            "avatar": "https://avatars.steamstatic.com/13c3ea69b4e47e169b8b44982a88acadf0334b0f_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532943,
          "number": 3,
          "status": 1,
          "deposit": 0.25,
          "walletDeposit": 0.25,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 385636,
            "name": "editouch",
            "avatar": "https://avatars.steamstatic.com/0ae81ca7c6209a3391ea86d2da7ff019658732e0_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532944,
          "number": 3,
          "status": 1,
          "deposit": 1,
          "walletDeposit": 1,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 3273700,
            "name": "Dep+DoDep",
            "avatar": "https://avatars.steamstatic.com/f9b907b62f1b333510889aef3a0ba932697c46bf_medium.jpg",
            "isVip": true,
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532945,
          "number": 3,
          "status": 1,
          "deposit": 4.130000114440918,
          "walletDeposit": 4.13,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 946492,
            "name": "23",
            "avatar": "https://avatars.steamstatic.com/ae540d37eef3cfcff194166b7325340a698fe0e0_medium.jpg",
            "isVip": true,
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532946,
          "number": 3,
          "status": 1,
          "deposit": 1,
          "walletDeposit": 1,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 3273700,
            "name": "Dep+DoDep",
            "avatar": "https://avatars.steamstatic.com/f9b907b62f1b333510889aef3a0ba932697c46bf_medium.jpg",
            "isVip": true,
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532947,
          "number": 3,
          "status": 1,
          "deposit": 1,
          "walletDeposit": 1,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 3273700,
            "name": "Dep+DoDep",
            "avatar": "https://avatars.steamstatic.com/f9b907b62f1b333510889aef3a0ba932697c46bf_medium.jpg",
            "isVip": true,
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532948,
          "number": 3,
          "status": 1,
          "deposit": 14.970000267028809,
          "walletDeposit": 14.97,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4115558,
            "name": "8065556351",
            "avatar": "https://cloud.this.team/rimming/20231204/127453i070121g1U63S.png",
            "blm": false
          },
          "items": [
            {
              "id": 8184853189,
              "itemId": 8477,
              "name": "MP5-SD | Bamboo Garden (Battle-Scarred)",
              "colorId": 4,
              "gameId": 730,
              "reservedId": 2510
            },
            {
              "id": 8184853190,
              "itemId": 12742,
              "name": "Sticker | KRIMZ | Atlanta 2017",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 10562
            },
            {
              "id": 8184853191,
              "itemId": 14141,
              "name": "Sticker | dennis | Cologne 2015",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 12044
            }
          ],
          "itemsCount": 3
        },
        {
          "id": 139532951,
          "number": 3,
          "status": 1,
          "deposit": 0.43279051780700684,
          "walletDeposit": 35.45,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 2091437,
            "name": ".",
            "avatar": "https://avatars.steamstatic.com/37d8017d24e567cd4e3ef8ee84099334e2c058b1_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532955,
          "number": 3,
          "status": 1,
          "deposit": 0.5,
          "walletDeposit": 0.5,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 724483,
            "name": "dnz",
            "avatar": "https://avatars.steamstatic.com/bf410e07f3b407ce017e55dd6c6dc4839029bff6_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532962,
          "number": 3,
          "status": 1,
          "deposit": 0.9399999976158142,
          "walletDeposit": 0.94,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4114279,
            "name": "Denben",
            "avatar": "https://avatars.steamstatic.com/74a61ec69ab6b0315b4a0d389f5614836f475102_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532970,
          "number": 3,
          "status": 1,
          "deposit": 0.5,
          "walletDeposit": 0.5,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 2587489,
            "name": "Кс. Го",
            "avatar": "https://avatars.steamstatic.com/26ed8439095a8145e76cf22f917dc3f921020c5f_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532971,
          "number": 3,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532974,
          "number": 3,
          "status": 1,
          "deposit": 2.44169545173645,
          "walletDeposit": 200,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        }
      ]
    ],
    "statistic": {
      "count": 34,
      "totalItems": 10,
      "totalDeposit": 123.2754187732935
    }
  }
}

"jackpot": {
      "id": 9863,
      "amount": 58 
Когда меняется ид и сумма стала меньше  значит джекпот произошел
Если это так то зачисляем эту сумму amount в сторону юзеров ( типо сайт потерял эти деньги)
"round": {
      "id": 6647318,
      "status": 3,
      "bettingTime": -4589,
      "endTime": 3411,
      "randomOffset": 0.3916581665462363,
      "randomNumber": 4,
      "spinNumber": 4,
      "winnerNumber": 1,
      "multiplier": null,
      "multiplierNumber": 1
    },
    это статистика текушей игры 
    статус 2 это прием ставок 
статус 3 инра идет 
статус 4 игра кончена идет завершение , в этот момент можно смотреть на такие поля как "winnerNumber": 1,
      "multiplier": null,
      "multiplierNumber": 1
      где winnerNumber 1 это синий , 2 зеленый , 3 золотой 
      кооэфициенты если выпал 1 или 2 2х
      если золотой 14х
      то есть
      нсли на синий поставили 100$ и он выиграл то сайт отдал 100$ 
      если зотолой и поставили 10$ на него в сумме  то сайт отдал 10*13=130
      так же есть доп множители это multiplier
      если multiplierNumber 1 2 3 то это значит что доп множитель выпал на этот цвет , но сам реально выигравший цвет это winnerNumber
То есть когда winnerNumber 1 , multiplierNumber 1 и multiplier допустим 5 то, это значит что выиграл синий цвет с множителем 5х и в сумме вышло 10х
Но может быть так что winnerNumber 1 , multiplierNumber 2 и multiplier 1.5 , то тут выиграл синий а множитель на зеленый был 

"bets": [
      null,
      [
        {
          "id": 139532950,
          "number": 1,
          "status": 1,
          "deposit": 0.75,
          "walletDeposit": 0.75,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 1017524,
            "name": "король голднов run",
            "avatar": "https://avatars.steamstatic.com/c975533dcfd802e3d8c16cab13f91a626dc86ab7_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139532952,
          "number": 1,
          "status": 1,
          "deposit": 4.8833909034729,
          "walletDeposit": 400,
          "currencyId": 1,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 4070564,
            "name": "ddk",
            "avatar": "https://avatars.yandex.net/get-yapic/17910871/KVe9hwHMzox7XEOZxkaT7ayyU-1/islands-retina-50",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },

{
          "id": 139532943,
          "number": 3,
          "status": 1,
          "deposit": 0.25,
          "walletDeposit": 0.25,
          "currencyId": 2,
          "withdraw": null,
          "walletWithdraw": null,
          "user": {
            "id": 385636,
            "name": "editouch",
            "avatar": "https://avatars.steamstatic.com/0ae81ca7c6209a3391ea86d2da7ff019658732e0_medium.jpg",
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },

Тут ставки как видишь

number это на какой цвет человек поставил ставку 

deposit сама ставка в $

2. Просмотр данных конкретного прошедшего раунда Рулетки
curl -X GET "https://cs2run.app/roulette/rounds/6646960" \
     -H "Accept: application/json, text/plain, */*" \
     -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2ODYxLCJpYXQiOjE3NzMyNDI4OTYsImV4cCI6MTc3NDEwNjg5Nn0.qnl3fU3m5LKIwzQAWQemydZ_M4cXvCNEMbe_ZjD2kP4" \
     -H "Accept-Language: ru"

тут все одинаково 
{
  "success": true,
  "date": "2026-03-18T18:23:04.332Z",
  "data": {
    "round": {
      "id": 6646960,
      "status": 4,
      "randomNumber": 11,
      "spinNumber": 11,
      "winnerNumber": 2,
      "multiplier": 0,
      "multiplierNumber": 2
    },
    "bets": {
      "1": [
        {
          "id": 139528291,
          "number": 1,
          "status": 3,
          "deposit": 5.7,
          "walletDeposit": 467,
          "currencyId": null,
          "withdraw": 0,
          "walletWithdraw": 0,
          "user": {
            "id": 2500147,
            "name": "ник",
            "avatar": "https://avatars.steamstatic.com/1f7325903612332ed3338ccf7b4b569943e528c5_medium.jpg",
            "isVip": false,
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139528292,
          "number": 1,
          "status": 3,
          "deposit": 2,
          "walletDeposit": 2,
          "currencyId": null,
          "withdraw": 0,
          "walletWithdraw": 0,
          "user": {
            "id": 143951,
            "name": "сисюлики",
            "avatar": "https://avatars.steamstatic.com/0f72fd94bafa566e1d64f632eff6148c7a01eede_medium.jpg",
            "isVip": null,
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        }
      ],
      "2": [
        {
          "id": 139528290,
          "number": 2,
          "status": 2,
          "deposit": 1.37,
          "walletDeposit": 1.37,
          "currencyId": null,
          "withdraw": 2.74,
          "walletWithdraw": 2.74,
          "user": {
            "id": 1979672,
            "name": "шеф повар",
            "avatar": "https://avatars.steamstatic.com/6558be5e6d1c6a43fefe549457dd999e425a0525_medium.jpg",
            "isVip": null,
            "blm": false
          },
          "items": [
            {
              "id": 146425890,
              "itemId": 160,
              "name": "AUG | Aristocrat (Battle-Scarred)",
              "colorId": 3,
              "gameId": 730,
              "reservedId": 208
            }
          ],
          "itemsCount": 1
        }
      ],
      "3": [
        {
          "id": 139528288,
          "number": 3,
          "status": 3,
          "deposit": 1,
          "walletDeposit": 1,
          "currencyId": null,
          "withdraw": 0,
          "walletWithdraw": 0,
          "user": {
            "id": 792585,
            "name": "Gufit run",
            "avatar": "https://avatars.steamstatic.com/dcd3b5b2c33ae1445c44c9baea0e4a5ed16ddd1c_medium.jpg",
            "isVip": null,
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139528289,
          "number": 3,
          "status": 3,
          "deposit": 0.75,
          "walletDeposit": 0.75,
          "currencyId": null,
          "withdraw": 0,
          "walletWithdraw": 0,
          "user": {
            "id": 1710984,
            "name": "Auf Wiedersehen",
            "avatar": "https://avatars.steamstatic.com/498485b1b0e152699593d57828dc673af63cfd56_medium.jpg",
            "isVip": true,
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139528293,
          "number": 3,
          "status": 3,
          "deposit": 2.5,
          "walletDeposit": 2.5,
          "currencyId": null,
          "withdraw": 0,
          "walletWithdraw": 0,
          "user": {
            "id": 1910942,
            "name": "- run",
            "avatar": "https://avatars.steamstatic.com/8e9a682ff5225ac2cd3187c7215f7757277d59c6_medium.jpg",
            "isVip": false,
            "blm": false
          },
          "items": [
            {
              "id": 146425891,
              "itemId": 14144,
              "name": "Sticker | dennis | Krakow 2017",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 12047
            }
          ],
          "itemsCount": 1
        },
        {
          "id": 139528294,
          "number": 3,
          "status": 3,
          "deposit": 3.05,
          "walletDeposit": 250,
          "currencyId": null,
          "withdraw": 0,
          "walletWithdraw": 0,
          "user": {
            "id": 145529,
            "name": "❀",
            "avatar": "https://avatars.steamstatic.com/59087c71286c9cac8e086cb774cb028a0f9420a7_medium.jpg",
            "isVip": true,
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        },
        {
          "id": 139528295,
          "number": 3,
          "status": 3,
          "deposit": 0.36,
          "walletDeposit": 0.36,
          "currencyId": null,
          "withdraw": 0,
          "walletWithdraw": 0,
          "user": {
            "id": 69310,
            "name": "yaya",
            "avatar": "https://avatars.steamstatic.com/a397622d7dae7cfcff0c988489d780899a8524f8_medium.jpg",
            "isVip": null,
            "blm": false
          },
          "items": [],
          "itemsCount": 0
        }
      ]
    },
    "statistic": {
      "count": 8,
      "totalItems": 2,
      "totalDeposit": 16.73
    }
  }
}
прогонять можно по той же схеме

3. Получение текущего состояния Краша
curl -X GET "https://cs2run.app/crash/state" \
     -H "Accept: application/json, text/plain, */*" \
     -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2ODYxLCJpYXQiOjE3NzMyNDI4OTYsImV4cCI6MTc3NDEwNjg5Nn0.qnl3fU3m5LKIwzQAWQemydZ_M4cXvCNEMbe_ZjD2kP4" \
     -H "Accept-Language: ru"



{
  "success": true,
  "date": "2026-03-18T18:27:47.254Z",
  "data": {
    "delta": null,
    "status": 3,
    "statistic": {
      "count": 31,
      "totalDeposit": 114.00497136205435,
      "totalItems": 26
    },
    "history": [
      {
        "id": 6540134,
        "crash": 1.04
      },
      {
        "id": 6540133,
        "crash": 7.04
      },
      {
        "id": 6540132,
        "crash": 3.26
      },
      {
        "id": 6540131,
        "crash": 1
      },
      {
        "id": 6540130,
        "crash": 8.93
      },
      {
        "id": 6540129,
        "crash": 1.79
      },
      {
        "id": 6540128,
        "crash": 55.78
      },
      {
        "id": 6540127,
        "crash": 1.35
      },
      {
        "id": 6540126,
        "crash": 2.95
      },
      {
        "id": 6540125,
        "crash": 1
      },
      {
        "id": 6540124,
        "crash": 1.67
      },
      {
        "id": 6540123,
        "crash": 3.93
      }, 
      {
        "id": 6540122,
        "crash": 1.01
      },
      {
        "id": 6540121,
        "crash": 1.77
      },
      {
        "id": 6540120,
        "crash": 2.68
      },
      {
        "id": 6540119,
        "crash": 1.01
      },
      {
        "id": 6540118,
        "crash": 1.09
      },
      {
        "id": 6540117,
        "crash": 1.89
      },
      {
        "id": 6540116,
        "crash": 5.31
      },
      {
        "id": 6540115,
        "crash": 2.15
      },
      {
        "id": 6540114,
        "crash": 2.72
      },
      {
        "id": 6540113,
        "crash": 1.16
      },
      {
        "id": 6540112,
        "crash": 1.04
      },
      {
        "id": 6540111,
        "crash": 91.29
      },
      {
        "id": 6540110,
        "crash": 1.71
      },
      {
        "id": 6540109,
        "crash": 2.94
      },
      {
        "id": 6540108,
        "crash": 489.69
      },
      {
        "id": 6540107,
        "crash": 1.27
      },
      {
        "id": 6540106,
        "crash": 5138.15
      },
      {
        "id": 6540105,
        "crash": 1
      },
      {
        "id": 6540104,
        "crash": 1.43
      },
      {
        "id": 6540103,
        "crash": 5.61
      },
      {
        "id": 6540102,
        "crash": 1
      },
      {
        "id": 6540101,
        "crash": 1.19
      },
      {
        "id": 6540100,
        "crash": 1.46
      },
      {
        "id": 6540099,
        "crash": 1.25
      },
      {
        "id": 6540098,
        "crash": 10.47
      },
      {
        "id": 6540097,
        "crash": 8.28
      },
      {
        "id": 6540096,
        "crash": 8.65
      },
      {
        "id": 6540095,
        "crash": 11.5
      }
    ],
    "crash": 2.41,
    "userBet": null,
    "hash": "1ed10d8199ee4a23f1c7bb32dcd550303f24a89c06b62ffc461cc57e0b0126fa",
    "bets": [
      {
        "id": 705676245,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 11,
        "currencyId": 2,
        "coefficient": 2.15,
        "deposit": {
          "amount": 70,
          "walletAmount": 70,
          "items": []
        },
        "withdraw": {
          "amount": 150.18460083007812,
          "items": []
        },
        "user": {
          "id": 2982541,
          "name": "akimicoff",
          "avatar": "https://t.me/i/userpic/320/M1rpmtoaenysFbmNZ4p6wGDQ8tmfjjR_a3-_N8JcL1U.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676250,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 2,
        "currencyId": 1,
        "coefficient": 2,
        "deposit": {
          "amount": 12.269518852233887,
          "walletAmount": 1005,
          "items": []
        },
        "withdraw": {
          "amount": 24.539037704467773,
          "items": []
        },
        "user": {
          "id": 4102762,
          "name": "Артем Белов",
          "avatar": "https://sun9-40.userapi.com/s/v1/ig2/hhk5TlpWdSUoL99PoQ7U_OeITtr8tjwA-p7Wo8wDdeiuRi4cIHzaTFqpRnrdyzAm13GM_Esm-dk-68hJUYMVQT49.jpg?quality=95&crop=46,46,374,374&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360&ava=1&cs=100x100"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676224,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.37,
        "currencyId": 2,
        "coefficient": 1.37,
        "deposit": {
          "amount": 3.83,
          "walletAmount": 3.83,
          "items": [
            {
              "id": 1438009045,
              "itemId": 1438009045,
              "name": "Operation Wildfire Case",
              "colorId": 4,
              "gameId": 730,
              "reservedId": 3091
            }
          ]
        },
        "withdraw": {
          "amount": 5.247099876403809,
          "items": [
            {
              "id": "17059",
              "itemId": "17059",
              "name": "Sticker | Poorly Drawn Number K (Holo)",
              "colorId": "3",
              "gameId": "730",
              "reservedId": "18269"
            }
          ]
        },
        "user": {
          "id": 1107657,
          "name": "Diogão",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a4/a49411ffd9bb793d035a2c36a5842bfefef5d265_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676246,
        "gameId": 6540135,
        "status": 1,
        "coefficientAuto": 5,
        "currencyId": 2,
        "coefficient": null,
        "deposit": {
          "amount": 3,
          "walletAmount": 3,
          "items": []
        },
        "withdraw": {
          "amount": 0,
          "items": []
        },
        "user": {
          "id": 2550539,
          "name": "Prosto Andergr0ynd...",
          "avatar": "https://avatars.steamstatic.com/4662a47275c022a76ec07507ff777c31f531e64e_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676251,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 5,
        "currencyId": 2,
        "coefficient": 2.22,
        "deposit": {
          "amount": 3,
          "walletAmount": 3,
          "items": []
        },
        "withdraw": {
          "amount": 6.648270606994629,
          "items": []
        },
        "user": {
          "id": 3509974,
          "name": "Нанами кенто",
          "avatar": "https://avatars.steamstatic.com/6c5208004d0815f5722831d7b3739789d3617ed4_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676249,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.31,
        "currencyId": 2,
        "coefficient": 1.31,
        "deposit": {
          "amount": 2.440000057220459,
          "walletAmount": 2.44,
          "items": [
            {
              "id": "8184863639",
              "itemId": "8184863639",
              "name": "Sticker | volt (Holo) | Shanghai 2024",
              "colorId": "5",
              "gameId": "730",
              "reservedId": "28402"
            }
          ]
        },
        "withdraw": {
          "amount": 3.1963999271392822,
          "items": [
            {
              "id": "17310",
              "itemId": "17310",
              "name": "MAG-7 | BI83 Spectrum (Battle-Scarred)",
              "colorId": "3",
              "gameId": "730",
              "reservedId": "17220"
            }
          ]
        },
        "user": {
          "id": 3948132,
          "name": "sheets.benzo",
          "avatar": "https://avatars.steamstatic.com/e3892ef8326fcb13d907aa5973483cfb225b4379_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676244,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.07,
        "currencyId": 2,
        "coefficient": 1.07,
        "deposit": {
          "amount": 2.21,
          "walletAmount": 2.21,
          "items": [
            {
              "id": 1438009066,
              "itemId": 1438009066,
              "name": "Sealed Graffiti | Grimace (Monarch Blue)",
              "colorId": 4,
              "gameId": 730,
              "reservedId": 4911
            },
            {
              "id": 1438009067,
              "itemId": 1438009067,
              "name": "Inscribed Verdant Shawl of the Father",
              "colorId": 24,
              "gameId": 570,
              "reservedId": 22881
            },
            {
              "id": 1438009068,
              "itemId": 1438009068,
              "name": "Sticker | Liazz (Glitter) | Antwerp 2022",
              "colorId": 3,
              "gameId": 730,
              "reservedId": 19066
            }
          ]
        },
        "withdraw": {
          "amount": 2.3647000789642334,
          "items": [
            {
              "id": "52116",
              "itemId": "52116",
              "name": "Sticker | hampus (Holo) | Antwerp 2022",
              "colorId": "5",
              "gameId": "730",
              "reservedId": "19337"
            }
          ]
        },
        "user": {
          "id": 1107685,
          "name": "limbo",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/77/7795cff3515678e57bcf38e502781adfa228e45d_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676238,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.37,
        "currencyId": 2,
        "coefficient": 1.37,
        "deposit": {
          "amount": 2.18,
          "walletAmount": 2.18,
          "items": [
            {
              "id": 1438009059,
              "itemId": 1438009059,
              "name": "StatTrak™ P250 | Valence (Minimal Wear)",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 8747
            },
            {
              "id": 1438009060,
              "itemId": 1438009060,
              "name": "Inscribed Ornaments of the Wyrmforge Shard",
              "colorId": 23,
              "gameId": 570,
              "reservedId": 21105
            }
          ]
        },
        "withdraw": {
          "amount": 2.986600160598755,
          "items": [
            {
              "id": "61229",
              "itemId": "61229",
              "name": "StatTrak™ P90 | Randy Rush (Battle-Scarred)",
              "colorId": "3",
              "gameId": "730",
              "reservedId": "26770"
            }
          ]
        },
        "user": {
          "id": 1107665,
          "name": "skill 1338",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cee794621abc7cc17fe9adc84e39a6f6c5ec5c2_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676248,
        "gameId": 6540135,
        "status": 1,
        "coefficientAuto": 3,
        "currencyId": 2,
        "coefficient": null,
        "deposit": {
          "amount": 2,
          "walletAmount": 2,
          "items": []
        },
        "withdraw": {
          "amount": 0,
          "items": []
        },
        "user": {
          "id": 4115753,
          "name": "Eldorado",
          "avatar": "https://avatars.steamstatic.com/e6e3dc4454a3d6d878a993bb41e43eb1c2ba501f_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676228,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.33,
        "currencyId": 2,
        "coefficient": 1.33,
        "deposit": {
          "amount": 1.56,
          "walletAmount": 1.56,
          "items": [
            {
              "id": 1438009049,
              "itemId": 1438009049,
              "name": "Inscribed Pauldron of the Dragon's Disciple",
              "colorId": 22,
              "gameId": 570,
              "reservedId": 21161
            }
          ]
        },
        "withdraw": {
          "amount": 2.0748000144958496,
          "items": [
            {
              "id": "60482",
              "itemId": "60482",
              "name": "AK-47 | Wintergreen (Well-Worn)",
              "colorId": "1",
              "gameId": "730",
              "reservedId": "27177"
            }
          ]
        },
        "user": {
          "id": 1107637,
          "name": "Grafite",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/0c/0c936268fb706650950208fa99ba3e309c714f26_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676232,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.4,
        "currencyId": 2,
        "coefficient": 1.4,
        "deposit": {
          "amount": 1.43,
          "walletAmount": 1.43,
          "items": [
            {
              "id": 1438009053,
              "itemId": 1438009053,
              "name": "Inscribed Sky-High Warship Munitions",
              "colorId": 22,
              "gameId": 570,
              "reservedId": 22039
            }
          ]
        },
        "withdraw": {
          "amount": 2.001999855041504,
          "items": [
            {
              "id": "58964",
              "itemId": "58964",
              "name": "Sticker | Aleksib (Glitter) | Copenhagen 2024",
              "colorId": "3",
              "gameId": "730",
              "reservedId": "25824"
            }
          ]
        },
        "user": {
          "id": 1107601,
          "name": "Y.o.L.o",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fa/fa1e33807a3a2ff6990e17563be999b42f4d7723_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676234,
        "gameId": 6540135,
        "status": 1,
        "coefficientAuto": 3.98,
        "currencyId": 2,
        "coefficient": null,
        "deposit": {
          "amount": 1.3,
          "walletAmount": 1.3,
          "items": [
            {
              "id": 1438009055,
              "itemId": 1438009055,
              "name": "Inscribed Crown of Nezzureem",
              "colorId": 22,
              "gameId": 570,
              "reservedId": 18821
            }
          ]
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 1107523,
          "name": "All sweet one ♥ CSGETTO.COM",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/37/370f9694f4b81b1ca7441083812d99f43407fd30_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676233,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.3,
        "currencyId": 1,
        "coefficient": 1.3,
        "deposit": {
          "amount": 1.2199931144714355,
          "walletAmount": 99.93,
          "items": [
            {
              "id": "8184865311",
              "itemId": "8184865311",
              "name": "Kinetic: The Knight's Repose",
              "colorId": "22",
              "gameId": "570",
              "reservedId": "23835"
            }
          ]
        },
        "withdraw": {
          "amount": 1.5859910249710083,
          "items": [
            {
              "id": "61345",
              "itemId": "61345",
              "name": "Sticker | chopper (Gold, Champion) | Shanghai 2024",
              "colorId": "7",
              "gameId": "730",
              "reservedId": "28555"
            }
          ]
        },
        "user": {
          "id": 4115619,
          "name": "013",
          "avatar": "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676239,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 2.39,
        "currencyId": 2,
        "coefficient": 2.39,
        "deposit": {
          "amount": 0.78,
          "walletAmount": 0.78,
          "items": [
            {
              "id": 1438009061,
              "itemId": 1438009061,
              "name": "Sealed Graffiti | OMG (Bazooka Pink)",
              "colorId": 4,
              "gameId": 730,
              "reservedId": 5247
            }
          ]
        },
        "withdraw": {
          "amount": 1.8641999959945679,
          "items": [
            {
              "id": "61480",
              "itemId": "61480",
              "name": "Sticker | HEROIC (Gold) | Shanghai 2024",
              "colorId": "7",
              "gameId": "730",
              "reservedId": "27999"
            }
          ]
        },
        "user": {
          "id": 1107599,
          "name": "vImCrAzYv",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/82/82c558d3071b85eb2e8da070fb2eefa9be5f0e44_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676237,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.43,
        "currencyId": 2,
        "coefficient": 1.43,
        "deposit": {
          "amount": 0.74,
          "walletAmount": 0.74,
          "items": [
            {
              "id": 1438009058,
              "itemId": 1438009058,
              "name": "Souvenir Tec-9 | Mummy's Rot (Battle-Scarred)",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 20703
            }
          ]
        },
        "withdraw": {
          "amount": 1.0582000017166138,
          "items": [
            {
              "id": "55822",
              "itemId": "55822",
              "name": "Ambush Sticker Capsule",
              "colorId": "4",
              "gameId": "730",
              "reservedId": "21385"
            }
          ]
        },
        "user": {
          "id": 1107580,
          "name": "ayi",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/68/689a5530ca58ced804dd5148d15d804ae4a4113a_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676230,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.1,
        "currencyId": 2,
        "coefficient": 1.1,
        "deposit": {
          "amount": 0.62,
          "walletAmount": 0.62,
          "items": [
            {
              "id": 1438009050,
              "itemId": 1438009050,
              "name": "Speed Demon",
              "colorId": 21,
              "gameId": 570,
              "reservedId": 26414
            }
          ]
        },
        "withdraw": {
          "amount": 0.6820000410079956,
          "items": [
            {
              "id": "61150",
              "itemId": "61150",
              "name": "SSG 08 | Blush Pour (Well-Worn)",
              "colorId": "1",
              "gameId": "730",
              "reservedId": "27830"
            }
          ]
        },
        "user": {
          "id": 1107644,
          "name": "Senhor Fernando",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/74/746e9e47a85a3febf1fdd0b7222e4dbe4c0fdda5_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676243,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.21,
        "currencyId": 2,
        "coefficient": 1.21,
        "deposit": {
          "amount": 0.58,
          "walletAmount": 0.58,
          "items": [
            {
              "id": 1438009065,
              "itemId": 1438009065,
              "name": "P90 | Neoqueen (Field-Tested)",
              "colorId": 3,
              "gameId": 730,
              "reservedId": 20027
            }
          ]
        },
        "withdraw": {
          "amount": 0.7017999887466431,
          "items": [
            {
              "id": "61909",
              "itemId": "61909",
              "name": "UMP-45 | Late Night Transit (Field-Tested)",
              "colorId": "1",
              "gameId": "730",
              "reservedId": "27909"
            }
          ]
        },
        "user": {
          "id": 1107664,
          "name": "LoLo.Mr.",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/77/7778ed1fd6b6125b7825747b317df978086c3076_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676227,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.96,
        "currencyId": 2,
        "coefficient": 1.96,
        "deposit": {
          "amount": 0.54,
          "walletAmount": 0.54,
          "items": [
            {
              "id": 1438009048,
              "itemId": 1438009048,
              "name": "P2000 | Oceanic (Well-Worn)",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 3175
            }
          ]
        },
        "withdraw": {
          "amount": 1.05840003490448,
          "items": [
            {
              "id": "55822",
              "itemId": "55822",
              "name": "Ambush Sticker Capsule",
              "colorId": "4",
              "gameId": "730",
              "reservedId": "21385"
            }
          ]
        },
        "user": {
          "id": 1107481,
          "name": "MiSs><[J]>oyc<[E]>",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c1/c112a016bcb440d775fc1fbf4f77efba93a8dfcb_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676242,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.17,
        "currencyId": 2,
        "coefficient": 1.17,
        "deposit": {
          "amount": 0.54,
          "walletAmount": 0.54,
          "items": [
            {
              "id": 1438009064,
              "itemId": 1438009064,
              "name": "StatTrak™ Glock-18 | Warhawk (Well-Worn)",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 7902
            }
          ]
        },
        "withdraw": {
          "amount": 0.6317999958992004,
          "items": [
            {
              "id": "61957",
              "itemId": "61957",
              "name": "XM1014 | Solitude (Battle-Scarred)",
              "colorId": "3",
              "gameId": "730",
              "reservedId": "27956"
            }
          ]
        },
        "user": {
          "id": 1107655,
          "name": "thefrick10",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/39/397461e7ecd76148f6ddf62b4340bee71ee3178e_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676252,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 2,
        "currencyId": 2,
        "coefficient": 1.3,
        "deposit": {
          "amount": 0.5,
          "walletAmount": 0.5,
          "items": []
        },
        "withdraw": {
          "amount": 0.6479693055152893,
          "items": []
        },
        "user": {
          "id": 306476,
          "name": "hello+w",
          "avatar": "https://avatars.steamstatic.com/a16f7f322f0055e434a8bc813f1fdf736de1e69f_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676226,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.39,
        "currencyId": 2,
        "coefficient": 1.39,
        "deposit": {
          "amount": 0.48,
          "walletAmount": 0.48,
          "items": [
            {
              "id": 1438009047,
              "itemId": 1438009047,
              "name": "Heroic Cleaver of Delicacies of Butchery",
              "colorId": 20,
              "gameId": 570,
              "reservedId": 15424
            }
          ]
        },
        "withdraw": {
          "amount": 0.667199969291687,
          "items": [
            {
              "id": "60493",
              "itemId": "60493",
              "name": "AWP | Arsenic Spill (Battle-Scarred)",
              "colorId": "1",
              "gameId": "730",
              "reservedId": "27218"
            }
          ]
        },
        "user": {
          "id": 1107534,
          "name": "PIGI",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/01/01a11df79d7dd6fb390c008a5657103efd717e1d_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      },
      {
        "id": 705676223,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 1.22,
        "currencyId": 2,
        "coefficient": 1.22,
        "deposit": {
          "amount": 0.44,
          "walletAmount": 0.44,
          "items": [
            {
              "id": 1438009044,
              "itemId": 1438009044,
              "name": "Sticker | Ax1Le | Stockholm 2021",
              "colorId": 1,
              "gameId": 730,
              "reservedId": 18072
            }
          ]
        },
        "withdraw": {
          "amount": 0.5368000268936157,
          "items": [
            {
              "id": "60881",
              "itemId": "60881",
              "name": "P90 | Wave Breaker (Battle-Scarred)",
              "colorId": "3",
              "gameId": "730",
              "reservedId": "27771"
            }
          ]
        },
        "user": {
          "id": 1107606,
          "name": "vags13",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3f/3f79e78f79fcd50381af208d239b2946c8dc0877_medium.jpg"
        },
        "likes": 0,
        "showLike": false
      }
    ]
  }
}
Тут  тоже просто 

"status":  1 2 3 
1 прием ставок 
2 идет игра 
3 закончена игра 

"bets": [
      {
        "id": 705676245,
        "gameId": 6540135,
        "status": 2,
        "coefficientAuto": 11,
        "currencyId": 2,
        "coefficient": 2.15,
        "deposit": {
          "amount": 70,
          "walletAmount": 70,
          "items": []
        },
        "withdraw": {
          "amount": 150.18460083007812,
          "items": []
        },
        "user": {
          "id": 2982541,
          "name": "akimicoff",
          "avatar": "https://t.me/i/userpic/320/M1rpmtoaenysFbmNZ4p6wGDQ8tmfjjR_a3-_N8JcL1U.jpg"
        },
        "likes": 0,
        "showLike": false
      },
     
Тут "deposit": {
          "amount": 3, сумма ставки в баксах 

coefficient коэффициент на котором он выиграл 
Когда "coefficient": null, это значит он проиграл 
Когда у человека "coefficient": 2 и  "deposit": {
          "amount": 3,
То сайт отдал 3$ 

4. получение прошлой игры краш 
curl -X GET 'https://cs2run.app/games/6540158' -H 'Accept:application/json, text/plain, */*' -H 'Authorization:JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2ODYxLCJpYXQiOjE3NzMyNDI4OTYsImV4cCI6MTc3NDEwNjg5Nn0.qnl3fU3m5LKIwzQAWQemydZ_M4cXvCNEMbe_ZjD2kP4' -H 'Accept-Language:ru'

тут аналогично
{
  "success": true,
  "date": "2026-03-18T18:38:24.508Z",
  "data": {
    "id": 6540158,
    "status": 3,
    "crash": 1.23,
    "salt": "f2feeb4f946548dadca12ae933a01e10",
    "isRefund": false,
    "hashRound": "0f42f3c2d109fa9838e19583288baf2a98e8554c9d1d8dd0bb6902b12d776d50",
    "bets": [
      {
        "id": 705676831,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.01,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": 1.01,
        "deposit": {
          "amount": 0.91,
          "walletAmount": 0.91,
          "items": [
            {
              "id": 1438009596,
              "itemId": 1438009596
            }
          ]
        },
        "withdraw": {
          "amount": 0.92,
          "items": []
        },
        "user": {
          "id": 1107644,
          "name": "Senhor Fernando",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/74/746e9e47a85a3febf1fdd0b7222e4dbe4c0fdda5_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676823,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.04,
        "createdAt": "2026-03-18T18:37:37.000Z",
        "coefficient": 1.04,
        "deposit": {
          "amount": 9.47,
          "walletAmount": 9.47,
          "items": [
            {
              "id": 1438009589,
              "itemId": 1438009589
            }
          ]
        },
        "withdraw": {
          "amount": 9.85,
          "items": []
        },
        "user": {
          "id": 1107657,
          "name": "Diogão",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a4/a49411ffd9bb793d035a2c36a5842bfefef5d265_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676838,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.05,
        "createdAt": "2026-03-18T18:37:39.000Z",
        "coefficient": 1.05,
        "deposit": {
          "amount": 0.94,
          "walletAmount": 0.94,
          "items": [
            {
              "id": 1438009602,
              "itemId": 1438009602
            }
          ]
        },
        "withdraw": {
          "amount": 0.99,
          "items": []
        },
        "user": {
          "id": 1107580,
          "name": "ayi",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/68/689a5530ca58ced804dd5148d15d804ae4a4113a_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676844,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.05,
        "createdAt": "2026-03-18T18:37:39.000Z",
        "coefficient": 1.05,
        "deposit": {
          "amount": 1.39,
          "walletAmount": 1.39,
          "items": [
            {
              "id": 1438009608,
              "itemId": 1438009608
            }
          ]
        },
        "withdraw": {
          "amount": 1.46,
          "items": []
        },
        "user": {
          "id": 1107664,
          "name": "LoLo.Mr.",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/77/7778ed1fd6b6125b7825747b317df978086c3076_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676848,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.06,
        "createdAt": "2026-03-18T18:37:45.000Z",
        "coefficient": 1.06,
        "deposit": {
          "amount": 0.57,
          "walletAmount": 46.69,
          "items": [
            {
              "id": 1438009610,
              "itemId": 1438009610
            }
          ]
        },
        "withdraw": {
          "amount": 0.6,
          "items": []
        },
        "user": {
          "id": 4108771,
          "name": "مورودجون كوبيلوف",
          "avatar": "https://cloud.this.team/rimming/20231204/127453i070121g1U63S.png",
          "isVip": null,
          "blm": false
        },
        "likes": 0
      },
      {
        "id": 705676829,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.07,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": 1.07,
        "deposit": {
          "amount": 0.81,
          "walletAmount": 0.81,
          "items": [
            {
              "id": 1438009594,
              "itemId": 1438009594
            }
          ]
        },
        "withdraw": {
          "amount": 0.87,
          "items": []
        },
        "user": {
          "id": 1107637,
          "name": "Grafite",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/0c/0c936268fb706650950208fa99ba3e309c714f26_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676839,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.07,
        "createdAt": "2026-03-18T18:37:39.000Z",
        "coefficient": 1.07,
        "deposit": {
          "amount": 0.44,
          "walletAmount": 0.44,
          "items": [
            {
              "id": 1438009603,
              "itemId": 1438009603
            }
          ]
        },
        "withdraw": {
          "amount": 0.47,
          "items": []
        },
        "user": {
          "id": 1107665,
          "name": "skill 1338",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5c/5cee794621abc7cc17fe9adc84e39a6f6c5ec5c2_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676825,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.08,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": 1.08,
        "deposit": {
          "amount": 0.58,
          "walletAmount": 0.58,
          "items": [
            {
              "id": 1438009590,
              "itemId": 1438009590
            }
          ]
        },
        "withdraw": {
          "amount": 0.63,
          "items": []
        },
        "user": {
          "id": 1107636,
          "name": "kongpakadet",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/50/50711b06e038448aef73c6fdda674def8acf8ec4_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676830,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.09,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": 1.09,
        "deposit": {
          "amount": 0.91,
          "walletAmount": 0.91,
          "items": [
            {
              "id": 1438009595,
              "itemId": 1438009595
            }
          ]
        },
        "withdraw": {
          "amount": 0.99,
          "items": []
        },
        "user": {
          "id": 1107577,
          "name": "Rodrii109",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/58/58a516c5e7840b09b3cfd14c234296c3027f27e4_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676834,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.09,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": 1.09,
        "deposit": {
          "amount": 1.56,
          "walletAmount": 1.56,
          "items": [
            {
              "id": 1438009598,
              "itemId": 1438009598
            }
          ]
        },
        "withdraw": {
          "amount": 1.7,
          "items": []
        },
        "user": {
          "id": 1107601,
          "name": "Y.o.L.o",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fa/fa1e33807a3a2ff6990e17563be999b42f4d7723_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676842,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.1,
        "createdAt": "2026-03-18T18:37:39.000Z",
        "coefficient": 1.1,
        "deposit": {
          "amount": 0.95,
          "walletAmount": 0.95,
          "items": [
            {
              "id": 1438009606,
              "itemId": 1438009606
            }
          ]
        },
        "withdraw": {
          "amount": 1.05,
          "items": []
        },
        "user": {
          "id": 1107529,
          "name": "xxbonixx",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d9/d909039eb824539590e29be76acacd750ba8c52d_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676826,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.13,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": 1.13,
        "deposit": {
          "amount": 3.87,
          "walletAmount": 3.87,
          "items": [
            {
              "id": 1438009591,
              "itemId": 1438009591
            },
            {
              "id": 1438009592,
              "itemId": 1438009592
            }
          ]
        },
        "withdraw": {
          "amount": 4.37,
          "items": []
        },
        "user": {
          "id": 1107534,
          "name": "PIGI",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/01/01a11df79d7dd6fb390c008a5657103efd717e1d_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676841,
        "gameId": 6540158,
        "status": 2,
        "coefficientAuto": 1.19,
        "createdAt": "2026-03-18T18:37:39.000Z",
        "coefficient": 1.19,
        "deposit": {
          "amount": 1.56,
          "walletAmount": 1.56,
          "items": [
            {
              "id": 1438009605,
              "itemId": 1438009605
            }
          ]
        },
        "withdraw": {
          "amount": 1.86,
          "items": []
        },
        "user": {
          "id": 1107628,
          "name": "Minaray",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ed/ed0eab8394134684bb5fe2487bfb23a107ab0fac_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676840,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 1.26,
        "createdAt": "2026-03-18T18:37:39.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 0.63,
          "walletAmount": 0.63,
          "items": [
            {
              "id": 1438009604,
              "itemId": 1438009604
            }
          ]
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 1107599,
          "name": "vImCrAzYv",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/82/82c558d3071b85eb2e8da070fb2eefa9be5f0e44_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676847,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 1.3,
        "createdAt": "2026-03-18T18:37:44.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 0.96,
          "walletAmount": 79.01,
          "items": []
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 3829224,
          "name": "Екатерина Петрова",
          "avatar": "https://cloud.this.team/rimming/20231204/127453i070121g1U63S.png",
          "isVip": null,
          "blm": false
        },
        "likes": 0
      },
      {
        "id": 705676828,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 1.36,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 1.21,
          "walletAmount": 1.21,
          "items": [
            {
              "id": 1438009593,
              "itemId": 1438009593
            }
          ]
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 1107481,
          "name": "MiSs><[J]>oyc<[E]>",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c1/c112a016bcb440d775fc1fbf4f77efba93a8dfcb_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676836,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 1.41,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 0.36,
          "walletAmount": 0.36,
          "items": [
            {
              "id": 1438009600,
              "itemId": 1438009600
            }
          ]
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 1107523,
          "name": "All sweet one ♥ CSGETTO.COM",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/37/370f9694f4b81b1ca7441083812d99f43407fd30_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676822,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 1.57,
        "createdAt": "2026-03-18T18:37:37.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 0.47,
          "walletAmount": 0.47,
          "items": [
            {
              "id": 1438009588,
              "itemId": 1438009588
            }
          ]
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 1107606,
          "name": "vags13",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3f/3f79e78f79fcd50381af208d239b2946c8dc0877_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676837,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 1.61,
        "createdAt": "2026-03-18T18:37:39.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 0.2,
          "walletAmount": 0.2,
          "items": [
            {
              "id": 1438009601,
              "itemId": 1438009601
            }
          ]
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 1107703,
          "name": "Li Wang",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/eb/eb746ddd08cd7d351bffbc234112b219afee868d_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676845,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 1.7,
        "createdAt": "2026-03-18T18:37:39.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 1.26,
          "walletAmount": 1.26,
          "items": [
            {
              "id": 1438009609,
              "itemId": 1438009609
            }
          ]
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 1107685,
          "name": "limbo",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/77/7795cff3515678e57bcf38e502781adfa228e45d_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676835,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 1.78,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 0.77,
          "walletAmount": 0.77,
          "items": [
            {
              "id": 1438009599,
              "itemId": 1438009599
            }
          ]
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 1107650,
          "name": "...",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/45/4558836e1b2164d2823eb2810554d25a35e0a18e_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676832,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 2,
        "createdAt": "2026-03-18T18:37:39.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 0.55,
          "walletAmount": 45,
          "items": []
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 4087793,
          "name": "SvVvE",
          "avatar": "https://avatars.steamstatic.com/099b2ecb5a4680e0e1811073ce8ab5b9b3b61bbb_medium.jpg",
          "isVip": null,
          "blm": false
        },
        "likes": 0
      },
      {
        "id": 705676843,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 2.36,
        "createdAt": "2026-03-18T18:37:39.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 1.21,
          "walletAmount": 1.21,
          "items": [
            {
              "id": 1438009607,
              "itemId": 1438009607
            }
          ]
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 1107655,
          "name": "thefrick10",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/39/397461e7ecd76148f6ddf62b4340bee71ee3178e_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676846,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 2.5,
        "createdAt": "2026-03-18T18:37:40.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 0.92,
          "walletAmount": 75,
          "items": []
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 2941555,
          "name": "Ранэль Халиуллин",
          "avatar": "https://cloud.this.team/rimming/20231204/127453i070121g1U63S.png",
          "isVip": true,
          "blm": false
        },
        "likes": 0
      },
      {
        "id": 705676833,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 2.75,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 0.83,
          "walletAmount": 0.83,
          "items": [
            {
              "id": 1438009597,
              "itemId": 1438009597
            }
          ]
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 1107635,
          "name": "Alenaberry",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e3/e3eefc25c3bf8c23347cca9868899f2f59f0c864_medium.jpg",
          "isVip": null,
          "blm": true
        },
        "likes": 0
      },
      {
        "id": 705676850,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 3.22,
        "createdAt": "2026-03-18T18:37:46.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 4.4,
          "walletAmount": 4.4,
          "items": []
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 232369,
          "name": "tinder 10lvl",
          "avatar": "https://avatars.steamstatic.com/1b63dae65763ba36794c0570dad1874ea4e44183_medium.jpg",
          "isVip": null,
          "blm": false
        },
        "likes": 0
      },
      {
        "id": 705676824,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 5,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 1,
          "walletAmount": 1,
          "items": []
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 3509974,
          "name": "Нанами кенто",
          "avatar": "https://avatars.steamstatic.com/6c5208004d0815f5722831d7b3739789d3617ed4_medium.jpg",
          "isVip": null,
          "blm": false
        },
        "likes": 0
      },
      {
        "id": 705676827,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 10,
        "createdAt": "2026-03-18T18:37:38.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 6.1,
          "walletAmount": 500,
          "items": []
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 4115634,
          "name": "KOPLER WTF?",
          "avatar": "https://avatars.steamstatic.com/ba502a7b39802e6dc3d6c79a0eacb1fc2a846a51_medium.jpg",
          "isVip": null,
          "blm": false
        },
        "likes": 0
      },
      {
        "id": 705676849,
        "gameId": 6540158,
        "status": 3,
        "coefficientAuto": 22,
        "createdAt": "2026-03-18T18:37:45.000Z",
        "coefficient": null,
        "deposit": {
          "amount": 25,
          "walletAmount": 25,
          "items": []
        },
        "withdraw": {
          "amount": null,
          "items": []
        },
        "user": {
          "id": 2982541,
          "name": "akimicoff",
          "avatar": "https://t.me/i/userpic/320/M1rpmtoaenysFbmNZ4p6wGDQ8tmfjjR_a3-_N8JcL1U.jpg",
          "isVip": null,
          "blm": false
        },
        "likes": 0
      }
    ]
  }
} 

5. джекран
тут только просмотр старых игры
{
  "success": true,
  "date": "2026-03-18T18:47:32.752Z",
  "data": {
    "round": {
      "id": 1,
      "status": 4,
      "hash": "b1569fa8eff3db97c40a357456f9ac6e3f4c5110bc6fa9f5c3e8b335e3c45823",
      "winnerBet": {
        "id": 3,
        "deposit": 11.99,
        "walletDeposit": null,
        "withdraw": 26.13,
        "status": 2,
        "ticketsFrom": 1498,
        "jackrunRoundId": 1,
        "ticketsTo": 2697,
        "ticketsCount": 1199,
        "user": {
          "id": 1003,
          "name": "YouRun",
          "avatar": "https://cloud.this.team/rimming/20230307/1003i2152354fCdXP.jpeg",
          "blm": false
        },
        "items": null
      },
      "winnerTicket": 2355,
      "totalBank": 26.94,
      "salt": null,
      "fairPlayNumber": null
    },
    "bets": [
      {
        "id": 1,
        "deposit": 9.96,
        "walletDeposit": null,
        "withdraw": 0,
        "status": 3,
        "ticketsFrom": 1,
        "jackrunRoundId": 1,
        "ticketsTo": 997,
        "ticketsCount": 996,
        "user": {
          "id": 1786259,
          "name": "Йохан",
          "avatar": "https://cloud.this.team/123/06a531bda65c11eeb0ba36adaf03b217_upscaled.jpeg",
          "blm": false
        },
        "items": [
          {
            "id": 1,
            "itemId": 3384,
            "name": "StatTrak™ AUG | Bengal Tiger (Well-Worn)",
            "colorId": 5,
            "gameId": 730,
            "reservedId": 7169
          }
        ]
      },
      {
        "id": 2,
        "deposit": 4.99,
        "walletDeposit": null,
        "withdraw": 0,
        "status": 3,
        "ticketsFrom": 998,
        "jackrunRoundId": 1,
        "ticketsTo": 1497,
        "ticketsCount": 499,
        "user": {
          "id": 3,
          "name": "heisenberg CSGORUN",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/18/18986139e4086de1c6954e6ced2a97bd27b7ddf7_medium.jpg",
          "blm": false
        },
        "items": [
          {
            "id": 2,
            "itemId": 4587,
            "name": "StatTrak™ P2000 | Pulse (Factory New)",
            "colorId": 1,
            "gameId": 730,
            "reservedId": 8646
          }
        ]
      },
      {
        "id": 3,
        "deposit": 11.99,
        "walletDeposit": null,
        "withdraw": 26.13,
        "status": 2,
        "ticketsFrom": 1498,
        "jackrunRoundId": 1,
        "ticketsTo": 2697,
        "ticketsCount": 1199,
        "user": {
          "id": 1003,
          "name": "YouRun",
          "avatar": "https://cloud.this.team/rimming/20230307/1003i2152354fCdXP.jpeg",
          "blm": false
        },
        "items": [
          {
            "id": 3,
            "itemId": 11410,
            "name": "Souvenir P90 | Sand Spray (Factory New)",
            "colorId": 4,
            "gameId": 730,
            "reservedId": 6727
          }
        ]
      }
    ]
  }
}

curl -X GET 'https://cs2run.app/jackrun/show/192929292929' -H 'Accept:application/json, text/plain, */*' -H 'Authorization:JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2ODYxLCJpYXQiOjE3NzMyNDI4OTYsImV4cCI6MTc3NDEwNjg5Nn0.qnl3fU3m5LKIwzQAWQemydZ_M4cXvCNEMbe_ZjD2kP4' -H 'Accept-Language:ru'

то есть тут достатояно посмотреть сбда 
"data": {
    "round": {
      "id": 1,
      "status": 4,
      "hash": "b1569fa8eff3db97c40a357456f9ac6e3f4c5110bc6fa9f5c3e8b335e3c45823",
      "winnerBet": {
        "id": 3,
        "deposit": 11.99,
        "walletDeposit": null,
        "withdraw": 26.13,
        "status": 2,
        "ticketsFrom": 1498,
        "jackrunRoundId": 1,
        "ticketsTo": 2697,
        "ticketsCount": 1199,
        "user": {
          "id": 1003,
          "name": "YouRun",
          "avatar": "https://cloud.this.team/rimming/20230307/1003i2152354fCdXP.jpeg",
          "blm": false
        },
        "items": null
      },
      "winnerTicket": 2355,
      "totalBank": 26.94,
      "salt": null,
      "fairPlayNumber": null
    },
    общая сумма ставок в жтой игре в баксах "totalBank": 26.94,
    сколько аыиграл человек "withdraw": 26.13
    то есть тут сайт забрал totalBank минус withdraw равно 0.81$ ( это уходит а счет банка сацта как комиссия)
    
можно начать с 1 игры и идти в перед до тех пор пока не даст  ответ {
  "success": true,
  "date": "2026-03-18T18:59:21.364Z",
  "data": {
    "error": "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
    "payload": {}
  }
}
это значит что игра еще не началась и не закончилась , просто будем раз в 15 сек делать запрос на жту игру пока не даст ответ в нужнос формате 


6. роллран

curl -X GET "https://cs2run.app/v1/rollrun/state" \
     -H "Accept: application/json, text/plain, */*" \
     -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2ODYxLCJpYXQiOjE3NzMyNDI4OTYsImV4cCI6MTc3NDEwNjg5Nn0.qnl3fU3m5LKIwzQAWQemydZ_M4cXvCNEMbe_ZjD2kP4" \
     -H "Accept-Language: ru"


 {
  "success": true,
  "date": "2026-03-18 19:07:33.366881408 +0000 UTC m=+14532.795316721",
  "data": {
    "rounds": [
      {
        "id": 16338046,
        "status": 4,
        "randomOffset": 0.4099999964237213,
        "hash": "",
        "deposit": 0.12,
        "withdraw": 0,
        "type": "BOT_PVP",
        "winnerId": 3509124,
        "result": 2,
        "playersCount": 5,
        "prepareTime": -2170893131,
        "rollingTime": -2170883131,
        "serverSeed": "",
        "bets": [
          {
            "id": 53564008,
            "clientSeed": "b053423ce55d214aaa94",
            "nonce": 3865,
            "position": 0,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 852460,
              "name": "Yamimos Ral",
              "avatar": "https://avatars.steamstatic.com/d202481375df93e155387efac97561c935e504c9_medium.jpg"
            }
          },
          {
            "id": 53564009,
            "clientSeed": "48c094af68e555990bd7",
            "nonce": 2773440,
            "position": 1,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509122,
              "name": "Bot Gustaf",
              "avatar": "https://cloud.this.team/bota/bot-gustaf.jpg"
            }
          },
          {
            "id": 53564010,
            "clientSeed": "e6968f7e42f740a54048",
            "nonce": 2777133,
            "position": 2,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509124,
              "name": "Bot Hmelnitski",
              "avatar": "https://cloud.this.team/bota/bot-hmelnitski.jpg"
            }
          },
          {
            "id": 53564011,
            "clientSeed": "dd01080d47e3803db3a6",
            "nonce": 2778747,
            "position": 3,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          },
          {
            "id": 53564012,
            "clientSeed": "11837a2ed4e64c94e338",
            "nonce": 2776802,
            "position": 4,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509126,
              "name": "Bot Kasimir",
              "avatar": "https://cloud.this.team/bota/bot-kasimir.jpg"
            }
          }
        ]
      },
      {
        "id": 16355536,
        "status": 4,
        "randomOffset": 0.5199999809265137,
        "hash": "",
        "deposit": 0.25,
        "withdraw": 0,
        "type": "BOT_PVP",
        "winnerId": 3509126,
        "result": 3,
        "playersCount": 5,
        "prepareTime": -1965938990,
        "rollingTime": -1965928990,
        "serverSeed": "",
        "bets": [
          {
            "id": 53638314,
            "clientSeed": "e65fee4f438d4c393935",
            "nonce": 65509,
            "position": 0,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 574805,
              "name": "hurmaRTX",
              "avatar": "https://avatars.steamstatic.com/3bd668bae5cb109289dacd3a20a9a7cb7ec16c6d_medium.jpg"
            }
          },
          {
            "id": 53638316,
            "clientSeed": "9179b4a5f642cd4b6e95",
            "nonce": 2788055,
            "position": 1,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509124,
              "name": "Bot Hmelnitski",
              "avatar": "https://cloud.this.team/bota/bot-hmelnitski.jpg"
            }
          },
          {
            "id": 53638318,
            "clientSeed": "5336cc0b53a79bfda0a1",
            "nonce": 2787853,
            "position": 2,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509126,
              "name": "Bot Kasimir",
              "avatar": "https://cloud.this.team/bota/bot-kasimir.jpg"
            }
          },
          {
            "id": 53638320,
            "clientSeed": "a664fc279ded6232b585",
            "nonce": 2787854,
            "position": 3,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509126,
              "name": "Bot Kasimir",
              "avatar": "https://cloud.this.team/bota/bot-kasimir.jpg"
            }
          },
          {
            "id": 53638322,
            "clientSeed": "4ee93ef59b334959e09b",
            "nonce": 2789931,
            "position": 4,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          }
        ]
      },
      {
        "id": 16355538,
        "status": 4,
        "randomOffset": 0.5799999833106995,
        "hash": "",
        "deposit": 0.25,
        "withdraw": 0,
        "type": "BOT_PVP",
        "winnerId": 3509121,
        "result": 1,
        "playersCount": 4,
        "prepareTime": -1965938264,
        "rollingTime": -1965928264,
        "serverSeed": "",
        "bets": [
          {
            "id": 53638324,
            "clientSeed": "89660e74577d8e758ae2",
            "nonce": 65510,
            "position": 0,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 574805,
              "name": "hurmaRTX",
              "avatar": "https://avatars.steamstatic.com/3bd668bae5cb109289dacd3a20a9a7cb7ec16c6d_medium.jpg"
            }
          },
          {
            "id": 53638326,
            "clientSeed": "9fa5200d6708f70e9195",
            "nonce": 2789932,
            "position": 1,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          },
          {
            "id": 53638328,
            "clientSeed": "c78a325b59ceb2873182",
            "nonce": 2789933,
            "position": 2,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          },
          {
            "id": 53638330,
            "clientSeed": "be93e08edcb1edb12816",
            "nonce": 2789074,
            "position": 3,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509125,
              "name": "Bot Giray",
              "avatar": "https://cloud.this.team/bota/bot-giray.jpg"
            }
          }
        ]
      },
      {
        "id": 16490254,
        "status": 4,
        "randomOffset": 0.7099999785423279,
        "hash": "",
        "deposit": 0.12,
        "withdraw": 0,
        "type": "BOT_PVP",
        "winnerId": 3509124,
        "result": 1,
        "playersCount": 5,
        "prepareTime": -324061180,
        "rollingTime": -324051180,
        "serverSeed": "",
        "bets": [
          {
            "id": 54200618,
            "clientSeed": "1347f004391820c6862d",
            "nonce": 1555,
            "position": 0,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 624153,
              "name": "skvrxx csgoskins",
              "avatar": "https://avatars.steamstatic.com/06fb8a4436975a23f066865208a578e210364371_medium.jpg"
            }
          },
          {
            "id": 54200620,
            "clientSeed": "f682e119615005550222",
            "nonce": 2870500,
            "position": 1,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509124,
              "name": "Bot Hmelnitski",
              "avatar": "https://cloud.this.team/bota/bot-hmelnitski.jpg"
            }
          },
          {
            "id": 54200622,
            "clientSeed": "5857f199bcb851914138",
            "nonce": 2871688,
            "position": 2,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          },
          {
            "id": 54200624,
            "clientSeed": "e58fcbf72d17ae39708e",
            "nonce": 2866771,
            "position": 3,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509122,
              "name": "Bot Gustaf",
              "avatar": "https://cloud.this.team/bota/bot-gustaf.jpg"
            }
          },
          {
            "id": 54200626,
            "clientSeed": "abfaec664f561ea02e55",
            "nonce": 2871689,
            "position": 4,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          }
        ]
      }
    ],
    "statistic": {
      "count": 0,
      "activeCount": 4
    }
  }
}
тут можно 
{
  "success": true,
  "date": "2026-03-18 19:07:33.366881408 +0000 UTC m=+14532.795316721",
  "data": {
    "rounds": [
      {
        "id": 16338046,
        "status": 4,
        "randomOffset": 0.4099999964237213,
        "hash": "",
        "deposit": 0.12,
        "withdraw": 0,
        "type": "BOT_PVP",
        "winnerId": 3509124,
        "result": 2,
        "playersCount": 5,
        "prepareTime": -2170893131,
        "rollingTime": -2170883131,
        "serverSeed": "",
        "bets": [
          {
            "id": 53564008,
            "clientSeed": "b053423ce55d214aaa94",
            "nonce": 3865,
            "position": 0,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 852460,
              "name": "Yamimos Ral",
              "avatar": "https://avatars.steamstatic.com/d202481375df93e155387efac97561c935e504c9_medium.jpg"
            }
          },
          {
            "id": 53564009,
            "clientSeed": "48c094af68e555990bd7",
            "nonce": 2773440,
            "position": 1,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509122,
              "name": "Bot Gustaf",
              "avatar": "https://cloud.this.team/bota/bot-gustaf.jpg"
            }
          },
          {
            "id": 53564010,
            "clientSeed": "e6968f7e42f740a54048",
            "nonce": 2777133,
            "position": 2,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509124,
              "name": "Bot Hmelnitski",
              "avatar": "https://cloud.this.team/bota/bot-hmelnitski.jpg"
            }
          },
          {
            "id": 53564011,
            "clientSeed": "dd01080d47e3803db3a6",
            "nonce": 2778747,
            "position": 3,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          },
          {
            "id": 53564012,
            "clientSeed": "11837a2ed4e64c94e338",
            "nonce": 2776802,
            "position": 4,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509126,
              "name": "Bot Kasimir",
              "avatar": "https://cloud.this.team/bota/bot-kasimir.jpg"
            }
          }
        ]
      },
      {
        "id": 16355536,
        "status": 4,
        "randomOffset": 0.5199999809265137,
        "hash": "",
        "deposit": 0.25,
        "withdraw": 0,
        "type": "BOT_PVP",
        "winnerId": 3509126,
        "result": 3,
        "playersCount": 5,
        "prepareTime": -1965938990,
        "rollingTime": -1965928990,
        "serverSeed": "",
        "bets": [
          {
            "id": 53638314,
            "clientSeed": "e65fee4f438d4c393935",
            "nonce": 65509,
            "position": 0,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 574805,
              "name": "hurmaRTX",
              "avatar": "https://avatars.steamstatic.com/3bd668bae5cb109289dacd3a20a9a7cb7ec16c6d_medium.jpg"
            }
          },
          {
            "id": 53638316,
            "clientSeed": "9179b4a5f642cd4b6e95",
            "nonce": 2788055,
            "position": 1,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509124,
              "name": "Bot Hmelnitski",
              "avatar": "https://cloud.this.team/bota/bot-hmelnitski.jpg"
            }
          },
          {
            "id": 53638318,
            "clientSeed": "5336cc0b53a79bfda0a1",
            "nonce": 2787853,
            "position": 2,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509126,
              "name": "Bot Kasimir",
              "avatar": "https://cloud.this.team/bota/bot-kasimir.jpg"
            }
          },
          {
            "id": 53638320,
            "clientSeed": "a664fc279ded6232b585",
            "nonce": 2787854,
            "position": 3,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509126,
              "name": "Bot Kasimir",
              "avatar": "https://cloud.this.team/bota/bot-kasimir.jpg"
            }
          },
          {
            "id": 53638322,
            "clientSeed": "4ee93ef59b334959e09b",
            "nonce": 2789931,
            "position": 4,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          }
        ]
      },
      {
        "id": 16355538,
        "status": 4,
        "randomOffset": 0.5799999833106995,
        "hash": "",
        "deposit": 0.25,
        "withdraw": 0,
        "type": "BOT_PVP",
        "winnerId": 3509121,
        "result": 1,
        "playersCount": 4,
        "prepareTime": -1965938264,
        "rollingTime": -1965928264,
        "serverSeed": "",
        "bets": [
          {
            "id": 53638324,
            "clientSeed": "89660e74577d8e758ae2",
            "nonce": 65510,
            "position": 0,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 574805,
              "name": "hurmaRTX",
              "avatar": "https://avatars.steamstatic.com/3bd668bae5cb109289dacd3a20a9a7cb7ec16c6d_medium.jpg"
            }
          },
          {
            "id": 53638326,
            "clientSeed": "9fa5200d6708f70e9195",
            "nonce": 2789932,
            "position": 1,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          },
          {
            "id": 53638328,
            "clientSeed": "c78a325b59ceb2873182",
            "nonce": 2789933,
            "position": 2,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          },
          {
            "id": 53638330,
            "clientSeed": "be93e08edcb1edb12816",
            "nonce": 2789074,
            "position": 3,
            "deposit": 0.25,
            "walletDeposit": 0.25,
            "currencyId": 2,
            "user": {
              "id": 3509125,
              "name": "Bot Giray",
              "avatar": "https://cloud.this.team/bota/bot-giray.jpg"
            }
          }
        ]
      },
      {
        "id": 16490254,
        "status": 4,
        "randomOffset": 0.7099999785423279,
        "hash": "",
        "deposit": 0.12,
        "withdraw": 0,
        "type": "BOT_PVP",
        "winnerId": 3509124,
        "result": 1,
        "playersCount": 5,
        "prepareTime": -324061180,
        "rollingTime": -324051180,
        "serverSeed": "",
        "bets": [
          {
            "id": 54200618,
            "clientSeed": "1347f004391820c6862d",
            "nonce": 1555,
            "position": 0,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 624153,
              "name": "skvrxx csgoskins",
              "avatar": "https://avatars.steamstatic.com/06fb8a4436975a23f066865208a578e210364371_medium.jpg"
            }
          },
          {
            "id": 54200620,
            "clientSeed": "f682e119615005550222",
            "nonce": 2870500,
            "position": 1,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509124,
              "name": "Bot Hmelnitski",
              "avatar": "https://cloud.this.team/bota/bot-hmelnitski.jpg"
            }
          },
          {
            "id": 54200622,
            "clientSeed": "5857f199bcb851914138",
            "nonce": 2871688,
            "position": 2,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          },
          {
            "id": 54200624,
            "clientSeed": "e58fcbf72d17ae39708e",
            "nonce": 2866771,
            "position": 3,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509122,
              "name": "Bot Gustaf",
              "avatar": "https://cloud.this.team/bota/bot-gustaf.jpg"
            }
          },
          {
            "id": 54200626,
            "clientSeed": "abfaec664f561ea02e55",
            "nonce": 2871689,
            "position": 4,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          }
        ]
      }
    ],
    "statistic": {
      "count": 0,
      "activeCount": 4
    }
  }
}

Тут надо запоминать игры по ид что бы не обработать старые так как есть моменты когда сайт глючит и ставка висит долго 

Ид игры  "data": {
    "rounds": [
      {
        "id": 16338046,
Статус 4 значит игра закончилась 

"deposit": 0.12, сумма ставки каждого человека в этой игре ( включая бота) 

"playersCount": 5, количество игроков 
Получается в игре 0.12*5=0.6 $

"result": 2, номер который выиграл от 1 до 5 
Если  "type": "BOT_PVP", значит это режим с ботами 
Тут человек всегда первый по ставке то есть  "position" равно 0 
Мы можешь видеть что в игре 16338046   Режим с ботами , результ 2 и выиграл значит position 2  "name": "Bot Hmelnitski",
Так вот если результ 0 значит выигрыш за человеком и нужно deposit умножить на playersCount минус 10% это и есть чистый выигрыш человека 
Допустим на примере 

"data": {
    "rounds": [
      {
        "id": 16338046,
        "status": 4,
        "randomOffset": 0.4099999964237213,
        "hash": "",
        "deposit": 0.12,
        "withdraw": 0,
        "type": "BOT_PVP",
        "winnerId": 3509124,
        "result": 0,
        "playersCount": 5,
        "prepareTime": -2170893131,
        "rollingTime": -2170883131,
        "serverSeed": "",
        "bets": [
          {
            "id": 53564008,
            "clientSeed": "b053423ce55d214aaa94",
            "nonce": 3865,
            "position": 0,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 852460,
              "name": "Yamimos Ral",
              "avatar": "https://avatars.steamstatic.com/d202481375df93e155387efac97561c935e504c9_medium.jpg"
            }
          },
          {
            "id": 53564009,
            "clientSeed": "48c094af68e555990bd7",
            "nonce": 2773440,
            "position": 1,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509122,
              "name": "Bot Gustaf",
              "avatar": "https://cloud.this.team/bota/bot-gustaf.jpg"
            }
          },
          {
            "id": 53564010,
            "clientSeed": "e6968f7e42f740a54048",
            "nonce": 2777133,
            "position": 2,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509124,
              "name": "Bot Hmelnitski",
              "avatar": "https://cloud.this.team/bota/bot-hmelnitski.jpg"
            }
          },
          {
            "id": 53564011,
            "clientSeed": "dd01080d47e3803db3a6",
            "nonce": 2778747,
            "position": 3,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509121,
              "name": "Bot Mikhailovich",
              "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
            }
          },
          {
            "id": 53564012,
            "clientSeed": "11837a2ed4e64c94e338",
            "nonce": 2776802,
            "position": 4,
            "deposit": 0.12,
            "walletDeposit": 0.12,
            "currencyId": 2,
            "user": {
              "id": 3509126,
              "name": "Bot Kasimir",
              "avatar": "https://cloud.this.team/bota/bot-kasimir.jpg"
            }
          }
        ]
      },

Тут выиграл человек 0.12*5-10%=0.54 $ 
Значит сайт потерял 0.54-0.12=0.42 $
А если выиграл не человек то получается сайт забрал 0.12$
Если "type" не "BOT_PVP" 
То тут чуть по другому 
Смотрим все те же поля , но просто делает так deposit*result/100*10 = комиссия сайта ( что тоже в счет копилки сайта) вроде правильно это расписал 
И все это только если статус 4 

7. кейс батл
curl -X GET "https://cs2run.app/boxbattle/413429" \
  -H "Accept: application/json, text/plain, */*" \
  -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2ODYxLCJpYXQiOjE3NzMyNDI4OTYsImV4cCI6MTc3NDEwNjg5Nn0.qnl3fU3m5LKIwzQAWQemydZ_M4cXvCNEMbe_ZjD2kP4" \
  -H "Accept-Language: ru"
  
  {
  "success": true,
  "date": "2026-03-18T19:49:17.605Z",
  "data": {
    "room": {
      "id": 413429,
      "playersCount": 3,
      "deposit": 16.34,
      "status": "FINISHED",
      "type": "BOT_PVP",
      "boxes": [
        {
          "id": 282,
          "localizationKey": "blizzard",
          "categoryLocalizationKey": null,
          "image": "https://cloud.this.team/boxes/blizzard.webp",
          "media": null,
          "price": 6.93,
          "discount": 0,
          "realPrice": 6.93,
          "priceWithDiscount": 6.93,
          "items": [
            {
              "id": 15525,
              "name": "P250 | Nevermore (Well-Worn)",
              "entity": "P250",
              "description": "Nevermore",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.87,
              "colorId": 3,
              "reservedId": 3329,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 5545,
              "name": "USP-S | Blood Tiger (Field-Tested)",
              "entity": "USP-S",
              "description": "Blood Tiger",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 3.88,
              "colorId": 1,
              "reservedId": 13437,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60576,
              "name": "FAMAS | Yeti Camo (Factory New)",
              "entity": "FAMAS",
              "description": "Yeti Camo",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 4.47,
              "colorId": 1,
              "reservedId": 27284,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59654,
              "name": "USP-S | Alpine Camo (Factory New)",
              "entity": "USP-S",
              "description": "Alpine Camo",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 6.3,
              "colorId": 1,
              "reservedId": 26953,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58758,
              "name": "MP9 | Arctic Tri-Tone (Minimal Wear)",
              "entity": "MP9",
              "description": "Arctic Tri-Tone",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 10.88,
              "colorId": 3,
              "reservedId": 26857,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 658,
              "name": "Desert Eagle | Mecha Industries (Factory New)",
              "entity": "Desert Eagle",
              "description": "Mecha Industries",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 19.06,
              "colorId": 5,
              "reservedId": 871,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2967,
              "name": "SCAR-20 | Storm (Factory New)",
              "entity": "SCAR-20",
              "description": "Storm",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 25.44,
              "colorId": 4,
              "reservedId": 3934,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 5319,
              "name": "Tec-9 | Bamboo Forest (Factory New)",
              "entity": "Tec-9",
              "description": "Bamboo Forest",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 43.2,
              "colorId": 4,
              "reservedId": 13146,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 316,
              "name": "AWP | Neo-Noir (Factory New)",
              "entity": "AWP",
              "description": "Neo-Noir",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 65.66,
              "colorId": 7,
              "reservedId": 420,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61181,
              "name": "StatTrak™ AWP | Printstream (Well-Worn)",
              "entity": "StatTrak™ AWP",
              "description": "Printstream",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 83.93,
              "colorId": 7,
              "reservedId": 27207,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55815,
              "name": "AK-47 | Inheritance (Minimal Wear)",
              "entity": "AK-47",
              "description": "Inheritance",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 114.89,
              "colorId": 7,
              "reservedId": 21376,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52757,
              "name": "USP-S | Printstream (Factory New)",
              "entity": "USP-S",
              "description": "Printstream",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 149.68,
              "colorId": 7,
              "reservedId": 19749,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58488,
              "name": "AUG | Lil' Pig (Minimal Wear)",
              "entity": "AUG",
              "description": "Lil' Pig",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 201.93,
              "colorId": 5,
              "reservedId": 26677,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1493,
              "name": "M4A1-S | Cyrex (Factory New)",
              "entity": "M4A1-S",
              "description": "Cyrex",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 242.67,
              "colorId": 7,
              "reservedId": 1970,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16035,
              "name": "M4A1-S | Printstream (Field-Tested)",
              "entity": "M4A1-S",
              "description": "Printstream",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 275.76,
              "colorId": 7,
              "reservedId": 2044,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 8954,
              "name": "★ Skeleton Knife | Stained (Minimal Wear)",
              "entity": "★ Skeleton Knife",
              "description": "Stained",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 262.59,
              "colorId": 7,
              "reservedId": 15110,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 3279,
              "name": "StatTrak™ AK-47 | Bloodsport (Field-Tested)",
              "entity": "StatTrak™ AK-47",
              "description": "Bloodsport",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 321.71,
              "colorId": 7,
              "reservedId": 7044,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61893,
              "name": "Tec-9 | Whiteout (Factory New)",
              "entity": "Tec-9",
              "description": "Whiteout",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 367.67,
              "colorId": 3,
              "reservedId": 27877,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 8200,
              "name": "★ Talon Knife | Urban Masked (Minimal Wear)",
              "entity": "★ Talon Knife",
              "description": "Urban Masked",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 316.53,
              "colorId": 7,
              "reservedId": 16845,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6676,
              "name": "★ M9 Bayonet | Stained (Battle-Scarred)",
              "entity": "★ M9 Bayonet",
              "description": "Stained",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 531.28,
              "colorId": 7,
              "reservedId": 14724,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6691,
              "name": "★ M9 Bayonet | Urban Masked (Minimal Wear)",
              "entity": "★ M9 Bayonet",
              "description": "Urban Masked",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 468.19,
              "colorId": 7,
              "reservedId": 14739,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 8951,
              "name": "★ Skeleton Knife | Slaughter (Factory New)",
              "entity": "★ Skeleton Knife",
              "description": "Slaughter",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 584.92,
              "colorId": 7,
              "reservedId": 15104,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6577,
              "name": "★ Karambit | Stained (Field-Tested)",
              "entity": "★ Karambit",
              "description": "Stained",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 643.43,
              "colorId": 7,
              "reservedId": 14625,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6019,
              "name": "★ Butterfly Knife | Scorched (Minimal Wear)",
              "entity": "★ Butterfly Knife",
              "description": "Scorched",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 675.5,
              "colorId": 7,
              "reservedId": 13972,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 47594,
              "name": "★ Butterfly Knife | Black Laminate (Battle-Scarred)",
              "entity": "★ Butterfly Knife",
              "description": "Black Laminate",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 781.33,
              "colorId": 7,
              "reservedId": 18526,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 701,
              "name": "Desert Eagle | Sunset Storm 弐 (Factory New)",
              "entity": "Desert Eagle",
              "description": "Sunset Storm 弐",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 984.56,
              "colorId": 3,
              "reservedId": 924,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 15525,
              "name": "P250 | Nevermore (Well-Worn)",
              "entity": "P250",
              "description": "Nevermore",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.91,
              "colorId": 3,
              "reservedId": 3329,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 5545,
              "name": "USP-S | Blood Tiger (Field-Tested)",
              "entity": "USP-S",
              "description": "Blood Tiger",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 3.99,
              "colorId": 1,
              "reservedId": 13437,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60576,
              "name": "FAMAS | Yeti Camo (Factory New)",
              "entity": "FAMAS",
              "description": "Yeti Camo",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 4.67,
              "colorId": 1,
              "reservedId": 27284,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59654,
              "name": "USP-S | Alpine Camo (Factory New)",
              "entity": "USP-S",
              "description": "Alpine Camo",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 6.37,
              "colorId": 1,
              "reservedId": 26953,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58758,
              "name": "MP9 | Arctic Tri-Tone (Minimal Wear)",
              "entity": "MP9",
              "description": "Arctic Tri-Tone",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 10.3,
              "colorId": 3,
              "reservedId": 26857,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 658,
              "name": "Desert Eagle | Mecha Industries (Factory New)",
              "entity": "Desert Eagle",
              "description": "Mecha Industries",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 22.94,
              "colorId": 5,
              "reservedId": 871,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2967,
              "name": "SCAR-20 | Storm (Factory New)",
              "entity": "SCAR-20",
              "description": "Storm",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 25.75,
              "colorId": 4,
              "reservedId": 3934,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 5319,
              "name": "Tec-9 | Bamboo Forest (Factory New)",
              "entity": "Tec-9",
              "description": "Bamboo Forest",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 43.51,
              "colorId": 4,
              "reservedId": 13146,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 316,
              "name": "AWP | Neo-Noir (Factory New)",
              "entity": "AWP",
              "description": "Neo-Noir",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 72.35,
              "colorId": 7,
              "reservedId": 420,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61181,
              "name": "StatTrak™ AWP | Printstream (Well-Worn)",
              "entity": "StatTrak™ AWP",
              "description": "Printstream",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 81.52,
              "colorId": 7,
              "reservedId": 27207,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55815,
              "name": "AK-47 | Inheritance (Minimal Wear)",
              "entity": "AK-47",
              "description": "Inheritance",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 124.33,
              "colorId": 7,
              "reservedId": 21376,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52757,
              "name": "USP-S | Printstream (Factory New)",
              "entity": "USP-S",
              "description": "Printstream",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 152.34,
              "colorId": 7,
              "reservedId": 19749,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58488,
              "name": "AUG | Lil' Pig (Minimal Wear)",
              "entity": "AUG",
              "description": "Lil' Pig",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 204.82,
              "colorId": 5,
              "reservedId": 26677,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1493,
              "name": "M4A1-S | Cyrex (Factory New)",
              "entity": "M4A1-S",
              "description": "Cyrex",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 274.34,
              "colorId": 7,
              "reservedId": 1970,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16035,
              "name": "M4A1-S | Printstream (Field-Tested)",
              "entity": "M4A1-S",
              "description": "Printstream",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 278.39,
              "colorId": 7,
              "reservedId": 2044,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 8954,
              "name": "★ Skeleton Knife | Stained (Minimal Wear)",
              "entity": "★ Skeleton Knife",
              "description": "Stained",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 265.72,
              "colorId": 7,
              "reservedId": 15110,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 3279,
              "name": "StatTrak™ AK-47 | Bloodsport (Field-Tested)",
              "entity": "StatTrak™ AK-47",
              "description": "Bloodsport",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 310.23,
              "colorId": 7,
              "reservedId": 7044,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61893,
              "name": "Tec-9 | Whiteout (Factory New)",
              "entity": "Tec-9",
              "description": "Whiteout",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 364.86,
              "colorId": 3,
              "reservedId": 27877,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 8200,
              "name": "★ Talon Knife | Urban Masked (Minimal Wear)",
              "entity": "★ Talon Knife",
              "description": "Urban Masked",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 352.75,
              "colorId": 7,
              "reservedId": 16845,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6676,
              "name": "★ M9 Bayonet | Stained (Battle-Scarred)",
              "entity": "★ M9 Bayonet",
              "description": "Stained",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 437.4,
              "colorId": 7,
              "reservedId": 14724,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6691,
              "name": "★ M9 Bayonet | Urban Masked (Minimal Wear)",
              "entity": "★ M9 Bayonet",
              "description": "Urban Masked",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 480.51,
              "colorId": 7,
              "reservedId": 14739,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 8951,
              "name": "★ Skeleton Knife | Slaughter (Factory New)",
              "entity": "★ Skeleton Knife",
              "description": "Slaughter",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 594.62,
              "colorId": 7,
              "reservedId": 15104,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6577,
              "name": "★ Karambit | Stained (Field-Tested)",
              "entity": "★ Karambit",
              "description": "Stained",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 708.28,
              "colorId": 7,
              "reservedId": 14625,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6019,
              "name": "★ Butterfly Knife | Scorched (Minimal Wear)",
              "entity": "★ Butterfly Knife",
              "description": "Scorched",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 685.13,
              "colorId": 7,
              "reservedId": 13972,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 47594,
              "name": "★ Butterfly Knife | Black Laminate (Battle-Scarred)",
              "entity": "★ Butterfly Knife",
              "description": "Black Laminate",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 807.06,
              "colorId": 7,
              "reservedId": 18526,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 701,
              "name": "Desert Eagle | Sunset Storm 弐 (Factory New)",
              "entity": "Desert Eagle",
              "description": "Sunset Storm 弐",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 972.7,
              "colorId": 3,
              "reservedId": 924,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 46857,
              "name": "M4A1-S | Night Terror (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Night Terror",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 1.24,
              "colorId": 3,
              "reservedId": 17162,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3900,
              "name": "StatTrak™ Galil AR | Firefight (Well-Worn)",
              "entity": "StatTrak™ Galil AR",
              "description": "Firefight",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 2.43,
              "colorId": 3,
              "reservedId": 7785,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 536,
              "name": "CZ75-Auto | Red Astor (Well-Worn)",
              "entity": "CZ75-Auto",
              "description": "Red Astor",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.37,
              "colorId": 3,
              "reservedId": 716,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5513,
              "name": "UMP-45 | Moonrise (Well-Worn)",
              "entity": "UMP-45",
              "description": "Moonrise",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.39,
              "colorId": 3,
              "reservedId": 13396,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 3927,
              "name": "StatTrak™ Galil AR | Signal (Field-Tested)",
              "entity": "StatTrak™ Galil AR",
              "description": "Signal",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 2.04,
              "colorId": 3,
              "reservedId": 7812,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 4281,
              "name": "StatTrak™ MAG-7 | Heat (Battle-Scarred)",
              "entity": "StatTrak™ MAG-7",
              "description": "Heat",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 1.93,
              "colorId": 3,
              "reservedId": 8245,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61961,
              "name": "XM1014 | Solitude (Well-Worn)",
              "entity": "XM1014",
              "description": "Solitude",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 2.51,
              "colorId": 3,
              "reservedId": 27955,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 53828,
              "name": "StatTrak™ MAC-10 | Sakkaku (Field-Tested)",
              "entity": "StatTrak™ MAC-10",
              "description": "Sakkaku",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 2.52,
              "colorId": 3,
              "reservedId": 20514,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60694,
              "name": "M4A4 | Sheet Lightning (Well-Worn)",
              "entity": "M4A4",
              "description": "Sheet Lightning",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 3.52,
              "colorId": 3,
              "reservedId": 27594,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61912,
              "name": "USP-S | Bleeding Edge (Battle-Scarred)",
              "entity": "USP-S",
              "description": "Bleeding Edge",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 3.74,
              "colorId": 3,
              "reservedId": 27916,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58774,
              "name": "Nova | Wurst Hölle (Factory New)",
              "entity": "Nova",
              "description": "Wurst Hölle",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 3.99,
              "colorId": 1,
              "reservedId": 26861,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15463,
              "name": "Glock-18 | Vogue (Field-Tested)",
              "entity": "Glock-18",
              "description": "Vogue",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 5.43,
              "colorId": 5,
              "reservedId": 1761,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60468,
              "name": "AK-47 | Searing Rage (Battle-Scarred)",
              "entity": "AK-47",
              "description": "Searing Rage",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 6.65,
              "colorId": 5,
              "reservedId": 27158,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 51233,
              "name": "AK-47 | Ice Coaled (Well-Worn)",
              "entity": "AK-47",
              "description": "Ice Coaled",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 7.43,
              "colorId": 5,
              "reservedId": 18755,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 57808,
              "name": "M4A1-S | Black Lotus (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Black Lotus",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 9.85,
              "colorId": 5,
              "reservedId": 23383,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5643,
              "name": "USP-S | Stainless (Well-Worn)",
              "entity": "USP-S",
              "description": "Stainless",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 8.23,
              "colorId": 1,
              "reservedId": 13543,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59641,
              "name": "UMP-45 | Crimson Foil (Minimal Wear)",
              "entity": "UMP-45",
              "description": "Crimson Foil",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 8.77,
              "colorId": 3,
              "reservedId": 26808,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1547,
              "name": "M4A1-S | Nightmare (Field-Tested)",
              "entity": "M4A1-S",
              "description": "Nightmare",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 13.76,
              "colorId": 5,
              "reservedId": 2029,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17265,
              "name": "M4A1-S | Fizzy POP (Factory New)",
              "entity": "M4A1-S",
              "description": "Fizzy POP",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 11.93,
              "colorId": 1,
              "reservedId": 17153,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2530,
              "name": "P250 | Muertos (Minimal Wear)",
              "entity": "P250",
              "description": "Muertos",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 16.29,
              "colorId": 5,
              "reservedId": 3324,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 289,
              "name": "AWP | Fever Dream (Battle-Scarred)",
              "entity": "AWP",
              "description": "Fever Dream",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 16.33,
              "colorId": 5,
              "reservedId": 386,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5422,
              "name": "Tec-9 | Toxic (Field-Tested)",
              "entity": "Tec-9",
              "description": "Toxic",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 17.13,
              "colorId": 1,
              "reservedId": 13284,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3382,
              "name": "StatTrak™ AUG | Bengal Tiger (Field-Tested)",
              "entity": "StatTrak™ AUG",
              "description": "Bengal Tiger",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 26.43,
              "colorId": 5,
              "reservedId": 7167,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16113,
              "name": "P250 | Bengal Tiger (Field-Tested)",
              "entity": "P250",
              "description": "Bengal Tiger",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 25.63,
              "colorId": 1,
              "reservedId": 3219,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 575,
              "name": "CZ75-Auto | Yellow Jacket (Factory New)",
              "entity": "CZ75-Auto",
              "description": "Yellow Jacket",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 36.52,
              "colorId": 5,
              "reservedId": 762,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 2235,
              "name": "Nova | Bloomstick (Well-Worn)",
              "entity": "Nova",
              "description": "Bloomstick",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 40.62,
              "colorId": 5,
              "reservedId": 2953,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 281,
              "name": "AWP | Electric Hive (Field-Tested)",
              "entity": "AWP",
              "description": "Electric Hive",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 45.74,
              "colorId": 5,
              "reservedId": 371,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55009,
              "name": "Glock-18 | Ramese's Reach (Minimal Wear)",
              "entity": "Glock-18",
              "description": "Ramese's Reach",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 67.46,
              "colorId": 3,
              "reservedId": 20566,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15426,
              "name": "AK-47 | Legion of Anubis (Factory New)",
              "entity": "AK-47",
              "description": "Legion of Anubis",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 80.5,
              "colorId": 7,
              "reservedId": 99,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15634,
              "name": "StatTrak™ Desert Eagle | Printstream (Field-Tested)",
              "entity": "StatTrak™ Desert Eagle",
              "description": "Printstream",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 84.99,
              "colorId": 7,
              "reservedId": 7469,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 51235,
              "name": "AK-47 | Nightwish (Minimal Wear)",
              "entity": "AK-47",
              "description": "Nightwish",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 97.81,
              "colorId": 7,
              "reservedId": 18757,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 12402,
              "name": "Sticker | Fnatic (Holo) | Atlanta 2017",
              "entity": "Sticker",
              "description": "Fnatic",
              "quality": null,
              "qualityId": null,
              "price": 95.9,
              "colorId": 3,
              "reservedId": 10159,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60503,
              "name": "AWP | LongDog (Battle-Scarred)",
              "entity": "AWP",
              "description": "LongDog",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 129.08,
              "colorId": 7,
              "reservedId": 27198,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16012,
              "name": "Getaway Sally | The Professionals",
              "entity": "Getaway Sally",
              "description": "The Professionals",
              "quality": null,
              "qualityId": null,
              "price": 136.25,
              "colorId": 3,
              "reservedId": 1641,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60683,
              "name": "M4A4 | Hellish (Minimal Wear)",
              "entity": "M4A4",
              "description": "Hellish",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 158.04,
              "colorId": 5,
              "reservedId": 27552,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16904,
              "name": "★ Moto Gloves | Blood Pressure (Field-Tested)",
              "entity": "★ Moto Gloves",
              "description": "Blood Pressure",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 196.05,
              "colorId": 7,
              "reservedId": 14748,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 18,
              "name": "AK-47 | Bloodsport (Minimal Wear)",
              "entity": "AK-47",
              "description": "Bloodsport",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 205.05,
              "colorId": 7,
              "reservedId": 32,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16446,
              "name": "★ Specialist Gloves | Marble Fade (Field-Tested)",
              "entity": "★ Specialist Gloves",
              "description": "Marble Fade",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 221.81,
              "colorId": 7,
              "reservedId": 15164,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60318,
              "name": "★ Nomad Knife | Tiger Tooth (Factory New)",
              "entity": "★ Nomad Knife",
              "description": "Tiger Tooth",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 289.21,
              "colorId": 7,
              "reservedId": 27482,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16456,
              "name": "★ Sport Gloves | Scarlet Shamagh (Field-Tested)",
              "entity": "★ Sport Gloves",
              "description": "Scarlet Shamagh",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 405.38,
              "colorId": 7,
              "reservedId": 15219,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6196,
              "name": "★ Flip Knife | Doppler (Factory New)",
              "entity": "★ Flip Knife",
              "description": "Doppler",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 451.36,
              "colorId": 7,
              "reservedId": 14225,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6683,
              "name": "★ M9 Bayonet | Ultraviolet (Battle-Scarred)",
              "entity": "★ M9 Bayonet",
              "description": "Ultraviolet",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 483.9,
              "colorId": 7,
              "reservedId": 14731,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 8951,
              "name": "★ Skeleton Knife | Slaughter (Factory New)",
              "entity": "★ Skeleton Knife",
              "description": "Slaughter",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 566.16,
              "colorId": 7,
              "reservedId": 15104,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6004,
              "name": "★ Butterfly Knife | Night (Battle-Scarred)",
              "entity": "★ Butterfly Knife",
              "description": "Night",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 695.61,
              "colorId": 7,
              "reservedId": 13957,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 269,
              "name": "AWP | BOOM (Factory New)",
              "entity": "AWP",
              "description": "BOOM",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 708.88,
              "colorId": 5,
              "reservedId": 349,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 701,
              "name": "Desert Eagle | Sunset Storm 弐 (Factory New)",
              "entity": "Desert Eagle",
              "description": "Sunset Storm 弐",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 932.3,
              "colorId": 3,
              "reservedId": 924,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 46857,
              "name": "M4A1-S | Night Terror (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Night Terror",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 1.19,
              "colorId": 3,
              "reservedId": 17162,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3900,
              "name": "StatTrak™ Galil AR | Firefight (Well-Worn)",
              "entity": "StatTrak™ Galil AR",
              "description": "Firefight",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.26,
              "colorId": 3,
              "reservedId": 7785,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 536,
              "name": "CZ75-Auto | Red Astor (Well-Worn)",
              "entity": "CZ75-Auto",
              "description": "Red Astor",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.32,
              "colorId": 3,
              "reservedId": 716,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5513,
              "name": "UMP-45 | Moonrise (Well-Worn)",
              "entity": "UMP-45",
              "description": "Moonrise",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.45,
              "colorId": 3,
              "reservedId": 13396,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 3927,
              "name": "StatTrak™ Galil AR | Signal (Field-Tested)",
              "entity": "StatTrak™ Galil AR",
              "description": "Signal",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 1.62,
              "colorId": 3,
              "reservedId": 7812,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 4281,
              "name": "StatTrak™ MAG-7 | Heat (Battle-Scarred)",
              "entity": "StatTrak™ MAG-7",
              "description": "Heat",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 1.73,
              "colorId": 3,
              "reservedId": 8245,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61961,
              "name": "XM1014 | Solitude (Well-Worn)",
              "entity": "XM1014",
              "description": "Solitude",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.95,
              "colorId": 3,
              "reservedId": 27955,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 53828,
              "name": "StatTrak™ MAC-10 | Sakkaku (Field-Tested)",
              "entity": "StatTrak™ MAC-10",
              "description": "Sakkaku",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 2.18,
              "colorId": 3,
              "reservedId": 20514,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60694,
              "name": "M4A4 | Sheet Lightning (Well-Worn)",
              "entity": "M4A4",
              "description": "Sheet Lightning",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 2.68,
              "colorId": 3,
              "reservedId": 27594,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61912,
              "name": "USP-S | Bleeding Edge (Battle-Scarred)",
              "entity": "USP-S",
              "description": "Bleeding Edge",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 3.61,
              "colorId": 3,
              "reservedId": 27916,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58774,
              "name": "Nova | Wurst Hölle (Factory New)",
              "entity": "Nova",
              "description": "Wurst Hölle",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 4.11,
              "colorId": 1,
              "reservedId": 26861,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15463,
              "name": "Glock-18 | Vogue (Field-Tested)",
              "entity": "Glock-18",
              "description": "Vogue",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 4.76,
              "colorId": 5,
              "reservedId": 1761,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60468,
              "name": "AK-47 | Searing Rage (Battle-Scarred)",
              "entity": "AK-47",
              "description": "Searing Rage",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 5.56,
              "colorId": 5,
              "reservedId": 27158,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 51233,
              "name": "AK-47 | Ice Coaled (Well-Worn)",
              "entity": "AK-47",
              "description": "Ice Coaled",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 7.43,
              "colorId": 5,
              "reservedId": 18755,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 57808,
              "name": "M4A1-S | Black Lotus (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Black Lotus",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 8.29,
              "colorId": 5,
              "reservedId": 23383,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5643,
              "name": "USP-S | Stainless (Well-Worn)",
              "entity": "USP-S",
              "description": "Stainless",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 9.5,
              "colorId": 1,
              "reservedId": 13543,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59641,
              "name": "UMP-45 | Crimson Foil (Minimal Wear)",
              "entity": "UMP-45",
              "description": "Crimson Foil",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 10.66,
              "colorId": 3,
              "reservedId": 26808,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1547,
              "name": "M4A1-S | Nightmare (Field-Tested)",
              "entity": "M4A1-S",
              "description": "Nightmare",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 11.72,
              "colorId": 5,
              "reservedId": 2029,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17265,
              "name": "M4A1-S | Fizzy POP (Factory New)",
              "entity": "M4A1-S",
              "description": "Fizzy POP",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 13.7,
              "colorId": 1,
              "reservedId": 17153,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2530,
              "name": "P250 | Muertos (Minimal Wear)",
              "entity": "P250",
              "description": "Muertos",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 15.83,
              "colorId": 5,
              "reservedId": 3324,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 289,
              "name": "AWP | Fever Dream (Battle-Scarred)",
              "entity": "AWP",
              "description": "Fever Dream",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 18.41,
              "colorId": 5,
              "reservedId": 386,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5422,
              "name": "Tec-9 | Toxic (Field-Tested)",
              "entity": "Tec-9",
              "description": "Toxic",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 21.58,
              "colorId": 1,
              "reservedId": 13284,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3382,
              "name": "StatTrak™ AUG | Bengal Tiger (Field-Tested)",
              "entity": "StatTrak™ AUG",
              "description": "Bengal Tiger",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 24.83,
              "colorId": 5,
              "reservedId": 7167,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16113,
              "name": "P250 | Bengal Tiger (Field-Tested)",
              "entity": "P250",
              "description": "Bengal Tiger",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 28.55,
              "colorId": 1,
              "reservedId": 3219,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 575,
              "name": "CZ75-Auto | Yellow Jacket (Factory New)",
              "entity": "CZ75-Auto",
              "description": "Yellow Jacket",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 32.26,
              "colorId": 5,
              "reservedId": 762,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 2235,
              "name": "Nova | Bloomstick (Well-Worn)",
              "entity": "Nova",
              "description": "Bloomstick",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 37.41,
              "colorId": 5,
              "reservedId": 2953,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 281,
              "name": "AWP | Electric Hive (Field-Tested)",
              "entity": "AWP",
              "description": "Electric Hive",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 44.17,
              "colorId": 5,
              "reservedId": 371,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55009,
              "name": "Glock-18 | Ramese's Reach (Minimal Wear)",
              "entity": "Glock-18",
              "description": "Ramese's Reach",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 50.95,
              "colorId": 3,
              "reservedId": 20566,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15426,
              "name": "AK-47 | Legion of Anubis (Factory New)",
              "entity": "AK-47",
              "description": "Legion of Anubis",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 67.14,
              "colorId": 7,
              "reservedId": 99,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15634,
              "name": "StatTrak™ Desert Eagle | Printstream (Field-Tested)",
              "entity": "StatTrak™ Desert Eagle",
              "description": "Printstream",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 75.87,
              "colorId": 7,
              "reservedId": 7469,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 51235,
              "name": "AK-47 | Nightwish (Minimal Wear)",
              "entity": "AK-47",
              "description": "Nightwish",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 87.06,
              "colorId": 7,
              "reservedId": 18757,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 12402,
              "name": "Sticker | Fnatic (Holo) | Atlanta 2017",
              "entity": "Sticker",
              "description": "Fnatic",
              "quality": null,
              "qualityId": null,
              "price": 100.72,
              "colorId": 3,
              "reservedId": 10159,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60503,
              "name": "AWP | LongDog (Battle-Scarred)",
              "entity": "AWP",
              "description": "LongDog",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 118.12,
              "colorId": 7,
              "reservedId": 27198,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16012,
              "name": "Getaway Sally | The Professionals",
              "entity": "Getaway Sally",
              "description": "The Professionals",
              "quality": null,
              "qualityId": null,
              "price": 132.51,
              "colorId": 3,
              "reservedId": 1641,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60683,
              "name": "M4A4 | Hellish (Minimal Wear)",
              "entity": "M4A4",
              "description": "Hellish",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 155.19,
              "colorId": 5,
              "reservedId": 27552,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16904,
              "name": "★ Moto Gloves | Blood Pressure (Field-Tested)",
              "entity": "★ Moto Gloves",
              "description": "Blood Pressure",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 172.47,
              "colorId": 7,
              "reservedId": 14748,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 18,
              "name": "AK-47 | Bloodsport (Minimal Wear)",
              "entity": "AK-47",
              "description": "Bloodsport",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 195.83,
              "colorId": 7,
              "reservedId": 32,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16446,
              "name": "★ Specialist Gloves | Marble Fade (Field-Tested)",
              "entity": "★ Specialist Gloves",
              "description": "Marble Fade",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 222.6,
              "colorId": 7,
              "reservedId": 15164,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60318,
              "name": "★ Nomad Knife | Tiger Tooth (Factory New)",
              "entity": "★ Nomad Knife",
              "description": "Tiger Tooth",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 275.88,
              "colorId": 7,
              "reservedId": 27482,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16456,
              "name": "★ Sport Gloves | Scarlet Shamagh (Field-Tested)",
              "entity": "★ Sport Gloves",
              "description": "Scarlet Shamagh",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 330.2,
              "colorId": 7,
              "reservedId": 15219,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6196,
              "name": "★ Flip Knife | Doppler (Factory New)",
              "entity": "★ Flip Knife",
              "description": "Doppler",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 404.02,
              "colorId": 7,
              "reservedId": 14225,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6683,
              "name": "★ M9 Bayonet | Ultraviolet (Battle-Scarred)",
              "entity": "★ M9 Bayonet",
              "description": "Ultraviolet",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 443.4,
              "colorId": 7,
              "reservedId": 14731,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 8951,
              "name": "★ Skeleton Knife | Slaughter (Factory New)",
              "entity": "★ Skeleton Knife",
              "description": "Slaughter",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 599.36,
              "colorId": 7,
              "reservedId": 15104,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6004,
              "name": "★ Butterfly Knife | Night (Battle-Scarred)",
              "entity": "★ Butterfly Knife",
              "description": "Night",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 667.6,
              "colorId": 7,
              "reservedId": 13957,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 269,
              "name": "AWP | BOOM (Factory New)",
              "entity": "AWP",
              "description": "BOOM",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 708.88,
              "colorId": 5,
              "reservedId": 349,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 701,
              "name": "Desert Eagle | Sunset Storm 弐 (Factory New)",
              "entity": "Desert Eagle",
              "description": "Sunset Storm 弐",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 970.12,
              "colorId": 3,
              "reservedId": 924,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 46857,
              "name": "M4A1-S | Night Terror (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Night Terror",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 1.19,
              "colorId": 3,
              "reservedId": 17162,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3900,
              "name": "StatTrak™ Galil AR | Firefight (Well-Worn)",
              "entity": "StatTrak™ Galil AR",
              "description": "Firefight",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.55,
              "colorId": 3,
              "reservedId": 7785,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 536,
              "name": "CZ75-Auto | Red Astor (Well-Worn)",
              "entity": "CZ75-Auto",
              "description": "Red Astor",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.65,
              "colorId": 3,
              "reservedId": 716,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5513,
              "name": "UMP-45 | Moonrise (Well-Worn)",
              "entity": "UMP-45",
              "description": "Moonrise",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.45,
              "colorId": 3,
              "reservedId": 13396,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 3927,
              "name": "StatTrak™ Galil AR | Signal (Field-Tested)",
              "entity": "StatTrak™ Galil AR",
              "description": "Signal",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 1.72,
              "colorId": 3,
              "reservedId": 7812,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 4281,
              "name": "StatTrak™ MAG-7 | Heat (Battle-Scarred)",
              "entity": "StatTrak™ MAG-7",
              "description": "Heat",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 1.62,
              "colorId": 3,
              "reservedId": 8245,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61961,
              "name": "XM1014 | Solitude (Well-Worn)",
              "entity": "XM1014",
              "description": "Solitude",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 2.34,
              "colorId": 3,
              "reservedId": 27955,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 53828,
              "name": "StatTrak™ MAC-10 | Sakkaku (Field-Tested)",
              "entity": "StatTrak™ MAC-10",
              "description": "Sakkaku",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 2.27,
              "colorId": 3,
              "reservedId": 20514,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60694,
              "name": "M4A4 | Sheet Lightning (Well-Worn)",
              "entity": "M4A4",
              "description": "Sheet Lightning",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.83,
              "colorId": 3,
              "reservedId": 27594,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61912,
              "name": "USP-S | Bleeding Edge (Battle-Scarred)",
              "entity": "USP-S",
              "description": "Bleeding Edge",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 3.81,
              "colorId": 3,
              "reservedId": 27916,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58774,
              "name": "Nova | Wurst Hölle (Factory New)",
              "entity": "Nova",
              "description": "Wurst Hölle",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 3.91,
              "colorId": 1,
              "reservedId": 26861,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15463,
              "name": "Glock-18 | Vogue (Field-Tested)",
              "entity": "Glock-18",
              "description": "Vogue",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 4.8,
              "colorId": 5,
              "reservedId": 1761,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60468,
              "name": "AK-47 | Searing Rage (Battle-Scarred)",
              "entity": "AK-47",
              "description": "Searing Rage",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 7.95,
              "colorId": 5,
              "reservedId": 27158,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 51233,
              "name": "AK-47 | Ice Coaled (Well-Worn)",
              "entity": "AK-47",
              "description": "Ice Coaled",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 8.54,
              "colorId": 5,
              "reservedId": 18755,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 57808,
              "name": "M4A1-S | Black Lotus (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Black Lotus",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 8.33,
              "colorId": 5,
              "reservedId": 23383,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5643,
              "name": "USP-S | Stainless (Well-Worn)",
              "entity": "USP-S",
              "description": "Stainless",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 14.23,
              "colorId": 1,
              "reservedId": 13543,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59641,
              "name": "UMP-45 | Crimson Foil (Minimal Wear)",
              "entity": "UMP-45",
              "description": "Crimson Foil",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 8.18,
              "colorId": 3,
              "reservedId": 26808,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1547,
              "name": "M4A1-S | Nightmare (Field-Tested)",
              "entity": "M4A1-S",
              "description": "Nightmare",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 15.14,
              "colorId": 5,
              "reservedId": 2029,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17265,
              "name": "M4A1-S | Fizzy POP (Factory New)",
              "entity": "M4A1-S",
              "description": "Fizzy POP",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 11,
              "colorId": 1,
              "reservedId": 17153,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2530,
              "name": "P250 | Muertos (Minimal Wear)",
              "entity": "P250",
              "description": "Muertos",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 18.76,
              "colorId": 5,
              "reservedId": 3324,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 289,
              "name": "AWP | Fever Dream (Battle-Scarred)",
              "entity": "AWP",
              "description": "Fever Dream",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 20.83,
              "colorId": 5,
              "reservedId": 386,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60498,
              "name": "AWP | Green Energy (Battle-Scarred)",
              "entity": "AWP",
              "description": "Green Energy",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 17.42,
              "colorId": 5,
              "reservedId": 27213,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3382,
              "name": "StatTrak™ AUG | Bengal Tiger (Field-Tested)",
              "entity": "StatTrak™ AUG",
              "description": "Bengal Tiger",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 29.76,
              "colorId": 5,
              "reservedId": 7167,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16113,
              "name": "P250 | Bengal Tiger (Field-Tested)",
              "entity": "P250",
              "description": "Bengal Tiger",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 29.32,
              "colorId": 1,
              "reservedId": 3219,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 20,
              "name": "AK-47 | Blue Laminate (Factory New)",
              "entity": "AK-47",
              "description": "Blue Laminate",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 31.62,
              "colorId": 3,
              "reservedId": 34,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55818,
              "name": "AWP | Chrome Cannon (Battle-Scarred)",
              "entity": "AWP",
              "description": "Chrome Cannon",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 39.4,
              "colorId": 7,
              "reservedId": 21381,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 281,
              "name": "AWP | Electric Hive (Field-Tested)",
              "entity": "AWP",
              "description": "Electric Hive",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 51.63,
              "colorId": 5,
              "reservedId": 371,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55009,
              "name": "Glock-18 | Ramese's Reach (Minimal Wear)",
              "entity": "Glock-18",
              "description": "Ramese's Reach",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 49.44,
              "colorId": 3,
              "reservedId": 20566,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58633,
              "name": "Galil AR | Rainbow Spoon (Field-Tested)",
              "entity": "Galil AR",
              "description": "Rainbow Spoon",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 56.95,
              "colorId": 5,
              "reservedId": 26713,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15634,
              "name": "StatTrak™ Desert Eagle | Printstream (Field-Tested)",
              "entity": "StatTrak™ Desert Eagle",
              "description": "Printstream",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 78.94,
              "colorId": 7,
              "reservedId": 7469,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58699,
              "name": "M4A1-S | Vaporwave (Field-Tested)",
              "entity": "M4A1-S",
              "description": "Vaporwave",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 78.04,
              "colorId": 7,
              "reservedId": 26928,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 12402,
              "name": "Sticker | Fnatic (Holo) | Atlanta 2017",
              "entity": "Sticker",
              "description": "Fnatic",
              "quality": null,
              "qualityId": null,
              "price": 81.05,
              "colorId": 3,
              "reservedId": 10159,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60503,
              "name": "AWP | LongDog (Battle-Scarred)",
              "entity": "AWP",
              "description": "LongDog",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 112.89,
              "colorId": 7,
              "reservedId": 27198,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16012,
              "name": "Getaway Sally | The Professionals",
              "entity": "Getaway Sally",
              "description": "The Professionals",
              "quality": null,
              "qualityId": null,
              "price": 119.06,
              "colorId": 3,
              "reservedId": 1641,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60683,
              "name": "M4A4 | Hellish (Minimal Wear)",
              "entity": "M4A4",
              "description": "Hellish",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 138.47,
              "colorId": 5,
              "reservedId": 27552,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16904,
              "name": "★ Moto Gloves | Blood Pressure (Field-Tested)",
              "entity": "★ Moto Gloves",
              "description": "Blood Pressure",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 181.05,
              "colorId": 7,
              "reservedId": 14748,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 18,
              "name": "AK-47 | Bloodsport (Minimal Wear)",
              "entity": "AK-47",
              "description": "Bloodsport",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 206.98,
              "colorId": 7,
              "reservedId": 32,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16446,
              "name": "★ Specialist Gloves | Marble Fade (Field-Tested)",
              "entity": "★ Specialist Gloves",
              "description": "Marble Fade",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 213.53,
              "colorId": 7,
              "reservedId": 15164,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60318,
              "name": "★ Nomad Knife | Tiger Tooth (Factory New)",
              "entity": "★ Nomad Knife",
              "description": "Tiger Tooth",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 287.73,
              "colorId": 7,
              "reservedId": 27482,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16456,
              "name": "★ Sport Gloves | Scarlet Shamagh (Field-Tested)",
              "entity": "★ Sport Gloves",
              "description": "Scarlet Shamagh",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 304.76,
              "colorId": 7,
              "reservedId": 15219,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6196,
              "name": "★ Flip Knife | Doppler (Factory New)",
              "entity": "★ Flip Knife",
              "description": "Doppler",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 407.84,
              "colorId": 7,
              "reservedId": 14225,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6683,
              "name": "★ M9 Bayonet | Ultraviolet (Battle-Scarred)",
              "entity": "★ M9 Bayonet",
              "description": "Ultraviolet",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 517.64,
              "colorId": 7,
              "reservedId": 14731,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 5814,
              "name": "★ Bayonet | Doppler (Minimal Wear)",
              "entity": "★ Bayonet",
              "description": "Doppler",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 635.28,
              "colorId": 7,
              "reservedId": 13747,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6004,
              "name": "★ Butterfly Knife | Night (Battle-Scarred)",
              "entity": "★ Butterfly Knife",
              "description": "Night",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 652.6,
              "colorId": 7,
              "reservedId": 13957,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 17744,
              "name": "UMP-45 | Fade (Factory New)",
              "entity": "UMP-45",
              "description": "Fade",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 583.52,
              "colorId": 5,
              "reservedId": 18431,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 701,
              "name": "Desert Eagle | Sunset Storm 弐 (Factory New)",
              "entity": "Desert Eagle",
              "description": "Sunset Storm 弐",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 872.56,
              "colorId": 3,
              "reservedId": 924,
              "gameId": 730,
              "isSlowWithdraw": true
            }
          ],
          "gameId": null,
          "prices": null
        },
        {
          "id": 287,
          "localizationKey": "snowman",
          "categoryLocalizationKey": null,
          "image": "https://cloud.this.team/boxes/snowman.webp",
          "media": null,
          "price": 5.58,
          "discount": 0,
          "realPrice": 5.58,
          "priceWithDiscount": 5.58,
          "items": [
            {
              "id": 5439,
              "name": "UMP-45 | Arctic Wolf (Minimal Wear)",
              "entity": "UMP-45",
              "description": "Arctic Wolf",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.2,
              "colorId": 3,
              "reservedId": 13302,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1332,
              "name": "Glock-18 | Royal Legion (Field-Tested)",
              "entity": "Glock-18",
              "description": "Royal Legion",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 3.24,
              "colorId": 3,
              "reservedId": 1735,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 60576,
              "name": "FAMAS | Yeti Camo (Factory New)",
              "entity": "FAMAS",
              "description": "Yeti Camo",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 4.67,
              "colorId": 1,
              "reservedId": 27284,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17738,
              "name": "Tec-9 | Safety Net (Factory New)",
              "entity": "Tec-9",
              "description": "Safety Net",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 7.42,
              "colorId": 1,
              "reservedId": 18425,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 51552,
              "name": "MP7 | Abyssal Apparition (Minimal Wear)",
              "entity": "MP7",
              "description": "Abyssal Apparition",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 10.11,
              "colorId": 5,
              "reservedId": 18801,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1592,
              "name": "M4A4 | Desolate Space (Battle-Scarred)",
              "entity": "M4A4",
              "description": "Desolate Space",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 16.79,
              "colorId": 5,
              "reservedId": 2099,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58756,
              "name": "MP9 | Arctic Tri-Tone (Factory New)",
              "entity": "MP9",
              "description": "Arctic Tri-Tone",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 25.95,
              "colorId": 3,
              "reservedId": 26856,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52758,
              "name": "USP-S | Printstream (Field-Tested)",
              "entity": "USP-S",
              "description": "Printstream",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 45.42,
              "colorId": 7,
              "reservedId": 19750,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1638,
              "name": "M4A4 | Modern Hunter (Field-Tested)",
              "entity": "M4A4",
              "description": "Modern Hunter",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 59.9,
              "colorId": 3,
              "reservedId": 2150,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 9102,
              "name": "★ Survival Knife | Stained (Well-Worn)",
              "entity": "★ Survival Knife",
              "description": "Stained",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 87.23,
              "colorId": 7,
              "reservedId": 16767,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6154,
              "name": "★ Falchion Knife | Urban Masked (Well-Worn)",
              "entity": "★ Falchion Knife",
              "description": "Urban Masked",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 103.11,
              "colorId": 7,
              "reservedId": 14183,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 270,
              "name": "AWP | BOOM (Field-Tested)",
              "entity": "AWP",
              "description": "BOOM",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 144.39,
              "colorId": 5,
              "reservedId": 350,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17776,
              "name": "USP-S | Whiteout (Field-Tested)",
              "entity": "USP-S",
              "description": "Whiteout",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 177.03,
              "colorId": 5,
              "reservedId": 18470,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2605,
              "name": "P90 | Asiimov (Minimal Wear)",
              "entity": "P90",
              "description": "Asiimov",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 267.76,
              "colorId": 7,
              "reservedId": 3407,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 8263,
              "name": "★ Ursus Knife | Tiger Tooth (Minimal Wear)",
              "entity": "★ Ursus Knife",
              "description": "Tiger Tooth",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 235.3,
              "colorId": 7,
              "reservedId": 16910,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 16035,
              "name": "M4A1-S | Printstream (Field-Tested)",
              "entity": "M4A1-S",
              "description": "Printstream",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 278.39,
              "colorId": 7,
              "reservedId": 2044,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17777,
              "name": "USP-S | Whiteout (Minimal Wear)",
              "entity": "USP-S",
              "description": "Whiteout",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 304.07,
              "colorId": 5,
              "reservedId": 18471,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 8929,
              "name": "★ Skeleton Knife",
              "entity": "★ Skeleton Knife",
              "description": null,
              "quality": null,
              "qualityId": null,
              "price": 344.61,
              "colorId": 7,
              "reservedId": 15061,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 60509,
              "name": "AWP | Printstream (Factory New)",
              "entity": "AWP",
              "description": "Printstream",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 405.11,
              "colorId": 7,
              "reservedId": 27199,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 15269,
              "name": "★ Skeleton Knife | Stained (Factory New)",
              "entity": "★ Skeleton Knife",
              "description": "Stained",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 452.1,
              "colorId": 7,
              "reservedId": 15108,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 16288,
              "name": "StatTrak™ M4A1-S | Printstream (Field-Tested)",
              "entity": "StatTrak™ M4A1-S",
              "description": "Printstream",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 551.16,
              "colorId": 7,
              "reservedId": 8041,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 9257,
              "name": "M4A1-S | Chantico's Fire (Factory New)",
              "entity": "M4A1-S",
              "description": "Chantico's Fire",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 596.98,
              "colorId": 7,
              "reservedId": 1960,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6548,
              "name": "★ Karambit | Lore (Battle-Scarred)",
              "entity": "★ Karambit",
              "description": "Lore",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 640.36,
              "colorId": 7,
              "reservedId": 14596,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17811,
              "name": "★ Butterfly Knife | Bright Water (Minimal Wear)",
              "entity": "★ Butterfly Knife",
              "description": "Bright Water",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 777.05,
              "colorId": 7,
              "reservedId": 18534,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17818,
              "name": "★ Butterfly Knife | Lore (Well-Worn)",
              "entity": "★ Butterfly Knife",
              "description": "Lore",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 763.53,
              "colorId": 7,
              "reservedId": 18547,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6682,
              "name": "★ M9 Bayonet | Tiger Tooth (Minimal Wear)",
              "entity": "★ M9 Bayonet",
              "description": "Tiger Tooth",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 893.37,
              "colorId": 7,
              "reservedId": 14730,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 137,
              "name": "AK-47 | Uncharted (Well-Worn)",
              "entity": "AK-47",
              "description": "Uncharted",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.53,
              "colorId": 1,
              "reservedId": 170,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60496,
              "name": "AWP | Arsenic Spill (Minimal Wear)",
              "entity": "AWP",
              "description": "Arsenic Spill",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.34,
              "colorId": 1,
              "reservedId": 27215,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17109,
              "name": "AUG | Plague (Field-Tested)",
              "entity": "AUG",
              "description": "Plague",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 1.48,
              "colorId": 1,
              "reservedId": 16949,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59656,
              "name": "USP-S | Alpine Camo (Minimal Wear)",
              "entity": "USP-S",
              "description": "Alpine Camo",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.37,
              "colorId": 1,
              "reservedId": 26954,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61955,
              "name": "XM1014 | Run Run Run (Minimal Wear)",
              "entity": "XM1014",
              "description": "Run Run Run",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.74,
              "colorId": 1,
              "reservedId": 27958,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 4402,
              "name": "StatTrak™ MP9 | Goo (Field-Tested)",
              "entity": "StatTrak™ MP9",
              "description": "Goo",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 2.23,
              "colorId": 3,
              "reservedId": 8411,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60558,
              "name": "FAMAS | 2A2F (Minimal Wear)",
              "entity": "FAMAS",
              "description": "2A2F",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 2.11,
              "colorId": 1,
              "reservedId": 27280,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58576,
              "name": "Desert Eagle | Heat Treated (Field-Tested)",
              "entity": "Desert Eagle",
              "description": "Heat Treated",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 2.61,
              "colorId": 5,
              "reservedId": 26588,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60482,
              "name": "AK-47 | Wintergreen (Well-Worn)",
              "entity": "AK-47",
              "description": "Wintergreen",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 2.79,
              "colorId": 1,
              "reservedId": 27177,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60757,
              "name": "MP9 | Cobalt Paisley (Factory New)",
              "entity": "MP9",
              "description": "Cobalt Paisley",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 3.69,
              "colorId": 1,
              "reservedId": 27666,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58468,
              "name": "AK-47 | Crossfade (Minimal Wear)",
              "entity": "AK-47",
              "description": "Crossfade",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 4.67,
              "colorId": 1,
              "reservedId": 26652,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61928,
              "name": "USP-S | Tropical Breeze (Factory New)",
              "entity": "USP-S",
              "description": "Tropical Breeze",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 4.63,
              "colorId": 1,
              "reservedId": 27922,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61203,
              "name": "StatTrak™ M4A4 | Choppa (Factory New)",
              "entity": "StatTrak™ M4A4",
              "description": "Choppa",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 6.25,
              "colorId": 1,
              "reservedId": 27571,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60664,
              "name": "M4A1-S | Glitched Paint (Well-Worn)",
              "entity": "M4A1-S",
              "description": "Glitched Paint",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 8.65,
              "colorId": 3,
              "reservedId": 27584,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59638,
              "name": "UMP-45 | Crimson Foil (Battle-Scarred)",
              "entity": "UMP-45",
              "description": "Crimson Foil",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 6.55,
              "colorId": 3,
              "reservedId": 26811,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 60607,
              "name": "Galil AR | Control (Factory New)",
              "entity": "Galil AR",
              "description": "Control",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 13.11,
              "colorId": 3,
              "reservedId": 27319,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 16979,
              "name": "MP9 | Food Chain (Minimal Wear)",
              "entity": "MP9",
              "description": "Food Chain",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 10.75,
              "colorId": 5,
              "reservedId": 17265,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 54987,
              "name": "AK-47 | Steel Delta (Factory New)",
              "entity": "AK-47",
              "description": "Steel Delta",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 18.75,
              "colorId": 1,
              "reservedId": 20544,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 57811,
              "name": "M4A1-S | Black Lotus (Minimal Wear)",
              "entity": "M4A1-S",
              "description": "Black Lotus",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 14.2,
              "colorId": 5,
              "reservedId": 23386,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17125,
              "name": "AWP | POP AWP (Field-Tested)",
              "entity": "AWP",
              "description": "POP AWP",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 15.14,
              "colorId": 3,
              "reservedId": 16968,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58800,
              "name": "P90 | Attack Vector (Field-Tested)",
              "entity": "P90",
              "description": "Attack Vector",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 20.65,
              "colorId": 3,
              "reservedId": 26778,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15654,
              "name": "StatTrak™ M4A4 | Tooth Fairy (Minimal Wear)",
              "entity": "StatTrak™ M4A4",
              "description": "Tooth Fairy",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 14.79,
              "colorId": 5,
              "reservedId": 8124,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60502,
              "name": "AWP | Green Energy (Well-Worn)",
              "entity": "AWP",
              "description": "Green Energy",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 26.16,
              "colorId": 5,
              "reservedId": 27212,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52400,
              "name": "StatTrak™ AK-47 | Ice Coaled (Minimal Wear)",
              "entity": "StatTrak™ AK-47",
              "description": "Ice Coaled",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 27.66,
              "colorId": 5,
              "reservedId": 19612,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52395,
              "name": "Sawed-Off | Kiss♥Love (Factory New)",
              "entity": "Sawed-Off",
              "description": "Kiss♥Love",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 28.81,
              "colorId": 5,
              "reservedId": 19607,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 55819,
              "name": "AWP | Chrome Cannon (Field-Tested)",
              "entity": "AWP",
              "description": "Chrome Cannon",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 39.67,
              "colorId": 7,
              "reservedId": 21382,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17771,
              "name": "USP-S | The Traitor (Field-Tested)",
              "entity": "USP-S",
              "description": "The Traitor",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 48.19,
              "colorId": 7,
              "reservedId": 18463,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1661,
              "name": "M4A4 | The Battlestar (Field-Tested)",
              "entity": "M4A4",
              "description": "The Battlestar",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 46.95,
              "colorId": 7,
              "reservedId": 2173,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 9084,
              "name": "★ Survival Knife | Forest DDPAT (Field-Tested)",
              "entity": "★ Survival Knife",
              "description": "Forest DDPAT",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 69.71,
              "colorId": 7,
              "reservedId": 16742,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17850,
              "name": "★ Shadow Daggers | Freehand (Well-Worn)",
              "entity": "★ Shadow Daggers",
              "description": "Freehand",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 73.92,
              "colorId": 7,
              "reservedId": 18621,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 51235,
              "name": "AK-47 | Nightwish (Minimal Wear)",
              "entity": "AK-47",
              "description": "Nightwish",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 97.81,
              "colorId": 7,
              "reservedId": 18757,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60466,
              "name": "AK-47 | Nouveau Rouge (Minimal Wear)",
              "entity": "AK-47",
              "description": "Nouveau Rouge",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 96.33,
              "colorId": 5,
              "reservedId": 27165,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60561,
              "name": "FAMAS | Bad Trip (Factory New)",
              "entity": "FAMAS",
              "description": "Bad Trip",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 133.42,
              "colorId": 7,
              "reservedId": 27269,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 11741,
              "name": "StatTrak™ M4A1-S | Chantico's Fire (Battle-Scarred)",
              "entity": "StatTrak™ M4A1-S",
              "description": "Chantico's Fire",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 161.89,
              "colorId": 7,
              "reservedId": 7982,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60683,
              "name": "M4A4 | Hellish (Minimal Wear)",
              "entity": "M4A4",
              "description": "Hellish",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 158.04,
              "colorId": 5,
              "reservedId": 27552,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5821,
              "name": "★ Bayonet | Forest DDPAT (Well-Worn)",
              "entity": "★ Bayonet",
              "description": "Forest DDPAT",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 163.28,
              "colorId": 7,
              "reservedId": 13754,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 18,
              "name": "AK-47 | Bloodsport (Minimal Wear)",
              "entity": "AK-47",
              "description": "Bloodsport",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 205.05,
              "colorId": 7,
              "reservedId": 32,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55813,
              "name": "AK-47 | Inheritance (Factory New)",
              "entity": "AK-47",
              "description": "Inheritance",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 241.49,
              "colorId": 7,
              "reservedId": 21374,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1493,
              "name": "M4A1-S | Cyrex (Factory New)",
              "entity": "M4A1-S",
              "description": "Cyrex",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 257.26,
              "colorId": 7,
              "reservedId": 1970,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3311,
              "name": "StatTrak™ AK-47 | Fuel Injector (Battle-Scarred)",
              "entity": "StatTrak™ AK-47",
              "description": "Fuel Injector",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 322.62,
              "colorId": 7,
              "reservedId": 7076,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 8071,
              "name": "★ Stiletto Knife | Case Hardened (Field-Tested)",
              "entity": "★ Stiletto Knife",
              "description": "Case Hardened",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 284.66,
              "colorId": 7,
              "reservedId": 16656,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6198,
              "name": "★ Flip Knife | Fade (Factory New)",
              "entity": "★ Flip Knife",
              "description": "Fade",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 438.46,
              "colorId": 7,
              "reservedId": 14227,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 8951,
              "name": "★ Skeleton Knife | Slaughter (Factory New)",
              "entity": "★ Skeleton Knife",
              "description": "Slaughter",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 566.16,
              "colorId": 7,
              "reservedId": 15104,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 269,
              "name": "AWP | BOOM (Factory New)",
              "entity": "AWP",
              "description": "BOOM",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 667.6,
              "colorId": 5,
              "reservedId": 349,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 44,
              "name": "AK-47 | Fire Serpent (Battle-Scarred)",
              "entity": "AK-47",
              "description": "Fire Serpent",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 809.46,
              "colorId": 7,
              "reservedId": 58,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6675,
              "name": "★ M9 Bayonet | Slaughter (Minimal Wear)",
              "entity": "★ M9 Bayonet",
              "description": "Slaughter",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 978.08,
              "colorId": 7,
              "reservedId": 14723,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 137,
              "name": "AK-47 | Uncharted (Well-Worn)",
              "entity": "AK-47",
              "description": "Uncharted",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.19,
              "colorId": 1,
              "reservedId": 170,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60496,
              "name": "AWP | Arsenic Spill (Minimal Wear)",
              "entity": "AWP",
              "description": "Arsenic Spill",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.26,
              "colorId": 1,
              "reservedId": 27215,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17109,
              "name": "AUG | Plague (Field-Tested)",
              "entity": "AUG",
              "description": "Plague",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 1.32,
              "colorId": 1,
              "reservedId": 16949,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59656,
              "name": "USP-S | Alpine Camo (Minimal Wear)",
              "entity": "USP-S",
              "description": "Alpine Camo",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.45,
              "colorId": 1,
              "reservedId": 26954,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61955,
              "name": "XM1014 | Run Run Run (Minimal Wear)",
              "entity": "XM1014",
              "description": "Run Run Run",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.62,
              "colorId": 1,
              "reservedId": 27958,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 4402,
              "name": "StatTrak™ MP9 | Goo (Field-Tested)",
              "entity": "StatTrak™ MP9",
              "description": "Goo",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 1.73,
              "colorId": 3,
              "reservedId": 8411,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60558,
              "name": "FAMAS | 2A2F (Minimal Wear)",
              "entity": "FAMAS",
              "description": "2A2F",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.95,
              "colorId": 1,
              "reservedId": 27280,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58576,
              "name": "Desert Eagle | Heat Treated (Field-Tested)",
              "entity": "Desert Eagle",
              "description": "Heat Treated",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 2.18,
              "colorId": 5,
              "reservedId": 26588,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60482,
              "name": "AK-47 | Wintergreen (Well-Worn)",
              "entity": "AK-47",
              "description": "Wintergreen",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 2.68,
              "colorId": 1,
              "reservedId": 27177,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60757,
              "name": "MP9 | Cobalt Paisley (Factory New)",
              "entity": "MP9",
              "description": "Cobalt Paisley",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 3.61,
              "colorId": 1,
              "reservedId": 27666,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58468,
              "name": "AK-47 | Crossfade (Minimal Wear)",
              "entity": "AK-47",
              "description": "Crossfade",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 4.11,
              "colorId": 1,
              "reservedId": 26652,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61928,
              "name": "USP-S | Tropical Breeze (Factory New)",
              "entity": "USP-S",
              "description": "Tropical Breeze",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 4.76,
              "colorId": 1,
              "reservedId": 27922,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61203,
              "name": "StatTrak™ M4A4 | Choppa (Factory New)",
              "entity": "StatTrak™ M4A4",
              "description": "Choppa",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 5.56,
              "colorId": 1,
              "reservedId": 27571,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60664,
              "name": "M4A1-S | Glitched Paint (Well-Worn)",
              "entity": "M4A1-S",
              "description": "Glitched Paint",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 7.43,
              "colorId": 3,
              "reservedId": 27584,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59638,
              "name": "UMP-45 | Crimson Foil (Battle-Scarred)",
              "entity": "UMP-45",
              "description": "Crimson Foil",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 8.29,
              "colorId": 3,
              "reservedId": 26811,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 60607,
              "name": "Galil AR | Control (Factory New)",
              "entity": "Galil AR",
              "description": "Control",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 9.5,
              "colorId": 3,
              "reservedId": 27319,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 16979,
              "name": "MP9 | Food Chain (Minimal Wear)",
              "entity": "MP9",
              "description": "Food Chain",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 10.66,
              "colorId": 5,
              "reservedId": 17265,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 54987,
              "name": "AK-47 | Steel Delta (Factory New)",
              "entity": "AK-47",
              "description": "Steel Delta",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 11.72,
              "colorId": 1,
              "reservedId": 20544,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 57811,
              "name": "M4A1-S | Black Lotus (Minimal Wear)",
              "entity": "M4A1-S",
              "description": "Black Lotus",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 13.7,
              "colorId": 5,
              "reservedId": 23386,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17125,
              "name": "AWP | POP AWP (Field-Tested)",
              "entity": "AWP",
              "description": "POP AWP",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 15.83,
              "colorId": 3,
              "reservedId": 16968,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58800,
              "name": "P90 | Attack Vector (Field-Tested)",
              "entity": "P90",
              "description": "Attack Vector",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 18.41,
              "colorId": 3,
              "reservedId": 26778,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15654,
              "name": "StatTrak™ M4A4 | Tooth Fairy (Minimal Wear)",
              "entity": "StatTrak™ M4A4",
              "description": "Tooth Fairy",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 21.58,
              "colorId": 5,
              "reservedId": 8124,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60502,
              "name": "AWP | Green Energy (Well-Worn)",
              "entity": "AWP",
              "description": "Green Energy",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 24.83,
              "colorId": 5,
              "reservedId": 27212,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52400,
              "name": "StatTrak™ AK-47 | Ice Coaled (Minimal Wear)",
              "entity": "StatTrak™ AK-47",
              "description": "Ice Coaled",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 28.55,
              "colorId": 5,
              "reservedId": 19612,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52395,
              "name": "Sawed-Off | Kiss♥Love (Factory New)",
              "entity": "Sawed-Off",
              "description": "Kiss♥Love",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 32.26,
              "colorId": 5,
              "reservedId": 19607,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 55819,
              "name": "AWP | Chrome Cannon (Field-Tested)",
              "entity": "AWP",
              "description": "Chrome Cannon",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 37.41,
              "colorId": 7,
              "reservedId": 21382,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17771,
              "name": "USP-S | The Traitor (Field-Tested)",
              "entity": "USP-S",
              "description": "The Traitor",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 44.17,
              "colorId": 7,
              "reservedId": 18463,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1661,
              "name": "M4A4 | The Battlestar (Field-Tested)",
              "entity": "M4A4",
              "description": "The Battlestar",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 50.95,
              "colorId": 7,
              "reservedId": 2173,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 9084,
              "name": "★ Survival Knife | Forest DDPAT (Field-Tested)",
              "entity": "★ Survival Knife",
              "description": "Forest DDPAT",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 67.14,
              "colorId": 7,
              "reservedId": 16742,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17850,
              "name": "★ Shadow Daggers | Freehand (Well-Worn)",
              "entity": "★ Shadow Daggers",
              "description": "Freehand",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 75.87,
              "colorId": 7,
              "reservedId": 18621,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 51235,
              "name": "AK-47 | Nightwish (Minimal Wear)",
              "entity": "AK-47",
              "description": "Nightwish",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 87.06,
              "colorId": 7,
              "reservedId": 18757,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60466,
              "name": "AK-47 | Nouveau Rouge (Minimal Wear)",
              "entity": "AK-47",
              "description": "Nouveau Rouge",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 100.72,
              "colorId": 5,
              "reservedId": 27165,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60561,
              "name": "FAMAS | Bad Trip (Factory New)",
              "entity": "FAMAS",
              "description": "Bad Trip",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 118.12,
              "colorId": 7,
              "reservedId": 27269,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 11741,
              "name": "StatTrak™ M4A1-S | Chantico's Fire (Battle-Scarred)",
              "entity": "StatTrak™ M4A1-S",
              "description": "Chantico's Fire",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 132.51,
              "colorId": 7,
              "reservedId": 7982,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60683,
              "name": "M4A4 | Hellish (Minimal Wear)",
              "entity": "M4A4",
              "description": "Hellish",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 155.19,
              "colorId": 5,
              "reservedId": 27552,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5821,
              "name": "★ Bayonet | Forest DDPAT (Well-Worn)",
              "entity": "★ Bayonet",
              "description": "Forest DDPAT",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 172.47,
              "colorId": 7,
              "reservedId": 13754,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 18,
              "name": "AK-47 | Bloodsport (Minimal Wear)",
              "entity": "AK-47",
              "description": "Bloodsport",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 195.83,
              "colorId": 7,
              "reservedId": 32,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55813,
              "name": "AK-47 | Inheritance (Factory New)",
              "entity": "AK-47",
              "description": "Inheritance",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 222.6,
              "colorId": 7,
              "reservedId": 21374,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1493,
              "name": "M4A1-S | Cyrex (Factory New)",
              "entity": "M4A1-S",
              "description": "Cyrex",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 275.88,
              "colorId": 7,
              "reservedId": 1970,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3311,
              "name": "StatTrak™ AK-47 | Fuel Injector (Battle-Scarred)",
              "entity": "StatTrak™ AK-47",
              "description": "Fuel Injector",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 330.2,
              "colorId": 7,
              "reservedId": 7076,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 8071,
              "name": "★ Stiletto Knife | Case Hardened (Field-Tested)",
              "entity": "★ Stiletto Knife",
              "description": "Case Hardened",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 404.02,
              "colorId": 7,
              "reservedId": 16656,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6198,
              "name": "★ Flip Knife | Fade (Factory New)",
              "entity": "★ Flip Knife",
              "description": "Fade",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 443.4,
              "colorId": 7,
              "reservedId": 14227,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 8951,
              "name": "★ Skeleton Knife | Slaughter (Factory New)",
              "entity": "★ Skeleton Knife",
              "description": "Slaughter",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 599.36,
              "colorId": 7,
              "reservedId": 15104,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 269,
              "name": "AWP | BOOM (Factory New)",
              "entity": "AWP",
              "description": "BOOM",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 667.6,
              "colorId": 5,
              "reservedId": 349,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 44,
              "name": "AK-47 | Fire Serpent (Battle-Scarred)",
              "entity": "AK-47",
              "description": "Fire Serpent",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 708.88,
              "colorId": 7,
              "reservedId": 58,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6675,
              "name": "★ M9 Bayonet | Slaughter (Minimal Wear)",
              "entity": "★ M9 Bayonet",
              "description": "Slaughter",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 970.12,
              "colorId": 7,
              "reservedId": 14723,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 137,
              "name": "AK-47 | Uncharted (Well-Worn)",
              "entity": "AK-47",
              "description": "Uncharted",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.77,
              "colorId": 1,
              "reservedId": 170,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60496,
              "name": "AWP | Arsenic Spill (Minimal Wear)",
              "entity": "AWP",
              "description": "Arsenic Spill",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 0.87,
              "colorId": 1,
              "reservedId": 27215,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17109,
              "name": "AUG | Plague (Field-Tested)",
              "entity": "AUG",
              "description": "Plague",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.98,
              "colorId": 1,
              "reservedId": 16949,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59656,
              "name": "USP-S | Alpine Camo (Minimal Wear)",
              "entity": "USP-S",
              "description": "Alpine Camo",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.26,
              "colorId": 1,
              "reservedId": 26954,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60480,
              "name": "AK-47 | Wintergreen (Field-Tested)",
              "entity": "AK-47",
              "description": "Wintergreen",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 1.29,
              "colorId": 1,
              "reservedId": 27176,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 4402,
              "name": "StatTrak™ MP9 | Goo (Field-Tested)",
              "entity": "StatTrak™ MP9",
              "description": "Goo",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 1.79,
              "colorId": 3,
              "reservedId": 8411,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60558,
              "name": "FAMAS | 2A2F (Minimal Wear)",
              "entity": "FAMAS",
              "description": "2A2F",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 2.25,
              "colorId": 1,
              "reservedId": 27280,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58576,
              "name": "Desert Eagle | Heat Treated (Field-Tested)",
              "entity": "Desert Eagle",
              "description": "Heat Treated",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 2.08,
              "colorId": 5,
              "reservedId": 26588,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60482,
              "name": "AK-47 | Wintergreen (Well-Worn)",
              "entity": "AK-47",
              "description": "Wintergreen",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 2.08,
              "colorId": 1,
              "reservedId": 27177,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60757,
              "name": "MP9 | Cobalt Paisley (Factory New)",
              "entity": "MP9",
              "description": "Cobalt Paisley",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 2.83,
              "colorId": 1,
              "reservedId": 27666,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58468,
              "name": "AK-47 | Crossfade (Minimal Wear)",
              "entity": "AK-47",
              "description": "Crossfade",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 4.2,
              "colorId": 1,
              "reservedId": 26652,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61928,
              "name": "USP-S | Tropical Breeze (Factory New)",
              "entity": "USP-S",
              "description": "Tropical Breeze",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 4.05,
              "colorId": 1,
              "reservedId": 27922,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61203,
              "name": "StatTrak™ M4A4 | Choppa (Factory New)",
              "entity": "StatTrak™ M4A4",
              "description": "Choppa",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 4.61,
              "colorId": 1,
              "reservedId": 27571,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58614,
              "name": "Five-SeveN | Heat Treated (Field-Tested)",
              "entity": "Five-SeveN",
              "description": "Heat Treated",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 7.01,
              "colorId": 3,
              "reservedId": 26608,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17279,
              "name": "M4A4 | Spider Lily (Well-Worn)",
              "entity": "M4A4",
              "description": "Spider Lily",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 7.37,
              "colorId": 3,
              "reservedId": 17179,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3468,
              "name": "StatTrak™ AWP | Mortis (Field-Tested)",
              "entity": "StatTrak™ AWP",
              "description": "Mortis",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 11.65,
              "colorId": 5,
              "reservedId": 7278,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16979,
              "name": "MP9 | Food Chain (Minimal Wear)",
              "entity": "MP9",
              "description": "Food Chain",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 9.96,
              "colorId": 5,
              "reservedId": 17265,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15644,
              "name": "StatTrak™ Glock-18 | Vogue (Battle-Scarred)",
              "entity": "StatTrak™ Glock-18",
              "description": "Vogue",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 10.2,
              "colorId": 5,
              "reservedId": 7893,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 57811,
              "name": "M4A1-S | Black Lotus (Minimal Wear)",
              "entity": "M4A1-S",
              "description": "Black Lotus",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 12.67,
              "colorId": 5,
              "reservedId": 23386,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17125,
              "name": "AWP | POP AWP (Field-Tested)",
              "entity": "AWP",
              "description": "POP AWP",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 13.43,
              "colorId": 3,
              "reservedId": 16968,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 54987,
              "name": "AK-47 | Steel Delta (Factory New)",
              "entity": "AK-47",
              "description": "Steel Delta",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 34.48,
              "colorId": 1,
              "reservedId": 20544,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16047,
              "name": "M4A4 | Global Offensive (Field-Tested)",
              "entity": "M4A4",
              "description": "Global Offensive",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 21.16,
              "colorId": 1,
              "reservedId": 2116,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 60502,
              "name": "AWP | Green Energy (Well-Worn)",
              "entity": "AWP",
              "description": "Green Energy",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 18.69,
              "colorId": 5,
              "reservedId": 27212,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52400,
              "name": "StatTrak™ AK-47 | Ice Coaled (Minimal Wear)",
              "entity": "StatTrak™ AK-47",
              "description": "Ice Coaled",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 27.57,
              "colorId": 5,
              "reservedId": 19612,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52395,
              "name": "Sawed-Off | Kiss♥Love (Factory New)",
              "entity": "Sawed-Off",
              "description": "Kiss♥Love",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 41.24,
              "colorId": 5,
              "reservedId": 19607,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 55819,
              "name": "AWP | Chrome Cannon (Field-Tested)",
              "entity": "AWP",
              "description": "Chrome Cannon",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 39.21,
              "colorId": 7,
              "reservedId": 21382,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17771,
              "name": "USP-S | The Traitor (Field-Tested)",
              "entity": "USP-S",
              "description": "The Traitor",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 50.47,
              "colorId": 7,
              "reservedId": 18463,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1661,
              "name": "M4A4 | The Battlestar (Field-Tested)",
              "entity": "M4A4",
              "description": "The Battlestar",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 39.05,
              "colorId": 7,
              "reservedId": 2173,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 9084,
              "name": "★ Survival Knife | Forest DDPAT (Field-Tested)",
              "entity": "★ Survival Knife",
              "description": "Forest DDPAT",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 73.57,
              "colorId": 7,
              "reservedId": 16742,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17850,
              "name": "★ Shadow Daggers | Freehand (Well-Worn)",
              "entity": "★ Shadow Daggers",
              "description": "Freehand",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 78.94,
              "colorId": 7,
              "reservedId": 18621,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 16431,
              "name": "★ Hand Wraps | Constrictor (Field-Tested)",
              "entity": "★ Hand Wraps",
              "description": "Constrictor",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 90.59,
              "colorId": 7,
              "reservedId": 14407,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60466,
              "name": "AK-47 | Nouveau Rouge (Minimal Wear)",
              "entity": "AK-47",
              "description": "Nouveau Rouge",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 73.64,
              "colorId": 5,
              "reservedId": 27165,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60561,
              "name": "FAMAS | Bad Trip (Factory New)",
              "entity": "FAMAS",
              "description": "Bad Trip",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 187.64,
              "colorId": 7,
              "reservedId": 27269,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 11741,
              "name": "StatTrak™ M4A1-S | Chantico's Fire (Battle-Scarred)",
              "entity": "StatTrak™ M4A1-S",
              "description": "Chantico's Fire",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 141.56,
              "colorId": 7,
              "reservedId": 7982,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60683,
              "name": "M4A4 | Hellish (Minimal Wear)",
              "entity": "M4A4",
              "description": "Hellish",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 138.47,
              "colorId": 5,
              "reservedId": 27552,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5821,
              "name": "★ Bayonet | Forest DDPAT (Well-Worn)",
              "entity": "★ Bayonet",
              "description": "Forest DDPAT",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 151.17,
              "colorId": 7,
              "reservedId": 13754,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 18,
              "name": "AK-47 | Bloodsport (Minimal Wear)",
              "entity": "AK-47",
              "description": "Bloodsport",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 206.98,
              "colorId": 7,
              "reservedId": 32,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55813,
              "name": "AK-47 | Inheritance (Factory New)",
              "entity": "AK-47",
              "description": "Inheritance",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 206.92,
              "colorId": 7,
              "reservedId": 21374,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1493,
              "name": "M4A1-S | Cyrex (Factory New)",
              "entity": "M4A1-S",
              "description": "Cyrex",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 251.94,
              "colorId": 7,
              "reservedId": 1970,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3311,
              "name": "StatTrak™ AK-47 | Fuel Injector (Battle-Scarred)",
              "entity": "StatTrak™ AK-47",
              "description": "Fuel Injector",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 272.21,
              "colorId": 7,
              "reservedId": 7076,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16429,
              "name": "★ Driver Gloves | Snow Leopard (Well-Worn)",
              "entity": "★ Driver Gloves",
              "description": "Snow Leopard",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 420.37,
              "colorId": 7,
              "reservedId": 14109,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 8149,
              "name": "★ Talon Knife | Crimson Web (Well-Worn)",
              "entity": "★ Talon Knife",
              "description": "Crimson Web",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 446.46,
              "colorId": 7,
              "reservedId": 16793,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 8951,
              "name": "★ Skeleton Knife | Slaughter (Factory New)",
              "entity": "★ Skeleton Knife",
              "description": "Slaughter",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 590.05,
              "colorId": 7,
              "reservedId": 15104,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 269,
              "name": "AWP | BOOM (Factory New)",
              "entity": "AWP",
              "description": "BOOM",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 667.6,
              "colorId": 5,
              "reservedId": 349,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 44,
              "name": "AK-47 | Fire Serpent (Battle-Scarred)",
              "entity": "AK-47",
              "description": "Fire Serpent",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 710.28,
              "colorId": 7,
              "reservedId": 58,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6675,
              "name": "★ M9 Bayonet | Slaughter (Minimal Wear)",
              "entity": "★ M9 Bayonet",
              "description": "Slaughter",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 986.88,
              "colorId": 7,
              "reservedId": 14723,
              "gameId": 730,
              "isSlowWithdraw": true
            }
          ],
          "gameId": null,
          "prices": null
        },
        {
          "id": 316,
          "localizationKey": "penny",
          "categoryLocalizationKey": null,
          "image": "https://cloud.this.team/boxes/penny.webp",
          "media": null,
          "price": 1.55,
          "discount": 0,
          "realPrice": 1.55,
          "priceWithDiscount": 1.55,
          "items": [
            {
              "id": 3219,
              "name": "Sawed-Off | Origami (Minimal Wear)",
              "entity": "Sawed-Off",
              "description": "Origami",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 0.38,
              "colorId": 1,
              "reservedId": 4282,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2052,
              "name": "MP9 | Capillary (Field-Tested)",
              "entity": "MP9",
              "description": "Capillary",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.47,
              "colorId": 1,
              "reservedId": 2709,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60825,
              "name": "P2000 | Royal Baroque (Field-Tested)",
              "entity": "P2000",
              "description": "Royal Baroque",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.44,
              "colorId": 1,
              "reservedId": 27399,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 9127,
              "name": "AWP | Capillary (Field-Tested)",
              "entity": "AWP",
              "description": "Capillary",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.75,
              "colorId": 1,
              "reservedId": 354,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 47570,
              "name": "USP-S | Ticket to Hell (Field-Tested)",
              "entity": "USP-S",
              "description": "Ticket to Hell",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.79,
              "colorId": 3,
              "reservedId": 18466,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 53365,
              "name": "StatTrak™ Glock-18 | Umbral Rabbit (Field-Tested)",
              "entity": "StatTrak™ Glock-18",
              "description": "Umbral Rabbit",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 1.13,
              "colorId": 3,
              "reservedId": 20050,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 3109,
              "name": "SSG 08 | Ghost Crusader (Well-Worn)",
              "entity": "SSG 08",
              "description": "Ghost Crusader",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.59,
              "colorId": 3,
              "reservedId": 4121,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2595,
              "name": "P250 | Wingshot (Field-Tested)",
              "entity": "P250",
              "description": "Wingshot",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 2.29,
              "colorId": 3,
              "reservedId": 3390,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52428,
              "name": "StatTrak™ M4A4 | Poly Mag (Factory New)",
              "entity": "StatTrak™ M4A4",
              "description": "Poly Mag",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 2.57,
              "colorId": 1,
              "reservedId": 19640,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58324,
              "name": "Sawed-Off | Analog Input (Factory New)",
              "entity": "Sawed-Off",
              "description": "Analog Input",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 2.36,
              "colorId": 3,
              "reservedId": 23933,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 548,
              "name": "CZ75-Auto | Tigris (Field-Tested)",
              "entity": "CZ75-Auto",
              "description": "Tigris",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 2.83,
              "colorId": 3,
              "reservedId": 730,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1424,
              "name": "M249 | Impact Drill (Field-Tested)",
              "entity": "M249",
              "description": "Impact Drill",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 3.3,
              "colorId": 4,
              "reservedId": 1884,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5393,
              "name": "Tec-9 | Remote Control (Battle-Scarred)",
              "entity": "Tec-9",
              "description": "Remote Control",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 4.08,
              "colorId": 5,
              "reservedId": 13250,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 123,
              "name": "AK-47 | Safety Net (Battle-Scarred)",
              "entity": "AK-47",
              "description": "Safety Net",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 4.01,
              "colorId": 3,
              "reservedId": 156,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58480,
              "name": "AUG | Eye of Zapems (Battle-Scarred)",
              "entity": "AUG",
              "description": "Eye of Zapems",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 4.28,
              "colorId": 3,
              "reservedId": 26675,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17198,
              "name": "FAMAS | ZX Spectron (Field-Tested)",
              "entity": "FAMAS",
              "description": "ZX Spectron",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 3.83,
              "colorId": 3,
              "reservedId": 17058,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 53807,
              "name": "UMP-45 | Wild Child (Battle-Scarred)",
              "entity": "UMP-45",
              "description": "Wild Child",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 3.91,
              "colorId": 5,
              "reservedId": 20493,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15469,
              "name": "M4A4 | Tooth Fairy (Battle-Scarred)",
              "entity": "M4A4",
              "description": "Tooth Fairy",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 4.62,
              "colorId": 5,
              "reservedId": 2181,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17628,
              "name": "StatTrak™ XM1014 | XOXO (Well-Worn)",
              "entity": "StatTrak™ XM1014",
              "description": "XOXO",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 4.99,
              "colorId": 5,
              "reservedId": 18057,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 9268,
              "name": "MAC-10 | Disco Tech (Field-Tested)",
              "entity": "MAC-10",
              "description": "Disco Tech",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 6.95,
              "colorId": 5,
              "reservedId": 2257,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 861,
              "name": "FAMAS | Eye of Athena (Field-Tested)",
              "entity": "FAMAS",
              "description": "Eye of Athena",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 7.52,
              "colorId": 5,
              "reservedId": 1172,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 57808,
              "name": "M4A1-S | Black Lotus (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Black Lotus",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 8.33,
              "colorId": 5,
              "reservedId": 23383,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1070,
              "name": "G3SG1 | Flux (Field-Tested)",
              "entity": "G3SG1",
              "description": "Flux",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 11.65,
              "colorId": 5,
              "reservedId": 1429,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 1545,
              "name": "M4A1-S | Nightmare (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Nightmare",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 15.14,
              "colorId": 5,
              "reservedId": 2027,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 3469,
              "name": "StatTrak™ AWP | Mortis (Minimal Wear)",
              "entity": "StatTrak™ AWP",
              "description": "Mortis",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 14.77,
              "colorId": 5,
              "reservedId": 7279,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1683,
              "name": "M4A4 | Zirka (Field-Tested)",
              "entity": "M4A4",
              "description": "Zirka",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 13.91,
              "colorId": 3,
              "reservedId": 2200,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 573,
              "name": "CZ75-Auto | Xiangliu (Well-Worn)",
              "entity": "CZ75-Auto",
              "description": "Xiangliu",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 18.5,
              "colorId": 5,
              "reservedId": 760,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 1686,
              "name": "M4A4 | 龍王 (Dragon King) (Battle-Scarred)",
              "entity": "M4A4",
              "description": "龍王 (Dragon King)",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 19.53,
              "colorId": 5,
              "reservedId": 2203,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 8780,
              "name": "Tec-9 | Decimator (Field-Tested)",
              "entity": "Tec-9",
              "description": "Decimator",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 23.38,
              "colorId": 5,
              "reservedId": 13183,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17246,
              "name": "Glock-18 | Snack Attack (Battle-Scarred)",
              "entity": "Glock-18",
              "description": "Snack Attack",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 26.2,
              "colorId": 5,
              "reservedId": 17129,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 4000,
              "name": "StatTrak™ Glock-18 | Water Elemental (Field-Tested)",
              "entity": "StatTrak™ Glock-18",
              "description": "Water Elemental",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 39.27,
              "colorId": 5,
              "reservedId": 7910,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 114,
              "name": "AK-47 | Redline (Battle-Scarred)",
              "entity": "AK-47",
              "description": "Redline",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 35.33,
              "colorId": 5,
              "reservedId": 147,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 8362,
              "name": "FAMAS | Commemoration (Field-Tested)",
              "entity": "FAMAS",
              "description": "Commemoration",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 48.15,
              "colorId": 7,
              "reservedId": 1138,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58697,
              "name": "M4A1-S | Vaporwave (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Vaporwave",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 76.72,
              "colorId": 7,
              "reservedId": 26930,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 17855,
              "name": "★ Shadow Daggers | Lore (Well-Worn)",
              "entity": "★ Shadow Daggers",
              "description": "Lore",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 82.81,
              "colorId": 7,
              "reservedId": 18628,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 6071,
              "name": "★ Driver Gloves | Overtake (Battle-Scarred)",
              "entity": "★ Driver Gloves",
              "description": "Overtake",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 79.4,
              "colorId": 7,
              "reservedId": 14085,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 47627,
              "name": "★ Huntsman Knife | Black Laminate (Well-Worn)",
              "entity": "★ Huntsman Knife",
              "description": "Black Laminate",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 96.93,
              "colorId": 7,
              "reservedId": 18585,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 145,
              "name": "AK-47 | Wasteland Rebel (Field-Tested)",
              "entity": "AK-47",
              "description": "Wasteland Rebel",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 122.94,
              "colorId": 7,
              "reservedId": 178,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 17804,
              "name": "★ Bowie Knife | Lore (Well-Worn)",
              "entity": "★ Bowie Knife",
              "description": "Lore",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 117.37,
              "colorId": 7,
              "reservedId": 18520,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 1515,
              "name": "M4A1-S | Guardian (Factory New)",
              "entity": "M4A1-S",
              "description": "Guardian",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 127.36,
              "colorId": 5,
              "reservedId": 1992,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60561,
              "name": "FAMAS | Bad Trip (Factory New)",
              "entity": "FAMAS",
              "description": "Bad Trip",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 187.64,
              "colorId": 7,
              "reservedId": 27269,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 6828,
              "name": "★ Shadow Daggers | Doppler (Factory New)",
              "entity": "★ Shadow Daggers",
              "description": "Doppler",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 186.17,
              "colorId": 7,
              "reservedId": 15013,
              "gameId": 730,
              "isSlowWithdraw": false
            }
          ],
          "gameId": null,
          "prices": null
        },
        {
          "id": 317,
          "localizationKey": "bichpaket",
          "categoryLocalizationKey": null,
          "image": "https://cloud.this.team/boxes/bichpaket.webp",
          "media": null,
          "price": 2.35,
          "discount": 0,
          "realPrice": 2.35,
          "priceWithDiscount": 2.35,
          "items": [
            {
              "id": 60611,
              "name": "Galil AR | Green Apple (Factory New)",
              "entity": "Galil AR",
              "description": "Green Apple",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 0.52,
              "colorId": 2,
              "reservedId": 27334,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60667,
              "name": "M4A1-S | Rose Hex (Field-Tested)",
              "entity": "M4A1-S",
              "description": "Rose Hex",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.44,
              "colorId": 1,
              "reservedId": 27588,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 59653,
              "name": "USP-S | Alpine Camo (Battle-Scarred)",
              "entity": "USP-S",
              "description": "Alpine Camo",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 0.67,
              "colorId": 1,
              "reservedId": 26957,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58703,
              "name": "M4A1-S | Wash me plz (Factory New)",
              "entity": "M4A1-S",
              "description": "Wash me plz",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 0.8,
              "colorId": 2,
              "reservedId": 26936,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5582,
              "name": "USP-S | Flashback (Well-Worn)",
              "entity": "USP-S",
              "description": "Flashback",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.03,
              "colorId": 3,
              "reservedId": 13474,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2494,
              "name": "P250 | Franklin (Field-Tested)",
              "entity": "P250",
              "description": "Franklin",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 1.79,
              "colorId": 5,
              "reservedId": 3283,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 881,
              "name": "FAMAS | Neural Net (Minimal Wear)",
              "entity": "FAMAS",
              "description": "Neural Net",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 2.38,
              "colorId": 3,
              "reservedId": 1192,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 8529,
              "name": "P2000 | Obsidian (Well-Worn)",
              "entity": "P2000",
              "description": "Obsidian",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 2.74,
              "colorId": 3,
              "reservedId": 3168,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 51527,
              "name": "M4A1-S | Night Terror (Factory New)",
              "entity": "M4A1-S",
              "description": "Night Terror",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 3.5,
              "colorId": 3,
              "reservedId": 18786,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 52396,
              "name": "Sawed-Off | Kiss♥Love (Field-Tested)",
              "entity": "Sawed-Off",
              "description": "Kiss♥Love",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 4.5,
              "colorId": 5,
              "reservedId": 19608,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 363,
              "name": "AWP | Worm God (Minimal Wear)",
              "entity": "AWP",
              "description": "Worm God",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 3.53,
              "colorId": 3,
              "reservedId": 482,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58374,
              "name": "USP-S | Jawbreaker (Well-Worn)",
              "entity": "USP-S",
              "description": "Jawbreaker",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 3.89,
              "colorId": 5,
              "reservedId": 23989,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58468,
              "name": "AK-47 | Crossfade (Minimal Wear)",
              "entity": "AK-47",
              "description": "Crossfade",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 4.2,
              "colorId": 1,
              "reservedId": 26652,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 53817,
              "name": "AWP | Duality (Battle-Scarred)",
              "entity": "AWP",
              "description": "Duality",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 4.52,
              "colorId": 5,
              "reservedId": 20503,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16978,
              "name": "MP9 | Food Chain (Field-Tested)",
              "entity": "MP9",
              "description": "Food Chain",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 4.79,
              "colorId": 5,
              "reservedId": 17264,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15465,
              "name": "Glock-18 | Vogue (Well-Worn)",
              "entity": "Glock-18",
              "description": "Vogue",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 5.3,
              "colorId": 5,
              "reservedId": 1763,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55817,
              "name": "AK-47 | Slate (Well-Worn)",
              "entity": "AK-47",
              "description": "Slate",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 5.93,
              "colorId": 3,
              "reservedId": 21378,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16943,
              "name": "AK-47 | Slate (Field-Tested)",
              "entity": "AK-47",
              "description": "Slate",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 6.11,
              "colorId": 3,
              "reservedId": 16941,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60468,
              "name": "AK-47 | Searing Rage (Battle-Scarred)",
              "entity": "AK-47",
              "description": "Searing Rage",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 7.95,
              "colorId": 5,
              "reservedId": 27158,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 5194,
              "name": "StatTrak™ USP-S | Cyrex (Battle-Scarred)",
              "entity": "StatTrak™ USP-S",
              "description": "Cyrex",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 9.33,
              "colorId": 3,
              "reservedId": 9383,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17348,
              "name": "MP9 | Mount Fuji (Well-Worn)",
              "entity": "MP9",
              "description": "Mount Fuji",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 8.1,
              "colorId": 3,
              "reservedId": 17271,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 61915,
              "name": "USP-S | Bleeding Edge (Minimal Wear)",
              "entity": "USP-S",
              "description": "Bleeding Edge",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 6.7,
              "colorId": 3,
              "reservedId": 27913,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60460,
              "name": "AK-47 | Midnight Laminate (Field-Tested)",
              "entity": "AK-47",
              "description": "Midnight Laminate",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 7.63,
              "colorId": 3,
              "reservedId": 27171,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 51232,
              "name": "AK-47 | Ice Coaled (Minimal Wear)",
              "entity": "AK-47",
              "description": "Ice Coaled",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 11.74,
              "colorId": 5,
              "reservedId": 18754,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60653,
              "name": "Glock-18 | Shinobu (Minimal Wear)",
              "entity": "Glock-18",
              "description": "Shinobu",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 13.53,
              "colorId": 5,
              "reservedId": 27353,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58923,
              "name": "StatTrak™ P250 | Epicenter (Field-Tested)",
              "entity": "StatTrak™ P250",
              "description": "Epicenter",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 10.85,
              "colorId": 5,
              "reservedId": 26878,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60674,
              "name": "M4A1-S | Stratosphere (Well-Worn)",
              "entity": "M4A1-S",
              "description": "Stratosphere",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 14.66,
              "colorId": 5,
              "reservedId": 27579,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60498,
              "name": "AWP | Green Energy (Battle-Scarred)",
              "entity": "AWP",
              "description": "Green Energy",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 17.42,
              "colorId": 5,
              "reservedId": 27213,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55008,
              "name": "Glock-18 | Ramese's Reach (Field-Tested)",
              "entity": "Glock-18",
              "description": "Ramese's Reach",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 20.13,
              "colorId": 3,
              "reservedId": 20565,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 58364,
              "name": "StatTrak™ USP-S | Jawbreaker (Minimal Wear)",
              "entity": "StatTrak™ USP-S",
              "description": "Jawbreaker",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 28.46,
              "colorId": 5,
              "reservedId": 23977,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17095,
              "name": "AK-47 | Green Laminate (Field-Tested)",
              "entity": "AK-47",
              "description": "Green Laminate",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 37.98,
              "colorId": 1,
              "reservedId": 16928,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16969,
              "name": "M4A4 | In Living Color (Battle-Scarred)",
              "entity": "M4A4",
              "description": "In Living Color",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 37.55,
              "colorId": 7,
              "reservedId": 17165,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 55820,
              "name": "AWP | Chrome Cannon (Minimal Wear)",
              "entity": "AWP",
              "description": "Chrome Cannon",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 47.89,
              "colorId": 7,
              "reservedId": 21383,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16433,
              "name": "★ Moto Gloves | 3rd Commando Company (Field-Tested)",
              "entity": "★ Moto Gloves",
              "description": "3rd Commando Company",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 75.89,
              "colorId": 7,
              "reservedId": 14743,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 16870,
              "name": "★ Broken Fang Gloves | Yellow-banded (Well-Worn)",
              "entity": "★ Broken Fang Gloves",
              "description": "Yellow-banded",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 75.63,
              "colorId": 7,
              "reservedId": 13919,
              "gameId": 730,
              "isSlowWithdraw": true
            },
            {
              "id": 16043,
              "name": "M4A4 | Cyber Security (Minimal Wear)",
              "entity": "M4A4",
              "description": "Cyber Security",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 95.94,
              "colorId": 5,
              "reservedId": 2077,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15933,
              "name": "AWP | Exoskeleton (Factory New)",
              "entity": "AWP",
              "description": "Exoskeleton",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 114.22,
              "colorId": 3,
              "reservedId": 380,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17776,
              "name": "USP-S | Whiteout (Field-Tested)",
              "entity": "USP-S",
              "description": "Whiteout",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 126.82,
              "colorId": 5,
              "reservedId": 18470,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60507,
              "name": "AWP | LongDog (Well-Worn)",
              "entity": "AWP",
              "description": "LongDog",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 128.11,
              "colorId": 7,
              "reservedId": 27197,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 53311,
              "name": "M4A4 | Temukau (Factory New)",
              "entity": "M4A4",
              "description": "Temukau",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 149.54,
              "colorId": 7,
              "reservedId": 19996,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 18,
              "name": "AK-47 | Bloodsport (Minimal Wear)",
              "entity": "AK-47",
              "description": "Bloodsport",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 206.98,
              "colorId": 7,
              "reservedId": 32,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 15860,
              "name": "★ Paracord Knife | Fade (Factory New)",
              "entity": "★ Paracord Knife",
              "description": "Fade",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 220.9,
              "colorId": 7,
              "reservedId": 14952,
              "gameId": 730,
              "isSlowWithdraw": false
            }
          ],
          "gameId": null,
          "prices": null
        }
      ],
      "bets": [
        {
          "id": 1188389,
          "place": 0,
          "deposit": 16.34,
          "withdraw": 23,
          "user": {
            "id": 186861,
            "name": "₡₳Х₳₱Ǿ₭",
            "avatar": "https://avatars.steamstatic.com/dd7b54f55530e4cd76c7662da1a402e5f399f05d_medium.jpg"
          },
          "status": "WIN",
          "items": [
            {
              "id": 15463,
              "name": "Glock-18 | Vogue (Field-Tested)",
              "entity": "Glock-18",
              "description": "Vogue",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 4.7,
              "colorId": 5,
              "reservedId": 1761,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17109,
              "name": "AUG | Plague (Field-Tested)",
              "entity": "AUG",
              "description": "Plague",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.98,
              "colorId": 1,
              "reservedId": 16949,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60825,
              "name": "P2000 | Royal Baroque (Field-Tested)",
              "entity": "P2000",
              "description": "Royal Baroque",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.53,
              "colorId": 1,
              "reservedId": 27399,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 363,
              "name": "AWP | Worm God (Minimal Wear)",
              "entity": "AWP",
              "description": "Worm God",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 3.63,
              "colorId": 3,
              "reservedId": 482,
              "gameId": 730,
              "isSlowWithdraw": false
            }
          ],
          "openAmount": 9.84,
          "roulette": {}
        },
        {
          "id": 1188390,
          "place": 1,
          "deposit": 16.34,
          "withdraw": 0,
          "user": {
            "id": 3509124,
            "name": "Bot Hmelnitski",
            "avatar": "https://cloud.this.team/bota/bot-hmelnitski.jpg"
          },
          "status": "LOSE",
          "items": [
            {
              "id": 3900,
              "name": "StatTrak™ Galil AR | Firefight (Well-Worn)",
              "entity": "StatTrak™ Galil AR",
              "description": "Firefight",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.64,
              "colorId": 3,
              "reservedId": 7785,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60757,
              "name": "MP9 | Cobalt Paisley (Factory New)",
              "entity": "MP9",
              "description": "Cobalt Paisley",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 3.24,
              "colorId": 1,
              "reservedId": 27666,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60825,
              "name": "P2000 | Royal Baroque (Field-Tested)",
              "entity": "P2000",
              "description": "Royal Baroque",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.53,
              "colorId": 1,
              "reservedId": 27399,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60667,
              "name": "M4A1-S | Rose Hex (Field-Tested)",
              "entity": "M4A1-S",
              "description": "Rose Hex",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.51,
              "colorId": 1,
              "reservedId": 27588,
              "gameId": 730,
              "isSlowWithdraw": false
            }
          ],
          "openAmount": 5.92,
          "roulette": {}
        },
        {
          "id": 1188391,
          "place": 2,
          "deposit": 16.34,
          "withdraw": 0,
          "user": {
            "id": 3509121,
            "name": "Bot Mikhailovich",
            "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
          },
          "status": "LOSE",
          "items": [
            {
              "id": 46857,
              "name": "M4A1-S | Night Terror (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Night Terror",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 1.35,
              "colorId": 3,
              "reservedId": 17162,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60558,
              "name": "FAMAS | 2A2F (Minimal Wear)",
              "entity": "FAMAS",
              "description": "2A2F",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.85,
              "colorId": 1,
              "reservedId": 27280,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2052,
              "name": "MP9 | Capillary (Field-Tested)",
              "entity": "MP9",
              "description": "Capillary",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.41,
              "colorId": 1,
              "reservedId": 2709,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 363,
              "name": "AWP | Worm God (Minimal Wear)",
              "entity": "AWP",
              "description": "Worm God",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 3.63,
              "colorId": 3,
              "reservedId": 482,
              "gameId": 730,
              "isSlowWithdraw": false
            }
          ],
          "openAmount": 7.24,
          "roulette": {}
        }
      ],
      "currentBetIndex": 2,
      "currentBoxIndex": 3,
      "viewersCount": 0
    }
  }
} 
тут смотрим ра жто 
"bets": [
        {
          "id": 1188389,
          "place": 0,
          "deposit": 16.34,
          "withdraw": 23,
          "user": {
            "id": 186861,
            "name": "₡₳Х₳₱Ǿ₭",
            "avatar": "https://avatars.steamstatic.com/dd7b54f55530e4cd76c7662da1a402e5f399f05d_medium.jpg"
          },
          "status": "WIN",
          "items": [
            {
              "id": 15463,
              "name": "Glock-18 | Vogue (Field-Tested)",
              "entity": "Glock-18",
              "description": "Vogue",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 4.7,
              "colorId": 5,
              "reservedId": 1761,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 17109,
              "name": "AUG | Plague (Field-Tested)",
              "entity": "AUG",
              "description": "Plague",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.98,
              "colorId": 1,
              "reservedId": 16949,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60825,
              "name": "P2000 | Royal Baroque (Field-Tested)",
              "entity": "P2000",
              "description": "Royal Baroque",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.53,
              "colorId": 1,
              "reservedId": 27399,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 363,
              "name": "AWP | Worm God (Minimal Wear)",
              "entity": "AWP",
              "description": "Worm God",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 3.63,
              "colorId": 3,
              "reservedId": 482,
              "gameId": 730,
              "isSlowWithdraw": false
            }
          ],
          "openAmount": 9.84,
          "roulette": {}
        },
        {
          "id": 1188390,
          "place": 1,
          "deposit": 16.34,
          "withdraw": 0,
          "user": {
            "id": 3509124,
            "name": "Bot Hmelnitski",
            "avatar": "https://cloud.this.team/bota/bot-hmelnitski.jpg"
          },
          "status": "LOSE",
          "items": [
            {
              "id": 3900,
              "name": "StatTrak™ Galil AR | Firefight (Well-Worn)",
              "entity": "StatTrak™ Galil AR",
              "description": "Firefight",
              "quality": "Well-Worn",
              "qualityId": 5,
              "price": 1.64,
              "colorId": 3,
              "reservedId": 7785,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60757,
              "name": "MP9 | Cobalt Paisley (Factory New)",
              "entity": "MP9",
              "description": "Cobalt Paisley",
              "quality": "Factory New",
              "qualityId": 2,
              "price": 3.24,
              "colorId": 1,
              "reservedId": 27666,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60825,
              "name": "P2000 | Royal Baroque (Field-Tested)",
              "entity": "P2000",
              "description": "Royal Baroque",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.53,
              "colorId": 1,
              "reservedId": 27399,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60667,
              "name": "M4A1-S | Rose Hex (Field-Tested)",
              "entity": "M4A1-S",
              "description": "Rose Hex",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.51,
              "colorId": 1,
              "reservedId": 27588,
              "gameId": 730,
              "isSlowWithdraw": false
            }
          ],
          "openAmount": 5.92,
          "roulette": {}
        },
        {
          "id": 1188391,
          "place": 2,
          "deposit": 16.34,
          "withdraw": 0,
          "user": {
            "id": 3509121,
            "name": "Bot Mikhailovich",
            "avatar": "https://cloud.this.team/bota/bot-mikhailovich.jpg"
          },
          "status": "LOSE",
          "items": [
            {
              "id": 46857,
              "name": "M4A1-S | Night Terror (Battle-Scarred)",
              "entity": "M4A1-S",
              "description": "Night Terror",
              "quality": "Battle-Scarred",
              "qualityId": 1,
              "price": 1.35,
              "colorId": 3,
              "reservedId": 17162,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 60558,
              "name": "FAMAS | 2A2F (Minimal Wear)",
              "entity": "FAMAS",
              "description": "2A2F",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 1.85,
              "colorId": 1,
              "reservedId": 27280,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 2052,
              "name": "MP9 | Capillary (Field-Tested)",
              "entity": "MP9",
              "description": "Capillary",
              "quality": "Field-Tested",
              "qualityId": 3,
              "price": 0.41,
              "colorId": 1,
              "reservedId": 2709,
              "gameId": 730,
              "isSlowWithdraw": false
            },
            {
              "id": 363,
              "name": "AWP | Worm God (Minimal Wear)",
              "entity": "AWP",
              "description": "Worm God",
              "quality": "Minimal Wear",
              "qualityId": 4,
              "price": 3.63,
              "colorId": 3,
              "reservedId": 482,
              "gameId": 730,
              "isSlowWithdraw": false
            }
          ],
          "openAmount": 7.24,
          "roulette": {}
        }
      ],
      
      
      "deposit": 16.34,
          "withdraw": 23,
          "user": {
            "id": 186861,
            "status": "WIN",
            смотрим у кого статус вин 
            в данный момент у пользователя 186861 
            deposit 16.34 значит столько каждый  участник этой игры потратил на эту игру 
            withdraw 23 принадледит тому кто выиграл (главное что б было больше нуля , тогда жто выражение справедливо ) 
            то есть человек вышел в плюс на 6.66$ (сайт потерял)
            
            если ид 3509124 3509122 3509126 3509125 то это боты сайта 
            и когда  они выигрывают допустим в кейсбатле 
            то выигрыш сайту идет сумма ставки deposit без умножения  на количество пользователей 
            так же если вдруг выиграло два и более людей то берем  только withdraw не бота 
            и это все если "type": "BOT_PVP",
            другой тайп игнорируем 
            и когда "status": "FINISHED",
если мы получаем ответ от апи {
  "error": "SERVICE_NOT_AVAILABLE",
  "errors": [],
  "payload": {}
}
значит этой игры нет и ждем 15 сек что бы повторно получить ответ о завершеной игры  
"status": "FINISHED", что бы перейти в следующей 

вотэ всех режимах игнорируем ид профиля 1096441
все его ставки и так , это админ


кейсы в лайв режиме 
curl -X GET 'https://cs2run.app/v1/box/live' -H 'Accept:application/json, text/plain, */*' -H 'Authorization:JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2ODYxLCJpYXQiOjE3NzMyNDI4OTYsImV4cCI6MTc3NDEwNjg5Nn0.qnl3fU3m5LKIwzQAWQemydZ_M4cXvCNEMbe_ZjD2kP4' -H 'Accept-Language:ru'

{
  "success": true,
  "date": "2026-03-18 20:27:24.469783044 +0000 UTC m=+19328.054356691",
  "data": {
    "default": [
      {
        "id": 61945,
        "userItemId": 3889906826,
        "item": {
          "id": 61945,
          "name": "XM1014 | Gum Wall Camo (Minimal Wear)",
          "entity": "XM1014",
          "description": "Gum Wall Camo",
          "quality": "",
          "qualityId": 4,
          "price": 0.09000000357627869,
          "colorId": 2,
          "reservedId": 27948,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 7.37
          },
          {
            "currencyId": 2,
            "value": 0.09
          }
        ],
        "box": {
          "id": 361,
          "localizationKey": "natusvincere",
          "boxCategoryId": 46,
          "order": 0,
          "status": 0,
          "slug": "natusvincere",
          "image": "https://cloud.this.team/boxes/natusvincere.webp",
          "price": 0.49000000953674316,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 3627174,
          "name": "маврик minecraft",
          "avatar": "https://avatars.steamstatic.com/efb226d766441b99201ac0fbdc9d8b9de7b2618b_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:27:17.485Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906825,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:27:16.819Z"
      },
      {
        "id": 125,
        "userItemId": 3889906824,
        "item": {
          "id": 125,
          "name": "AK-47 | Safety Net (Field-Tested)",
          "entity": "AK-47",
          "description": "Safety Net",
          "quality": "",
          "qualityId": 3,
          "price": 3.9800000190734863,
          "colorId": 3,
          "reservedId": 158,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 312.08
          },
          {
            "currencyId": 2,
            "value": 3.98
          }
        ],
        "box": {
          "id": 363,
          "localizationKey": "rotterdam",
          "boxCategoryId": 46,
          "order": 0,
          "status": 0,
          "slug": "rotterdam",
          "image": "https://cloud.this.team/boxes/rotterdam.webp",
          "price": 7.090000152587891,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 3690915,
          "name": "Лысый в прайме",
          "avatar": "https://avatars.steamstatic.com/16dbe20e8c0d9905d997f749aa75b68f8c8e4fdc_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:27:16.440Z"
      },
      {
        "id": 2979,
        "userItemId": 3889906823,
        "item": {
          "id": 2979,
          "name": "SG 553 | Aloha (Minimal Wear)",
          "entity": "SG 553",
          "description": "Aloha",
          "quality": "",
          "qualityId": 4,
          "price": 0.23999999463558197,
          "colorId": 1,
          "reservedId": 3950,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 17.2
          },
          {
            "currencyId": 2,
            "value": 0.24
          }
        ],
        "box": {
          "id": 361,
          "localizationKey": "natusvincere",
          "boxCategoryId": 46,
          "order": 0,
          "status": 0,
          "slug": "natusvincere",
          "image": "https://cloud.this.team/boxes/natusvincere.webp",
          "price": 0.49000000953674316,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 682619,
          "name": "XXs",
          "avatar": "https://avatars.steamstatic.com/13937b5b9041db9896f538b586388cfebaf5b520_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:27:16.250Z"
      },
      {
        "id": 60689,
        "userItemId": 3889906822,
        "item": {
          "id": 60689,
          "name": "M4A4 | Naval Shred Camo (Well-Worn)",
          "entity": "M4A4",
          "description": "Naval Shred Camo",
          "quality": "",
          "qualityId": 5,
          "price": 0.14000000059604645,
          "colorId": 2,
          "reservedId": 27564,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 9.83
          },
          {
            "currencyId": 2,
            "value": 0.14
          }
        ],
        "box": {
          "id": 361,
          "localizationKey": "natusvincere",
          "boxCategoryId": 46,
          "order": 0,
          "status": 0,
          "slug": "natusvincere",
          "image": "https://cloud.this.team/boxes/natusvincere.webp",
          "price": 0.49000000953674316,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 682619,
          "name": "XXs",
          "avatar": "https://avatars.steamstatic.com/13937b5b9041db9896f538b586388cfebaf5b520_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:27:16.250Z"
      },
      {
        "id": 60678,
        "userItemId": 3889906821,
        "item": {
          "id": 60678,
          "name": "M4A4 | Choppa (Minimal Wear)",
          "entity": "M4A4",
          "description": "Choppa",
          "quality": "",
          "qualityId": 4,
          "price": 0.30000001192092896,
          "colorId": 1,
          "reservedId": 27567,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 24.57
          },
          {
            "currencyId": 2,
            "value": 0.3
          }
        ],
        "box": {
          "id": 361,
          "localizationKey": "natusvincere",
          "boxCategoryId": 46,
          "order": 0,
          "status": 0,
          "slug": "natusvincere",
          "image": "https://cloud.this.team/boxes/natusvincere.webp",
          "price": 0.49000000953674316,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 682619,
          "name": "XXs",
          "avatar": "https://avatars.steamstatic.com/13937b5b9041db9896f538b586388cfebaf5b520_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:27:16.250Z"
      },
      {
        "id": 1464,
        "userItemId": 3889906819,
        "item": {
          "id": 1464,
          "name": "M4A1-S | Basilisk (Field-Tested)",
          "entity": "M4A1-S",
          "description": "Basilisk",
          "quality": "",
          "qualityId": 3,
          "price": 11.289999961853027,
          "colorId": 3,
          "reservedId": 1939,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 891.18
          },
          {
            "currencyId": 2,
            "value": 11.29
          }
        ],
        "box": {
          "id": 363,
          "localizationKey": "rotterdam",
          "boxCategoryId": 46,
          "order": 0,
          "status": 0,
          "slug": "rotterdam",
          "image": "https://cloud.this.team/boxes/rotterdam.webp",
          "price": 7.090000152587891,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 3690915,
          "name": "Лысый в прайме",
          "avatar": "https://avatars.steamstatic.com/16dbe20e8c0d9905d997f749aa75b68f8c8e4fdc_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:27:06.716Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906817,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:27:05.672Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906816,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:27:05.672Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906815,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:27:05.672Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906808,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:26:58.930Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906807,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:26:58.930Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906806,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:26:58.930Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906796,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:26:52.229Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906795,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:26:52.229Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906794,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:26:52.229Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906769,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:26:44.205Z"
      },
      {
        "id": 1473,
        "userItemId": 3889906768,
        "item": {
          "id": 1473,
          "name": "M4A1-S | Boreal Forest (Minimal Wear)",
          "entity": "M4A1-S",
          "description": "Boreal Forest",
          "quality": "",
          "qualityId": 4,
          "price": 0.33000001311302185,
          "colorId": 2,
          "reservedId": 1950,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 27.03
          },
          {
            "currencyId": 2,
            "value": 0.33
          }
        ],
        "box": {
          "id": 331,
          "localizationKey": "65865438567856",
          "boxCategoryId": 41,
          "order": 0,
          "status": 0,
          "slug": "65865438567856",
          "image": "",
          "price": 0.23000000417232513,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 163002,
          "name": "OldMoneyJuke",
          "avatar": "https://avatars.steamstatic.com/ae438308ff9e249ea7fdc3aaf8946ca23a27d81c_medium.jpg",
          "blm": false
        },
        "terminal": {
          "terminalId": 1,
          "localizationKey": "john",
          "coverUrl": "https://cloud.this.team/terminal/prod/pictures/john.webp"
        },
        "createdAt": "2026-03-18T20:26:40.966Z"
      },
      {
        "id": 328,
        "userItemId": 3889906767,
        "item": {
          "id": 328,
          "name": "AWP | PAW (Minimal Wear)",
          "entity": "AWP",
          "description": "PAW",
          "quality": "",
          "qualityId": 4,
          "price": 4.170000076293945,
          "colorId": 3,
          "reservedId": 432,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 350.58
          },
          {
            "currencyId": 2,
            "value": 4.17
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:26:36.308Z"
      },
      {
        "id": 53817,
        "userItemId": 3889906766,
        "item": {
          "id": 53817,
          "name": "AWP | Duality (Battle-Scarred)",
          "entity": "AWP",
          "description": "Duality",
          "quality": "",
          "qualityId": 1,
          "price": 4.519999980926514,
          "colorId": 5,
          "reservedId": 20503,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 366.96
          },
          {
            "currencyId": 2,
            "value": 4.52
          }
        ],
        "box": {
          "id": 333,
          "localizationKey": "658654385678563",
          "boxCategoryId": 41,
          "order": 0,
          "status": 0,
          "slug": "658654385678563",
          "image": "",
          "price": 3,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 4115029,
          "name": "splash69",
          "avatar": "https://avatars.steamstatic.com/57f69ac4a010e6a73a6221618d5056410c034a73_medium.jpg",
          "blm": false
        },
        "terminal": {
          "terminalId": 3,
          "localizationKey": "angelina",
          "coverUrl": "https://cloud.this.team/terminal/prod/pictures/angelina.webp"
        },
        "createdAt": "2026-03-18T20:26:35.379Z"
      },
      {
        "id": 61169,
        "userItemId": 3889906752,
        "item": {
          "id": 61169,
          "name": "SSG 08 | Tiger Tear (Field-Tested)",
          "entity": "SSG 08",
          "description": "Tiger Tear",
          "quality": "",
          "qualityId": 3,
          "price": 0.10000000149011612,
          "colorId": 2,
          "reservedId": 27814,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 8.19
          },
          {
            "currencyId": 2,
            "value": 0.1
          }
        ],
        "box": {
          "id": 161,
          "localizationKey": "asiimovcase",
          "boxCategoryId": 19,
          "order": 0,
          "status": 0,
          "slug": "asiimovcase",
          "image": "https://cloud.this.team/boxes/asiimovcase.webp",
          "price": 0.4399999976158142,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 937334,
          "name": "Шмель",
          "avatar": "https://avatars.steamstatic.com/9f21177a62ec2ae1cbd2a26bf4d19a0395a389af_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T20:26:29.288Z"
      }
    ],
    "top": [
      {
        "id": 5993,
        "userItemId": 3889894956,
        "item": {
          "id": 5993,
          "name": "★ Butterfly Knife | Doppler (Factory New)",
          "entity": "★ Butterfly Knife",
          "description": "Doppler",
          "quality": "",
          "qualityId": 2,
          "price": 2829.780029296875,
          "colorId": 7,
          "reservedId": 13946,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 226187.92
          },
          {
            "currencyId": 2,
            "value": 2829.78
          }
        ],
        "box": {
          "id": 214,
          "localizationKey": "forbes",
          "boxCategoryId": 24,
          "order": 0,
          "status": 0,
          "slug": "forbes",
          "image": "https://cloud.this.team/boxes/forbes.webp",
          "price": 1453.68994140625,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 3984966,
          "name": "ТикТак",
          "avatar": "https://avatars.steamstatic.com/34e3743980e43209c1c4dbcc6a2d52347fa65f74_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T17:48:27.544Z"
      },
      {
        "id": 5993,
        "userItemId": 3889894894,
        "item": {
          "id": 5993,
          "name": "★ Butterfly Knife | Doppler (Factory New)",
          "entity": "★ Butterfly Knife",
          "description": "Doppler",
          "quality": "",
          "qualityId": 2,
          "price": 2829.780029296875,
          "colorId": 7,
          "reservedId": 13946,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 226187.92
          },
          {
            "currencyId": 2,
            "value": 2829.78
          }
        ],
        "box": {
          "id": 214,
          "localizationKey": "forbes",
          "boxCategoryId": 24,
          "order": 0,
          "status": 0,
          "slug": "forbes",
          "image": "https://cloud.this.team/boxes/forbes.webp",
          "price": 1453.68994140625,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 3984966,
          "name": "ТикТак",
          "avatar": "https://avatars.steamstatic.com/34e3743980e43209c1c4dbcc6a2d52347fa65f74_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T17:47:49.610Z"
      },
      {
        "id": 307,
        "userItemId": 3889894216,
        "item": {
          "id": 307,
          "name": "AWP | Medusa (Field-Tested)",
          "entity": "AWP",
          "description": "Medusa",
          "quality": "",
          "qualityId": 3,
          "price": 2588.199951171875,
          "colorId": 7,
          "reservedId": 411,
          "gameId": 730,
          "isSlowWithdraw": false
        },
        "prices": [
          {
            "currencyId": 1,
            "value": 211996.95
          },
          {
            "currencyId": 2,
            "value": 2588.2
          }
        ],
        "box": {
          "id": 213,
          "localizationKey": "diamond",
          "boxCategoryId": 24,
          "order": 0,
          "status": 0,
          "slug": "diamond",
          "image": "https://cloud.this.team/boxes/diamond.webp",
          "price": 914.6099853515625,
          "priceWithDiscount": 0,
          "discount": 0
        },
        "user": {
          "id": 3984966,
          "name": "ТикТак",
          "avatar": "https://avatars.steamstatic.com/34e3743980e43209c1c4dbcc6a2d52347fa65f74_medium.jpg",
          "blm": false
        },
        "createdAt": "2026-03-18T17:41:05.532Z"
      }
    ]
  }
}

тут смотрим на default
например 

  {
    "id": 125,
    "userItemId": 3889906824,
    "item": {
      "name": "AK-47 | Safety Net (Field-Tested)",
      "price": 3.98
    },
    "box": {
      "slug": "rotterdam",
      "price": 7.09
    },
    "user": {
      "name": "Лысый в прайме"
    },
    "createdAt": "2026-03-18T20:27:16.440Z"
  },
  {
    "id": 1464,
    "userItemId": 3889906819,
    "item": {
      "name": "M4A1-S | Basilisk (Field-Tested)",
      "price": 11.29
    },
    "box": {
      "slug": "rotterdam",
      "price": 7.09
    },
    "user": {
      "name": "Лысый в прайме"
    },
    "createdAt": "2026-03-18T20:27:06.716Z"
  }

видис  что сумма кейса  "price": 7.09
дроп с кейса  "price": 11.29 
получается сайт отдал 4.2$ 
так же хочу сказать что уникальность открытий лучше смотреть по "createdAt": "2026-03-18T20:27:06.716Z"
по сумме кецса и дропу и name , просто других нет данных за что можно зацепиться 
либо же userItemId он всегда по возврастанию вроде
 из "top": 
 тоже самое смотрим box : price": 1453.68994140625  - стоимость кейса 
 и "price": 2829.780029296875, дроп с кейса 
 получается сайт потерял 2829.78-1453.69=1376.09 так же уникальность по userItemId плюс время createdAt можно 
 что бы повторно не обработать 
 
 вроде бы пока все 
 на счет запросов , делаем постояно с частотой 0.3 сек
 на счет краш режима ( именно просмотр прошлых игр ) тут сложно , так как с одним jwt можно делать 20запросов в минуту 
 поэтому тут быстроне полуится , хочу что бы было раз в день оно делало запрос curl -X GET 'https://csgorun.qzz.io/dam_data'
 и из ответа забирало "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI2MzI1MCwiaWF0IjoxNzczNDIwNjY1LCJleHAiOjE3NzQyODQ2NjV9.MMsM79SPiTWUAj6IcFAS-LPxJHW-s8D6-wYsJvO9A1k",
      этои есть jwt токен 
      
      
      {
  "1158831405 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "симпатяга",
      "type": "str"
    },
    "username (str)": {
      "value": "@simpatyaga9",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "6716126051 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEzOTE3MywiaWF0IjoxNzczNjc2NDY5LCJleHAiOjE3NzQ1NDA0Njl9.lQ0-4OqiPV5GqXS5_Yd8zypdn9lX9zTBSDkYopCIMEc",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEzOTE3MywiaWF0IjoxNzczNjc2NDY5LCJleHAiOjE3NzYyNjg0Njl9.9rQZSOb-uVSIpcCqk2eLqxhKd5473VaE8XIuDtu8yqk",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1774281269,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Белый",
      "type": "str"
    },
    "username (str)": {
      "value": "@Sm4kdat",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1776791160,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "basic",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": true,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-17T22:26:01.538129+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T22:26:11.538129+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "160 (str)": {
        "raffle_id (str)": {
          "value": "160",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-12T15:55:44.111937+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T16:10:53.111937+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "161 (str)": {
        "raffle_id (str)": {
          "value": "161",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T15:39:35.244928+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-04-07T15:53:35.244928+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:30:32.415033+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T21:00:43.415033+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "ez5",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867518,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "7267334348 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2NjY0MSwiaWF0IjoxNzcyMTMyMTQ3LCJleHAiOjE3NzI5OTYxNDd9.xtXXftdTm-hUTNikuGBv3E-zpM8PuRoxOSqtDB5sfFk",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2NjY0MSwiaWF0IjoxNzcyMTMyMTQ3LCJleHAiOjE3NzQ3MjQxNDd9.Ga5MoQEJEuE4bxtRH5u-laRdPMBcu5CNrID1G2O_TEA",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1772736947,
      "type": "int"
    },
    "display_name (str)": {
      "value": "🩼",
      "type": "str"
    },
    "username (str)": {
      "value": "@padaynamoydick",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "7703901917 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "non vbv",
      "type": "str"
    },
    "username (str)": {
      "value": "@empty_bits",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "7893986938 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY1Njc5NSwiaWF0IjoxNzcyMTIzMDE1LCJleHAiOjE3NzI5ODcwMTV9.Otu5EqYi2C-BQOpbQ0JMgQ11TJe4ifzPY31nU-dhRkk",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzY1Njc5NSwiaWF0IjoxNzcyMTIzMDE1LCJleHAiOjE3NzQ3MTUwMTV9.R8sTyo7g2fq2CPE1dAwvi5iFC74L5XzDyXMlhTResCw",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1772727815,
      "type": "int"
    },
    "display_name (str)": {
      "value": "niklys",
      "type": "str"
    },
    "username (str)": {
      "value": "@niklys444",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": true,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-02-13T02:35:37.890874+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-02-18T03:06:35.306176+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": null,
          "type": "NoneType"
        }
      },
      "160 (str)": {
        "raffle_id (str)": {
          "value": "160",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-02-12T16:17:44.792565+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-02-19T16:33:02.792565+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": null,
          "type": "NoneType"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-02-13T16:01:27.449239+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-02-17T05:03:17.306236+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": null,
          "type": "NoneType"
        }
      }
    },
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "-1003420740350 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": null,
      "type": "NoneType"
    },
    "username (str)": {
      "value": null,
      "type": "NoneType"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "8455743587 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTkyNjU0OCwiaWF0IjoxNzczMzMwNTAwLCJleHAiOjE3NzQxOTQ1MDB9.Fd76jacbW89ZS6dPQj8QUYY3yeRvTmzHfwWaSnwjv-c",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTkyNjU0OCwiaWF0IjoxNzczMzMwNTAwLCJleHAiOjE3NzU5MjI1MDB9._1Mddgk8g7dW962A16wl42Ve7kjRdW_8ifPhID-o3wo",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1773935300,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Ktoto",
      "type": "str"
    },
    "username (str)": {
      "value": "@ktoto322aye",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1788170940,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "basic",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": true,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T10:11:19.936152+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T10:11:19.936152+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "160 (str)": {
        "raffle_id (str)": {
          "value": "160",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-15T10:24:52.229702+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-22T10:39:52.229702+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "161 (str)": {
        "raffle_id (str)": {
          "value": "161",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-08T10:09:44.967798+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-28T10:23:53.967798+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "eze5",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773868017,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "8349059508 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mzk4MzI2NCwiaWF0IjoxNzczODMwODcwLCJleHAiOjE3NzQ2OTQ4NzB9.qSjv75EO-yyWyH_5O7jmg4Hr6Yceg-zlDvoxlM4_ulE",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mzk4MzI2NCwiaWF0IjoxNzczODMwODcwLCJleHAiOjE3NzY0MjI4NzB9.3EysudMpSN-b9Q2BfTpiFWWvloE3mMuxkUR0BTlCGoA",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1774435670,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Ratón español",
      "type": "str"
    },
    "username (str)": {
      "value": "@gg_all",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1776429960,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "premium",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T16:27:10.153402+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T16:27:10.153402+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:37:15.287944+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T21:07:26.287944+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "160 (str)": {
        "raffle_id (str)": {
          "value": "160",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T18:41:11.790320+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-25T18:56:11.790320+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "изи5",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867431,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    },
    "refresh_relogin_notified (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "1085353570 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI2MzI1MCwiaWF0IjoxNzczNDIwNjY1LCJleHAiOjE3NzQyODQ2NjV9.MMsM79SPiTWUAj6IcFAS-LPxJHW-s8D6-wYsJvO9A1k",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI2MzI1MCwiaWF0IjoxNzczNDIwNjY1LCJleHAiOjE3NzYwMTI2NjV9.g1HsbaR0dzT3IZoI0xF2F_6zQy4V6Y2wScfctwvI0c8",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1774025465,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Д",
      "type": "str"
    },
    "username (str)": {
      "value": "@k1d3rs",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1777048860,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "premium",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": true,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T16:19:06.458652+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T16:19:06.458652+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "160 (str)": {
        "raffle_id (str)": {
          "value": "160",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-12T16:18:12.162760+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T16:33:21.162760+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "161 (str)": {
        "raffle_id (str)": {
          "value": "161",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-12T16:18:13.761076+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-04-01T16:32:22.761076+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:31:52.852805+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T21:02:03.852805+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "Юра ну чек стату сними промобан почему керу уже 10 раз снимают долго на сайте босс",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867757,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "272134193 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDYyOTQ3LCJpYXQiOjE3NzMxNDI3MzEsImV4cCI6MTc3NDAwNjczMX0.El1paE9fPF6qeTjxnjnvYSXRPTkXOpLLqS5ZvbZRPx8",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDYyOTQ3LCJpYXQiOjE3NzMxNDI3MzEsImV4cCI6MTc3NTczNDczMX0.pc0qsZHhtp70Hfy7OSPkFEzWZurC4yF8G4hgbb92dc4",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1773747531,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Kirill",
      "type": "str"
    },
    "username (str)": {
      "value": "@fameog",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": true,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "5563296870 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUwNjc0NiwiaWF0IjoxNzcxNjcxMTk3LCJleHAiOjE3NzI1MzUxOTd9.kjSMmNH_HkN4Xk_zwPHS3djoIFPCu6CIZAKPpgrsTpE",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUwNjc0NiwiaWF0IjoxNzcxNjcxMTk3LCJleHAiOjE3NzQyNjMxOTd9.LS6q7C_RYd-N-OfqNWtyVuHkcda1_F1Zmk8RpOpG9vI",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1772275998,
      "type": "int"
    },
    "display_name (str)": {
      "value": "あいぜん",
      "type": "str"
    },
    "username (str)": {
      "value": "@Chepuxa_01",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "810706273 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMyMzY5LCJpYXQiOjE3NzM1ODg5NDMsImV4cCI6MTc3NDQ1Mjk0M30.0bQynLXZ8R2EFGKfOCuJZdUnxV9OyOkLoraXvkKUaEU",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMyMzY5LCJpYXQiOjE3NzM1ODg5NDMsImV4cCI6MTc3NjE4MDk0M30.fjK6JL_TvDxSfHCIP5ji0KsOokJ_mF2y-06dhu4tFRc",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1774193743,
      "type": "int"
    },
    "display_name (str)": {
      "value": "alas",
      "type": "str"
    },
    "username (str)": {
      "value": "@alastoroff",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1775666400,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "premium",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": true,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {
      "5 (str)": {
        "raffle_id (str)": {
          "value": "5",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-13T11:19:45.200630+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-20T11:19:54.200630+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T11:20:32.743276+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T11:20:32.743276+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "160 (str)": {
        "raffle_id (str)": {
          "value": "160",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-13T11:19:47.412502+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-20T11:34:56.412502+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "161 (str)": {
        "raffle_id (str)": {
          "value": "161",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-11T18:51:45.276331+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-31T19:05:54.276331+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:36:59.444942+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T21:07:10.444942+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "sticker:28",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867836,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "2056645715 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "Милана Хаметова",
      "type": "str"
    },
    "username (str)": {
      "value": "@megageniy_klyanus",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "7670499497 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIwOTY2NCwiaWF0IjoxNzcwMzIyMTI3LCJleHAiOjE3NzExODYxMjd9.1kS7CsvopdTCBEpQ4znt6Tk3WTOlWo4yQOQyld5E920",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIwOTY2NCwiaWF0IjoxNzcwMzIyMTI3LCJleHAiOjE3NzI5MTQxMjd9.f8_Z0_aVPFEzCiQ6vC0eJKVOOG7w1A2Y496BppsFsGA",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1770926927,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Vias Bounce",
      "type": "str"
    },
    "username (str)": {
      "value": "@ViasBounce",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "1126347328 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "Ic9Two",
      "type": "str"
    },
    "username (str)": {
      "value": "@Ic9Two",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "802085966 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Njg2NzExLCJpYXQiOjE3NzM2NzEzNjQsImV4cCI6MTc3NDUzNTM2NH0.rNmMoWXsqKUdX3Pg7XEp-a_Wvi5-uZnBdnD25MN12wM",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Njg2NzExLCJpYXQiOjE3NzM2NzEzNjQsImV4cCI6MTc3NjI2MzM2NH0.TDJCm782tSmRLcgStlrEWN_npjjkeprcpt_ncfnr5Fw",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1774276164,
      "type": "int"
    },
    "display_name (str)": {
      "value": "YEAGER",
      "type": "str"
    },
    "username (str)": {
      "value": "@yeager322",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1775492280,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "premium",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": true,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:49:29.831289+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T21:19:40.831289+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "ez5",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867607,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "1159776118 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDA4NjU4MCwiaWF0IjoxNzczMDU3NzYwLCJleHAiOjE3NzM5MjE3NjB9.wctvJmutP8b1vH58siTZIeWRlbA-rnv8DuXiZzlpw_8",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDA4NjU4MCwiaWF0IjoxNzczMDU3NzYwLCJleHAiOjE3NzU2NDk3NjB9._usB2prrg5jlW5bSqFEYbK1R80AhvdF0u3ahDHjUFWo",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1773662560,
      "type": "int"
    },
    "display_name (str)": {
      "value": "qpqpqp",
      "type": "str"
    },
    "username (str)": {
      "value": "@qpqpqpwho",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "RUB",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "932205679 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzkzNTIyMiwiaWF0IjoxNzczNzQ1NzQ3LCJleHAiOjE3NzQ2MDk3NDd9.tmn66P_LZ7xa-gVxEo_QMDxsaQkz0I6tBQqpTpgDNhE",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzkzNTIyMiwiaWF0IjoxNzczNzQ1NzQ3LCJleHAiOjE3NzYzMzc3NDd9.uvuPzwNnseomaoduJx2lSy0bfoQobZYi8Jrr1YrkPAw",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1774350547,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Lucky 322",
      "type": "str"
    },
    "username (str)": {
      "value": "@luck_unluck",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "RUB",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1775479740,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "premium",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": true,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {
      "161 (str)": {
        "raffle_id (str)": {
          "value": "161",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-04T06:32:07.785068+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-24T06:46:16.785068+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:49:50.637312+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T21:20:01.637312+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "eze5",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867558,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "700097935 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "grandgaev",
      "type": "str"
    },
    "username (str)": {
      "value": "@grandgaev",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "8124358625 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "Jonathon",
      "type": "str"
    },
    "username (str)": {
      "value": null,
      "type": "NoneType"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "-1003808523362 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": null,
      "type": "NoneType"
    },
    "username (str)": {
      "value": null,
      "type": "NoneType"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "8275474258 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDA1ODI3MiwiaWF0IjoxNzcxODYwODk0LCJleHAiOjE3NzI3MjQ4OTR9.H2O4s9KJ-kjBoSl_26ZqY9U4h5DtWqPG6rTkChjWwEQ",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDA1ODI3MiwiaWF0IjoxNzcxODYwODk0LCJleHAiOjE3NzQ0NTI4OTR9.20y4hdwZp4jWPFkzuDP4Tw2dHUTK-kWyjwMKE_iIsvw",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1772465694,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Obliviarch",
      "type": "str"
    },
    "username (str)": {
      "value": "@W1kind",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "5855177705 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDA1MDQxLCJpYXQiOjE3NzAyOTgxODYsImV4cCI6MTc3MTE2MjE4Nn0.FIXw9MOezb6F390EJ4j0BFfoQhKbKSzvWrUF0qeEDwE",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDA1MDQxLCJpYXQiOjE3NzAyOTgxODYsImV4cCI6MTc3Mjg5MDE4Nn0.H5H3EHokk1s9JxiQ9Ism7pAYBOhJX5y_VQPdssQ4vMI",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1770902986,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Хусейн",
      "type": "str"
    },
    "username (str)": {
      "value": "@hach_maga",
      "type": "str"
    },
    "active_nominals (str)": {
      "1 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "1078485798 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU2MjYwMCwiaWF0IjoxNzczMzMxMDYwLCJleHAiOjE3NzQxOTUwNjB9.IQJhEdrD9CN68MRY8O_qmHg9hLnt8O09YRSQ3-fzlx8",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU2MjYwMCwiaWF0IjoxNzczMzMxMDYwLCJleHAiOjE3NzU5MjMwNjB9.3WlPGosEy7-cGoqmyPGFibH3PVsU2zYOPwfOOtWjTnM",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1773935860,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Dm",
      "type": "str"
    },
    "username (str)": {
      "value": "@xxxkkkccc",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1775723220,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "basic",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T08:32:35.561536+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T08:32:45.561536+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "160 (str)": {
        "raffle_id (str)": {
          "value": "160",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-16T08:47:47.698532+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-23T09:02:47.698532+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "161 (str)": {
        "raffle_id (str)": {
          "value": "161",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-09T08:32:41.090354+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-29T08:46:50.090354+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:25:01.147376+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T20:55:12.147376+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "sticker:28",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867421,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "6491357783 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTY5OTgsImlhdCI6MTc3MTg4MTI1MiwiZXhwIjoxNzcyNzQ1MjUyfQ.55ldGE1UcQmDj-8iBWdpL5eshZcbPoyQ6vCWPMEhvO4",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTY5OTgsImlhdCI6MTc3MTg4MTI1MiwiZXhwIjoxNzc0NDczMjUyfQ.rGFTOw-4TgZXGyDHtR47NnanH--myDL8nhp95ekVs58",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1772486052,
      "type": "int"
    },
    "display_name (str)": {
      "value": "a",
      "type": "str"
    },
    "username (str)": {
      "value": "@sgawta",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "6527336827 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "🎎",
      "type": "str"
    },
    "username (str)": {
      "value": "@cht0tovnutri",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "7463853684 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "кер",
      "type": "str"
    },
    "username (str)": {
      "value": "@raskumarebeyshiy",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "754274025 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2ODYxLCJpYXQiOjE3NzMzMTUwMTksImV4cCI6MTc3NDE3OTAxOX0.cMfLKZbDjfsglyBC1tvKgqH99g5MibC9tyu_1ySXjlM",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTg2ODYxLCJpYXQiOjE3NzMzMTUwMTksImV4cCI6MTc3NTkwNzAxOX0.1jMwOgtZJTd32-Y-OuffZ16L9XEFNY9NgGpywtTZYGk",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1773919819,
      "type": "int"
    },
    "display_name (str)": {
      "value": "saxarok",
      "type": "str"
    },
    "username (str)": {
      "value": "@saxarok322",
      "type": "str"
    },
    "active_nominals (str)": {
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "RUB",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1774944360,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "premium",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": true,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T13:17:39.980729+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T13:17:39.980729+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "160 (str)": {
        "raffle_id (str)": {
          "value": "160",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-15T21:19:03.329514+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-22T21:34:03.329514+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "161 (str)": {
        "raffle_id (str)": {
          "value": "161",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-12T08:25:39.878441+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-04-01T08:39:48.878441+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:28:12.459674+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T20:58:23.459674+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "изи5",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773868006,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_admin_promo (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "7670381241 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjk2NzU1NywiaWF0IjoxNzczMzI5NDIwLCJleHAiOjE3NzQxOTM0MjB9.evB0s___Q1RRlR5xaht7Ac6jdJEHLS3YSzxjq7x5Wv0",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjk2NzU1NywiaWF0IjoxNzczMzI5NDIwLCJleHAiOjE3NzU5MjE0MjB9.9_X7wPcDeIWjSkpNceeZ7tJdSrNEm-tF89yyPkXEJ9A",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1773934220,
      "type": "int"
    },
    "display_name (str)": {
      "value": "Idk",
      "type": "str"
    },
    "username (str)": {
      "value": "@wmmqlql159",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "RUB",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1819325040,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "premium",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": true,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T15:05:39.075268+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T15:05:39.075268+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "160 (str)": {
        "raffle_id (str)": {
          "value": "160",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-15T10:15:57.975800+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-22T10:30:57.975800+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "sticker:28",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773868241,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "2099589593 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MDU1MSwiaWF0IjoxNzczNjc2ODAyLCJleHAiOjE3NzQ1NDA4MDJ9.r9wVtbxhO0cbgZZvJQwlH6PPIDb8tCMSwNKRnafq1kE",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM2MDU1MSwiaWF0IjoxNzczNjc2ODAyLCJleHAiOjE3NzYyNjg4MDJ9.WGc4knot0FOknHR4R0AzLHflnZk0lw-5Agmcbs5d2HA",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1774281602,
      "type": "int"
    },
    "display_name (str)": {
      "value": "ebo4ska",
      "type": "str"
    },
    "username (str)": {
      "value": "@ebo4ska",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1775485080,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "premium",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T16:13:14.762094+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T16:13:14.762094+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:25:55.046013+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T20:56:06.046013+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "sticker:28",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867595,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "1297004518 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "Роман",
      "type": "str"
    },
    "username (str)": {
      "value": "@gtamtf",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "1379593327 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjkzMzYwNiwiaWF0IjoxNzczMzI5OTQ4LCJleHAiOjE3NzQxOTM5NDh9.rAjLnvgaL4ul6UmVqQQxGaGxStsi7T7CMasipApH2hg",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjkzMzYwNiwiaWF0IjoxNzczMzI5OTQ4LCJleHAiOjE3NzU5MjE5NDh9.atByRLv9Q0T5b1sPmuyd32RHu4vbvzgFF_TX-zqlxOU",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1773934748,
      "type": "int"
    },
    "display_name (str)": {
      "value": "𝙎𝙚𝙧𝙜 𝙭 bear 🐻",
      "type": "str"
    },
    "username (str)": {
      "value": "@Sergxakame",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1775428380,
      "type": "int"
    },
    "subscription_tier (str)": {
      "value": "basic",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": true,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T12:14:23.327388+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T12:14:23.327388+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:39:14.018421+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T21:09:25.018421+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "sticker:69",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867498,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "6749957090 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAwMTY3NCwiaWF0IjoxNzczNjk3MDUyLCJleHAiOjE3NzQ1NjEwNTJ9.MXrSs-hRvjgcXEFZIaUhXrCRknKegMqm3TlbEjF_kTg",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAwMTY3NCwiaWF0IjoxNzczNjk3MDUyLCJleHAiOjE3NzYyODkwNTJ9.6_uRjDfkoJ565zVQRq8qJdv_HNKQyuLwWigGcd7Qk94",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1774301852,
      "type": "int"
    },
    "display_name (str)": {
      "value": "ImpudentDRUG",
      "type": "str"
    },
    "username (str)": {
      "value": "@maisonmargiella9",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1775235960,
      "type": "float"
    },
    "subscription_tier (str)": {
      "value": "basic",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": true,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T09:05:18.094206+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T09:05:28.094206+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "161 (str)": {
        "raffle_id (str)": {
          "value": "161",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-02T23:47:48.264344+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-23T00:01:57.264344+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:24:44.053245+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T20:54:55.053245+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "sticker:28",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867661,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "1054110870 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "Arty4ik",
      "type": "str"
    },
    "username (str)": {
      "value": "@Arty4ik",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "880860690 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "Артик 🚀",
      "type": "str"
    },
    "username (str)": {
      "value": "@ps_Artik",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": false,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_tier (str)": {
      "value": null,
      "type": "NoneType"
    },
    "notified_24h (str)": {
      "value": null,
      "type": "NoneType"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "1602904837 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjkzNDQ3MSwiaWF0IjoxNzczMzE1NzU4LCJleHAiOjE3NzQxNzk3NTh9._YTNXCwG5sas1aicLTICJZUbPsV2rT61ffDAi0J8Ohs",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjkzNDQ3MSwiaWF0IjoxNzczMzE1NzU4LCJleHAiOjE3NzU5MDc3NTh9.TGzzjoQx1g_w4Q5r374jyFK4jvoyxs7_n78R1_8rurE",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1773920558,
      "type": "int"
    },
    "display_name (str)": {
      "value": "ᅠ",
      "type": "str"
    },
    "username (str)": {
      "value": null,
      "type": "NoneType"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_until (str)": {
      "value": 1775845003.210837,
      "type": "float"
    },
    "subscription_tier (str)": {
      "value": "basic",
      "type": "str"
    },
    "notified_24h (str)": {
      "value": false,
      "type": "bool"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "rollrun",
      "type": "str"
    },
    "raffles (str)": {
      "5 (str)": {
        "raffle_id (str)": {
          "value": "5",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-12T11:44:45.495260+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T11:44:54.495260+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T11:45:43.465147+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T11:45:43.465147+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "160 (str)": {
        "raffle_id (str)": {
          "value": "160",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-12T11:44:46.827318+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T11:59:55.827318+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:49:50.639730+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T21:20:01.639730+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "sticker:28",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_session_check_time (str)": {
      "value": 1773867333,
      "type": "int"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  },
  "7394890929 (int)": {
    "access_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "refresh_token (str)": {
      "value": null,
      "type": "NoneType"
    },
    "next_refresh_time (str)": {
      "value": null,
      "type": "NoneType"
    },
    "display_name (str)": {
      "value": "твой герой",
      "type": "str"
    },
    "username (str)": {
      "value": "@mnogoproblem3",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": true,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "USD",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": true,
      "type": "bool"
    },
    "subscription_tier (str)": {
      "value": "premium",
      "type": "str"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {},
    "spam_message (str)": {
      "value": null,
      "type": "NoneType"
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    }
  },
  "1236827064 (int)": {
    "access_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjk2MDE0NSwiaWF0IjoxNzczODUwODIyLCJleHAiOjE3NzQ3MTQ4MjJ9.BDxI6i1wg8-p-Cq1HBF_Ysjv3sWV_6bL-fJmS8BZCO0",
      "type": "str"
    },
    "refresh_token (str)": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjk2MDE0NSwiaWF0IjoxNzczODUwODIyLCJleHAiOjE3NzY0NDI4MjJ9.mLGsPXx8cWdNIyMcZaZwokGP0XV6JXHVc9NupWIEkUY",
      "type": "str"
    },
    "next_refresh_time (str)": {
      "value": 1774455622,
      "type": "int"
    },
    "display_name (str)": {
      "value": "порядок .",
      "type": "str"
    },
    "username (str)": {
      "value": "@GlavGott",
      "type": "str"
    },
    "active_nominals (str)": {
      "0.25 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "0.5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "1 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "2 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "3 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "5 (Decimal)": {
        "value": true,
        "type": "bool"
      },
      "20 (Decimal)": {
        "value": false,
        "type": "bool"
      }
    },
    "waiting_for_refresh (str)": {
      "value": false,
      "type": "bool"
    },
    "waiting_for_refresh_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "currency (str)": {
      "value": "RUB",
      "type": "str"
    },
    "waiting_for_currency (str)": {
      "value": false,
      "type": "bool"
    },
    "suspended (str)": {
      "value": false,
      "type": "bool"
    },
    "subscription_tier (str)": {
      "value": "premium",
      "type": "str"
    },
    "summary_silent (str)": {
      "value": false,
      "type": "bool"
    },
    "primary_mode (str)": {
      "value": "upgrade",
      "type": "str"
    },
    "raffles (str)": {
      "169 (str)": {
        "raffle_id (str)": {
          "value": "169",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T20:53:14.484669+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-18T21:23:14.484669+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      },
      "159 (str)": {
        "raffle_id (str)": {
          "value": "159",
          "type": "str"
        },
        "last_run_at (str)": {
          "value": "2026-03-18T16:21:40.494661+00:00",
          "type": "datetime"
        },
        "next_run_at (str)": {
          "value": "2026-03-19T16:21:40.494661+00:00",
          "type": "datetime"
        },
        "task (str)": {
          "value": "<Task>",
          "type": "asyncio.Task"
        }
      }
    },
    "spam_message (str)": {
      "text (str)": {
        "value": "sticker:22",
        "type": "str"
      }
    },
    "waiting_for_spam_message (str)": {
      "value": false,
      "type": "bool"
    },
    "spam_prompt_message_id (str)": {
      "value": null,
      "type": "NoneType"
    },
    "spam_wait_task (str)": {
      "value": null,
      "type": "NoneType"
    },
    "subscription_until (str)": {
      "value": 1776442738.874764,
      "type": "float"
    },
    "next_session_check_time (str)": {
      "value": 1773867497,
      "type": "int"
    },
    "refresh_relogin_notified (str)": {
      "value": false,
      "type": "bool"
    },
    "session_check_in_progress (str)": {
      "value": false,
      "type": "bool"
    }
  }
}
 