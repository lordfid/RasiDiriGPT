import type { QuestionItem } from "../types";

export const PREFERENCE_QUESTIONS: QuestionItem[] = [
  {
    "id": "pref_001",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di kafe dekat jendela, kau mulai membayangkan apakah seseorang bisa menjadi tempat pulang. Ia baru saja bertanya, “hari ini kau capek di bagian mana?”",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_001_a",
        "text": "Aku merasa lebih aman pada orang yang duduk tenang, tidak memaksaku cepat ceria, tapi tetap ada sampai kata-kataku keluar.",
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
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "orderSeeking": 0.8
          },
          "positive": {
            "softRepair": 1,
            "keptSafe": 1,
            "keptGround": 1
          },
          "negative": {
            "coldCut": -0.8,
            "ignoredBody": -0.9,
            "chaoticDrift": -0.7
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
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
        "id": "pref_001_b",
        "text": "Aku lebih tertarik pada orang yang membuat mataku hidup lagi, menantangku keluar dari hari yang itu-itu saja.",
        "subtleMeaning": "hidden",
        "weights": {
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
          "evidence": {
            "intensitySeeking": 1,
            "onePersonFocus": 0.7,
            "possibilitySeeking": 1,
            "exploratoryTurn": 0.8,
            "noveltySeeking": 1
          },
          "positive": {
            "aliveBond": 1,
            "newDoor": 1,
            "freshAir": 1
          },
          "negative": {
            "safeDistance": -0.7,
            "stuckRoutine": -0.7,
            "unfinishedWeight": -0.7
          },
          "enneagram": {
            "4": 0.4,
            "8": 0.2,
            "7": 1.0
          },
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
          "learning": {
            "exploratory": 1.2
          },
          "temperament": {
            "NF": 0.2,
            "NT": 0.2
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
      "id": "pref_001_a",
      "text": "Aku merasa lebih aman pada orang yang duduk tenang, tidak memaksaku cepat ceria, tapi tetap ada sampai kata-kataku keluar.",
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
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "orderSeeking": 0.8
        },
        "positive": {
          "softRepair": 1,
          "keptSafe": 1,
          "keptGround": 1
        },
        "negative": {
          "coldCut": -0.8,
          "ignoredBody": -0.9,
          "chaoticDrift": -0.7
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
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
      "id": "pref_001_b",
      "text": "Aku lebih tertarik pada orang yang membuat mataku hidup lagi, menantangku keluar dari hari yang itu-itu saja.",
      "subtleMeaning": "hidden",
      "weights": {
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
        "evidence": {
          "intensitySeeking": 1,
          "onePersonFocus": 0.7,
          "possibilitySeeking": 1,
          "exploratoryTurn": 0.8,
          "noveltySeeking": 1
        },
        "positive": {
          "aliveBond": 1,
          "newDoor": 1,
          "freshAir": 1
        },
        "negative": {
          "safeDistance": -0.7,
          "stuckRoutine": -0.7,
          "unfinishedWeight": -0.7
        },
        "enneagram": {
          "4": 0.4,
          "8": 0.2,
          "7": 1.0
        },
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
        "learning": {
          "exploratory": 1.2
        },
        "temperament": {
          "NF": 0.2,
          "NT": 0.2
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
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_002",
    "kind": "forcedChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Setelah hari yang panjang, kau masuk kamar. Tas jatuh di lantai, lampu belum dinyalakan, dan tanganmu mencari sesuatu yang membuat napas kembali pelan.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_002_a",
        "text": "Aku mencari selimut, air minum, dan sudut yang tidak perlu menjelaskan apa pun.",
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
        "id": "pref_002_b",
        "text": "Aku membuka jendela, menyalakan lampu kecil, lalu menyetel ulang meja agar kamar terasa seperti milikku lagi.",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Artistic": 1.0
          },
          "bigFive": {
            "Openness": 0.8,
            "Conscientiousness": 0.6
          },
          "hexaco": {
            "Openness": 0.8,
            "Conscientiousness": 0.6
          },
          "values": {
            "beauty": 0.8,
            "meaning": 0.5,
            "security": 0.7
          },
          "work": {
            "creator": 0.7
          },
          "learning": {
            "visual": 0.5,
            "projectBased": 0.4
          },
          "positive": {
            "madeMeaning": 1,
            "keptGround": 1,
            "keptSafe": 1
          },
          "negative": {
            "dryProcedure": -0.6,
            "chaoticDrift": -0.7,
            "ignoredBody": -0.9
          },
          "evidence": {
            "symbolicMeaning": 0.8,
            "orderSeeking": 0.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "environment": {
            "organizedSpace": 0.6,
            "familiarPlace": 0.4,
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "stress": {
            "control": 0.6
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "pref_002_a",
      "text": "Aku mencari selimut, air minum, dan sudut yang tidak perlu menjelaskan apa pun.",
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
      "id": "pref_002_b",
      "text": "Aku membuka jendela, menyalakan lampu kecil, lalu menyetel ulang meja agar kamar terasa seperti milikku lagi.",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Artistic": 1.0
        },
        "bigFive": {
          "Openness": 0.8,
          "Conscientiousness": 0.6
        },
        "hexaco": {
          "Openness": 0.8,
          "Conscientiousness": 0.6
        },
        "values": {
          "beauty": 0.8,
          "meaning": 0.5,
          "security": 0.7
        },
        "work": {
          "creator": 0.7
        },
        "learning": {
          "visual": 0.5,
          "projectBased": 0.4
        },
        "positive": {
          "madeMeaning": 1,
          "keptGround": 1,
          "keptSafe": 1
        },
        "negative": {
          "dryProcedure": -0.6,
          "chaoticDrift": -0.7,
          "ignoredBody": -0.9
        },
        "evidence": {
          "symbolicMeaning": 0.8,
          "orderSeeking": 0.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "environment": {
          "organizedSpace": 0.6,
          "familiarPlace": 0.4,
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "stress": {
          "control": 0.6
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "environment",
      "loveStyle",
      "attitudinalPsyche",
      "instinct",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "environment",
      "loveStyle",
      "attitudinalPsyche",
      "instinct",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_003",
    "kind": "forcedChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Seseorang meminta maaf setelah membuatmu kecewa. Di meja ada dua cangkir, satu sudah dingin.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_003_a",
        "text": "Aku lebih percaya ketika ia menyebut kesalahannya dengan jelas dan bertanya apa yang bisa ia perbaiki.",
        "subtleMeaning": "hidden",
        "weights": {
          "hexaco": {
            "HonestyHumility": 1.0
          },
          "moral": {
            "truthBased": 0.8,
            "purityIntegrityBased": 0.4
          },
          "values": {
            "truth": 0.8,
            "autonomy": 0.4,
            "meaning": 0.4
          },
          "positive": {
            "cleanHands": 1,
            "cleanReason": 1,
            "keptMeaning": 0.6
          },
          "negative": {
            "smoothLie": -0.8,
            "socialGuessing": -0.7,
            "hollowYes": -0.5
          },
          "evidence": {
            "truthSeeking": 1.8,
            "internalCheck": 1,
            "selfRespect": 0.4
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
            "analytical": 0.7,
            "solitary": 0.4
          },
          "reliability": 0.84
        }
      },
      {
        "id": "pref_003_b",
        "text": "Aku lebih luluh ketika ia tidak banyak membela diri, tapi tetap duduk di sana dan membiarkan aku marah sebentar.",
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
            "repairSeeking": 1.3,
            "emotionalExpression": 0.8
          },
          "positive": {
            "softRepair": 1,
            "honestTenderness": 0.8,
            "keptConnection": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "floodedReaction": -0.5,
            "leftUnsaid": -0.5
          },
          "relationship": {
            "repairSeeking": 1.2,
            "secureLeaning": 1.0
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
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
      "id": "pref_003_a",
      "text": "Aku lebih percaya ketika ia menyebut kesalahannya dengan jelas dan bertanya apa yang bisa ia perbaiki.",
      "subtleMeaning": "hidden",
      "weights": {
        "hexaco": {
          "HonestyHumility": 1.0
        },
        "moral": {
          "truthBased": 0.8,
          "purityIntegrityBased": 0.4
        },
        "values": {
          "truth": 0.8,
          "autonomy": 0.4,
          "meaning": 0.4
        },
        "positive": {
          "cleanHands": 1,
          "cleanReason": 1,
          "keptMeaning": 0.6
        },
        "negative": {
          "smoothLie": -0.8,
          "socialGuessing": -0.7,
          "hollowYes": -0.5
        },
        "evidence": {
          "truthSeeking": 1.8,
          "internalCheck": 1,
          "selfRespect": 0.4
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
          "analytical": 0.7,
          "solitary": 0.4
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "pref_003_b",
      "text": "Aku lebih luluh ketika ia tidak banyak membela diri, tapi tetap duduk di sana dan membiarkan aku marah sebentar.",
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
          "repairSeeking": 1.3,
          "emotionalExpression": 0.8
        },
        "positive": {
          "softRepair": 1,
          "honestTenderness": 0.8,
          "keptConnection": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "floodedReaction": -0.5,
          "leftUnsaid": -0.5
        },
        "relationship": {
          "repairSeeking": 1.2,
          "secureLeaning": 1.0
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
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
      "idealPartner",
      "loveStyle",
      "moral",
      "communication",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "moral",
      "communication",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_004",
    "kind": "forcedChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Akhir pekan kosong. Kau bisa memilih satu tempat untuk menghilang sebentar dari suara orang-orang.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_004_a",
        "text": "Aku memilih tempat yang familiar, tenang, dan tahu cara menerimaku tanpa banyak kejutan.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.6
          },
          "mbtiAxis": {
            "S": 1,
            "I": 0.4,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "tertiary": 0.3
          },
          "evidence": {
            "memoryReferencing": 1,
            "carefulComparison": 0.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "orderSeeking": 0.8
          },
          "positive": {
            "steadyRecall": 1,
            "keptSafe": 1,
            "keptGround": 1
          },
          "negative": {
            "untestedLeap": -0.7,
            "ignoredBody": -0.9,
            "chaoticDrift": -0.7
          },
          "environment": {
            "familiarPlace": 1.1,
            "organizedSpace": 0.9,
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "temperament": {
            "SJ": 0.4
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
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
        "id": "pref_004_b",
        "text": "Aku memilih tempat baru yang sedikit asing, supaya kepalaku tidak mengulang hari yang sama.",
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
            "possibilitySeeking": 1.7,
            "exploratoryTurn": 0.8,
            "noveltySeeking": 1
          },
          "positive": {
            "newDoor": 1,
            "roomForNew": 1,
            "freshAir": 1
          },
          "negative": {
            "stuckRoutine": -0.7,
            "closedDoor": -0.7,
            "unfinishedWeight": -0.7
          },
          "learning": {
            "exploratory": 1.2
          },
          "temperament": {
            "NF": 0.2,
            "NT": 0.2
          },
          "bigFive": {
            "Openness": 0.8
          },
          "hexaco": {
            "Openness": 0.8
          },
          "values": {
            "meaning": 0.6,
            "beauty": 0.6,
            "freedom": 0.9
          },
          "enneagram": {
            "7": 1.0
          },
          "coreFear": {
            "trapped": 0.7
          },
          "coreDesire": {
            "freedom": 0.7
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "pref_004_a",
      "text": "Aku memilih tempat yang familiar, tenang, dan tahu cara menerimaku tanpa banyak kejutan.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Si": 2,
          "Ne": -0.6
        },
        "mbtiAxis": {
          "S": 1,
          "I": 0.4,
          "J": 0.6
        },
        "stackRole": {
          "dominant": 0.6,
          "tertiary": 0.3
        },
        "evidence": {
          "memoryReferencing": 1,
          "carefulComparison": 0.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "orderSeeking": 0.8
        },
        "positive": {
          "steadyRecall": 1,
          "keptSafe": 1,
          "keptGround": 1
        },
        "negative": {
          "untestedLeap": -0.7,
          "ignoredBody": -0.9,
          "chaoticDrift": -0.7
        },
        "environment": {
          "familiarPlace": 1.1,
          "organizedSpace": 0.9,
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "temperament": {
          "SJ": 0.4
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
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
      "id": "pref_004_b",
      "text": "Aku memilih tempat baru yang sedikit asing, supaya kepalaku tidak mengulang hari yang sama.",
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
          "possibilitySeeking": 1.7,
          "exploratoryTurn": 0.8,
          "noveltySeeking": 1
        },
        "positive": {
          "newDoor": 1,
          "roomForNew": 1,
          "freshAir": 1
        },
        "negative": {
          "stuckRoutine": -0.7,
          "closedDoor": -0.7,
          "unfinishedWeight": -0.7
        },
        "learning": {
          "exploratory": 1.2
        },
        "temperament": {
          "NF": 0.2,
          "NT": 0.2
        },
        "bigFive": {
          "Openness": 0.8
        },
        "hexaco": {
          "Openness": 0.8
        },
        "values": {
          "meaning": 0.6,
          "beauty": 0.6,
          "freedom": 0.9
        },
        "enneagram": {
          "7": 1.0
        },
        "coreFear": {
          "trapped": 0.7
        },
        "coreDesire": {
          "freedom": 0.7
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "environment",
      "instinct",
      "values",
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "environment",
      "instinct",
      "values",
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_005",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Ada dua pesan di HP. Satu dari orang yang selalu membuat hari lebih tenang. Satu dari orang yang selalu membuat dadamu menyala dan gelisah.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_005_a",
        "text": "Aku membuka pesan dari orang yang tenang dulu, karena tubuhku tidak ingin ditebak-tebak malam ini.",
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
            "orderSeeking": 0.8,
            "certaintySeeking": 1
          },
          "positive": {
            "keptSafe": 1,
            "keptGround": 1,
            "checkedRisk": 1
          },
          "negative": {
            "ignoredBody": -0.9,
            "chaoticDrift": -0.7,
            "blindLeap": -0.8
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
        "id": "pref_005_b",
        "text": "Aku membuka pesan dari orang yang membuatku menyala, walau aku tahu malamku mungkin jadi tidak tenang.",
        "subtleMeaning": "hidden",
        "weights": {
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
          "evidence": {
            "intensitySeeking": 1,
            "onePersonFocus": 0.7,
            "noveltySeeking": 1,
            "emotionalExpression": 0.8
          },
          "positive": {
            "aliveBond": 1,
            "freshAir": 1,
            "honestTenderness": 0.8
          },
          "negative": {
            "safeDistance": -0.7,
            "unfinishedWeight": -0.7,
            "floodedReaction": -0.5
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
          "learning": {
            "exploratory": 0.5
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
      "id": "pref_005_a",
      "text": "Aku membuka pesan dari orang yang tenang dulu, karena tubuhku tidak ingin ditebak-tebak malam ini.",
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
          "orderSeeking": 0.8,
          "certaintySeeking": 1
        },
        "positive": {
          "keptSafe": 1,
          "keptGround": 1,
          "checkedRisk": 1
        },
        "negative": {
          "ignoredBody": -0.9,
          "chaoticDrift": -0.7,
          "blindLeap": -0.8
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
      "id": "pref_005_b",
      "text": "Aku membuka pesan dari orang yang membuatku menyala, walau aku tahu malamku mungkin jadi tidak tenang.",
      "subtleMeaning": "hidden",
      "weights": {
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
        "evidence": {
          "intensitySeeking": 1,
          "onePersonFocus": 0.7,
          "noveltySeeking": 1,
          "emotionalExpression": 0.8
        },
        "positive": {
          "aliveBond": 1,
          "freshAir": 1,
          "honestTenderness": 0.8
        },
        "negative": {
          "safeDistance": -0.7,
          "unfinishedWeight": -0.7,
          "floodedReaction": -0.5
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
        "learning": {
          "exploratory": 0.5
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
      "idealPartner",
      "loveStyle",
      "instinct",
      "coreDesire",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "instinct",
      "coreDesire",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_006",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Minggu itu berat. Seorang teman datang ke kamarmu membawa makanan, tidak bertanya banyak, hanya duduk di lantai.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_006_a",
        "text": "Aku merasa paling ditolong oleh orang yang melakukan hal kecil tanpa membuatku merasa berutang cerita.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "2": 1.0,
            "9": 1.2
          },
          "coreFear": {
            "unwanted": 0.7,
            "conflict": 0.7
          },
          "coreDesire": {
            "needed": 0.7,
            "peace": 0.7
          },
          "relationship": {
            "repairSeeking": 0.5
          },
          "work": {
            "helper": 0.5
          },
          "riasec": {
            "Social": 0.7
          },
          "positive": {
            "warmPresence": 1,
            "keptSafe": 1,
            "keptRoomGentle": 0.8
          },
          "negative": {
            "unseenNeed": -0.7,
            "ignoredBody": -0.9,
            "unspokenResentment": -0.7
          },
          "evidence": {
            "peopleFirst": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "peaceSeeking": 1
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
            "control": 0.6,
            "freeze": 0.5,
            "fawn": 0.3
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
        "id": "pref_006_b",
        "text": "Aku merasa paling ditolong oleh orang yang berani bertanya, “ceritakan yang sebenarnya, aku di sini.”",
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
            "emotionalExpression": 0.8,
            "intensitySeeking": 1,
            "onePersonFocus": 0.7
          },
          "positive": {
            "softRepair": 1,
            "honestTenderness": 0.8,
            "aliveBond": 1
          },
          "negative": {
            "coldCut": -0.8,
            "floodedReaction": -0.5,
            "safeDistance": -0.7
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
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
            "8": 0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "pref_006_a",
      "text": "Aku merasa paling ditolong oleh orang yang melakukan hal kecil tanpa membuatku merasa berutang cerita.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "2": 1.0,
          "9": 1.2
        },
        "coreFear": {
          "unwanted": 0.7,
          "conflict": 0.7
        },
        "coreDesire": {
          "needed": 0.7,
          "peace": 0.7
        },
        "relationship": {
          "repairSeeking": 0.5
        },
        "work": {
          "helper": 0.5
        },
        "riasec": {
          "Social": 0.7
        },
        "positive": {
          "warmPresence": 1,
          "keptSafe": 1,
          "keptRoomGentle": 0.8
        },
        "negative": {
          "unseenNeed": -0.7,
          "ignoredBody": -0.9,
          "unspokenResentment": -0.7
        },
        "evidence": {
          "peopleFirst": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "peaceSeeking": 1
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
          "control": 0.6,
          "freeze": 0.5,
          "fawn": 0.3
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
      "id": "pref_006_b",
      "text": "Aku merasa paling ditolong oleh orang yang berani bertanya, “ceritakan yang sebenarnya, aku di sini.”",
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
          "emotionalExpression": 0.8,
          "intensitySeeking": 1,
          "onePersonFocus": 0.7
        },
        "positive": {
          "softRepair": 1,
          "honestTenderness": 0.8,
          "aliveBond": 1
        },
        "negative": {
          "coldCut": -0.8,
          "floodedReaction": -0.5,
          "safeDistance": -0.7
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
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
          "8": 0.2
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "loveStyle",
      "relationship",
      "idealPartner",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "loveStyle",
      "relationship",
      "idealPartner",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_007",
    "kind": "forcedChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "low"
    },
    "prompt": "Kau diberi kesempatan menata kamar dari awal. Dinding kosong, satu kardus buku, dan meja tua di tengah ruangan.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_007_a",
        "text": "Aku ingin ruang yang rapi, mudah dijangkau, dan tidak membuatku mencari barang saat lelah.",
        "subtleMeaning": "hidden",
        "weights": {
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
          "positive": {
            "madeItNeat": 1,
            "keptGround": 1,
            "keptSafe": 1
          },
          "negative": {
            "messyLeap": -0.7,
            "chaoticDrift": -0.7,
            "ignoredBody": -0.9
          },
          "evidence": {
            "orderSeeking": 1.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
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
            "familiarPlace": 0.4,
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "stress": {
            "control": 0.6
          },
          "reliability": 0.84
        }
      },
      {
        "id": "pref_007_b",
        "text": "Aku ingin ruang yang punya warna, benda kecil, dan sudut yang membuat pikiranku punya tempat berkelana.",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Artistic": 1.0
          },
          "bigFive": {
            "Openness": 1.6
          },
          "hexaco": {
            "Openness": 1.6
          },
          "values": {
            "beauty": 1.2,
            "meaning": 1.1
          },
          "work": {
            "creator": 0.7
          },
          "learning": {
            "visual": 0.5,
            "projectBased": 0.4,
            "exploratory": 0.7
          },
          "positive": {
            "madeMeaning": 1,
            "roomForNew": 1,
            "newDoor": 1
          },
          "negative": {
            "dryProcedure": -0.6,
            "closedDoor": -0.7,
            "stuckRoutine": -0.7
          },
          "evidence": {
            "symbolicMeaning": 0.8,
            "possibilitySeeking": 1.7,
            "exploratoryTurn": 0.8
          },
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
          "temperament": {
            "NF": 0.2,
            "NT": 0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "pref_007_a",
      "text": "Aku ingin ruang yang rapi, mudah dijangkau, dan tidak membuatku mencari barang saat lelah.",
      "subtleMeaning": "hidden",
      "weights": {
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
        "positive": {
          "madeItNeat": 1,
          "keptGround": 1,
          "keptSafe": 1
        },
        "negative": {
          "messyLeap": -0.7,
          "chaoticDrift": -0.7,
          "ignoredBody": -0.9
        },
        "evidence": {
          "orderSeeking": 1.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
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
          "familiarPlace": 0.4,
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "stress": {
          "control": 0.6
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "pref_007_b",
      "text": "Aku ingin ruang yang punya warna, benda kecil, dan sudut yang membuat pikiranku punya tempat berkelana.",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Artistic": 1.0
        },
        "bigFive": {
          "Openness": 1.6
        },
        "hexaco": {
          "Openness": 1.6
        },
        "values": {
          "beauty": 1.2,
          "meaning": 1.1
        },
        "work": {
          "creator": 0.7
        },
        "learning": {
          "visual": 0.5,
          "projectBased": 0.4,
          "exploratory": 0.7
        },
        "positive": {
          "madeMeaning": 1,
          "roomForNew": 1,
          "newDoor": 1
        },
        "negative": {
          "dryProcedure": -0.6,
          "closedDoor": -0.7,
          "stuckRoutine": -0.7
        },
        "evidence": {
          "symbolicMeaning": 0.8,
          "possibilitySeeking": 1.7,
          "exploratoryTurn": 0.8
        },
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
        "temperament": {
          "NF": 0.2,
          "NT": 0.2
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "environment",
      "values",
      "learning",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "environment",
      "values",
      "learning",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_008",
    "kind": "forcedChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di antara banyak orang, seseorang memperhatikan bahwa kau belum makan. Ia tidak mengumumkannya, hanya mendorong piring kecil ke dekatmu.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_008_a",
        "text": "Aku lebih mudah percaya pada perhatian yang tidak perlu panggung.",
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
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "orderSeeking": 0.8
          },
          "positive": {
            "keptSafe": 1,
            "softRepair": 1,
            "keptGround": 1
          },
          "negative": {
            "ignoredBody": -0.9,
            "coldCut": -0.8,
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
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
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
        "id": "pref_008_b",
        "text": "Aku lebih mudah percaya pada perhatian yang berani terlihat, seolah ia tidak malu memilihku di depan orang.",
        "subtleMeaning": "hidden",
        "weights": {
          "instinct": {
            "so": 1.5,
            "sp": -0.5,
            "sx": 1.5
          },
          "relationship": {
            "belongingSeeking": 0.8,
            "secureLeaning": 0.3
          },
          "communication": {
            "expressive": 0.5,
            "gentle": 0.3
          },
          "evidence": {
            "statusAwareness": 0.7,
            "visibleRole": 0.7,
            "intensitySeeking": 1,
            "onePersonFocus": 0.7,
            "peopleFirst": 0.3
          },
          "positive": {
            "socialBridge": 1,
            "aliveBond": 1,
            "quietCare": 0.6
          },
          "negative": {
            "privateTunnel": -0.6,
            "safeDistance": -0.7,
            "loudPromise": -0.5
          },
          "disc": {
            "I": 0.5
          },
          "loveStyle": {
            "emotionalDepth": 0.8,
            "sharedDream": 0.5,
            "steadyPresence": 0.4,
            "practicalCare": 0.3
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
      "id": "pref_008_a",
      "text": "Aku lebih mudah percaya pada perhatian yang tidak perlu panggung.",
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
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "orderSeeking": 0.8
        },
        "positive": {
          "keptSafe": 1,
          "softRepair": 1,
          "keptGround": 1
        },
        "negative": {
          "ignoredBody": -0.9,
          "coldCut": -0.8,
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
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
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
      "id": "pref_008_b",
      "text": "Aku lebih mudah percaya pada perhatian yang berani terlihat, seolah ia tidak malu memilihku di depan orang.",
      "subtleMeaning": "hidden",
      "weights": {
        "instinct": {
          "so": 1.5,
          "sp": -0.5,
          "sx": 1.5
        },
        "relationship": {
          "belongingSeeking": 0.8,
          "secureLeaning": 0.3
        },
        "communication": {
          "expressive": 0.5,
          "gentle": 0.3
        },
        "evidence": {
          "statusAwareness": 0.7,
          "visibleRole": 0.7,
          "intensitySeeking": 1,
          "onePersonFocus": 0.7,
          "peopleFirst": 0.3
        },
        "positive": {
          "socialBridge": 1,
          "aliveBond": 1,
          "quietCare": 0.6
        },
        "negative": {
          "privateTunnel": -0.6,
          "safeDistance": -0.7,
          "loudPromise": -0.5
        },
        "disc": {
          "I": 0.5
        },
        "loveStyle": {
          "emotionalDepth": 0.8,
          "sharedDream": 0.5,
          "steadyPresence": 0.4,
          "practicalCare": 0.3
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
      "loveStyle",
      "idealPartner",
      "instinct",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "loveStyle",
      "idealPartner",
      "instinct",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_009",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang yang kau suka mulai mengatur dengan siapa kau boleh dekat. Ia bilang, “aku cuma takut kehilangan kamu.”",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_009_a",
        "text": "Aku berhenti menjawab sebentar, lalu berkata, “takutmu tidak boleh jadi pagar di leherku.”",
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
            "justiceSeeking": 1,
            "directEngagement": 0.4,
            "noveltySeeking": 1
          },
          "positive": {
            "keptSelfRespect": 1,
            "stoodForFairness": 1,
            "freshAir": 1
          },
          "negative": {
            "selfErasure": -0.8,
            "easySilence": -0.8,
            "unfinishedWeight": -0.7
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.9,
            "justice": 0.8,
            "freedom": 0.9,
            "beauty": 0.2
          },
          "conflict": {
            "boundaryCutoff": 0.5,
            "directConfrontation": 0.7
          },
          "enneagram": {
            "1": 0.8,
            "8": 0.4,
            "7": 1.0
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "coreFear": {
            "trapped": 0.7
          },
          "coreDesire": {
            "freedom": 0.7
          },
          "learning": {
            "exploratory": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "pref_009_b",
        "text": "Aku bertanya dulu apa yang membuatnya setakut itu, tapi aku tetap menyimpan batas yang tidak boleh ia lewati.",
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
            "certaintySeeking": 1,
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "softRepair": 1,
            "checkedRisk": 1,
            "keptSelfRespect": 1
          },
          "negative": {
            "coldCut": -0.8,
            "blindLeap": -0.8,
            "selfErasure": -0.8
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
          "values": {
            "autonomy": 0.7,
            "truth": 0.5
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "pref_009_a",
      "text": "Aku berhenti menjawab sebentar, lalu berkata, “takutmu tidak boleh jadi pagar di leherku.”",
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
          "justiceSeeking": 1,
          "directEngagement": 0.4,
          "noveltySeeking": 1
        },
        "positive": {
          "keptSelfRespect": 1,
          "stoodForFairness": 1,
          "freshAir": 1
        },
        "negative": {
          "selfErasure": -0.8,
          "easySilence": -0.8,
          "unfinishedWeight": -0.7
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.9,
          "justice": 0.8,
          "freedom": 0.9,
          "beauty": 0.2
        },
        "conflict": {
          "boundaryCutoff": 0.5,
          "directConfrontation": 0.7
        },
        "enneagram": {
          "1": 0.8,
          "8": 0.4,
          "7": 1.0
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "coreFear": {
          "trapped": 0.7
        },
        "coreDesire": {
          "freedom": 0.7
        },
        "learning": {
          "exploratory": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "pref_009_b",
      "text": "Aku bertanya dulu apa yang membuatnya setakut itu, tapi aku tetap menyimpan batas yang tidak boleh ia lewati.",
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
          "certaintySeeking": 1,
          "boundarySetting": 1,
          "selfRespect": 0.8
        },
        "positive": {
          "softRepair": 1,
          "checkedRisk": 1,
          "keptSelfRespect": 1
        },
        "negative": {
          "coldCut": -0.8,
          "blindLeap": -0.8,
          "selfErasure": -0.8
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
        "values": {
          "autonomy": 0.7,
          "truth": 0.5
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "idealPartner",
      "relationship",
      "conflict",
      "values",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "relationship",
      "conflict",
      "values",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_010",
    "kind": "forcedChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau boleh menyimpan satu benda dari masa yang sudah selesai. Di meja ada foto, surat, kunci lama, dan buku lusuh.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_010_a",
        "text": "Aku menyimpan benda yang mengingatkanku pada apa yang pernah kuselamatkan dari diriku sendiri.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.6
          },
          "mbtiAxis": {
            "S": 1,
            "I": 0.4,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "tertiary": 0.3
          },
          "evidence": {
            "memoryReferencing": 1,
            "carefulComparison": 0.8,
            "symbolicMeaning": 0.8,
            "intensitySeeking": 1,
            "onePersonFocus": 0.7
          },
          "positive": {
            "steadyRecall": 1,
            "madeMeaning": 1,
            "aliveBond": 1
          },
          "negative": {
            "untestedLeap": -0.7,
            "dryProcedure": -0.6,
            "safeDistance": -0.7
          },
          "environment": {
            "familiarPlace": 0.7,
            "organizedSpace": 0.3
          },
          "temperament": {
            "SJ": 0.4
          },
          "riasec": {
            "Artistic": 1.0
          },
          "bigFive": {
            "Openness": 0.8
          },
          "hexaco": {
            "Openness": 0.8
          },
          "values": {
            "beauty": 0.8,
            "meaning": 0.5
          },
          "work": {
            "creator": 0.7
          },
          "learning": {
            "visual": 0.5,
            "projectBased": 0.4
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
            "8": 0.2
          },
          "reliability": 0.84
        }
      },
      {
        "id": "pref_010_b",
        "text": "Aku memilih yang masih bisa dipakai, sesuatu yang membuat hari-hari berikutnya lebih ringan.",
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
            "Conscientiousness": 0.9
          },
          "hexaco": {
            "Conscientiousness": 0.9
          },
          "positive": {
            "handsOnRepair": 1,
            "keptSafe": 1,
            "keptGround": 1
          },
          "negative": {
            "emptyTalk": -0.7,
            "ignoredBody": -0.9,
            "chaoticDrift": -0.7
          },
          "evidence": {
            "practicalRepair": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "orderSeeking": 0.8
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
            "functionalSpace": 0.4,
            "organizedSpace": 0.6,
            "familiarPlace": 0.4
          },
          "stress": {
            "control": 0.6
          },
          "values": {
            "security": 0.7
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "pref_010_a",
      "text": "Aku menyimpan benda yang mengingatkanku pada apa yang pernah kuselamatkan dari diriku sendiri.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Si": 2,
          "Ne": -0.6
        },
        "mbtiAxis": {
          "S": 1,
          "I": 0.4,
          "J": 0.6
        },
        "stackRole": {
          "dominant": 0.6,
          "tertiary": 0.3
        },
        "evidence": {
          "memoryReferencing": 1,
          "carefulComparison": 0.8,
          "symbolicMeaning": 0.8,
          "intensitySeeking": 1,
          "onePersonFocus": 0.7
        },
        "positive": {
          "steadyRecall": 1,
          "madeMeaning": 1,
          "aliveBond": 1
        },
        "negative": {
          "untestedLeap": -0.7,
          "dryProcedure": -0.6,
          "safeDistance": -0.7
        },
        "environment": {
          "familiarPlace": 0.7,
          "organizedSpace": 0.3
        },
        "temperament": {
          "SJ": 0.4
        },
        "riasec": {
          "Artistic": 1.0
        },
        "bigFive": {
          "Openness": 0.8
        },
        "hexaco": {
          "Openness": 0.8
        },
        "values": {
          "beauty": 0.8,
          "meaning": 0.5
        },
        "work": {
          "creator": 0.7
        },
        "learning": {
          "visual": 0.5,
          "projectBased": 0.4
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
          "8": 0.2
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "pref_010_b",
      "text": "Aku memilih yang masih bisa dipakai, sesuatu yang membuat hari-hari berikutnya lebih ringan.",
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
          "Conscientiousness": 0.9
        },
        "hexaco": {
          "Conscientiousness": 0.9
        },
        "positive": {
          "handsOnRepair": 1,
          "keptSafe": 1,
          "keptGround": 1
        },
        "negative": {
          "emptyTalk": -0.7,
          "ignoredBody": -0.9,
          "chaoticDrift": -0.7
        },
        "evidence": {
          "practicalRepair": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "orderSeeking": 0.8
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
          "functionalSpace": 0.4,
          "organizedSpace": 0.6,
          "familiarPlace": 0.4
        },
        "stress": {
          "control": 0.6
        },
        "values": {
          "security": 0.7
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "environment",
      "values",
      "cognitive",
      "loveStyle",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "environment",
      "values",
      "cognitive",
      "loveStyle",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_011",
    "kind": "forcedChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Orang baru itu tidak banyak janji. Tapi setiap kali kau menyebut sesuatu, minggu depannya ia ingat.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_011_a",
        "text": "Aku lebih percaya pada konsistensi kecil yang tidak perlu dijual dengan kata-kata besar.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.6
          },
          "mbtiAxis": {
            "S": 1,
            "I": 0.4,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "tertiary": 0.3
          },
          "evidence": {
            "memoryReferencing": 1,
            "carefulComparison": 0.8,
            "orderSeeking": 0.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "positive": {
            "steadyRecall": 1,
            "keptGround": 1,
            "keptSafe": 1
          },
          "negative": {
            "untestedLeap": -0.7,
            "chaoticDrift": -0.7,
            "ignoredBody": -0.9
          },
          "environment": {
            "familiarPlace": 1.1,
            "organizedSpace": 0.9,
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "temperament": {
            "SJ": 0.4
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
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "stress": {
            "control": 0.6
          },
          "reliability": 0.84
        }
      },
      {
        "id": "pref_011_b",
        "text": "Aku tetap membutuhkan kata yang jelas, karena diam terlalu sering membuatku menebak-nebak sendiri.",
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
            "emotionalExpression": 0.8,
            "certaintySeeking": 1
          },
          "positive": {
            "softRepair": 1,
            "honestTenderness": 0.8,
            "checkedRisk": 1
          },
          "negative": {
            "coldCut": -0.8,
            "floodedReaction": -0.5,
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
      }
    ],
    "left": {
      "id": "pref_011_a",
      "text": "Aku lebih percaya pada konsistensi kecil yang tidak perlu dijual dengan kata-kata besar.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Si": 2,
          "Ne": -0.6
        },
        "mbtiAxis": {
          "S": 1,
          "I": 0.4,
          "J": 0.6
        },
        "stackRole": {
          "dominant": 0.6,
          "tertiary": 0.3
        },
        "evidence": {
          "memoryReferencing": 1,
          "carefulComparison": 0.8,
          "orderSeeking": 0.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "positive": {
          "steadyRecall": 1,
          "keptGround": 1,
          "keptSafe": 1
        },
        "negative": {
          "untestedLeap": -0.7,
          "chaoticDrift": -0.7,
          "ignoredBody": -0.9
        },
        "environment": {
          "familiarPlace": 1.1,
          "organizedSpace": 0.9,
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "temperament": {
          "SJ": 0.4
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
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "stress": {
          "control": 0.6
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "pref_011_b",
      "text": "Aku tetap membutuhkan kata yang jelas, karena diam terlalu sering membuatku menebak-nebak sendiri.",
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
          "emotionalExpression": 0.8,
          "certaintySeeking": 1
        },
        "positive": {
          "softRepair": 1,
          "honestTenderness": 0.8,
          "checkedRisk": 1
        },
        "negative": {
          "coldCut": -0.8,
          "floodedReaction": -0.5,
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
    "reliability": 0.84,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "relationship",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "relationship",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "pref_012",
    "kind": "forcedChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "low"
    },
    "prompt": "Kau memilih tempat untuk bicara jujur dengan seseorang. Kota sedang gerimis, dan pembicaraan itu tidak bisa ditunda lagi.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "pref_012_a",
        "text": "Aku memilih tempat yang sepi, dengan jalan keluar yang mudah kalau suaraku mulai pecah.",
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
        "id": "pref_012_b",
        "text": "Aku memilih tempat yang cukup hidup, supaya percakapan tidak menelan kami berdua terlalu dalam.",
        "subtleMeaning": "hidden",
        "weights": {
          "instinct": {
            "so": 1.5,
            "sp": -0.2
          },
          "relationship": {
            "belongingSeeking": 0.8,
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "expressive": 0.8,
            "gentle": 1.6
          },
          "evidence": {
            "statusAwareness": 0.7,
            "visibleRole": 0.7,
            "peopleFirst": 1,
            "repairSeeking": 1.5
          },
          "positive": {
            "socialBridge": 1,
            "softRepair": 1,
            "softenedEdge": 1
          },
          "negative": {
            "privateTunnel": -0.6,
            "coldCut": -0.8,
            "needlessSharpness": -0.8
          },
          "disc": {
            "I": 0.5
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
          "bigFive": {
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Agreeableness": 0.8
          },
          "conflict": {
            "negotiation": 0.5
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "pref_012_a",
      "text": "Aku memilih tempat yang sepi, dengan jalan keluar yang mudah kalau suaraku mulai pecah.",
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
      "id": "pref_012_b",
      "text": "Aku memilih tempat yang cukup hidup, supaya percakapan tidak menelan kami berdua terlalu dalam.",
      "subtleMeaning": "hidden",
      "weights": {
        "instinct": {
          "so": 1.5,
          "sp": -0.2
        },
        "relationship": {
          "belongingSeeking": 0.8,
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "expressive": 0.8,
          "gentle": 1.6
        },
        "evidence": {
          "statusAwareness": 0.7,
          "visibleRole": 0.7,
          "peopleFirst": 1,
          "repairSeeking": 1.5
        },
        "positive": {
          "socialBridge": 1,
          "softRepair": 1,
          "softenedEdge": 1
        },
        "negative": {
          "privateTunnel": -0.6,
          "coldCut": -0.8,
          "needlessSharpness": -0.8
        },
        "disc": {
          "I": 0.5
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
        "bigFive": {
          "Agreeableness": 0.8
        },
        "hexaco": {
          "Agreeableness": 0.8
        },
        "conflict": {
          "negotiation": 0.5
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "environment",
      "communication",
      "conflict",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "environment",
      "communication",
      "conflict",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  }
];
