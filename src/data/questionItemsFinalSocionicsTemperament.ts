import type { QuestionItem } from "../types";

export const FINAL_SOCIONICS_TEMPERAMENT_QUESTIONS: QuestionItem[] = [
  {
    "id": "fsoc_001",
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
        "id": "fsoc_001_a",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "EII": 1.0,
            "ESI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fsoc_001_b",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "ESE": 1.0,
            "EIE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fsoc_001_c",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 3",
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
          "socionics": {
            "LII": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fsoc_001_d",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 4",
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
          "socionics": {
            "LIE": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fsoc_002",
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
        "id": "fsoc_002_a",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "ESE": 1.0,
            "EIE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fsoc_002_b",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "LII": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fsoc_002_c",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 3",
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
          "socionics": {
            "LIE": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fsoc_002_d",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 4",
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
          "socionics": {
            "IEI": 1.0,
            "ILI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.9
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fsoc_003",
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
        "id": "fsoc_003_a",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "LII": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fsoc_003_b",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "LIE": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "fsoc_003_a",
      "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
      "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
        "socionics": {
          "LII": 1.0,
          "LSE": 0.6
        },
        "quadra": {
          "Gamma": 1.4,
          "Alpha": -0.3
        },
        "temperament": {
          "SJ": 1.4,
          "NT": -0.3
        },
        "classicalTemperament": {
          "choleric": 1.3,
          "phlegmatic": -0.3
        },
        "reliability": 0.87
      }
    },
    "right": {
      "id": "fsoc_003_b",
      "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
      "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
        "socionics": {
          "LIE": 1.0,
          "LSE": 0.6
        },
        "quadra": {
          "Delta": 1.4,
          "Beta": -0.3
        },
        "temperament": {
          "SP": 1.4,
          "NF": -0.3
        },
        "classicalTemperament": {
          "sanguine": 1.3,
          "melancholic": -0.3
        },
        "reliability": 0.89
      }
    }
  },
  {
    "id": "fsoc_004",
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
        "id": "fsoc_004_a",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "LIE": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fsoc_004_b",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "IEI": 1.0,
            "ILI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fsoc_004_c",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 3",
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
          "socionics": {
            "ILE": 1.0,
            "IEE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fsoc_004_d",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 4",
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
          "socionics": {
            "SLI": 1.0,
            "LSI": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fsoc_005",
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
        "id": "fsoc_005_a",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "IEI": 1.0,
            "ILI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fsoc_005_b",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "ILE": 1.0,
            "IEE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fsoc_005_c",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 3",
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
          "socionics": {
            "SLI": 1.0,
            "LSI": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fsoc_005_d",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 4",
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
          "socionics": {
            "SEE": 1.0,
            "SLE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fsoc_005_e",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 5",
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
          "socionics": {
            "EII": 1.0,
            "ESI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.83
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "fsoc_006",
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
        "id": "fsoc_006_a",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "ILE": 1.0,
            "IEE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fsoc_006_b",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "SLI": 1.0,
            "LSI": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fsoc_006_c",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 3",
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
          "socionics": {
            "SEE": 1.0,
            "SLE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fsoc_006_d",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 4",
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
          "socionics": {
            "EII": 1.0,
            "ESI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fsoc_006_e",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 5",
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
          "socionics": {
            "ESE": 1.0,
            "EIE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.9,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "fsoc_007",
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
        "id": "fsoc_007_a",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "SLI": 1.0,
            "LSI": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.8
        }
      },
      {
        "id": "fsoc_007_b",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "SEE": 1.0,
            "SLE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fsoc_007_c",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 3",
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
          "socionics": {
            "EII": 1.0,
            "ESI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fsoc_007_d",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 4",
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
          "socionics": {
            "ESE": 1.0,
            "EIE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.78,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fsoc_008",
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
        "id": "fsoc_008_a",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "SEE": 1.0,
            "SLE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "fsoc_008_b",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "EII": 1.0,
            "ESI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fsoc_008_c",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 3",
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
          "socionics": {
            "ESE": 1.0,
            "EIE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fsoc_008_d",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 4",
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
          "socionics": {
            "LII": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.85
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fsoc_009",
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
        "id": "fsoc_009_a",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "EII": 1.0,
            "ESI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "fsoc_009_b",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "ESE": 1.0,
            "EIE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "fsoc_009_a",
      "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
      "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
        "socionics": {
          "EII": 1.0,
          "ESI": 0.6
        },
        "quadra": {
          "Alpha": 1.4,
          "Gamma": -0.3
        },
        "temperament": {
          "NT": 1.4,
          "SJ": -0.3
        },
        "classicalTemperament": {
          "melancholic": 1.3,
          "sanguine": -0.3
        },
        "reliability": 0.83
      }
    },
    "right": {
      "id": "fsoc_009_b",
      "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
      "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
        "socionics": {
          "ESE": 1.0,
          "EIE": 0.6
        },
        "quadra": {
          "Beta": 1.4,
          "Delta": -0.3
        },
        "temperament": {
          "NF": 1.4,
          "SP": -0.3
        },
        "classicalTemperament": {
          "phlegmatic": 1.3,
          "choleric": -0.3
        },
        "reliability": 0.84
      }
    }
  },
  {
    "id": "fsoc_010",
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
        "id": "fsoc_010_a",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "ESE": 1.0,
            "EIE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "fsoc_010_b",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "LII": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fsoc_010_c",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 3",
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
          "socionics": {
            "LIE": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fsoc_010_d",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 4",
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
          "socionics": {
            "IEI": 1.0,
            "ILI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fsoc_011",
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
        "id": "fsoc_011_a",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "LII": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.85
        }
      },
      {
        "id": "fsoc_011_b",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "LIE": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fsoc_011_c",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 3",
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
          "socionics": {
            "IEI": 1.0,
            "ILI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fsoc_011_d",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 4",
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
          "socionics": {
            "ILE": 1.0,
            "IEE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fsoc_011_e",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 5",
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
          "socionics": {
            "SLI": 1.0,
            "LSI": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "fsoc_012",
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
        "id": "fsoc_012_a",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 1",
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
          "socionics": {
            "LIE": 1.0,
            "LSE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "fsoc_012_b",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 2",
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
          "socionics": {
            "IEI": 1.0,
            "ILI": 0.6
          },
          "quadra": {
            "Alpha": 1.4,
            "Gamma": -0.3
          },
          "temperament": {
            "NT": 1.4,
            "SJ": -0.3
          },
          "classicalTemperament": {
            "melancholic": 1.3,
            "sanguine": -0.3
          },
          "reliability": 0.89
        }
      },
      {
        "id": "fsoc_012_c",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 3",
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
          "socionics": {
            "ILE": 1.0,
            "IEE": 0.6
          },
          "quadra": {
            "Beta": 1.4,
            "Delta": -0.3
          },
          "temperament": {
            "NF": 1.4,
            "SP": -0.3
          },
          "classicalTemperament": {
            "phlegmatic": 1.3,
            "choleric": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "fsoc_012_d",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 4",
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
          "socionics": {
            "SLI": 1.0,
            "LSI": 0.6
          },
          "quadra": {
            "Gamma": 1.4,
            "Alpha": -0.3
          },
          "temperament": {
            "SJ": 1.4,
            "NT": -0.3
          },
          "classicalTemperament": {
            "choleric": 1.3,
            "phlegmatic": -0.3
          },
          "reliability": 0.78
        }
      },
      {
        "id": "fsoc_012_e",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal socionics, quadra, temperament opsi 5",
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
          "socionics": {
            "SEE": 1.0,
            "SLE": 0.6
          },
          "quadra": {
            "Delta": 1.4,
            "Beta": -0.3
          },
          "temperament": {
            "SP": 1.4,
            "NF": -0.3
          },
          "classicalTemperament": {
            "sanguine": 1.3,
            "melancholic": -0.3
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "socionics",
      "quadra",
      "temperament",
      "classicalTemperament"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  }
];
