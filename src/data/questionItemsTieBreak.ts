import type { QuestionItem } from "../types";

export const TIE_BREAK_QUESTIONS: QuestionItem[] = [
  {
    "id": "tie_001",
    "kind": "forcedChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Di toko kecil, seseorang memberimu cerita yang kurang lengkap. Ada antrean, hujan, dan keputusan harus dibuat cepat.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "tie_001_a",
        "text": "Aku menunda keputusan beberapa detik, memperhatikan bagian yang berubah saat ia mengulang cerita.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.6,
            "Ti": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "I": 1.1,
            "N": 1,
            "J": 0.4,
            "T": 1
          },
          "stackRole": {
            "dominant": 1.2,
            "opposing": 0.4,
            "critical": 0.3
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.8,
            "internalCheck": 1,
            "truthSeeking": 0.8
          },
          "positive": {
            "patientReading": 1,
            "cleanReason": 1
          },
          "negative": {
            "rushedMove": -0.8,
            "socialGuessing": -0.7
          },
          "socionics": {
            "intuitiveEthical": 0.5
          },
          "quadra": {
            "Beta": 0.25,
            "Delta": 0.2
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
      {
        "id": "tie_001_b",
        "text": "Aku memilih tindakan paling aman sekarang, lalu menyimpan pertanyaan untuk setelah situasi tenang.",
        "subtleMeaning": "hidden",
        "weights": {
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
          "evidence": {
            "actionFirst": 1,
            "directEngagement": 0.9,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "positive": {
            "presentMove": 1,
            "keptSafe": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "ignoredBody": -0.9
          },
          "stress": {
            "fight": 0.5,
            "control": 0.6
          },
          "disc": {
            "D": 0.5
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
      "id": "tie_001_a",
      "text": "Aku menunda keputusan beberapa detik, memperhatikan bagian yang berubah saat ia mengulang cerita.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ni": 2,
          "Se": -0.6,
          "Ti": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "I": 1.1,
          "N": 1,
          "J": 0.4,
          "T": 1
        },
        "stackRole": {
          "dominant": 1.2,
          "opposing": 0.4,
          "critical": 0.3
        },
        "evidence": {
          "observeFirst": 1,
          "indirectEngagement": 0.8,
          "internalCheck": 1,
          "truthSeeking": 0.8
        },
        "positive": {
          "patientReading": 1,
          "cleanReason": 1
        },
        "negative": {
          "rushedMove": -0.8,
          "socialGuessing": -0.7
        },
        "socionics": {
          "intuitiveEthical": 0.5
        },
        "quadra": {
          "Beta": 0.25,
          "Delta": 0.2
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
    "right": {
      "id": "tie_001_b",
      "text": "Aku memilih tindakan paling aman sekarang, lalu menyimpan pertanyaan untuk setelah situasi tenang.",
      "subtleMeaning": "hidden",
      "weights": {
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
        "evidence": {
          "actionFirst": 1,
          "directEngagement": 0.9,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "positive": {
          "presentMove": 1,
          "keptSafe": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "ignoredBody": -0.9
        },
        "stress": {
          "fight": 0.5,
          "control": 0.6
        },
        "disc": {
          "D": 0.5
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
      "cognitive",
      "decision",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "decision",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "tie_002",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Orang dekat tiba-tiba menjadi dingin. Di layar hanya ada titik tiga yang muncul lalu hilang.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "tie_002_a",
        "text": "Aku merasa tertarik menarik diri sampai ia sendiri menjelaskan.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "5": 1.0,
            "6": 1.1
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
          "positive": {
            "protectedEnergy": 1,
            "keptSelfRespect": 1,
            "checkedRisk": 1
          },
          "negative": {
            "unreachedHeart": -0.7,
            "selfErasure": -0.8,
            "blindLeap": -0.8
          },
          "evidence": {
            "analysisLoop": 1,
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "certaintySeeking": 1
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
          "conflict": {
            "boundaryCutoff": 0.5
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
        "id": "tie_002_b",
        "text": "Aku ingin bertanya sekali dengan jelas, karena diamnya mulai memakan pikiranku.",
        "subtleMeaning": "hidden",
        "weights": {
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
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "certaintySeeking": 1,
            "emotionalExpression": 0.8
          },
          "positive": {
            "softRepair": 1,
            "checkedRisk": 1,
            "honestTenderness": 0.8
          },
          "negative": {
            "coldCut": -0.8,
            "blindLeap": -0.8,
            "floodedReaction": -0.5
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
            "freeze": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "tie_002_a",
      "text": "Aku merasa tertarik menarik diri sampai ia sendiri menjelaskan.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "5": 1.0,
          "6": 1.1
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
        "positive": {
          "protectedEnergy": 1,
          "keptSelfRespect": 1,
          "checkedRisk": 1
        },
        "negative": {
          "unreachedHeart": -0.7,
          "selfErasure": -0.8,
          "blindLeap": -0.8
        },
        "evidence": {
          "analysisLoop": 1,
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "certaintySeeking": 1
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
        "conflict": {
          "boundaryCutoff": 0.5
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
      "id": "tie_002_b",
      "text": "Aku ingin bertanya sekali dengan jelas, karena diamnya mulai memakan pikiranku.",
      "subtleMeaning": "hidden",
      "weights": {
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
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "certaintySeeking": 1,
          "emotionalExpression": 0.8
        },
        "positive": {
          "softRepair": 1,
          "checkedRisk": 1,
          "honestTenderness": 0.8
        },
        "negative": {
          "coldCut": -0.8,
          "blindLeap": -0.8,
          "floodedReaction": -0.5
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
          "freeze": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "enneagram",
      "instinct",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "enneagram",
      "instinct",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "tie_003",
    "kind": "forcedChoice",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Hidup terasa tidak stabil. Di meja ada tagihan, foto lama, dan pesan dari teman yang mengajak keluar.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "tie_003_a",
        "text": "Aku menyelamatkan urusan dasar dulu: uang, makan, tidur, dan hal yang jatuh tempo.",
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
            "orderSeeking": 0.8
          },
          "positive": {
            "keptSafe": 1,
            "keptGround": 1
          },
          "negative": {
            "ignoredBody": -0.9,
            "chaoticDrift": -0.7
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4,
            "organizedSpace": 0.6,
            "familiarPlace": 0.4
          },
          "stress": {
            "control": 0.6
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
          "reliability": 0.84
        }
      },
      {
        "id": "tie_003_b",
        "text": "Aku mencari satu percakapan yang membuatku merasa tidak sendirian menghadapi semua ini.",
        "subtleMeaning": "hidden",
        "weights": {
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
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "statusAwareness": 0.7,
            "visibleRole": 0.7,
            "intensitySeeking": 1,
            "onePersonFocus": 0.7
          },
          "positive": {
            "softRepair": 1,
            "socialBridge": 1,
            "aliveBond": 1
          },
          "negative": {
            "coldCut": -0.8,
            "privateTunnel": -0.6,
            "safeDistance": -0.7
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5,
            "belongingSeeking": 0.8
          },
          "communication": {
            "gentle": 1.0,
            "expressive": 0.8
          },
          "instinct": {
            "so": 1.5,
            "sp": -0.5,
            "sx": 1.5
          },
          "disc": {
            "I": 0.5
          },
          "loveStyle": {
            "emotionalDepth": 0.8,
            "sharedDream": 0.5
          },
          "idealPartner": {
            "idealIntensity": 0.8,
            "idealMystery": 0.4
          },
          "enneagram": {
            "4": 0.4,
            "8": 0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "tie_003_a",
      "text": "Aku menyelamatkan urusan dasar dulu: uang, makan, tidur, dan hal yang jatuh tempo.",
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
          "orderSeeking": 0.8
        },
        "positive": {
          "keptSafe": 1,
          "keptGround": 1
        },
        "negative": {
          "ignoredBody": -0.9,
          "chaoticDrift": -0.7
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4,
          "organizedSpace": 0.6,
          "familiarPlace": 0.4
        },
        "stress": {
          "control": 0.6
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
        "reliability": 0.84
      }
    },
    "right": {
      "id": "tie_003_b",
      "text": "Aku mencari satu percakapan yang membuatku merasa tidak sendirian menghadapi semua ini.",
      "subtleMeaning": "hidden",
      "weights": {
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
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "statusAwareness": 0.7,
          "visibleRole": 0.7,
          "intensitySeeking": 1,
          "onePersonFocus": 0.7
        },
        "positive": {
          "softRepair": 1,
          "socialBridge": 1,
          "aliveBond": 1
        },
        "negative": {
          "coldCut": -0.8,
          "privateTunnel": -0.6,
          "safeDistance": -0.7
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5,
          "belongingSeeking": 0.8
        },
        "communication": {
          "gentle": 1.0,
          "expressive": 0.8
        },
        "instinct": {
          "so": 1.5,
          "sp": -0.5,
          "sx": 1.5
        },
        "disc": {
          "I": 0.5
        },
        "loveStyle": {
          "emotionalDepth": 0.8,
          "sharedDream": 0.5
        },
        "idealPartner": {
          "idealIntensity": 0.8,
          "idealMystery": 0.4
        },
        "enneagram": {
          "4": 0.4,
          "8": 0.2
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "instinct",
      "values",
      "stress",
      "environment",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "instinct",
      "values",
      "stress",
      "environment",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "tie_004",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Dua cara sama-sama mungkin. Satu lebih cepat, satu lebih rapi. Orang lain menunggu keputusanmu.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "tie_004_a",
        "text": "Aku memilih yang cukup rapi agar tidak menimbulkan masalah kedua besok.",
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
            "clearNextStep": 1
          },
          "negative": {
            "messyLeap": -0.7,
            "looseProcess": -0.8
          },
          "evidence": {
            "orderSeeking": 1,
            "practicalRepair": 1,
            "systemFirst": 0.8
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
        "id": "tie_004_b",
        "text": "Aku memilih yang bisa bergerak sekarang, lalu memperbaiki sambil jalan.",
        "subtleMeaning": "hidden",
        "weights": {
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
          "evidence": {
            "actionFirst": 1,
            "directEngagement": 0.9,
            "practicalRepair": 1
          },
          "positive": {
            "presentMove": 1,
            "handsOnRepair": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "emptyTalk": -0.7
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 0.5
          },
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
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "tie_004_a",
      "text": "Aku memilih yang cukup rapi agar tidak menimbulkan masalah kedua besok.",
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
          "clearNextStep": 1
        },
        "negative": {
          "messyLeap": -0.7,
          "looseProcess": -0.8
        },
        "evidence": {
          "orderSeeking": 1,
          "practicalRepair": 1,
          "systemFirst": 0.8
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
      "id": "tie_004_b",
      "text": "Aku memilih yang bisa bergerak sekarang, lalu memperbaiki sambil jalan.",
      "subtleMeaning": "hidden",
      "weights": {
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
        "evidence": {
          "actionFirst": 1,
          "directEngagement": 0.9,
          "practicalRepair": 1
        },
        "positive": {
          "presentMove": 1,
          "handsOnRepair": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "emptyTalk": -0.7
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 0.5
        },
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
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "work",
      "disc",
      "decision",
      "cognitive",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "disc",
      "decision",
      "cognitive",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "tie_005",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Di dapur, seseorang berkata, “kamu terlalu sensitif,” padahal kau baru saja mencoba jujur.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "tie_005_a",
        "text": "Aku menjawab, “mungkin, tapi yang kubilang tetap penting.”",
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
            "truthSeeking": 1
          },
          "positive": {
            "keptSelfRespect": 1,
            "cleanHands": 1
          },
          "negative": {
            "selfErasure": -0.8,
            "smoothLie": -0.8
          },
          "values": {
            "autonomy": 0.7,
            "truth": 1.3
          },
          "conflict": {
            "boundaryCutoff": 0.5
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
        "id": "tie_005_b",
        "text": "Aku berhenti bicara dulu, karena kalau diteruskan aku hanya akan semakin tidak didengar.",
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
            "protectedEnergy": 1
          },
          "negative": {
            "unspokenResentment": -0.7,
            "unreachedHeart": -0.7
          },
          "evidence": {
            "peaceSeeking": 1,
            "analysisLoop": 1
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
      "id": "tie_005_a",
      "text": "Aku menjawab, “mungkin, tapi yang kubilang tetap penting.”",
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
          "truthSeeking": 1
        },
        "positive": {
          "keptSelfRespect": 1,
          "cleanHands": 1
        },
        "negative": {
          "selfErasure": -0.8,
          "smoothLie": -0.8
        },
        "values": {
          "autonomy": 0.7,
          "truth": 1.3
        },
        "conflict": {
          "boundaryCutoff": 0.5
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
      "id": "tie_005_b",
      "text": "Aku berhenti bicara dulu, karena kalau diteruskan aku hanya akan semakin tidak didengar.",
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
          "protectedEnergy": 1
        },
        "negative": {
          "unspokenResentment": -0.7,
          "unreachedHeart": -0.7
        },
        "evidence": {
          "peaceSeeking": 1,
          "analysisLoop": 1
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
      "communication",
      "conflict",
      "relationship",
      "defense",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "communication",
      "conflict",
      "relationship",
      "defense",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "tie_006",
    "kind": "forcedChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau duduk sendirian setelah hari panjang. Ada kamar tenang, jalan malam, panggilan teman, dan pekerjaan yang belum selesai.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "tie_006_a",
        "text": "Aku memilih ruang yang membuat tubuhku berhenti berjaga dulu.",
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
        "id": "tie_006_b",
        "text": "Aku memilih sesuatu yang membuat malam ini tidak terasa hanya tentang bertahan.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.6
          },
          "mbtiAxis": {
            "N": 1,
            "E": 0.4,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.5,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryTurn": 0.8,
            "intensitySeeking": 1,
            "onePersonFocus": 0.7,
            "noveltySeeking": 1
          },
          "positive": {
            "newDoor": 1,
            "aliveBond": 1,
            "freshAir": 1
          },
          "negative": {
            "stuckRoutine": -0.7,
            "safeDistance": -0.7,
            "unfinishedWeight": -0.7
          },
          "learning": {
            "exploratory": 1.2
          },
          "temperament": {
            "NF": 0.2,
            "NT": 0.2
          },
          "instinct": {
            "sx": 1.5,
            "sp": -0.3
          },
          "loveStyle": {
            "emotionalDepth": 0.8,
            "sharedDream": 0.5
          },
          "idealPartner": {
            "idealIntensity": 0.8,
            "idealMystery": 0.4
          },
          "enneagram": {
            "4": 0.4,
            "8": 0.2,
            "7": 1.0
          },
          "coreFear": {
            "trapped": 0.7
          },
          "coreDesire": {
            "freedom": 0.7
          },
          "values": {
            "freedom": 0.9,
            "beauty": 0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "tie_006_a",
      "text": "Aku memilih ruang yang membuat tubuhku berhenti berjaga dulu.",
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
      "id": "tie_006_b",
      "text": "Aku memilih sesuatu yang membuat malam ini tidak terasa hanya tentang bertahan.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ne": 2,
          "Si": -0.6
        },
        "mbtiAxis": {
          "N": 1,
          "E": 0.4,
          "P": 0.7
        },
        "stackRole": {
          "auxiliary": 0.5,
          "tertiary": 0.4
        },
        "evidence": {
          "possibilitySeeking": 1,
          "exploratoryTurn": 0.8,
          "intensitySeeking": 1,
          "onePersonFocus": 0.7,
          "noveltySeeking": 1
        },
        "positive": {
          "newDoor": 1,
          "aliveBond": 1,
          "freshAir": 1
        },
        "negative": {
          "stuckRoutine": -0.7,
          "safeDistance": -0.7,
          "unfinishedWeight": -0.7
        },
        "learning": {
          "exploratory": 1.2
        },
        "temperament": {
          "NF": 0.2,
          "NT": 0.2
        },
        "instinct": {
          "sx": 1.5,
          "sp": -0.3
        },
        "loveStyle": {
          "emotionalDepth": 0.8,
          "sharedDream": 0.5
        },
        "idealPartner": {
          "idealIntensity": 0.8,
          "idealMystery": 0.4
        },
        "enneagram": {
          "4": 0.4,
          "8": 0.2,
          "7": 1.0
        },
        "coreFear": {
          "trapped": 0.7
        },
        "coreDesire": {
          "freedom": 0.7
        },
        "values": {
          "freedom": 0.9,
          "beauty": 0.2
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "environment",
      "loveStyle",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "environment",
      "loveStyle",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  }
];
