import type { QuestionItem } from "../types";

export const FINAL_TIE_BREAK_QUESTIONS: QuestionItem[] = [
  {
    "id": "ftie_001",
    "kind": "firstReaction",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di kamar yang lampunya redup, dompet terbuka di kasur dan notifikasi tagihan masuk saat saldo tinggal sedikit. Tie-break untuk hasil yang terlalu dekat. Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "ftie_001_a",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 1",
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
          "enneagram": {
            "2": 1.5,
            "5": -0.4
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "attitudinalPsyche": {
            "L_flexible": 1.1,
            "L_indifferent": -0.4
          },
          "relationship": {
            "secureLeaning": 1.4,
            "emotionalTesting": -0.3
          },
          "stress": {
            "fight": 1.3,
            "freeze": -0.3
          },
          "reliability": 0.8
        }
      },
      {
        "id": "ftie_001_b",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 2",
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
          "enneagram": {
            "3": 1.5,
            "9": -0.4
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "attitudinalPsyche": {
            "E_insecure": 1.1,
            "E_confident": -0.3
          },
          "relationship": {
            "anxiousLeaning": 1.2,
            "avoidantLeaning": -0.2
          },
          "stress": {
            "flight": 1.3,
            "control": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "ftie_001_c",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 3",
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
          "enneagram": {
            "4": 1.5,
            "3": -0.3
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_flexible": 1.1,
            "F_indifferent": -0.4
          },
          "relationship": {
            "avoidantLeaning": 1.2,
            "reassuranceSeeking": -0.3
          },
          "stress": {
            "freeze": 1.3,
            "actionFirst": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "ftie_001_d",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 4",
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
          "enneagram": {
            "5": 1.5,
            "2": -0.4
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "attitudinalPsyche": {
            "V_insecure": 1.1,
            "V_flexible": -0.3
          },
          "relationship": {
            "fearfulAvoidantLeaning": 1.2,
            "secureLeaning": -0.3
          },
          "stress": {
            "fawn": 1.3,
            "boundarySetting": -0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "ftie_002",
    "kind": "hiddenReaction",
    "context": {
      "domain": "stress",
      "pressureLevel": "crisis",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Ruangan mendadak sunyi setelah seseorang menaikkan suara. Semua mata berpindah ke arahmu sebelum kau sempat bernapas panjang. Tie-break untuk hasil yang terlalu dekat. Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi yang paling mungkin kau sembunyikan dari orang lain.",
    "options": [
      {
        "id": "ftie_002_a",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 1",
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
          "enneagram": {
            "3": 1.5,
            "9": -0.4
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "attitudinalPsyche": {
            "E_insecure": 1.1,
            "E_confident": -0.3
          },
          "relationship": {
            "anxiousLeaning": 1.2,
            "avoidantLeaning": -0.2
          },
          "stress": {
            "flight": 1.3,
            "control": -0.3
          },
          "reliability": 0.81
        }
      },
      {
        "id": "ftie_002_b",
        "text": "Aku meminta bukti kecil yang bisa dilihat semua orang, bukan karena tidak percaya, tapi karena kata-kata saja tidak cukup malam itu.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 2",
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
          "enneagram": {
            "4": 1.5,
            "3": -0.3
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_flexible": 1.1,
            "F_indifferent": -0.4
          },
          "relationship": {
            "avoidantLeaning": 1.2,
            "reassuranceSeeking": -0.3
          },
          "stress": {
            "freeze": 1.3,
            "actionFirst": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "ftie_002_c",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 3",
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
          "enneagram": {
            "5": 1.5,
            "2": -0.4
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "attitudinalPsyche": {
            "V_insecure": 1.1,
            "V_flexible": -0.3
          },
          "relationship": {
            "fearfulAvoidantLeaning": 1.2,
            "secureLeaning": -0.3
          },
          "stress": {
            "fawn": 1.3,
            "boundarySetting": -0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "ftie_002_d",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 4",
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
          "enneagram": {
            "6": 1.5,
            "8": -0.4
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "attitudinalPsyche": {
            "L_confident": 1.2,
            "L_insecure": -0.4
          },
          "relationship": {
            "reassuranceSeeking": 1.3,
            "respectfulSpace": -0.2
          },
          "stress": {
            "control": 1.3,
            "collapse": -0.3
          },
          "reliability": 0.85
        }
      }
    ],
    "reliability": 0.82,
    "targetSystems": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "ftie_003",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di kafe kecil, sahabatmu tertawa dengan orang lain, tapi ketika menoleh padamu senyumnya seperti tertahan setengah jalan. Tie-break untuk hasil yang terlalu dekat. Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "ftie_003_a",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 1",
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
          "enneagram": {
            "4": 1.5,
            "3": -0.3
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_flexible": 1.1,
            "F_indifferent": -0.4
          },
          "relationship": {
            "avoidantLeaning": 1.2,
            "reassuranceSeeking": -0.3
          },
          "stress": {
            "freeze": 1.3,
            "actionFirst": -0.3
          },
          "reliability": 0.83
        }
      },
      {
        "id": "ftie_003_b",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 2",
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
          "enneagram": {
            "5": 1.5,
            "2": -0.4
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "attitudinalPsyche": {
            "V_insecure": 1.1,
            "V_flexible": -0.3
          },
          "relationship": {
            "fearfulAvoidantLeaning": 1.2,
            "secureLeaning": -0.3
          },
          "stress": {
            "fawn": 1.3,
            "boundarySetting": -0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "ftie_003_a",
      "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
      "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 1",
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
        "enneagram": {
          "4": 1.5,
          "3": -0.3
        },
        "instinct": {
          "sp": 1.6,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_flexible": 1.1,
          "F_indifferent": -0.4
        },
        "relationship": {
          "avoidantLeaning": 1.2,
          "reassuranceSeeking": -0.3
        },
        "stress": {
          "freeze": 1.3,
          "actionFirst": -0.3
        },
        "reliability": 0.83
      }
    },
    "right": {
      "id": "ftie_003_b",
      "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
      "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 2",
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
        "enneagram": {
          "5": 1.5,
          "2": -0.4
        },
        "instinct": {
          "sx": 1.6,
          "so": -0.3
        },
        "attitudinalPsyche": {
          "V_insecure": 1.1,
          "V_flexible": -0.3
        },
        "relationship": {
          "fearfulAvoidantLeaning": 1.2,
          "secureLeaning": -0.3
        },
        "stress": {
          "fawn": 1.3,
          "boundarySetting": -0.3
        },
        "reliability": 0.84
      }
    }
  },
  {
    "id": "ftie_004",
    "kind": "singleChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau duduk di dekat jendela, membayangkan seseorang yang mungkin bisa menjadi tempat pulang tanpa membuatmu kehilangan diri. Tie-break untuk hasil yang terlalu dekat. Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "ftie_004_a",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 1",
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
          "enneagram": {
            "5": 1.5,
            "2": -0.4
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "attitudinalPsyche": {
            "V_insecure": 1.1,
            "V_flexible": -0.3
          },
          "relationship": {
            "fearfulAvoidantLeaning": 1.2,
            "secureLeaning": -0.3
          },
          "stress": {
            "fawn": 1.3,
            "boundarySetting": -0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "ftie_004_b",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 2",
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
          "enneagram": {
            "6": 1.5,
            "8": -0.4
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "attitudinalPsyche": {
            "L_confident": 1.2,
            "L_insecure": -0.4
          },
          "relationship": {
            "reassuranceSeeking": 1.3,
            "respectfulSpace": -0.2
          },
          "stress": {
            "control": 1.3,
            "collapse": -0.3
          },
          "reliability": 0.85
        }
      },
      {
        "id": "ftie_004_c",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 3",
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
          "enneagram": {
            "7": 1.5,
            "1": -0.4
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "E_flexible": 1.2,
            "E_indifferent": -0.4
          },
          "relationship": {
            "intimacyFear": 1.2,
            "emotionalDepth": -0.2
          },
          "stress": {
            "collapse": 1.2,
            "perform": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "ftie_004_d",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 4",
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
          "enneagram": {
            "8": 1.5,
            "6": -0.4
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 1.2,
            "F_insecure": -0.4
          },
          "relationship": {
            "autonomyProtection": 1.3,
            "merging": -0.3
          },
          "stress": {
            "numb": 1.2,
            "emotionalExpression": -0.3
          },
          "reliability": 0.89
        }
      }
    ],
    "reliability": 0.86,
    "targetSystems": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "ftie_005",
    "kind": "multiChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Setelah hari terasa terlalu panjang, kau masuk kamar dan melihat tiga benda kecil di meja yang masing-masing seperti memanggil sisi berbeda dari dirimu. Tie-break untuk hasil yang terlalu dekat. Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih 1 sampai 2 yang paling dekat. Maksimal 2.",
    "options": [
      {
        "id": "ftie_005_a",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 1",
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
          "enneagram": {
            "6": 1.5,
            "8": -0.4
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "attitudinalPsyche": {
            "L_confident": 1.2,
            "L_insecure": -0.4
          },
          "relationship": {
            "reassuranceSeeking": 1.3,
            "respectfulSpace": -0.2
          },
          "stress": {
            "control": 1.3,
            "collapse": -0.3
          },
          "reliability": 0.85
        }
      },
      {
        "id": "ftie_005_b",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 2",
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
          "enneagram": {
            "7": 1.5,
            "1": -0.4
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "E_flexible": 1.2,
            "E_indifferent": -0.4
          },
          "relationship": {
            "intimacyFear": 1.2,
            "emotionalDepth": -0.2
          },
          "stress": {
            "collapse": 1.2,
            "perform": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "ftie_005_c",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 3",
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
          "enneagram": {
            "8": 1.5,
            "6": -0.4
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 1.2,
            "F_insecure": -0.4
          },
          "relationship": {
            "autonomyProtection": 1.3,
            "merging": -0.3
          },
          "stress": {
            "numb": 1.2,
            "emotionalExpression": -0.3
          },
          "reliability": 0.89
        }
      },
      {
        "id": "ftie_005_d",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 4",
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
          "enneagram": {
            "9": 1.5,
            "3": -0.4
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "attitudinalPsyche": {
            "V_confident": 1.2,
            "V_indifferent": -0.4
          },
          "relationship": {
            "emotionalTesting": 1.1,
            "directRepair": -0.2
          },
          "stress": {
            "isolate": 1.2,
            "peopleFirst": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "ftie_005_e",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 5",
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
          "enneagram": {
            "1": 1.5,
            "7": -0.4
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "L_flexible": 1.1,
            "L_indifferent": -0.4
          },
          "relationship": {
            "withdrawalWhenHurt": 1.2,
            "directConfrontation": -0.3
          },
          "stress": {
            "perform": 1.2,
            "collapse": -0.3
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.88,
    "targetSystems": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "ftie_006",
    "kind": "ranking",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di chat grup keluarga, satu kebohongan kecil diminta ditutup karena katanya “yang penting semua tenang dulu.” Tie-break untuk hasil yang terlalu dekat. Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "ftie_006_a",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 1",
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
          "enneagram": {
            "7": 1.5,
            "1": -0.4
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "E_flexible": 1.2,
            "E_indifferent": -0.4
          },
          "relationship": {
            "intimacyFear": 1.2,
            "emotionalDepth": -0.2
          },
          "stress": {
            "collapse": 1.2,
            "perform": -0.3
          },
          "reliability": 0.87
        }
      },
      {
        "id": "ftie_006_b",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 2",
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
          "enneagram": {
            "8": 1.5,
            "6": -0.4
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 1.2,
            "F_insecure": -0.4
          },
          "relationship": {
            "autonomyProtection": 1.3,
            "merging": -0.3
          },
          "stress": {
            "numb": 1.2,
            "emotionalExpression": -0.3
          },
          "reliability": 0.89
        }
      },
      {
        "id": "ftie_006_c",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 3",
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
          "enneagram": {
            "9": 1.5,
            "3": -0.4
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "attitudinalPsyche": {
            "V_confident": 1.2,
            "V_indifferent": -0.4
          },
          "relationship": {
            "emotionalTesting": 1.1,
            "directRepair": -0.2
          },
          "stress": {
            "isolate": 1.2,
            "peopleFirst": -0.3
          },
          "reliability": 0.9
        }
      },
      {
        "id": "ftie_006_d",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 4",
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
          "enneagram": {
            "1": 1.5,
            "7": -0.4
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "L_flexible": 1.1,
            "L_indifferent": -0.4
          },
          "relationship": {
            "withdrawalWhenHurt": 1.2,
            "directConfrontation": -0.3
          },
          "stress": {
            "perform": 1.2,
            "collapse": -0.3
          },
          "reliability": 0.78
        }
      },
      {
        "id": "ftie_006_e",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal cognitive, enneagram, instinct opsi 5",
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
          "enneagram": {
            "2": 1.5,
            "5": -0.4
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "attitudinalPsyche": {
            "E_insecure": 1.1,
            "E_confident": -0.3
          },
          "relationship": {
            "repairSeeking": 1.4,
            "boundaryCutoff": -0.3
          },
          "stress": {
            "intellectualize": 1.3,
            "emotionalExpression": -0.3
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.9,
    "targetSystems": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "enneagram",
      "instinct",
      "attitudinalPsyche",
      "relationship",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  }
];
