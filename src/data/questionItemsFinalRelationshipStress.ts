import type { QuestionItem } from "../types";

export const FINAL_RELATIONSHIP_STRESS_QUESTIONS: QuestionItem[] = [
  {
    "id": "frs_001",
    "kind": "ranking",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di chat grup keluarga, satu kebohongan kecil diminta ditutup karena katanya “yang penting semua tenang dulu.” Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "frs_001_a",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "repairSeeking": 1.4,
            "boundaryCutoff": -0.3
          },
          "stress": {
            "intellectualize": 1.3,
            "emotionalExpression": -0.3
          },
          "defense": {
            "rationalization": 1.2,
            "selfBlame": -0.2
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.78
        }
      },
      {
        "id": "frs_001_b",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "secureLeaning": 1.4,
            "emotionalTesting": -0.3
          },
          "stress": {
            "fight": 1.3,
            "freeze": -0.3
          },
          "defense": {
            "projection": 1.0,
            "selfBlame": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.8
        }
      },
      {
        "id": "frs_001_c",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 3",
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
          "relationship": {
            "anxiousLeaning": 1.2,
            "avoidantLeaning": -0.2
          },
          "stress": {
            "flight": 1.3,
            "control": -0.3
          },
          "defense": {
            "selfBlame": 1.1,
            "projection": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "frs_001_d",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 4",
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
          "relationship": {
            "avoidantLeaning": 1.2,
            "reassuranceSeeking": -0.3
          },
          "stress": {
            "freeze": 1.3,
            "actionFirst": -0.3
          },
          "defense": {
            "avoidance": 1.2,
            "directEngagement": -0.3
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "frs_001_e",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 5",
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
          "relationship": {
            "fearfulAvoidantLeaning": 1.2,
            "secureLeaning": -0.3
          },
          "stress": {
            "fawn": 1.3,
            "boundarySetting": -0.3
          },
          "defense": {
            "overExplaining": 1.2,
            "minimalResponse": -0.3
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "frs_002",
    "kind": "firstReaction",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di halte yang basah, rencana berubah lagi. Tasmu berat, baterai HP menipis, dan orang di sampingmu terus bertanya harus bagaimana. Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "frs_002_a",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "secureLeaning": 1.4,
            "emotionalTesting": -0.3
          },
          "stress": {
            "fight": 1.3,
            "freeze": -0.3
          },
          "defense": {
            "projection": 1.0,
            "selfBlame": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.8
        }
      },
      {
        "id": "frs_002_b",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "anxiousLeaning": 1.2,
            "avoidantLeaning": -0.2
          },
          "stress": {
            "flight": 1.3,
            "control": -0.3
          },
          "defense": {
            "selfBlame": 1.1,
            "projection": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "frs_002_c",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 3",
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
          "relationship": {
            "avoidantLeaning": 1.2,
            "reassuranceSeeking": -0.3
          },
          "stress": {
            "freeze": 1.3,
            "actionFirst": -0.3
          },
          "defense": {
            "avoidance": 1.2,
            "directEngagement": -0.3
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "frs_002_d",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 4",
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
          "relationship": {
            "fearfulAvoidantLeaning": 1.2,
            "secureLeaning": -0.3
          },
          "stress": {
            "fawn": 1.3,
            "boundarySetting": -0.3
          },
          "defense": {
            "overExplaining": 1.2,
            "minimalResponse": -0.3
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "frs_003",
    "kind": "hiddenReaction",
    "context": {
      "domain": "identity",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di depan cermin kamar mandi, air keran masih menyala dan kalimat pujian tadi justru terasa seperti pakaian yang ukurannya salah. Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi yang paling mungkin kau sembunyikan dari orang lain.",
    "options": [
      {
        "id": "frs_003_a",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "anxiousLeaning": 1.2,
            "avoidantLeaning": -0.2
          },
          "stress": {
            "flight": 1.3,
            "control": -0.3
          },
          "defense": {
            "selfBlame": 1.1,
            "projection": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "frs_003_b",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "avoidantLeaning": 1.2,
            "reassuranceSeeking": -0.3
          },
          "stress": {
            "freeze": 1.3,
            "actionFirst": -0.3
          },
          "defense": {
            "avoidance": 1.2,
            "directEngagement": -0.3
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "frs_003_c",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 3",
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
          "relationship": {
            "fearfulAvoidantLeaning": 1.2,
            "secureLeaning": -0.3
          },
          "stress": {
            "fawn": 1.3,
            "boundarySetting": -0.3
          },
          "defense": {
            "overExplaining": 1.2,
            "minimalResponse": -0.3
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "frs_003_d",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 4",
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
          "relationship": {
            "reassuranceSeeking": 1.3,
            "respectfulSpace": -0.2
          },
          "stress": {
            "control": 1.3,
            "collapse": -0.3
          },
          "defense": {
            "withdrawal": 1.2,
            "directConfrontation": -0.3
          },
          "coreFear": {
            "beingUnsafe": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.85
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "frs_004",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Dapur rumah pukul sembilan malam, sendok berhenti di bibir mangkuk ketika seseorang menyebut nama yang biasanya dihindari. Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "frs_004_a",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "avoidantLeaning": 1.2,
            "reassuranceSeeking": -0.3
          },
          "stress": {
            "freeze": 1.3,
            "actionFirst": -0.3
          },
          "defense": {
            "avoidance": 1.2,
            "directEngagement": -0.3
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "frs_004_b",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "fearfulAvoidantLeaning": 1.2,
            "secureLeaning": -0.3
          },
          "stress": {
            "fawn": 1.3,
            "boundarySetting": -0.3
          },
          "defense": {
            "overExplaining": 1.2,
            "minimalResponse": -0.3
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "frs_004_a",
      "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
      "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
        "relationship": {
          "avoidantLeaning": 1.2,
          "reassuranceSeeking": -0.3
        },
        "stress": {
          "freeze": 1.3,
          "actionFirst": -0.3
        },
        "defense": {
          "avoidance": 1.2,
          "directEngagement": -0.3
        },
        "coreFear": {
          "beingOrdinary": 1.1
        },
        "instinct": {
          "sp": 1.6,
          "sx": -0.3
        },
        "reliability": 0.83
      }
    },
    "right": {
      "id": "frs_004_b",
      "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
      "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
        "relationship": {
          "fearfulAvoidantLeaning": 1.2,
          "secureLeaning": -0.3
        },
        "stress": {
          "fawn": 1.3,
          "boundarySetting": -0.3
        },
        "defense": {
          "overExplaining": 1.2,
          "minimalResponse": -0.3
        },
        "coreFear": {
          "beingInvaded": 1.1
        },
        "instinct": {
          "sx": 1.6,
          "so": -0.3
        },
        "reliability": 0.84
      }
    }
  },
  {
    "id": "frs_005",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Meja rapat penuh gelas plastik, layar laptop membeku, dan chat grup mulai menagih keputusan yang belum siap. Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "frs_005_a",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "fearfulAvoidantLeaning": 1.2,
            "secureLeaning": -0.3
          },
          "stress": {
            "fawn": 1.3,
            "boundarySetting": -0.3
          },
          "defense": {
            "overExplaining": 1.2,
            "minimalResponse": -0.3
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "frs_005_b",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "reassuranceSeeking": 1.3,
            "respectfulSpace": -0.2
          },
          "stress": {
            "control": 1.3,
            "collapse": -0.3
          },
          "defense": {
            "withdrawal": 1.2,
            "directConfrontation": -0.3
          },
          "coreFear": {
            "beingUnsafe": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.85
        }
      },
      {
        "id": "frs_005_c",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 3",
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
          "relationship": {
            "intimacyFear": 1.2,
            "emotionalDepth": -0.2
          },
          "stress": {
            "collapse": 1.2,
            "perform": -0.3
          },
          "defense": {
            "peoplePleasing": 1.2,
            "boundarySetting": -0.3
          },
          "coreFear": {
            "beingTrapped": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "frs_005_d",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 4",
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
          "relationship": {
            "autonomyProtection": 1.3,
            "merging": -0.3
          },
          "stress": {
            "numb": 1.2,
            "emotionalExpression": -0.3
          },
          "defense": {
            "intellectualization": 1.2,
            "emotionalExpression": -0.3
          },
          "coreFear": {
            "beingControlled": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "frs_006",
    "kind": "multiChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di teras minimarket setelah hujan, layar HP menyala dengan pesan pendek dari orang yang beberapa hari ini membuat dadamu tidak tenang. Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih 1 sampai 2 yang paling dekat. Maksimal 2.",
    "options": [
      {
        "id": "frs_006_a",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "reassuranceSeeking": 1.3,
            "respectfulSpace": -0.2
          },
          "stress": {
            "control": 1.3,
            "collapse": -0.3
          },
          "defense": {
            "withdrawal": 1.2,
            "directConfrontation": -0.3
          },
          "coreFear": {
            "beingUnsafe": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.85
        }
      },
      {
        "id": "frs_006_b",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "intimacyFear": 1.2,
            "emotionalDepth": -0.2
          },
          "stress": {
            "collapse": 1.2,
            "perform": -0.3
          },
          "defense": {
            "peoplePleasing": 1.2,
            "boundarySetting": -0.3
          },
          "coreFear": {
            "beingTrapped": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "frs_006_c",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 3",
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
          "relationship": {
            "autonomyProtection": 1.3,
            "merging": -0.3
          },
          "stress": {
            "numb": 1.2,
            "emotionalExpression": -0.3
          },
          "defense": {
            "intellectualization": 1.2,
            "emotionalExpression": -0.3
          },
          "coreFear": {
            "beingControlled": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.89
        }
      },
      {
        "id": "frs_006_d",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 4",
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
          "relationship": {
            "emotionalTesting": 1.1,
            "directRepair": -0.2
          },
          "stress": {
            "isolate": 1.2,
            "peopleFirst": -0.3
          },
          "defense": {
            "perfectionism": 1.2,
            "improviser": -0.3
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "frs_006_e",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 5",
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
          "relationship": {
            "withdrawalWhenHurt": 1.2,
            "directConfrontation": -0.3
          },
          "stress": {
            "perform": 1.2,
            "collapse": -0.3
          },
          "defense": {
            "control": 1.2,
            "ambiguityTolerance": -0.3
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.9,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "frs_007",
    "kind": "ranking",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Koridor kampus ramai, kertas tugasmu terlipat di tangan, dan satu teman berkata, “namamu ikut saja, ya.” Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "frs_007_a",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "intimacyFear": 1.2,
            "emotionalDepth": -0.2
          },
          "stress": {
            "collapse": 1.2,
            "perform": -0.3
          },
          "defense": {
            "peoplePleasing": 1.2,
            "boundarySetting": -0.3
          },
          "coreFear": {
            "beingTrapped": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "frs_007_b",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "autonomyProtection": 1.3,
            "merging": -0.3
          },
          "stress": {
            "numb": 1.2,
            "emotionalExpression": -0.3
          },
          "defense": {
            "intellectualization": 1.2,
            "emotionalExpression": -0.3
          },
          "coreFear": {
            "beingControlled": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.89
        }
      },
      {
        "id": "frs_007_c",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 3",
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
          "relationship": {
            "emotionalTesting": 1.1,
            "directRepair": -0.2
          },
          "stress": {
            "isolate": 1.2,
            "peopleFirst": -0.3
          },
          "defense": {
            "perfectionism": 1.2,
            "improviser": -0.3
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "frs_007_d",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 4",
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
          "relationship": {
            "withdrawalWhenHurt": 1.2,
            "directConfrontation": -0.3
          },
          "stress": {
            "perform": 1.2,
            "collapse": -0.3
          },
          "defense": {
            "control": 1.2,
            "ambiguityTolerance": -0.3
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.78
        }
      },
      {
        "id": "frs_007_e",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 5",
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
          "relationship": {
            "repairSeeking": 1.4,
            "boundaryCutoff": -0.3
          },
          "stress": {
            "intellectualize": 1.3,
            "emotionalExpression": -0.3
          },
          "defense": {
            "humorDeflection": 1.2,
            "direct": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.78,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "frs_008",
    "kind": "firstReaction",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di kamar yang lampunya redup, dompet terbuka di kasur dan notifikasi tagihan masuk saat saldo tinggal sedikit. Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "frs_008_a",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "autonomyProtection": 1.3,
            "merging": -0.3
          },
          "stress": {
            "numb": 1.2,
            "emotionalExpression": -0.3
          },
          "defense": {
            "intellectualization": 1.2,
            "emotionalExpression": -0.3
          },
          "coreFear": {
            "beingControlled": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.89
        }
      },
      {
        "id": "frs_008_b",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "emotionalTesting": 1.1,
            "directRepair": -0.2
          },
          "stress": {
            "isolate": 1.2,
            "peopleFirst": -0.3
          },
          "defense": {
            "perfectionism": 1.2,
            "improviser": -0.3
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "frs_008_c",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 3",
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
          "relationship": {
            "withdrawalWhenHurt": 1.2,
            "directConfrontation": -0.3
          },
          "stress": {
            "perform": 1.2,
            "collapse": -0.3
          },
          "defense": {
            "control": 1.2,
            "ambiguityTolerance": -0.3
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.78
        }
      },
      {
        "id": "frs_008_d",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 4",
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
          "relationship": {
            "repairSeeking": 1.4,
            "boundaryCutoff": -0.3
          },
          "stress": {
            "intellectualize": 1.3,
            "emotionalExpression": -0.3
          },
          "defense": {
            "humorDeflection": 1.2,
            "direct": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "frs_009",
    "kind": "hiddenReaction",
    "context": {
      "domain": "stress",
      "pressureLevel": "crisis",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Ruangan mendadak sunyi setelah seseorang menaikkan suara. Semua mata berpindah ke arahmu sebelum kau sempat bernapas panjang. Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi yang paling mungkin kau sembunyikan dari orang lain.",
    "options": [
      {
        "id": "frs_009_a",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "emotionalTesting": 1.1,
            "directRepair": -0.2
          },
          "stress": {
            "isolate": 1.2,
            "peopleFirst": -0.3
          },
          "defense": {
            "perfectionism": 1.2,
            "improviser": -0.3
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "frs_009_b",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "withdrawalWhenHurt": 1.2,
            "directConfrontation": -0.3
          },
          "stress": {
            "perform": 1.2,
            "collapse": -0.3
          },
          "defense": {
            "control": 1.2,
            "ambiguityTolerance": -0.3
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.78
        }
      },
      {
        "id": "frs_009_c",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 3",
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
          "relationship": {
            "repairSeeking": 1.4,
            "boundaryCutoff": -0.3
          },
          "stress": {
            "intellectualize": 1.3,
            "emotionalExpression": -0.3
          },
          "defense": {
            "humorDeflection": 1.2,
            "direct": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.8
        }
      },
      {
        "id": "frs_009_d",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 4",
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
          "relationship": {
            "secureLeaning": 1.4,
            "emotionalTesting": -0.3
          },
          "stress": {
            "fight": 1.3,
            "freeze": -0.3
          },
          "defense": {
            "idealization": 1.1,
            "devaluation": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "frs_010",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di kafe kecil, sahabatmu tertawa dengan orang lain, tapi ketika menoleh padamu senyumnya seperti tertahan setengah jalan. Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "frs_010_a",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "withdrawalWhenHurt": 1.2,
            "directConfrontation": -0.3
          },
          "stress": {
            "perform": 1.2,
            "collapse": -0.3
          },
          "defense": {
            "control": 1.2,
            "ambiguityTolerance": -0.3
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.78
        }
      },
      {
        "id": "frs_010_b",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "repairSeeking": 1.4,
            "boundaryCutoff": -0.3
          },
          "stress": {
            "intellectualize": 1.3,
            "emotionalExpression": -0.3
          },
          "defense": {
            "humorDeflection": 1.2,
            "direct": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "frs_010_a",
      "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
      "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
        "relationship": {
          "withdrawalWhenHurt": 1.2,
          "directConfrontation": -0.3
        },
        "stress": {
          "perform": 1.2,
          "collapse": -0.3
        },
        "defense": {
          "control": 1.2,
          "ambiguityTolerance": -0.3
        },
        "coreFear": {
          "beingWrong": 1.1
        },
        "instinct": {
          "sp": 1.6,
          "sx": -0.3
        },
        "reliability": 0.78
      }
    },
    "right": {
      "id": "frs_010_b",
      "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
      "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
        "relationship": {
          "repairSeeking": 1.4,
          "boundaryCutoff": -0.3
        },
        "stress": {
          "intellectualize": 1.3,
          "emotionalExpression": -0.3
        },
        "defense": {
          "humorDeflection": 1.2,
          "direct": -0.2
        },
        "coreFear": {
          "beingUnwanted": 1.1
        },
        "instinct": {
          "sx": 1.6,
          "so": -0.3
        },
        "reliability": 0.8
      }
    }
  },
  {
    "id": "frs_011",
    "kind": "singleChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau duduk di dekat jendela, membayangkan seseorang yang mungkin bisa menjadi tempat pulang tanpa membuatmu kehilangan diri. Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "frs_011_a",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "repairSeeking": 1.4,
            "boundaryCutoff": -0.3
          },
          "stress": {
            "intellectualize": 1.3,
            "emotionalExpression": -0.3
          },
          "defense": {
            "humorDeflection": 1.2,
            "direct": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.8
        }
      },
      {
        "id": "frs_011_b",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "secureLeaning": 1.4,
            "emotionalTesting": -0.3
          },
          "stress": {
            "fight": 1.3,
            "freeze": -0.3
          },
          "defense": {
            "idealization": 1.1,
            "devaluation": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "frs_011_c",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 3",
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
          "relationship": {
            "anxiousLeaning": 1.2,
            "avoidantLeaning": -0.2
          },
          "stress": {
            "flight": 1.3,
            "control": -0.3
          },
          "defense": {
            "devaluation": 1.1,
            "idealization": -0.2
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "frs_011_d",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 4",
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
          "relationship": {
            "avoidantLeaning": 1.2,
            "reassuranceSeeking": -0.3
          },
          "stress": {
            "freeze": 1.3,
            "actionFirst": -0.3
          },
          "defense": {
            "emotionalSuppression": 1.2,
            "expressive": -0.3
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "frs_012",
    "kind": "multiChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Setelah hari terasa terlalu panjang, kau masuk kamar dan melihat tiga benda kecil di meja yang masing-masing seperti memanggil sisi berbeda dari dirimu. Relationship stress defense tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih 1 sampai 2 yang paling dekat. Maksimal 2.",
    "options": [
      {
        "id": "frs_012_a",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 1",
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
          "relationship": {
            "secureLeaning": 1.4,
            "emotionalTesting": -0.3
          },
          "stress": {
            "fight": 1.3,
            "freeze": -0.3
          },
          "defense": {
            "idealization": 1.1,
            "devaluation": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "frs_012_b",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 2",
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
          "relationship": {
            "anxiousLeaning": 1.2,
            "avoidantLeaning": -0.2
          },
          "stress": {
            "flight": 1.3,
            "control": -0.3
          },
          "defense": {
            "devaluation": 1.1,
            "idealization": -0.2
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "frs_012_c",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 3",
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
          "relationship": {
            "avoidantLeaning": 1.2,
            "reassuranceSeeking": -0.3
          },
          "stress": {
            "freeze": 1.3,
            "actionFirst": -0.3
          },
          "defense": {
            "emotionalSuppression": 1.2,
            "expressive": -0.3
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "frs_012_d",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 4",
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
          "relationship": {
            "fearfulAvoidantLeaning": 1.2,
            "secureLeaning": -0.3
          },
          "stress": {
            "fawn": 1.3,
            "boundarySetting": -0.3
          },
          "defense": {
            "rationalization": 1.2,
            "selfBlame": -0.2
          },
          "coreFear": {
            "beingUnsafe": 1.1
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "reliability": 0.85
        }
      },
      {
        "id": "frs_012_e",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal relationship, stress, defense opsi 5",
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
          "relationship": {
            "reassuranceSeeking": 1.3,
            "respectfulSpace": -0.2
          },
          "stress": {
            "control": 1.3,
            "collapse": -0.3
          },
          "defense": {
            "projection": 1.0,
            "selfBlame": -0.2
          },
          "coreFear": {
            "beingTrapped": 1.1
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "reliability": 0.87
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "coreFear",
      "instinct"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  }
];
