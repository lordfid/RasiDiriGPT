import type { QuestionItem } from "../types";

export const PREFERENCE_QUESTIONS: QuestionItem[] = [
  {
    "id": "pref_001",
    "kind": "singleChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Kau mulai dekat dengan seseorang. Setelah beberapa minggu, kau duduk di halte sore hari dan sadar mulai membayangkan apakah ia bisa menjadi tempat pulang.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_001_a",
        "text": "Ia tidak memaksa jawaban cepat; ia duduk di sampingmu dan bertanya, “mau ditemani atau mau ruang?”",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_001_b",
        "text": "Ia melihatmu terlalu tepat sampai kau ingin tertawa dan kabur dalam waktu yang sama.",
        "subtleMeaning": "idealIntensity",
        "weights": {
          "idealPartner": {
            "idealIntensity": 2,
            "idealStability": -0.7
          },
          "loveStyle": {
            "emotionalDepth": 1.2
          },
          "instinct": {
            "sx": 1.2
          },
          "values": {
            "meaning": 0.8
          },
          "evidence": {
            "intensitySeeking": 1
          },
          "positive": {
            "aliveFeeling": 1
          },
          "negative": {
            "overCaution": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_001_c",
        "text": "Ia berkata, “aku salah di bagian ini,” tanpa membuatmu harus mengemis penjelasan.",
        "subtleMeaning": "idealHonesty",
        "weights": {
          "idealPartner": {
            "idealHonesty": 2
          },
          "loveStyle": {
            "verbalReassurance": 1
          },
          "values": {
            "truth": 1
          },
          "moral": {
            "truthBased": 0.8
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanPromise": 1
          },
          "negative": {
            "sweetAvoidance": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_001_d",
        "text": "Ia tidak mengejar saat kau butuh diam, tapi tetap meninggalkan lampu kecil menyala.",
        "subtleMeaning": "idealFreedom",
        "weights": {
          "idealPartner": {
            "idealFreedom": 2,
            "idealStability": -0.4
          },
          "loveStyle": {
            "respectfulSpace": 1.2
          },
          "instinct": {
            "sx": 0.5,
            "sp": 0.3
          },
          "values": {
            "autonomy": 1,
            "freedom": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "breathingRoom": 1
          },
          "negative": {
            "possessivePull": -0.8
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
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "pref_002",
    "kind": "ranking",
    "context": {
      "domain": "preference",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Setelah hari yang membuatmu merasa kalah, kau masuk kamar. Tas jatuh di lantai, rambut masih basah, dan kau hanya ingin satu hal yang membuat napasmu kembali pelan.",
    "instruction": "Urutkan dari yang paling membuatmu merasa pulih sampai yang paling jauh.",
    "options": [
      {
        "id": "pref_002_a",
        "text": "Aku memilih kamar dengan lampu kecil, selimut berat, dan pintu yang bisa dikunci tanpa rasa bersalah.",
        "subtleMeaning": "quietRoom",
        "weights": {
          "environment": {
            "quietRoom": 2,
            "livelyPlace": -0.8,
            "privateSpace": 1
          },
          "instinct": {
            "sp": 0.8
          },
          "attitudinalPsyche": {
            "F_secure": 1,
            "E_private": 0.6
          },
          "evidence": {
            "withdrawal": 0.5,
            "moodRegulation": 1
          },
          "positive": {
            "softRecovery": 1
          },
          "negative": {
            "socialOverload": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_002_b",
        "text": "Ia datang membawa obat, nasi hangat, dan tidak banyak bertanya sampai kau siap bicara.",
        "subtleMeaning": "practicalCare",
        "weights": {
          "loveStyle": {
            "practicalCare": 2,
            "verbalReassurance": -0.4
          },
          "idealPartner": {
            "idealTenderness": 1
          },
          "environment": {
            "functionalSpace": 0.8
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "quietCare": 1
          },
          "negative": {
            "emptySpeech": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_002_c",
        "text": "Aku memilih meja yang ada tawa pelan dan orang yang tidak memaksa siapa pun tampil kuat.",
        "subtleMeaning": "socialWarmth",
        "weights": {
          "environment": {
            "sociallyWarmSpace": 2,
            "privateSpace": -0.4
          },
          "instinct": {
            "so": 1
          },
          "loveStyle": {
            "playfulBond": 0.8
          },
          "evidence": {
            "belongingSeeking": 1
          },
          "positive": {
            "sharedWarmth": 1
          },
          "negative": {
            "sealedIsolation": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_002_d",
        "text": "Ia berani duduk di kalimat yang sulit, tidak mengubahnya jadi bercanda terlalu cepat.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_002_e",
        "text": "Ia membuatmu merasa boleh punya hidup sendiri tanpa takut ditinggalkan.",
        "subtleMeaning": "idealFreedom",
        "weights": {
          "idealPartner": {
            "idealFreedom": 2,
            "idealStability": -0.4
          },
          "loveStyle": {
            "respectfulSpace": 1.2
          },
          "instinct": {
            "sx": 0.5,
            "sp": 0.3
          },
          "values": {
            "autonomy": 1,
            "freedom": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "breathingRoom": 1
          },
          "negative": {
            "possessivePull": -0.8
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
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "pref_003",
    "kind": "multiChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang mencoba memperhatikanmu setelah kau melewati minggu yang berat. Beberapa bentuk perhatian terasa tulus, beberapa terasa seperti pintu yang dikunci dari luar.",
    "instruction": "Pilih maksimal 2 yang paling terasa benar.",
    "options": [
      {
        "id": "pref_003_a",
        "text": "Ia memperbaiki hal kecil yang rusak di harimu tanpa mengumumkan diri sebagai penyelamat.",
        "subtleMeaning": "practicalCare",
        "weights": {
          "loveStyle": {
            "practicalCare": 2,
            "verbalReassurance": -0.4
          },
          "idealPartner": {
            "idealTenderness": 1
          },
          "environment": {
            "functionalSpace": 0.8
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "quietCare": 1
          },
          "negative": {
            "emptySpeech": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_003_b",
        "text": "Ia bertanya pelan, “bagian mana yang paling sakit?” lalu benar-benar menunggu.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_003_c",
        "text": "Ia memilih kalimat yang bersih, meski kalimat itu tidak membuatnya terlihat paling manis.",
        "subtleMeaning": "idealHonesty",
        "weights": {
          "idealPartner": {
            "idealHonesty": 2
          },
          "loveStyle": {
            "verbalReassurance": 1
          },
          "values": {
            "truth": 1
          },
          "moral": {
            "truthBased": 0.8
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanPromise": 1
          },
          "negative": {
            "sweetAvoidance": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_003_d",
        "text": "Ia menepati hal kecil yang pernah ia ucapkan, bahkan saat kau sendiri sudah lupa.",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
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
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "pref_004",
    "kind": "singleChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di meja kafe, orang itu bercanda tentang hal yang sebenarnya penting bagimu. Sendok kecil di cangkirmu berhenti bergerak.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_004_a",
        "text": "Ia berkata, “aku salah di bagian ini,” tanpa membuatmu harus mengemis penjelasan.",
        "subtleMeaning": "idealHonesty",
        "weights": {
          "idealPartner": {
            "idealHonesty": 2
          },
          "loveStyle": {
            "verbalReassurance": 1
          },
          "values": {
            "truth": 1
          },
          "moral": {
            "truthBased": 0.8
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanPromise": 1
          },
          "negative": {
            "sweetAvoidance": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_004_b",
        "text": "Ia tidak mengejar saat kau butuh diam, tapi tetap meninggalkan lampu kecil menyala.",
        "subtleMeaning": "idealFreedom",
        "weights": {
          "idealPartner": {
            "idealFreedom": 2,
            "idealStability": -0.4
          },
          "loveStyle": {
            "respectfulSpace": 1.2
          },
          "instinct": {
            "sx": 0.5,
            "sp": 0.3
          },
          "values": {
            "autonomy": 1,
            "freedom": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "breathingRoom": 1
          },
          "negative": {
            "possessivePull": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_004_c",
        "text": "Ia berani duduk di kalimat yang sulit, tidak mengubahnya jadi bercanda terlalu cepat.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_004_d",
        "text": "Ia tidak memaksa jawaban cepat; ia duduk di sampingmu dan bertanya, “mau ditemani atau mau ruang?”",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
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
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "pref_005",
    "kind": "forcedChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Malam Minggu, kau punya dua undangan. Satu rumah kecil dengan dua orang yang mengenal diam-mu; satu tempat ramai yang membuatmu merasa hidup lagi.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_005_a",
        "text": "Aku mencari sudut paling sunyi, tempat suara orang berubah jadi jauh.",
        "subtleMeaning": "quietRoom",
        "weights": {
          "environment": {
            "quietRoom": 2,
            "livelyPlace": -0.8,
            "privateSpace": 1
          },
          "instinct": {
            "sp": 0.8
          },
          "attitudinalPsyche": {
            "F_secure": 1,
            "E_private": 0.6
          },
          "evidence": {
            "withdrawal": 0.5,
            "moodRegulation": 1
          },
          "positive": {
            "softRecovery": 1
          },
          "negative": {
            "socialOverload": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_005_b",
        "text": "Aku ingin tempat dengan suara piring, obrolan ringan, dan seseorang yang mengenal pesananku.",
        "subtleMeaning": "socialWarmth",
        "weights": {
          "environment": {
            "sociallyWarmSpace": 2,
            "privateSpace": -0.4
          },
          "instinct": {
            "so": 1
          },
          "loveStyle": {
            "playfulBond": 0.8
          },
          "evidence": {
            "belongingSeeking": 1
          },
          "positive": {
            "sharedWarmth": 1
          },
          "negative": {
            "sealedIsolation": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "pref_005_a",
      "text": "Aku mencari sudut paling sunyi, tempat suara orang berubah jadi jauh.",
      "subtleMeaning": "quietRoom",
      "weights": {
        "environment": {
          "quietRoom": 2,
          "livelyPlace": -0.8,
          "privateSpace": 1
        },
        "instinct": {
          "sp": 0.8
        },
        "attitudinalPsyche": {
          "F_secure": 1,
          "E_private": 0.6
        },
        "evidence": {
          "withdrawal": 0.5,
          "moodRegulation": 1
        },
        "positive": {
          "softRecovery": 1
        },
        "negative": {
          "socialOverload": -0.8
        },
        "reliability": 0.8
      }
    },
    "right": {
      "id": "pref_005_b",
      "text": "Aku ingin tempat dengan suara piring, obrolan ringan, dan seseorang yang mengenal pesananku.",
      "subtleMeaning": "socialWarmth",
      "weights": {
        "environment": {
          "sociallyWarmSpace": 2,
          "privateSpace": -0.4
        },
        "instinct": {
          "so": 1
        },
        "loveStyle": {
          "playfulBond": 0.8
        },
        "evidence": {
          "belongingSeeking": 1
        },
        "positive": {
          "sharedWarmth": 1
        },
        "negative": {
          "sealedIsolation": -0.7
        },
        "reliability": 0.78
      }
    }
  },
  {
    "id": "pref_006",
    "kind": "singleChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Ia meminta maaf lewat pesan panjang. Di akhir kalimat ada “aku cuma takut kehilangan kamu,” dan kau membaca ulang tiga kali.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_006_a",
        "text": "Ia memilih kalimat yang bersih, meski kalimat itu tidak membuatnya terlihat paling manis.",
        "subtleMeaning": "idealHonesty",
        "weights": {
          "idealPartner": {
            "idealHonesty": 2
          },
          "loveStyle": {
            "verbalReassurance": 1
          },
          "values": {
            "truth": 1
          },
          "moral": {
            "truthBased": 0.8
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanPromise": 1
          },
          "negative": {
            "sweetAvoidance": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_006_b",
        "text": "Ia menepati hal kecil yang pernah ia ucapkan, bahkan saat kau sendiri sudah lupa.",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_006_c",
        "text": "Ia bertanya pelan, “bagian mana yang paling sakit?” lalu benar-benar menunggu.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_006_d",
        "text": "Ia membuatmu merasa boleh punya hidup sendiri tanpa takut ditinggalkan.",
        "subtleMeaning": "idealFreedom",
        "weights": {
          "idealPartner": {
            "idealFreedom": 2,
            "idealStability": -0.4
          },
          "loveStyle": {
            "respectfulSpace": 1.2
          },
          "instinct": {
            "sx": 0.5,
            "sp": 0.3
          },
          "values": {
            "autonomy": 1,
            "freedom": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "breathingRoom": 1
          },
          "negative": {
            "possessivePull": -0.8
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
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "pref_007",
    "kind": "multiChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Minggumu berat. Teman-teman mengajak bertemu, tapi kau hanya ingin bersama orang yang tidak membuatmu berpura-pura baik.",
    "instruction": "Pilih maksimal 2 yang paling terasa benar.",
    "options": [
      {
        "id": "pref_007_a",
        "text": "Ia tidak memaksa jawaban cepat; ia duduk di sampingmu dan bertanya, “mau ditemani atau mau ruang?”",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_007_b",
        "text": "Ia datang membawa obat, nasi hangat, dan tidak banyak bertanya sampai kau siap bicara.",
        "subtleMeaning": "practicalCare",
        "weights": {
          "loveStyle": {
            "practicalCare": 2,
            "verbalReassurance": -0.4
          },
          "idealPartner": {
            "idealTenderness": 1
          },
          "environment": {
            "functionalSpace": 0.8
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "quietCare": 1
          },
          "negative": {
            "emptySpeech": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_007_c",
        "text": "Ia berani duduk di kalimat yang sulit, tidak mengubahnya jadi bercanda terlalu cepat.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_007_d",
        "text": "Aku memilih meja yang ada tawa pelan dan orang yang tidak memaksa siapa pun tampil kuat.",
        "subtleMeaning": "socialWarmth",
        "weights": {
          "environment": {
            "sociallyWarmSpace": 2,
            "privateSpace": -0.4
          },
          "instinct": {
            "so": 1
          },
          "loveStyle": {
            "playfulBond": 0.8
          },
          "evidence": {
            "belongingSeeking": 1
          },
          "positive": {
            "sharedWarmth": 1
          },
          "negative": {
            "sealedIsolation": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "pref_008",
    "kind": "singleChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di minimarket kecil, kau berdiri terlalu lama di depan rak. Ada benda sederhana yang tiba-tiba terasa seperti cara menyelamatkan malammu.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_008_a",
        "text": "Aku memilih kamar dengan lampu kecil, selimut berat, dan pintu yang bisa dikunci tanpa rasa bersalah.",
        "subtleMeaning": "quietRoom",
        "weights": {
          "environment": {
            "quietRoom": 2,
            "livelyPlace": -0.8,
            "privateSpace": 1
          },
          "instinct": {
            "sp": 0.8
          },
          "attitudinalPsyche": {
            "F_secure": 1,
            "E_private": 0.6
          },
          "evidence": {
            "withdrawal": 0.5,
            "moodRegulation": 1
          },
          "positive": {
            "softRecovery": 1
          },
          "negative": {
            "socialOverload": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_008_b",
        "text": "Ia memperbaiki hal kecil yang rusak di harimu tanpa mengumumkan diri sebagai penyelamat.",
        "subtleMeaning": "practicalCare",
        "weights": {
          "loveStyle": {
            "practicalCare": 2,
            "verbalReassurance": -0.4
          },
          "idealPartner": {
            "idealTenderness": 1
          },
          "environment": {
            "functionalSpace": 0.8
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "quietCare": 1
          },
          "negative": {
            "emptySpeech": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_008_c",
        "text": "Aku ingin tempat dengan suara piring, obrolan ringan, dan seseorang yang mengenal pesananku.",
        "subtleMeaning": "socialWarmth",
        "weights": {
          "environment": {
            "sociallyWarmSpace": 2,
            "privateSpace": -0.4
          },
          "instinct": {
            "so": 1
          },
          "loveStyle": {
            "playfulBond": 0.8
          },
          "evidence": {
            "belongingSeeking": 1
          },
          "positive": {
            "sharedWarmth": 1
          },
          "negative": {
            "sealedIsolation": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_008_d",
        "text": "Ia membuat percakapan biasa terasa seperti pintu yang baru dibuka di dada.",
        "subtleMeaning": "idealIntensity",
        "weights": {
          "idealPartner": {
            "idealIntensity": 2,
            "idealStability": -0.7
          },
          "loveStyle": {
            "emotionalDepth": 1.2
          },
          "instinct": {
            "sx": 1.2
          },
          "values": {
            "meaning": 0.8
          },
          "evidence": {
            "intensitySeeking": 1
          },
          "positive": {
            "aliveFeeling": 1
          },
          "negative": {
            "overCaution": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "pref_009",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Ada dua pesan masuk. Satu dari orang yang membuat hidupmu tenang, satu dari orang yang membuat dadamu menyala lagi.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_009_a",
        "text": "Ia menepati hal kecil yang pernah ia ucapkan, bahkan saat kau sendiri sudah lupa.",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_009_b",
        "text": "Ia melihatmu terlalu tepat sampai kau ingin tertawa dan kabur dalam waktu yang sama.",
        "subtleMeaning": "idealIntensity",
        "weights": {
          "idealPartner": {
            "idealIntensity": 2,
            "idealStability": -0.7
          },
          "loveStyle": {
            "emotionalDepth": 1.2
          },
          "instinct": {
            "sx": 1.2
          },
          "values": {
            "meaning": 0.8
          },
          "evidence": {
            "intensitySeeking": 1
          },
          "positive": {
            "aliveFeeling": 1
          },
          "negative": {
            "overCaution": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "pref_009_a",
      "text": "Ia menepati hal kecil yang pernah ia ucapkan, bahkan saat kau sendiri sudah lupa.",
      "subtleMeaning": "idealSafety",
      "weights": {
        "idealPartner": {
          "idealSafety": 2,
          "idealIntensity": -0.8
        },
        "loveStyle": {
          "steadyPresence": 1.2
        },
        "instinct": {
          "sp": 1
        },
        "values": {
          "security": 1
        },
        "evidence": {
          "comfortSeeking": 1,
          "riskAvoidance": 0.5
        },
        "positive": {
          "safeAttachmentCue": 1
        },
        "negative": {
          "recklessSpark": -0.8
        },
        "reliability": 0.8
      }
    },
    "right": {
      "id": "pref_009_b",
      "text": "Ia melihatmu terlalu tepat sampai kau ingin tertawa dan kabur dalam waktu yang sama.",
      "subtleMeaning": "idealIntensity",
      "weights": {
        "idealPartner": {
          "idealIntensity": 2,
          "idealStability": -0.7
        },
        "loveStyle": {
          "emotionalDepth": 1.2
        },
        "instinct": {
          "sx": 1.2
        },
        "values": {
          "meaning": 0.8
        },
        "evidence": {
          "intensitySeeking": 1
        },
        "positive": {
          "aliveFeeling": 1
        },
        "negative": {
          "overCaution": -0.7
        },
        "reliability": 0.78
      }
    }
  },
  {
    "id": "pref_010",
    "kind": "ranking",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang memujimu setelah kau hampir menyerah. Kalimatnya kecil, tapi caranya memandangmu membuatmu memutuskan apakah itu bisa dipercaya.",
    "instruction": "Urutkan dari yang paling membuatmu merasa pulih sampai yang paling jauh.",
    "options": [
      {
        "id": "pref_010_a",
        "text": "Ia berkata, “aku salah di bagian ini,” tanpa membuatmu harus mengemis penjelasan.",
        "subtleMeaning": "idealHonesty",
        "weights": {
          "idealPartner": {
            "idealHonesty": 2
          },
          "loveStyle": {
            "verbalReassurance": 1
          },
          "values": {
            "truth": 1
          },
          "moral": {
            "truthBased": 0.8
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanPromise": 1
          },
          "negative": {
            "sweetAvoidance": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_010_b",
        "text": "Ia bertanya pelan, “bagian mana yang paling sakit?” lalu benar-benar menunggu.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_010_c",
        "text": "Ia datang membawa obat, nasi hangat, dan tidak banyak bertanya sampai kau siap bicara.",
        "subtleMeaning": "practicalCare",
        "weights": {
          "loveStyle": {
            "practicalCare": 2,
            "verbalReassurance": -0.4
          },
          "idealPartner": {
            "idealTenderness": 1
          },
          "environment": {
            "functionalSpace": 0.8
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "quietCare": 1
          },
          "negative": {
            "emptySpeech": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_010_d",
        "text": "Ia tidak memaksa jawaban cepat; ia duduk di sampingmu dan bertanya, “mau ditemani atau mau ruang?”",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_010_e",
        "text": "Ia tidak mengejar saat kau butuh diam, tapi tetap meninggalkan lampu kecil menyala.",
        "subtleMeaning": "idealFreedom",
        "weights": {
          "idealPartner": {
            "idealFreedom": 2,
            "idealStability": -0.4
          },
          "loveStyle": {
            "respectfulSpace": 1.2
          },
          "instinct": {
            "sx": 0.5,
            "sp": 0.3
          },
          "values": {
            "autonomy": 1,
            "freedom": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "breathingRoom": 1
          },
          "negative": {
            "possessivePull": -0.8
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
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "pref_011",
    "kind": "singleChoice",
    "context": {
      "domain": "preference",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau ingin menghilang sebentar. Di luar, hujan tinggal gerimis; di dalam rumah, suara TV masih terlalu keras.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_011_a",
        "text": "Aku mencari sudut paling sunyi, tempat suara orang berubah jadi jauh.",
        "subtleMeaning": "quietRoom",
        "weights": {
          "environment": {
            "quietRoom": 2,
            "livelyPlace": -0.8,
            "privateSpace": 1
          },
          "instinct": {
            "sp": 0.8
          },
          "attitudinalPsyche": {
            "F_secure": 1,
            "E_private": 0.6
          },
          "evidence": {
            "withdrawal": 0.5,
            "moodRegulation": 1
          },
          "positive": {
            "softRecovery": 1
          },
          "negative": {
            "socialOverload": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_011_b",
        "text": "Aku memilih meja yang ada tawa pelan dan orang yang tidak memaksa siapa pun tampil kuat.",
        "subtleMeaning": "socialWarmth",
        "weights": {
          "environment": {
            "sociallyWarmSpace": 2,
            "privateSpace": -0.4
          },
          "instinct": {
            "so": 1
          },
          "loveStyle": {
            "playfulBond": 0.8
          },
          "evidence": {
            "belongingSeeking": 1
          },
          "positive": {
            "sharedWarmth": 1
          },
          "negative": {
            "sealedIsolation": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_011_c",
        "text": "Ia membuatmu merasa boleh punya hidup sendiri tanpa takut ditinggalkan.",
        "subtleMeaning": "idealFreedom",
        "weights": {
          "idealPartner": {
            "idealFreedom": 2,
            "idealStability": -0.4
          },
          "loveStyle": {
            "respectfulSpace": 1.2
          },
          "instinct": {
            "sx": 0.5,
            "sp": 0.3
          },
          "values": {
            "autonomy": 1,
            "freedom": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "breathingRoom": 1
          },
          "negative": {
            "possessivePull": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_011_d",
        "text": "Ia memperbaiki hal kecil yang rusak di harimu tanpa mengumumkan diri sebagai penyelamat.",
        "subtleMeaning": "practicalCare",
        "weights": {
          "loveStyle": {
            "practicalCare": 2,
            "verbalReassurance": -0.4
          },
          "idealPartner": {
            "idealTenderness": 1
          },
          "environment": {
            "functionalSpace": 0.8
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "quietCare": 1
          },
          "negative": {
            "emptySpeech": -0.7
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "pref_012",
    "kind": "singleChoice",
    "context": {
      "domain": "idealPartner",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Orang itu baik, hadir, dan rapi. Tapi saat ia membicarakan masa depanmu seolah sudah ia pegang, gelas di tanganmu terasa dingin.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_012_a",
        "text": "Ia tidak mengejar saat kau butuh diam, tapi tetap meninggalkan lampu kecil menyala.",
        "subtleMeaning": "idealFreedom",
        "weights": {
          "idealPartner": {
            "idealFreedom": 2,
            "idealStability": -0.4
          },
          "loveStyle": {
            "respectfulSpace": 1.2
          },
          "instinct": {
            "sx": 0.5,
            "sp": 0.3
          },
          "values": {
            "autonomy": 1,
            "freedom": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "breathingRoom": 1
          },
          "negative": {
            "possessivePull": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_012_b",
        "text": "Ia memilih kalimat yang bersih, meski kalimat itu tidak membuatnya terlihat paling manis.",
        "subtleMeaning": "idealHonesty",
        "weights": {
          "idealPartner": {
            "idealHonesty": 2
          },
          "loveStyle": {
            "verbalReassurance": 1
          },
          "values": {
            "truth": 1
          },
          "moral": {
            "truthBased": 0.8
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanPromise": 1
          },
          "negative": {
            "sweetAvoidance": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_012_c",
        "text": "Ia menepati hal kecil yang pernah ia ucapkan, bahkan saat kau sendiri sudah lupa.",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_012_d",
        "text": "Ia berani duduk di kalimat yang sulit, tidak mengubahnya jadi bercanda terlalu cepat.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "pref_013",
    "kind": "multiChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Saat sedang rapuh, kau tidak butuh pertunjukan besar. Kau butuh bentuk sayang yang tidak membuatmu makin kecil.",
    "instruction": "Pilih maksimal 2 yang paling terasa benar.",
    "options": [
      {
        "id": "pref_013_a",
        "text": "Ia datang membawa obat, nasi hangat, dan tidak banyak bertanya sampai kau siap bicara.",
        "subtleMeaning": "practicalCare",
        "weights": {
          "loveStyle": {
            "practicalCare": 2,
            "verbalReassurance": -0.4
          },
          "idealPartner": {
            "idealTenderness": 1
          },
          "environment": {
            "functionalSpace": 0.8
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "quietCare": 1
          },
          "negative": {
            "emptySpeech": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_013_b",
        "text": "Ia tidak memaksa jawaban cepat; ia duduk di sampingmu dan bertanya, “mau ditemani atau mau ruang?”",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_013_c",
        "text": "Ia bertanya pelan, “bagian mana yang paling sakit?” lalu benar-benar menunggu.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_013_d",
        "text": "Ia membuatmu merasa boleh punya hidup sendiri tanpa takut ditinggalkan.",
        "subtleMeaning": "idealFreedom",
        "weights": {
          "idealPartner": {
            "idealFreedom": 2,
            "idealStability": -0.4
          },
          "loveStyle": {
            "respectfulSpace": 1.2
          },
          "instinct": {
            "sx": 0.5,
            "sp": 0.3
          },
          "values": {
            "autonomy": 1,
            "freedom": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "breathingRoom": 1
          },
          "negative": {
            "possessivePull": -0.8
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
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "pref_014",
    "kind": "ranking",
    "context": {
      "domain": "preference",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Pikiranmu penuh. Kau membayangkan ruang tempat kau bisa kembali menjadi dirimu tanpa menjelaskan apa pun.",
    "instruction": "Urutkan dari yang paling membuatmu merasa pulih sampai yang paling jauh.",
    "options": [
      {
        "id": "pref_014_a",
        "text": "Aku memilih kamar dengan lampu kecil, selimut berat, dan pintu yang bisa dikunci tanpa rasa bersalah.",
        "subtleMeaning": "quietRoom",
        "weights": {
          "environment": {
            "quietRoom": 2,
            "livelyPlace": -0.8,
            "privateSpace": 1
          },
          "instinct": {
            "sp": 0.8
          },
          "attitudinalPsyche": {
            "F_secure": 1,
            "E_private": 0.6
          },
          "evidence": {
            "withdrawal": 0.5,
            "moodRegulation": 1
          },
          "positive": {
            "softRecovery": 1
          },
          "negative": {
            "socialOverload": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_014_b",
        "text": "Aku ingin tempat dengan suara piring, obrolan ringan, dan seseorang yang mengenal pesananku.",
        "subtleMeaning": "socialWarmth",
        "weights": {
          "environment": {
            "sociallyWarmSpace": 2,
            "privateSpace": -0.4
          },
          "instinct": {
            "so": 1
          },
          "loveStyle": {
            "playfulBond": 0.8
          },
          "evidence": {
            "belongingSeeking": 1
          },
          "positive": {
            "sharedWarmth": 1
          },
          "negative": {
            "sealedIsolation": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_014_c",
        "text": "Ia memperbaiki hal kecil yang rusak di harimu tanpa mengumumkan diri sebagai penyelamat.",
        "subtleMeaning": "practicalCare",
        "weights": {
          "loveStyle": {
            "practicalCare": 2,
            "verbalReassurance": -0.4
          },
          "idealPartner": {
            "idealTenderness": 1
          },
          "environment": {
            "functionalSpace": 0.8
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "quietCare": 1
          },
          "negative": {
            "emptySpeech": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_014_d",
        "text": "Ia berani duduk di kalimat yang sulit, tidak mengubahnya jadi bercanda terlalu cepat.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_014_e",
        "text": "Ia tidak mengejar saat kau butuh diam, tapi tetap meninggalkan lampu kecil menyala.",
        "subtleMeaning": "idealFreedom",
        "weights": {
          "idealPartner": {
            "idealFreedom": 2,
            "idealStability": -0.4
          },
          "loveStyle": {
            "respectfulSpace": 1.2
          },
          "instinct": {
            "sx": 0.5,
            "sp": 0.3
          },
          "values": {
            "autonomy": 1,
            "freedom": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "breathingRoom": 1
          },
          "negative": {
            "possessivePull": -0.8
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
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "pref_015",
    "kind": "singleChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Ada orang yang melihatmu lama sekali. Bukan seperti mengawasi, lebih seperti ia tahu bagian mana yang lelah.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_015_a",
        "text": "Ia bertanya pelan, “bagian mana yang paling sakit?” lalu benar-benar menunggu.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_015_b",
        "text": "Ia menepati hal kecil yang pernah ia ucapkan, bahkan saat kau sendiri sudah lupa.",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_015_c",
        "text": "Ia berkata, “aku salah di bagian ini,” tanpa membuatmu harus mengemis penjelasan.",
        "subtleMeaning": "idealHonesty",
        "weights": {
          "idealPartner": {
            "idealHonesty": 2
          },
          "loveStyle": {
            "verbalReassurance": 1
          },
          "values": {
            "truth": 1
          },
          "moral": {
            "truthBased": 0.8
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanPromise": 1
          },
          "negative": {
            "sweetAvoidance": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_015_d",
        "text": "Ia membuat percakapan biasa terasa seperti pintu yang baru dibuka di dada.",
        "subtleMeaning": "idealIntensity",
        "weights": {
          "idealPartner": {
            "idealIntensity": 2,
            "idealStability": -0.7
          },
          "loveStyle": {
            "emotionalDepth": 1.2
          },
          "instinct": {
            "sx": 1.2
          },
          "values": {
            "meaning": 0.8
          },
          "evidence": {
            "intensitySeeking": 1
          },
          "positive": {
            "aliveFeeling": 1
          },
          "negative": {
            "overCaution": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "pref_016",
    "kind": "singleChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau membeli hadiah kecil untuk diri sendiri setelah menahan banyak hal. Kasir bertanya, “buat siapa?” dan kau hampir tersenyum.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_016_a",
        "text": "Aku mencari sudut paling sunyi, tempat suara orang berubah jadi jauh.",
        "subtleMeaning": "quietRoom",
        "weights": {
          "environment": {
            "quietRoom": 2,
            "livelyPlace": -0.8,
            "privateSpace": 1
          },
          "instinct": {
            "sp": 0.8
          },
          "attitudinalPsyche": {
            "F_secure": 1,
            "E_private": 0.6
          },
          "evidence": {
            "withdrawal": 0.5,
            "moodRegulation": 1
          },
          "positive": {
            "softRecovery": 1
          },
          "negative": {
            "socialOverload": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_016_b",
        "text": "Ia datang membawa obat, nasi hangat, dan tidak banyak bertanya sampai kau siap bicara.",
        "subtleMeaning": "practicalCare",
        "weights": {
          "loveStyle": {
            "practicalCare": 2,
            "verbalReassurance": -0.4
          },
          "idealPartner": {
            "idealTenderness": 1
          },
          "environment": {
            "functionalSpace": 0.8
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "quietCare": 1
          },
          "negative": {
            "emptySpeech": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_016_c",
        "text": "Ia melihatmu terlalu tepat sampai kau ingin tertawa dan kabur dalam waktu yang sama.",
        "subtleMeaning": "idealIntensity",
        "weights": {
          "idealPartner": {
            "idealIntensity": 2,
            "idealStability": -0.7
          },
          "loveStyle": {
            "emotionalDepth": 1.2
          },
          "instinct": {
            "sx": 1.2
          },
          "values": {
            "meaning": 0.8
          },
          "evidence": {
            "intensitySeeking": 1
          },
          "positive": {
            "aliveFeeling": 1
          },
          "negative": {
            "overCaution": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_016_d",
        "text": "Aku memilih meja yang ada tawa pelan dan orang yang tidak memaksa siapa pun tampil kuat.",
        "subtleMeaning": "socialWarmth",
        "weights": {
          "environment": {
            "sociallyWarmSpace": 2,
            "privateSpace": -0.4
          },
          "instinct": {
            "so": 1
          },
          "loveStyle": {
            "playfulBond": 0.8
          },
          "evidence": {
            "belongingSeeking": 1
          },
          "positive": {
            "sharedWarmth": 1
          },
          "negative": {
            "sealedIsolation": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "pref_017",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Ia tidak banyak berkata. Tapi payung sudah terbuka sebelum kau sadar hujan turun.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_017_a",
        "text": "Ia memperbaiki hal kecil yang rusak di harimu tanpa mengumumkan diri sebagai penyelamat.",
        "subtleMeaning": "practicalCare",
        "weights": {
          "loveStyle": {
            "practicalCare": 2,
            "verbalReassurance": -0.4
          },
          "idealPartner": {
            "idealTenderness": 1
          },
          "environment": {
            "functionalSpace": 0.8
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "quietCare": 1
          },
          "negative": {
            "emptySpeech": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_017_b",
        "text": "Ia berani duduk di kalimat yang sulit, tidak mengubahnya jadi bercanda terlalu cepat.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "idealPartner",
      "loveStyle",
      "environment",
      "instinct",
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "pref_017_a",
      "text": "Ia memperbaiki hal kecil yang rusak di harimu tanpa mengumumkan diri sebagai penyelamat.",
      "subtleMeaning": "practicalCare",
      "weights": {
        "loveStyle": {
          "practicalCare": 2,
          "verbalReassurance": -0.4
        },
        "idealPartner": {
          "idealTenderness": 1
        },
        "environment": {
          "functionalSpace": 0.8
        },
        "evidence": {
          "practicalRepair": 1
        },
        "positive": {
          "quietCare": 1
        },
        "negative": {
          "emptySpeech": -0.7
        },
        "reliability": 0.82
      }
    },
    "right": {
      "id": "pref_017_b",
      "text": "Ia berani duduk di kalimat yang sulit, tidak mengubahnya jadi bercanda terlalu cepat.",
      "subtleMeaning": "emotionalDepth",
      "weights": {
        "loveStyle": {
          "emotionalDepth": 2,
          "playfulBond": -0.3
        },
        "idealPartner": {
          "idealMystery": 0.8
        },
        "instinct": {
          "sx": 1
        },
        "evidence": {
          "intensitySeeking": 0.8,
          "emotionalExpression": 0.6
        },
        "positive": {
          "deepPresence": 1
        },
        "negative": {
          "surfaceComfort": -0.7
        },
        "reliability": 0.78
      }
    }
  },
  {
    "id": "pref_018",
    "kind": "singleChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Ia menantang cara berpikirmu tanpa membuatmu merasa bodoh. Di meja ada dua kopi dingin dan percakapan yang belum habis.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "pref_018_a",
        "text": "Ia memilih kalimat yang bersih, meski kalimat itu tidak membuatnya terlihat paling manis.",
        "subtleMeaning": "idealHonesty",
        "weights": {
          "idealPartner": {
            "idealHonesty": 2
          },
          "loveStyle": {
            "verbalReassurance": 1
          },
          "values": {
            "truth": 1
          },
          "moral": {
            "truthBased": 0.8
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanPromise": 1
          },
          "negative": {
            "sweetAvoidance": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "pref_018_b",
        "text": "Ia bertanya pelan, “bagian mana yang paling sakit?” lalu benar-benar menunggu.",
        "subtleMeaning": "emotionalDepth",
        "weights": {
          "loveStyle": {
            "emotionalDepth": 2,
            "playfulBond": -0.3
          },
          "idealPartner": {
            "idealMystery": 0.8
          },
          "instinct": {
            "sx": 1
          },
          "evidence": {
            "intensitySeeking": 0.8,
            "emotionalExpression": 0.6
          },
          "positive": {
            "deepPresence": 1
          },
          "negative": {
            "surfaceComfort": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "pref_018_c",
        "text": "Ia membuatmu merasa boleh punya hidup sendiri tanpa takut ditinggalkan.",
        "subtleMeaning": "idealFreedom",
        "weights": {
          "idealPartner": {
            "idealFreedom": 2,
            "idealStability": -0.4
          },
          "loveStyle": {
            "respectfulSpace": 1.2
          },
          "instinct": {
            "sx": 0.5,
            "sp": 0.3
          },
          "values": {
            "autonomy": 1,
            "freedom": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "breathingRoom": 1
          },
          "negative": {
            "possessivePull": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "pref_018_d",
        "text": "Ia tidak memaksa jawaban cepat; ia duduk di sampingmu dan bertanya, “mau ditemani atau mau ruang?”",
        "subtleMeaning": "idealSafety",
        "weights": {
          "idealPartner": {
            "idealSafety": 2,
            "idealIntensity": -0.8
          },
          "loveStyle": {
            "steadyPresence": 1.2
          },
          "instinct": {
            "sp": 1
          },
          "values": {
            "security": 1
          },
          "evidence": {
            "comfortSeeking": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "safeAttachmentCue": 1
          },
          "negative": {
            "recklessSpark": -0.8
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
      "attitudinalPsyche",
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
      "attitudinalPsyche",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  }
];
