import type { QuestionItem } from "../types";

export const FINAL_ENNEAGRAM_QUESTIONS: QuestionItem[] = [
  {
    "id": "fenn_001",
    "kind": "ranking",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Koridor kampus ramai, kertas tugasmu terlipat di tangan, dan satu teman berkata, “namamu ikut saja, ya.” Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "fenn_001_a",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
          "wing": {
            "4w3": 1.0,
            "4w5": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_001_b",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
          "wing": {
            "5w4": 1.0,
            "5w6": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
        "id": "fenn_001_c",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 3",
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
            "6": 1.5,
            "8": -0.4
          },
          "wing": {
            "6w5": 1.0,
            "6w7": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_001_d",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 4",
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
            "7": 1.5,
            "1": -0.4
          },
          "wing": {
            "7w6": 1.0,
            "7w8": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_001_e",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 5",
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
            "8": 1.5,
            "6": -0.4
          },
          "wing": {
            "8w7": 1.0,
            "8w9": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
    "reliability": 0.8,
    "targetSystems": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "fenn_002",
    "kind": "firstReaction",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di kamar yang lampunya redup, dompet terbuka di kasur dan notifikasi tagihan masuk saat saldo tinggal sedikit. Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "fenn_002_a",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
          "wing": {
            "5w4": 1.0,
            "5w6": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
        "id": "fenn_002_b",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
          "wing": {
            "6w5": 1.0,
            "6w7": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_002_c",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 3",
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
          "wing": {
            "7w6": 1.0,
            "7w8": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_002_d",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 4",
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
          "wing": {
            "8w7": 1.0,
            "8w9": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
    "reliability": 0.82,
    "targetSystems": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fenn_003",
    "kind": "hiddenReaction",
    "context": {
      "domain": "stress",
      "pressureLevel": "crisis",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Ruangan mendadak sunyi setelah seseorang menaikkan suara. Semua mata berpindah ke arahmu sebelum kau sempat bernapas panjang. Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi yang paling mungkin kau sembunyikan dari orang lain.",
    "options": [
      {
        "id": "fenn_003_a",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
          "wing": {
            "6w5": 1.0,
            "6w7": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_003_b",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
          "wing": {
            "7w6": 1.0,
            "7w8": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_003_c",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 3",
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
          "wing": {
            "8w7": 1.0,
            "8w9": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
        "id": "fenn_003_d",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 4",
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
          "wing": {
            "9w8": 1.0,
            "9w1": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
          },
          "coreFear": {
            "beingSeparated": 1.1
          },
          "coreDesire": {
            "peace": 1.1
          },
          "reliability": 0.9
        }
      }
    ],
    "reliability": 0.84,
    "targetSystems": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fenn_004",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di kafe kecil, sahabatmu tertawa dengan orang lain, tapi ketika menoleh padamu senyumnya seperti tertahan setengah jalan. Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "fenn_004_a",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
          "wing": {
            "7w6": 1.0,
            "7w8": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_004_b",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
          "wing": {
            "8w7": 1.0,
            "8w9": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
    "reliability": 0.86,
    "targetSystems": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "fenn_004_a",
      "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
      "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
        "wing": {
          "7w6": 1.0,
          "7w8": 0.5
        },
        "instinct": {
          "sp": 1.6,
          "sx": -0.3
        },
        "tritype": {
          "heart": 1.2,
          "head": 0.4
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
    "right": {
      "id": "fenn_004_b",
      "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
      "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
        "wing": {
          "8w7": 1.0,
          "8w9": 0.5
        },
        "instinct": {
          "sx": 1.6,
          "so": -0.3
        },
        "tritype": {
          "head": 1.2,
          "gut": 0.4
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
  },
  {
    "id": "fenn_005",
    "kind": "singleChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau duduk di dekat jendela, membayangkan seseorang yang mungkin bisa menjadi tempat pulang tanpa membuatmu kehilangan diri. Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "fenn_005_a",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
            "8": 1.5,
            "6": -0.4
          },
          "wing": {
            "8w7": 1.0,
            "8w9": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
        "id": "fenn_005_b",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
            "9": 1.5,
            "3": -0.4
          },
          "wing": {
            "9w8": 1.0,
            "9w1": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_005_c",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 3",
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
            "1": 1.5,
            "7": -0.4
          },
          "wing": {
            "1w9": 1.0,
            "1w2": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_005_d",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 4",
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
            "2": 1.5,
            "5": -0.4
          },
          "wing": {
            "2w1": 1.0,
            "2w3": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fenn_006",
    "kind": "multiChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "low",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Setelah hari terasa terlalu panjang, kau masuk kamar dan melihat tiga benda kecil di meja yang masing-masing seperti memanggil sisi berbeda dari dirimu. Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih 1 sampai 2 yang paling dekat. Maksimal 2.",
    "options": [
      {
        "id": "fenn_006_a",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
            "9": 1.5,
            "3": -0.4
          },
          "wing": {
            "9w8": 1.0,
            "9w1": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_006_b",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
            "1": 1.5,
            "7": -0.4
          },
          "wing": {
            "1w9": 1.0,
            "1w2": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_006_c",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 3",
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
            "2": 1.5,
            "5": -0.4
          },
          "wing": {
            "2w1": 1.0,
            "2w3": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
        "id": "fenn_006_d",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 4",
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
            "3": 1.5,
            "9": -0.4
          },
          "wing": {
            "3w2": 1.0,
            "3w4": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_006_e",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 5",
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
            "4": 1.5,
            "3": -0.3
          },
          "wing": {
            "4w3": 1.0,
            "4w5": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
    "reliability": 0.9,
    "targetSystems": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "fenn_007",
    "kind": "ranking",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di chat grup keluarga, satu kebohongan kecil diminta ditutup karena katanya “yang penting semua tenang dulu.” Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "fenn_007_a",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
            "1": 1.5,
            "7": -0.4
          },
          "wing": {
            "1w9": 1.0,
            "1w2": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_007_b",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
            "2": 1.5,
            "5": -0.4
          },
          "wing": {
            "2w1": 1.0,
            "2w3": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
        "id": "fenn_007_c",
        "text": "Aku mengirim pesan pendek: “aku butuh waktu sebentar, tapi aku tidak menghilang.”",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 3",
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
            "3": 1.5,
            "9": -0.4
          },
          "wing": {
            "3w2": 1.0,
            "3w4": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_007_d",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 4",
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
            "4": 1.5,
            "3": -0.3
          },
          "wing": {
            "4w3": 1.0,
            "4w5": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_007_e",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 5",
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
            "5": 1.5,
            "2": -0.4
          },
          "wing": {
            "5w4": 1.0,
            "5w6": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
    "reliability": 0.78,
    "targetSystems": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "rankLimit": 5
  },
  {
    "id": "fenn_008",
    "kind": "firstReaction",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di halte yang basah, rencana berubah lagi. Tasmu berat, baterai HP menipis, dan orang di sampingmu terus bertanya harus bagaimana. Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi pertama sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "fenn_008_a",
        "text": "Aku langsung berdiri dan melakukan hal yang paling terlihat perlu, meski nanti aku baru mengecek apakah caraku benar.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
          "wing": {
            "2w1": 1.0,
            "2w3": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
        "id": "fenn_008_b",
        "text": "Aku menatap benda kecil di meja, mengingat kejadian lama yang bentuknya mirip, lalu memutuskan tidak terburu-buru percaya.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
          "wing": {
            "3w2": 1.0,
            "3w4": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_008_c",
        "text": "Aku menawarkan bantuan praktis dulu: mengantar, membayar, memegang tas, atau menyelesaikan bagian yang membuat orang lain panik.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 3",
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
          "wing": {
            "4w3": 1.0,
            "4w5": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_008_d",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 4",
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
          "wing": {
            "5w4": 1.0,
            "5w6": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
    "reliability": 0.8,
    "targetSystems": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fenn_009",
    "kind": "hiddenReaction",
    "context": {
      "domain": "identity",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di depan cermin kamar mandi, air keran masih menyala dan kalimat pujian tadi justru terasa seperti pakaian yang ukurannya salah. Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih reaksi yang paling mungkin kau sembunyikan dari orang lain.",
    "options": [
      {
        "id": "fenn_009_a",
        "text": "Aku berkata, “aku bisa mengerti alasanmu, tapi aku tidak bisa ikut menutupinya.”",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
          "wing": {
            "3w2": 1.0,
            "3w4": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_009_b",
        "text": "Aku membiarkan orang lain bicara sampai selesai, lalu mengulang satu kalimat mereka yang menurutku paling penting.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
          "wing": {
            "4w3": 1.0,
            "4w5": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_009_c",
        "text": "Aku memilih satu orang yang paling tenang di ruangan itu dan mulai dari sana, karena semua orang lain sudah terlalu panas.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 3",
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
          "wing": {
            "5w4": 1.0,
            "5w6": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
        "id": "fenn_009_d",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 4",
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
          "wing": {
            "6w5": 1.0,
            "6w7": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
    "reliability": 0.82,
    "targetSystems": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fenn_010",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Dapur rumah pukul sembilan malam, sendok berhenti di bibir mangkuk ketika seseorang menyebut nama yang biasanya dihindari. Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "fenn_010_a",
        "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
          "wing": {
            "4w3": 1.0,
            "4w5": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_010_b",
        "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
          "wing": {
            "5w4": 1.0,
            "5w6": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "left": {
      "id": "fenn_010_a",
      "text": "Aku menutup HP sebentar, duduk di lantai, lalu memutuskan apa yang masih bisa diselamatkan hari ini.",
      "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
        "wing": {
          "4w3": 1.0,
          "4w5": 0.5
        },
        "instinct": {
          "sp": 1.6,
          "sx": -0.3
        },
        "tritype": {
          "heart": 1.2,
          "head": 0.4
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
      "id": "fenn_010_b",
      "text": "Aku membuat candaan tipis, bukan untuk menghindar sepenuhnya, tapi untuk memberi ruang sebelum jawabanku menjadi terlalu keras.",
      "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
        "wing": {
          "5w4": 1.0,
          "5w6": 0.5
        },
        "instinct": {
          "sx": 1.6,
          "so": -0.3
        },
        "tritype": {
          "head": 1.2,
          "gut": 0.4
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
    "id": "fenn_011",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Meja rapat penuh gelas plastik, layar laptop membeku, dan chat grup mulai menagih keputusan yang belum siap. Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "fenn_011_a",
        "text": "Aku menyimpan pesan itu tanpa membalas dulu, lalu memperhatikan apakah tindakannya besok cocok dengan kalimatnya malam ini.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
          "wing": {
            "5w4": 1.0,
            "5w6": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
        "id": "fenn_011_b",
        "text": "Aku menahan jawaban sebentar, menyentuh tepi gelas, lalu memperhatikan siapa yang berusaha mengganti topik terlalu cepat.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
          "wing": {
            "6w5": 1.0,
            "6w7": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_011_c",
        "text": "Aku membuka catatan di HP, menulis tiga langkah paling dekat, lalu berkata, “kita mulai dari yang bisa diselesaikan malam ini.”",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 3",
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
          "wing": {
            "7w6": 1.0,
            "7w8": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_011_d",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 4",
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
          "wing": {
            "8w7": 1.0,
            "8w9": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
    "reliability": 0.86,
    "targetSystems": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage"
  },
  {
    "id": "fenn_012",
    "kind": "multiChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Di teras minimarket setelah hujan, layar HP menyala dengan pesan pendek dari orang yang beberapa hari ini membuat dadamu tidak tenang. Enneagram, wing, instinct, tritype tambahan Apa yang paling dekat dengan caramu bergerak di momen itu?",
    "instruction": "Pilih 1 sampai 2 yang paling dekat. Maksimal 2.",
    "options": [
      {
        "id": "fenn_012_a",
        "text": "Aku menggeser kursi sedikit mundur dan menjawab singkat, cukup untuk jelas tanpa membuka semua isi kepala.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 1",
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
          "wing": {
            "6w5": 1.0,
            "6w7": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_012_b",
        "text": "Aku bertanya pelan, “sebenarnya kau ingin aku mendengar, membantu, atau memilihkan jalan keluar?”",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 2",
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
          "wing": {
            "7w6": 1.0,
            "7w8": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
        "id": "fenn_012_c",
        "text": "Aku mengambil napas, merapikan benda di depanku, lalu meminta semua orang berhenti bicara bergantian.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 3",
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
          "wing": {
            "8w7": 1.0,
            "8w9": 0.5
          },
          "instinct": {
            "sx": 1.6,
            "so": -0.3
          },
          "tritype": {
            "head": 1.2,
            "gut": 0.4
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
        "id": "fenn_012_d",
        "text": "Aku tertawa kecil agar suasana tidak pecah, tetapi setelah itu aku menyimpan percakapan itu di kepala lebih lama dari yang terlihat.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 4",
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
          "wing": {
            "9w8": 1.0,
            "9w1": 0.5
          },
          "instinct": {
            "so": 1.6,
            "sp": -0.3
          },
          "tritype": {
            "gut": 1.2,
            "heart": 0.4
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
        "id": "fenn_012_e",
        "text": "Aku memilih pergi ke tempat yang lebih sepi dulu, bukan karena menyerah, tapi karena kalau tetap di sana aku akan bicara terlalu tajam.",
        "subtleMeaning": "Sinyal enneagram, wing, instinct opsi 5",
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
          "wing": {
            "1w9": 1.0,
            "1w2": 0.5
          },
          "instinct": {
            "sp": 1.6,
            "sx": -0.3
          },
          "tritype": {
            "heart": 1.2,
            "head": 0.4
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
    "reliability": 0.88,
    "targetSystems": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "enneagram",
      "wing",
      "instinct",
      "tritype",
      "coreFear",
      "coreDesire"
    ],
    "batchTag": "tahap-3-final-coverage",
    "minSelect": 1,
    "maxSelect": 2
  }
];
