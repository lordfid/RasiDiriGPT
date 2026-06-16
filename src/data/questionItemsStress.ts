import type { QuestionItem } from "../types";

export const STRESS_QUESTIONS: QuestionItem[] = [
  {
    "id": "stress_001",
    "kind": "firstReaction",
    "context": {
      "domain": "stress",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di depan beberapa orang, seseorang menaikkan suara dan menyebut kesalahanmu. Gelas plastik di tanganmu mengerut karena terlalu kuat digenggam.",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "stress_001_a",
        "text": "Aku menegakkan badan dan berkata, “jangan bicara seperti itu ke aku.”",
        "subtleMeaning": "fight",
        "weights": {
          "stress": {
            "fight": 2,
            "freeze": -0.5
          },
          "defense": {
            "control": 0.8
          },
          "coreFear": {
            "beingControlled": 1
          },
          "evidence": {
            "confrontation": 1,
            "angerResponse": 0.8
          },
          "positive": {
            "protectiveFire": 1
          },
          "negative": {
            "prematureAttack": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_001_b",
        "text": "Aku diam beberapa detik, mendengar suara AC terlalu jelas, lalu menahan semua kalimat di tenggorokan.",
        "subtleMeaning": "freeze",
        "weights": {
          "stress": {
            "freeze": 2,
            "actionFirst": -0.4
          },
          "defense": {
            "emotionalSuppression": 1
          },
          "coreFear": {
            "makingWrongMove": 1
          },
          "evidence": {
            "observeFirst": 1,
            "fearResponse": 0.8
          },
          "positive": {
            "pauseBeforeDamage": 1
          },
          "negative": {
            "delayedAction": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_001_c",
        "text": "Aku tersenyum kecil dan bilang, “nggak apa-apa,” meski tanganku sudah dingin.",
        "subtleMeaning": "fawn",
        "weights": {
          "stress": {
            "fawn": 2,
            "fight": -0.6
          },
          "defense": {
            "peoplePleasing": 1
          },
          "coreFear": {
            "beingRejected": 1
          },
          "evidence": {
            "appeasement": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "deescalationCare": 1
          },
          "negative": {
            "selfAbandonment": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_001_d",
        "text": "Aku mencari alasan untuk keluar dari ruangan sebelum wajahku bicara lebih banyak daripada mulutku.",
        "subtleMeaning": "flight",
        "weights": {
          "stress": {
            "flight": 2,
            "fight": -0.4
          },
          "defense": {
            "avoidance": 1
          },
          "coreFear": {
            "beingTrapped": 1
          },
          "evidence": {
            "riskAvoidance": 0.7,
            "withdrawal": 0.8
          },
          "positive": {
            "exitAwareness": 1
          },
          "negative": {
            "unfinishedRepair": -0.8
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_002",
    "kind": "singleChoice",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Saldo tinggal sedikit. Di meja ada tagihan mendadak, dan seseorang di rumah bertanya, “bisa dibayar hari ini?”",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "stress_002_a",
        "text": "Aku membuka catatan, membuat daftar cepat, dan memegang satu bagian yang masih bisa diatur.",
        "subtleMeaning": "control",
        "weights": {
          "stress": {
            "control": 2,
            "collapse": -0.5
          },
          "defense": {
            "perfectionism": 0.8,
            "control": 1
          },
          "coreFear": {
            "losingControl": 1
          },
          "evidence": {
            "practicalRepair": 0.8,
            "orderSeeking": 1
          },
          "positive": {
            "stabilizingMove": 1
          },
          "negative": {
            "rigidGrip": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_002_b",
        "text": "Aku duduk di tepi kasur dan mendadak tidak bisa memilih apa pun, bahkan membalas pesan sederhana.",
        "subtleMeaning": "collapse",
        "weights": {
          "stress": {
            "collapse": 2,
            "perform": -0.5
          },
          "defense": {
            "numb": 1,
            "selfBlame": 0.7
          },
          "coreFear": {
            "notEnough": 1
          },
          "evidence": {
            "shameResponse": 1,
            "withdrawal": 0.7
          },
          "positive": {
            "honestLimit": 1
          },
          "negative": {
            "vanishingUnderLoad": -0.7
          },
          "reliability": 0.76
        }
      },
      {
        "id": "stress_002_c",
        "text": "Aku memisahkan kejadian itu menjadi beberapa bagian kecil agar tidak tenggelam di perasaan sendiri.",
        "subtleMeaning": "intellectualize",
        "weights": {
          "stress": {
            "intellectualize": 2,
            "emotionalExpression": -0.5
          },
          "defense": {
            "intellectualization": 1,
            "rationalization": 0.7
          },
          "coreFear": {
            "beingOverwhelmed": 1
          },
          "evidence": {
            "internalChecking": 1,
            "analysisLoop": 0.8
          },
          "positive": {
            "clearDistance": 1
          },
          "negative": {
            "feelingDelay": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_002_d",
        "text": "Aku mengambil tas dan memilih jarak dulu daripada meledak di depan orang.",
        "subtleMeaning": "flight",
        "weights": {
          "stress": {
            "flight": 2,
            "fight": -0.4
          },
          "defense": {
            "avoidance": 1
          },
          "coreFear": {
            "beingTrapped": 1
          },
          "evidence": {
            "riskAvoidance": 0.7,
            "withdrawal": 0.8
          },
          "positive": {
            "exitAwareness": 1
          },
          "negative": {
            "unfinishedRepair": -0.8
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_003",
    "kind": "hiddenReaction",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Rencana yang kau pegang hancur saat semua orang sudah menunggu. Proyektor menyala, tapi file yang benar tidak terbuka.",
    "instruction": "Pilih reaksi yang mungkin tidak terlihat dari luar.",
    "options": [
      {
        "id": "stress_003_a",
        "text": "Aku merapikan suara dan tetap menjawab seperti orang yang baik-baik saja.",
        "subtleMeaning": "perform",
        "weights": {
          "stress": {
            "perform": 2,
            "collapse": -0.6
          },
          "defense": {
            "perfectionism": 0.7,
            "emotionalSuppression": 0.7
          },
          "coreFear": {
            "beingSeenFailing": 1
          },
          "evidence": {
            "visibleRole": 1,
            "shameResponse": 0.6
          },
          "positive": {
            "staysFunctional": 1
          },
          "negative": {
            "hiddenBurnout": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_003_b",
        "text": "Aku menghitung uang, waktu, dan orang yang bisa dihubungi sebelum membiarkan takut masuk.",
        "subtleMeaning": "control",
        "weights": {
          "stress": {
            "control": 2,
            "collapse": -0.5
          },
          "defense": {
            "perfectionism": 0.8,
            "control": 1
          },
          "coreFear": {
            "losingControl": 1
          },
          "evidence": {
            "practicalRepair": 0.8,
            "orderSeeking": 1
          },
          "positive": {
            "stabilizingMove": 1
          },
          "negative": {
            "rigidGrip": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_003_c",
        "text": "Aku menatap satu titik di meja sambil mencoba menebak langkah yang paling tidak merusak.",
        "subtleMeaning": "freeze",
        "weights": {
          "stress": {
            "freeze": 2,
            "actionFirst": -0.4
          },
          "defense": {
            "emotionalSuppression": 1
          },
          "coreFear": {
            "makingWrongMove": 1
          },
          "evidence": {
            "observeFirst": 1,
            "fearResponse": 0.8
          },
          "positive": {
            "pauseBeforeDamage": 1
          },
          "negative": {
            "delayedAction": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_003_d",
        "text": "Aku memotong kalimatnya sebelum semua orang ikut percaya pada versinya.",
        "subtleMeaning": "fight",
        "weights": {
          "stress": {
            "fight": 2,
            "freeze": -0.5
          },
          "defense": {
            "control": 0.8
          },
          "coreFear": {
            "beingControlled": 1
          },
          "evidence": {
            "confrontation": 1,
            "angerResponse": 0.8
          },
          "positive": {
            "protectiveFire": 1
          },
          "negative": {
            "prematureAttack": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_004",
    "kind": "singleChoice",
    "context": {
      "domain": "identity",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang memujimu di depan orang banyak. Semua tersenyum, tapi bagian dalam dirimu justru mundur selangkah.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "stress_004_a",
        "text": "Aku menyelesaikan tugas dulu, lalu baru membiarkan tangan gemetar setelah pintu tertutup.",
        "subtleMeaning": "perform",
        "weights": {
          "stress": {
            "perform": 2,
            "collapse": -0.6
          },
          "defense": {
            "perfectionism": 0.7,
            "emotionalSuppression": 0.7
          },
          "coreFear": {
            "beingSeenFailing": 1
          },
          "evidence": {
            "visibleRole": 1,
            "shameResponse": 0.6
          },
          "positive": {
            "staysFunctional": 1
          },
          "negative": {
            "hiddenBurnout": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_004_b",
        "text": "Aku mematikan lampu, bukan karena ingin tidur, tapi karena semua terasa terlalu penuh.",
        "subtleMeaning": "collapse",
        "weights": {
          "stress": {
            "collapse": 2,
            "perform": -0.5
          },
          "defense": {
            "numb": 1,
            "selfBlame": 0.7
          },
          "coreFear": {
            "notEnough": 1
          },
          "evidence": {
            "shameResponse": 1,
            "withdrawal": 0.7
          },
          "positive": {
            "honestLimit": 1
          },
          "negative": {
            "vanishingUnderLoad": -0.7
          },
          "reliability": 0.76
        }
      },
      {
        "id": "stress_004_c",
        "text": "Aku mencari alasan yang masuk akal dulu, karena kalau tidak, dadaku akan mengambil alih.",
        "subtleMeaning": "intellectualize",
        "weights": {
          "stress": {
            "intellectualize": 2,
            "emotionalExpression": -0.5
          },
          "defense": {
            "intellectualization": 1,
            "rationalization": 0.7
          },
          "coreFear": {
            "beingOverwhelmed": 1
          },
          "evidence": {
            "internalChecking": 1,
            "analysisLoop": 0.8
          },
          "positive": {
            "clearDistance": 1
          },
          "negative": {
            "feelingDelay": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_004_d",
        "text": "Aku menenangkan orang lain dulu supaya ruangan tidak pecah, walau dadaku sendiri berantakan.",
        "subtleMeaning": "fawn",
        "weights": {
          "stress": {
            "fawn": 2,
            "fight": -0.6
          },
          "defense": {
            "peoplePleasing": 1
          },
          "coreFear": {
            "beingRejected": 1
          },
          "evidence": {
            "appeasement": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "deescalationCare": 1
          },
          "negative": {
            "selfAbandonment": -0.8
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_005",
    "kind": "firstReaction",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Kau menemukan bukti kecil bahwa orang dekatmu tidak sepenuhnya jujur. Layar HP terasa terlalu terang di kamar gelap.",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "stress_005_a",
        "text": "Aku menegakkan badan dan berkata, “jangan bicara seperti itu ke aku.”",
        "subtleMeaning": "fight",
        "weights": {
          "stress": {
            "fight": 2,
            "freeze": -0.5
          },
          "defense": {
            "control": 0.8
          },
          "coreFear": {
            "beingControlled": 1
          },
          "evidence": {
            "confrontation": 1,
            "angerResponse": 0.8
          },
          "positive": {
            "protectiveFire": 1
          },
          "negative": {
            "prematureAttack": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_005_b",
        "text": "Aku diam beberapa detik, mendengar suara AC terlalu jelas, lalu menahan semua kalimat di tenggorokan.",
        "subtleMeaning": "freeze",
        "weights": {
          "stress": {
            "freeze": 2,
            "actionFirst": -0.4
          },
          "defense": {
            "emotionalSuppression": 1
          },
          "coreFear": {
            "makingWrongMove": 1
          },
          "evidence": {
            "observeFirst": 1,
            "fearResponse": 0.8
          },
          "positive": {
            "pauseBeforeDamage": 1
          },
          "negative": {
            "delayedAction": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_005_c",
        "text": "Aku mencari alasan untuk keluar dari ruangan sebelum wajahku bicara lebih banyak daripada mulutku.",
        "subtleMeaning": "flight",
        "weights": {
          "stress": {
            "flight": 2,
            "fight": -0.4
          },
          "defense": {
            "avoidance": 1
          },
          "coreFear": {
            "beingTrapped": 1
          },
          "evidence": {
            "riskAvoidance": 0.7,
            "withdrawal": 0.8
          },
          "positive": {
            "exitAwareness": 1
          },
          "negative": {
            "unfinishedRepair": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_005_d",
        "text": "Aku membuka catatan, membuat daftar cepat, dan memegang satu bagian yang masih bisa diatur.",
        "subtleMeaning": "control",
        "weights": {
          "stress": {
            "control": 2,
            "collapse": -0.5
          },
          "defense": {
            "perfectionism": 0.8,
            "control": 1
          },
          "coreFear": {
            "losingControl": 1
          },
          "evidence": {
            "practicalRepair": 0.8,
            "orderSeeking": 1
          },
          "positive": {
            "stabilizingMove": 1
          },
          "negative": {
            "rigidGrip": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_006",
    "kind": "hiddenReaction",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Setelah memberanikan diri berkata jujur, balasannya hanya, “aku belum bisa.” Suara motor lewat terdengar jauh sekali.",
    "instruction": "Pilih reaksi yang mungkin tidak terlihat dari luar.",
    "options": [
      {
        "id": "stress_006_a",
        "text": "Aku duduk di tepi kasur dan mendadak tidak bisa memilih apa pun, bahkan membalas pesan sederhana.",
        "subtleMeaning": "collapse",
        "weights": {
          "stress": {
            "collapse": 2,
            "perform": -0.5
          },
          "defense": {
            "numb": 1,
            "selfBlame": 0.7
          },
          "coreFear": {
            "notEnough": 1
          },
          "evidence": {
            "shameResponse": 1,
            "withdrawal": 0.7
          },
          "positive": {
            "honestLimit": 1
          },
          "negative": {
            "vanishingUnderLoad": -0.7
          },
          "reliability": 0.76
        }
      },
      {
        "id": "stress_006_b",
        "text": "Aku memisahkan kejadian itu menjadi beberapa bagian kecil agar tidak tenggelam di perasaan sendiri.",
        "subtleMeaning": "intellectualize",
        "weights": {
          "stress": {
            "intellectualize": 2,
            "emotionalExpression": -0.5
          },
          "defense": {
            "intellectualization": 1,
            "rationalization": 0.7
          },
          "coreFear": {
            "beingOverwhelmed": 1
          },
          "evidence": {
            "internalChecking": 1,
            "analysisLoop": 0.8
          },
          "positive": {
            "clearDistance": 1
          },
          "negative": {
            "feelingDelay": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_006_c",
        "text": "Aku mengambil tas dan memilih jarak dulu daripada meledak di depan orang.",
        "subtleMeaning": "flight",
        "weights": {
          "stress": {
            "flight": 2,
            "fight": -0.4
          },
          "defense": {
            "avoidance": 1
          },
          "coreFear": {
            "beingTrapped": 1
          },
          "evidence": {
            "riskAvoidance": 0.7,
            "withdrawal": 0.8
          },
          "positive": {
            "exitAwareness": 1
          },
          "negative": {
            "unfinishedRepair": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_006_d",
        "text": "Aku tersenyum kecil dan bilang, “nggak apa-apa,” meski tanganku sudah dingin.",
        "subtleMeaning": "fawn",
        "weights": {
          "stress": {
            "fawn": 2,
            "fight": -0.6
          },
          "defense": {
            "peoplePleasing": 1
          },
          "coreFear": {
            "beingRejected": 1
          },
          "evidence": {
            "appeasement": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "deescalationCare": 1
          },
          "negative": {
            "selfAbandonment": -0.8
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_007",
    "kind": "singleChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di tengah acara, seseorang membuka rahasiamu sebagai bahan lucu-lucuan. Semua orang menunggu reaksimu.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "stress_007_a",
        "text": "Aku memotong kalimatnya sebelum semua orang ikut percaya pada versinya.",
        "subtleMeaning": "fight",
        "weights": {
          "stress": {
            "fight": 2,
            "freeze": -0.5
          },
          "defense": {
            "control": 0.8
          },
          "coreFear": {
            "beingControlled": 1
          },
          "evidence": {
            "confrontation": 1,
            "angerResponse": 0.8
          },
          "positive": {
            "protectiveFire": 1
          },
          "negative": {
            "prematureAttack": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_007_b",
        "text": "Aku menatap satu titik di meja sambil mencoba menebak langkah yang paling tidak merusak.",
        "subtleMeaning": "freeze",
        "weights": {
          "stress": {
            "freeze": 2,
            "actionFirst": -0.4
          },
          "defense": {
            "emotionalSuppression": 1
          },
          "coreFear": {
            "makingWrongMove": 1
          },
          "evidence": {
            "observeFirst": 1,
            "fearResponse": 0.8
          },
          "positive": {
            "pauseBeforeDamage": 1
          },
          "negative": {
            "delayedAction": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_007_c",
        "text": "Aku merapikan suara dan tetap menjawab seperti orang yang baik-baik saja.",
        "subtleMeaning": "perform",
        "weights": {
          "stress": {
            "perform": 2,
            "collapse": -0.6
          },
          "defense": {
            "perfectionism": 0.7,
            "emotionalSuppression": 0.7
          },
          "coreFear": {
            "beingSeenFailing": 1
          },
          "evidence": {
            "visibleRole": 1,
            "shameResponse": 0.6
          },
          "positive": {
            "staysFunctional": 1
          },
          "negative": {
            "hiddenBurnout": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_007_d",
        "text": "Aku mencari alasan untuk keluar dari ruangan sebelum wajahku bicara lebih banyak daripada mulutku.",
        "subtleMeaning": "flight",
        "weights": {
          "stress": {
            "flight": 2,
            "fight": -0.4
          },
          "defense": {
            "avoidance": 1
          },
          "coreFear": {
            "beingTrapped": 1
          },
          "evidence": {
            "riskAvoidance": 0.7,
            "withdrawal": 0.8
          },
          "positive": {
            "exitAwareness": 1
          },
          "negative": {
            "unfinishedRepair": -0.8
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_008",
    "kind": "multiChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Deadline maju dua jam. Chat masuk bersamaan, kopi tumpah di dekat laptop, dan tidak ada yang tahu versi file terakhir.",
    "instruction": "Pilih maksimal 2 yang paling mungkin terjadi.",
    "options": [
      {
        "id": "stress_008_a",
        "text": "Aku menghitung uang, waktu, dan orang yang bisa dihubungi sebelum membiarkan takut masuk.",
        "subtleMeaning": "control",
        "weights": {
          "stress": {
            "control": 2,
            "collapse": -0.5
          },
          "defense": {
            "perfectionism": 0.8,
            "control": 1
          },
          "coreFear": {
            "losingControl": 1
          },
          "evidence": {
            "practicalRepair": 0.8,
            "orderSeeking": 1
          },
          "positive": {
            "stabilizingMove": 1
          },
          "negative": {
            "rigidGrip": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_008_b",
        "text": "Aku menyelesaikan tugas dulu, lalu baru membiarkan tangan gemetar setelah pintu tertutup.",
        "subtleMeaning": "perform",
        "weights": {
          "stress": {
            "perform": 2,
            "collapse": -0.6
          },
          "defense": {
            "perfectionism": 0.7,
            "emotionalSuppression": 0.7
          },
          "coreFear": {
            "beingSeenFailing": 1
          },
          "evidence": {
            "visibleRole": 1,
            "shameResponse": 0.6
          },
          "positive": {
            "staysFunctional": 1
          },
          "negative": {
            "hiddenBurnout": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_008_c",
        "text": "Aku menegakkan badan dan berkata, “jangan bicara seperti itu ke aku.”",
        "subtleMeaning": "fight",
        "weights": {
          "stress": {
            "fight": 2,
            "freeze": -0.5
          },
          "defense": {
            "control": 0.8
          },
          "coreFear": {
            "beingControlled": 1
          },
          "evidence": {
            "confrontation": 1,
            "angerResponse": 0.8
          },
          "positive": {
            "protectiveFire": 1
          },
          "negative": {
            "prematureAttack": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_008_d",
        "text": "Aku diam beberapa detik, mendengar suara AC terlalu jelas, lalu menahan semua kalimat di tenggorokan.",
        "subtleMeaning": "freeze",
        "weights": {
          "stress": {
            "freeze": 2,
            "actionFirst": -0.4
          },
          "defense": {
            "emotionalSuppression": 1
          },
          "coreFear": {
            "makingWrongMove": 1
          },
          "evidence": {
            "observeFirst": 1,
            "fearResponse": 0.8
          },
          "positive": {
            "pauseBeforeDamage": 1
          },
          "negative": {
            "delayedAction": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "stress_009",
    "kind": "hiddenReaction",
    "context": {
      "domain": "family",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Keluarga berkata kau terlalu berlebihan. Di dapur, air keran mengalir terlalu lama karena kau lupa mematikannya.",
    "instruction": "Pilih reaksi yang mungkin tidak terlihat dari luar.",
    "options": [
      {
        "id": "stress_009_a",
        "text": "Aku mematikan lampu, bukan karena ingin tidur, tapi karena semua terasa terlalu penuh.",
        "subtleMeaning": "collapse",
        "weights": {
          "stress": {
            "collapse": 2,
            "perform": -0.5
          },
          "defense": {
            "numb": 1,
            "selfBlame": 0.7
          },
          "coreFear": {
            "notEnough": 1
          },
          "evidence": {
            "shameResponse": 1,
            "withdrawal": 0.7
          },
          "positive": {
            "honestLimit": 1
          },
          "negative": {
            "vanishingUnderLoad": -0.7
          },
          "reliability": 0.76
        }
      },
      {
        "id": "stress_009_b",
        "text": "Aku menenangkan orang lain dulu supaya ruangan tidak pecah, walau dadaku sendiri berantakan.",
        "subtleMeaning": "fawn",
        "weights": {
          "stress": {
            "fawn": 2,
            "fight": -0.6
          },
          "defense": {
            "peoplePleasing": 1
          },
          "coreFear": {
            "beingRejected": 1
          },
          "evidence": {
            "appeasement": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "deescalationCare": 1
          },
          "negative": {
            "selfAbandonment": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_009_c",
        "text": "Aku memotong kalimatnya sebelum semua orang ikut percaya pada versinya.",
        "subtleMeaning": "fight",
        "weights": {
          "stress": {
            "fight": 2,
            "freeze": -0.5
          },
          "defense": {
            "control": 0.8
          },
          "coreFear": {
            "beingControlled": 1
          },
          "evidence": {
            "confrontation": 1,
            "angerResponse": 0.8
          },
          "positive": {
            "protectiveFire": 1
          },
          "negative": {
            "prematureAttack": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_009_d",
        "text": "Aku mencari alasan yang masuk akal dulu, karena kalau tidak, dadaku akan mengambil alih.",
        "subtleMeaning": "intellectualize",
        "weights": {
          "stress": {
            "intellectualize": 2,
            "emotionalExpression": -0.5
          },
          "defense": {
            "intellectualization": 1,
            "rationalization": 0.7
          },
          "coreFear": {
            "beingOverwhelmed": 1
          },
          "evidence": {
            "internalChecking": 1,
            "analysisLoop": 0.8
          },
          "positive": {
            "clearDistance": 1
          },
          "negative": {
            "feelingDelay": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_010",
    "kind": "ranking",
    "context": {
      "domain": "stress",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Malam itu semua terasa salah: pesan buruk, tubuh lelah, tugas belum selesai, dan seseorang tetap meminta kau menjawab sekarang.",
    "instruction": "Urutkan dari yang paling mungkin terjadi sampai yang paling jauh.",
    "options": [
      {
        "id": "stress_010_a",
        "text": "Aku membuka catatan, membuat daftar cepat, dan memegang satu bagian yang masih bisa diatur.",
        "subtleMeaning": "control",
        "weights": {
          "stress": {
            "control": 2,
            "collapse": -0.5
          },
          "defense": {
            "perfectionism": 0.8,
            "control": 1
          },
          "coreFear": {
            "losingControl": 1
          },
          "evidence": {
            "practicalRepair": 0.8,
            "orderSeeking": 1
          },
          "positive": {
            "stabilizingMove": 1
          },
          "negative": {
            "rigidGrip": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_010_b",
        "text": "Aku mengambil tas dan memilih jarak dulu daripada meledak di depan orang.",
        "subtleMeaning": "flight",
        "weights": {
          "stress": {
            "flight": 2,
            "fight": -0.4
          },
          "defense": {
            "avoidance": 1
          },
          "coreFear": {
            "beingTrapped": 1
          },
          "evidence": {
            "riskAvoidance": 0.7,
            "withdrawal": 0.8
          },
          "positive": {
            "exitAwareness": 1
          },
          "negative": {
            "unfinishedRepair": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_010_c",
        "text": "Aku menatap satu titik di meja sambil mencoba menebak langkah yang paling tidak merusak.",
        "subtleMeaning": "freeze",
        "weights": {
          "stress": {
            "freeze": 2,
            "actionFirst": -0.4
          },
          "defense": {
            "emotionalSuppression": 1
          },
          "coreFear": {
            "makingWrongMove": 1
          },
          "evidence": {
            "observeFirst": 1,
            "fearResponse": 0.8
          },
          "positive": {
            "pauseBeforeDamage": 1
          },
          "negative": {
            "delayedAction": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_010_d",
        "text": "Aku merapikan suara dan tetap menjawab seperti orang yang baik-baik saja.",
        "subtleMeaning": "perform",
        "weights": {
          "stress": {
            "perform": 2,
            "collapse": -0.6
          },
          "defense": {
            "perfectionism": 0.7,
            "emotionalSuppression": 0.7
          },
          "coreFear": {
            "beingSeenFailing": 1
          },
          "evidence": {
            "visibleRole": 1,
            "shameResponse": 0.6
          },
          "positive": {
            "staysFunctional": 1
          },
          "negative": {
            "hiddenBurnout": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_010_e",
        "text": "Aku duduk di tepi kasur dan mendadak tidak bisa memilih apa pun, bahkan membalas pesan sederhana.",
        "subtleMeaning": "collapse",
        "weights": {
          "stress": {
            "collapse": 2,
            "perform": -0.5
          },
          "defense": {
            "numb": 1,
            "selfBlame": 0.7
          },
          "coreFear": {
            "notEnough": 1
          },
          "evidence": {
            "shameResponse": 1,
            "withdrawal": 0.7
          },
          "positive": {
            "honestLimit": 1
          },
          "negative": {
            "vanishingUnderLoad": -0.7
          },
          "reliability": 0.76
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "stress_011",
    "kind": "singleChoice",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Dompetmu hampir kosong, tapi ada orang yang meminjam uang dengan suara yang membuatmu merasa bersalah.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "stress_011_a",
        "text": "Aku tersenyum kecil dan bilang, “nggak apa-apa,” meski tanganku sudah dingin.",
        "subtleMeaning": "fawn",
        "weights": {
          "stress": {
            "fawn": 2,
            "fight": -0.6
          },
          "defense": {
            "peoplePleasing": 1
          },
          "coreFear": {
            "beingRejected": 1
          },
          "evidence": {
            "appeasement": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "deescalationCare": 1
          },
          "negative": {
            "selfAbandonment": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_011_b",
        "text": "Aku menghitung uang, waktu, dan orang yang bisa dihubungi sebelum membiarkan takut masuk.",
        "subtleMeaning": "control",
        "weights": {
          "stress": {
            "control": 2,
            "collapse": -0.5
          },
          "defense": {
            "perfectionism": 0.8,
            "control": 1
          },
          "coreFear": {
            "losingControl": 1
          },
          "evidence": {
            "practicalRepair": 0.8,
            "orderSeeking": 1
          },
          "positive": {
            "stabilizingMove": 1
          },
          "negative": {
            "rigidGrip": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_011_c",
        "text": "Aku memisahkan kejadian itu menjadi beberapa bagian kecil agar tidak tenggelam di perasaan sendiri.",
        "subtleMeaning": "intellectualize",
        "weights": {
          "stress": {
            "intellectualize": 2,
            "emotionalExpression": -0.5
          },
          "defense": {
            "intellectualization": 1,
            "rationalization": 0.7
          },
          "coreFear": {
            "beingOverwhelmed": 1
          },
          "evidence": {
            "internalChecking": 1,
            "analysisLoop": 0.8
          },
          "positive": {
            "clearDistance": 1
          },
          "negative": {
            "feelingDelay": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_011_d",
        "text": "Aku mencari alasan untuk keluar dari ruangan sebelum wajahku bicara lebih banyak daripada mulutku.",
        "subtleMeaning": "flight",
        "weights": {
          "stress": {
            "flight": 2,
            "fight": -0.4
          },
          "defense": {
            "avoidance": 1
          },
          "coreFear": {
            "beingTrapped": 1
          },
          "evidence": {
            "riskAvoidance": 0.7,
            "withdrawal": 0.8
          },
          "positive": {
            "exitAwareness": 1
          },
          "negative": {
            "unfinishedRepair": -0.8
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_012",
    "kind": "singleChoice",
    "context": {
      "domain": "identity",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Kau salah bicara. Ruangan hening sebentar, lalu seseorang berkata, “ya ampun, kok bisa?”",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "stress_012_a",
        "text": "Aku mematikan lampu, bukan karena ingin tidur, tapi karena semua terasa terlalu penuh.",
        "subtleMeaning": "collapse",
        "weights": {
          "stress": {
            "collapse": 2,
            "perform": -0.5
          },
          "defense": {
            "numb": 1,
            "selfBlame": 0.7
          },
          "coreFear": {
            "notEnough": 1
          },
          "evidence": {
            "shameResponse": 1,
            "withdrawal": 0.7
          },
          "positive": {
            "honestLimit": 1
          },
          "negative": {
            "vanishingUnderLoad": -0.7
          },
          "reliability": 0.76
        }
      },
      {
        "id": "stress_012_b",
        "text": "Aku menyelesaikan tugas dulu, lalu baru membiarkan tangan gemetar setelah pintu tertutup.",
        "subtleMeaning": "perform",
        "weights": {
          "stress": {
            "perform": 2,
            "collapse": -0.6
          },
          "defense": {
            "perfectionism": 0.7,
            "emotionalSuppression": 0.7
          },
          "coreFear": {
            "beingSeenFailing": 1
          },
          "evidence": {
            "visibleRole": 1,
            "shameResponse": 0.6
          },
          "positive": {
            "staysFunctional": 1
          },
          "negative": {
            "hiddenBurnout": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_012_c",
        "text": "Aku menegakkan badan dan berkata, “jangan bicara seperti itu ke aku.”",
        "subtleMeaning": "fight",
        "weights": {
          "stress": {
            "fight": 2,
            "freeze": -0.5
          },
          "defense": {
            "control": 0.8
          },
          "coreFear": {
            "beingControlled": 1
          },
          "evidence": {
            "confrontation": 1,
            "angerResponse": 0.8
          },
          "positive": {
            "protectiveFire": 1
          },
          "negative": {
            "prematureAttack": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_012_d",
        "text": "Aku menenangkan orang lain dulu supaya ruangan tidak pecah, walau dadaku sendiri berantakan.",
        "subtleMeaning": "fawn",
        "weights": {
          "stress": {
            "fawn": 2,
            "fight": -0.6
          },
          "defense": {
            "peoplePleasing": 1
          },
          "coreFear": {
            "beingRejected": 1
          },
          "evidence": {
            "appeasement": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "deescalationCare": 1
          },
          "negative": {
            "selfAbandonment": -0.8
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_013",
    "kind": "firstReaction",
    "context": {
      "domain": "daily",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di jalan, seseorang menyerempetmu lalu malah marah. Orang-orang mulai melihat.",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "stress_013_a",
        "text": "Aku memotong kalimatnya sebelum semua orang ikut percaya pada versinya.",
        "subtleMeaning": "fight",
        "weights": {
          "stress": {
            "fight": 2,
            "freeze": -0.5
          },
          "defense": {
            "control": 0.8
          },
          "coreFear": {
            "beingControlled": 1
          },
          "evidence": {
            "confrontation": 1,
            "angerResponse": 0.8
          },
          "positive": {
            "protectiveFire": 1
          },
          "negative": {
            "prematureAttack": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_013_b",
        "text": "Aku mengambil tas dan memilih jarak dulu daripada meledak di depan orang.",
        "subtleMeaning": "flight",
        "weights": {
          "stress": {
            "flight": 2,
            "fight": -0.4
          },
          "defense": {
            "avoidance": 1
          },
          "coreFear": {
            "beingTrapped": 1
          },
          "evidence": {
            "riskAvoidance": 0.7,
            "withdrawal": 0.8
          },
          "positive": {
            "exitAwareness": 1
          },
          "negative": {
            "unfinishedRepair": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_013_c",
        "text": "Aku diam beberapa detik, mendengar suara AC terlalu jelas, lalu menahan semua kalimat di tenggorokan.",
        "subtleMeaning": "freeze",
        "weights": {
          "stress": {
            "freeze": 2,
            "actionFirst": -0.4
          },
          "defense": {
            "emotionalSuppression": 1
          },
          "coreFear": {
            "makingWrongMove": 1
          },
          "evidence": {
            "observeFirst": 1,
            "fearResponse": 0.8
          },
          "positive": {
            "pauseBeforeDamage": 1
          },
          "negative": {
            "delayedAction": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_013_d",
        "text": "Aku membuka catatan, membuat daftar cepat, dan memegang satu bagian yang masih bisa diatur.",
        "subtleMeaning": "control",
        "weights": {
          "stress": {
            "control": 2,
            "collapse": -0.5
          },
          "defense": {
            "perfectionism": 0.8,
            "control": 1
          },
          "coreFear": {
            "losingControl": 1
          },
          "evidence": {
            "practicalRepair": 0.8,
            "orderSeeking": 1
          },
          "positive": {
            "stabilizingMove": 1
          },
          "negative": {
            "rigidGrip": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_014",
    "kind": "hiddenReaction",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Atasan/dosen membandingkanmu dengan orang lain. Kau mengangguk, tapi kuku jarimu menekan telapak tangan.",
    "instruction": "Pilih reaksi yang mungkin tidak terlihat dari luar.",
    "options": [
      {
        "id": "stress_014_a",
        "text": "Aku merapikan suara dan tetap menjawab seperti orang yang baik-baik saja.",
        "subtleMeaning": "perform",
        "weights": {
          "stress": {
            "perform": 2,
            "collapse": -0.6
          },
          "defense": {
            "perfectionism": 0.7,
            "emotionalSuppression": 0.7
          },
          "coreFear": {
            "beingSeenFailing": 1
          },
          "evidence": {
            "visibleRole": 1,
            "shameResponse": 0.6
          },
          "positive": {
            "staysFunctional": 1
          },
          "negative": {
            "hiddenBurnout": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_014_b",
        "text": "Aku duduk di tepi kasur dan mendadak tidak bisa memilih apa pun, bahkan membalas pesan sederhana.",
        "subtleMeaning": "collapse",
        "weights": {
          "stress": {
            "collapse": 2,
            "perform": -0.5
          },
          "defense": {
            "numb": 1,
            "selfBlame": 0.7
          },
          "coreFear": {
            "notEnough": 1
          },
          "evidence": {
            "shameResponse": 1,
            "withdrawal": 0.7
          },
          "positive": {
            "honestLimit": 1
          },
          "negative": {
            "vanishingUnderLoad": -0.7
          },
          "reliability": 0.76
        }
      },
      {
        "id": "stress_014_c",
        "text": "Aku mencari alasan yang masuk akal dulu, karena kalau tidak, dadaku akan mengambil alih.",
        "subtleMeaning": "intellectualize",
        "weights": {
          "stress": {
            "intellectualize": 2,
            "emotionalExpression": -0.5
          },
          "defense": {
            "intellectualization": 1,
            "rationalization": 0.7
          },
          "coreFear": {
            "beingOverwhelmed": 1
          },
          "evidence": {
            "internalChecking": 1,
            "analysisLoop": 0.8
          },
          "positive": {
            "clearDistance": 1
          },
          "negative": {
            "feelingDelay": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_014_d",
        "text": "Aku menegakkan badan dan berkata, “jangan bicara seperti itu ke aku.”",
        "subtleMeaning": "fight",
        "weights": {
          "stress": {
            "fight": 2,
            "freeze": -0.5
          },
          "defense": {
            "control": 0.8
          },
          "coreFear": {
            "beingControlled": 1
          },
          "evidence": {
            "confrontation": 1,
            "angerResponse": 0.8
          },
          "positive": {
            "protectiveFire": 1
          },
          "negative": {
            "prematureAttack": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "stress_015",
    "kind": "multiChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Orang yang kau tunggu mengunggah sesuatu, tapi tetap tidak membalas pesanmu. Kamar terasa tiba-tiba lebih sempit.",
    "instruction": "Pilih maksimal 2 yang paling mungkin terjadi.",
    "options": [
      {
        "id": "stress_015_a",
        "text": "Aku menatap satu titik di meja sambil mencoba menebak langkah yang paling tidak merusak.",
        "subtleMeaning": "freeze",
        "weights": {
          "stress": {
            "freeze": 2,
            "actionFirst": -0.4
          },
          "defense": {
            "emotionalSuppression": 1
          },
          "coreFear": {
            "makingWrongMove": 1
          },
          "evidence": {
            "observeFirst": 1,
            "fearResponse": 0.8
          },
          "positive": {
            "pauseBeforeDamage": 1
          },
          "negative": {
            "delayedAction": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "stress_015_b",
        "text": "Aku mencari alasan untuk keluar dari ruangan sebelum wajahku bicara lebih banyak daripada mulutku.",
        "subtleMeaning": "flight",
        "weights": {
          "stress": {
            "flight": 2,
            "fight": -0.4
          },
          "defense": {
            "avoidance": 1
          },
          "coreFear": {
            "beingTrapped": 1
          },
          "evidence": {
            "riskAvoidance": 0.7,
            "withdrawal": 0.8
          },
          "positive": {
            "exitAwareness": 1
          },
          "negative": {
            "unfinishedRepair": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "stress_015_c",
        "text": "Aku mematikan lampu, bukan karena ingin tidur, tapi karena semua terasa terlalu penuh.",
        "subtleMeaning": "collapse",
        "weights": {
          "stress": {
            "collapse": 2,
            "perform": -0.5
          },
          "defense": {
            "numb": 1,
            "selfBlame": 0.7
          },
          "coreFear": {
            "notEnough": 1
          },
          "evidence": {
            "shameResponse": 1,
            "withdrawal": 0.7
          },
          "positive": {
            "honestLimit": 1
          },
          "negative": {
            "vanishingUnderLoad": -0.7
          },
          "reliability": 0.76
        }
      },
      {
        "id": "stress_015_d",
        "text": "Aku memisahkan kejadian itu menjadi beberapa bagian kecil agar tidak tenggelam di perasaan sendiri.",
        "subtleMeaning": "intellectualize",
        "weights": {
          "stress": {
            "intellectualize": 2,
            "emotionalExpression": -0.5
          },
          "defense": {
            "intellectualization": 1,
            "rationalization": 0.7
          },
          "coreFear": {
            "beingOverwhelmed": 1
          },
          "evidence": {
            "internalChecking": 1,
            "analysisLoop": 0.8
          },
          "positive": {
            "clearDistance": 1
          },
          "negative": {
            "feelingDelay": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  }
];
