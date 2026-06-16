import type { QuestionItem } from "../types";

export const FINAL_TRAIT_QUESTIONS: QuestionItem[] = [
  {
    "id": "ftrait_001",
    "kind": "multiChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di teras minimarket setelah hujan, layar HP menyala dengan pesan pendek dari orang yang beberapa hari ini membuat dadamu tidak tenang. Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih 1 sampai 2 yang paling dekat. Maksimal 2.",
    "options": [
      {
        "id": "ftrait_001_a",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "Extraversion": 1.2,
            "Withdrawal": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "ftrait_001_b",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Agreeableness": 1.4,
            "Extraversion": -0.3
          },
          "hexaco": {
            "Agreeableness": 1.3,
            "Retaliation": -0.5
          },
          "reliability": 0.83
        }
      },
      {
        "id": "ftrait_001_c",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 3",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.5
          },
          "mbtiTypeSupport": {
            "ISFJ": 0.6,
            "ISTJ": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "auxiliary": 0.3
          },
          "shadowRole": {
            "critical": 0.2
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.6
          },
          "positive": {
            "carefulRecall": 1
          },
          "negative": {
            "noveltyRush": -0.8
          },
          "bigFive": {
            "Neuroticism": 1.2,
            "EmotionalStability": -0.5
          },
          "hexaco": {
            "Conscientiousness": 1.5,
            "Carelessness": -0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "ftrait_001_d",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 4",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.3
          },
          "mbtiTypeSupport": {
            "ESTP": 0.7,
            "ESFP": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "inferior": 0.3
          },
          "shadowRole": {
            "transformative": 0.2
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.8
          },
          "bigFive": {
            "Openness": 1.4,
            "Conscientiousness": -0.4
          },
          "hexaco": {
            "Openness": 1.4,
            "ClosedPreference": -0.4
          },
          "reliability": 0.85
        }
      },
      {
        "id": "ftrait_001_e",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 5",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": -0.6
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFP": 0.7,
            "ISFP": 0.6
          },
          "stackRole": {
            "dominant": 0.5,
            "critical": 0.3
          },
          "shadowRole": {
            "critical": 0.3
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.7
          },
          "positive": {
            "innerLineHeld": 1
          },
          "negative": {
            "socialOverMerging": -0.7
          },
          "bigFive": {
            "Conscientiousness": 1.5,
            "Neuroticism": -0.3
          },
          "hexaco": {
            "HonestyHumility": 1.6,
            "Manipulativeness": -0.7
          },
          "reliability": 0.87
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "ftrait_002",
    "kind": "ranking",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Koridor kampus ramai, kertas tugasmu terlipat di tangan, dan satu teman berkata, “namamu ikut saja, ya.” Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "ftrait_002_a",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Agreeableness": 1.4,
            "Extraversion": -0.3
          },
          "hexaco": {
            "Agreeableness": 1.3,
            "Retaliation": -0.5
          },
          "reliability": 0.83
        }
      },
      {
        "id": "ftrait_002_b",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Neuroticism": 1.2,
            "EmotionalStability": -0.5
          },
          "hexaco": {
            "Conscientiousness": 1.5,
            "Carelessness": -0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "ftrait_002_c",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 3",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.5
          },
          "mbtiTypeSupport": {
            "ISFJ": 0.6,
            "ISTJ": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "auxiliary": 0.3
          },
          "shadowRole": {
            "critical": 0.2
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.6
          },
          "positive": {
            "carefulRecall": 1
          },
          "negative": {
            "noveltyRush": -0.8
          },
          "bigFive": {
            "Openness": 1.4,
            "Conscientiousness": -0.4
          },
          "hexaco": {
            "Openness": 1.4,
            "ClosedPreference": -0.4
          },
          "reliability": 0.85
        }
      },
      {
        "id": "ftrait_002_d",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 4",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.3
          },
          "mbtiTypeSupport": {
            "ESTP": 0.7,
            "ESFP": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "inferior": 0.3
          },
          "shadowRole": {
            "transformative": 0.2
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.8
          },
          "bigFive": {
            "Conscientiousness": 1.5,
            "Neuroticism": -0.3
          },
          "hexaco": {
            "HonestyHumility": 1.6,
            "Manipulativeness": -0.7
          },
          "reliability": 0.87
        }
      },
      {
        "id": "ftrait_002_e",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 5",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": -0.6
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFP": 0.7,
            "ISFP": 0.6
          },
          "stackRole": {
            "dominant": 0.5,
            "critical": 0.3
          },
          "shadowRole": {
            "critical": 0.3
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.7
          },
          "positive": {
            "innerLineHeld": 1
          },
          "negative": {
            "socialOverMerging": -0.7
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "Emotionality": 1.4,
            "RiskHardness": -0.4
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "ftrait_003",
    "kind": "firstReaction",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di kamar yang lampunya redup, dompet terbuka di kasur dan notifikasi tagihan masuk saat saldo tinggal sedikit. Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "ftrait_003_a",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Neuroticism": 1.2,
            "EmotionalStability": -0.5
          },
          "hexaco": {
            "Conscientiousness": 1.5,
            "Carelessness": -0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "ftrait_003_b",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Openness": 1.4,
            "Conscientiousness": -0.4
          },
          "hexaco": {
            "Openness": 1.4,
            "ClosedPreference": -0.4
          },
          "reliability": 0.85
        }
      },
      {
        "id": "ftrait_003_c",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 3",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.5
          },
          "mbtiTypeSupport": {
            "ISFJ": 0.6,
            "ISTJ": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "auxiliary": 0.3
          },
          "shadowRole": {
            "critical": 0.2
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.6
          },
          "positive": {
            "carefulRecall": 1
          },
          "negative": {
            "noveltyRush": -0.8
          },
          "bigFive": {
            "Conscientiousness": 1.5,
            "Neuroticism": -0.3
          },
          "hexaco": {
            "HonestyHumility": 1.6,
            "Manipulativeness": -0.7
          },
          "reliability": 0.87
        }
      },
      {
        "id": "ftrait_003_d",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 4",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.3
          },
          "mbtiTypeSupport": {
            "ESTP": 0.7,
            "ESFP": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "inferior": 0.3
          },
          "shadowRole": {
            "transformative": 0.2
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.8
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "Emotionality": 1.4,
            "RiskHardness": -0.4
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "ftrait_004",
    "kind": "hiddenReaction",
    "context": {
      "domain": "stress",
      "pressureLevel": "crisis",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Ruangan mendadak sunyi setelah seseorang menaikkan suara. Semua mata berpindah ke arahmu sebelum kau sempat bernapas panjang. Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi yang paling mungkin kau sembunyikan dari orang lain.",
    "options": [
      {
        "id": "ftrait_004_a",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Openness": 1.4,
            "Conscientiousness": -0.4
          },
          "hexaco": {
            "Openness": 1.4,
            "ClosedPreference": -0.4
          },
          "reliability": 0.85
        }
      },
      {
        "id": "ftrait_004_b",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Conscientiousness": 1.5,
            "Neuroticism": -0.3
          },
          "hexaco": {
            "HonestyHumility": 1.6,
            "Manipulativeness": -0.7
          },
          "reliability": 0.87
        }
      },
      {
        "id": "ftrait_004_c",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 3",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.5
          },
          "mbtiTypeSupport": {
            "ISFJ": 0.6,
            "ISTJ": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "auxiliary": 0.3
          },
          "shadowRole": {
            "critical": 0.2
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.6
          },
          "positive": {
            "carefulRecall": 1
          },
          "negative": {
            "noveltyRush": -0.8
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "Emotionality": 1.4,
            "RiskHardness": -0.4
          },
          "reliability": 0.89
        }
      },
      {
        "id": "ftrait_004_d",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 4",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.3
          },
          "mbtiTypeSupport": {
            "ESTP": 0.7,
            "ESFP": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "inferior": 0.3
          },
          "shadowRole": {
            "transformative": 0.2
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.8
          },
          "bigFive": {
            "Agreeableness": 1.4,
            "Extraversion": -0.3
          },
          "hexaco": {
            "Extraversion": 1.2,
            "Withdrawal": -0.3
          },
          "reliability": 0.9
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "ftrait_005",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di kafe kecil, sahabatmu tertawa dengan orang lain, tapi ketika menoleh padamu senyumnya seperti tertahan setengah jalan. Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "ftrait_005_a",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Conscientiousness": 1.5,
            "Neuroticism": -0.3
          },
          "hexaco": {
            "HonestyHumility": 1.6,
            "Manipulativeness": -0.7
          },
          "reliability": 0.87
        }
      },
      {
        "id": "ftrait_005_b",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "Emotionality": 1.4,
            "RiskHardness": -0.4
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "ftrait_005_a",
      "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
      "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
      "weights": {
        "cognitive": {
          "Ni": 2,
          "Se": -0.7
        },
        "mbtiAxis": {
          "N": 1,
          "I": 0.4
        },
        "mbtiTypeSupport": {
          "INFJ": 0.7,
          "INTJ": 0.7
        },
        "stackRole": {
          "dominant": 0.8,
          "opposing": 0.2
        },
        "shadowRole": {
          "opposing": 0.4
        },
        "evidence": {
          "observeFirst": 1,
          "indirectEngagement": 0.6
        },
        "positive": {
          "patientReading": 1
        },
        "negative": {
          "impulsiveAction": -0.7
        },
        "bigFive": {
          "Conscientiousness": 1.5,
          "Neuroticism": -0.3
        },
        "hexaco": {
          "HonestyHumility": 1.6,
          "Manipulativeness": -0.7
        },
        "reliability": 0.87
      }
    },
    "right": {
      "id": "ftrait_005_b",
      "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
      "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
      "weights": {
        "cognitive": {
          "Ne": 2,
          "Si": -0.7
        },
        "mbtiAxis": {
          "N": 1,
          "P": 0.6
        },
        "mbtiTypeSupport": {
          "ENFP": 0.6,
          "ENTP": 0.6
        },
        "stackRole": {
          "auxiliary": 0.6,
          "tertiary": 0.4
        },
        "shadowRole": {
          "trickster": 0.2
        },
        "evidence": {
          "possibilitySeeking": 1,
          "ambiguityTolerance": 0.7
        },
        "positive": {
          "openReframing": 1
        },
        "negative": {
          "rigidRoutine": -0.7
        },
        "bigFive": {
          "Extraversion": 1.4,
          "Agreeableness": -0.3
        },
        "hexaco": {
          "Emotionality": 1.4,
          "RiskHardness": -0.4
        },
        "reliability": 0.89
      }
    }
  },
  {
    "id": "ftrait_006",
    "kind": "singleChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau duduk di dekat jendela, membayangkan seseorang yang mungkin bisa menjadi tempat pulang tanpa membuatmu kehilangan diri. Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "ftrait_006_a",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "Emotionality": 1.4,
            "RiskHardness": -0.4
          },
          "reliability": 0.89
        }
      },
      {
        "id": "ftrait_006_b",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Agreeableness": 1.4,
            "Extraversion": -0.3
          },
          "hexaco": {
            "Extraversion": 1.2,
            "Withdrawal": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "ftrait_006_c",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 3",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.5
          },
          "mbtiTypeSupport": {
            "ISFJ": 0.6,
            "ISTJ": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "auxiliary": 0.3
          },
          "shadowRole": {
            "critical": 0.2
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.6
          },
          "positive": {
            "carefulRecall": 1
          },
          "negative": {
            "noveltyRush": -0.8
          },
          "bigFive": {
            "Neuroticism": 1.2,
            "EmotionalStability": -0.5
          },
          "hexaco": {
            "Agreeableness": 1.3,
            "Retaliation": -0.5
          },
          "reliability": 0.78
        }
      },
      {
        "id": "ftrait_006_d",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 4",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.3
          },
          "mbtiTypeSupport": {
            "ESTP": 0.7,
            "ESFP": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "inferior": 0.3
          },
          "shadowRole": {
            "transformative": 0.2
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.8
          },
          "bigFive": {
            "Openness": 1.4,
            "Conscientiousness": -0.4
          },
          "hexaco": {
            "Conscientiousness": 1.5,
            "Carelessness": -0.5
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.9,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "ftrait_007",
    "kind": "multiChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Setelah hari terasa terlalu panjang, kau masuk kamar dan melihat tiga benda kecil di meja yang masing-masing seperti memanggil sisi berbeda dari dirimu. Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih 1 sampai 2 yang paling dekat. Maksimal 2.",
    "options": [
      {
        "id": "ftrait_007_a",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Agreeableness": 1.4,
            "Extraversion": -0.3
          },
          "hexaco": {
            "Extraversion": 1.2,
            "Withdrawal": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "ftrait_007_b",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Neuroticism": 1.2,
            "EmotionalStability": -0.5
          },
          "hexaco": {
            "Agreeableness": 1.3,
            "Retaliation": -0.5
          },
          "reliability": 0.78
        }
      },
      {
        "id": "ftrait_007_c",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 3",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.5
          },
          "mbtiTypeSupport": {
            "ISFJ": 0.6,
            "ISTJ": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "auxiliary": 0.3
          },
          "shadowRole": {
            "critical": 0.2
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.6
          },
          "positive": {
            "carefulRecall": 1
          },
          "negative": {
            "noveltyRush": -0.8
          },
          "bigFive": {
            "Openness": 1.4,
            "Conscientiousness": -0.4
          },
          "hexaco": {
            "Conscientiousness": 1.5,
            "Carelessness": -0.5
          },
          "reliability": 0.8
        }
      },
      {
        "id": "ftrait_007_d",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 4",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.3
          },
          "mbtiTypeSupport": {
            "ESTP": 0.7,
            "ESFP": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "inferior": 0.3
          },
          "shadowRole": {
            "transformative": 0.2
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.8
          },
          "bigFive": {
            "Conscientiousness": 1.5,
            "Neuroticism": -0.3
          },
          "hexaco": {
            "Openness": 1.4,
            "ClosedPreference": -0.4
          },
          "reliability": 0.81
        }
      },
      {
        "id": "ftrait_007_e",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 5",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": -0.6
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFP": 0.7,
            "ISFP": 0.6
          },
          "stackRole": {
            "dominant": 0.5,
            "critical": 0.3
          },
          "shadowRole": {
            "critical": 0.3
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.7
          },
          "positive": {
            "innerLineHeld": 1
          },
          "negative": {
            "socialOverMerging": -0.7
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "HonestyHumility": 1.6,
            "Manipulativeness": -0.7
          },
          "reliability": 0.83
        }
      }
    ],
    "reliability": 0.78,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "ftrait_008",
    "kind": "ranking",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di chat grup keluarga, satu kebohongan kecil diminta ditutup karena katanya “yang penting semua tenang dulu.” Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "ftrait_008_a",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Neuroticism": 1.2,
            "EmotionalStability": -0.5
          },
          "hexaco": {
            "Agreeableness": 1.3,
            "Retaliation": -0.5
          },
          "reliability": 0.78
        }
      },
      {
        "id": "ftrait_008_b",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Openness": 1.4,
            "Conscientiousness": -0.4
          },
          "hexaco": {
            "Conscientiousness": 1.5,
            "Carelessness": -0.5
          },
          "reliability": 0.8
        }
      },
      {
        "id": "ftrait_008_c",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 3",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.5
          },
          "mbtiTypeSupport": {
            "ISFJ": 0.6,
            "ISTJ": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "auxiliary": 0.3
          },
          "shadowRole": {
            "critical": 0.2
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.6
          },
          "positive": {
            "carefulRecall": 1
          },
          "negative": {
            "noveltyRush": -0.8
          },
          "bigFive": {
            "Conscientiousness": 1.5,
            "Neuroticism": -0.3
          },
          "hexaco": {
            "Openness": 1.4,
            "ClosedPreference": -0.4
          },
          "reliability": 0.81
        }
      },
      {
        "id": "ftrait_008_d",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 4",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.3
          },
          "mbtiTypeSupport": {
            "ESTP": 0.7,
            "ESFP": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "inferior": 0.3
          },
          "shadowRole": {
            "transformative": 0.2
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.8
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "HonestyHumility": 1.6,
            "Manipulativeness": -0.7
          },
          "reliability": 0.83
        }
      },
      {
        "id": "ftrait_008_e",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 5",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": -0.6
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFP": 0.7,
            "ISFP": 0.6
          },
          "stackRole": {
            "dominant": 0.5,
            "critical": 0.3
          },
          "shadowRole": {
            "critical": 0.3
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.7
          },
          "positive": {
            "innerLineHeld": 1
          },
          "negative": {
            "socialOverMerging": -0.7
          },
          "bigFive": {
            "Agreeableness": 1.4,
            "Extraversion": -0.3
          },
          "hexaco": {
            "Emotionality": 1.4,
            "RiskHardness": -0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "ftrait_009",
    "kind": "firstReaction",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di halte yang basah, rencana berubah lagi. Tasmu berat, baterai HP menipis, dan orang di sampingmu terus bertanya harus bagaimana. Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "ftrait_009_a",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Openness": 1.4,
            "Conscientiousness": -0.4
          },
          "hexaco": {
            "Conscientiousness": 1.5,
            "Carelessness": -0.5
          },
          "reliability": 0.8
        }
      },
      {
        "id": "ftrait_009_b",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Conscientiousness": 1.5,
            "Neuroticism": -0.3
          },
          "hexaco": {
            "Openness": 1.4,
            "ClosedPreference": -0.4
          },
          "reliability": 0.81
        }
      },
      {
        "id": "ftrait_009_c",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 3",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.5
          },
          "mbtiTypeSupport": {
            "ISFJ": 0.6,
            "ISTJ": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "auxiliary": 0.3
          },
          "shadowRole": {
            "critical": 0.2
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.6
          },
          "positive": {
            "carefulRecall": 1
          },
          "negative": {
            "noveltyRush": -0.8
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "HonestyHumility": 1.6,
            "Manipulativeness": -0.7
          },
          "reliability": 0.83
        }
      },
      {
        "id": "ftrait_009_d",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 4",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.3
          },
          "mbtiTypeSupport": {
            "ESTP": 0.7,
            "ESFP": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "inferior": 0.3
          },
          "shadowRole": {
            "transformative": 0.2
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.8
          },
          "bigFive": {
            "Agreeableness": 1.4,
            "Extraversion": -0.3
          },
          "hexaco": {
            "Emotionality": 1.4,
            "RiskHardness": -0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "ftrait_010",
    "kind": "hiddenReaction",
    "context": {
      "domain": "identity",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di depan cermin kamar mandi, air keran masih menyala dan kalimat pujian tadi justru terasa seperti pakaian yang ukurannya salah. Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi yang paling mungkin kau sembunyikan dari orang lain.",
    "options": [
      {
        "id": "ftrait_010_a",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Conscientiousness": 1.5,
            "Neuroticism": -0.3
          },
          "hexaco": {
            "Openness": 1.4,
            "ClosedPreference": -0.4
          },
          "reliability": 0.81
        }
      },
      {
        "id": "ftrait_010_b",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "HonestyHumility": 1.6,
            "Manipulativeness": -0.7
          },
          "reliability": 0.83
        }
      },
      {
        "id": "ftrait_010_c",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 3",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.5
          },
          "mbtiTypeSupport": {
            "ISFJ": 0.6,
            "ISTJ": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "auxiliary": 0.3
          },
          "shadowRole": {
            "critical": 0.2
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.6
          },
          "positive": {
            "carefulRecall": 1
          },
          "negative": {
            "noveltyRush": -0.8
          },
          "bigFive": {
            "Agreeableness": 1.4,
            "Extraversion": -0.3
          },
          "hexaco": {
            "Emotionality": 1.4,
            "RiskHardness": -0.4
          },
          "reliability": 0.84
        }
      },
      {
        "id": "ftrait_010_d",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 4",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.3
          },
          "mbtiTypeSupport": {
            "ESTP": 0.7,
            "ESFP": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "inferior": 0.3
          },
          "shadowRole": {
            "transformative": 0.2
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.8
          },
          "bigFive": {
            "Neuroticism": 1.2,
            "EmotionalStability": -0.5
          },
          "hexaco": {
            "Extraversion": 1.2,
            "Withdrawal": -0.3
          },
          "reliability": 0.85
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "ftrait_011",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Dapur rumah pukul sembilan malam, sendok berhenti di bibir mangkuk ketika seseorang menyebut nama yang biasanya dihindari. Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "ftrait_011_a",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Extraversion": 1.4,
            "Agreeableness": -0.3
          },
          "hexaco": {
            "HonestyHumility": 1.6,
            "Manipulativeness": -0.7
          },
          "reliability": 0.83
        }
      },
      {
        "id": "ftrait_011_b",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Agreeableness": 1.4,
            "Extraversion": -0.3
          },
          "hexaco": {
            "Emotionality": 1.4,
            "RiskHardness": -0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "ftrait_011_a",
      "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
      "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
      "weights": {
        "cognitive": {
          "Ni": 2,
          "Se": -0.7
        },
        "mbtiAxis": {
          "N": 1,
          "I": 0.4
        },
        "mbtiTypeSupport": {
          "INFJ": 0.7,
          "INTJ": 0.7
        },
        "stackRole": {
          "dominant": 0.8,
          "opposing": 0.2
        },
        "shadowRole": {
          "opposing": 0.4
        },
        "evidence": {
          "observeFirst": 1,
          "indirectEngagement": 0.6
        },
        "positive": {
          "patientReading": 1
        },
        "negative": {
          "impulsiveAction": -0.7
        },
        "bigFive": {
          "Extraversion": 1.4,
          "Agreeableness": -0.3
        },
        "hexaco": {
          "HonestyHumility": 1.6,
          "Manipulativeness": -0.7
        },
        "reliability": 0.83
      }
    },
    "right": {
      "id": "ftrait_011_b",
      "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
      "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
      "weights": {
        "cognitive": {
          "Ne": 2,
          "Si": -0.7
        },
        "mbtiAxis": {
          "N": 1,
          "P": 0.6
        },
        "mbtiTypeSupport": {
          "ENFP": 0.6,
          "ENTP": 0.6
        },
        "stackRole": {
          "auxiliary": 0.6,
          "tertiary": 0.4
        },
        "shadowRole": {
          "trickster": 0.2
        },
        "evidence": {
          "possibilitySeeking": 1,
          "ambiguityTolerance": 0.7
        },
        "positive": {
          "openReframing": 1
        },
        "negative": {
          "rigidRoutine": -0.7
        },
        "bigFive": {
          "Agreeableness": 1.4,
          "Extraversion": -0.3
        },
        "hexaco": {
          "Emotionality": 1.4,
          "RiskHardness": -0.4
        },
        "reliability": 0.84
      }
    }
  },
  {
    "id": "ftrait_012",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Meja rapat penuh gelas plastik, layar laptop membeku, dan chat grup mulai menagih keputusan yang belum siap. Big Five dan HEXACO tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "ftrait_012_a",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 1",
        "weights": {
          "cognitive": {
            "Ni": 2,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "mbtiTypeSupport": {
            "INFJ": 0.7,
            "INTJ": 0.7
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.2
          },
          "shadowRole": {
            "opposing": 0.4
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.6
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "bigFive": {
            "Agreeableness": 1.4,
            "Extraversion": -0.3
          },
          "hexaco": {
            "Emotionality": 1.4,
            "RiskHardness": -0.4
          },
          "reliability": 0.84
        }
      },
      {
        "id": "ftrait_012_b",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 2",
        "weights": {
          "cognitive": {
            "Ne": 2,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.6
          },
          "mbtiTypeSupport": {
            "ENFP": 0.6,
            "ENTP": 0.6
          },
          "stackRole": {
            "auxiliary": 0.6,
            "tertiary": 0.4
          },
          "shadowRole": {
            "trickster": 0.2
          },
          "evidence": {
            "possibilitySeeking": 1,
            "ambiguityTolerance": 0.7
          },
          "positive": {
            "openReframing": 1
          },
          "negative": {
            "rigidRoutine": -0.7
          },
          "bigFive": {
            "Neuroticism": 1.2,
            "EmotionalStability": -0.5
          },
          "hexaco": {
            "Extraversion": 1.2,
            "Withdrawal": -0.3
          },
          "reliability": 0.85
        }
      },
      {
        "id": "ftrait_012_c",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 3",
        "weights": {
          "cognitive": {
            "Si": 2,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.5
          },
          "mbtiTypeSupport": {
            "ISFJ": 0.6,
            "ISTJ": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "auxiliary": 0.3
          },
          "shadowRole": {
            "critical": 0.2
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.6
          },
          "positive": {
            "carefulRecall": 1
          },
          "negative": {
            "noveltyRush": -0.8
          },
          "bigFive": {
            "Openness": 1.4,
            "Conscientiousness": -0.4
          },
          "hexaco": {
            "Agreeableness": 1.3,
            "Retaliation": -0.5
          },
          "reliability": 0.87
        }
      },
      {
        "id": "ftrait_012_d",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal bigFive, hexaco opsi 4",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.3
          },
          "mbtiTypeSupport": {
            "ESTP": 0.7,
            "ESFP": 0.6
          },
          "stackRole": {
            "dominant": 0.6,
            "inferior": 0.3
          },
          "shadowRole": {
            "transformative": 0.2
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.8
          },
          "bigFive": {
            "Conscientiousness": 1.5,
            "Neuroticism": -0.3
          },
          "hexaco": {
            "Conscientiousness": 1.5,
            "Carelessness": -0.5
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "bigFive",
      "hexaco",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "bigFive",
      "hexaco"
    ],
    "batchTag": "tahap-3-final-coverage"
  }
];
