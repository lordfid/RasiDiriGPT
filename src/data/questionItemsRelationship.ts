import type { QuestionItem } from "../types";

export const RELATIONSHIP_QUESTIONS: QuestionItem[] = [
  {
    "id": "rel_001",
    "kind": "singleChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Setelah malam yang terasa dekat, pesanmu hanya dibaca. Di layar HP ada tanda centang, dan jam dinding terdengar terlalu keras.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_001_a",
        "text": "Aku menulis panjang, menghapus setengahnya, lalu tetap bertanya, “kita baik-baik saja nggak?”",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "rel_001_b",
        "text": "Aku membalas singkat, lalu menaruh HP terbalik sampai dadaku berhenti berisik.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_001_c",
        "text": "Aku menatapnya dan berkata, “kalimat itu nggak bisa lewat begitu saja.”",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_001_d",
        "text": "Aku berkata, “aku mau ngerti dulu, tapi jangan pakai kalimat yang bikin kita saling luka.”",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "rel_002",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di ruang tamu, seorang keluarga menyebut kekuranganmu sambil tertawa. Orang lain ikut tersenyum karena tidak tahu harus apa.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_002_a",
        "text": "Aku berkata pelan, “aku sayang, tapi aku nggak bisa menerima cara bicara seperti ini.”",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_002_b",
        "text": "Aku mengajak duduk di tempat yang lebih sepi dan mulai dari bagian yang paling tidak menusuk.",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "rel_002_a",
      "text": "Aku berkata pelan, “aku sayang, tapi aku nggak bisa menerima cara bicara seperti ini.”",
      "subtleMeaning": "boundary",
      "weights": {
        "relationship": {
          "autonomyProtection": 1.6,
          "secureLeaning": 0.6
        },
        "communication": {
          "restrained": 0.8,
          "direct": 0.8
        },
        "conflict": {
          "boundaryCutoff": 1
        },
        "enneagram": {
          "4": 0.5,
          "8": 0.6
        },
        "instinct": {
          "sp": 0.5
        },
        "evidence": {
          "boundarySetting": 1,
          "selfRespect": 0.8
        },
        "positive": {
          "selfRespect": 1
        },
        "negative": {
          "selfAbandonment": -0.9
        },
        "reliability": 0.82
      }
    },
    "right": {
      "id": "rel_002_b",
      "text": "Aku mengajak duduk di tempat yang lebih sepi dan mulai dari bagian yang paling tidak menusuk.",
      "subtleMeaning": "repair",
      "weights": {
        "relationship": {
          "repairSeeking": 2,
          "withdrawalWhenHurt": -0.5
        },
        "communication": {
          "gentle": 1,
          "direct": 0.4
        },
        "conflict": {
          "repairAttempt": 1
        },
        "enneagram": {
          "2": 0.8,
          "9": 0.5
        },
        "instinct": {
          "so": 0.5
        },
        "evidence": {
          "repairAttempt": 1,
          "peopleFirst": 0.7
        },
        "positive": {
          "bridgeMaking": 1
        },
        "negative": {
          "hardCutoff": -0.8
        },
        "reliability": 0.81
      }
    }
  },
  {
    "id": "rel_003",
    "kind": "singleChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Sahabatmu berubah. Di kafe yang biasa kalian datangi, ia menatap pintu lebih sering daripada menatapmu.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_003_a",
        "text": "Aku berkata, “aku mau ngerti dulu, tapi jangan pakai kalimat yang bikin kita saling luka.”",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      },
      {
        "id": "rel_003_b",
        "text": "Aku keluar sebentar, mencuci tangan terlalu lama, dan menunda bicara sampai kalimatku tidak tajam.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_003_c",
        "text": "Aku meminta ia mengulang ucapannya tanpa tawa, supaya jelas apa yang sebenarnya ia maksud.",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_003_d",
        "text": "Aku mencari tanda kecil bahwa aku belum benar-benar ditinggalkan.",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "rel_004",
    "kind": "singleChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Ia meminta maaf sambil tetap memainkan kunci motor. Kalimatnya pendek: “ya udah, maaf kalau kamu ngerasa gitu.”",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_004_a",
        "text": "Aku menatapnya dan berkata, “kalimat itu nggak bisa lewat begitu saja.”",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_004_b",
        "text": "Aku berhenti menjelaskan setelah sadar penjelasanku hanya dipakai untuk menunda batasku.",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_004_c",
        "text": "Aku mengajak duduk di tempat yang lebih sepi dan mulai dari bagian yang paling tidak menusuk.",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      },
      {
        "id": "rel_004_d",
        "text": "Aku membalas singkat, lalu menaruh HP terbalik sampai dadaku berhenti berisik.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "rel_005",
    "kind": "multiChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Orang yang dekat denganmu tiba-tiba menjauh. Statusnya aktif, tapi pesanmu dibiarkan tenggelam.",
    "instruction": "Pilih maksimal 2 reaksi yang paling mungkin muncul.",
    "options": [
      {
        "id": "rel_005_a",
        "text": "Aku menulis panjang, menghapus setengahnya, lalu tetap bertanya, “kita baik-baik saja nggak?”",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "rel_005_b",
        "text": "Aku keluar sebentar, mencuci tangan terlalu lama, dan menunda bicara sampai kalimatku tidak tajam.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_005_c",
        "text": "Aku berkata pelan, “aku sayang, tapi aku nggak bisa menerima cara bicara seperti ini.”",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_005_d",
        "text": "Aku meminta ia mengulang ucapannya tanpa tawa, supaya jelas apa yang sebenarnya ia maksud.",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "rel_006",
    "kind": "hiddenReaction",
    "context": {
      "domain": "friendship",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang yang rapuh meminta bantuan saat kau sendiri sudah hampir habis. Tangannya memegang lenganmu terlalu kuat.",
    "instruction": "Pilih reaksi yang paling mungkin kau sembunyikan.",
    "options": [
      {
        "id": "rel_006_a",
        "text": "Aku berhenti menjelaskan setelah sadar penjelasanku hanya dipakai untuk menunda batasku.",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_006_b",
        "text": "Aku berkata, “aku mau ngerti dulu, tapi jangan pakai kalimat yang bikin kita saling luka.”",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      },
      {
        "id": "rel_006_c",
        "text": "Aku mencari tanda kecil bahwa aku belum benar-benar ditinggalkan.",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "rel_006_d",
        "text": "Aku membalas singkat, lalu menaruh HP terbalik sampai dadaku berhenti berisik.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "rel_007",
    "kind": "singleChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Orang lama mengirim pesan: “aku lewat tempat kita dulu.” Hujan mengetuk jendela, dan kau belum menghapus nomornya.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_007_a",
        "text": "Aku keluar sebentar, mencuci tangan terlalu lama, dan menunda bicara sampai kalimatku tidak tajam.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_007_b",
        "text": "Aku menulis panjang, menghapus setengahnya, lalu tetap bertanya, “kita baik-baik saja nggak?”",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "rel_007_c",
        "text": "Aku berkata pelan, “aku sayang, tapi aku nggak bisa menerima cara bicara seperti ini.”",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_007_d",
        "text": "Aku menatapnya dan berkata, “kalimat itu nggak bisa lewat begitu saja.”",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "rel_008",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Temanmu menyindir sambil tertawa, “sensitif amat sih.” Di meja, orang lain tiba-tiba sibuk dengan minuman masing-masing.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_008_a",
        "text": "Aku meminta ia mengulang ucapannya tanpa tawa, supaya jelas apa yang sebenarnya ia maksud.",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_008_b",
        "text": "Aku membalas singkat, lalu menaruh HP terbalik sampai dadaku berhenti berisik.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "rel_008_a",
      "text": "Aku meminta ia mengulang ucapannya tanpa tawa, supaya jelas apa yang sebenarnya ia maksud.",
      "subtleMeaning": "direct",
      "weights": {
        "relationship": {
          "autonomyProtection": 1,
          "secureLeaning": 0.5
        },
        "communication": {
          "direct": 1.6
        },
        "conflict": {
          "directConfrontation": 1.4
        },
        "enneagram": {
          "8": 0.8,
          "1": 0.5
        },
        "instinct": {
          "sx": 0.4
        },
        "evidence": {
          "directEngagement": 1,
          "boundarySetting": 0.8
        },
        "positive": {
          "cleanBoundary": 1
        },
        "negative": {
          "overAccommodation": -0.8
        },
        "reliability": 0.82
      }
    },
    "right": {
      "id": "rel_008_b",
      "text": "Aku membalas singkat, lalu menaruh HP terbalik sampai dadaku berhenti berisik.",
      "subtleMeaning": "withdraw",
      "weights": {
        "relationship": {
          "withdrawalWhenHurt": 2,
          "reassuranceSeeking": -0.4
        },
        "communication": {
          "minimalResponse": 1,
          "restrained": 0.8
        },
        "conflict": {
          "quietWithdrawal": 1
        },
        "enneagram": {
          "5": 0.7,
          "9": 0.7
        },
        "instinct": {
          "sp": 0.7
        },
        "evidence": {
          "withdrawal": 1,
          "emotionalSuppression": 0.8
        },
        "positive": {
          "selfProtection": 1
        },
        "negative": {
          "immediateDisclosure": -0.8
        },
        "reliability": 0.8
      }
    }
  },
  {
    "id": "rel_009",
    "kind": "multiChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Ibumu meminta kau mengalah lagi “demi rumah nggak ribut.” Piring belum dicuci, dan malam sudah terlalu panjang.",
    "instruction": "Pilih maksimal 2 reaksi yang paling mungkin muncul.",
    "options": [
      {
        "id": "rel_009_a",
        "text": "Aku berhenti menjelaskan setelah sadar penjelasanku hanya dipakai untuk menunda batasku.",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_009_b",
        "text": "Aku mengajak duduk di tempat yang lebih sepi dan mulai dari bagian yang paling tidak menusuk.",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      },
      {
        "id": "rel_009_c",
        "text": "Aku keluar sebentar, mencuci tangan terlalu lama, dan menunda bicara sampai kalimatku tidak tajam.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_009_d",
        "text": "Aku mencari tanda kecil bahwa aku belum benar-benar ditinggalkan.",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "rel_010",
    "kind": "ranking",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Kau harus berkata jujur pada orang yang kau sayangi. Di draft chat, ada lima versi kalimat dan semuanya terasa kurang aman.",
    "instruction": "Urutkan dari yang paling mungkin kau lakukan sampai yang paling jauh.",
    "options": [
      {
        "id": "rel_010_a",
        "text": "Aku berkata, “aku mau ngerti dulu, tapi jangan pakai kalimat yang bikin kita saling luka.”",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      },
      {
        "id": "rel_010_b",
        "text": "Aku menatapnya dan berkata, “kalimat itu nggak bisa lewat begitu saja.”",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_010_c",
        "text": "Aku berkata pelan, “aku sayang, tapi aku nggak bisa menerima cara bicara seperti ini.”",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_010_d",
        "text": "Aku menulis panjang, menghapus setengahnya, lalu tetap bertanya, “kita baik-baik saja nggak?”",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "rel_010_e",
        "text": "Aku membalas singkat, lalu menaruh HP terbalik sampai dadaku berhenti berisik.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "rel_011",
    "kind": "singleChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di acara kecil, orang yang biasanya mencarimu malah duduk dekat orang lain. Kau memegang gelas plastik lebih erat dari perlu.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_011_a",
        "text": "Aku keluar sebentar, mencuci tangan terlalu lama, dan menunda bicara sampai kalimatku tidak tajam.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_011_b",
        "text": "Aku mencari tanda kecil bahwa aku belum benar-benar ditinggalkan.",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "rel_011_c",
        "text": "Aku mengajak duduk di tempat yang lebih sepi dan mulai dari bagian yang paling tidak menusuk.",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      },
      {
        "id": "rel_011_d",
        "text": "Aku berhenti menjelaskan setelah sadar penjelasanku hanya dipakai untuk menunda batasku.",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "rel_012",
    "kind": "singleChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang berkata, “maafin aja, kan keluarga.” Tapi bagian dalam dirimu belum sampai ke sana.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_012_a",
        "text": "Aku berkata pelan, “aku sayang, tapi aku nggak bisa menerima cara bicara seperti ini.”",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_012_b",
        "text": "Aku membalas singkat, lalu menaruh HP terbalik sampai dadaku berhenti berisik.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_012_c",
        "text": "Aku berkata, “aku mau ngerti dulu, tapi jangan pakai kalimat yang bikin kita saling luka.”",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      },
      {
        "id": "rel_012_d",
        "text": "Aku meminta ia mengulang ucapannya tanpa tawa, supaya jelas apa yang sebenarnya ia maksud.",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "rel_013",
    "kind": "multiChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Ia lupa hari yang bagimu penting. Di meja ada kue kecil yang kau beli sendiri, lilinnya belum dinyalakan.",
    "instruction": "Pilih maksimal 2 reaksi yang paling mungkin muncul.",
    "options": [
      {
        "id": "rel_013_a",
        "text": "Aku menulis panjang, menghapus setengahnya, lalu tetap bertanya, “kita baik-baik saja nggak?”",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "rel_013_b",
        "text": "Aku menatapnya dan berkata, “kalimat itu nggak bisa lewat begitu saja.”",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_013_c",
        "text": "Aku keluar sebentar, mencuci tangan terlalu lama, dan menunda bicara sampai kalimatku tidak tajam.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_013_d",
        "text": "Aku mengajak duduk di tempat yang lebih sepi dan mulai dari bagian yang paling tidak menusuk.",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "rel_014",
    "kind": "hiddenReaction",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Kau sadar mulai membalas lebih lambat, bukan karena sibuk, tapi karena setiap pesan terasa seperti pintu yang harus dijaga.",
    "instruction": "Pilih reaksi yang paling mungkin kau sembunyikan.",
    "options": [
      {
        "id": "rel_014_a",
        "text": "Aku membalas singkat, lalu menaruh HP terbalik sampai dadaku berhenti berisik.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_014_b",
        "text": "Aku berhenti menjelaskan setelah sadar penjelasanku hanya dipakai untuk menunda batasku.",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_014_c",
        "text": "Aku mencari tanda kecil bahwa aku belum benar-benar ditinggalkan.",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "rel_014_d",
        "text": "Aku berkata, “aku mau ngerti dulu, tapi jangan pakai kalimat yang bikin kita saling luka.”",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "rel_015",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang menunjukkan perhatian di depan umum. Semua orang melihat, dan kau tidak tahu apakah harus hangat atau waspada.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_015_a",
        "text": "Aku mengajak duduk di tempat yang lebih sepi dan mulai dari bagian yang paling tidak menusuk.",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      },
      {
        "id": "rel_015_b",
        "text": "Aku keluar sebentar, mencuci tangan terlalu lama, dan menunda bicara sampai kalimatku tidak tajam.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "rel_015_a",
      "text": "Aku mengajak duduk di tempat yang lebih sepi dan mulai dari bagian yang paling tidak menusuk.",
      "subtleMeaning": "repair",
      "weights": {
        "relationship": {
          "repairSeeking": 2,
          "withdrawalWhenHurt": -0.5
        },
        "communication": {
          "gentle": 1,
          "direct": 0.4
        },
        "conflict": {
          "repairAttempt": 1
        },
        "enneagram": {
          "2": 0.8,
          "9": 0.5
        },
        "instinct": {
          "so": 0.5
        },
        "evidence": {
          "repairAttempt": 1,
          "peopleFirst": 0.7
        },
        "positive": {
          "bridgeMaking": 1
        },
        "negative": {
          "hardCutoff": -0.8
        },
        "reliability": 0.81
      }
    },
    "right": {
      "id": "rel_015_b",
      "text": "Aku keluar sebentar, mencuci tangan terlalu lama, dan menunda bicara sampai kalimatku tidak tajam.",
      "subtleMeaning": "withdraw",
      "weights": {
        "relationship": {
          "withdrawalWhenHurt": 2,
          "reassuranceSeeking": -0.4
        },
        "communication": {
          "minimalResponse": 1,
          "restrained": 0.8
        },
        "conflict": {
          "quietWithdrawal": 1
        },
        "enneagram": {
          "5": 0.7,
          "9": 0.7
        },
        "instinct": {
          "sp": 0.7
        },
        "evidence": {
          "withdrawal": 1,
          "emotionalSuppression": 0.8
        },
        "positive": {
          "selfProtection": 1
        },
        "negative": {
          "immediateDisclosure": -0.8
        },
        "reliability": 0.8
      }
    }
  },
  {
    "id": "rel_016",
    "kind": "singleChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di depan minimarket, ia berkata, “aku cuma bercanda.” Tapi lelucon itu memakai rahasia yang dulu kau titipkan pelan-pelan.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_016_a",
        "text": "Aku berkata pelan, “aku sayang, tapi aku nggak bisa menerima cara bicara seperti ini.”",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_016_b",
        "text": "Aku meminta ia mengulang ucapannya tanpa tawa, supaya jelas apa yang sebenarnya ia maksud.",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_016_c",
        "text": "Aku membalas singkat, lalu menaruh HP terbalik sampai dadaku berhenti berisik.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_016_d",
        "text": "Aku berkata, “aku mau ngerti dulu, tapi jangan pakai kalimat yang bikin kita saling luka.”",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "rel_017",
    "kind": "ranking",
    "context": {
      "domain": "friendship",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Teman meminta penjelasan setelah kau menjauh. Di meja ada dua minuman yang mulai berair.",
    "instruction": "Urutkan dari yang paling mungkin kau lakukan sampai yang paling jauh.",
    "options": [
      {
        "id": "rel_017_a",
        "text": "Aku mengajak duduk di tempat yang lebih sepi dan mulai dari bagian yang paling tidak menusuk.",
        "subtleMeaning": "repair",
        "weights": {
          "relationship": {
            "repairSeeking": 2,
            "withdrawalWhenHurt": -0.5
          },
          "communication": {
            "gentle": 1,
            "direct": 0.4
          },
          "conflict": {
            "repairAttempt": 1
          },
          "enneagram": {
            "2": 0.8,
            "9": 0.5
          },
          "instinct": {
            "so": 0.5
          },
          "evidence": {
            "repairAttempt": 1,
            "peopleFirst": 0.7
          },
          "positive": {
            "bridgeMaking": 1
          },
          "negative": {
            "hardCutoff": -0.8
          },
          "reliability": 0.81
        }
      },
      {
        "id": "rel_017_b",
        "text": "Aku menatapnya dan berkata, “kalimat itu nggak bisa lewat begitu saja.”",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_017_c",
        "text": "Aku berhenti menjelaskan setelah sadar penjelasanku hanya dipakai untuk menunda batasku.",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_017_d",
        "text": "Aku menulis panjang, menghapus setengahnya, lalu tetap bertanya, “kita baik-baik saja nggak?”",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "rel_017_e",
        "text": "Aku keluar sebentar, mencuci tangan terlalu lama, dan menunda bicara sampai kalimatku tidak tajam.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "rel_018",
    "kind": "singleChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang hadir terus, tapi setiap hadirnya meminta balasan cepat. HP-mu seperti tidak pernah boleh tidur.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "rel_018_a",
        "text": "Aku berkata pelan, “aku sayang, tapi aku nggak bisa menerima cara bicara seperti ini.”",
        "subtleMeaning": "boundary",
        "weights": {
          "relationship": {
            "autonomyProtection": 1.6,
            "secureLeaning": 0.6
          },
          "communication": {
            "restrained": 0.8,
            "direct": 0.8
          },
          "conflict": {
            "boundaryCutoff": 1
          },
          "enneagram": {
            "4": 0.5,
            "8": 0.6
          },
          "instinct": {
            "sp": 0.5
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "positive": {
            "selfRespect": 1
          },
          "negative": {
            "selfAbandonment": -0.9
          },
          "reliability": 0.82
        }
      },
      {
        "id": "rel_018_b",
        "text": "Aku membalas singkat, lalu menaruh HP terbalik sampai dadaku berhenti berisik.",
        "subtleMeaning": "withdraw",
        "weights": {
          "relationship": {
            "withdrawalWhenHurt": 2,
            "reassuranceSeeking": -0.4
          },
          "communication": {
            "minimalResponse": 1,
            "restrained": 0.8
          },
          "conflict": {
            "quietWithdrawal": 1
          },
          "enneagram": {
            "5": 0.7,
            "9": 0.7
          },
          "instinct": {
            "sp": 0.7
          },
          "evidence": {
            "withdrawal": 1,
            "emotionalSuppression": 0.8
          },
          "positive": {
            "selfProtection": 1
          },
          "negative": {
            "immediateDisclosure": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "rel_018_c",
        "text": "Aku mencari tanda kecil bahwa aku belum benar-benar ditinggalkan.",
        "subtleMeaning": "reassure",
        "weights": {
          "relationship": {
            "reassuranceSeeking": 1.8,
            "anxiousLeaning": 1,
            "autonomyProtection": -0.5
          },
          "communication": {
            "overExplaining": 1
          },
          "conflict": {
            "appeasement": 0.7
          },
          "enneagram": {
            "6": 1,
            "2": 0.6
          },
          "instinct": {
            "sx": 0.6
          },
          "evidence": {
            "rejectionSensitivity": 1,
            "overExplaining": 0.8
          },
          "positive": {
            "connectionCare": 1
          },
          "negative": {
            "coldDistance": -0.8
          },
          "reliability": 0.78
        }
      },
      {
        "id": "rel_018_d",
        "text": "Aku meminta ia mengulang ucapannya tanpa tawa, supaya jelas apa yang sebenarnya ia maksud.",
        "subtleMeaning": "direct",
        "weights": {
          "relationship": {
            "autonomyProtection": 1,
            "secureLeaning": 0.5
          },
          "communication": {
            "direct": 1.6
          },
          "conflict": {
            "directConfrontation": 1.4
          },
          "enneagram": {
            "8": 0.8,
            "1": 0.5
          },
          "instinct": {
            "sx": 0.4
          },
          "evidence": {
            "directEngagement": 1,
            "boundarySetting": 0.8
          },
          "positive": {
            "cleanBoundary": 1
          },
          "negative": {
            "overAccommodation": -0.8
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "enneagram",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  }
];
