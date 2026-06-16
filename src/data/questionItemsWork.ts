import type { QuestionItem } from "../types";

export const WORK_QUESTIONS: QuestionItem[] = [
  {
    "id": "work_001",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Deadline tinggal malam ini. Laptop panas, kopi sudah dingin, dan instruksi dari atasan masih setengah kabur.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "work_001_a",
        "text": "Aku membuat daftar pertanyaan pendek, lalu mengerjakan bagian yang tidak menunggu jawaban.",
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
            "orderSeeking": 1
          },
          "positive": {
            "clearNextStep": 1,
            "checkedBeforeMoving": 1,
            "madeItNeat": 1
          },
          "negative": {
            "looseProcess": -0.8,
            "performativeRush": -0.6,
            "messyLeap": -0.7
          },
          "work": {
            "planner": 1.2,
            "executor": 0.6,
            "researcher": 0.8,
            "refiner": 0.8
          },
          "disc": {
            "C": 1.1,
            "D": 0.4
          },
          "riasec": {
            "Investigative": 1.0,
            "Conventional": 0.9
          },
          "learning": {
            "analytical": 0.6,
            "structured": 0.9,
            "repetitionBased": 0.4
          },
          "attitudinalPsyche": {
            "L_confident": 0.6
          },
          "reliability": 0.84
        }
      },
      {
        "id": "work_001_b",
        "text": "Aku membuat versi kasar dulu, supaya ada bentuk yang bisa diperbaiki daripada menunggu sempurna.",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Artistic": 1.0,
            "Realistic": 1.0
          },
          "bigFive": {
            "Openness": 0.8,
            "Conscientiousness": 0.3
          },
          "hexaco": {
            "Openness": 0.8,
            "Conscientiousness": 0.3
          },
          "values": {
            "beauty": 0.8,
            "meaning": 0.5
          },
          "work": {
            "creator": 0.7,
            "executor": 0.6,
            "stabilizer": 0.4
          },
          "learning": {
            "visual": 0.5,
            "projectBased": 0.4,
            "experiential": 0.7
          },
          "positive": {
            "madeMeaning": 1,
            "presentMove": 1,
            "handsOnRepair": 1
          },
          "negative": {
            "dryProcedure": -0.6,
            "overWaiting": -0.8,
            "emptyTalk": -0.7
          },
          "evidence": {
            "symbolicMeaning": 0.8,
            "actionFirst": 1,
            "directEngagement": 0.9,
            "practicalRepair": 1
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
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "work_001_a",
      "text": "Aku membuat daftar pertanyaan pendek, lalu mengerjakan bagian yang tidak menunggu jawaban.",
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
          "orderSeeking": 1
        },
        "positive": {
          "clearNextStep": 1,
          "checkedBeforeMoving": 1,
          "madeItNeat": 1
        },
        "negative": {
          "looseProcess": -0.8,
          "performativeRush": -0.6,
          "messyLeap": -0.7
        },
        "work": {
          "planner": 1.2,
          "executor": 0.6,
          "researcher": 0.8,
          "refiner": 0.8
        },
        "disc": {
          "C": 1.1,
          "D": 0.4
        },
        "riasec": {
          "Investigative": 1.0,
          "Conventional": 0.9
        },
        "learning": {
          "analytical": 0.6,
          "structured": 0.9,
          "repetitionBased": 0.4
        },
        "attitudinalPsyche": {
          "L_confident": 0.6
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "work_001_b",
      "text": "Aku membuat versi kasar dulu, supaya ada bentuk yang bisa diperbaiki daripada menunggu sempurna.",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Artistic": 1.0,
          "Realistic": 1.0
        },
        "bigFive": {
          "Openness": 0.8,
          "Conscientiousness": 0.3
        },
        "hexaco": {
          "Openness": 0.8,
          "Conscientiousness": 0.3
        },
        "values": {
          "beauty": 0.8,
          "meaning": 0.5
        },
        "work": {
          "creator": 0.7,
          "executor": 0.6,
          "stabilizer": 0.4
        },
        "learning": {
          "visual": 0.5,
          "projectBased": 0.4,
          "experiential": 0.7
        },
        "positive": {
          "madeMeaning": 1,
          "presentMove": 1,
          "handsOnRepair": 1
        },
        "negative": {
          "dryProcedure": -0.6,
          "overWaiting": -0.8,
          "emptyTalk": -0.7
        },
        "evidence": {
          "symbolicMeaning": 0.8,
          "actionFirst": 1,
          "directEngagement": 0.9,
          "practicalRepair": 1
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
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "work",
      "learning",
      "decision",
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "decision",
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "work_002",
    "kind": "forcedChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Kerja kelompok kacau. Satu orang tidak mengerjakan apa pun, tapi menulis namanya di slide terakhir.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "work_002_a",
        "text": "Aku membagi catatan kontribusi dan berkata, “kita tulis siapa mengerjakan apa.”",
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
            "clearNextStep": 1,
            "steadyPush": 0.6
          },
          "negative": {
            "easySilence": -0.8,
            "looseProcess": -0.8,
            "lostPace": -0.5
          },
          "evidence": {
            "justiceSeeking": 1,
            "directEngagement": 0.4,
            "practicalRepair": 1,
            "systemFirst": 0.8,
            "actionFirst": 0.3
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
          "work": {
            "planner": 0.8,
            "executor": 0.6
          },
          "disc": {
            "C": 0.75,
            "D": 0.75
          },
          "reliability": 0.84
        }
      },
      {
        "id": "work_002_b",
        "text": "Aku bicara kepadanya terpisah dulu, memberi kesempatan terakhir sebelum namanya dipersoalkan.",
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
            "directEngagement": 0.4
          },
          "positive": {
            "softRepair": 1,
            "softenedEdge": 1,
            "clearWords": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "needlessSharpness": -0.8,
            "muddyMessage": -0.5
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 1.6,
            "expressive": 0.3,
            "direct": 0.5
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
      "id": "work_002_a",
      "text": "Aku membagi catatan kontribusi dan berkata, “kita tulis siapa mengerjakan apa.”",
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
          "clearNextStep": 1,
          "steadyPush": 0.6
        },
        "negative": {
          "easySilence": -0.8,
          "looseProcess": -0.8,
          "lostPace": -0.5
        },
        "evidence": {
          "justiceSeeking": 1,
          "directEngagement": 0.4,
          "practicalRepair": 1,
          "systemFirst": 0.8,
          "actionFirst": 0.3
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
        "work": {
          "planner": 0.8,
          "executor": 0.6
        },
        "disc": {
          "C": 0.75,
          "D": 0.75
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "work_002_b",
      "text": "Aku bicara kepadanya terpisah dulu, memberi kesempatan terakhir sebelum namanya dipersoalkan.",
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
          "directEngagement": 0.4
        },
        "positive": {
          "softRepair": 1,
          "softenedEdge": 1,
          "clearWords": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "needlessSharpness": -0.8,
          "muddyMessage": -0.5
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 1.6,
          "expressive": 0.3,
          "direct": 0.5
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
      "work",
      "riasec",
      "disc",
      "moral",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "riasec",
      "disc",
      "moral",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "work_003",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Dalam wawancara, pewawancara bertanya, “apa yang kau lakukan saat tidak tahu jawabannya?” Ruangan terasa terlalu terang.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "work_003_a",
        "text": "Aku berkata, “aku akan mengakui belum tahu, lalu menunjukkan cara aku mencari jawabannya.”",
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
            "truth": 0.8
          },
          "positive": {
            "cleanHands": 1,
            "checkedBeforeMoving": 1,
            "learnedByDoing": 0.6
          },
          "negative": {
            "smoothLie": -0.8,
            "performativeRush": -0.6,
            "blankRepeat": -0.5
          },
          "evidence": {
            "truthSeeking": 2,
            "practicalRepair": 0.3
          },
          "riasec": {
            "Investigative": 1.0
          },
          "work": {
            "researcher": 0.8
          },
          "learning": {
            "analytical": 0.6,
            "structured": 0.7,
            "projectBased": 0.4
          },
          "attitudinalPsyche": {
            "L_confident": 0.6
          },
          "reliability": 0.84
        }
      },
      {
        "id": "work_003_b",
        "text": "Aku memberi contoh saat aku belajar cepat dari orang yang lebih paham, lalu mempraktikkannya sampai bisa dipakai.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "2": 1.0
          },
          "coreFear": {
            "unwanted": 0.7
          },
          "coreDesire": {
            "needed": 0.7
          },
          "relationship": {
            "repairSeeking": 0.5
          },
          "work": {
            "helper": 0.5,
            "executor": 0.6,
            "stabilizer": 0.4
          },
          "riasec": {
            "Social": 0.7,
            "Realistic": 1.0
          },
          "positive": {
            "warmPresence": 1,
            "handsOnRepair": 1,
            "learnedByDoing": 0.6
          },
          "negative": {
            "unseenNeed": -0.7,
            "emptyTalk": -0.7,
            "blankRepeat": -0.5
          },
          "evidence": {
            "peopleFirst": 1,
            "practicalRepair": 1.3
          },
          "learning": {
            "experiential": 0.7,
            "structured": 0.4,
            "projectBased": 0.4
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
      "id": "work_003_a",
      "text": "Aku berkata, “aku akan mengakui belum tahu, lalu menunjukkan cara aku mencari jawabannya.”",
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
          "truth": 0.8
        },
        "positive": {
          "cleanHands": 1,
          "checkedBeforeMoving": 1,
          "learnedByDoing": 0.6
        },
        "negative": {
          "smoothLie": -0.8,
          "performativeRush": -0.6,
          "blankRepeat": -0.5
        },
        "evidence": {
          "truthSeeking": 2,
          "practicalRepair": 0.3
        },
        "riasec": {
          "Investigative": 1.0
        },
        "work": {
          "researcher": 0.8
        },
        "learning": {
          "analytical": 0.6,
          "structured": 0.7,
          "projectBased": 0.4
        },
        "attitudinalPsyche": {
          "L_confident": 0.6
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "work_003_b",
      "text": "Aku memberi contoh saat aku belajar cepat dari orang yang lebih paham, lalu mempraktikkannya sampai bisa dipakai.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "2": 1.0
        },
        "coreFear": {
          "unwanted": 0.7
        },
        "coreDesire": {
          "needed": 0.7
        },
        "relationship": {
          "repairSeeking": 0.5
        },
        "work": {
          "helper": 0.5,
          "executor": 0.6,
          "stabilizer": 0.4
        },
        "riasec": {
          "Social": 0.7,
          "Realistic": 1.0
        },
        "positive": {
          "warmPresence": 1,
          "handsOnRepair": 1,
          "learnedByDoing": 0.6
        },
        "negative": {
          "unseenNeed": -0.7,
          "emptyTalk": -0.7,
          "blankRepeat": -0.5
        },
        "evidence": {
          "peopleFirst": 1,
          "practicalRepair": 1.3
        },
        "learning": {
          "experiential": 0.7,
          "structured": 0.4,
          "projectBased": 0.4
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
      "learning",
      "riasec",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "work_004",
    "kind": "forcedChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "low"
    },
    "prompt": "Kau harus belajar materi baru. Buku terbuka, video menyala, tapi pikiranmu berpindah-pindah.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "work_004_a",
        "text": "Aku menulis pertanyaan yang belum kupahami, lalu mencari jawaban satu per satu.",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Investigative": 1.0
          },
          "work": {
            "researcher": 0.8
          },
          "learning": {
            "analytical": 1.3,
            "structured": 0.7,
            "solitary": 0.4,
            "projectBased": 0.4
          },
          "attitudinalPsyche": {
            "L_confident": 0.6
          },
          "positive": {
            "checkedBeforeMoving": 1,
            "cleanReason": 1,
            "learnedByDoing": 0.6
          },
          "negative": {
            "performativeRush": -0.6,
            "socialGuessing": -0.7,
            "blankRepeat": -0.5
          },
          "evidence": {
            "truthSeeking": 1.8,
            "internalCheck": 1,
            "practicalRepair": 0.3
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
          "reliability": 0.84
        }
      },
      {
        "id": "work_004_b",
        "text": "Aku mencoba contoh kecil dulu, gagal sedikit, lalu belajar dari bagian yang salah.",
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
            "experiential": 0.7,
            "structured": 0.4,
            "projectBased": 0.4
          },
          "bigFive": {
            "Conscientiousness": 0.3
          },
          "hexaco": {
            "Conscientiousness": 0.3
          },
          "positive": {
            "handsOnRepair": 1,
            "presentMove": 1,
            "learnedByDoing": 0.6
          },
          "negative": {
            "emptyTalk": -0.7,
            "overWaiting": -0.8,
            "blankRepeat": -0.5
          },
          "evidence": {
            "practicalRepair": 1.3,
            "actionFirst": 1,
            "directEngagement": 0.9
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
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "work_004_a",
      "text": "Aku menulis pertanyaan yang belum kupahami, lalu mencari jawaban satu per satu.",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Investigative": 1.0
        },
        "work": {
          "researcher": 0.8
        },
        "learning": {
          "analytical": 1.3,
          "structured": 0.7,
          "solitary": 0.4,
          "projectBased": 0.4
        },
        "attitudinalPsyche": {
          "L_confident": 0.6
        },
        "positive": {
          "checkedBeforeMoving": 1,
          "cleanReason": 1,
          "learnedByDoing": 0.6
        },
        "negative": {
          "performativeRush": -0.6,
          "socialGuessing": -0.7,
          "blankRepeat": -0.5
        },
        "evidence": {
          "truthSeeking": 1.8,
          "internalCheck": 1,
          "practicalRepair": 0.3
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
        "reliability": 0.84
      }
    },
    "right": {
      "id": "work_004_b",
      "text": "Aku mencoba contoh kecil dulu, gagal sedikit, lalu belajar dari bagian yang salah.",
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
          "experiential": 0.7,
          "structured": 0.4,
          "projectBased": 0.4
        },
        "bigFive": {
          "Conscientiousness": 0.3
        },
        "hexaco": {
          "Conscientiousness": 0.3
        },
        "positive": {
          "handsOnRepair": 1,
          "presentMove": 1,
          "learnedByDoing": 0.6
        },
        "negative": {
          "emptyTalk": -0.7,
          "overWaiting": -0.8,
          "blankRepeat": -0.5
        },
        "evidence": {
          "practicalRepair": 1.3,
          "actionFirst": 1,
          "directEngagement": 0.9
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
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "learning",
      "work",
      "riasec",
      "bigFive",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "learning",
      "work",
      "riasec",
      "bigFive",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "work_005",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Di rapat, semua orang saling menunggu. Agenda kosong, tapi jam terus berjalan.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "work_005_a",
        "text": "Aku mengambil giliran dan berkata, “kita putuskan tiga hal saja hari ini.”",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Enterprising": 0.8
          },
          "disc": {
            "D": 1.45,
            "I": 0.3,
            "C": 0.75
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
            "steadyPush": 0.6
          },
          "negative": {
            "waitingPermission": -0.7,
            "looseProcess": -0.8,
            "lostPace": -0.5
          },
          "evidence": {
            "actionFirst": 1.1,
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
        "id": "work_005_b",
        "text": "Aku bertanya ke satu per satu bagian yang belum bicara, agar keputusan tidak hanya datang dari suara paling keras.",
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
            "gentle": 1.3,
            "direct": 0.5
          },
          "evidence": {
            "statusAwareness": 0.7,
            "visibleRole": 0.7,
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "directEngagement": 0.4
          },
          "positive": {
            "socialBridge": 1,
            "softRepair": 1,
            "clearWords": 0.6
          },
          "negative": {
            "privateTunnel": -0.6,
            "coldCut": -0.8,
            "muddyMessage": -0.5
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
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "work_005_a",
      "text": "Aku mengambil giliran dan berkata, “kita putuskan tiga hal saja hari ini.”",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Enterprising": 0.8
        },
        "disc": {
          "D": 1.45,
          "I": 0.3,
          "C": 0.75
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
          "steadyPush": 0.6
        },
        "negative": {
          "waitingPermission": -0.7,
          "looseProcess": -0.8,
          "lostPace": -0.5
        },
        "evidence": {
          "actionFirst": 1.1,
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
      "id": "work_005_b",
      "text": "Aku bertanya ke satu per satu bagian yang belum bicara, agar keputusan tidak hanya datang dari suara paling keras.",
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
          "gentle": 1.3,
          "direct": 0.5
        },
        "evidence": {
          "statusAwareness": 0.7,
          "visibleRole": 0.7,
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "directEngagement": 0.4
        },
        "positive": {
          "socialBridge": 1,
          "softRepair": 1,
          "clearWords": 0.6
        },
        "negative": {
          "privateTunnel": -0.6,
          "coldCut": -0.8,
          "muddyMessage": -0.5
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
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "work",
      "disc",
      "communication",
      "decision",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "disc",
      "communication",
      "decision",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "work_006",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Hasil kerjamu dikritik. Di layar, komentarnya banyak dan beberapa terasa terlalu tajam.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "work_006_a",
        "text": "Aku memilih satu komentar yang paling bisa diperbaiki dulu, bukan yang paling menyakitkan.",
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
            "repetitionBased": 0.4,
            "analytical": 0.7,
            "solitary": 0.4
          },
          "positive": {
            "madeItNeat": 1,
            "keptGround": 1,
            "cleanReason": 1
          },
          "negative": {
            "messyLeap": -0.7,
            "chaoticDrift": -0.7,
            "socialGuessing": -0.7
          },
          "evidence": {
            "orderSeeking": 1.8,
            "internalCheck": 1,
            "truthSeeking": 0.8
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
          "reliability": 0.84
        }
      },
      {
        "id": "work_006_b",
        "text": "Aku bertanya bagian mana yang paling penting untuk diubah agar energiku tidak habis membela diri.",
        "subtleMeaning": "hidden",
        "weights": {
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
          "positive": {
            "checkedBeforeMoving": 1,
            "clearWords": 0.6,
            "keptRoomGentle": 0.8
          },
          "negative": {
            "performativeRush": -0.6,
            "muddyMessage": -0.5,
            "unspokenResentment": -0.7
          },
          "evidence": {
            "truthSeeking": 1,
            "directEngagement": 0.4,
            "peaceSeeking": 1
          },
          "communication": {
            "direct": 0.5,
            "gentle": 0.3
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
      "id": "work_006_a",
      "text": "Aku memilih satu komentar yang paling bisa diperbaiki dulu, bukan yang paling menyakitkan.",
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
          "repetitionBased": 0.4,
          "analytical": 0.7,
          "solitary": 0.4
        },
        "positive": {
          "madeItNeat": 1,
          "keptGround": 1,
          "cleanReason": 1
        },
        "negative": {
          "messyLeap": -0.7,
          "chaoticDrift": -0.7,
          "socialGuessing": -0.7
        },
        "evidence": {
          "orderSeeking": 1.8,
          "internalCheck": 1,
          "truthSeeking": 0.8
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
        "reliability": 0.84
      }
    },
    "right": {
      "id": "work_006_b",
      "text": "Aku bertanya bagian mana yang paling penting untuk diubah agar energiku tidak habis membela diri.",
      "subtleMeaning": "hidden",
      "weights": {
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
        "positive": {
          "checkedBeforeMoving": 1,
          "clearWords": 0.6,
          "keptRoomGentle": 0.8
        },
        "negative": {
          "performativeRush": -0.6,
          "muddyMessage": -0.5,
          "unspokenResentment": -0.7
        },
        "evidence": {
          "truthSeeking": 1,
          "directEngagement": 0.4,
          "peaceSeeking": 1
        },
        "communication": {
          "direct": 0.5,
          "gentle": 0.3
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
      "work",
      "learning",
      "stress",
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "stress",
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "work_007",
    "kind": "forcedChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "low"
    },
    "prompt": "Kau diberi pilihan tugas akhir: membuat alat sederhana, menulis riset, membuat karya visual, atau memimpin proyek kecil.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "work_007_a",
        "text": "Aku memilih yang membuatku bisa melihat hasil nyata di tangan, meski prosesnya melelahkan.",
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
            "keptGround": 1
          },
          "negative": {
            "emptyTalk": -0.7,
            "chaoticDrift": -0.7
          },
          "evidence": {
            "practicalRepair": 1,
            "orderSeeking": 0.8
          },
          "values": {
            "security": 0.7
          },
          "environment": {
            "organizedSpace": 0.6,
            "familiarPlace": 0.4
          },
          "reliability": 0.84
        }
      },
      {
        "id": "work_007_b",
        "text": "Aku memilih yang membuatku bisa menyusun gagasan sampai terasa punya bentuk.",
        "subtleMeaning": "hidden",
        "weights": {
          "riasec": {
            "Artistic": 1.0,
            "Investigative": 1.0
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
            "creator": 0.7,
            "researcher": 0.8
          },
          "learning": {
            "visual": 0.5,
            "projectBased": 0.4,
            "analytical": 0.6,
            "structured": 0.3
          },
          "positive": {
            "madeMeaning": 1,
            "checkedBeforeMoving": 1,
            "roomForNew": 1
          },
          "negative": {
            "dryProcedure": -0.6,
            "performativeRush": -0.6,
            "closedDoor": -0.7
          },
          "evidence": {
            "symbolicMeaning": 0.8,
            "truthSeeking": 1,
            "possibilitySeeking": 0.7
          },
          "attitudinalPsyche": {
            "L_confident": 0.6
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "work_007_a",
      "text": "Aku memilih yang membuatku bisa melihat hasil nyata di tangan, meski prosesnya melelahkan.",
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
          "keptGround": 1
        },
        "negative": {
          "emptyTalk": -0.7,
          "chaoticDrift": -0.7
        },
        "evidence": {
          "practicalRepair": 1,
          "orderSeeking": 0.8
        },
        "values": {
          "security": 0.7
        },
        "environment": {
          "organizedSpace": 0.6,
          "familiarPlace": 0.4
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "work_007_b",
      "text": "Aku memilih yang membuatku bisa menyusun gagasan sampai terasa punya bentuk.",
      "subtleMeaning": "hidden",
      "weights": {
        "riasec": {
          "Artistic": 1.0,
          "Investigative": 1.0
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
          "creator": 0.7,
          "researcher": 0.8
        },
        "learning": {
          "visual": 0.5,
          "projectBased": 0.4,
          "analytical": 0.6,
          "structured": 0.3
        },
        "positive": {
          "madeMeaning": 1,
          "checkedBeforeMoving": 1,
          "roomForNew": 1
        },
        "negative": {
          "dryProcedure": -0.6,
          "performativeRush": -0.6,
          "closedDoor": -0.7
        },
        "evidence": {
          "symbolicMeaning": 0.8,
          "truthSeeking": 1,
          "possibilitySeeking": 0.7
        },
        "attitudinalPsyche": {
          "L_confident": 0.6
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "riasec",
      "work",
      "learning",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "riasec",
      "work",
      "learning",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "work_008",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Rekan kerja meminta bantuan, tapi tugasmu sendiri belum selesai. Ia berdiri di samping meja sambil membawa map.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "work_008_a",
        "text": "Aku bertanya bagian mana yang paling mendesak, lalu memberi bantuan yang tidak merusak batas waktuku.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Te": 2,
            "Fi": 1.5,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "T": 0.8,
            "J": 1,
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "auxiliary": 0.6,
            "dominant": 1.0,
            "opposing": 0.4
          },
          "evidence": {
            "practicalRepair": 1,
            "systemFirst": 0.8,
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "peopleFirst": 1
          },
          "positive": {
            "clearNextStep": 1,
            "keptSelfRespect": 1,
            "warmPresence": 1
          },
          "negative": {
            "looseProcess": -0.8,
            "selfErasure": -0.8,
            "unseenNeed": -0.7
          },
          "work": {
            "planner": 0.8,
            "executor": 0.6,
            "helper": 0.5
          },
          "disc": {
            "C": 0.4,
            "D": 0.4
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.5
          },
          "conflict": {
            "boundaryCutoff": 0.5
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
          "relationship": {
            "repairSeeking": 0.5
          },
          "riasec": {
            "Social": 0.7
          },
          "reliability": 0.84
        }
      },
      {
        "id": "work_008_b",
        "text": "Aku menolong dulu karena ia tampak hampir runtuh, lalu mengejar pekerjaanku setelahnya.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "2": 1.0
          },
          "coreFear": {
            "unwanted": 0.7
          },
          "coreDesire": {
            "needed": 0.7
          },
          "relationship": {
            "repairSeeking": 1.3,
            "secureLeaning": 0.5
          },
          "work": {
            "helper": 0.5
          },
          "riasec": {
            "Social": 0.7
          },
          "positive": {
            "warmPresence": 1,
            "softRepair": 1,
            "stayedFunctional": 0.6
          },
          "negative": {
            "unseenNeed": -0.7,
            "coldCut": -0.8,
            "burnedSelf": -0.5
          },
          "evidence": {
            "peopleFirst": 2,
            "repairSeeking": 0.8,
            "riskAvoidance": 0.3
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
          "stress": {
            "control": 0.4,
            "perform": 0.3
          },
          "defense": {
            "overExplaining": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "work_008_a",
      "text": "Aku bertanya bagian mana yang paling mendesak, lalu memberi bantuan yang tidak merusak batas waktuku.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Te": 2,
          "Fi": 1.5,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "T": 0.8,
          "J": 1,
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "auxiliary": 0.6,
          "dominant": 1.0,
          "opposing": 0.4
        },
        "evidence": {
          "practicalRepair": 1,
          "systemFirst": 0.8,
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "peopleFirst": 1
        },
        "positive": {
          "clearNextStep": 1,
          "keptSelfRespect": 1,
          "warmPresence": 1
        },
        "negative": {
          "looseProcess": -0.8,
          "selfErasure": -0.8,
          "unseenNeed": -0.7
        },
        "work": {
          "planner": 0.8,
          "executor": 0.6,
          "helper": 0.5
        },
        "disc": {
          "C": 0.4,
          "D": 0.4
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.5
        },
        "conflict": {
          "boundaryCutoff": 0.5
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
        "relationship": {
          "repairSeeking": 0.5
        },
        "riasec": {
          "Social": 0.7
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "work_008_b",
      "text": "Aku menolong dulu karena ia tampak hampir runtuh, lalu mengejar pekerjaanku setelahnya.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "2": 1.0
        },
        "coreFear": {
          "unwanted": 0.7
        },
        "coreDesire": {
          "needed": 0.7
        },
        "relationship": {
          "repairSeeking": 1.3,
          "secureLeaning": 0.5
        },
        "work": {
          "helper": 0.5
        },
        "riasec": {
          "Social": 0.7
        },
        "positive": {
          "warmPresence": 1,
          "softRepair": 1,
          "stayedFunctional": 0.6
        },
        "negative": {
          "unseenNeed": -0.7,
          "coldCut": -0.8,
          "burnedSelf": -0.5
        },
        "evidence": {
          "peopleFirst": 2,
          "repairSeeking": 0.8,
          "riskAvoidance": 0.3
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
        "stress": {
          "control": 0.4,
          "perform": 0.3
        },
        "defense": {
          "overExplaining": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "work",
      "relationship",
      "decision",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "relationship",
      "decision",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "work_009",
    "kind": "forcedChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Saat presentasi, teman satu tim lupa bagiannya. Semua mata pindah ke arahmu.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "work_009_a",
        "text": "Aku mengambil satu kalimat penghubung agar ia punya waktu mengingat tanpa terlihat jatuh.",
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
            "directEngagement": 0.4
          },
          "positive": {
            "softRepair": 1,
            "socialBridge": 1,
            "clearWords": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "privateTunnel": -0.6,
            "muddyMessage": -0.5
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5,
            "belongingSeeking": 0.8
          },
          "communication": {
            "gentle": 1.3,
            "expressive": 0.8,
            "direct": 0.5
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
      {
        "id": "work_009_b",
        "text": "Aku langsung melanjutkan bagian berikutnya supaya presentasi tetap berjalan.",
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
            "actionFirst": 1.8,
            "directEngagement": 0.9,
            "practicalRepair": 1,
            "systemFirst": 0.8
          },
          "positive": {
            "presentMove": 1,
            "tookResponsibility": 1,
            "clearNextStep": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "waitingPermission": -0.7,
            "looseProcess": -0.8
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 1.6,
            "I": 0.3,
            "C": 0.4
          },
          "riasec": {
            "Enterprising": 0.8
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
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "work_009_a",
      "text": "Aku mengambil satu kalimat penghubung agar ia punya waktu mengingat tanpa terlihat jatuh.",
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
          "directEngagement": 0.4
        },
        "positive": {
          "softRepair": 1,
          "socialBridge": 1,
          "clearWords": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "privateTunnel": -0.6,
          "muddyMessage": -0.5
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5,
          "belongingSeeking": 0.8
        },
        "communication": {
          "gentle": 1.3,
          "expressive": 0.8,
          "direct": 0.5
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
    "right": {
      "id": "work_009_b",
      "text": "Aku langsung melanjutkan bagian berikutnya supaya presentasi tetap berjalan.",
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
          "actionFirst": 1.8,
          "directEngagement": 0.9,
          "practicalRepair": 1,
          "systemFirst": 0.8
        },
        "positive": {
          "presentMove": 1,
          "tookResponsibility": 1,
          "clearNextStep": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "waitingPermission": -0.7,
          "looseProcess": -0.8
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 1.6,
          "I": 0.3,
          "C": 0.4
        },
        "riasec": {
          "Enterprising": 0.8
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
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "work",
      "disc",
      "communication",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "disc",
      "communication",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  }
];
