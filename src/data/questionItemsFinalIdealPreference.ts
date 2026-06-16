import type { QuestionItem } from "../types";

export const FINAL_IDEAL_PREFERENCE_QUESTIONS: QuestionItem[] = [
  {
    "id": "fideal_001",
    "kind": "hiddenReaction",
    "context": {
      "domain": "identity",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di depan cermin kamar mandi, air keran masih menyala dan kalimat pujian tadi justru terasa seperti pakaian yang ukurannya salah. Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Pilih reaksi yang mungkin tetap kau simpan di dalam.",
    "options": [
      {
        "id": "fideal_001_a",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealIntensity": 1.4,
            "idealStability": -0.2
          },
          "loveStyle": {
            "verbalReassurance": 1.4,
            "minimalResponse": -0.2
          },
          "environment": {
            "livelyPlace": 1.4,
            "quietRoom": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "autonomy": 1.3,
            "merging": -0.2
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fideal_001_b",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealStability": 1.4,
            "idealFreedom": -0.2
          },
          "loveStyle": {
            "practicalCare": 1.4,
            "sharedDream": -0.2
          },
          "environment": {
            "familiarPlace": 1.4,
            "newPlace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "freedom": 1.3,
            "security": -0.2
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fideal_001_c",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 3",
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
          "idealPartner": {
            "idealFreedom": 1.4,
            "idealAdmiration": -0.2
          },
          "loveStyle": {
            "emotionalDepth": 1.4,
            "respectfulSpace": -0.2
          },
          "environment": {
            "newPlace": 1.4,
            "familiarPlace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "security": 1.3,
            "noveltySeeking": -0.2
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fideal_001_d",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 4",
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
          "idealPartner": {
            "idealAdmiration": 1.4,
            "idealHonesty": -0.2
          },
          "loveStyle": {
            "playfulBond": 1.4,
            "steadyPresence": -0.2
          },
          "environment": {
            "organizedSpace": 1.4,
            "softCozySpace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "truth": 1.3,
            "belonging": -0.2
          },
          "reliability": 0.85
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fideal_002",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Dapur rumah pukul sembilan malam, sendok berhenti di bibir mangkuk ketika seseorang menyebut nama yang biasanya dihindari. Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "fideal_002_a",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealStability": 1.4,
            "idealFreedom": -0.2
          },
          "loveStyle": {
            "practicalCare": 1.4,
            "sharedDream": -0.2
          },
          "environment": {
            "familiarPlace": 1.4,
            "newPlace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "freedom": 1.3,
            "security": -0.2
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fideal_002_b",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealFreedom": 1.4,
            "idealAdmiration": -0.2
          },
          "loveStyle": {
            "emotionalDepth": 1.4,
            "respectfulSpace": -0.2
          },
          "environment": {
            "newPlace": 1.4,
            "familiarPlace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "security": 1.3,
            "noveltySeeking": -0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "fideal_002_a",
      "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
      "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
        "idealPartner": {
          "idealStability": 1.4,
          "idealFreedom": -0.2
        },
        "loveStyle": {
          "practicalCare": 1.4,
          "sharedDream": -0.2
        },
        "environment": {
          "familiarPlace": 1.4,
          "newPlace": -0.2
        },
        "instinct": {
          "sp": 1.6,
          "sx": -0.3
        },
        "values": {
          "freedom": 1.3,
          "security": -0.2
        },
        "reliability": 0.83
      }
    },
    "right": {
      "id": "fideal_002_b",
      "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
      "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
        "idealPartner": {
          "idealFreedom": 1.4,
          "idealAdmiration": -0.2
        },
        "loveStyle": {
          "emotionalDepth": 1.4,
          "respectfulSpace": -0.2
        },
        "environment": {
          "newPlace": 1.4,
          "familiarPlace": -0.2
        },
        "instinct": {
          "sx": 1.6,
          "so": -0.3
        },
        "values": {
          "security": 1.3,
          "noveltySeeking": -0.2
        },
        "reliability": 0.84
      }
    }
  },
  {
    "id": "fideal_003",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Meja rapat penuh gelas plastik, layar laptop membeku, dan chat grup mulai menagih keputusan yang belum siap. Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "fideal_003_a",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealFreedom": 1.4,
            "idealAdmiration": -0.2
          },
          "loveStyle": {
            "emotionalDepth": 1.4,
            "respectfulSpace": -0.2
          },
          "environment": {
            "newPlace": 1.4,
            "familiarPlace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "security": 1.3,
            "noveltySeeking": -0.2
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fideal_003_b",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealAdmiration": 1.4,
            "idealHonesty": -0.2
          },
          "loveStyle": {
            "playfulBond": 1.4,
            "steadyPresence": -0.2
          },
          "environment": {
            "organizedSpace": 1.4,
            "softCozySpace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "truth": 1.3,
            "belonging": -0.2
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fideal_003_c",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 3",
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
          "idealPartner": {
            "idealHonesty": 1.4,
            "idealMystery": -0.2
          },
          "loveStyle": {
            "protectiveLoyalty": 1.4,
            "idealFreedom": -0.2
          },
          "environment": {
            "softCozySpace": 1.4,
            "functionalSpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "love": 1.3,
            "autonomy": -0.2
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fideal_003_d",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 4",
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
          "idealPartner": {
            "idealTenderness": 1.4,
            "idealCompetence": -0.2
          },
          "loveStyle": {
            "intellectualConnection": 1.4,
            "physicalComfort": -0.2
          },
          "environment": {
            "beautifulSpace": 1.4,
            "functionalSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "competence": 1.3,
            "comfortSeeking": -0.2
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fideal_004",
    "kind": "multiChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di teras minimarket setelah hujan, layar HP menyala dengan pesan pendek dari orang yang beberapa hari ini membuat dadamu tidak tenang. Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Pilih 1 sampai 2 respons. Maksimal 2.",
    "options": [
      {
        "id": "fideal_004_a",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealAdmiration": 1.4,
            "idealHonesty": -0.2
          },
          "loveStyle": {
            "playfulBond": 1.4,
            "steadyPresence": -0.2
          },
          "environment": {
            "organizedSpace": 1.4,
            "softCozySpace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "truth": 1.3,
            "belonging": -0.2
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fideal_004_b",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealHonesty": 1.4,
            "idealMystery": -0.2
          },
          "loveStyle": {
            "protectiveLoyalty": 1.4,
            "idealFreedom": -0.2
          },
          "environment": {
            "softCozySpace": 1.4,
            "functionalSpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "love": 1.3,
            "autonomy": -0.2
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fideal_004_c",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 3",
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
          "idealPartner": {
            "idealTenderness": 1.4,
            "idealCompetence": -0.2
          },
          "loveStyle": {
            "intellectualConnection": 1.4,
            "physicalComfort": -0.2
          },
          "environment": {
            "beautifulSpace": 1.4,
            "functionalSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "competence": 1.3,
            "comfortSeeking": -0.2
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fideal_004_d",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 4",
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
          "idealPartner": {
            "idealCompetence": 1.4,
            "idealTenderness": -0.2
          },
          "loveStyle": {
            "physicalComfort": 1.4,
            "intellectualConnection": -0.2
          },
          "environment": {
            "functionalSpace": 1.4,
            "beautifulSpace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "beauty": 1.3,
            "functionalSpace": -0.2
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fideal_004_e",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 5",
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
          "idealPartner": {
            "idealMystery": 1.4,
            "idealStability": -0.2
          },
          "loveStyle": {
            "sharedDream": 1.4,
            "practicalCare": -0.2
          },
          "environment": {
            "privateSpace": 1.4,
            "sociallyWarmSpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "peace": 1.3,
            "intensitySeeking": -0.2
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "fideal_005",
    "kind": "ranking",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Koridor kampus ramai, kertas tugasmu terlipat di tangan, dan satu teman berkata, “namamu ikut saja, ya.” Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "fideal_005_a",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealHonesty": 1.4,
            "idealMystery": -0.2
          },
          "loveStyle": {
            "protectiveLoyalty": 1.4,
            "idealFreedom": -0.2
          },
          "environment": {
            "softCozySpace": 1.4,
            "functionalSpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "love": 1.3,
            "autonomy": -0.2
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fideal_005_b",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealTenderness": 1.4,
            "idealCompetence": -0.2
          },
          "loveStyle": {
            "intellectualConnection": 1.4,
            "physicalComfort": -0.2
          },
          "environment": {
            "beautifulSpace": 1.4,
            "functionalSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "competence": 1.3,
            "comfortSeeking": -0.2
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fideal_005_c",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 3",
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
          "idealPartner": {
            "idealCompetence": 1.4,
            "idealTenderness": -0.2
          },
          "loveStyle": {
            "physicalComfort": 1.4,
            "intellectualConnection": -0.2
          },
          "environment": {
            "functionalSpace": 1.4,
            "beautifulSpace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "beauty": 1.3,
            "functionalSpace": -0.2
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fideal_005_d",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 4",
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
          "idealPartner": {
            "idealMystery": 1.4,
            "idealStability": -0.2
          },
          "loveStyle": {
            "sharedDream": 1.4,
            "practicalCare": -0.2
          },
          "environment": {
            "privateSpace": 1.4,
            "sociallyWarmSpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "peace": 1.3,
            "intensitySeeking": -0.2
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fideal_005_e",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 5",
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
          "idealPartner": {
            "idealPlayfulness": 1.4,
            "idealSafety": -0.2
          },
          "loveStyle": {
            "respectfulSpace": 1.4,
            "reassuranceSeeking": -0.2
          },
          "environment": {
            "sociallyWarmSpace": 1.4,
            "privateSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "justice": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "fideal_006",
    "kind": "firstReaction",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di kamar yang lampunya redup, dompet terbuka di kasur dan notifikasi tagihan masuk saat saldo tinggal sedikit. Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "fideal_006_a",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealTenderness": 1.4,
            "idealCompetence": -0.2
          },
          "loveStyle": {
            "intellectualConnection": 1.4,
            "physicalComfort": -0.2
          },
          "environment": {
            "beautifulSpace": 1.4,
            "functionalSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "competence": 1.3,
            "comfortSeeking": -0.2
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fideal_006_b",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealCompetence": 1.4,
            "idealTenderness": -0.2
          },
          "loveStyle": {
            "physicalComfort": 1.4,
            "intellectualConnection": -0.2
          },
          "environment": {
            "functionalSpace": 1.4,
            "beautifulSpace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "beauty": 1.3,
            "functionalSpace": -0.2
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fideal_006_c",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 3",
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
          "idealPartner": {
            "idealMystery": 1.4,
            "idealStability": -0.2
          },
          "loveStyle": {
            "sharedDream": 1.4,
            "practicalCare": -0.2
          },
          "environment": {
            "privateSpace": 1.4,
            "sociallyWarmSpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "peace": 1.3,
            "intensitySeeking": -0.2
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fideal_006_d",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 4",
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
          "idealPartner": {
            "idealPlayfulness": 1.4,
            "idealSafety": -0.2
          },
          "loveStyle": {
            "respectfulSpace": 1.4,
            "reassuranceSeeking": -0.2
          },
          "environment": {
            "sociallyWarmSpace": 1.4,
            "privateSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "justice": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.9,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fideal_007",
    "kind": "hiddenReaction",
    "context": {
      "domain": "stress",
      "pressureLevel": "crisis",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Ruangan mendadak sunyi setelah seseorang menaikkan suara. Semua mata berpindah ke arahmu sebelum kau sempat bernapas panjang. Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Pilih reaksi yang mungkin tetap kau simpan di dalam.",
    "options": [
      {
        "id": "fideal_007_a",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealCompetence": 1.4,
            "idealTenderness": -0.2
          },
          "loveStyle": {
            "physicalComfort": 1.4,
            "intellectualConnection": -0.2
          },
          "environment": {
            "functionalSpace": 1.4,
            "beautifulSpace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "beauty": 1.3,
            "functionalSpace": -0.2
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fideal_007_b",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealMystery": 1.4,
            "idealStability": -0.2
          },
          "loveStyle": {
            "sharedDream": 1.4,
            "practicalCare": -0.2
          },
          "environment": {
            "privateSpace": 1.4,
            "sociallyWarmSpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "peace": 1.3,
            "intensitySeeking": -0.2
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fideal_007_c",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 3",
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
          "idealPartner": {
            "idealPlayfulness": 1.4,
            "idealSafety": -0.2
          },
          "loveStyle": {
            "respectfulSpace": 1.4,
            "reassuranceSeeking": -0.2
          },
          "environment": {
            "sociallyWarmSpace": 1.4,
            "privateSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "justice": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fideal_007_d",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 4",
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
          "idealPartner": {
            "idealSafety": 1.4,
            "idealIntensity": -0.2
          },
          "loveStyle": {
            "steadyPresence": 1.4,
            "playfulBond": -0.2
          },
          "environment": {
            "quietRoom": 1.4,
            "livelyPlace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "achievement": 1.3,
            "rest": -0.2
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.78,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fideal_008",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di kafe kecil, sahabatmu tertawa dengan orang lain, tapi ketika menoleh padamu senyumnya seperti tertahan setengah jalan. Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "fideal_008_a",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealMystery": 1.4,
            "idealStability": -0.2
          },
          "loveStyle": {
            "sharedDream": 1.4,
            "practicalCare": -0.2
          },
          "environment": {
            "privateSpace": 1.4,
            "sociallyWarmSpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "peace": 1.3,
            "intensitySeeking": -0.2
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fideal_008_b",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealPlayfulness": 1.4,
            "idealSafety": -0.2
          },
          "loveStyle": {
            "respectfulSpace": 1.4,
            "reassuranceSeeking": -0.2
          },
          "environment": {
            "sociallyWarmSpace": 1.4,
            "privateSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "justice": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "fideal_008_a",
      "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
      "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
        "idealPartner": {
          "idealMystery": 1.4,
          "idealStability": -0.2
        },
        "loveStyle": {
          "sharedDream": 1.4,
          "practicalCare": -0.2
        },
        "environment": {
          "privateSpace": 1.4,
          "sociallyWarmSpace": -0.2
        },
        "instinct": {
          "sp": 1.6,
          "sx": -0.3
        },
        "values": {
          "peace": 1.3,
          "intensitySeeking": -0.2
        },
        "reliability": 0.78
      }
    },
    "right": {
      "id": "fideal_008_b",
      "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
      "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
        "idealPartner": {
          "idealPlayfulness": 1.4,
          "idealSafety": -0.2
        },
        "loveStyle": {
          "respectfulSpace": 1.4,
          "reassuranceSeeking": -0.2
        },
        "environment": {
          "sociallyWarmSpace": 1.4,
          "privateSpace": -0.2
        },
        "instinct": {
          "sx": 1.6,
          "so": -0.3
        },
        "values": {
          "justice": 1.3,
          "appeasement": -0.2
        },
        "reliability": 0.8
      }
    }
  },
  {
    "id": "fideal_009",
    "kind": "singleChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau duduk di dekat jendela, membayangkan seseorang yang mungkin bisa menjadi tempat pulang tanpa membuatmu kehilangan diri. Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "fideal_009_a",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealPlayfulness": 1.4,
            "idealSafety": -0.2
          },
          "loveStyle": {
            "respectfulSpace": 1.4,
            "reassuranceSeeking": -0.2
          },
          "environment": {
            "sociallyWarmSpace": 1.4,
            "privateSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "justice": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fideal_009_b",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealSafety": 1.4,
            "idealIntensity": -0.2
          },
          "loveStyle": {
            "steadyPresence": 1.4,
            "playfulBond": -0.2
          },
          "environment": {
            "quietRoom": 1.4,
            "livelyPlace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "achievement": 1.3,
            "rest": -0.2
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fideal_009_c",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 3",
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
          "idealPartner": {
            "idealIntensity": 1.4,
            "idealStability": -0.2
          },
          "loveStyle": {
            "verbalReassurance": 1.4,
            "minimalResponse": -0.2
          },
          "environment": {
            "livelyPlace": 1.4,
            "quietRoom": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "belonging": 1.3,
            "solitary": -0.2
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fideal_009_d",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 4",
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
          "idealPartner": {
            "idealStability": 1.4,
            "idealFreedom": -0.2
          },
          "loveStyle": {
            "practicalCare": 1.4,
            "sharedDream": -0.2
          },
          "environment": {
            "familiarPlace": 1.4,
            "newPlace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "meaning": 1.3,
            "surfaceWin": -0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fideal_010",
    "kind": "multiChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Setelah hari terasa terlalu panjang, kau masuk kamar dan melihat tiga benda kecil di meja yang masing-masing seperti memanggil sisi berbeda dari dirimu. Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Pilih 1 sampai 2 respons. Maksimal 2.",
    "options": [
      {
        "id": "fideal_010_a",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealSafety": 1.4,
            "idealIntensity": -0.2
          },
          "loveStyle": {
            "steadyPresence": 1.4,
            "playfulBond": -0.2
          },
          "environment": {
            "quietRoom": 1.4,
            "livelyPlace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "achievement": 1.3,
            "rest": -0.2
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fideal_010_b",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealIntensity": 1.4,
            "idealStability": -0.2
          },
          "loveStyle": {
            "verbalReassurance": 1.4,
            "minimalResponse": -0.2
          },
          "environment": {
            "livelyPlace": 1.4,
            "quietRoom": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "belonging": 1.3,
            "solitary": -0.2
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fideal_010_c",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 3",
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
          "idealPartner": {
            "idealStability": 1.4,
            "idealFreedom": -0.2
          },
          "loveStyle": {
            "practicalCare": 1.4,
            "sharedDream": -0.2
          },
          "environment": {
            "familiarPlace": 1.4,
            "newPlace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "meaning": 1.3,
            "surfaceWin": -0.2
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fideal_010_d",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 4",
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
          "idealPartner": {
            "idealFreedom": 1.4,
            "idealAdmiration": -0.2
          },
          "loveStyle": {
            "emotionalDepth": 1.4,
            "respectfulSpace": -0.2
          },
          "environment": {
            "newPlace": 1.4,
            "familiarPlace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "autonomy": 1.3,
            "merging": -0.2
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fideal_010_e",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 5",
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
          "idealPartner": {
            "idealAdmiration": 1.4,
            "idealHonesty": -0.2
          },
          "loveStyle": {
            "playfulBond": 1.4,
            "steadyPresence": -0.2
          },
          "environment": {
            "organizedSpace": 1.4,
            "softCozySpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "freedom": 1.3,
            "security": -0.2
          },
          "reliability": 0.87
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "fideal_011",
    "kind": "ranking",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di chat grup keluarga, satu kebohongan kecil diminta ditutup karena katanya “yang penting semua tenang dulu.” Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "fideal_011_a",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealIntensity": 1.4,
            "idealStability": -0.2
          },
          "loveStyle": {
            "verbalReassurance": 1.4,
            "minimalResponse": -0.2
          },
          "environment": {
            "livelyPlace": 1.4,
            "quietRoom": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "belonging": 1.3,
            "solitary": -0.2
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fideal_011_b",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealStability": 1.4,
            "idealFreedom": -0.2
          },
          "loveStyle": {
            "practicalCare": 1.4,
            "sharedDream": -0.2
          },
          "environment": {
            "familiarPlace": 1.4,
            "newPlace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "meaning": 1.3,
            "surfaceWin": -0.2
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fideal_011_c",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 3",
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
          "idealPartner": {
            "idealFreedom": 1.4,
            "idealAdmiration": -0.2
          },
          "loveStyle": {
            "emotionalDepth": 1.4,
            "respectfulSpace": -0.2
          },
          "environment": {
            "newPlace": 1.4,
            "familiarPlace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "autonomy": 1.3,
            "merging": -0.2
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fideal_011_d",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 4",
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
          "idealPartner": {
            "idealAdmiration": 1.4,
            "idealHonesty": -0.2
          },
          "loveStyle": {
            "playfulBond": 1.4,
            "steadyPresence": -0.2
          },
          "environment": {
            "organizedSpace": 1.4,
            "softCozySpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "freedom": 1.3,
            "security": -0.2
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fideal_011_e",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 5",
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
          "idealPartner": {
            "idealHonesty": 1.4,
            "idealMystery": -0.2
          },
          "loveStyle": {
            "protectiveLoyalty": 1.4,
            "idealFreedom": -0.2
          },
          "environment": {
            "softCozySpace": 1.4,
            "functionalSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "security": 1.3,
            "noveltySeeking": -0.2
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "fideal_012",
    "kind": "firstReaction",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di halte yang basah, rencana berubah lagi. Tasmu berat, baterai HP menipis, dan orang di sampingmu terus bertanya harus bagaimana. Apa yang paling mungkin kau lakukan dulu?",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "fideal_012_a",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 1",
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
          "idealPartner": {
            "idealStability": 1.4,
            "idealFreedom": -0.2
          },
          "loveStyle": {
            "practicalCare": 1.4,
            "sharedDream": -0.2
          },
          "environment": {
            "familiarPlace": 1.4,
            "newPlace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "meaning": 1.3,
            "surfaceWin": -0.2
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fideal_012_b",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 2",
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
          "idealPartner": {
            "idealFreedom": 1.4,
            "idealAdmiration": -0.2
          },
          "loveStyle": {
            "emotionalDepth": 1.4,
            "respectfulSpace": -0.2
          },
          "environment": {
            "newPlace": 1.4,
            "familiarPlace": -0.2
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "values": {
            "autonomy": 1.3,
            "merging": -0.2
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fideal_012_c",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 3",
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
          "idealPartner": {
            "idealAdmiration": 1.4,
            "idealHonesty": -0.2
          },
          "loveStyle": {
            "playfulBond": 1.4,
            "steadyPresence": -0.2
          },
          "environment": {
            "organizedSpace": 1.4,
            "softCozySpace": -0.2
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "values": {
            "freedom": 1.3,
            "security": -0.2
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fideal_012_d",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal idealPartner, loveStyle, environment opsi 4",
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
          "idealPartner": {
            "idealHonesty": 1.4,
            "idealMystery": -0.2
          },
          "loveStyle": {
            "protectiveLoyalty": 1.4,
            "idealFreedom": -0.2
          },
          "environment": {
            "softCozySpace": 1.4,
            "functionalSpace": -0.2
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "values": {
            "security": 1.3,
            "noveltySeeking": -0.2
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "values"
    ],
    "batchTag": "tahap-3-final-coverage"
  }
];
