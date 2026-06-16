import type { QuestionItem } from "../types";

export const FINAL_DISC_RIASEC_QUESTIONS: QuestionItem[] = [
  {
    "id": "fcareer_001",
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
        "id": "fcareer_001_a",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Realistic": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "refiner": 1.3,
            "roughDraft": -0.2
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fcareer_001_b",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Investigative": 1.5,
            "Enterprising": -0.3
          },
          "work": {
            "creator": 1.3,
            "conventional": -0.2
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "fcareer_001_a",
      "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
      "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
        "disc": {
          "S": 1.5,
          "D": -0.4
        },
        "riasec": {
          "Realistic": 1.5,
          "Artistic": -0.3
        },
        "work": {
          "refiner": 1.3,
          "roughDraft": -0.2
        },
        "reliability": 0.87
      }
    },
    "right": {
      "id": "fcareer_001_b",
      "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
      "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
        "disc": {
          "C": 1.5,
          "I": -0.4
        },
        "riasec": {
          "Investigative": 1.5,
          "Enterprising": -0.3
        },
        "work": {
          "creator": 1.3,
          "conventional": -0.2
        },
        "reliability": 0.89
      }
    }
  },
  {
    "id": "fcareer_002",
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
        "id": "fcareer_002_a",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Investigative": 1.5,
            "Enterprising": -0.3
          },
          "work": {
            "creator": 1.3,
            "conventional": -0.2
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fcareer_002_b",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Artistic": 1.5,
            "Conventional": -0.3
          },
          "work": {
            "stabilizer": 1.3,
            "riskTaking": -0.2
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fcareer_002_c",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 3",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Social": 1.5,
            "Realistic": -0.3
          },
          "work": {
            "challenger": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fcareer_002_d",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 4",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Enterprising": 1.5,
            "Investigative": -0.3
          },
          "work": {
            "planner": 1.3,
            "improviser": -0.2
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fcareer_003",
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
        "id": "fcareer_003_a",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Artistic": 1.5,
            "Conventional": -0.3
          },
          "work": {
            "stabilizer": 1.3,
            "riskTaking": -0.2
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fcareer_003_b",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Social": 1.5,
            "Realistic": -0.3
          },
          "work": {
            "challenger": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fcareer_003_c",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 3",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Enterprising": 1.5,
            "Investigative": -0.3
          },
          "work": {
            "planner": 1.3,
            "improviser": -0.2
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fcareer_003_d",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 4",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Conventional": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "executor": 1.3,
            "analysisLoop": -0.2
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fcareer_003_e",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 5",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Realistic": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "improviser": 1.3,
            "planner": -0.2
          },
          "reliability": 0.83
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "fcareer_004",
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
        "id": "fcareer_004_a",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Social": 1.5,
            "Realistic": -0.3
          },
          "work": {
            "challenger": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fcareer_004_b",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Enterprising": 1.5,
            "Investigative": -0.3
          },
          "work": {
            "planner": 1.3,
            "improviser": -0.2
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fcareer_004_c",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 3",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Conventional": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "executor": 1.3,
            "analysisLoop": -0.2
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fcareer_004_d",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 4",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Realistic": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "improviser": 1.3,
            "planner": -0.2
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fcareer_004_e",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 5",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Investigative": 1.5,
            "Enterprising": -0.3
          },
          "work": {
            "researcher": 1.3,
            "fastAction": -0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "fcareer_005",
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
        "id": "fcareer_005_a",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Enterprising": 1.5,
            "Investigative": -0.3
          },
          "work": {
            "planner": 1.3,
            "improviser": -0.2
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fcareer_005_b",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Conventional": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "executor": 1.3,
            "analysisLoop": -0.2
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fcareer_005_c",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 3",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Realistic": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "improviser": 1.3,
            "planner": -0.2
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fcareer_005_d",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 4",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Investigative": 1.5,
            "Enterprising": -0.3
          },
          "work": {
            "researcher": 1.3,
            "fastAction": -0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fcareer_006",
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
        "id": "fcareer_006_a",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Conventional": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "executor": 1.3,
            "analysisLoop": -0.2
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fcareer_006_b",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Realistic": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "improviser": 1.3,
            "planner": -0.2
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fcareer_006_c",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 3",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Investigative": 1.5,
            "Enterprising": -0.3
          },
          "work": {
            "researcher": 1.3,
            "fastAction": -0.2
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fcareer_006_d",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 4",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Artistic": 1.5,
            "Conventional": -0.3
          },
          "work": {
            "helper": 1.3,
            "challenger": -0.2
          },
          "reliability": 0.85
        }
      }
    ],
    "reliability": 0.9,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fcareer_007",
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
        "id": "fcareer_007_a",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Realistic": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "improviser": 1.3,
            "planner": -0.2
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fcareer_007_b",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Investigative": 1.5,
            "Enterprising": -0.3
          },
          "work": {
            "researcher": 1.3,
            "fastAction": -0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.78,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "fcareer_007_a",
      "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
      "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
        "disc": {
          "D": 1.5,
          "S": -0.4
        },
        "riasec": {
          "Realistic": 1.5,
          "Artistic": -0.3
        },
        "work": {
          "improviser": 1.3,
          "planner": -0.2
        },
        "reliability": 0.83
      }
    },
    "right": {
      "id": "fcareer_007_b",
      "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
      "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
        "disc": {
          "I": 1.5,
          "C": -0.4
        },
        "riasec": {
          "Investigative": 1.5,
          "Enterprising": -0.3
        },
        "work": {
          "researcher": 1.3,
          "fastAction": -0.2
        },
        "reliability": 0.84
      }
    }
  },
  {
    "id": "fcareer_008",
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
        "id": "fcareer_008_a",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Investigative": 1.5,
            "Enterprising": -0.3
          },
          "work": {
            "researcher": 1.3,
            "fastAction": -0.2
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fcareer_008_b",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Artistic": 1.5,
            "Conventional": -0.3
          },
          "work": {
            "helper": 1.3,
            "challenger": -0.2
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fcareer_008_c",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 3",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Social": 1.5,
            "Realistic": -0.3
          },
          "work": {
            "leader": 1.3,
            "follower": -0.2
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fcareer_008_d",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 4",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Enterprising": 1.5,
            "Investigative": -0.3
          },
          "work": {
            "refiner": 1.3,
            "roughDraft": -0.2
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fcareer_009",
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
        "id": "fcareer_009_a",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Artistic": 1.5,
            "Conventional": -0.3
          },
          "work": {
            "helper": 1.3,
            "challenger": -0.2
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fcareer_009_b",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Social": 1.5,
            "Realistic": -0.3
          },
          "work": {
            "leader": 1.3,
            "follower": -0.2
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fcareer_009_c",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 3",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Enterprising": 1.5,
            "Investigative": -0.3
          },
          "work": {
            "refiner": 1.3,
            "roughDraft": -0.2
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fcareer_009_d",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 4",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Conventional": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "creator": 1.3,
            "conventional": -0.2
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fcareer_009_e",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 5",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Realistic": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "stabilizer": 1.3,
            "riskTaking": -0.2
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "fcareer_010",
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
        "id": "fcareer_010_a",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Social": 1.5,
            "Realistic": -0.3
          },
          "work": {
            "leader": 1.3,
            "follower": -0.2
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fcareer_010_b",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Enterprising": 1.5,
            "Investigative": -0.3
          },
          "work": {
            "refiner": 1.3,
            "roughDraft": -0.2
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fcareer_010_c",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 3",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Conventional": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "creator": 1.3,
            "conventional": -0.2
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fcareer_010_d",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 4",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Realistic": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "stabilizer": 1.3,
            "riskTaking": -0.2
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fcareer_010_e",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 5",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Investigative": 1.5,
            "Enterprising": -0.3
          },
          "work": {
            "challenger": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "fcareer_011",
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
        "id": "fcareer_011_a",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Enterprising": 1.5,
            "Investigative": -0.3
          },
          "work": {
            "refiner": 1.3,
            "roughDraft": -0.2
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fcareer_011_b",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Conventional": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "creator": 1.3,
            "conventional": -0.2
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fcareer_011_c",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 3",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Realistic": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "stabilizer": 1.3,
            "riskTaking": -0.2
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fcareer_011_d",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 4",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Investigative": 1.5,
            "Enterprising": -0.3
          },
          "work": {
            "challenger": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fcareer_012",
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
        "id": "fcareer_012_a",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 1",
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
          "disc": {
            "I": 1.5,
            "C": -0.4
          },
          "riasec": {
            "Conventional": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "creator": 1.3,
            "conventional": -0.2
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fcareer_012_b",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 2",
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
          "disc": {
            "S": 1.5,
            "D": -0.4
          },
          "riasec": {
            "Realistic": 1.5,
            "Artistic": -0.3
          },
          "work": {
            "stabilizer": 1.3,
            "riskTaking": -0.2
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fcareer_012_c",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 3",
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
          "disc": {
            "C": 1.5,
            "I": -0.4
          },
          "riasec": {
            "Investigative": 1.5,
            "Enterprising": -0.3
          },
          "work": {
            "challenger": 1.3,
            "appeasement": -0.2
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fcareer_012_d",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal disc, riasec, work opsi 4",
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
          "disc": {
            "D": 1.5,
            "S": -0.4
          },
          "riasec": {
            "Artistic": 1.5,
            "Conventional": -0.3
          },
          "work": {
            "planner": 1.3,
            "improviser": -0.2
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "disc",
      "riasec",
      "work",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "disc",
      "riasec",
      "work"
    ],
    "batchTag": "tahap-3-final-coverage"
  }
];
