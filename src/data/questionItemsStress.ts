import type { QuestionItem } from "../types";

export const STRESS_QUESTIONS: QuestionItem[] = [
  {
    "id": "stress_001",
    "kind": "forcedChoice",
    "context": {
      "domain": "stress",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Namamu disebut dengan nada tajam di depan ruangan. Pulpen di tanganmu terasa licin.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_001_a",
        "text": "Aku diam satu tarikan napas, menaruh pulpen, lalu menjawab hanya bagian yang perlu dijawab.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "9": 1.2,
            "5": 1.0
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
          },
          "stress": {
            "freeze": 0.5,
            "fawn": 0.3,
            "isolate": 0.7,
            "intellectualize": 0.5
          },
          "defense": {
            "withdrawal": 1.0,
            "intellectualization": 0.8
          },
          "positive": {
            "keptRoomGentle": 0.8,
            "cleanReason": 1,
            "protectedEnergy": 1
          },
          "negative": {
            "unspokenResentment": -0.7,
            "socialGuessing": -0.7,
            "unreachedHeart": -0.7
          },
          "evidence": {
            "peaceSeeking": 1,
            "internalCheck": 1,
            "truthSeeking": 0.8,
            "analysisLoop": 1
          },
          "cognitive": {
            "Ti": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "T": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.6,
            "critical": 0.3
          },
          "decision": {
            "evidenceBased": 0.9,
            "reflective": 0.5
          },
          "learning": {
            "analytical": 1.2,
            "solitary": 1.0
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_001_b",
        "text": "Aku menatap orang itu dan berkata, “tolong ulangi bagian yang kau maksud, supaya tidak jadi tuduhan kosong.”",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "values": {
            "justice": 0.8,
            "truth": 0.4
          },
          "conflict": {
            "directConfrontation": 0.7
          },
          "positive": {
            "stoodForFairness": 1,
            "presentMove": 1,
            "clearWords": 0.6
          },
          "negative": {
            "easySilence": -0.8,
            "overWaiting": -0.8,
            "muddyMessage": -0.5
          },
          "evidence": {
            "justiceSeeking": 1,
            "directEngagement": 1.7,
            "actionFirst": 1
          },
          "cognitive": {
            "Se": 2,
            "Ni": -0.6
          },
          "mbtiAxis": {
            "E": 0.6,
            "S": 1,
            "P": 0.5
          },
          "stackRole": {
            "dominant": 0.5,
            "inferior": 0.3
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 0.5
          },
          "communication": {
            "direct": 0.5,
            "gentle": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_001_a",
      "text": "Aku diam satu tarikan napas, menaruh pulpen, lalu menjawab hanya bagian yang perlu dijawab.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "9": 1.2,
          "5": 1.0
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
        },
        "stress": {
          "freeze": 0.5,
          "fawn": 0.3,
          "isolate": 0.7,
          "intellectualize": 0.5
        },
        "defense": {
          "withdrawal": 1.0,
          "intellectualization": 0.8
        },
        "positive": {
          "keptRoomGentle": 0.8,
          "cleanReason": 1,
          "protectedEnergy": 1
        },
        "negative": {
          "unspokenResentment": -0.7,
          "socialGuessing": -0.7,
          "unreachedHeart": -0.7
        },
        "evidence": {
          "peaceSeeking": 1,
          "internalCheck": 1,
          "truthSeeking": 0.8,
          "analysisLoop": 1
        },
        "cognitive": {
          "Ti": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "T": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.6,
          "critical": 0.3
        },
        "decision": {
          "evidenceBased": 0.9,
          "reflective": 0.5
        },
        "learning": {
          "analytical": 1.2,
          "solitary": 1.0
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_001_b",
      "text": "Aku menatap orang itu dan berkata, “tolong ulangi bagian yang kau maksud, supaya tidak jadi tuduhan kosong.”",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "values": {
          "justice": 0.8,
          "truth": 0.4
        },
        "conflict": {
          "directConfrontation": 0.7
        },
        "positive": {
          "stoodForFairness": 1,
          "presentMove": 1,
          "clearWords": 0.6
        },
        "negative": {
          "easySilence": -0.8,
          "overWaiting": -0.8,
          "muddyMessage": -0.5
        },
        "evidence": {
          "justiceSeeking": 1,
          "directEngagement": 1.7,
          "actionFirst": 1
        },
        "cognitive": {
          "Se": 2,
          "Ni": -0.6
        },
        "mbtiAxis": {
          "E": 0.6,
          "S": 1,
          "P": 0.5
        },
        "stackRole": {
          "dominant": 0.5,
          "inferior": 0.3
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 0.5
        },
        "communication": {
          "direct": 0.5,
          "gentle": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "defense",
      "conflict",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "conflict",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_002",
    "kind": "forcedChoice",
    "context": {
      "domain": "money",
      "pressureLevel": "crisis",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di kasur, struk belanja berserakan. Ada kebutuhan mendadak, dan saldo di layar terlihat terlalu kecil.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_002_a",
        "text": "Aku membuat daftar mana yang harus dibayar hari ini dan mana yang bisa dinegosiasikan.",
        "subtleMeaning": "hidden",
        "weights": {
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "evidence": {
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "orderSeeking": 1,
            "certaintySeeking": 1
          },
          "positive": {
            "keptSafe": 1,
            "madeItNeat": 1,
            "checkedRisk": 1
          },
          "negative": {
            "ignoredBody": -0.9,
            "messyLeap": -0.7,
            "blindLeap": -0.8
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "stress": {
            "control": 0.6
          },
          "riasec": {
            "Conventional": 0.9
          },
          "disc": {
            "C": 0.7
          },
          "work": {
            "refiner": 0.8,
            "planner": 0.4
          },
          "learning": {
            "structured": 0.6,
            "repetitionBased": 0.4
          },
          "enneagram": {
            "6": 1.1
          },
          "coreFear": {
            "unsafe": 0.8
          },
          "coreDesire": {
            "certainty": 0.7
          },
          "decision": {
            "riskAware": 0.7,
            "consultative": 0.4
          },
          "relationship": {
            "reassuranceSeeking": 0.6
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_002_b",
        "text": "Aku menghubungi satu orang yang bisa dipercaya sebelum kepalaku membuat skenario sendiri.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "6": 1.1
          },
          "coreFear": {
            "unsafe": 0.8
          },
          "coreDesire": {
            "certainty": 0.7
          },
          "decision": {
            "riskAware": 0.7,
            "consultative": 0.4
          },
          "relationship": {
            "reassuranceSeeking": 0.6,
            "repairSeeking": 1.2,
            "secureLeaning": 1.0
          },
          "positive": {
            "checkedRisk": 1,
            "softRepair": 1,
            "keptConnection": 0.6
          },
          "negative": {
            "blindLeap": -0.8,
            "coldCut": -0.8,
            "leftUnsaid": -0.5
          },
          "evidence": {
            "certaintySeeking": 1,
            "peopleFirst": 1,
            "repairSeeking": 1.3
          },
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.3
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_002_a",
      "text": "Aku membuat daftar mana yang harus dibayar hari ini dan mana yang bisa dinegosiasikan.",
      "subtleMeaning": "hidden",
      "weights": {
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "evidence": {
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "orderSeeking": 1,
          "certaintySeeking": 1
        },
        "positive": {
          "keptSafe": 1,
          "madeItNeat": 1,
          "checkedRisk": 1
        },
        "negative": {
          "ignoredBody": -0.9,
          "messyLeap": -0.7,
          "blindLeap": -0.8
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "stress": {
          "control": 0.6
        },
        "riasec": {
          "Conventional": 0.9
        },
        "disc": {
          "C": 0.7
        },
        "work": {
          "refiner": 0.8,
          "planner": 0.4
        },
        "learning": {
          "structured": 0.6,
          "repetitionBased": 0.4
        },
        "enneagram": {
          "6": 1.1
        },
        "coreFear": {
          "unsafe": 0.8
        },
        "coreDesire": {
          "certainty": 0.7
        },
        "decision": {
          "riskAware": 0.7,
          "consultative": 0.4
        },
        "relationship": {
          "reassuranceSeeking": 0.6
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_002_b",
      "text": "Aku menghubungi satu orang yang bisa dipercaya sebelum kepalaku membuat skenario sendiri.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "6": 1.1
        },
        "coreFear": {
          "unsafe": 0.8
        },
        "coreDesire": {
          "certainty": 0.7
        },
        "decision": {
          "riskAware": 0.7,
          "consultative": 0.4
        },
        "relationship": {
          "reassuranceSeeking": 0.6,
          "repairSeeking": 1.2,
          "secureLeaning": 1.0
        },
        "positive": {
          "checkedRisk": 1,
          "softRepair": 1,
          "keptConnection": 0.6
        },
        "negative": {
          "blindLeap": -0.8,
          "coldCut": -0.8,
          "leftUnsaid": -0.5
        },
        "evidence": {
          "certaintySeeking": 1,
          "peopleFirst": 1,
          "repairSeeking": 1.3
        },
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.3
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "decision",
      "instinct",
      "coreFear",
      "defense",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "decision",
      "instinct",
      "coreFear",
      "defense",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_003",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Rencana acara runtuh lima menit sebelum mulai. Kabel hilang, orang bertanya, dan suara ruangan makin keras.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_003_a",
        "text": "Aku memilih satu masalah yang paling terlihat dan menyelesaikannya dulu, baru memikirkan sisanya.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.6,
            "Te": 2,
            "Fi": -0.5
          },
          "mbtiAxis": {
            "E": 0.6,
            "S": 1,
            "P": 0.5,
            "T": 0.8,
            "J": 1
          },
          "stackRole": {
            "dominant": 1.0,
            "inferior": 0.3,
            "auxiliary": 0.6
          },
          "evidence": {
            "actionFirst": 1,
            "directEngagement": 0.9,
            "practicalRepair": 2,
            "systemFirst": 0.8
          },
          "positive": {
            "presentMove": 1,
            "handsOnRepair": 1,
            "clearNextStep": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "emptyTalk": -0.7,
            "looseProcess": -0.8
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 0.9,
            "C": 0.4
          },
          "riasec": {
            "Realistic": 1.0
          },
          "work": {
            "executor": 1.2,
            "stabilizer": 0.4,
            "planner": 0.8
          },
          "learning": {
            "experiential": 0.7
          },
          "bigFive": {
            "Conscientiousness": 0.3
          },
          "hexaco": {
            "Conscientiousness": 0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_003_b",
        "text": "Aku mengumpulkan dua orang terdekat dan berkata, “kita bagi: satu cari kabel, satu tahan orang di depan.”",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Enterprising": 0.8
          },
          "disc": {
            "D": 1.1,
            "I": 0.8,
            "C": 0.4
          },
          "work": {
            "leader": 0.7,
            "challenger": 0.4,
            "planner": 0.8,
            "executor": 0.6
          },
          "decision": {
            "fastAction": 0.5
          },
          "positive": {
            "tookResponsibility": 1,
            "clearNextStep": 1,
            "socialBridge": 1
          },
          "negative": {
            "waitingPermission": -0.7,
            "looseProcess": -0.8,
            "privateTunnel": -0.6
          },
          "evidence": {
            "actionFirst": 0.8,
            "practicalRepair": 1,
            "systemFirst": 0.8,
            "statusAwareness": 0.7,
            "visibleRole": 0.7
          },
          "cognitive": {
            "Te": 2,
            "Fi": -0.5
          },
          "mbtiAxis": {
            "T": 0.8,
            "J": 1
          },
          "stackRole": {
            "auxiliary": 0.6,
            "dominant": 0.5
          },
          "instinct": {
            "so": 1.5,
            "sp": -0.2
          },
          "relationship": {
            "belongingSeeking": 0.8
          },
          "communication": {
            "expressive": 0.5,
            "gentle": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_003_a",
      "text": "Aku memilih satu masalah yang paling terlihat dan menyelesaikannya dulu, baru memikirkan sisanya.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Se": 2,
          "Ni": -0.6,
          "Te": 2,
          "Fi": -0.5
        },
        "mbtiAxis": {
          "E": 0.6,
          "S": 1,
          "P": 0.5,
          "T": 0.8,
          "J": 1
        },
        "stackRole": {
          "dominant": 1.0,
          "inferior": 0.3,
          "auxiliary": 0.6
        },
        "evidence": {
          "actionFirst": 1,
          "directEngagement": 0.9,
          "practicalRepair": 2,
          "systemFirst": 0.8
        },
        "positive": {
          "presentMove": 1,
          "handsOnRepair": 1,
          "clearNextStep": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "emptyTalk": -0.7,
          "looseProcess": -0.8
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 0.9,
          "C": 0.4
        },
        "riasec": {
          "Realistic": 1.0
        },
        "work": {
          "executor": 1.2,
          "stabilizer": 0.4,
          "planner": 0.8
        },
        "learning": {
          "experiential": 0.7
        },
        "bigFive": {
          "Conscientiousness": 0.3
        },
        "hexaco": {
          "Conscientiousness": 0.3
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_003_b",
      "text": "Aku mengumpulkan dua orang terdekat dan berkata, “kita bagi: satu cari kabel, satu tahan orang di depan.”",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Enterprising": 0.8
        },
        "disc": {
          "D": 1.1,
          "I": 0.8,
          "C": 0.4
        },
        "work": {
          "leader": 0.7,
          "challenger": 0.4,
          "planner": 0.8,
          "executor": 0.6
        },
        "decision": {
          "fastAction": 0.5
        },
        "positive": {
          "tookResponsibility": 1,
          "clearNextStep": 1,
          "socialBridge": 1
        },
        "negative": {
          "waitingPermission": -0.7,
          "looseProcess": -0.8,
          "privateTunnel": -0.6
        },
        "evidence": {
          "actionFirst": 0.8,
          "practicalRepair": 1,
          "systemFirst": 0.8,
          "statusAwareness": 0.7,
          "visibleRole": 0.7
        },
        "cognitive": {
          "Te": 2,
          "Fi": -0.5
        },
        "mbtiAxis": {
          "T": 0.8,
          "J": 1
        },
        "stackRole": {
          "auxiliary": 0.6,
          "dominant": 0.5
        },
        "instinct": {
          "so": 1.5,
          "sp": -0.2
        },
        "relationship": {
          "belongingSeeking": 0.8
        },
        "communication": {
          "expressive": 0.5,
          "gentle": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "work",
      "disc",
      "decision",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "work",
      "disc",
      "decision",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_004",
    "kind": "forcedChoice",
    "context": {
      "domain": "identity",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Malam setelah dipuji, kau malah duduk lama di tepi kasur. Kata-kata baik itu seperti tidak menemukan tempat di tubuhmu.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_004_a",
        "text": "Aku menyimpan pujian itu tanpa membantah, walau belum sepenuhnya bisa percaya.",
        "subtleMeaning": "hidden",
        "weights": {
          "bigFive": {
            "Neuroticism": 0.8
          },
          "hexaco": {
            "Emotionality": 0.9
          },
          "attitudinalPsyche": {
            "E_insecure": 0.5,
            "E_flexible": 0.3
          },
          "stress": {
            "collapse": 0.4,
            "freeze": 0.8,
            "fawn": 0.3
          },
          "positive": {
            "honestTenderness": 0.8,
            "keptRoomGentle": 0.8,
            "quietCare": 0.6
          },
          "negative": {
            "floodedReaction": -0.5,
            "unspokenResentment": -0.7,
            "loudPromise": -0.5
          },
          "evidence": {
            "emotionalExpression": 0.8,
            "peaceSeeking": 1,
            "peopleFirst": 0.3
          },
          "enneagram": {
            "9": 1.2
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
          },
          "defense": {
            "withdrawal": 0.5
          },
          "loveStyle": {
            "steadyPresence": 0.4,
            "practicalCare": 0.3
          },
          "relationship": {
            "secureLeaning": 0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_004_b",
        "text": "Aku membuka catatan dan menulis apa yang benar-benar kulakukan sampai pujian itu mungkin masuk akal.",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Investigative": 1.0
          },
          "work": {
            "researcher": 0.8,
            "leader": 0.5,
            "executor": 0.5
          },
          "learning": {
            "analytical": 0.6,
            "structured": 0.3
          },
          "attitudinalPsyche": {
            "L_confident": 0.6
          },
          "positive": {
            "checkedBeforeMoving": 1,
            "cleanHands": 1,
            "visibleProgress": 1
          },
          "negative": {
            "performativeRush": -0.6,
            "smoothLie": -0.8,
            "identityCollapse": -0.5
          },
          "evidence": {
            "truthSeeking": 2,
            "achievementSeeking": 1
          },
          "hexaco": {
            "HonestyHumility": 1.0
          },
          "moral": {
            "truthBased": 0.8,
            "purityIntegrityBased": 0.4
          },
          "values": {
            "truth": 0.8,
            "achievement": 0.8,
            "competence": 0.4
          },
          "enneagram": {
            "3": 1.1
          },
          "coreFear": {
            "failure": 0.7
          },
          "coreDesire": {
            "worthThroughAchievement": 0.7
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_004_a",
      "text": "Aku menyimpan pujian itu tanpa membantah, walau belum sepenuhnya bisa percaya.",
      "subtleMeaning": "hidden",
      "weights": {
        "bigFive": {
          "Neuroticism": 0.8
        },
        "hexaco": {
          "Emotionality": 0.9
        },
        "attitudinalPsyche": {
          "E_insecure": 0.5,
          "E_flexible": 0.3
        },
        "stress": {
          "collapse": 0.4,
          "freeze": 0.8,
          "fawn": 0.3
        },
        "positive": {
          "honestTenderness": 0.8,
          "keptRoomGentle": 0.8,
          "quietCare": 0.6
        },
        "negative": {
          "floodedReaction": -0.5,
          "unspokenResentment": -0.7,
          "loudPromise": -0.5
        },
        "evidence": {
          "emotionalExpression": 0.8,
          "peaceSeeking": 1,
          "peopleFirst": 0.3
        },
        "enneagram": {
          "9": 1.2
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
        },
        "defense": {
          "withdrawal": 0.5
        },
        "loveStyle": {
          "steadyPresence": 0.4,
          "practicalCare": 0.3
        },
        "relationship": {
          "secureLeaning": 0.3
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_004_b",
      "text": "Aku membuka catatan dan menulis apa yang benar-benar kulakukan sampai pujian itu mungkin masuk akal.",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Investigative": 1.0
        },
        "work": {
          "researcher": 0.8,
          "leader": 0.5,
          "executor": 0.5
        },
        "learning": {
          "analytical": 0.6,
          "structured": 0.3
        },
        "attitudinalPsyche": {
          "L_confident": 0.6
        },
        "positive": {
          "checkedBeforeMoving": 1,
          "cleanHands": 1,
          "visibleProgress": 1
        },
        "negative": {
          "performativeRush": -0.6,
          "smoothLie": -0.8,
          "identityCollapse": -0.5
        },
        "evidence": {
          "truthSeeking": 2,
          "achievementSeeking": 1
        },
        "hexaco": {
          "HonestyHumility": 1.0
        },
        "moral": {
          "truthBased": 0.8,
          "purityIntegrityBased": 0.4
        },
        "values": {
          "truth": 0.8,
          "achievement": 0.8,
          "competence": 0.4
        },
        "enneagram": {
          "3": 1.1
        },
        "coreFear": {
          "failure": 0.7
        },
        "coreDesire": {
          "worthThroughAchievement": 0.7
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "defense",
      "coreFear",
      "coreDesire",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "coreFear",
      "coreDesire",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_005",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Kau tahu seseorang berbohong. Belum ada bukti penuh, tapi kalimatnya berubah setiap kali ditanya.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_005_a",
        "text": "Aku berhenti mengejar malam itu, menyimpan detailnya, dan menunggu saat yang lebih jelas untuk bicara.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.6
          },
          "mbtiAxis": {
            "I": 0.6,
            "N": 1,
            "J": 0.4
          },
          "stackRole": {
            "dominant": 0.6,
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.8,
            "certaintySeeking": 1,
            "analysisLoop": 1
          },
          "positive": {
            "patientReading": 1,
            "checkedRisk": 1,
            "protectedEnergy": 1
          },
          "negative": {
            "rushedMove": -0.8,
            "blindLeap": -0.8,
            "unreachedHeart": -0.7
          },
          "socionics": {
            "intuitiveEthical": 0.5
          },
          "quadra": {
            "Beta": 0.25,
            "Delta": 0.2
          },
          "enneagram": {
            "6": 1.1,
            "5": 1.0
          },
          "coreFear": {
            "unsafe": 0.8
          },
          "coreDesire": {
            "certainty": 0.7
          },
          "decision": {
            "riskAware": 0.7,
            "consultative": 0.4
          },
          "relationship": {
            "reassuranceSeeking": 0.6
          },
          "stress": {
            "isolate": 0.7,
            "intellectualize": 0.5
          },
          "defense": {
            "intellectualization": 0.8,
            "withdrawal": 0.5
          },
          "learning": {
            "solitary": 0.6,
            "analytical": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_005_b",
        "text": "Aku bertanya satu kali lagi dengan kalimat sederhana, “jawabanmu yang benar yang mana?”",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "values": {
            "justice": 0.8,
            "truth": 0.9,
            "autonomy": 0.7
          },
          "conflict": {
            "directConfrontation": 0.7,
            "boundaryCutoff": 0.5
          },
          "positive": {
            "stoodForFairness": 1,
            "cleanReason": 1,
            "keptSelfRespect": 1
          },
          "negative": {
            "easySilence": -0.8,
            "socialGuessing": -0.7,
            "selfErasure": -0.8
          },
          "evidence": {
            "justiceSeeking": 1,
            "directEngagement": 0.4,
            "internalCheck": 1,
            "truthSeeking": 0.8,
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "cognitive": {
            "Ti": 2,
            "Fe": -1.0,
            "Fi": 2
          },
          "mbtiAxis": {
            "T": 1,
            "I": 1.0,
            "F": 1
          },
          "stackRole": {
            "dominant": 1.1,
            "critical": 0.3,
            "opposing": 0.4
          },
          "decision": {
            "evidenceBased": 0.9,
            "reflective": 0.5
          },
          "learning": {
            "analytical": 0.7,
            "solitary": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_005_a",
      "text": "Aku berhenti mengejar malam itu, menyimpan detailnya, dan menunggu saat yang lebih jelas untuk bicara.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ni": 2,
          "Se": -0.6
        },
        "mbtiAxis": {
          "I": 0.6,
          "N": 1,
          "J": 0.4
        },
        "stackRole": {
          "dominant": 0.6,
          "opposing": 0.4
        },
        "evidence": {
          "observeFirst": 1,
          "indirectEngagement": 0.8,
          "certaintySeeking": 1,
          "analysisLoop": 1
        },
        "positive": {
          "patientReading": 1,
          "checkedRisk": 1,
          "protectedEnergy": 1
        },
        "negative": {
          "rushedMove": -0.8,
          "blindLeap": -0.8,
          "unreachedHeart": -0.7
        },
        "socionics": {
          "intuitiveEthical": 0.5
        },
        "quadra": {
          "Beta": 0.25,
          "Delta": 0.2
        },
        "enneagram": {
          "6": 1.1,
          "5": 1.0
        },
        "coreFear": {
          "unsafe": 0.8
        },
        "coreDesire": {
          "certainty": 0.7
        },
        "decision": {
          "riskAware": 0.7,
          "consultative": 0.4
        },
        "relationship": {
          "reassuranceSeeking": 0.6
        },
        "stress": {
          "isolate": 0.7,
          "intellectualize": 0.5
        },
        "defense": {
          "intellectualization": 0.8,
          "withdrawal": 0.5
        },
        "learning": {
          "solitary": 0.6,
          "analytical": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_005_b",
      "text": "Aku bertanya satu kali lagi dengan kalimat sederhana, “jawabanmu yang benar yang mana?”",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "values": {
          "justice": 0.8,
          "truth": 0.9,
          "autonomy": 0.7
        },
        "conflict": {
          "directConfrontation": 0.7,
          "boundaryCutoff": 0.5
        },
        "positive": {
          "stoodForFairness": 1,
          "cleanReason": 1,
          "keptSelfRespect": 1
        },
        "negative": {
          "easySilence": -0.8,
          "socialGuessing": -0.7,
          "selfErasure": -0.8
        },
        "evidence": {
          "justiceSeeking": 1,
          "directEngagement": 0.4,
          "internalCheck": 1,
          "truthSeeking": 0.8,
          "boundarySetting": 1,
          "selfRespect": 0.8
        },
        "cognitive": {
          "Ti": 2,
          "Fe": -1.0,
          "Fi": 2
        },
        "mbtiAxis": {
          "T": 1,
          "I": 1.0,
          "F": 1
        },
        "stackRole": {
          "dominant": 1.1,
          "critical": 0.3,
          "opposing": 0.4
        },
        "decision": {
          "evidenceBased": 0.9,
          "reflective": 0.5
        },
        "learning": {
          "analytical": 0.7,
          "solitary": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "defense",
      "relationship",
      "communication",
      "cognitive",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "relationship",
      "communication",
      "cognitive",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_006",
    "kind": "forcedChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Kau bangun dengan dada berat. Hari belum mulai, tapi pesan masuk sudah meminta sesuatu darimu.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_006_a",
        "text": "Aku menaruh HP jauh dari kasur, minum air, dan memberi tubuhku sepuluh menit sebelum membalas.",
        "subtleMeaning": "hidden",
        "weights": {
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "evidence": {
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "peaceSeeking": 1,
            "moodRegulation": 0.5
          },
          "positive": {
            "keptSafe": 1,
            "keptRoomGentle": 0.8,
            "foundBreath": 0.6
          },
          "negative": {
            "ignoredBody": -0.9,
            "unspokenResentment": -0.7,
            "ignoredAtmosphere": -0.5
          },
          "environment": {
            "privateSpace": 1.0,
            "functionalSpace": 0.4,
            "softCozySpace": 0.5
          },
          "stress": {
            "control": 0.6,
            "freeze": 0.5,
            "fawn": 0.3
          },
          "enneagram": {
            "9": 1.2
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
          },
          "defense": {
            "withdrawal": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_006_b",
        "text": "Aku membalas satu kalimat batas: “aku lihat nanti siang, sekarang aku belum bisa.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.5,
            "opposing": 0.4
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "directEngagement": 0.4
          },
          "positive": {
            "keptSelfRespect": 1,
            "keptSafe": 1,
            "clearWords": 0.6
          },
          "negative": {
            "selfErasure": -0.8,
            "ignoredBody": -0.9,
            "muddyMessage": -0.5
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.5
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "stress": {
            "control": 0.6
          },
          "communication": {
            "direct": 0.5,
            "gentle": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_006_a",
      "text": "Aku menaruh HP jauh dari kasur, minum air, dan memberi tubuhku sepuluh menit sebelum membalas.",
      "subtleMeaning": "hidden",
      "weights": {
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "evidence": {
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "peaceSeeking": 1,
          "moodRegulation": 0.5
        },
        "positive": {
          "keptSafe": 1,
          "keptRoomGentle": 0.8,
          "foundBreath": 0.6
        },
        "negative": {
          "ignoredBody": -0.9,
          "unspokenResentment": -0.7,
          "ignoredAtmosphere": -0.5
        },
        "environment": {
          "privateSpace": 1.0,
          "functionalSpace": 0.4,
          "softCozySpace": 0.5
        },
        "stress": {
          "control": 0.6,
          "freeze": 0.5,
          "fawn": 0.3
        },
        "enneagram": {
          "9": 1.2
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
        },
        "defense": {
          "withdrawal": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_006_b",
      "text": "Aku membalas satu kalimat batas: “aku lihat nanti siang, sekarang aku belum bisa.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.5,
          "opposing": 0.4
        },
        "evidence": {
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "directEngagement": 0.4
        },
        "positive": {
          "keptSelfRespect": 1,
          "keptSafe": 1,
          "clearWords": 0.6
        },
        "negative": {
          "selfErasure": -0.8,
          "ignoredBody": -0.9,
          "muddyMessage": -0.5
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.5
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "stress": {
          "control": 0.6
        },
        "communication": {
          "direct": 0.5,
          "gentle": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "defense",
      "relationship",
      "environment",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "relationship",
      "environment",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_007",
    "kind": "forcedChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Nilaimu turun, dan teman di sebelah berkata, “tumben kamu segitu.” Kertas itu masih hangat dari printer.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_007_a",
        "text": "Aku melipat kertasnya, diam dulu, lalu mencari bagian mana yang benar-benar salah.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ti": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "T": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.6,
            "critical": 0.3
          },
          "evidence": {
            "internalCheck": 1,
            "truthSeeking": 1.8,
            "analysisLoop": 1
          },
          "positive": {
            "cleanReason": 1,
            "checkedBeforeMoving": 1,
            "protectedEnergy": 1
          },
          "negative": {
            "socialGuessing": -0.7,
            "performativeRush": -0.6,
            "unreachedHeart": -0.7
          },
          "decision": {
            "evidenceBased": 0.9,
            "reflective": 0.5
          },
          "learning": {
            "analytical": 1.8,
            "solitary": 1.0,
            "structured": 0.3
          },
          "riasec": {
            "Investigative": 1.0
          },
          "work": {
            "researcher": 0.8
          },
          "attitudinalPsyche": {
            "L_confident": 0.6
          },
          "enneagram": {
            "5": 1.0
          },
          "stress": {
            "isolate": 0.7,
            "intellectualize": 0.5
          },
          "defense": {
            "intellectualization": 0.8,
            "withdrawal": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_007_b",
        "text": "Aku menjawab, “iya, aku juga lihat. Nanti aku cek lagi,” sebelum komentar itu mengambil seluruh hariku.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "9": 1.2
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3,
            "boundaryCutoff": 0.5
          },
          "stress": {
            "freeze": 0.8,
            "fawn": 0.3,
            "collapse": 0.4
          },
          "defense": {
            "withdrawal": 0.5
          },
          "positive": {
            "keptRoomGentle": 0.8,
            "keptSelfRespect": 1,
            "honestTenderness": 0.8
          },
          "negative": {
            "unspokenResentment": -0.7,
            "selfErasure": -0.8,
            "floodedReaction": -0.5
          },
          "evidence": {
            "peaceSeeking": 1,
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "emotionalExpression": 0.8
          },
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.5,
            "opposing": 0.4
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.5
          },
          "bigFive": {
            "Neuroticism": 0.8
          },
          "hexaco": {
            "Emotionality": 0.9
          },
          "attitudinalPsyche": {
            "E_insecure": 0.5,
            "E_flexible": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_007_a",
      "text": "Aku melipat kertasnya, diam dulu, lalu mencari bagian mana yang benar-benar salah.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ti": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "T": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.6,
          "critical": 0.3
        },
        "evidence": {
          "internalCheck": 1,
          "truthSeeking": 1.8,
          "analysisLoop": 1
        },
        "positive": {
          "cleanReason": 1,
          "checkedBeforeMoving": 1,
          "protectedEnergy": 1
        },
        "negative": {
          "socialGuessing": -0.7,
          "performativeRush": -0.6,
          "unreachedHeart": -0.7
        },
        "decision": {
          "evidenceBased": 0.9,
          "reflective": 0.5
        },
        "learning": {
          "analytical": 1.8,
          "solitary": 1.0,
          "structured": 0.3
        },
        "riasec": {
          "Investigative": 1.0
        },
        "work": {
          "researcher": 0.8
        },
        "attitudinalPsyche": {
          "L_confident": 0.6
        },
        "enneagram": {
          "5": 1.0
        },
        "stress": {
          "isolate": 0.7,
          "intellectualize": 0.5
        },
        "defense": {
          "intellectualization": 0.8,
          "withdrawal": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_007_b",
      "text": "Aku menjawab, “iya, aku juga lihat. Nanti aku cek lagi,” sebelum komentar itu mengambil seluruh hariku.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "9": 1.2
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3,
          "boundaryCutoff": 0.5
        },
        "stress": {
          "freeze": 0.8,
          "fawn": 0.3,
          "collapse": 0.4
        },
        "defense": {
          "withdrawal": 0.5
        },
        "positive": {
          "keptRoomGentle": 0.8,
          "keptSelfRespect": 1,
          "honestTenderness": 0.8
        },
        "negative": {
          "unspokenResentment": -0.7,
          "selfErasure": -0.8,
          "floodedReaction": -0.5
        },
        "evidence": {
          "peaceSeeking": 1,
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "emotionalExpression": 0.8
        },
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.5,
          "opposing": 0.4
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.5
        },
        "bigFive": {
          "Neuroticism": 0.8
        },
        "hexaco": {
          "Emotionality": 0.9
        },
        "attitudinalPsyche": {
          "E_insecure": 0.5,
          "E_flexible": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "defense",
      "learning",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "learning",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_008",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di rumah, pertengkaran lama meledak lagi. Pintu lemari terbuka, baju jatuh, dan semua orang bicara bersamaan.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_008_a",
        "text": "Aku mencari benda yang bisa dibereskan dulu agar tanganku tidak ikut melempar kata.",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Realistic": 1.0
          },
          "work": {
            "executor": 0.6,
            "stabilizer": 0.4
          },
          "learning": {
            "experiential": 0.7
          },
          "bigFive": {
            "Conscientiousness": 0.3
          },
          "hexaco": {
            "Conscientiousness": 0.3
          },
          "positive": {
            "handsOnRepair": 1,
            "keptRoomGentle": 0.8,
            "keptSafe": 1
          },
          "negative": {
            "emptyTalk": -0.7,
            "unspokenResentment": -0.7,
            "ignoredBody": -0.9
          },
          "evidence": {
            "practicalRepair": 1,
            "peaceSeeking": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "enneagram": {
            "9": 1.2
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
          },
          "stress": {
            "freeze": 0.5,
            "fawn": 0.3,
            "control": 0.6
          },
          "defense": {
            "withdrawal": 0.5
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_008_b",
        "text": "Aku berdiri di antara suara itu dan berkata, “satu orang dulu. Kalau tidak, aku keluar.”",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "values": {
            "justice": 0.8,
            "truth": 0.9,
            "autonomy": 0.7
          },
          "conflict": {
            "directConfrontation": 0.7,
            "boundaryCutoff": 0.5
          },
          "positive": {
            "stoodForFairness": 1,
            "tookResponsibility": 1,
            "keptSelfRespect": 1
          },
          "negative": {
            "easySilence": -0.8,
            "waitingPermission": -0.7,
            "selfErasure": -0.8
          },
          "evidence": {
            "justiceSeeking": 1,
            "directEngagement": 0.4,
            "actionFirst": 0.8,
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "riasec": {
            "Enterprising": 0.8
          },
          "disc": {
            "D": 0.7,
            "I": 0.3
          },
          "work": {
            "leader": 0.7,
            "challenger": 0.4
          },
          "decision": {
            "fastAction": 0.5
          },
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.5,
            "opposing": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_008_a",
      "text": "Aku mencari benda yang bisa dibereskan dulu agar tanganku tidak ikut melempar kata.",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Realistic": 1.0
        },
        "work": {
          "executor": 0.6,
          "stabilizer": 0.4
        },
        "learning": {
          "experiential": 0.7
        },
        "bigFive": {
          "Conscientiousness": 0.3
        },
        "hexaco": {
          "Conscientiousness": 0.3
        },
        "positive": {
          "handsOnRepair": 1,
          "keptRoomGentle": 0.8,
          "keptSafe": 1
        },
        "negative": {
          "emptyTalk": -0.7,
          "unspokenResentment": -0.7,
          "ignoredBody": -0.9
        },
        "evidence": {
          "practicalRepair": 1,
          "peaceSeeking": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "enneagram": {
          "9": 1.2
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
        },
        "stress": {
          "freeze": 0.5,
          "fawn": 0.3,
          "control": 0.6
        },
        "defense": {
          "withdrawal": 0.5
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_008_b",
      "text": "Aku berdiri di antara suara itu dan berkata, “satu orang dulu. Kalau tidak, aku keluar.”",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "values": {
          "justice": 0.8,
          "truth": 0.9,
          "autonomy": 0.7
        },
        "conflict": {
          "directConfrontation": 0.7,
          "boundaryCutoff": 0.5
        },
        "positive": {
          "stoodForFairness": 1,
          "tookResponsibility": 1,
          "keptSelfRespect": 1
        },
        "negative": {
          "easySilence": -0.8,
          "waitingPermission": -0.7,
          "selfErasure": -0.8
        },
        "evidence": {
          "justiceSeeking": 1,
          "directEngagement": 0.4,
          "actionFirst": 0.8,
          "boundarySetting": 1,
          "selfRespect": 0.8
        },
        "riasec": {
          "Enterprising": 0.8
        },
        "disc": {
          "D": 0.7,
          "I": 0.3
        },
        "work": {
          "leader": 0.7,
          "challenger": 0.4
        },
        "decision": {
          "fastAction": 0.5
        },
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.5,
          "opposing": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "defense",
      "conflict",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "conflict",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_009",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Orang yang kau sayang memilih diam tepat saat kau butuh kepastian. Jam dinding terdengar terlalu jelas.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_009_a",
        "text": "Aku menunggu sebentar, lalu berkata, “diam boleh, tapi jangan membuatku menebak sendirian.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 1.5,
            "Ti": -0.5,
            "Fi": 2
          },
          "mbtiAxis": {
            "F": 2,
            "E": 0.5,
            "J": 0.3,
            "I": 0.5
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.8,
            "opposing": 0.4
          },
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "certaintySeeking": 1
          },
          "positive": {
            "softRepair": 1,
            "keptSelfRespect": 1,
            "checkedRisk": 1
          },
          "negative": {
            "coldCut": -0.8,
            "selfErasure": -0.8,
            "blindLeap": -0.8
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5,
            "reassuranceSeeking": 0.6
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.5
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "enneagram": {
            "6": 1.1
          },
          "coreFear": {
            "unsafe": 0.8
          },
          "coreDesire": {
            "certainty": 0.7
          },
          "decision": {
            "riskAware": 0.7,
            "consultative": 0.4
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_009_b",
        "text": "Aku memilih tidur dulu, karena kalau diteruskan malam ini aku akan bicara dari luka, bukan dari diriku.",
        "subtleMeaning": "hidden",
        "weights": {
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "evidence": {
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "peaceSeeking": 1,
            "analysisLoop": 1
          },
          "positive": {
            "keptSafe": 1,
            "keptRoomGentle": 0.8,
            "protectedEnergy": 1
          },
          "negative": {
            "ignoredBody": -0.9,
            "unspokenResentment": -0.7,
            "unreachedHeart": -0.7
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "stress": {
            "control": 0.6,
            "freeze": 0.5,
            "fawn": 0.3,
            "isolate": 0.7,
            "intellectualize": 0.5
          },
          "enneagram": {
            "9": 1.2,
            "5": 1.0
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
          },
          "defense": {
            "withdrawal": 1.0,
            "intellectualization": 0.8
          },
          "learning": {
            "solitary": 0.6,
            "analytical": 0.5
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_009_a",
      "text": "Aku menunggu sebentar, lalu berkata, “diam boleh, tapi jangan membuatku menebak sendirian.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 1.5,
          "Ti": -0.5,
          "Fi": 2
        },
        "mbtiAxis": {
          "F": 2,
          "E": 0.5,
          "J": 0.3,
          "I": 0.5
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.8,
          "opposing": 0.4
        },
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "certaintySeeking": 1
        },
        "positive": {
          "softRepair": 1,
          "keptSelfRespect": 1,
          "checkedRisk": 1
        },
        "negative": {
          "coldCut": -0.8,
          "selfErasure": -0.8,
          "blindLeap": -0.8
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5,
          "reassuranceSeeking": 0.6
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.5
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "enneagram": {
          "6": 1.1
        },
        "coreFear": {
          "unsafe": 0.8
        },
        "coreDesire": {
          "certainty": 0.7
        },
        "decision": {
          "riskAware": 0.7,
          "consultative": 0.4
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_009_b",
      "text": "Aku memilih tidur dulu, karena kalau diteruskan malam ini aku akan bicara dari luka, bukan dari diriku.",
      "subtleMeaning": "hidden",
      "weights": {
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "evidence": {
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "peaceSeeking": 1,
          "analysisLoop": 1
        },
        "positive": {
          "keptSafe": 1,
          "keptRoomGentle": 0.8,
          "protectedEnergy": 1
        },
        "negative": {
          "ignoredBody": -0.9,
          "unspokenResentment": -0.7,
          "unreachedHeart": -0.7
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "stress": {
          "control": 0.6,
          "freeze": 0.5,
          "fawn": 0.3,
          "isolate": 0.7,
          "intellectualize": 0.5
        },
        "enneagram": {
          "9": 1.2,
          "5": 1.0
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
        },
        "defense": {
          "withdrawal": 1.0,
          "intellectualization": 0.8
        },
        "learning": {
          "solitary": 0.6,
          "analytical": 0.5
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "relationship",
      "communication",
      "defense",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "relationship",
      "communication",
      "defense",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_010",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Atasan mengubah keputusan terakhir menit terakhir. Semua catatan yang kau susun tampak tidak berguna.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_010_a",
        "text": "Aku menyimpan versi lama, menandai perubahan, lalu mulai dari bagian yang masih bisa diselamatkan.",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Conventional": 0.9
          },
          "disc": {
            "C": 1.1,
            "D": 0.4
          },
          "work": {
            "refiner": 0.8,
            "planner": 1.2,
            "executor": 0.6
          },
          "learning": {
            "structured": 0.6,
            "repetitionBased": 0.4
          },
          "positive": {
            "madeItNeat": 1,
            "keptGround": 1,
            "clearNextStep": 1
          },
          "negative": {
            "messyLeap": -0.7,
            "chaoticDrift": -0.7,
            "looseProcess": -0.8
          },
          "evidence": {
            "orderSeeking": 1.8,
            "practicalRepair": 1,
            "systemFirst": 0.8
          },
          "bigFive": {
            "Conscientiousness": 0.6
          },
          "hexaco": {
            "Conscientiousness": 0.6
          },
          "values": {
            "security": 0.7
          },
          "environment": {
            "organizedSpace": 0.6,
            "familiarPlace": 0.4
          },
          "cognitive": {
            "Te": 2,
            "Fi": -0.5
          },
          "mbtiAxis": {
            "T": 0.8,
            "J": 1
          },
          "stackRole": {
            "auxiliary": 0.6,
            "dominant": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_010_b",
        "text": "Aku bertanya, “prioritas barunya apa?” supaya tidak membuang tenaga ke arah yang salah.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ti": 2,
            "Fe": -0.5,
            "Te": 2,
            "Fi": -0.5
          },
          "mbtiAxis": {
            "T": 1.8,
            "I": 0.5,
            "J": 1
          },
          "stackRole": {
            "dominant": 1.1,
            "critical": 0.3,
            "auxiliary": 0.6
          },
          "evidence": {
            "internalCheck": 1,
            "truthSeeking": 0.8,
            "practicalRepair": 1,
            "systemFirst": 0.8,
            "directEngagement": 0.4
          },
          "positive": {
            "cleanReason": 1,
            "clearNextStep": 1,
            "clearWords": 0.6
          },
          "negative": {
            "socialGuessing": -0.7,
            "looseProcess": -0.8,
            "muddyMessage": -0.5
          },
          "decision": {
            "evidenceBased": 0.9,
            "reflective": 0.5
          },
          "learning": {
            "analytical": 0.7,
            "solitary": 0.4
          },
          "work": {
            "planner": 0.8,
            "executor": 0.6
          },
          "disc": {
            "C": 0.4,
            "D": 0.4
          },
          "communication": {
            "direct": 0.5,
            "gentle": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_010_a",
      "text": "Aku menyimpan versi lama, menandai perubahan, lalu mulai dari bagian yang masih bisa diselamatkan.",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Conventional": 0.9
        },
        "disc": {
          "C": 1.1,
          "D": 0.4
        },
        "work": {
          "refiner": 0.8,
          "planner": 1.2,
          "executor": 0.6
        },
        "learning": {
          "structured": 0.6,
          "repetitionBased": 0.4
        },
        "positive": {
          "madeItNeat": 1,
          "keptGround": 1,
          "clearNextStep": 1
        },
        "negative": {
          "messyLeap": -0.7,
          "chaoticDrift": -0.7,
          "looseProcess": -0.8
        },
        "evidence": {
          "orderSeeking": 1.8,
          "practicalRepair": 1,
          "systemFirst": 0.8
        },
        "bigFive": {
          "Conscientiousness": 0.6
        },
        "hexaco": {
          "Conscientiousness": 0.6
        },
        "values": {
          "security": 0.7
        },
        "environment": {
          "organizedSpace": 0.6,
          "familiarPlace": 0.4
        },
        "cognitive": {
          "Te": 2,
          "Fi": -0.5
        },
        "mbtiAxis": {
          "T": 0.8,
          "J": 1
        },
        "stackRole": {
          "auxiliary": 0.6,
          "dominant": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_010_b",
      "text": "Aku bertanya, “prioritas barunya apa?” supaya tidak membuang tenaga ke arah yang salah.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ti": 2,
          "Fe": -0.5,
          "Te": 2,
          "Fi": -0.5
        },
        "mbtiAxis": {
          "T": 1.8,
          "I": 0.5,
          "J": 1
        },
        "stackRole": {
          "dominant": 1.1,
          "critical": 0.3,
          "auxiliary": 0.6
        },
        "evidence": {
          "internalCheck": 1,
          "truthSeeking": 0.8,
          "practicalRepair": 1,
          "systemFirst": 0.8,
          "directEngagement": 0.4
        },
        "positive": {
          "cleanReason": 1,
          "clearNextStep": 1,
          "clearWords": 0.6
        },
        "negative": {
          "socialGuessing": -0.7,
          "looseProcess": -0.8,
          "muddyMessage": -0.5
        },
        "decision": {
          "evidenceBased": 0.9,
          "reflective": 0.5
        },
        "learning": {
          "analytical": 0.7,
          "solitary": 0.4
        },
        "work": {
          "planner": 0.8,
          "executor": 0.6
        },
        "disc": {
          "C": 0.4,
          "D": 0.4
        },
        "communication": {
          "direct": 0.5,
          "gentle": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "work",
      "decision",
      "learning",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "work",
      "decision",
      "learning",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_011",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Temanmu lupa janji penting. Ketika diingatkan, ia berkata, “aku banyak pikiran.”",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_011_a",
        "text": "Aku bilang, “aku paham, tapi aku tetap kecewa,” tanpa membuatnya menebak lukaku.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": 1.5,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 2,
            "I": 0.5,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.4,
            "auxiliary": 0.7
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "truthSeeking": 1
          },
          "positive": {
            "keptSelfRespect": 1,
            "softRepair": 1,
            "cleanHands": 1
          },
          "negative": {
            "selfErasure": -0.8,
            "coldCut": -0.8,
            "smoothLie": -0.8
          },
          "values": {
            "autonomy": 0.7,
            "truth": 1.3
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "hexaco": {
            "HonestyHumility": 1.0
          },
          "moral": {
            "truthBased": 0.8,
            "purityIntegrityBased": 0.4
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_011_b",
        "text": "Aku menunda membahasnya sampai aku tidak ingin menghukum dia lewat nada suaraku.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "9": 1.2,
            "5": 1.0
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
          },
          "stress": {
            "freeze": 0.5,
            "fawn": 0.3,
            "isolate": 0.7,
            "intellectualize": 0.5,
            "control": 0.6
          },
          "defense": {
            "withdrawal": 1.0,
            "intellectualization": 0.8
          },
          "positive": {
            "keptRoomGentle": 0.8,
            "protectedEnergy": 1,
            "keptSafe": 1
          },
          "negative": {
            "unspokenResentment": -0.7,
            "unreachedHeart": -0.7,
            "ignoredBody": -0.9
          },
          "evidence": {
            "peaceSeeking": 1,
            "analysisLoop": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "learning": {
            "solitary": 0.6,
            "analytical": 0.5
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_011_a",
      "text": "Aku bilang, “aku paham, tapi aku tetap kecewa,” tanpa membuatnya menebak lukaku.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fi": 2,
          "Fe": 1.5,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 2,
          "I": 0.5,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "dominant": 0.8,
          "opposing": 0.4,
          "auxiliary": 0.7
        },
        "evidence": {
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "truthSeeking": 1
        },
        "positive": {
          "keptSelfRespect": 1,
          "softRepair": 1,
          "cleanHands": 1
        },
        "negative": {
          "selfErasure": -0.8,
          "coldCut": -0.8,
          "smoothLie": -0.8
        },
        "values": {
          "autonomy": 0.7,
          "truth": 1.3
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "hexaco": {
          "HonestyHumility": 1.0
        },
        "moral": {
          "truthBased": 0.8,
          "purityIntegrityBased": 0.4
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_011_b",
      "text": "Aku menunda membahasnya sampai aku tidak ingin menghukum dia lewat nada suaraku.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "9": 1.2,
          "5": 1.0
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
        },
        "stress": {
          "freeze": 0.5,
          "fawn": 0.3,
          "isolate": 0.7,
          "intellectualize": 0.5,
          "control": 0.6
        },
        "defense": {
          "withdrawal": 1.0,
          "intellectualization": 0.8
        },
        "positive": {
          "keptRoomGentle": 0.8,
          "protectedEnergy": 1,
          "keptSafe": 1
        },
        "negative": {
          "unspokenResentment": -0.7,
          "unreachedHeart": -0.7,
          "ignoredBody": -0.9
        },
        "evidence": {
          "peaceSeeking": 1,
          "analysisLoop": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "learning": {
          "solitary": 0.6,
          "analytical": 0.5
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "relationship",
      "conflict",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "relationship",
      "conflict",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "stress_012",
    "kind": "forcedChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Di jalan, seseorang menabrak bahumu lalu pergi tanpa menoleh. Tubuhmu panas sebelum pikiranmu selesai.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "stress_012_a",
        "text": "Aku menahan langkah, menghembuskan napas, dan memilih tidak mengejar sesuatu yang akan membuat hari rusak.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "9": 1.2
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3,
            "negotiation": 0.5
          },
          "stress": {
            "freeze": 0.5,
            "fawn": 0.3,
            "control": 0.6
          },
          "defense": {
            "withdrawal": 0.5
          },
          "positive": {
            "keptRoomGentle": 0.8,
            "keptSafe": 1,
            "softenedEdge": 1
          },
          "negative": {
            "unspokenResentment": -0.7,
            "ignoredBody": -0.9,
            "needlessSharpness": -0.8
          },
          "evidence": {
            "peaceSeeking": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "repairSeeking": 0.7
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "bigFive": {
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Agreeableness": 0.8
          },
          "communication": {
            "gentle": 0.6
          },
          "reliability": 0.84
        }
      },
      {
        "id": "stress_012_b",
        "text": "Aku memanggilnya sekali, cukup keras, “mas, tadi nabrak,” lalu berhenti di situ.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.6,
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "E": 0.6,
            "S": 1,
            "P": 0.5,
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 1.0,
            "inferior": 0.3,
            "opposing": 0.4
          },
          "evidence": {
            "actionFirst": 1,
            "directEngagement": 1.3,
            "justiceSeeking": 1,
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "presentMove": 1,
            "stoodForFairness": 1,
            "keptSelfRespect": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "easySilence": -0.8,
            "selfErasure": -0.8
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 0.5
          },
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "values": {
            "justice": 0.8,
            "truth": 0.9,
            "autonomy": 0.7
          },
          "conflict": {
            "directConfrontation": 0.7,
            "boundaryCutoff": 0.5
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "stress_012_a",
      "text": "Aku menahan langkah, menghembuskan napas, dan memilih tidak mengejar sesuatu yang akan membuat hari rusak.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "9": 1.2
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3,
          "negotiation": 0.5
        },
        "stress": {
          "freeze": 0.5,
          "fawn": 0.3,
          "control": 0.6
        },
        "defense": {
          "withdrawal": 0.5
        },
        "positive": {
          "keptRoomGentle": 0.8,
          "keptSafe": 1,
          "softenedEdge": 1
        },
        "negative": {
          "unspokenResentment": -0.7,
          "ignoredBody": -0.9,
          "needlessSharpness": -0.8
        },
        "evidence": {
          "peaceSeeking": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "repairSeeking": 0.7
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "bigFive": {
          "Agreeableness": 0.8
        },
        "hexaco": {
          "Agreeableness": 0.8
        },
        "communication": {
          "gentle": 0.6
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "stress_012_b",
      "text": "Aku memanggilnya sekali, cukup keras, “mas, tadi nabrak,” lalu berhenti di situ.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Se": 2,
          "Ni": -0.6,
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "E": 0.6,
          "S": 1,
          "P": 0.5,
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 1.0,
          "inferior": 0.3,
          "opposing": 0.4
        },
        "evidence": {
          "actionFirst": 1,
          "directEngagement": 1.3,
          "justiceSeeking": 1,
          "boundarySetting": 1,
          "selfRespect": 0.8
        },
        "positive": {
          "presentMove": 1,
          "stoodForFairness": 1,
          "keptSelfRespect": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "easySilence": -0.8,
          "selfErasure": -0.8
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 0.5
        },
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "values": {
          "justice": 0.8,
          "truth": 0.9,
          "autonomy": 0.7
        },
        "conflict": {
          "directConfrontation": 0.7,
          "boundaryCutoff": 0.5
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "stress",
      "conflict",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "conflict",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  }
];
