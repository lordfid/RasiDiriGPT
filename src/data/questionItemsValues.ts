import type { QuestionItem } from "../types";

export const VALUES_QUESTIONS: QuestionItem[] = [
  {
    "id": "val_001",
    "kind": "forcedChoice",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di chat grup, seseorang meminta semua orang menutup kebohongan kecil agar acara tetap aman. Kursor berkedip di layar.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "val_001_a",
        "text": "Aku menulis, “kalau ada yang tanya, aku tidak mau ikut berbohong.”",
        "subtleMeaning": "hidden",
        "weights": {
          "hexaco": {
            "HonestyHumility": 1.0
          },
          "moral": {
            "truthBased": 1.3,
            "purityIntegrityBased": 0.4,
            "justiceBased": 1
          },
          "values": {
            "truth": 1.7,
            "justice": 0.8,
            "autonomy": 0.7
          },
          "positive": {
            "cleanHands": 1,
            "stoodForFairness": 1,
            "keptSelfRespect": 1
          },
          "negative": {
            "smoothLie": -0.8,
            "easySilence": -0.8,
            "selfErasure": -0.8
          },
          "evidence": {
            "truthSeeking": 1,
            "justiceSeeking": 1,
            "directEngagement": 0.4,
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "conflict": {
            "directConfrontation": 0.7,
            "boundaryCutoff": 0.5
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
      {
        "id": "val_001_b",
        "text": "Aku bertanya dulu siapa yang akan terluka kalau kebenarannya dibuka sekarang.",
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
            "certaintySeeking": 1.3
          },
          "positive": {
            "softRepair": 1,
            "checkedRisk": 1,
            "choseCarefully": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "blindLeap": -0.8,
            "avoidantDelay": -0.5
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
            "riskAware": 1.0,
            "consultative": 0.4,
            "reflective": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "val_001_a",
      "text": "Aku menulis, “kalau ada yang tanya, aku tidak mau ikut berbohong.”",
      "subtleMeaning": "hidden",
      "weights": {
        "hexaco": {
          "HonestyHumility": 1.0
        },
        "moral": {
          "truthBased": 1.3,
          "purityIntegrityBased": 0.4,
          "justiceBased": 1
        },
        "values": {
          "truth": 1.7,
          "justice": 0.8,
          "autonomy": 0.7
        },
        "positive": {
          "cleanHands": 1,
          "stoodForFairness": 1,
          "keptSelfRespect": 1
        },
        "negative": {
          "smoothLie": -0.8,
          "easySilence": -0.8,
          "selfErasure": -0.8
        },
        "evidence": {
          "truthSeeking": 1,
          "justiceSeeking": 1,
          "directEngagement": 0.4,
          "boundarySetting": 1,
          "selfRespect": 0.8
        },
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "conflict": {
          "directConfrontation": 0.7,
          "boundaryCutoff": 0.5
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
    "right": {
      "id": "val_001_b",
      "text": "Aku bertanya dulu siapa yang akan terluka kalau kebenarannya dibuka sekarang.",
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
          "certaintySeeking": 1.3
        },
        "positive": {
          "softRepair": 1,
          "checkedRisk": 1,
          "choseCarefully": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "blindLeap": -0.8,
          "avoidantDelay": -0.5
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
          "riskAware": 1.0,
          "consultative": 0.4,
          "reflective": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "val_002",
    "kind": "forcedChoice",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Di kantor, orang yang paling lemah disalahkan agar masalah cepat selesai. Ia berdiri di dekat pintu sambil meremas map.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "val_002_a",
        "text": "Aku berkata, “dia bukan satu-satunya yang pegang bagian itu,” sebelum ruangan terlalu nyaman menyalahkannya.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 1.3,
            "purityIntegrityBased": 0.4
          },
          "values": {
            "justice": 0.8,
            "truth": 1.2
          },
          "conflict": {
            "directConfrontation": 0.7
          },
          "positive": {
            "stoodForFairness": 1,
            "presentMove": 1,
            "cleanHands": 1
          },
          "negative": {
            "easySilence": -0.8,
            "overWaiting": -0.8,
            "smoothLie": -0.8
          },
          "evidence": {
            "justiceSeeking": 1,
            "directEngagement": 1.3,
            "actionFirst": 1,
            "truthSeeking": 1
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
          "hexaco": {
            "HonestyHumility": 1.0
          },
          "reliability": 0.84
        }
      },
      {
        "id": "val_002_b",
        "text": "Aku mengajaknya keluar dulu, mencari bukti yang bisa dipakai agar pembelaannya tidak hanya terdengar kasihan.",
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
            "truthSeeking": 1,
            "certaintySeeking": 1
          },
          "positive": {
            "softRepair": 1,
            "checkedBeforeMoving": 1,
            "checkedRisk": 1
          },
          "negative": {
            "coldCut": -0.8,
            "performativeRush": -0.6,
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
          "riasec": {
            "Investigative": 1.0
          },
          "work": {
            "researcher": 0.8
          },
          "learning": {
            "analytical": 0.6,
            "structured": 0.3
          },
          "attitudinalPsyche": {
            "L_confident": 0.6
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
      "id": "val_002_a",
      "text": "Aku berkata, “dia bukan satu-satunya yang pegang bagian itu,” sebelum ruangan terlalu nyaman menyalahkannya.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 1.3,
          "purityIntegrityBased": 0.4
        },
        "values": {
          "justice": 0.8,
          "truth": 1.2
        },
        "conflict": {
          "directConfrontation": 0.7
        },
        "positive": {
          "stoodForFairness": 1,
          "presentMove": 1,
          "cleanHands": 1
        },
        "negative": {
          "easySilence": -0.8,
          "overWaiting": -0.8,
          "smoothLie": -0.8
        },
        "evidence": {
          "justiceSeeking": 1,
          "directEngagement": 1.3,
          "actionFirst": 1,
          "truthSeeking": 1
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
        "hexaco": {
          "HonestyHumility": 1.0
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "val_002_b",
      "text": "Aku mengajaknya keluar dulu, mencari bukti yang bisa dipakai agar pembelaannya tidak hanya terdengar kasihan.",
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
          "truthSeeking": 1,
          "certaintySeeking": 1
        },
        "positive": {
          "softRepair": 1,
          "checkedBeforeMoving": 1,
          "checkedRisk": 1
        },
        "negative": {
          "coldCut": -0.8,
          "performativeRush": -0.6,
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
        "riasec": {
          "Investigative": 1.0
        },
        "work": {
          "researcher": 0.8
        },
        "learning": {
          "analytical": 0.6,
          "structured": 0.3
        },
        "attitudinalPsyche": {
          "L_confident": 0.6
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
      "moral",
      "decision",
      "values",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "val_003",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Keluarga meminta kau mengalah lagi, “biar damai.” Di meja, lauk sudah dingin.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "val_003_a",
        "text": "Aku berkata, “damai tidak boleh selalu berarti aku yang hilang.”",
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
            "selfRespect": 1.2,
            "justiceSeeking": 1,
            "directEngagement": 0.4
          },
          "positive": {
            "keptSelfRespect": 1,
            "stoodForFairness": 1,
            "keptMeaning": 0.6
          },
          "negative": {
            "selfErasure": -0.8,
            "easySilence": -0.8,
            "hollowYes": -0.5
          },
          "values": {
            "autonomy": 1.1,
            "truth": 0.9,
            "justice": 0.8,
            "meaning": 0.4
          },
          "conflict": {
            "boundaryCutoff": 0.5,
            "directConfrontation": 0.7
          },
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "val_003_b",
        "text": "Aku memilih diam malam itu, tapi besoknya aku bicara empat mata dengan orang yang paling bisa mendengar.",
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
            "appeasement": 0.3
          },
          "stress": {
            "freeze": 0.5,
            "fawn": 0.3
          },
          "defense": {
            "withdrawal": 0.5
          },
          "positive": {
            "keptRoomGentle": 0.8,
            "softRepair": 1,
            "choseCarefully": 0.6
          },
          "negative": {
            "unspokenResentment": -0.7,
            "coldCut": -0.8,
            "avoidantDelay": -0.5
          },
          "evidence": {
            "peaceSeeking": 1,
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "certaintySeeking": 0.3
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
          "decision": {
            "reflective": 0.4,
            "riskAware": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "val_003_a",
      "text": "Aku berkata, “damai tidak boleh selalu berarti aku yang hilang.”",
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
          "selfRespect": 1.2,
          "justiceSeeking": 1,
          "directEngagement": 0.4
        },
        "positive": {
          "keptSelfRespect": 1,
          "stoodForFairness": 1,
          "keptMeaning": 0.6
        },
        "negative": {
          "selfErasure": -0.8,
          "easySilence": -0.8,
          "hollowYes": -0.5
        },
        "values": {
          "autonomy": 1.1,
          "truth": 0.9,
          "justice": 0.8,
          "meaning": 0.4
        },
        "conflict": {
          "boundaryCutoff": 0.5,
          "directConfrontation": 0.7
        },
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "val_003_b",
      "text": "Aku memilih diam malam itu, tapi besoknya aku bicara empat mata dengan orang yang paling bisa mendengar.",
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
          "appeasement": 0.3
        },
        "stress": {
          "freeze": 0.5,
          "fawn": 0.3
        },
        "defense": {
          "withdrawal": 0.5
        },
        "positive": {
          "keptRoomGentle": 0.8,
          "softRepair": 1,
          "choseCarefully": 0.6
        },
        "negative": {
          "unspokenResentment": -0.7,
          "coldCut": -0.8,
          "avoidantDelay": -0.5
        },
        "evidence": {
          "peaceSeeking": 1,
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "certaintySeeking": 0.3
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
        "decision": {
          "reflective": 0.4,
          "riskAware": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "moral",
      "conflict",
      "values",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "conflict",
      "values",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "val_004",
    "kind": "forcedChoice",
    "context": {
      "domain": "money",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau mendapat uang lebih sedikit dari yang dijanjikan. Orang itu berkata, “nanti juga aku ganti,” sambil menghindari matamu.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "val_004_a",
        "text": "Aku meminta tanggal yang jelas dan menuliskannya saat itu juga.",
        "subtleMeaning": "hidden",
        "weights": {
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
          "evidence": {
            "practicalRepair": 1,
            "systemFirst": 0.8,
            "truthSeeking": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "positive": {
            "clearNextStep": 1,
            "cleanHands": 1,
            "keptSafe": 1
          },
          "negative": {
            "looseProcess": -0.8,
            "smoothLie": -0.8,
            "ignoredBody": -0.9
          },
          "work": {
            "planner": 0.8,
            "executor": 0.6
          },
          "disc": {
            "C": 0.4,
            "D": 0.4
          },
          "hexaco": {
            "HonestyHumility": 1.0
          },
          "moral": {
            "truthBased": 0.8,
            "purityIntegrityBased": 0.4
          },
          "values": {
            "truth": 0.8
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
          "reliability": 0.84
        }
      },
      {
        "id": "val_004_b",
        "text": "Aku melihat dulu apakah ia benar-benar kesulitan, lalu menawarkan cara bayar bertahap.",
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
            "repairSeeking": 1.5,
            "certaintySeeking": 1
          },
          "positive": {
            "softRepair": 1,
            "softenedEdge": 1,
            "checkedRisk": 1
          },
          "negative": {
            "coldCut": -0.8,
            "needlessSharpness": -0.8,
            "blindLeap": -0.8
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5,
            "reassuranceSeeking": 0.6
          },
          "communication": {
            "gentle": 1.3,
            "expressive": 0.3
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
      "id": "val_004_a",
      "text": "Aku meminta tanggal yang jelas dan menuliskannya saat itu juga.",
      "subtleMeaning": "hidden",
      "weights": {
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
        "evidence": {
          "practicalRepair": 1,
          "systemFirst": 0.8,
          "truthSeeking": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "positive": {
          "clearNextStep": 1,
          "cleanHands": 1,
          "keptSafe": 1
        },
        "negative": {
          "looseProcess": -0.8,
          "smoothLie": -0.8,
          "ignoredBody": -0.9
        },
        "work": {
          "planner": 0.8,
          "executor": 0.6
        },
        "disc": {
          "C": 0.4,
          "D": 0.4
        },
        "hexaco": {
          "HonestyHumility": 1.0
        },
        "moral": {
          "truthBased": 0.8,
          "purityIntegrityBased": 0.4
        },
        "values": {
          "truth": 0.8
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
        "reliability": 0.84
      }
    },
    "right": {
      "id": "val_004_b",
      "text": "Aku melihat dulu apakah ia benar-benar kesulitan, lalu menawarkan cara bayar bertahap.",
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
          "repairSeeking": 1.5,
          "certaintySeeking": 1
        },
        "positive": {
          "softRepair": 1,
          "softenedEdge": 1,
          "checkedRisk": 1
        },
        "negative": {
          "coldCut": -0.8,
          "needlessSharpness": -0.8,
          "blindLeap": -0.8
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5,
          "reassuranceSeeking": 0.6
        },
        "communication": {
          "gentle": 1.3,
          "expressive": 0.3
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
      "moral",
      "decision",
      "values",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "val_005",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Seorang teman membuka rahasia orang lain agar obrolan meja jadi ramai. Semua orang tertawa sebentar.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "val_005_a",
        "text": "Aku tidak ikut tertawa dan mengganti arah bicara sebelum rahasia itu jadi makanan meja.",
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
            "peaceSeeking": 1,
            "directEngagement": 0.4
          },
          "positive": {
            "softRepair": 1,
            "keptRoomGentle": 0.8,
            "clearWords": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "unspokenResentment": -0.7,
            "muddyMessage": -0.5
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 1.0,
            "expressive": 0.3,
            "direct": 0.5
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
            "fawn": 0.3
          },
          "defense": {
            "withdrawal": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "val_005_b",
        "text": "Aku berkata, “itu bukan cerita kita,” meski suasana langsung turun.",
        "subtleMeaning": "hidden",
        "weights": {
          "hexaco": {
            "HonestyHumility": 1.0
          },
          "moral": {
            "truthBased": 1.3,
            "purityIntegrityBased": 0.4,
            "justiceBased": 1
          },
          "values": {
            "truth": 1.7,
            "justice": 0.8,
            "autonomy": 0.7
          },
          "positive": {
            "cleanHands": 1,
            "stoodForFairness": 1,
            "keptSelfRespect": 1
          },
          "negative": {
            "smoothLie": -0.8,
            "easySilence": -0.8,
            "selfErasure": -0.8
          },
          "evidence": {
            "truthSeeking": 1,
            "justiceSeeking": 1,
            "directEngagement": 0.4,
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "conflict": {
            "directConfrontation": 0.7,
            "boundaryCutoff": 0.5
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
      "id": "val_005_a",
      "text": "Aku tidak ikut tertawa dan mengganti arah bicara sebelum rahasia itu jadi makanan meja.",
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
          "peaceSeeking": 1,
          "directEngagement": 0.4
        },
        "positive": {
          "softRepair": 1,
          "keptRoomGentle": 0.8,
          "clearWords": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "unspokenResentment": -0.7,
          "muddyMessage": -0.5
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 1.0,
          "expressive": 0.3,
          "direct": 0.5
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
          "fawn": 0.3
        },
        "defense": {
          "withdrawal": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "val_005_b",
      "text": "Aku berkata, “itu bukan cerita kita,” meski suasana langsung turun.",
      "subtleMeaning": "hidden",
      "weights": {
        "hexaco": {
          "HonestyHumility": 1.0
        },
        "moral": {
          "truthBased": 1.3,
          "purityIntegrityBased": 0.4,
          "justiceBased": 1
        },
        "values": {
          "truth": 1.7,
          "justice": 0.8,
          "autonomy": 0.7
        },
        "positive": {
          "cleanHands": 1,
          "stoodForFairness": 1,
          "keptSelfRespect": 1
        },
        "negative": {
          "smoothLie": -0.8,
          "easySilence": -0.8,
          "selfErasure": -0.8
        },
        "evidence": {
          "truthSeeking": 1,
          "justiceSeeking": 1,
          "directEngagement": 0.4,
          "boundarySetting": 1,
          "selfRespect": 0.8
        },
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "conflict": {
          "directConfrontation": 0.7,
          "boundaryCutoff": 0.5
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
      "moral",
      "values",
      "conflict",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "values",
      "conflict",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "val_006",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Tim bisa menang jika memakai cara yang sedikit curang. Tidak ada yang mungkin tahu, kecuali kalian sendiri.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "val_006_a",
        "text": "Aku menolak karena kemenangan yang harus disembunyikan akan tetap mengikuti pulang.",
        "subtleMeaning": "hidden",
        "weights": {
          "hexaco": {
            "HonestyHumility": 1.0
          },
          "moral": {
            "truthBased": 1.3,
            "purityIntegrityBased": 0.4,
            "justiceBased": 1
          },
          "values": {
            "truth": 1.2,
            "justice": 0.8,
            "autonomy": 0.4,
            "meaning": 0.4
          },
          "positive": {
            "cleanHands": 1,
            "stoodForFairness": 1,
            "keptMeaning": 0.6
          },
          "negative": {
            "smoothLie": -0.8,
            "easySilence": -0.8,
            "hollowYes": -0.5
          },
          "evidence": {
            "truthSeeking": 1,
            "justiceSeeking": 1,
            "directEngagement": 0.4,
            "selfRespect": 0.4
          },
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "conflict": {
            "directConfrontation": 0.7
          },
          "reliability": 0.84
        }
      },
      {
        "id": "val_006_b",
        "text": "Aku mencari cara lain yang masih aman, meski hasilnya tidak sebesar rencana awal.",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Investigative": 1.0
          },
          "work": {
            "researcher": 0.8,
            "planner": 0.8,
            "executor": 0.6
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
            "checkedRisk": 1,
            "clearNextStep": 1
          },
          "negative": {
            "performativeRush": -0.6,
            "blindLeap": -0.8,
            "looseProcess": -0.8
          },
          "evidence": {
            "truthSeeking": 1,
            "certaintySeeking": 1,
            "practicalRepair": 1,
            "systemFirst": 0.8
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
          "disc": {
            "C": 0.4,
            "D": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "val_006_a",
      "text": "Aku menolak karena kemenangan yang harus disembunyikan akan tetap mengikuti pulang.",
      "subtleMeaning": "hidden",
      "weights": {
        "hexaco": {
          "HonestyHumility": 1.0
        },
        "moral": {
          "truthBased": 1.3,
          "purityIntegrityBased": 0.4,
          "justiceBased": 1
        },
        "values": {
          "truth": 1.2,
          "justice": 0.8,
          "autonomy": 0.4,
          "meaning": 0.4
        },
        "positive": {
          "cleanHands": 1,
          "stoodForFairness": 1,
          "keptMeaning": 0.6
        },
        "negative": {
          "smoothLie": -0.8,
          "easySilence": -0.8,
          "hollowYes": -0.5
        },
        "evidence": {
          "truthSeeking": 1,
          "justiceSeeking": 1,
          "directEngagement": 0.4,
          "selfRespect": 0.4
        },
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "conflict": {
          "directConfrontation": 0.7
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "val_006_b",
      "text": "Aku mencari cara lain yang masih aman, meski hasilnya tidak sebesar rencana awal.",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Investigative": 1.0
        },
        "work": {
          "researcher": 0.8,
          "planner": 0.8,
          "executor": 0.6
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
          "checkedRisk": 1,
          "clearNextStep": 1
        },
        "negative": {
          "performativeRush": -0.6,
          "blindLeap": -0.8,
          "looseProcess": -0.8
        },
        "evidence": {
          "truthSeeking": 1,
          "certaintySeeking": 1,
          "practicalRepair": 1,
          "systemFirst": 0.8
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
        "disc": {
          "C": 0.4,
          "D": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "val_007",
    "kind": "forcedChoice",
    "context": {
      "domain": "identity",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Ada kesempatan yang bisa membuatmu terlihat hebat, tapi kau harus berpura-pura setuju dengan hal yang tidak kau percaya.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "val_007_a",
        "text": "Aku menolak pelan, karena aku tahu wajahku sendiri akan terasa asing setelahnya.",
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
            "selfRespect": 1.2,
            "truthSeeking": 1
          },
          "positive": {
            "keptSelfRespect": 1,
            "cleanHands": 1,
            "keptMeaning": 0.6
          },
          "negative": {
            "selfErasure": -0.8,
            "smoothLie": -0.8,
            "hollowYes": -0.5
          },
          "values": {
            "autonomy": 1.1,
            "truth": 1.3,
            "meaning": 0.4
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
        "id": "val_007_b",
        "text": "Aku bertanya apakah ada bagian yang bisa kubantu tanpa harus menjual suaraku seluruhnya.",
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
            "repairSeeking": 1.5,
            "certaintySeeking": 0.3
          },
          "positive": {
            "softRepair": 1,
            "choseCarefully": 0.6,
            "softenedEdge": 1
          },
          "negative": {
            "coldCut": -0.8,
            "avoidantDelay": -0.5,
            "needlessSharpness": -0.8
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 1.3,
            "expressive": 0.3
          },
          "decision": {
            "reflective": 0.4,
            "riskAware": 0.3
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
      "id": "val_007_a",
      "text": "Aku menolak pelan, karena aku tahu wajahku sendiri akan terasa asing setelahnya.",
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
          "selfRespect": 1.2,
          "truthSeeking": 1
        },
        "positive": {
          "keptSelfRespect": 1,
          "cleanHands": 1,
          "keptMeaning": 0.6
        },
        "negative": {
          "selfErasure": -0.8,
          "smoothLie": -0.8,
          "hollowYes": -0.5
        },
        "values": {
          "autonomy": 1.1,
          "truth": 1.3,
          "meaning": 0.4
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
      "id": "val_007_b",
      "text": "Aku bertanya apakah ada bagian yang bisa kubantu tanpa harus menjual suaraku seluruhnya.",
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
          "repairSeeking": 1.5,
          "certaintySeeking": 0.3
        },
        "positive": {
          "softRepair": 1,
          "choseCarefully": 0.6,
          "softenedEdge": 1
        },
        "negative": {
          "coldCut": -0.8,
          "avoidantDelay": -0.5,
          "needlessSharpness": -0.8
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 1.3,
          "expressive": 0.3
        },
        "decision": {
          "reflective": 0.4,
          "riskAware": 0.3
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
      "values",
      "decision",
      "coreFear",
      "coreDesire",
      "moral",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "values",
      "decision",
      "coreFear",
      "coreDesire",
      "moral",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "val_008",
    "kind": "forcedChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Di kereta, seorang penumpang tua berdiri. Kursi kosong hanya satu, dan orang di sebelahmu pura-pura tidur.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "val_008_a",
        "text": "Aku berdiri dan memberi kursi tanpa membuat siapa pun jadi tontonan.",
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
            "peopleFirst": 2,
            "repairSeeking": 0.8,
            "justiceSeeking": 0.3
          },
          "positive": {
            "softRepair": 1,
            "warmPresence": 1,
            "keptDecency": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "unseenNeed": -0.7,
            "easyExcuse": -0.5
          },
          "relationship": {
            "repairSeeking": 1.3,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "enneagram": {
            "2": 1.0
          },
          "coreFear": {
            "unwanted": 0.7
          },
          "coreDesire": {
            "needed": 0.7
          },
          "work": {
            "helper": 0.5
          },
          "riasec": {
            "Social": 0.7
          },
          "moral": {
            "careBased": 0.4,
            "justiceBased": 0.3
          },
          "values": {
            "justice": 0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "val_008_b",
        "text": "Aku menyentuh pelan lengan orang di sebelahku dan berkata, “mungkin kita bisa gantian.”",
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
            "clearWords": 0.6,
            "socialBridge": 1
          },
          "negative": {
            "easySilence": -0.8,
            "muddyMessage": -0.5,
            "privateTunnel": -0.6
          },
          "evidence": {
            "justiceSeeking": 1,
            "directEngagement": 0.8,
            "statusAwareness": 0.7,
            "visibleRole": 0.7
          },
          "communication": {
            "direct": 0.5,
            "gentle": 0.6,
            "expressive": 0.5
          },
          "instinct": {
            "so": 1.5,
            "sp": -0.2
          },
          "relationship": {
            "belongingSeeking": 0.8
          },
          "disc": {
            "I": 0.5
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "val_008_a",
      "text": "Aku berdiri dan memberi kursi tanpa membuat siapa pun jadi tontonan.",
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
          "peopleFirst": 2,
          "repairSeeking": 0.8,
          "justiceSeeking": 0.3
        },
        "positive": {
          "softRepair": 1,
          "warmPresence": 1,
          "keptDecency": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "unseenNeed": -0.7,
          "easyExcuse": -0.5
        },
        "relationship": {
          "repairSeeking": 1.3,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "enneagram": {
          "2": 1.0
        },
        "coreFear": {
          "unwanted": 0.7
        },
        "coreDesire": {
          "needed": 0.7
        },
        "work": {
          "helper": 0.5
        },
        "riasec": {
          "Social": 0.7
        },
        "moral": {
          "careBased": 0.4,
          "justiceBased": 0.3
        },
        "values": {
          "justice": 0.3
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "val_008_b",
      "text": "Aku menyentuh pelan lengan orang di sebelahku dan berkata, “mungkin kita bisa gantian.”",
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
          "clearWords": 0.6,
          "socialBridge": 1
        },
        "negative": {
          "easySilence": -0.8,
          "muddyMessage": -0.5,
          "privateTunnel": -0.6
        },
        "evidence": {
          "justiceSeeking": 1,
          "directEngagement": 0.8,
          "statusAwareness": 0.7,
          "visibleRole": 0.7
        },
        "communication": {
          "direct": 0.5,
          "gentle": 0.6,
          "expressive": 0.5
        },
        "instinct": {
          "so": 1.5,
          "sp": -0.2
        },
        "relationship": {
          "belongingSeeking": 0.8
        },
        "disc": {
          "I": 0.5
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "moral",
      "values",
      "communication",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "values",
      "communication",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "val_009",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Orang yang kau sayang meminta kau memilihnya, tapi pilihan itu membuatmu meninggalkan hal yang penting bagi dirimu.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "val_009_a",
        "text": "Aku berkata, “aku mau bersamamu, tapi bukan dengan cara membuang bagian hidupku.”",
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
            "selfRespect": 1.2,
            "noveltySeeking": 1
          },
          "positive": {
            "keptSelfRespect": 1,
            "keptMeaning": 0.6,
            "freshAir": 1
          },
          "negative": {
            "selfErasure": -0.8,
            "hollowYes": -0.5,
            "unfinishedWeight": -0.7
          },
          "values": {
            "autonomy": 1.1,
            "truth": 0.5,
            "meaning": 0.4,
            "freedom": 0.9,
            "beauty": 0.2
          },
          "conflict": {
            "boundaryCutoff": 0.5
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
          "learning": {
            "exploratory": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "val_009_b",
        "text": "Aku mencoba mencari bentuk baru agar hubungan itu tidak merasa ditinggalkan dan hidupku tidak ikut hilang.",
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
            "repairSeeking": 1.5,
            "certaintySeeking": 0.3
          },
          "positive": {
            "softRepair": 1,
            "softenedEdge": 1,
            "choseCarefully": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "needlessSharpness": -0.8,
            "avoidantDelay": -0.5
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 1.3,
            "expressive": 0.3
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
          "decision": {
            "reflective": 0.4,
            "riskAware": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "val_009_a",
      "text": "Aku berkata, “aku mau bersamamu, tapi bukan dengan cara membuang bagian hidupku.”",
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
          "selfRespect": 1.2,
          "noveltySeeking": 1
        },
        "positive": {
          "keptSelfRespect": 1,
          "keptMeaning": 0.6,
          "freshAir": 1
        },
        "negative": {
          "selfErasure": -0.8,
          "hollowYes": -0.5,
          "unfinishedWeight": -0.7
        },
        "values": {
          "autonomy": 1.1,
          "truth": 0.5,
          "meaning": 0.4,
          "freedom": 0.9,
          "beauty": 0.2
        },
        "conflict": {
          "boundaryCutoff": 0.5
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
        "learning": {
          "exploratory": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "val_009_b",
      "text": "Aku mencoba mencari bentuk baru agar hubungan itu tidak merasa ditinggalkan dan hidupku tidak ikut hilang.",
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
          "repairSeeking": 1.5,
          "certaintySeeking": 0.3
        },
        "positive": {
          "softRepair": 1,
          "softenedEdge": 1,
          "choseCarefully": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "needlessSharpness": -0.8,
          "avoidantDelay": -0.5
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 1.3,
          "expressive": 0.3
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
        "decision": {
          "reflective": 0.4,
          "riskAware": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "values",
      "relationship",
      "decision",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "values",
      "relationship",
      "decision",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  }
];
