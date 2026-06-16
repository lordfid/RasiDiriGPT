import type { QuestionItem } from "../types";

export const FINAL_MORAL_DECISION_QUESTIONS: QuestionItem[] = [
  {
    "id": "fmoral_001",
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
        "id": "fmoral_001_a",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "purityIntegrityBased": 1.4,
            "outcomeBased": -0.3
          },
          "decision": {
            "avoidantUnderPressure": 1.0,
            "fastAction": -0.3
          },
          "values": {
            "justice": 1.3,
            "appeasement": -0.2
          },
          "coreFear": {
            "beingControlled": 1.1
          },
          "coreDesire": {
            "strength": 1.1
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fmoral_001_b",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "careBased": 1.4,
            "outcomeBased": -0.3
          },
          "decision": {
            "fastAction": 1.3,
            "avoidantUnderPressure": -0.4
          },
          "values": {
            "achievement": 1.3,
            "rest": -0.2
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "coreDesire": {
            "peace": 1.1
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fmoral_001_c",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 3",
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
          "moral": {
            "justiceBased": 1.4,
            "loyaltyBased": -0.3
          },
          "decision": {
            "reflective": 1.3,
            "fastAction": -0.3
          },
          "values": {
            "belonging": 1.3,
            "solitary": -0.2
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "coreDesire": {
            "integrity": 1.1
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fmoral_001_d",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 4",
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
          "moral": {
            "ruleBased": 1.4,
            "freedomBased": -0.3
          },
          "decision": {
            "consultative": 1.3,
            "solitaryDecision": -0.3
          },
          "values": {
            "meaning": 1.3,
            "surfaceWin": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "coreDesire": {
            "beingLoved": 1.1
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fmoral_002",
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
        "id": "fmoral_002_a",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "careBased": 1.4,
            "outcomeBased": -0.3
          },
          "decision": {
            "fastAction": 1.3,
            "avoidantUnderPressure": -0.4
          },
          "values": {
            "achievement": 1.3,
            "rest": -0.2
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "coreDesire": {
            "peace": 1.1
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fmoral_002_b",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "justiceBased": 1.4,
            "loyaltyBased": -0.3
          },
          "decision": {
            "reflective": 1.3,
            "fastAction": -0.3
          },
          "values": {
            "belonging": 1.3,
            "solitary": -0.2
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "coreDesire": {
            "integrity": 1.1
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fmoral_002_c",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 3",
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
          "moral": {
            "ruleBased": 1.4,
            "freedomBased": -0.3
          },
          "decision": {
            "consultative": 1.3,
            "solitaryDecision": -0.3
          },
          "values": {
            "meaning": 1.3,
            "surfaceWin": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "coreDesire": {
            "beingLoved": 1.1
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fmoral_002_d",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 4",
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
          "moral": {
            "loyaltyBased": 1.4,
            "truthBased": -0.3
          },
          "decision": {
            "evidenceBased": 1.3,
            "impulsiveChoice": -0.4
          },
          "values": {
            "autonomy": 1.3,
            "merging": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "coreDesire": {
            "beingValuable": 1.1
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fmoral_002_e",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 5",
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
          "moral": {
            "freedomBased": 1.4,
            "ruleBased": -0.3
          },
          "decision": {
            "valueBased": 1.3,
            "outcomeOnly": -0.3
          },
          "values": {
            "freedom": 1.3,
            "security": -0.2
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "coreDesire": {
            "beingAuthentic": 1.1
          },
          "reliability": 0.83
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "fmoral_003",
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
        "id": "fmoral_003_a",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "justiceBased": 1.4,
            "loyaltyBased": -0.3
          },
          "decision": {
            "reflective": 1.3,
            "fastAction": -0.3
          },
          "values": {
            "belonging": 1.3,
            "solitary": -0.2
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "coreDesire": {
            "integrity": 1.1
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fmoral_003_b",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "ruleBased": 1.4,
            "freedomBased": -0.3
          },
          "decision": {
            "consultative": 1.3,
            "solitaryDecision": -0.3
          },
          "values": {
            "meaning": 1.3,
            "surfaceWin": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "coreDesire": {
            "beingLoved": 1.1
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fmoral_003_c",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 3",
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
          "moral": {
            "loyaltyBased": 1.4,
            "truthBased": -0.3
          },
          "decision": {
            "evidenceBased": 1.3,
            "impulsiveChoice": -0.4
          },
          "values": {
            "autonomy": 1.3,
            "merging": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "coreDesire": {
            "beingValuable": 1.1
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fmoral_003_d",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 4",
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
          "moral": {
            "freedomBased": 1.4,
            "ruleBased": -0.3
          },
          "decision": {
            "valueBased": 1.3,
            "outcomeOnly": -0.3
          },
          "values": {
            "freedom": 1.3,
            "security": -0.2
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "coreDesire": {
            "beingAuthentic": 1.1
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fmoral_003_e",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 5",
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
          "moral": {
            "truthBased": 1.4,
            "careBased": -0.3
          },
          "decision": {
            "riskAware": 1.3,
            "riskBlind": -0.4
          },
          "values": {
            "security": 1.3,
            "noveltySeeking": -0.2
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "coreDesire": {
            "understanding": 1.1
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "fmoral_004",
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
        "id": "fmoral_004_a",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "ruleBased": 1.4,
            "freedomBased": -0.3
          },
          "decision": {
            "consultative": 1.3,
            "solitaryDecision": -0.3
          },
          "values": {
            "meaning": 1.3,
            "surfaceWin": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "coreDesire": {
            "beingLoved": 1.1
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fmoral_004_b",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "loyaltyBased": 1.4,
            "truthBased": -0.3
          },
          "decision": {
            "evidenceBased": 1.3,
            "impulsiveChoice": -0.4
          },
          "values": {
            "autonomy": 1.3,
            "merging": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "coreDesire": {
            "beingValuable": 1.1
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fmoral_004_c",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 3",
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
          "moral": {
            "freedomBased": 1.4,
            "ruleBased": -0.3
          },
          "decision": {
            "valueBased": 1.3,
            "outcomeOnly": -0.3
          },
          "values": {
            "freedom": 1.3,
            "security": -0.2
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "coreDesire": {
            "beingAuthentic": 1.1
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fmoral_004_d",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 4",
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
          "moral": {
            "truthBased": 1.4,
            "careBased": -0.3
          },
          "decision": {
            "riskAware": 1.3,
            "riskBlind": -0.4
          },
          "values": {
            "security": 1.3,
            "noveltySeeking": -0.2
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "coreDesire": {
            "understanding": 1.1
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fmoral_005",
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
        "id": "fmoral_005_a",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "loyaltyBased": 1.4,
            "truthBased": -0.3
          },
          "decision": {
            "evidenceBased": 1.3,
            "impulsiveChoice": -0.4
          },
          "values": {
            "autonomy": 1.3,
            "merging": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "coreDesire": {
            "beingValuable": 1.1
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fmoral_005_b",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "freedomBased": 1.4,
            "ruleBased": -0.3
          },
          "decision": {
            "valueBased": 1.3,
            "outcomeOnly": -0.3
          },
          "values": {
            "freedom": 1.3,
            "security": -0.2
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "coreDesire": {
            "beingAuthentic": 1.1
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fmoral_005_c",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 3",
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
          "moral": {
            "truthBased": 1.4,
            "careBased": -0.3
          },
          "decision": {
            "riskAware": 1.3,
            "riskBlind": -0.4
          },
          "values": {
            "security": 1.3,
            "noveltySeeking": -0.2
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "coreDesire": {
            "understanding": 1.1
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fmoral_005_d",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 4",
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
          "moral": {
            "outcomeBased": 1.4,
            "purityIntegrityBased": -0.3
          },
          "decision": {
            "intuitiveButGrounded": 1.3,
            "overChecking": -0.3
          },
          "values": {
            "truth": 1.3,
            "belonging": -0.2
          },
          "coreFear": {
            "beingUnsafe": 1.1
          },
          "coreDesire": {
            "certainty": 1.1
          },
          "reliability": 0.85
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fmoral_006",
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
        "id": "fmoral_006_a",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "freedomBased": 1.4,
            "ruleBased": -0.3
          },
          "decision": {
            "valueBased": 1.3,
            "outcomeOnly": -0.3
          },
          "values": {
            "freedom": 1.3,
            "security": -0.2
          },
          "coreFear": {
            "beingOrdinary": 1.1
          },
          "coreDesire": {
            "beingAuthentic": 1.1
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fmoral_006_b",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "truthBased": 1.4,
            "careBased": -0.3
          },
          "decision": {
            "riskAware": 1.3,
            "riskBlind": -0.4
          },
          "values": {
            "security": 1.3,
            "noveltySeeking": -0.2
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "coreDesire": {
            "understanding": 1.1
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.9,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "fmoral_006_a",
      "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
      "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
        "moral": {
          "freedomBased": 1.4,
          "ruleBased": -0.3
        },
        "decision": {
          "valueBased": 1.3,
          "outcomeOnly": -0.3
        },
        "values": {
          "freedom": 1.3,
          "security": -0.2
        },
        "coreFear": {
          "beingOrdinary": 1.1
        },
        "coreDesire": {
          "beingAuthentic": 1.1
        },
        "reliability": 0.83
      }
    },
    "right": {
      "id": "fmoral_006_b",
      "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
      "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
        "moral": {
          "truthBased": 1.4,
          "careBased": -0.3
        },
        "decision": {
          "riskAware": 1.3,
          "riskBlind": -0.4
        },
        "values": {
          "security": 1.3,
          "noveltySeeking": -0.2
        },
        "coreFear": {
          "beingInvaded": 1.1
        },
        "coreDesire": {
          "understanding": 1.1
        },
        "reliability": 0.84
      }
    }
  },
  {
    "id": "fmoral_007",
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
        "id": "fmoral_007_a",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "truthBased": 1.4,
            "careBased": -0.3
          },
          "decision": {
            "riskAware": 1.3,
            "riskBlind": -0.4
          },
          "values": {
            "security": 1.3,
            "noveltySeeking": -0.2
          },
          "coreFear": {
            "beingInvaded": 1.1
          },
          "coreDesire": {
            "understanding": 1.1
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fmoral_007_b",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "outcomeBased": 1.4,
            "purityIntegrityBased": -0.3
          },
          "decision": {
            "intuitiveButGrounded": 1.3,
            "overChecking": -0.3
          },
          "values": {
            "truth": 1.3,
            "belonging": -0.2
          },
          "coreFear": {
            "beingUnsafe": 1.1
          },
          "coreDesire": {
            "certainty": 1.1
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fmoral_007_c",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 3",
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
          "moral": {
            "purityIntegrityBased": 1.4,
            "outcomeBased": -0.3
          },
          "decision": {
            "avoidantUnderPressure": 1.0,
            "fastAction": -0.3
          },
          "values": {
            "love": 1.3,
            "autonomy": -0.2
          },
          "coreFear": {
            "beingTrapped": 1.1
          },
          "coreDesire": {
            "freedom": 1.1
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fmoral_007_d",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 4",
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
          "moral": {
            "careBased": 1.4,
            "outcomeBased": -0.3
          },
          "decision": {
            "fastAction": 1.3,
            "avoidantUnderPressure": -0.4
          },
          "values": {
            "competence": 1.3,
            "comfortSeeking": -0.2
          },
          "coreFear": {
            "beingControlled": 1.1
          },
          "coreDesire": {
            "strength": 1.1
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.78,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fmoral_008",
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
        "id": "fmoral_008_a",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "outcomeBased": 1.4,
            "purityIntegrityBased": -0.3
          },
          "decision": {
            "intuitiveButGrounded": 1.3,
            "overChecking": -0.3
          },
          "values": {
            "truth": 1.3,
            "belonging": -0.2
          },
          "coreFear": {
            "beingUnsafe": 1.1
          },
          "coreDesire": {
            "certainty": 1.1
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fmoral_008_b",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "purityIntegrityBased": 1.4,
            "outcomeBased": -0.3
          },
          "decision": {
            "avoidantUnderPressure": 1.0,
            "fastAction": -0.3
          },
          "values": {
            "love": 1.3,
            "autonomy": -0.2
          },
          "coreFear": {
            "beingTrapped": 1.1
          },
          "coreDesire": {
            "freedom": 1.1
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fmoral_008_c",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 3",
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
          "moral": {
            "careBased": 1.4,
            "outcomeBased": -0.3
          },
          "decision": {
            "fastAction": 1.3,
            "avoidantUnderPressure": -0.4
          },
          "values": {
            "competence": 1.3,
            "comfortSeeking": -0.2
          },
          "coreFear": {
            "beingControlled": 1.1
          },
          "coreDesire": {
            "strength": 1.1
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fmoral_008_d",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 4",
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
          "moral": {
            "justiceBased": 1.4,
            "loyaltyBased": -0.3
          },
          "decision": {
            "reflective": 1.3,
            "fastAction": -0.3
          },
          "values": {
            "beauty": 1.3,
            "functionalSpace": -0.2
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "coreDesire": {
            "peace": 1.1
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fmoral_008_e",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 5",
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
          "moral": {
            "ruleBased": 1.4,
            "freedomBased": -0.3
          },
          "decision": {
            "consultative": 1.3,
            "solitaryDecision": -0.3
          },
          "values": {
            "peace": 1.3,
            "intensitySeeking": -0.2
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "coreDesire": {
            "integrity": 1.1
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "fmoral_009",
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
        "id": "fmoral_009_a",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "purityIntegrityBased": 1.4,
            "outcomeBased": -0.3
          },
          "decision": {
            "avoidantUnderPressure": 1.0,
            "fastAction": -0.3
          },
          "values": {
            "love": 1.3,
            "autonomy": -0.2
          },
          "coreFear": {
            "beingTrapped": 1.1
          },
          "coreDesire": {
            "freedom": 1.1
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fmoral_009_b",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "careBased": 1.4,
            "outcomeBased": -0.3
          },
          "decision": {
            "fastAction": 1.3,
            "avoidantUnderPressure": -0.4
          },
          "values": {
            "competence": 1.3,
            "comfortSeeking": -0.2
          },
          "coreFear": {
            "beingControlled": 1.1
          },
          "coreDesire": {
            "strength": 1.1
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fmoral_009_c",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 3",
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
          "moral": {
            "justiceBased": 1.4,
            "loyaltyBased": -0.3
          },
          "decision": {
            "reflective": 1.3,
            "fastAction": -0.3
          },
          "values": {
            "beauty": 1.3,
            "functionalSpace": -0.2
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "coreDesire": {
            "peace": 1.1
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fmoral_009_d",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 4",
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
          "moral": {
            "ruleBased": 1.4,
            "freedomBased": -0.3
          },
          "decision": {
            "consultative": 1.3,
            "solitaryDecision": -0.3
          },
          "values": {
            "peace": 1.3,
            "intensitySeeking": -0.2
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "coreDesire": {
            "integrity": 1.1
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fmoral_009_e",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 5",
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
          "moral": {
            "loyaltyBased": 1.4,
            "truthBased": -0.3
          },
          "decision": {
            "evidenceBased": 1.3,
            "impulsiveChoice": -0.4
          },
          "values": {
            "justice": 1.3,
            "appeasement": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "coreDesire": {
            "beingLoved": 1.1
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "fmoral_010",
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
        "id": "fmoral_010_a",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "careBased": 1.4,
            "outcomeBased": -0.3
          },
          "decision": {
            "fastAction": 1.3,
            "avoidantUnderPressure": -0.4
          },
          "values": {
            "competence": 1.3,
            "comfortSeeking": -0.2
          },
          "coreFear": {
            "beingControlled": 1.1
          },
          "coreDesire": {
            "strength": 1.1
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fmoral_010_b",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "justiceBased": 1.4,
            "loyaltyBased": -0.3
          },
          "decision": {
            "reflective": 1.3,
            "fastAction": -0.3
          },
          "values": {
            "beauty": 1.3,
            "functionalSpace": -0.2
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "coreDesire": {
            "peace": 1.1
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fmoral_010_c",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 3",
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
          "moral": {
            "ruleBased": 1.4,
            "freedomBased": -0.3
          },
          "decision": {
            "consultative": 1.3,
            "solitaryDecision": -0.3
          },
          "values": {
            "peace": 1.3,
            "intensitySeeking": -0.2
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "coreDesire": {
            "integrity": 1.1
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fmoral_010_d",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 4",
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
          "moral": {
            "loyaltyBased": 1.4,
            "truthBased": -0.3
          },
          "decision": {
            "evidenceBased": 1.3,
            "impulsiveChoice": -0.4
          },
          "values": {
            "justice": 1.3,
            "appeasement": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "coreDesire": {
            "beingLoved": 1.1
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fmoral_011",
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
        "id": "fmoral_011_a",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "justiceBased": 1.4,
            "loyaltyBased": -0.3
          },
          "decision": {
            "reflective": 1.3,
            "fastAction": -0.3
          },
          "values": {
            "beauty": 1.3,
            "functionalSpace": -0.2
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "coreDesire": {
            "peace": 1.1
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fmoral_011_b",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "ruleBased": 1.4,
            "freedomBased": -0.3
          },
          "decision": {
            "consultative": 1.3,
            "solitaryDecision": -0.3
          },
          "values": {
            "peace": 1.3,
            "intensitySeeking": -0.2
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "coreDesire": {
            "integrity": 1.1
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fmoral_011_c",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 3",
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
          "moral": {
            "loyaltyBased": 1.4,
            "truthBased": -0.3
          },
          "decision": {
            "evidenceBased": 1.3,
            "impulsiveChoice": -0.4
          },
          "values": {
            "justice": 1.3,
            "appeasement": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "coreDesire": {
            "beingLoved": 1.1
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fmoral_011_d",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 4",
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
          "moral": {
            "freedomBased": 1.4,
            "ruleBased": -0.3
          },
          "decision": {
            "valueBased": 1.3,
            "outcomeOnly": -0.3
          },
          "values": {
            "achievement": 1.3,
            "rest": -0.2
          },
          "coreFear": {
            "beingWorthless": 1.1
          },
          "coreDesire": {
            "beingValuable": 1.1
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fmoral_012",
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
        "id": "fmoral_012_a",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
          "moral": {
            "ruleBased": 1.4,
            "freedomBased": -0.3
          },
          "decision": {
            "consultative": 1.3,
            "solitaryDecision": -0.3
          },
          "values": {
            "peace": 1.3,
            "intensitySeeking": -0.2
          },
          "coreFear": {
            "beingWrong": 1.1
          },
          "coreDesire": {
            "integrity": 1.1
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fmoral_012_b",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
          "moral": {
            "loyaltyBased": 1.4,
            "truthBased": -0.3
          },
          "decision": {
            "evidenceBased": 1.3,
            "impulsiveChoice": -0.4
          },
          "values": {
            "justice": 1.3,
            "appeasement": -0.2
          },
          "coreFear": {
            "beingUnwanted": 1.1
          },
          "coreDesire": {
            "beingLoved": 1.1
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "moral",
      "decision",
      "values",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "fmoral_012_a",
      "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
      "subtleMeaning": "Sinyal moral, decision, values opsi 1",
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
        "moral": {
          "ruleBased": 1.4,
          "freedomBased": -0.3
        },
        "decision": {
          "consultative": 1.3,
          "solitaryDecision": -0.3
        },
        "values": {
          "peace": 1.3,
          "intensitySeeking": -0.2
        },
        "coreFear": {
          "beingWrong": 1.1
        },
        "coreDesire": {
          "integrity": 1.1
        },
        "reliability": 0.78
      }
    },
    "right": {
      "id": "fmoral_012_b",
      "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
      "subtleMeaning": "Sinyal moral, decision, values opsi 2",
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
        "moral": {
          "loyaltyBased": 1.4,
          "truthBased": -0.3
        },
        "decision": {
          "evidenceBased": 1.3,
          "impulsiveChoice": -0.4
        },
        "values": {
          "justice": 1.3,
          "appeasement": -0.2
        },
        "coreFear": {
          "beingUnwanted": 1.1
        },
        "coreDesire": {
          "beingLoved": 1.1
        },
        "reliability": 0.8
      }
    }
  }
];
