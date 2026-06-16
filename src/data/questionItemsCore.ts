import type { QuestionItem } from "../types";

export const CORE_QUESTIONS: QuestionItem[] = [
  {
    "id": "core_001",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Malam di dapur rumah lama. Sendok masih basah di rak, dan seorang kerabat berkata pelan, “jangan mulai lagi, nanti ribut.”",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_001_a",
        "text": "Aku menahan jawaban sebentar, melihat siapa yang langsung menunduk dan siapa yang pura-pura sibuk dengan piring.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.6,
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "I": 0.6,
            "N": 1,
            "J": 0.7,
            "F": 1,
            "E": 0.5
          },
          "stackRole": {
            "dominant": 0.9,
            "opposing": 0.4,
            "auxiliary": 0.7
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.8,
            "peopleFirst": 1,
            "repairSeeking": 0.8
          },
          "positive": {
            "patientReading": 1,
            "softRepair": 1
          },
          "negative": {
            "rushedMove": -0.8,
            "coldCut": -0.8
          },
          "socionics": {
            "intuitiveEthical": 0.5
          },
          "quadra": {
            "Beta": 0.25,
            "Delta": 0.2
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_001_b",
        "text": "Aku mengambil gelas dari meja, membereskan yang bisa dibereskan, lalu berkata, “makan dulu, habis itu baru bicara.”",
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
            "practicalRepair": 1,
            "systemFirst": 0.8
          },
          "positive": {
            "presentMove": 1,
            "clearNextStep": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "looseProcess": -0.8
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 0.9,
            "C": 0.4
          },
          "work": {
            "planner": 0.8,
            "executor": 0.6
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_001_a",
      "text": "Aku menahan jawaban sebentar, melihat siapa yang langsung menunduk dan siapa yang pura-pura sibuk dengan piring.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ni": 2,
          "Se": -0.6,
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "I": 0.6,
          "N": 1,
          "J": 0.7,
          "F": 1,
          "E": 0.5
        },
        "stackRole": {
          "dominant": 0.9,
          "opposing": 0.4,
          "auxiliary": 0.7
        },
        "evidence": {
          "observeFirst": 1,
          "indirectEngagement": 0.8,
          "peopleFirst": 1,
          "repairSeeking": 0.8
        },
        "positive": {
          "patientReading": 1,
          "softRepair": 1
        },
        "negative": {
          "rushedMove": -0.8,
          "coldCut": -0.8
        },
        "socionics": {
          "intuitiveEthical": 0.5
        },
        "quadra": {
          "Beta": 0.25,
          "Delta": 0.2
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_001_b",
      "text": "Aku mengambil gelas dari meja, membereskan yang bisa dibereskan, lalu berkata, “makan dulu, habis itu baru bicara.”",
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
          "practicalRepair": 1,
          "systemFirst": 0.8
        },
        "positive": {
          "presentMove": 1,
          "clearNextStep": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "looseProcess": -0.8
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 0.9,
          "C": 0.4
        },
        "work": {
          "planner": 0.8,
          "executor": 0.6
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_002",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di meja kerja, file belum selesai. Notifikasi grup berbunyi tiga kali, dan seseorang menulis, “yang penting kumpul malam ini.”",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_002_a",
        "text": "Aku membuka dokumen, membagi bagian yang kosong, lalu menulis, “aku ambil ini, yang lain pilih sekarang.”",
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
            "actionFirst": 0.8
          },
          "positive": {
            "clearNextStep": 1,
            "tookResponsibility": 1
          },
          "negative": {
            "looseProcess": -0.8,
            "waitingPermission": -0.7
          },
          "work": {
            "planner": 0.8,
            "executor": 0.6,
            "leader": 0.7,
            "challenger": 0.4
          },
          "disc": {
            "C": 0.4,
            "D": 1.1,
            "I": 0.3
          },
          "riasec": {
            "Enterprising": 0.8
          },
          "decision": {
            "fastAction": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_002_b",
        "text": "Aku membaca ulang chat dari awal, mencari bagian yang sebenarnya membuat semua orang tersendat sebelum ikut membalas.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ti": 2,
            "Fe": -0.5,
            "Ni": 2,
            "Se": -0.6
          },
          "mbtiAxis": {
            "T": 1,
            "I": 1.1,
            "N": 1,
            "J": 0.4
          },
          "stackRole": {
            "dominant": 1.2,
            "critical": 0.3,
            "opposing": 0.4
          },
          "evidence": {
            "internalCheck": 1,
            "truthSeeking": 0.8,
            "observeFirst": 1,
            "indirectEngagement": 0.8
          },
          "positive": {
            "cleanReason": 1,
            "patientReading": 1
          },
          "negative": {
            "socialGuessing": -0.7,
            "rushedMove": -0.8
          },
          "decision": {
            "evidenceBased": 0.9,
            "reflective": 0.5
          },
          "learning": {
            "analytical": 0.7,
            "solitary": 0.4
          },
          "socionics": {
            "intuitiveEthical": 0.5
          },
          "quadra": {
            "Beta": 0.25,
            "Delta": 0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_002_a",
      "text": "Aku membuka dokumen, membagi bagian yang kosong, lalu menulis, “aku ambil ini, yang lain pilih sekarang.”",
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
          "actionFirst": 0.8
        },
        "positive": {
          "clearNextStep": 1,
          "tookResponsibility": 1
        },
        "negative": {
          "looseProcess": -0.8,
          "waitingPermission": -0.7
        },
        "work": {
          "planner": 0.8,
          "executor": 0.6,
          "leader": 0.7,
          "challenger": 0.4
        },
        "disc": {
          "C": 0.4,
          "D": 1.1,
          "I": 0.3
        },
        "riasec": {
          "Enterprising": 0.8
        },
        "decision": {
          "fastAction": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_002_b",
      "text": "Aku membaca ulang chat dari awal, mencari bagian yang sebenarnya membuat semua orang tersendat sebelum ikut membalas.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ti": 2,
          "Fe": -0.5,
          "Ni": 2,
          "Se": -0.6
        },
        "mbtiAxis": {
          "T": 1,
          "I": 1.1,
          "N": 1,
          "J": 0.4
        },
        "stackRole": {
          "dominant": 1.2,
          "critical": 0.3,
          "opposing": 0.4
        },
        "evidence": {
          "internalCheck": 1,
          "truthSeeking": 0.8,
          "observeFirst": 1,
          "indirectEngagement": 0.8
        },
        "positive": {
          "cleanReason": 1,
          "patientReading": 1
        },
        "negative": {
          "socialGuessing": -0.7,
          "rushedMove": -0.8
        },
        "decision": {
          "evidenceBased": 0.9,
          "reflective": 0.5
        },
        "learning": {
          "analytical": 0.7,
          "solitary": 0.4
        },
        "socionics": {
          "intuitiveEthical": 0.5
        },
        "quadra": {
          "Beta": 0.25,
          "Delta": 0.2
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "work",
      "decision",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "work",
      "decision",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_003",
    "kind": "forcedChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Di minimarket kecil, antrean makin panjang. Kasir tampak panik karena mesin pembayaran macet, sementara orang di belakangmu mulai mengeluh.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_003_a",
        "text": "Aku mundur sedikit, memberi ruang, lalu berkata ke orang belakang, “sebentar, biar dia selesaikan dulu.”",
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
            "repairSeeking": 1.5
          },
          "positive": {
            "softRepair": 1,
            "softenedEdge": 1
          },
          "negative": {
            "coldCut": -0.8,
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
      {
        "id": "core_003_b",
        "text": "Aku menunjuk rak kasir dan berkata, “coba yang tunai dipisah dulu, yang lain tunggu di sisi ini.”",
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
            "practicalRepair": 1,
            "systemFirst": 0.8
          },
          "positive": {
            "presentMove": 1,
            "clearNextStep": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "looseProcess": -0.8
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 0.9,
            "C": 0.4
          },
          "work": {
            "planner": 0.8,
            "executor": 0.6
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_003_a",
      "text": "Aku mundur sedikit, memberi ruang, lalu berkata ke orang belakang, “sebentar, biar dia selesaikan dulu.”",
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
          "repairSeeking": 1.5
        },
        "positive": {
          "softRepair": 1,
          "softenedEdge": 1
        },
        "negative": {
          "coldCut": -0.8,
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
    "right": {
      "id": "core_003_b",
      "text": "Aku menunjuk rak kasir dan berkata, “coba yang tunai dipisah dulu, yang lain tunggu di sisi ini.”",
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
          "practicalRepair": 1,
          "systemFirst": 0.8
        },
        "positive": {
          "presentMove": 1,
          "clearNextStep": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "looseProcess": -0.8
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 0.9,
          "C": 0.4
        },
        "work": {
          "planner": 0.8,
          "executor": 0.6
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "communication",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "communication",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_004",
    "kind": "forcedChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di kelas, seorang teman menjelaskan alasan yang terdengar rapi, tapi ada satu bagian yang terasa melompat. Ia menatapmu dan bertanya, “menurutmu aman kan?”",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_004_a",
        "text": "Aku bertanya pelan, “bagian setelah itu siapa yang pegang?” sebelum memberi jawaban.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ti": 2,
            "Fe": -0.5,
            "Ni": 2,
            "Se": -0.6
          },
          "mbtiAxis": {
            "T": 1,
            "I": 1.1,
            "N": 1,
            "J": 0.4
          },
          "stackRole": {
            "dominant": 1.2,
            "critical": 0.3,
            "opposing": 0.4
          },
          "evidence": {
            "internalCheck": 1,
            "truthSeeking": 0.8,
            "observeFirst": 1,
            "indirectEngagement": 0.8
          },
          "positive": {
            "cleanReason": 1,
            "patientReading": 1
          },
          "negative": {
            "socialGuessing": -0.7,
            "rushedMove": -0.8
          },
          "decision": {
            "evidenceBased": 0.9,
            "reflective": 0.5
          },
          "learning": {
            "analytical": 0.7,
            "solitary": 0.4
          },
          "socionics": {
            "intuitiveEthical": 0.5
          },
          "quadra": {
            "Beta": 0.25,
            "Delta": 0.2
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_004_b",
        "text": "Aku berkata, “kalau mau aman, tulis ulang urutannya dulu. Biar semua tahu bagian masing-masing.”",
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
            "orderSeeking": 1
          },
          "positive": {
            "clearNextStep": 1,
            "madeItNeat": 1
          },
          "negative": {
            "looseProcess": -0.8,
            "messyLeap": -0.7
          },
          "work": {
            "planner": 1.2,
            "executor": 0.6,
            "refiner": 0.8
          },
          "disc": {
            "C": 1.1,
            "D": 0.4
          },
          "riasec": {
            "Conventional": 0.9
          },
          "learning": {
            "structured": 0.6,
            "repetitionBased": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_004_a",
      "text": "Aku bertanya pelan, “bagian setelah itu siapa yang pegang?” sebelum memberi jawaban.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ti": 2,
          "Fe": -0.5,
          "Ni": 2,
          "Se": -0.6
        },
        "mbtiAxis": {
          "T": 1,
          "I": 1.1,
          "N": 1,
          "J": 0.4
        },
        "stackRole": {
          "dominant": 1.2,
          "critical": 0.3,
          "opposing": 0.4
        },
        "evidence": {
          "internalCheck": 1,
          "truthSeeking": 0.8,
          "observeFirst": 1,
          "indirectEngagement": 0.8
        },
        "positive": {
          "cleanReason": 1,
          "patientReading": 1
        },
        "negative": {
          "socialGuessing": -0.7,
          "rushedMove": -0.8
        },
        "decision": {
          "evidenceBased": 0.9,
          "reflective": 0.5
        },
        "learning": {
          "analytical": 0.7,
          "solitary": 0.4
        },
        "socionics": {
          "intuitiveEthical": 0.5
        },
        "quadra": {
          "Beta": 0.25,
          "Delta": 0.2
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_004_b",
      "text": "Aku berkata, “kalau mau aman, tulis ulang urutannya dulu. Biar semua tahu bagian masing-masing.”",
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
          "orderSeeking": 1
        },
        "positive": {
          "clearNextStep": 1,
          "madeItNeat": 1
        },
        "negative": {
          "looseProcess": -0.8,
          "messyLeap": -0.7
        },
        "work": {
          "planner": 1.2,
          "executor": 0.6,
          "refiner": 0.8
        },
        "disc": {
          "C": 1.1,
          "D": 0.4
        },
        "riasec": {
          "Conventional": 0.9
        },
        "learning": {
          "structured": 0.6,
          "repetitionBased": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "decision",
      "learning",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "decision",
      "learning",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_005",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di kafe yang terlalu ramai, temanmu tertawa seperti biasa. Tapi tangannya terus memutar sedotan setelah nama seseorang disebut.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_005_a",
        "text": "Aku tidak memotong ceritanya. Aku menunggu sampai ia sendiri melihatku, baru bertanya, “kau baik-baik saja?”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.6,
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "I": 0.6,
            "N": 1,
            "J": 0.7,
            "F": 1,
            "E": 0.5
          },
          "stackRole": {
            "dominant": 0.9,
            "opposing": 0.4,
            "auxiliary": 0.7
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.8,
            "peopleFirst": 1,
            "repairSeeking": 0.8
          },
          "positive": {
            "patientReading": 1,
            "softRepair": 1
          },
          "negative": {
            "rushedMove": -0.8,
            "coldCut": -0.8
          },
          "socionics": {
            "intuitiveEthical": 0.5
          },
          "quadra": {
            "Beta": 0.25,
            "Delta": 0.2
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_005_b",
        "text": "Aku mengganti tempat duduk ke sisi yang lebih sepi dan berkata, “kalau mau keluar sebentar, aku ikut.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.6,
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "E": 1.1,
            "S": 1,
            "P": 0.5,
            "F": 1,
            "J": 0.3
          },
          "stackRole": {
            "dominant": 0.8,
            "inferior": 0.3,
            "auxiliary": 0.7
          },
          "evidence": {
            "actionFirst": 1,
            "directEngagement": 0.9,
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "positive": {
            "presentMove": 1,
            "softRepair": 1,
            "keptSafe": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "coldCut": -0.8,
            "ignoredBody": -0.9
          },
          "stress": {
            "fight": 0.5,
            "control": 0.6
          },
          "disc": {
            "D": 0.5
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
            "functionalSpace": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_005_a",
      "text": "Aku tidak memotong ceritanya. Aku menunggu sampai ia sendiri melihatku, baru bertanya, “kau baik-baik saja?”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ni": 2,
          "Se": -0.6,
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "I": 0.6,
          "N": 1,
          "J": 0.7,
          "F": 1,
          "E": 0.5
        },
        "stackRole": {
          "dominant": 0.9,
          "opposing": 0.4,
          "auxiliary": 0.7
        },
        "evidence": {
          "observeFirst": 1,
          "indirectEngagement": 0.8,
          "peopleFirst": 1,
          "repairSeeking": 0.8
        },
        "positive": {
          "patientReading": 1,
          "softRepair": 1
        },
        "negative": {
          "rushedMove": -0.8,
          "coldCut": -0.8
        },
        "socionics": {
          "intuitiveEthical": 0.5
        },
        "quadra": {
          "Beta": 0.25,
          "Delta": 0.2
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_005_b",
      "text": "Aku mengganti tempat duduk ke sisi yang lebih sepi dan berkata, “kalau mau keluar sebentar, aku ikut.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Se": 2,
          "Ni": -0.6,
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "E": 1.1,
          "S": 1,
          "P": 0.5,
          "F": 1,
          "J": 0.3
        },
        "stackRole": {
          "dominant": 0.8,
          "inferior": 0.3,
          "auxiliary": 0.7
        },
        "evidence": {
          "actionFirst": 1,
          "directEngagement": 0.9,
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "positive": {
          "presentMove": 1,
          "softRepair": 1,
          "keptSafe": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "coldCut": -0.8,
          "ignoredBody": -0.9
        },
        "stress": {
          "fight": 0.5,
          "control": 0.6
        },
        "disc": {
          "D": 0.5
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
          "functionalSpace": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "cognitive",
      "relationship",
      "communication",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "relationship",
      "communication",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_006",
    "kind": "forcedChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "low"
    },
    "prompt": "Pagi hari, hujan tipis menempel di kaca. Ada daftar tugas di meja, tapi ada satu ide kecil yang tiba-tiba membuatmu ingin membelokkan hari.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_006_a",
        "text": "Aku mencatat ide itu di sudut kertas, lalu tetap menyelesaikan satu tugas yang paling dekat dulu.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.6,
            "Te": 2,
            "Fi": -0.5
          },
          "mbtiAxis": {
            "S": 1,
            "I": 0.4,
            "J": 1.6,
            "T": 0.8
          },
          "stackRole": {
            "dominant": 1.1,
            "tertiary": 0.3,
            "auxiliary": 0.6
          },
          "evidence": {
            "memoryReferencing": 1,
            "carefulComparison": 0.8,
            "orderSeeking": 0.8,
            "practicalRepair": 1,
            "systemFirst": 0.8
          },
          "positive": {
            "steadyRecall": 1,
            "keptGround": 1,
            "clearNextStep": 1
          },
          "negative": {
            "untestedLeap": -0.7,
            "chaoticDrift": -0.7,
            "looseProcess": -0.8
          },
          "environment": {
            "familiarPlace": 1.1,
            "organizedSpace": 0.9
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
          "work": {
            "planner": 0.8,
            "executor": 0.6
          },
          "disc": {
            "C": 0.4,
            "D": 0.4
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_006_b",
        "text": "Aku membuka halaman kosong baru dan membiarkan ide itu berjalan sebentar sebelum hari terasa terlalu sempit.",
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
            "symbolicMeaning": 0.8
          },
          "positive": {
            "newDoor": 1,
            "madeMeaning": 1,
            "roomForNew": 1
          },
          "negative": {
            "stuckRoutine": -0.7,
            "dryProcedure": -0.6,
            "closedDoor": -0.7
          },
          "learning": {
            "exploratory": 0.7,
            "visual": 0.5,
            "projectBased": 0.4
          },
          "temperament": {
            "NF": 0.2,
            "NT": 0.2
          },
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
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_006_a",
      "text": "Aku mencatat ide itu di sudut kertas, lalu tetap menyelesaikan satu tugas yang paling dekat dulu.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Si": 2,
          "Ne": -0.6,
          "Te": 2,
          "Fi": -0.5
        },
        "mbtiAxis": {
          "S": 1,
          "I": 0.4,
          "J": 1.6,
          "T": 0.8
        },
        "stackRole": {
          "dominant": 1.1,
          "tertiary": 0.3,
          "auxiliary": 0.6
        },
        "evidence": {
          "memoryReferencing": 1,
          "carefulComparison": 0.8,
          "orderSeeking": 0.8,
          "practicalRepair": 1,
          "systemFirst": 0.8
        },
        "positive": {
          "steadyRecall": 1,
          "keptGround": 1,
          "clearNextStep": 1
        },
        "negative": {
          "untestedLeap": -0.7,
          "chaoticDrift": -0.7,
          "looseProcess": -0.8
        },
        "environment": {
          "familiarPlace": 1.1,
          "organizedSpace": 0.9
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
        "work": {
          "planner": 0.8,
          "executor": 0.6
        },
        "disc": {
          "C": 0.4,
          "D": 0.4
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_006_b",
      "text": "Aku membuka halaman kosong baru dan membiarkan ide itu berjalan sebentar sebelum hari terasa terlalu sempit.",
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
          "symbolicMeaning": 0.8
        },
        "positive": {
          "newDoor": 1,
          "madeMeaning": 1,
          "roomForNew": 1
        },
        "negative": {
          "stuckRoutine": -0.7,
          "dryProcedure": -0.6,
          "closedDoor": -0.7
        },
        "learning": {
          "exploratory": 0.7,
          "visual": 0.5,
          "projectBased": 0.4
        },
        "temperament": {
          "NF": 0.2,
          "NT": 0.2
        },
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
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "bigFive",
      "hexaco",
      "learning",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "bigFive",
      "hexaco",
      "learning",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_007",
    "kind": "forcedChoice",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di kamar, dompet terbuka di atas kasur. Uang tinggal sedikit, dan pesan tagihan masuk saat lampu kamar berkedip.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_007_a",
        "text": "Aku menghitung ulang kebutuhan yang paling dekat, menunda yang bisa menunggu, lalu menyimpan bukti catatannya.",
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
        "id": "core_007_b",
        "text": "Aku mengirim pesan ke satu orang yang bisa dipercaya dan bertanya jujur apakah ada jalan sementara.",
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
            "statusAwareness": 0.7,
            "visibleRole": 0.7
          },
          "positive": {
            "softRepair": 1,
            "checkedRisk": 1,
            "socialBridge": 1
          },
          "negative": {
            "coldCut": -0.8,
            "blindLeap": -0.8,
            "privateTunnel": -0.6
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5,
            "reassuranceSeeking": 0.6,
            "belongingSeeking": 0.8
          },
          "communication": {
            "gentle": 1.0,
            "expressive": 0.8
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
          "instinct": {
            "so": 1.5,
            "sp": -0.2
          },
          "disc": {
            "I": 0.5
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_007_a",
      "text": "Aku menghitung ulang kebutuhan yang paling dekat, menunda yang bisa menunggu, lalu menyimpan bukti catatannya.",
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
      "id": "core_007_b",
      "text": "Aku mengirim pesan ke satu orang yang bisa dipercaya dan bertanya jujur apakah ada jalan sementara.",
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
          "statusAwareness": 0.7,
          "visibleRole": 0.7
        },
        "positive": {
          "softRepair": 1,
          "checkedRisk": 1,
          "socialBridge": 1
        },
        "negative": {
          "coldCut": -0.8,
          "blindLeap": -0.8,
          "privateTunnel": -0.6
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5,
          "reassuranceSeeking": 0.6,
          "belongingSeeking": 0.8
        },
        "communication": {
          "gentle": 1.0,
          "expressive": 0.8
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
        "instinct": {
          "so": 1.5,
          "sp": -0.2
        },
        "disc": {
          "I": 0.5
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "instinct",
      "decision",
      "values",
      "stress",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "instinct",
      "decision",
      "values",
      "stress",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_008",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Malam itu layar HP menyala. Orang yang kau suka mengirim, “aku lagi capek, nanti aja ya,” setelah beberapa hari terasa menjauh.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_008_a",
        "text": "Aku tidak langsung mengejar. Aku meletakkan HP terbalik dan menunggu apakah besok ia datang dengan cara yang lebih jelas.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.6,
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "I": 1.1,
            "N": 1,
            "J": 0.4,
            "F": 1
          },
          "stackRole": {
            "dominant": 1.1,
            "opposing": 0.8
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.8,
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "certaintySeeking": 1
          },
          "positive": {
            "patientReading": 1,
            "keptSelfRespect": 1,
            "checkedRisk": 1
          },
          "negative": {
            "rushedMove": -0.8,
            "selfErasure": -0.8,
            "blindLeap": -0.8
          },
          "socionics": {
            "intuitiveEthical": 0.5
          },
          "quadra": {
            "Beta": 0.25,
            "Delta": 0.2
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
          "relationship": {
            "reassuranceSeeking": 0.6
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_008_b",
        "text": "Aku membalas singkat, “oke, istirahat dulu. Besok kalau mau bicara, aku ada,” lalu berhenti mengetik.",
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
            "peaceSeeking": 1
          },
          "positive": {
            "softRepair": 1,
            "softenedEdge": 1,
            "keptRoomGentle": 0.8
          },
          "negative": {
            "coldCut": -0.8,
            "needlessSharpness": -0.8,
            "unspokenResentment": -0.7
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
            "negotiation": 0.5,
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
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
          "stress": {
            "freeze": 0.5,
            "fawn": 0.3
          },
          "defense": {
            "withdrawal": 0.5
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_008_a",
      "text": "Aku tidak langsung mengejar. Aku meletakkan HP terbalik dan menunggu apakah besok ia datang dengan cara yang lebih jelas.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ni": 2,
          "Se": -0.6,
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "I": 1.1,
          "N": 1,
          "J": 0.4,
          "F": 1
        },
        "stackRole": {
          "dominant": 1.1,
          "opposing": 0.8
        },
        "evidence": {
          "observeFirst": 1,
          "indirectEngagement": 0.8,
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "certaintySeeking": 1
        },
        "positive": {
          "patientReading": 1,
          "keptSelfRespect": 1,
          "checkedRisk": 1
        },
        "negative": {
          "rushedMove": -0.8,
          "selfErasure": -0.8,
          "blindLeap": -0.8
        },
        "socionics": {
          "intuitiveEthical": 0.5
        },
        "quadra": {
          "Beta": 0.25,
          "Delta": 0.2
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
        "relationship": {
          "reassuranceSeeking": 0.6
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_008_b",
      "text": "Aku membalas singkat, “oke, istirahat dulu. Besok kalau mau bicara, aku ada,” lalu berhenti mengetik.",
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
          "peaceSeeking": 1
        },
        "positive": {
          "softRepair": 1,
          "softenedEdge": 1,
          "keptRoomGentle": 0.8
        },
        "negative": {
          "coldCut": -0.8,
          "needlessSharpness": -0.8,
          "unspokenResentment": -0.7
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
          "negotiation": 0.5,
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
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
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "communication",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_009",
    "kind": "forcedChoice",
    "context": {
      "domain": "identity",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Di depan cermin kamar, baju yang kau pakai terasa seperti milik orang lain. Di luar, seseorang memanggil agar kau cepat keluar.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_009_a",
        "text": "Aku mengganti satu hal kecil yang membuat tubuhku lebih tenang, walau orang lain mungkin tidak sadar.",
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
            "emotionalExpression": 0.8
          },
          "positive": {
            "keptSelfRespect": 1,
            "keptSafe": 1,
            "honestTenderness": 0.8
          },
          "negative": {
            "selfErasure": -0.8,
            "ignoredBody": -0.9,
            "floodedReaction": -0.5
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
            "V_flexible": 0.3,
            "E_insecure": 0.5,
            "E_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "stress": {
            "control": 0.6,
            "collapse": 0.4,
            "freeze": 0.3
          },
          "bigFive": {
            "Neuroticism": 0.8
          },
          "hexaco": {
            "Emotionality": 0.9
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_009_b",
        "text": "Aku keluar dengan baju itu, tapi menyimpan keputusan untuk pulang lebih cepat kalau malamnya terlalu berat.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "9": 1.2,
            "6": 1.1
          },
          "coreFear": {
            "conflict": 0.7,
            "unsafe": 0.8
          },
          "coreDesire": {
            "peace": 0.7,
            "certainty": 0.7
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
          "positive": {
            "keptRoomGentle": 0.8,
            "keptSafe": 1,
            "checkedRisk": 1
          },
          "negative": {
            "unspokenResentment": -0.7,
            "ignoredBody": -0.9,
            "blindLeap": -0.8
          },
          "evidence": {
            "peaceSeeking": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "certaintySeeking": 1
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
          "decision": {
            "riskAware": 0.7,
            "consultative": 0.4
          },
          "relationship": {
            "reassuranceSeeking": 0.6
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_009_a",
      "text": "Aku mengganti satu hal kecil yang membuat tubuhku lebih tenang, walau orang lain mungkin tidak sadar.",
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
          "emotionalExpression": 0.8
        },
        "positive": {
          "keptSelfRespect": 1,
          "keptSafe": 1,
          "honestTenderness": 0.8
        },
        "negative": {
          "selfErasure": -0.8,
          "ignoredBody": -0.9,
          "floodedReaction": -0.5
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
          "V_flexible": 0.3,
          "E_insecure": 0.5,
          "E_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "stress": {
          "control": 0.6,
          "collapse": 0.4,
          "freeze": 0.3
        },
        "bigFive": {
          "Neuroticism": 0.8
        },
        "hexaco": {
          "Emotionality": 0.9
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_009_b",
      "text": "Aku keluar dengan baju itu, tapi menyimpan keputusan untuk pulang lebih cepat kalau malamnya terlalu berat.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "9": 1.2,
          "6": 1.1
        },
        "coreFear": {
          "conflict": 0.7,
          "unsafe": 0.8
        },
        "coreDesire": {
          "peace": 0.7,
          "certainty": 0.7
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
        "positive": {
          "keptRoomGentle": 0.8,
          "keptSafe": 1,
          "checkedRisk": 1
        },
        "negative": {
          "unspokenResentment": -0.7,
          "ignoredBody": -0.9,
          "blindLeap": -0.8
        },
        "evidence": {
          "peaceSeeking": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "certaintySeeking": 1
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
    "reliability": 0.84,
    "targetSystems": [
      "values",
      "environment",
      "stress",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "values",
      "environment",
      "stress",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_010",
    "kind": "forcedChoice",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Di ruang kelas, jawaban seorang teman dicuri orang lain. Semua orang melihat, tapi guru sudah mulai menutup buku.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_010_a",
        "text": "Aku mengangkat tangan sebelum keberanian hilang dan berkata, “sepertinya bagian itu tadi bukan dari dia.”",
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
            "cleanHands": 1
          },
          "negative": {
            "easySilence": -0.8,
            "smoothLie": -0.8
          },
          "evidence": {
            "justiceSeeking": 1,
            "directEngagement": 0.4,
            "truthSeeking": 1
          },
          "hexaco": {
            "HonestyHumility": 1.0
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_010_b",
        "text": "Aku mendekati teman itu setelah kelas dan bertanya apakah ia mau aku ikut bicara bersama.",
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
            "justiceSeeking": 1,
            "directEngagement": 0.4
          },
          "positive": {
            "softRepair": 1,
            "softenedEdge": 1,
            "stoodForFairness": 1
          },
          "negative": {
            "coldCut": -0.8,
            "needlessSharpness": -0.8,
            "easySilence": -0.8
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
            "negotiation": 0.5,
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
          "values": {
            "justice": 0.8,
            "truth": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_010_a",
      "text": "Aku mengangkat tangan sebelum keberanian hilang dan berkata, “sepertinya bagian itu tadi bukan dari dia.”",
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
          "cleanHands": 1
        },
        "negative": {
          "easySilence": -0.8,
          "smoothLie": -0.8
        },
        "evidence": {
          "justiceSeeking": 1,
          "directEngagement": 0.4,
          "truthSeeking": 1
        },
        "hexaco": {
          "HonestyHumility": 1.0
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_010_b",
      "text": "Aku mendekati teman itu setelah kelas dan bertanya apakah ia mau aku ikut bicara bersama.",
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
          "justiceSeeking": 1,
          "directEngagement": 0.4
        },
        "positive": {
          "softRepair": 1,
          "softenedEdge": 1,
          "stoodForFairness": 1
        },
        "negative": {
          "coldCut": -0.8,
          "needlessSharpness": -0.8,
          "easySilence": -0.8
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
          "negotiation": 0.5,
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
        "values": {
          "justice": 0.8,
          "truth": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "moral",
      "decision",
      "conflict",
      "communication",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "conflict",
      "communication",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_011",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di ruang rapat, seseorang terus bicara besar, tapi angka di layar tidak cocok dengan cerita yang ia bawa.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_011_a",
        "text": "Aku membuka catatan dan menunjuk angka itu, “bagian ini beda. Kita cek sebelum lanjut.”",
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
            "truthSeeking": 2.8
          },
          "positive": {
            "cleanReason": 1,
            "checkedBeforeMoving": 1,
            "cleanHands": 1
          },
          "negative": {
            "socialGuessing": -0.7,
            "performativeRush": -0.6,
            "smoothLie": -0.8
          },
          "decision": {
            "evidenceBased": 0.9,
            "reflective": 0.5
          },
          "learning": {
            "analytical": 1.3,
            "solitary": 0.4,
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
          "reliability": 0.84
        }
      },
      {
        "id": "core_011_b",
        "text": "Aku menunggu ia selesai, lalu bertanya satu pertanyaan pendek yang membuat ruangan ikut melihat layar.",
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
            "truthSeeking": 0.8,
            "directEngagement": 0.4
          },
          "positive": {
            "patientReading": 1,
            "cleanReason": 1,
            "clearWords": 0.6
          },
          "negative": {
            "rushedMove": -0.8,
            "socialGuessing": -0.7,
            "muddyMessage": -0.5
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
          "communication": {
            "direct": 0.5,
            "gentle": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_011_a",
      "text": "Aku membuka catatan dan menunjuk angka itu, “bagian ini beda. Kita cek sebelum lanjut.”",
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
          "truthSeeking": 2.8
        },
        "positive": {
          "cleanReason": 1,
          "checkedBeforeMoving": 1,
          "cleanHands": 1
        },
        "negative": {
          "socialGuessing": -0.7,
          "performativeRush": -0.6,
          "smoothLie": -0.8
        },
        "decision": {
          "evidenceBased": 0.9,
          "reflective": 0.5
        },
        "learning": {
          "analytical": 1.3,
          "solitary": 0.4,
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
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_011_b",
      "text": "Aku menunggu ia selesai, lalu bertanya satu pertanyaan pendek yang membuat ruangan ikut melihat layar.",
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
          "truthSeeking": 0.8,
          "directEngagement": 0.4
        },
        "positive": {
          "patientReading": 1,
          "cleanReason": 1,
          "clearWords": 0.6
        },
        "negative": {
          "rushedMove": -0.8,
          "socialGuessing": -0.7,
          "muddyMessage": -0.5
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
        "communication": {
          "direct": 0.5,
          "gentle": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "cognitive",
      "decision",
      "work",
      "hexaco",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "decision",
      "work",
      "hexaco",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_012",
    "kind": "forcedChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Di halte, bus yang ditunggu batal datang. Hujan mulai miring, baterai HP tinggal sedikit, dan orang-orang mulai berjalan ke arah berbeda.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_012_a",
        "text": "Aku melihat sekitar, memilih jalan paling bisa ditempuh sekarang, lalu bergerak sebelum hujan makin rapat.",
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
            "practicalRepair": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "positive": {
            "presentMove": 1,
            "handsOnRepair": 1,
            "keptSafe": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "emptyTalk": -0.7,
            "ignoredBody": -0.9
          },
          "stress": {
            "fight": 0.5,
            "control": 0.6
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
        "id": "core_012_b",
        "text": "Aku membuka peta sebentar, membandingkan dua rute, lalu memilih yang risikonya paling kecil meski lebih lama.",
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
            "reassuranceSeeking": 0.6
          },
          "positive": {
            "checkedRisk": 1,
            "checkedBeforeMoving": 1,
            "keptSafe": 1
          },
          "negative": {
            "blindLeap": -0.8,
            "performativeRush": -0.6,
            "ignoredBody": -0.9
          },
          "evidence": {
            "certaintySeeking": 1,
            "truthSeeking": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
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
            "L_confident": 0.6,
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
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
      }
    ],
    "left": {
      "id": "core_012_a",
      "text": "Aku melihat sekitar, memilih jalan paling bisa ditempuh sekarang, lalu bergerak sebelum hujan makin rapat.",
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
          "practicalRepair": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "positive": {
          "presentMove": 1,
          "handsOnRepair": 1,
          "keptSafe": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "emptyTalk": -0.7,
          "ignoredBody": -0.9
        },
        "stress": {
          "fight": 0.5,
          "control": 0.6
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
      "id": "core_012_b",
      "text": "Aku membuka peta sebentar, membandingkan dua rute, lalu memilih yang risikonya paling kecil meski lebih lama.",
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
          "reassuranceSeeking": 0.6
        },
        "positive": {
          "checkedRisk": 1,
          "checkedBeforeMoving": 1,
          "keptSafe": 1
        },
        "negative": {
          "blindLeap": -0.8,
          "performativeRush": -0.6,
          "ignoredBody": -0.9
        },
        "evidence": {
          "certaintySeeking": 1,
          "truthSeeking": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
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
          "L_confident": 0.6,
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
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
    "reliability": 0.84,
    "targetSystems": [
      "cognitive",
      "instinct",
      "decision",
      "stress",
      "learning",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "instinct",
      "decision",
      "stress",
      "learning",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_013",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Temanmu berkata, “aku cuma bercanda,” setelah kalimatnya membuat meja mendadak sepi. Gelas di depanmu masih penuh.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_013_a",
        "text": "Aku menatapnya dan berkata pelan, “kalau bercanda, kenapa dia jadi diam?”",
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
            "softRepair": 1,
            "clearWords": 0.6
          },
          "negative": {
            "easySilence": -0.8,
            "coldCut": -0.8,
            "muddyMessage": -0.5
          },
          "evidence": {
            "justiceSeeking": 1,
            "directEngagement": 0.8,
            "peopleFirst": 1,
            "repairSeeking": 0.8
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
            "gentle": 1.0,
            "expressive": 0.3,
            "direct": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_013_b",
        "text": "Aku menggeser pembicaraan sebentar, lalu mengajak orang yang kena candaan keluar beli minum.",
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
            "peaceSeeking": 1
          },
          "positive": {
            "softRepair": 1,
            "keptRoomGentle": 0.8,
            "keptConnection": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "unspokenResentment": -0.7,
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
      }
    ],
    "left": {
      "id": "core_013_a",
      "text": "Aku menatapnya dan berkata pelan, “kalau bercanda, kenapa dia jadi diam?”",
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
          "softRepair": 1,
          "clearWords": 0.6
        },
        "negative": {
          "easySilence": -0.8,
          "coldCut": -0.8,
          "muddyMessage": -0.5
        },
        "evidence": {
          "justiceSeeking": 1,
          "directEngagement": 0.8,
          "peopleFirst": 1,
          "repairSeeking": 0.8
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
          "gentle": 1.0,
          "expressive": 0.3,
          "direct": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_013_b",
      "text": "Aku menggeser pembicaraan sebentar, lalu mengajak orang yang kena candaan keluar beli minum.",
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
          "peaceSeeking": 1
        },
        "positive": {
          "softRepair": 1,
          "keptRoomGentle": 0.8,
          "keptConnection": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "unspokenResentment": -0.7,
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
    "reliability": 0.84,
    "targetSystems": [
      "moral",
      "conflict",
      "communication",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "conflict",
      "communication",
      "relationship",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_014",
    "kind": "forcedChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Tugas besar tinggal dua hari. Buku terbuka, tapi catatanmu penuh silang. Temanmu mengirim, “kita mulai dari mana?”",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_014_a",
        "text": "Aku membuat tiga kotak kecil: yang pasti, yang belum jelas, dan yang harus ditanyakan besok.",
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
            "practicalRepair": 1.3,
            "systemFirst": 0.8,
            "orderSeeking": 1
          },
          "positive": {
            "clearNextStep": 1,
            "madeItNeat": 1,
            "learnedByDoing": 0.6
          },
          "negative": {
            "looseProcess": -0.8,
            "messyLeap": -0.7,
            "blankRepeat": -0.5
          },
          "work": {
            "planner": 1.2,
            "executor": 0.6,
            "refiner": 0.8
          },
          "disc": {
            "C": 1.1,
            "D": 0.4
          },
          "riasec": {
            "Conventional": 0.9
          },
          "learning": {
            "structured": 1.0,
            "repetitionBased": 0.4,
            "projectBased": 0.4
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_014_b",
        "text": "Aku memilih satu bagian yang paling hidup di kepalaku dan menulis draf kasar dulu agar tidak kosong.",
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
            "newDoor": 1,
            "roomForNew": 1
          },
          "negative": {
            "dryProcedure": -0.6,
            "stuckRoutine": -0.7,
            "closedDoor": -0.7
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
      "id": "core_014_a",
      "text": "Aku membuat tiga kotak kecil: yang pasti, yang belum jelas, dan yang harus ditanyakan besok.",
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
          "practicalRepair": 1.3,
          "systemFirst": 0.8,
          "orderSeeking": 1
        },
        "positive": {
          "clearNextStep": 1,
          "madeItNeat": 1,
          "learnedByDoing": 0.6
        },
        "negative": {
          "looseProcess": -0.8,
          "messyLeap": -0.7,
          "blankRepeat": -0.5
        },
        "work": {
          "planner": 1.2,
          "executor": 0.6,
          "refiner": 0.8
        },
        "disc": {
          "C": 1.1,
          "D": 0.4
        },
        "riasec": {
          "Conventional": 0.9
        },
        "learning": {
          "structured": 1.0,
          "repetitionBased": 0.4,
          "projectBased": 0.4
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_014_b",
      "text": "Aku memilih satu bagian yang paling hidup di kepalaku dan menulis draf kasar dulu agar tidak kosong.",
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
          "newDoor": 1,
          "roomForNew": 1
        },
        "negative": {
          "dryProcedure": -0.6,
          "stuckRoutine": -0.7,
          "closedDoor": -0.7
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
      "work",
      "learning",
      "bigFive",
      "hexaco",
      "decision",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "bigFive",
      "hexaco",
      "decision",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_015",
    "kind": "forcedChoice",
    "context": {
      "domain": "stress",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang memanggil namamu dengan nada keras di depan banyak orang. Kursi bergeser, semua kepala menoleh.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_015_a",
        "text": "Aku menahan napas, menunggu satu kalimat lagi agar tidak menjawab dari panas yang pertama.",
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
            "peaceSeeking": 1,
            "analysisLoop": 1
          },
          "positive": {
            "patientReading": 1,
            "keptRoomGentle": 0.8,
            "protectedEnergy": 1
          },
          "negative": {
            "rushedMove": -0.8,
            "unspokenResentment": -0.7,
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
          "learning": {
            "solitary": 0.6,
            "analytical": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "core_015_b",
        "text": "Aku berdiri sedikit lebih tegak dan berkata, “kalau ini tentang aku, bilang langsung saja.”",
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
            "actionFirst": 1.8,
            "directEngagement": 1.3,
            "justiceSeeking": 1
          },
          "positive": {
            "presentMove": 1,
            "stoodForFairness": 1,
            "tookResponsibility": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "easySilence": -0.8,
            "waitingPermission": -0.7
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 1.2,
            "I": 0.3
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
            "truth": 0.4
          },
          "conflict": {
            "directConfrontation": 0.7
          },
          "riasec": {
            "Enterprising": 0.8
          },
          "work": {
            "leader": 0.7,
            "challenger": 0.4
          },
          "decision": {
            "fastAction": 0.5
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_015_a",
      "text": "Aku menahan napas, menunggu satu kalimat lagi agar tidak menjawab dari panas yang pertama.",
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
          "peaceSeeking": 1,
          "analysisLoop": 1
        },
        "positive": {
          "patientReading": 1,
          "keptRoomGentle": 0.8,
          "protectedEnergy": 1
        },
        "negative": {
          "rushedMove": -0.8,
          "unspokenResentment": -0.7,
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
        "learning": {
          "solitary": 0.6,
          "analytical": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_015_b",
      "text": "Aku berdiri sedikit lebih tegak dan berkata, “kalau ini tentang aku, bilang langsung saja.”",
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
          "actionFirst": 1.8,
          "directEngagement": 1.3,
          "justiceSeeking": 1
        },
        "positive": {
          "presentMove": 1,
          "stoodForFairness": 1,
          "tookResponsibility": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "easySilence": -0.8,
          "waitingPermission": -0.7
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 1.2,
          "I": 0.3
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
          "truth": 0.4
        },
        "conflict": {
          "directConfrontation": 0.7
        },
        "riasec": {
          "Enterprising": 0.8
        },
        "work": {
          "leader": 0.7,
          "challenger": 0.4
        },
        "decision": {
          "fastAction": 0.5
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
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "stress",
      "defense",
      "conflict",
      "communication",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_016",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Di teras, ibumu berkata, “nggak apa-apa, ibu biasa sendiri,” sambil melipat kain lebih pelan dari biasanya.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_016_a",
        "text": "Aku duduk di sampingnya tanpa banyak tanya, mengambil kain lain, lalu ikut melipat sampai ia bicara sendiri.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5,
            "Si": 2,
            "Ne": -0.6
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.9,
            "S": 1,
            "I": 0.4
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.9,
            "tertiary": 0.3
          },
          "evidence": {
            "peopleFirst": 2,
            "repairSeeking": 0.8,
            "memoryReferencing": 1,
            "carefulComparison": 0.8
          },
          "positive": {
            "softRepair": 1,
            "steadyRecall": 1,
            "warmPresence": 1
          },
          "negative": {
            "coldCut": -0.8,
            "untestedLeap": -0.7,
            "unseenNeed": -0.7
          },
          "relationship": {
            "repairSeeking": 1.3,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "environment": {
            "familiarPlace": 0.7,
            "organizedSpace": 0.3
          },
          "temperament": {
            "SJ": 0.4
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
          "reliability": 0.84
        }
      },
      {
        "id": "core_016_b",
        "text": "Aku bertanya, “yang paling berat bagian mana hari ini?” dan menunggu jawaban tanpa membetulkan apa pun dulu.",
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
            "emotionalExpression": 0.8
          },
          "positive": {
            "softRepair": 1,
            "honestTenderness": 0.8,
            "softenedEdge": 1
          },
          "negative": {
            "coldCut": -0.8,
            "floodedReaction": -0.5,
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
          "bigFive": {
            "Neuroticism": 0.8,
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Emotionality": 0.9,
            "Agreeableness": 0.8
          },
          "attitudinalPsyche": {
            "E_insecure": 0.5,
            "E_flexible": 0.3
          },
          "stress": {
            "collapse": 0.4,
            "freeze": 0.3
          },
          "conflict": {
            "negotiation": 0.5
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_016_a",
      "text": "Aku duduk di sampingnya tanpa banyak tanya, mengambil kain lain, lalu ikut melipat sampai ia bicara sendiri.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5,
          "Si": 2,
          "Ne": -0.6
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.9,
          "S": 1,
          "I": 0.4
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.9,
          "tertiary": 0.3
        },
        "evidence": {
          "peopleFirst": 2,
          "repairSeeking": 0.8,
          "memoryReferencing": 1,
          "carefulComparison": 0.8
        },
        "positive": {
          "softRepair": 1,
          "steadyRecall": 1,
          "warmPresence": 1
        },
        "negative": {
          "coldCut": -0.8,
          "untestedLeap": -0.7,
          "unseenNeed": -0.7
        },
        "relationship": {
          "repairSeeking": 1.3,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "environment": {
          "familiarPlace": 0.7,
          "organizedSpace": 0.3
        },
        "temperament": {
          "SJ": 0.4
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
        "reliability": 0.84
      }
    },
    "right": {
      "id": "core_016_b",
      "text": "Aku bertanya, “yang paling berat bagian mana hari ini?” dan menunggu jawaban tanpa membetulkan apa pun dulu.",
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
          "emotionalExpression": 0.8
        },
        "positive": {
          "softRepair": 1,
          "honestTenderness": 0.8,
          "softenedEdge": 1
        },
        "negative": {
          "coldCut": -0.8,
          "floodedReaction": -0.5,
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
        "bigFive": {
          "Neuroticism": 0.8,
          "Agreeableness": 0.8
        },
        "hexaco": {
          "Emotionality": 0.9,
          "Agreeableness": 0.8
        },
        "attitudinalPsyche": {
          "E_insecure": 0.5,
          "E_flexible": 0.3
        },
        "stress": {
          "collapse": 0.4,
          "freeze": 0.3
        },
        "conflict": {
          "negotiation": 0.5
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "communication",
      "enneagram",
      "loveStyle",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "enneagram",
      "loveStyle",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_017",
    "kind": "forcedChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "low"
    },
    "prompt": "Di laci meja, kau menemukan tiket lama yang sudah pudar. Ada nama tempat yang dulu ingin kau kunjungi lagi.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_017_a",
        "text": "Aku menyimpannya di antara halaman buku, seperti memberi tanda pada bagian diriku yang belum selesai.",
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
        "id": "core_017_b",
        "text": "Aku memotretnya, lalu mencari apakah tempat itu masih ada dan bisa didatangi minggu depan.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.6,
            "Se": 2,
            "Ni": -0.6
          },
          "mbtiAxis": {
            "N": 1,
            "E": 1.0,
            "P": 1.2,
            "S": 1
          },
          "stackRole": {
            "auxiliary": 0.5,
            "tertiary": 0.4,
            "dominant": 0.5,
            "inferior": 0.3
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryTurn": 0.8,
            "actionFirst": 1,
            "directEngagement": 0.9,
            "noveltySeeking": 1
          },
          "positive": {
            "newDoor": 1,
            "presentMove": 1,
            "freshAir": 1
          },
          "negative": {
            "stuckRoutine": -0.7,
            "overWaiting": -0.8,
            "unfinishedWeight": -0.7
          },
          "learning": {
            "exploratory": 1.2
          },
          "temperament": {
            "NF": 0.2,
            "NT": 0.2
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 0.5
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
          "values": {
            "freedom": 0.9,
            "beauty": 0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_017_a",
      "text": "Aku menyimpannya di antara halaman buku, seperti memberi tanda pada bagian diriku yang belum selesai.",
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
      "id": "core_017_b",
      "text": "Aku memotretnya, lalu mencari apakah tempat itu masih ada dan bisa didatangi minggu depan.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Ne": 2,
          "Si": -0.6,
          "Se": 2,
          "Ni": -0.6
        },
        "mbtiAxis": {
          "N": 1,
          "E": 1.0,
          "P": 1.2,
          "S": 1
        },
        "stackRole": {
          "auxiliary": 0.5,
          "tertiary": 0.4,
          "dominant": 0.5,
          "inferior": 0.3
        },
        "evidence": {
          "possibilitySeeking": 1,
          "exploratoryTurn": 0.8,
          "actionFirst": 1,
          "directEngagement": 0.9,
          "noveltySeeking": 1
        },
        "positive": {
          "newDoor": 1,
          "presentMove": 1,
          "freshAir": 1
        },
        "negative": {
          "stuckRoutine": -0.7,
          "overWaiting": -0.8,
          "unfinishedWeight": -0.7
        },
        "learning": {
          "exploratory": 1.2
        },
        "temperament": {
          "NF": 0.2,
          "NT": 0.2
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 0.5
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
        "values": {
          "freedom": 0.9,
          "beauty": 0.2
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "cognitive",
      "values",
      "environment",
      "learning",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "values",
      "environment",
      "learning",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "core_018",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Presentasi berhenti karena file utama tidak bisa dibuka. Di layar hanya ada kotak error, dan semua orang menunggu.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "core_018_a",
        "text": "Aku mengambil alih mouse, membuka cadangan, lalu berkata, “kita mulai dari bagian yang masih bisa ditampilkan.”",
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
            "clearNextStep": 1,
            "handsOnRepair": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "looseProcess": -0.8,
            "emptyTalk": -0.7
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 0.9,
            "C": 0.4
          },
          "work": {
            "planner": 0.8,
            "executor": 1.2,
            "stabilizer": 0.4
          },
          "riasec": {
            "Realistic": 1.0
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
        "id": "core_018_b",
        "text": "Aku menenangkan tim sebentar dan berkata ke ruangan, “beri kami satu menit, kami pakai jalur lain.”",
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
            "actionFirst": 0.8,
            "statusAwareness": 0.7,
            "visibleRole": 0.7
          },
          "positive": {
            "softRepair": 1,
            "tookResponsibility": 1,
            "socialBridge": 1
          },
          "negative": {
            "coldCut": -0.8,
            "waitingPermission": -0.7,
            "privateTunnel": -0.6
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
          "riasec": {
            "Enterprising": 0.8
          },
          "disc": {
            "D": 0.7,
            "I": 0.8
          },
          "work": {
            "leader": 0.7,
            "challenger": 0.4
          },
          "decision": {
            "fastAction": 0.5
          },
          "instinct": {
            "so": 1.5,
            "sp": -0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "core_018_a",
      "text": "Aku mengambil alih mouse, membuka cadangan, lalu berkata, “kita mulai dari bagian yang masih bisa ditampilkan.”",
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
          "clearNextStep": 1,
          "handsOnRepair": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "looseProcess": -0.8,
          "emptyTalk": -0.7
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 0.9,
          "C": 0.4
        },
        "work": {
          "planner": 0.8,
          "executor": 1.2,
          "stabilizer": 0.4
        },
        "riasec": {
          "Realistic": 1.0
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
      "id": "core_018_b",
      "text": "Aku menenangkan tim sebentar dan berkata ke ruangan, “beri kami satu menit, kami pakai jalur lain.”",
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
          "actionFirst": 0.8,
          "statusAwareness": 0.7,
          "visibleRole": 0.7
        },
        "positive": {
          "softRepair": 1,
          "tookResponsibility": 1,
          "socialBridge": 1
        },
        "negative": {
          "coldCut": -0.8,
          "waitingPermission": -0.7,
          "privateTunnel": -0.6
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
        "riasec": {
          "Enterprising": 0.8
        },
        "disc": {
          "D": 0.7,
          "I": 0.8
        },
        "work": {
          "leader": 0.7,
          "challenger": 0.4
        },
        "decision": {
          "fastAction": 0.5
        },
        "instinct": {
          "so": 1.5,
          "sp": -0.2
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "work",
      "disc",
      "stress",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "disc",
      "stress",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  }
];
