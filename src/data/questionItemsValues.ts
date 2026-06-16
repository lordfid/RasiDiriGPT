import type { QuestionItem } from "../types";

export const VALUES_QUESTIONS: QuestionItem[] = [
  {
    "id": "val_001",
    "kind": "singleChoice",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di ruang kelas/kantor, kau melihat teman mengubah angka agar terlihat lebih aman. Semua orang tahu, tapi tidak ada yang ingin membuat masalah.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "val_001_a",
        "text": "Aku berkata, “kalau ini salah, nama siapa pun tidak membuatnya jadi benar.”",
        "subtleMeaning": "justice",
        "weights": {
          "moral": {
            "justiceBased": 2,
            "loyaltyBased": -0.5
          },
          "values": {
            "justice": 1,
            "truth": 0.7
          },
          "decision": {
            "evidenceBased": 0.7
          },
          "coreDesire": {
            "toBeFair": 1
          },
          "evidence": {
            "justiceSeeking": 1
          },
          "positive": {
            "fairLine": 1
          },
          "negative": {
            "tribalExcuse": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_001_b",
        "text": "Aku tidak langsung membongkar orang dekatku di depan semua orang, tapi aku menariknya bicara setelah itu.",
        "subtleMeaning": "loyalty",
        "weights": {
          "moral": {
            "loyaltyBased": 2,
            "truthBased": -0.4
          },
          "values": {
            "belonging": 1,
            "love": 0.6
          },
          "decision": {
            "valueBased": 0.7
          },
          "coreFear": {
            "betrayingOwnPeople": 1
          },
          "evidence": {
            "loyaltySeeking": 1
          },
          "positive": {
            "standsBeside": 1
          },
          "negative": {
            "publicExposure": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_001_c",
        "text": "Aku memilih cara yang menghentikan kerusakan paling cepat, lalu baru membahas siapa salah.",
        "subtleMeaning": "outcome",
        "weights": {
          "moral": {
            "outcomeBased": 2,
            "purityIntegrityBased": -0.3
          },
          "values": {
            "achievement": 0.8,
            "peace": 0.4
          },
          "decision": {
            "riskAware": 0.8,
            "fastAction": 0.5
          },
          "coreFear": {
            "avoidableDamage": 1
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "reducesDamage": 1
          },
          "negative": {
            "principleBlindSpot": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_001_d",
        "text": "Aku mundur dari rencana itu karena ada bagian diriku yang tidak bisa diajak berdamai.",
        "subtleMeaning": "integrity",
        "weights": {
          "moral": {
            "purityIntegrityBased": 2,
            "outcomeBased": -0.3
          },
          "values": {
            "truth": 0.8,
            "autonomy": 0.5
          },
          "decision": {
            "valueBased": 0.9
          },
          "coreDesire": {
            "toStayClean": 1
          },
          "evidence": {
            "selfRespect": 1
          },
          "positive": {
            "unboughtLine": 1
          },
          "negative": {
            "easyCompromise": -0.8
          },
          "reliability": 0.82
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "val_002",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di meja makan, seseorang memintamu menutup kebohongan kecil “demi keluarga.” Sendok berhenti di piring, dan semua mata menunggumu.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "val_002_a",
        "text": "Aku berdiri di samping orangku dulu, lalu memastikan ia tidak memakai kedekatan sebagai tameng.",
        "subtleMeaning": "loyalty",
        "weights": {
          "moral": {
            "loyaltyBased": 2,
            "truthBased": -0.4
          },
          "values": {
            "belonging": 1,
            "love": 0.6
          },
          "decision": {
            "valueBased": 0.7
          },
          "coreFear": {
            "betrayingOwnPeople": 1
          },
          "evidence": {
            "loyaltySeeking": 1
          },
          "positive": {
            "standsBeside": 1
          },
          "negative": {
            "publicExposure": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_002_b",
        "text": "Aku memilih kalimat yang jelas meski membuat meja makan menjadi hening.",
        "subtleMeaning": "truth",
        "weights": {
          "moral": {
            "truthBased": 2,
            "careBased": -0.3
          },
          "values": {
            "truth": 1,
            "meaning": 0.5
          },
          "decision": {
            "evidenceBased": 0.8
          },
          "coreDesire": {
            "toBeClear": 1
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanDisclosure": 1
          },
          "negative": {
            "comfortLie": -0.8
          },
          "reliability": 0.82
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "val_002_a",
      "text": "Aku berdiri di samping orangku dulu, lalu memastikan ia tidak memakai kedekatan sebagai tameng.",
      "subtleMeaning": "loyalty",
      "weights": {
        "moral": {
          "loyaltyBased": 2,
          "truthBased": -0.4
        },
        "values": {
          "belonging": 1,
          "love": 0.6
        },
        "decision": {
          "valueBased": 0.7
        },
        "coreFear": {
          "betrayingOwnPeople": 1
        },
        "evidence": {
          "loyaltySeeking": 1
        },
        "positive": {
          "standsBeside": 1
        },
        "negative": {
          "publicExposure": -0.7
        },
        "reliability": 0.78
      }
    },
    "right": {
      "id": "val_002_b",
      "text": "Aku memilih kalimat yang jelas meski membuat meja makan menjadi hening.",
      "subtleMeaning": "truth",
      "weights": {
        "moral": {
          "truthBased": 2,
          "careBased": -0.3
        },
        "values": {
          "truth": 1,
          "meaning": 0.5
        },
        "decision": {
          "evidenceBased": 0.8
        },
        "coreDesire": {
          "toBeClear": 1
        },
        "evidence": {
          "truthSeeking": 1
        },
        "positive": {
          "cleanDisclosure": 1
        },
        "negative": {
          "comfortLie": -0.8
        },
        "reliability": 0.82
      }
    }
  },
  {
    "id": "val_003",
    "kind": "singleChoice",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Orang paling lemah di ruangan disalahkan agar masalah cepat selesai. Ia hanya menunduk dan meremas ujung baju.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "val_003_a",
        "text": "Aku melihat orang yang paling lemah dulu, lalu memilih kalimat yang tidak membuatnya sendirian.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_003_b",
        "text": "Aku meminta semua orang memakai ukuran yang sama, termasuk orang yang paling dekat denganku.",
        "subtleMeaning": "justice",
        "weights": {
          "moral": {
            "justiceBased": 2,
            "loyaltyBased": -0.5
          },
          "values": {
            "justice": 1,
            "truth": 0.7
          },
          "decision": {
            "evidenceBased": 0.7
          },
          "coreDesire": {
            "toBeFair": 1
          },
          "evidence": {
            "justiceSeeking": 1
          },
          "positive": {
            "fairLine": 1
          },
          "negative": {
            "tribalExcuse": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_003_c",
        "text": "Aku melihat akibat besok pagi, bukan hanya siapa yang menang malam ini.",
        "subtleMeaning": "outcome",
        "weights": {
          "moral": {
            "outcomeBased": 2,
            "purityIntegrityBased": -0.3
          },
          "values": {
            "achievement": 0.8,
            "peace": 0.4
          },
          "decision": {
            "riskAware": 0.8,
            "fastAction": 0.5
          },
          "coreFear": {
            "avoidableDamage": 1
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "reducesDamage": 1
          },
          "negative": {
            "principleBlindSpot": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_003_d",
        "text": "Aku membuka aturan yang disepakati dan menunjuk bagian yang semua orang pernah terima.",
        "subtleMeaning": "rule",
        "weights": {
          "moral": {
            "ruleBased": 2,
            "freedomBased": -0.4
          },
          "values": {
            "security": 0.8,
            "competence": 0.5
          },
          "decision": {
            "riskAware": 0.8
          },
          "coreFear": {
            "chaosFromException": 1
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "stableStandard": 1
          },
          "negative": {
            "recklessException": -0.8
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "val_004",
    "kind": "multiChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Teman dekatmu meminta kau ikut cerita versi yang tidak lengkap. Di chat, ia menulis, “tolong kali ini aja.”",
    "instruction": "Pilih maksimal 2 tindakan yang paling mungkin kau ambil.",
    "options": [
      {
        "id": "val_004_a",
        "text": "Aku tidak langsung membongkar orang dekatku di depan semua orang, tapi aku menariknya bicara setelah itu.",
        "subtleMeaning": "loyalty",
        "weights": {
          "moral": {
            "loyaltyBased": 2,
            "truthBased": -0.4
          },
          "values": {
            "belonging": 1,
            "love": 0.6
          },
          "decision": {
            "valueBased": 0.7
          },
          "coreFear": {
            "betrayingOwnPeople": 1
          },
          "evidence": {
            "loyaltySeeking": 1
          },
          "positive": {
            "standsBeside": 1
          },
          "negative": {
            "publicExposure": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_004_b",
        "text": "Aku tidak mau menambal cerita dengan kebohongan kecil yang nanti tumbuh lebih besar.",
        "subtleMeaning": "truth",
        "weights": {
          "moral": {
            "truthBased": 2,
            "careBased": -0.3
          },
          "values": {
            "truth": 1,
            "meaning": 0.5
          },
          "decision": {
            "evidenceBased": 0.8
          },
          "coreDesire": {
            "toBeClear": 1
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanDisclosure": 1
          },
          "negative": {
            "comfortLie": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_004_c",
        "text": "Aku menahan keputusan sebentar karena ada orang yang akan menanggung akibat paling berat.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_004_d",
        "text": "Aku memilih kehilangan kesempatan daripada membawa pulang rasa kotor yang tidak bisa dicuci.",
        "subtleMeaning": "integrity",
        "weights": {
          "moral": {
            "purityIntegrityBased": 2,
            "outcomeBased": -0.3
          },
          "values": {
            "truth": 0.8,
            "autonomy": 0.5
          },
          "decision": {
            "valueBased": 0.9
          },
          "coreDesire": {
            "toStayClean": 1
          },
          "evidence": {
            "selfRespect": 1
          },
          "positive": {
            "unboughtLine": 1
          },
          "negative": {
            "easyCompromise": -0.8
          },
          "reliability": 0.82
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "val_005",
    "kind": "ranking",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Ada keputusan yang harus diambil sebelum besok pagi. Apa pun yang kau pilih akan membuat satu pihak merasa dikorbankan.",
    "instruction": "Urutkan dari yang paling kau dahulukan sampai yang paling jauh.",
    "options": [
      {
        "id": "val_005_a",
        "text": "Aku melihat orang yang paling lemah dulu, lalu memilih kalimat yang tidak membuatnya sendirian.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_005_b",
        "text": "Aku berkata, “kalau ini salah, nama siapa pun tidak membuatnya jadi benar.”",
        "subtleMeaning": "justice",
        "weights": {
          "moral": {
            "justiceBased": 2,
            "loyaltyBased": -0.5
          },
          "values": {
            "justice": 1,
            "truth": 0.7
          },
          "decision": {
            "evidenceBased": 0.7
          },
          "coreDesire": {
            "toBeFair": 1
          },
          "evidence": {
            "justiceSeeking": 1
          },
          "positive": {
            "fairLine": 1
          },
          "negative": {
            "tribalExcuse": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_005_c",
        "text": "Aku menolak membuat pengecualian diam-diam karena nanti semua orang membayarnya.",
        "subtleMeaning": "rule",
        "weights": {
          "moral": {
            "ruleBased": 2,
            "freedomBased": -0.4
          },
          "values": {
            "security": 0.8,
            "competence": 0.5
          },
          "decision": {
            "riskAware": 0.8
          },
          "coreFear": {
            "chaosFromException": 1
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "stableStandard": 1
          },
          "negative": {
            "recklessException": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_005_d",
        "text": "Aku menolak keputusan yang membuat seseorang kehilangan pilihan tanpa sempat bicara.",
        "subtleMeaning": "freedom",
        "weights": {
          "moral": {
            "freedomBased": 2,
            "ruleBased": -0.5
          },
          "values": {
            "freedom": 1,
            "autonomy": 1
          },
          "decision": {
            "fastAction": 0.6
          },
          "coreDesire": {
            "toChoose": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "keepsDoorOpen": 1
          },
          "negative": {
            "obedientSilence": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_005_e",
        "text": "Aku memilih cara yang menghentikan kerusakan paling cepat, lalu baru membahas siapa salah.",
        "subtleMeaning": "outcome",
        "weights": {
          "moral": {
            "outcomeBased": 2,
            "purityIntegrityBased": -0.3
          },
          "values": {
            "achievement": 0.8,
            "peace": 0.4
          },
          "decision": {
            "riskAware": 0.8,
            "fastAction": 0.5
          },
          "coreFear": {
            "avoidableDamage": 1
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "reducesDamage": 1
          },
          "negative": {
            "principleBlindSpot": -0.7
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "val_006",
    "kind": "singleChoice",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Kau menemukan dompet di kursi angkot. Di dalamnya ada uang yang bisa menyelamatkan tagihanmu malam itu.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "val_006_a",
        "text": "Aku mundur dari rencana itu karena ada bagian diriku yang tidak bisa diajak berdamai.",
        "subtleMeaning": "integrity",
        "weights": {
          "moral": {
            "purityIntegrityBased": 2,
            "outcomeBased": -0.3
          },
          "values": {
            "truth": 0.8,
            "autonomy": 0.5
          },
          "decision": {
            "valueBased": 0.9
          },
          "coreDesire": {
            "toStayClean": 1
          },
          "evidence": {
            "selfRespect": 1
          },
          "positive": {
            "unboughtLine": 1
          },
          "negative": {
            "easyCompromise": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_006_b",
        "text": "Aku menahan keputusan sebentar karena ada orang yang akan menanggung akibat paling berat.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_006_c",
        "text": "Aku melihat akibat besok pagi, bukan hanya siapa yang menang malam ini.",
        "subtleMeaning": "outcome",
        "weights": {
          "moral": {
            "outcomeBased": 2,
            "purityIntegrityBased": -0.3
          },
          "values": {
            "achievement": 0.8,
            "peace": 0.4
          },
          "decision": {
            "riskAware": 0.8,
            "fastAction": 0.5
          },
          "coreFear": {
            "avoidableDamage": 1
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "reducesDamage": 1
          },
          "negative": {
            "principleBlindSpot": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_006_d",
        "text": "Aku membuka aturan yang disepakati dan menunjuk bagian yang semua orang pernah terima.",
        "subtleMeaning": "rule",
        "weights": {
          "moral": {
            "ruleBased": 2,
            "freedomBased": -0.4
          },
          "values": {
            "security": 0.8,
            "competence": 0.5
          },
          "decision": {
            "riskAware": 0.8
          },
          "coreFear": {
            "chaosFromException": 1
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "stableStandard": 1
          },
          "negative": {
            "recklessException": -0.8
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "val_007",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Keluarga meminta kau mengalah lagi karena kau “yang paling ngerti.” Kali ini, yang diminta bukan sekadar waktu.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "val_007_a",
        "text": "Aku melihat orang yang paling lemah dulu, lalu memilih kalimat yang tidak membuatnya sendirian.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_007_b",
        "text": "Aku bertanya, “dia setuju karena mau, atau karena tidak punya jalan lain?”",
        "subtleMeaning": "freedom",
        "weights": {
          "moral": {
            "freedomBased": 2,
            "ruleBased": -0.5
          },
          "values": {
            "freedom": 1,
            "autonomy": 1
          },
          "decision": {
            "fastAction": 0.6
          },
          "coreDesire": {
            "toChoose": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "keepsDoorOpen": 1
          },
          "negative": {
            "obedientSilence": -0.8
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "val_007_a",
      "text": "Aku melihat orang yang paling lemah dulu, lalu memilih kalimat yang tidak membuatnya sendirian.",
      "subtleMeaning": "care",
      "weights": {
        "moral": {
          "careBased": 2,
          "ruleBased": -0.4
        },
        "values": {
          "love": 1,
          "peace": 0.5
        },
        "decision": {
          "consultative": 0.6
        },
        "coreDesire": {
          "toProtect": 1
        },
        "evidence": {
          "peopleFirst": 1
        },
        "positive": {
          "protectsVulnerable": 1
        },
        "negative": {
          "coldCorrectness": -0.8
        },
        "reliability": 0.8
      }
    },
    "right": {
      "id": "val_007_b",
      "text": "Aku bertanya, “dia setuju karena mau, atau karena tidak punya jalan lain?”",
      "subtleMeaning": "freedom",
      "weights": {
        "moral": {
          "freedomBased": 2,
          "ruleBased": -0.5
        },
        "values": {
          "freedom": 1,
          "autonomy": 1
        },
        "decision": {
          "fastAction": 0.6
        },
        "coreDesire": {
          "toChoose": 1
        },
        "evidence": {
          "autonomyProtection": 1
        },
        "positive": {
          "keepsDoorOpen": 1
        },
        "negative": {
          "obedientSilence": -0.8
        },
        "reliability": 0.8
      }
    }
  },
  {
    "id": "val_008",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Satu rekan kerja tidak ikut bekerja, tapi namanya tetap mau masuk laporan. Ia tersenyum seolah itu hal biasa.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "val_008_a",
        "text": "Aku meminta semua orang memakai ukuran yang sama, termasuk orang yang paling dekat denganku.",
        "subtleMeaning": "justice",
        "weights": {
          "moral": {
            "justiceBased": 2,
            "loyaltyBased": -0.5
          },
          "values": {
            "justice": 1,
            "truth": 0.7
          },
          "decision": {
            "evidenceBased": 0.7
          },
          "coreDesire": {
            "toBeFair": 1
          },
          "evidence": {
            "justiceSeeking": 1
          },
          "positive": {
            "fairLine": 1
          },
          "negative": {
            "tribalExcuse": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_008_b",
        "text": "Aku menolak membuat pengecualian diam-diam karena nanti semua orang membayarnya.",
        "subtleMeaning": "rule",
        "weights": {
          "moral": {
            "ruleBased": 2,
            "freedomBased": -0.4
          },
          "values": {
            "security": 0.8,
            "competence": 0.5
          },
          "decision": {
            "riskAware": 0.8
          },
          "coreFear": {
            "chaosFromException": 1
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "stableStandard": 1
          },
          "negative": {
            "recklessException": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_008_c",
        "text": "Aku memilih cara yang menghentikan kerusakan paling cepat, lalu baru membahas siapa salah.",
        "subtleMeaning": "outcome",
        "weights": {
          "moral": {
            "outcomeBased": 2,
            "purityIntegrityBased": -0.3
          },
          "values": {
            "achievement": 0.8,
            "peace": 0.4
          },
          "decision": {
            "riskAware": 0.8,
            "fastAction": 0.5
          },
          "coreFear": {
            "avoidableDamage": 1
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "reducesDamage": 1
          },
          "negative": {
            "principleBlindSpot": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_008_d",
        "text": "Aku menahan keputusan sebentar karena ada orang yang akan menanggung akibat paling berat.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "val_009",
    "kind": "multiChoice",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang meminta kesempatan kedua setelah merusak kepercayaan banyak orang. Ruangan terbagi antara kasihan dan marah.",
    "instruction": "Pilih maksimal 2 tindakan yang paling mungkin kau ambil.",
    "options": [
      {
        "id": "val_009_a",
        "text": "Aku melihat orang yang paling lemah dulu, lalu memilih kalimat yang tidak membuatnya sendirian.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_009_b",
        "text": "Aku berkata, “kalau ini salah, nama siapa pun tidak membuatnya jadi benar.”",
        "subtleMeaning": "justice",
        "weights": {
          "moral": {
            "justiceBased": 2,
            "loyaltyBased": -0.5
          },
          "values": {
            "justice": 1,
            "truth": 0.7
          },
          "decision": {
            "evidenceBased": 0.7
          },
          "coreDesire": {
            "toBeFair": 1
          },
          "evidence": {
            "justiceSeeking": 1
          },
          "positive": {
            "fairLine": 1
          },
          "negative": {
            "tribalExcuse": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_009_c",
        "text": "Aku memilih kalimat yang jelas meski membuat meja makan menjadi hening.",
        "subtleMeaning": "truth",
        "weights": {
          "moral": {
            "truthBased": 2,
            "careBased": -0.3
          },
          "values": {
            "truth": 1,
            "meaning": 0.5
          },
          "decision": {
            "evidenceBased": 0.8
          },
          "coreDesire": {
            "toBeClear": 1
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanDisclosure": 1
          },
          "negative": {
            "comfortLie": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_009_d",
        "text": "Aku melihat akibat besok pagi, bukan hanya siapa yang menang malam ini.",
        "subtleMeaning": "outcome",
        "weights": {
          "moral": {
            "outcomeBased": 2,
            "purityIntegrityBased": -0.3
          },
          "values": {
            "achievement": 0.8,
            "peace": 0.4
          },
          "decision": {
            "riskAware": 0.8,
            "fastAction": 0.5
          },
          "coreFear": {
            "avoidableDamage": 1
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "reducesDamage": 1
          },
          "negative": {
            "principleBlindSpot": -0.7
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "val_010",
    "kind": "singleChoice",
    "context": {
      "domain": "identity",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Kau ditawari jalan pintas yang bisa membuat hidupmu lebih mudah. Tidak ada yang akan tahu, kecuali dirimu nanti malam.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "val_010_a",
        "text": "Aku memilih kehilangan kesempatan daripada membawa pulang rasa kotor yang tidak bisa dicuci.",
        "subtleMeaning": "integrity",
        "weights": {
          "moral": {
            "purityIntegrityBased": 2,
            "outcomeBased": -0.3
          },
          "values": {
            "truth": 0.8,
            "autonomy": 0.5
          },
          "decision": {
            "valueBased": 0.9
          },
          "coreDesire": {
            "toStayClean": 1
          },
          "evidence": {
            "selfRespect": 1
          },
          "positive": {
            "unboughtLine": 1
          },
          "negative": {
            "easyCompromise": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_010_b",
        "text": "Aku memilih cara yang menghentikan kerusakan paling cepat, lalu baru membahas siapa salah.",
        "subtleMeaning": "outcome",
        "weights": {
          "moral": {
            "outcomeBased": 2,
            "purityIntegrityBased": -0.3
          },
          "values": {
            "achievement": 0.8,
            "peace": 0.4
          },
          "decision": {
            "riskAware": 0.8,
            "fastAction": 0.5
          },
          "coreFear": {
            "avoidableDamage": 1
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "reducesDamage": 1
          },
          "negative": {
            "principleBlindSpot": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_010_c",
        "text": "Aku menolak keputusan yang membuat seseorang kehilangan pilihan tanpa sempat bicara.",
        "subtleMeaning": "freedom",
        "weights": {
          "moral": {
            "freedomBased": 2,
            "ruleBased": -0.5
          },
          "values": {
            "freedom": 1,
            "autonomy": 1
          },
          "decision": {
            "fastAction": 0.6
          },
          "coreDesire": {
            "toChoose": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "keepsDoorOpen": 1
          },
          "negative": {
            "obedientSilence": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_010_d",
        "text": "Aku membuka aturan yang disepakati dan menunjuk bagian yang semua orang pernah terima.",
        "subtleMeaning": "rule",
        "weights": {
          "moral": {
            "ruleBased": 2,
            "freedomBased": -0.4
          },
          "values": {
            "security": 0.8,
            "competence": 0.5
          },
          "decision": {
            "riskAware": 0.8
          },
          "coreFear": {
            "chaosFromException": 1
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "stableStandard": 1
          },
          "negative": {
            "recklessException": -0.8
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "val_011",
    "kind": "ranking",
    "context": {
      "domain": "friendship",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di chat grup, satu orang dihujani komentar karena salah bicara. Sebagian benar, sebagian hanya ikut menekan.",
    "instruction": "Urutkan dari yang paling kau dahulukan sampai yang paling jauh.",
    "options": [
      {
        "id": "val_011_a",
        "text": "Aku menahan keputusan sebentar karena ada orang yang akan menanggung akibat paling berat.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_011_b",
        "text": "Aku meminta semua orang memakai ukuran yang sama, termasuk orang yang paling dekat denganku.",
        "subtleMeaning": "justice",
        "weights": {
          "moral": {
            "justiceBased": 2,
            "loyaltyBased": -0.5
          },
          "values": {
            "justice": 1,
            "truth": 0.7
          },
          "decision": {
            "evidenceBased": 0.7
          },
          "coreDesire": {
            "toBeFair": 1
          },
          "evidence": {
            "justiceSeeking": 1
          },
          "positive": {
            "fairLine": 1
          },
          "negative": {
            "tribalExcuse": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_011_c",
        "text": "Aku tidak mau menambal cerita dengan kebohongan kecil yang nanti tumbuh lebih besar.",
        "subtleMeaning": "truth",
        "weights": {
          "moral": {
            "truthBased": 2,
            "careBased": -0.3
          },
          "values": {
            "truth": 1,
            "meaning": 0.5
          },
          "decision": {
            "evidenceBased": 0.8
          },
          "coreDesire": {
            "toBeClear": 1
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanDisclosure": 1
          },
          "negative": {
            "comfortLie": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_011_d",
        "text": "Aku berdiri di samping orangku dulu, lalu memastikan ia tidak memakai kedekatan sebagai tameng.",
        "subtleMeaning": "loyalty",
        "weights": {
          "moral": {
            "loyaltyBased": 2,
            "truthBased": -0.4
          },
          "values": {
            "belonging": 1,
            "love": 0.6
          },
          "decision": {
            "valueBased": 0.7
          },
          "coreFear": {
            "betrayingOwnPeople": 1
          },
          "evidence": {
            "loyaltySeeking": 1
          },
          "positive": {
            "standsBeside": 1
          },
          "negative": {
            "publicExposure": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_011_e",
        "text": "Aku melihat akibat besok pagi, bukan hanya siapa yang menang malam ini.",
        "subtleMeaning": "outcome",
        "weights": {
          "moral": {
            "outcomeBased": 2,
            "purityIntegrityBased": -0.3
          },
          "values": {
            "achievement": 0.8,
            "peace": 0.4
          },
          "decision": {
            "riskAware": 0.8,
            "fastAction": 0.5
          },
          "coreFear": {
            "avoidableDamage": 1
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "reducesDamage": 1
          },
          "negative": {
            "principleBlindSpot": -0.7
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "val_012",
    "kind": "singleChoice",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Orang yang kau sayangi salah. Ia menatapmu seolah berharap kau menyelamatkannya dari akibatnya.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "val_012_a",
        "text": "Aku memilih kalimat yang jelas meski membuat meja makan menjadi hening.",
        "subtleMeaning": "truth",
        "weights": {
          "moral": {
            "truthBased": 2,
            "careBased": -0.3
          },
          "values": {
            "truth": 1,
            "meaning": 0.5
          },
          "decision": {
            "evidenceBased": 0.8
          },
          "coreDesire": {
            "toBeClear": 1
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanDisclosure": 1
          },
          "negative": {
            "comfortLie": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_012_b",
        "text": "Aku tidak langsung membongkar orang dekatku di depan semua orang, tapi aku menariknya bicara setelah itu.",
        "subtleMeaning": "loyalty",
        "weights": {
          "moral": {
            "loyaltyBased": 2,
            "truthBased": -0.4
          },
          "values": {
            "belonging": 1,
            "love": 0.6
          },
          "decision": {
            "valueBased": 0.7
          },
          "coreFear": {
            "betrayingOwnPeople": 1
          },
          "evidence": {
            "loyaltySeeking": 1
          },
          "positive": {
            "standsBeside": 1
          },
          "negative": {
            "publicExposure": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_012_c",
        "text": "Aku melihat orang yang paling lemah dulu, lalu memilih kalimat yang tidak membuatnya sendirian.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_012_d",
        "text": "Aku berkata, “kalau ini salah, nama siapa pun tidak membuatnya jadi benar.”",
        "subtleMeaning": "justice",
        "weights": {
          "moral": {
            "justiceBased": 2,
            "loyaltyBased": -0.5
          },
          "values": {
            "justice": 1,
            "truth": 0.7
          },
          "decision": {
            "evidenceBased": 0.7
          },
          "coreDesire": {
            "toBeFair": 1
          },
          "evidence": {
            "justiceSeeking": 1
          },
          "positive": {
            "fairLine": 1
          },
          "negative": {
            "tribalExcuse": -0.8
          },
          "reliability": 0.82
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "val_013",
    "kind": "singleChoice",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Ada bantuan yang bisa kau ambil, tapi syaratnya membuatmu merasa seperti menjual bagian kecil dari dirimu.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "val_013_a",
        "text": "Aku mundur dari rencana itu karena ada bagian diriku yang tidak bisa diajak berdamai.",
        "subtleMeaning": "integrity",
        "weights": {
          "moral": {
            "purityIntegrityBased": 2,
            "outcomeBased": -0.3
          },
          "values": {
            "truth": 0.8,
            "autonomy": 0.5
          },
          "decision": {
            "valueBased": 0.9
          },
          "coreDesire": {
            "toStayClean": 1
          },
          "evidence": {
            "selfRespect": 1
          },
          "positive": {
            "unboughtLine": 1
          },
          "negative": {
            "easyCompromise": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_013_b",
        "text": "Aku bertanya, “dia setuju karena mau, atau karena tidak punya jalan lain?”",
        "subtleMeaning": "freedom",
        "weights": {
          "moral": {
            "freedomBased": 2,
            "ruleBased": -0.5
          },
          "values": {
            "freedom": 1,
            "autonomy": 1
          },
          "decision": {
            "fastAction": 0.6
          },
          "coreDesire": {
            "toChoose": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "keepsDoorOpen": 1
          },
          "negative": {
            "obedientSilence": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_013_c",
        "text": "Aku menolak membuat pengecualian diam-diam karena nanti semua orang membayarnya.",
        "subtleMeaning": "rule",
        "weights": {
          "moral": {
            "ruleBased": 2,
            "freedomBased": -0.4
          },
          "values": {
            "security": 0.8,
            "competence": 0.5
          },
          "decision": {
            "riskAware": 0.8
          },
          "coreFear": {
            "chaosFromException": 1
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "stableStandard": 1
          },
          "negative": {
            "recklessException": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_013_d",
        "text": "Aku memilih cara yang menghentikan kerusakan paling cepat, lalu baru membahas siapa salah.",
        "subtleMeaning": "outcome",
        "weights": {
          "moral": {
            "outcomeBased": 2,
            "purityIntegrityBased": -0.3
          },
          "values": {
            "achievement": 0.8,
            "peace": 0.4
          },
          "decision": {
            "riskAware": 0.8,
            "fastAction": 0.5
          },
          "coreFear": {
            "avoidableDamage": 1
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "reducesDamage": 1
          },
          "negative": {
            "principleBlindSpot": -0.7
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "val_014",
    "kind": "multiChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Dalam kelompok, satu orang yang pendiam punya ide bagus tapi terus dipotong. Waktu presentasi hampir habis.",
    "instruction": "Pilih maksimal 2 tindakan yang paling mungkin kau ambil.",
    "options": [
      {
        "id": "val_014_a",
        "text": "Aku menahan keputusan sebentar karena ada orang yang akan menanggung akibat paling berat.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_014_b",
        "text": "Aku meminta semua orang memakai ukuran yang sama, termasuk orang yang paling dekat denganku.",
        "subtleMeaning": "justice",
        "weights": {
          "moral": {
            "justiceBased": 2,
            "loyaltyBased": -0.5
          },
          "values": {
            "justice": 1,
            "truth": 0.7
          },
          "decision": {
            "evidenceBased": 0.7
          },
          "coreDesire": {
            "toBeFair": 1
          },
          "evidence": {
            "justiceSeeking": 1
          },
          "positive": {
            "fairLine": 1
          },
          "negative": {
            "tribalExcuse": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "val_014_c",
        "text": "Aku melihat akibat besok pagi, bukan hanya siapa yang menang malam ini.",
        "subtleMeaning": "outcome",
        "weights": {
          "moral": {
            "outcomeBased": 2,
            "purityIntegrityBased": -0.3
          },
          "values": {
            "achievement": 0.8,
            "peace": 0.4
          },
          "decision": {
            "riskAware": 0.8,
            "fastAction": 0.5
          },
          "coreFear": {
            "avoidableDamage": 1
          },
          "evidence": {
            "practicalRepair": 1
          },
          "positive": {
            "reducesDamage": 1
          },
          "negative": {
            "principleBlindSpot": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "val_014_d",
        "text": "Aku menolak keputusan yang membuat seseorang kehilangan pilihan tanpa sempat bicara.",
        "subtleMeaning": "freedom",
        "weights": {
          "moral": {
            "freedomBased": 2,
            "ruleBased": -0.5
          },
          "values": {
            "freedom": 1,
            "autonomy": 1
          },
          "decision": {
            "fastAction": 0.6
          },
          "coreDesire": {
            "toChoose": 1
          },
          "evidence": {
            "autonomyProtection": 1
          },
          "positive": {
            "keepsDoorOpen": 1
          },
          "negative": {
            "obedientSilence": -0.8
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "val_015",
    "kind": "forcedChoice",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Kau bisa menjaga kedamaian malam ini dengan diam, atau membuat ruangan panas agar sesuatu tidak terus disembunyikan.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "val_015_a",
        "text": "Aku melihat orang yang paling lemah dulu, lalu memilih kalimat yang tidak membuatnya sendirian.",
        "subtleMeaning": "care",
        "weights": {
          "moral": {
            "careBased": 2,
            "ruleBased": -0.4
          },
          "values": {
            "love": 1,
            "peace": 0.5
          },
          "decision": {
            "consultative": 0.6
          },
          "coreDesire": {
            "toProtect": 1
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "protectsVulnerable": 1
          },
          "negative": {
            "coldCorrectness": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "val_015_b",
        "text": "Aku tidak mau menambal cerita dengan kebohongan kecil yang nanti tumbuh lebih besar.",
        "subtleMeaning": "truth",
        "weights": {
          "moral": {
            "truthBased": 2,
            "careBased": -0.3
          },
          "values": {
            "truth": 1,
            "meaning": 0.5
          },
          "decision": {
            "evidenceBased": 0.8
          },
          "coreDesire": {
            "toBeClear": 1
          },
          "evidence": {
            "truthSeeking": 1
          },
          "positive": {
            "cleanDisclosure": 1
          },
          "negative": {
            "comfortLie": -0.8
          },
          "reliability": 0.82
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
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "val_015_a",
      "text": "Aku melihat orang yang paling lemah dulu, lalu memilih kalimat yang tidak membuatnya sendirian.",
      "subtleMeaning": "care",
      "weights": {
        "moral": {
          "careBased": 2,
          "ruleBased": -0.4
        },
        "values": {
          "love": 1,
          "peace": 0.5
        },
        "decision": {
          "consultative": 0.6
        },
        "coreDesire": {
          "toProtect": 1
        },
        "evidence": {
          "peopleFirst": 1
        },
        "positive": {
          "protectsVulnerable": 1
        },
        "negative": {
          "coldCorrectness": -0.8
        },
        "reliability": 0.8
      }
    },
    "right": {
      "id": "val_015_b",
      "text": "Aku tidak mau menambal cerita dengan kebohongan kecil yang nanti tumbuh lebih besar.",
      "subtleMeaning": "truth",
      "weights": {
        "moral": {
          "truthBased": 2,
          "careBased": -0.3
        },
        "values": {
          "truth": 1,
          "meaning": 0.5
        },
        "decision": {
          "evidenceBased": 0.8
        },
        "coreDesire": {
          "toBeClear": 1
        },
        "evidence": {
          "truthSeeking": 1
        },
        "positive": {
          "cleanDisclosure": 1
        },
        "negative": {
          "comfortLie": -0.8
        },
        "reliability": 0.82
      }
    }
  }
];
