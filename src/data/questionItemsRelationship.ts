import type { QuestionItem } from "../types";

export const RELATIONSHIP_QUESTIONS: QuestionItem[] = [
  {
    "id": "rel_001",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Pesanmu dibaca sejak sore. Malamnya, ia hanya mengirim, “maaf, tadi sibuk.” Tidak ada penjelasan lain.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_001_a",
        "text": "Aku membalas pendek dan menunggu apakah ia sendiri berusaha memperbaiki jarak itu.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5,
            "Ni": 2,
            "Se": -0.6
          },
          "mbtiAxis": {
            "F": 1,
            "I": 1.1,
            "N": 1,
            "J": 0.4
          },
          "stackRole": {
            "dominant": 1.1,
            "opposing": 0.8
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "observeFirst": 1,
            "indirectEngagement": 0.8,
            "certaintySeeking": 1
          },
          "positive": {
            "keptSelfRespect": 1,
            "patientReading": 1,
            "checkedRisk": 1
          },
          "negative": {
            "selfErasure": -0.8,
            "rushedMove": -0.8,
            "blindLeap": -0.8
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.5
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "socionics": {
            "intuitiveEthical": 0.5
          },
          "quadra": {
            "Beta": 0.25,
            "Delta": 0.2
          },
          "enneagram": {
            "6": 1.1
          },
          "coreFear": {
            "unsafe": 0.8
          },
          "coreDesire": {
            "certainty": 0.7
          },
          "decision": {
            "riskAware": 0.7,
            "consultative": 0.4
          },
          "relationship": {
            "reassuranceSeeking": 0.6
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_001_b",
        "text": "Aku bertanya langsung, “aku perlu tahu ini sekadar sibuk, atau kau memang mulai menjauh?”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.3
          },
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "justiceSeeking": 1,
            "directEngagement": 0.4,
            "emotionalExpression": 0.8
          },
          "positive": {
            "softRepair": 1,
            "stoodForFairness": 1,
            "honestTenderness": 0.8
          },
          "negative": {
            "coldCut": -0.8,
            "easySilence": -0.8,
            "floodedReaction": -0.5
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "values": {
            "justice": 0.8,
            "truth": 0.4
          },
          "conflict": {
            "directConfrontation": 0.7
          },
          "bigFive": {
            "Neuroticism": 0.8
          },
          "hexaco": {
            "Emotionality": 0.9
          },
          "attitudinalPsyche": {
            "E_insecure": 0.5,
            "E_flexible": 0.3
          },
          "stress": {
            "collapse": 0.4,
            "freeze": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_001_a",
      "text": "Aku membalas pendek dan menunggu apakah ia sendiri berusaha memperbaiki jarak itu.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5,
          "Ni": 2,
          "Se": -0.6
        },
        "mbtiAxis": {
          "F": 1,
          "I": 1.1,
          "N": 1,
          "J": 0.4
        },
        "stackRole": {
          "dominant": 1.1,
          "opposing": 0.8
        },
        "evidence": {
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "observeFirst": 1,
          "indirectEngagement": 0.8,
          "certaintySeeking": 1
        },
        "positive": {
          "keptSelfRespect": 1,
          "patientReading": 1,
          "checkedRisk": 1
        },
        "negative": {
          "selfErasure": -0.8,
          "rushedMove": -0.8,
          "blindLeap": -0.8
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.5
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "socionics": {
          "intuitiveEthical": 0.5
        },
        "quadra": {
          "Beta": 0.25,
          "Delta": 0.2
        },
        "enneagram": {
          "6": 1.1
        },
        "coreFear": {
          "unsafe": 0.8
        },
        "coreDesire": {
          "certainty": 0.7
        },
        "decision": {
          "riskAware": 0.7,
          "consultative": 0.4
        },
        "relationship": {
          "reassuranceSeeking": 0.6
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_001_b",
      "text": "Aku bertanya langsung, “aku perlu tahu ini sekadar sibuk, atau kau memang mulai menjauh?”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.3
        },
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "justiceSeeking": 1,
          "directEngagement": 0.4,
          "emotionalExpression": 0.8
        },
        "positive": {
          "softRepair": 1,
          "stoodForFairness": 1,
          "honestTenderness": 0.8
        },
        "negative": {
          "coldCut": -0.8,
          "easySilence": -0.8,
          "floodedReaction": -0.5
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "values": {
          "justice": 0.8,
          "truth": 0.4
        },
        "conflict": {
          "directConfrontation": 0.7
        },
        "bigFive": {
          "Neuroticism": 0.8
        },
        "hexaco": {
          "Emotionality": 0.9
        },
        "attitudinalPsyche": {
          "E_insecure": 0.5,
          "E_flexible": 0.3
        },
        "stress": {
          "collapse": 0.4,
          "freeze": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_002",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Sahabatmu mulai sering pergi dengan orang baru. Di kafe, ia masih tertawa denganmu, tapi tidak lagi bercerita duluan.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_002_a",
        "text": "Aku tidak langsung menuntut. Aku mencari waktu berdua dan berkata, “aku kangen cara kita ngobrol dulu.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.3
          },
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 2.0
          },
          "positive": {
            "softRepair": 1,
            "softenedEdge": 1,
            "keptConnection": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "needlessSharpness": -0.8,
            "leftUnsaid": -0.5
          },
          "relationship": {
            "repairSeeking": 1.2,
            "secureLeaning": 1.0
          },
          "communication": {
            "gentle": 1.3,
            "expressive": 0.3
          },
          "bigFive": {
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Agreeableness": 0.8
          },
          "conflict": {
            "negotiation": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_002_b",
        "text": "Aku mulai menarik diri sedikit, karena aku tidak mau terlihat meminta tempat yang sudah tidak diberikan.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "5": 1.0,
            "6": 1.1
          },
          "stress": {
            "isolate": 0.7,
            "intellectualize": 0.5
          },
          "defense": {
            "intellectualization": 0.8,
            "withdrawal": 0.5
          },
          "learning": {
            "solitary": 0.6,
            "analytical": 0.5
          },
          "positive": {
            "protectedEnergy": 1,
            "keptSelfRespect": 1,
            "checkedRisk": 1
          },
          "negative": {
            "unreachedHeart": -0.7,
            "selfErasure": -0.8,
            "blindLeap": -0.8
          },
          "evidence": {
            "analysisLoop": 1,
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "certaintySeeking": 1
          },
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.5,
            "opposing": 0.4
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.5
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "coreFear": {
            "unsafe": 0.8
          },
          "coreDesire": {
            "certainty": 0.7
          },
          "decision": {
            "riskAware": 0.7,
            "consultative": 0.4
          },
          "relationship": {
            "reassuranceSeeking": 0.6
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_002_a",
      "text": "Aku tidak langsung menuntut. Aku mencari waktu berdua dan berkata, “aku kangen cara kita ngobrol dulu.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.3
        },
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 2.0
        },
        "positive": {
          "softRepair": 1,
          "softenedEdge": 1,
          "keptConnection": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "needlessSharpness": -0.8,
          "leftUnsaid": -0.5
        },
        "relationship": {
          "repairSeeking": 1.2,
          "secureLeaning": 1.0
        },
        "communication": {
          "gentle": 1.3,
          "expressive": 0.3
        },
        "bigFive": {
          "Agreeableness": 0.8
        },
        "hexaco": {
          "Agreeableness": 0.8
        },
        "conflict": {
          "negotiation": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_002_b",
      "text": "Aku mulai menarik diri sedikit, karena aku tidak mau terlihat meminta tempat yang sudah tidak diberikan.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "5": 1.0,
          "6": 1.1
        },
        "stress": {
          "isolate": 0.7,
          "intellectualize": 0.5
        },
        "defense": {
          "intellectualization": 0.8,
          "withdrawal": 0.5
        },
        "learning": {
          "solitary": 0.6,
          "analytical": 0.5
        },
        "positive": {
          "protectedEnergy": 1,
          "keptSelfRespect": 1,
          "checkedRisk": 1
        },
        "negative": {
          "unreachedHeart": -0.7,
          "selfErasure": -0.8,
          "blindLeap": -0.8
        },
        "evidence": {
          "analysisLoop": 1,
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "certaintySeeking": 1
        },
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.5,
          "opposing": 0.4
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.5
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "coreFear": {
          "unsafe": 0.8
        },
        "coreDesire": {
          "certainty": 0.7
        },
        "decision": {
          "riskAware": 0.7,
          "consultative": 0.4
        },
        "relationship": {
          "reassuranceSeeking": 0.6
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_003",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "high",
      "socialExposure": "public",
      "emotionalCharge": "high"
    },
    "prompt": "Di acara keluarga, seseorang bercanda tentang pilihan hidupmu. Tawa kecil menyebar sebelum kau sempat minum.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_003_a",
        "text": "Aku menatapnya dan berkata, “kalau mau tanya, tanya. Jangan bungkus dengan bercanda.”",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "values": {
            "justice": 0.8,
            "truth": 0.9,
            "autonomy": 0.7
          },
          "conflict": {
            "directConfrontation": 1.1,
            "boundaryCutoff": 0.5,
            "negotiation": 0.3
          },
          "positive": {
            "stoodForFairness": 1,
            "keptSelfRespect": 1,
            "namedTheIssue": 0.6
          },
          "negative": {
            "easySilence": -0.8,
            "selfErasure": -0.8,
            "buriedTheIssue": -0.5
          },
          "evidence": {
            "justiceSeeking": 1,
            "directEngagement": 0.7,
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.5,
            "opposing": 0.4
          },
          "communication": {
            "direct": 0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_003_b",
        "text": "Aku tersenyum tipis, menunggu acara selesai, lalu menghindari meja itu sampai pulang.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "9": 1.2,
            "5": 1.0
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
          },
          "stress": {
            "freeze": 0.5,
            "fawn": 0.3,
            "isolate": 0.7,
            "intellectualize": 0.5,
            "control": 0.6
          },
          "defense": {
            "withdrawal": 1.0,
            "intellectualization": 0.8
          },
          "positive": {
            "keptRoomGentle": 0.8,
            "protectedEnergy": 1,
            "keptSafe": 1
          },
          "negative": {
            "unspokenResentment": -0.7,
            "unreachedHeart": -0.7,
            "ignoredBody": -0.9
          },
          "evidence": {
            "peaceSeeking": 1,
            "analysisLoop": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "learning": {
            "solitary": 0.6,
            "analytical": 0.5
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_003_a",
      "text": "Aku menatapnya dan berkata, “kalau mau tanya, tanya. Jangan bungkus dengan bercanda.”",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "values": {
          "justice": 0.8,
          "truth": 0.9,
          "autonomy": 0.7
        },
        "conflict": {
          "directConfrontation": 1.1,
          "boundaryCutoff": 0.5,
          "negotiation": 0.3
        },
        "positive": {
          "stoodForFairness": 1,
          "keptSelfRespect": 1,
          "namedTheIssue": 0.6
        },
        "negative": {
          "easySilence": -0.8,
          "selfErasure": -0.8,
          "buriedTheIssue": -0.5
        },
        "evidence": {
          "justiceSeeking": 1,
          "directEngagement": 0.7,
          "boundarySetting": 1,
          "selfRespect": 0.8
        },
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.5,
          "opposing": 0.4
        },
        "communication": {
          "direct": 0.3
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_003_b",
      "text": "Aku tersenyum tipis, menunggu acara selesai, lalu menghindari meja itu sampai pulang.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "9": 1.2,
          "5": 1.0
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
        },
        "stress": {
          "freeze": 0.5,
          "fawn": 0.3,
          "isolate": 0.7,
          "intellectualize": 0.5,
          "control": 0.6
        },
        "defense": {
          "withdrawal": 1.0,
          "intellectualization": 0.8
        },
        "positive": {
          "keptRoomGentle": 0.8,
          "protectedEnergy": 1,
          "keptSafe": 1
        },
        "negative": {
          "unspokenResentment": -0.7,
          "unreachedHeart": -0.7,
          "ignoredBody": -0.9
        },
        "evidence": {
          "peaceSeeking": 1,
          "analysisLoop": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "learning": {
          "solitary": 0.6,
          "analytical": 0.5
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "conflict",
      "communication",
      "defense",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "conflict",
      "communication",
      "defense",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_004",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Mantan mengirim pesan singkat: “aku lewat tempat kita dulu.” Di luar, hujan memukul jendela.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_004_a",
        "text": "Aku tidak membuka percakapan lama hanya karena malam sedang lemah.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5,
            "Si": 2,
            "Ne": -0.6
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.9,
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 1.1,
            "opposing": 0.4,
            "tertiary": 0.3
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "memoryReferencing": 1,
            "carefulComparison": 0.8
          },
          "positive": {
            "keptSelfRespect": 1,
            "keptSafe": 1,
            "steadyRecall": 1
          },
          "negative": {
            "selfErasure": -0.8,
            "ignoredBody": -0.9,
            "untestedLeap": -0.7
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.5
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4,
            "familiarPlace": 0.7,
            "organizedSpace": 0.3
          },
          "stress": {
            "control": 0.6
          },
          "temperament": {
            "SJ": 0.4
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_004_b",
        "text": "Aku membalas satu kalimat yang jujur, tapi tidak memberi pintu terlalu lebar.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5,
            "Si": 2,
            "Ne": -0.6
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.9,
            "S": 1,
            "I": 0.4
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.9,
            "tertiary": 0.3
          },
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "memoryReferencing": 1,
            "carefulComparison": 0.8,
            "certaintySeeking": 1
          },
          "positive": {
            "softRepair": 1,
            "steadyRecall": 1,
            "checkedRisk": 1
          },
          "negative": {
            "coldCut": -0.8,
            "untestedLeap": -0.7,
            "blindLeap": -0.8
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5,
            "reassuranceSeeking": 0.6
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "environment": {
            "familiarPlace": 0.7,
            "organizedSpace": 0.3
          },
          "temperament": {
            "SJ": 0.4
          },
          "enneagram": {
            "6": 1.1
          },
          "coreFear": {
            "unsafe": 0.8
          },
          "coreDesire": {
            "certainty": 0.7
          },
          "decision": {
            "riskAware": 0.7,
            "consultative": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_004_a",
      "text": "Aku tidak membuka percakapan lama hanya karena malam sedang lemah.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5,
          "Si": 2,
          "Ne": -0.6
        },
        "mbtiAxis": {
          "F": 1,
          "I": 0.9,
          "S": 1,
          "J": 0.6
        },
        "stackRole": {
          "dominant": 1.1,
          "opposing": 0.4,
          "tertiary": 0.3
        },
        "evidence": {
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "memoryReferencing": 1,
          "carefulComparison": 0.8
        },
        "positive": {
          "keptSelfRespect": 1,
          "keptSafe": 1,
          "steadyRecall": 1
        },
        "negative": {
          "selfErasure": -0.8,
          "ignoredBody": -0.9,
          "untestedLeap": -0.7
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.5
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4,
          "familiarPlace": 0.7,
          "organizedSpace": 0.3
        },
        "stress": {
          "control": 0.6
        },
        "temperament": {
          "SJ": 0.4
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_004_b",
      "text": "Aku membalas satu kalimat yang jujur, tapi tidak memberi pintu terlalu lebar.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5,
          "Si": 2,
          "Ne": -0.6
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.9,
          "S": 1,
          "I": 0.4
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.9,
          "tertiary": 0.3
        },
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "memoryReferencing": 1,
          "carefulComparison": 0.8,
          "certaintySeeking": 1
        },
        "positive": {
          "softRepair": 1,
          "steadyRecall": 1,
          "checkedRisk": 1
        },
        "negative": {
          "coldCut": -0.8,
          "untestedLeap": -0.7,
          "blindLeap": -0.8
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5,
          "reassuranceSeeking": 0.6
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "environment": {
          "familiarPlace": 0.7,
          "organizedSpace": 0.3
        },
        "temperament": {
          "SJ": 0.4
        },
        "enneagram": {
          "6": 1.1
        },
        "coreFear": {
          "unsafe": 0.8
        },
        "coreDesire": {
          "certainty": 0.7
        },
        "decision": {
          "riskAware": 0.7,
          "consultative": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "communication",
      "values",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "values",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_005",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Temanmu menangis di motor parkiran. Kau sendiri baru saja melewati hari buruk.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_005_a",
        "text": "Aku duduk di sebelahnya dan berkata, “aku bisa temani, tapi malam ini aku juga pelan-pelan ya.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 1.5,
            "Ti": -0.5,
            "Fi": 2
          },
          "mbtiAxis": {
            "F": 2,
            "E": 0.5,
            "J": 0.3,
            "I": 0.5
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.8,
            "opposing": 0.4
          },
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "positive": {
            "softRepair": 1,
            "keptSelfRespect": 1,
            "keptSafe": 1
          },
          "negative": {
            "coldCut": -0.8,
            "selfErasure": -0.8,
            "ignoredBody": -0.9
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.5
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "stress": {
            "control": 0.6
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_005_b",
        "text": "Aku menguatkan diri dulu, mengantar dia pulang, lalu baru memikirkan lelahku setelah sendirian.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "2": 1.0
          },
          "coreFear": {
            "unwanted": 0.7
          },
          "coreDesire": {
            "needed": 0.7
          },
          "relationship": {
            "repairSeeking": 1.3,
            "secureLeaning": 0.5
          },
          "work": {
            "helper": 0.5
          },
          "riasec": {
            "Social": 0.7
          },
          "positive": {
            "warmPresence": 1,
            "softRepair": 1,
            "honestTenderness": 0.8
          },
          "negative": {
            "unseenNeed": -0.7,
            "coldCut": -0.8,
            "floodedReaction": -0.5
          },
          "evidence": {
            "peopleFirst": 2,
            "repairSeeking": 0.8,
            "emotionalExpression": 0.8
          },
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.3
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "bigFive": {
            "Neuroticism": 0.8
          },
          "hexaco": {
            "Emotionality": 0.9
          },
          "attitudinalPsyche": {
            "E_insecure": 0.5,
            "E_flexible": 0.3
          },
          "stress": {
            "collapse": 0.4,
            "freeze": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_005_a",
      "text": "Aku duduk di sebelahnya dan berkata, “aku bisa temani, tapi malam ini aku juga pelan-pelan ya.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 1.5,
          "Ti": -0.5,
          "Fi": 2
        },
        "mbtiAxis": {
          "F": 2,
          "E": 0.5,
          "J": 0.3,
          "I": 0.5
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.8,
          "opposing": 0.4
        },
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "positive": {
          "softRepair": 1,
          "keptSelfRespect": 1,
          "keptSafe": 1
        },
        "negative": {
          "coldCut": -0.8,
          "selfErasure": -0.8,
          "ignoredBody": -0.9
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.5
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "stress": {
          "control": 0.6
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_005_b",
      "text": "Aku menguatkan diri dulu, mengantar dia pulang, lalu baru memikirkan lelahku setelah sendirian.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "2": 1.0
        },
        "coreFear": {
          "unwanted": 0.7
        },
        "coreDesire": {
          "needed": 0.7
        },
        "relationship": {
          "repairSeeking": 1.3,
          "secureLeaning": 0.5
        },
        "work": {
          "helper": 0.5
        },
        "riasec": {
          "Social": 0.7
        },
        "positive": {
          "warmPresence": 1,
          "softRepair": 1,
          "honestTenderness": 0.8
        },
        "negative": {
          "unseenNeed": -0.7,
          "coldCut": -0.8,
          "floodedReaction": -0.5
        },
        "evidence": {
          "peopleFirst": 2,
          "repairSeeking": 0.8,
          "emotionalExpression": 0.8
        },
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.3
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "bigFive": {
          "Neuroticism": 0.8
        },
        "hexaco": {
          "Emotionality": 0.9
        },
        "attitudinalPsyche": {
          "E_insecure": 0.5,
          "E_flexible": 0.3
        },
        "stress": {
          "collapse": 0.4,
          "freeze": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "stress",
      "defense",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "stress",
      "defense",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_006",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Ia memperkenalkanmu ke teman-temannya. Tangannya menyentuh punggung kursimu, seperti memastikan kau tidak sendirian.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_006_a",
        "text": "Aku merasa aman kalau ia tetap memberi ruang untukku bergerak sendiri.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.5,
            "opposing": 0.4
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "orderSeeking": 0.8
          },
          "positive": {
            "keptSelfRespect": 1,
            "keptSafe": 1,
            "keptGround": 1
          },
          "negative": {
            "selfErasure": -0.8,
            "ignoredBody": -0.9,
            "chaoticDrift": -0.7
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.5,
            "security": 0.7
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4,
            "organizedSpace": 0.6,
            "familiarPlace": 0.4
          },
          "stress": {
            "control": 0.6
          },
          "bigFive": {
            "Conscientiousness": 0.6
          },
          "hexaco": {
            "Conscientiousness": 0.6
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_006_b",
        "text": "Aku merasa hangat kalau ia menunjukkan dengan jelas bahwa aku bagian dari malam itu.",
        "subtleMeaning": "hidden",
        "weights": {
          "instinct": {
            "so": 1.5,
            "sp": -0.5,
            "sx": 1.5
          },
          "relationship": {
            "belongingSeeking": 0.8,
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "expressive": 0.8,
            "gentle": 1.0
          },
          "evidence": {
            "statusAwareness": 0.7,
            "visibleRole": 0.7,
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "intensitySeeking": 1,
            "onePersonFocus": 0.7
          },
          "positive": {
            "socialBridge": 1,
            "softRepair": 1,
            "aliveBond": 1
          },
          "negative": {
            "privateTunnel": -0.6,
            "coldCut": -0.8,
            "safeDistance": -0.7
          },
          "disc": {
            "I": 0.5
          },
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.3
          },
          "loveStyle": {
            "emotionalDepth": 0.8,
            "sharedDream": 0.5
          },
          "idealPartner": {
            "idealIntensity": 0.8,
            "idealMystery": 0.4
          },
          "enneagram": {
            "4": 0.4,
            "8": 0.2
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_006_a",
      "text": "Aku merasa aman kalau ia tetap memberi ruang untukku bergerak sendiri.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.5,
          "opposing": 0.4
        },
        "evidence": {
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "orderSeeking": 0.8
        },
        "positive": {
          "keptSelfRespect": 1,
          "keptSafe": 1,
          "keptGround": 1
        },
        "negative": {
          "selfErasure": -0.8,
          "ignoredBody": -0.9,
          "chaoticDrift": -0.7
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.5,
          "security": 0.7
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4,
          "organizedSpace": 0.6,
          "familiarPlace": 0.4
        },
        "stress": {
          "control": 0.6
        },
        "bigFive": {
          "Conscientiousness": 0.6
        },
        "hexaco": {
          "Conscientiousness": 0.6
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_006_b",
      "text": "Aku merasa hangat kalau ia menunjukkan dengan jelas bahwa aku bagian dari malam itu.",
      "subtleMeaning": "hidden",
      "weights": {
        "instinct": {
          "so": 1.5,
          "sp": -0.5,
          "sx": 1.5
        },
        "relationship": {
          "belongingSeeking": 0.8,
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "expressive": 0.8,
          "gentle": 1.0
        },
        "evidence": {
          "statusAwareness": 0.7,
          "visibleRole": 0.7,
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "intensitySeeking": 1,
          "onePersonFocus": 0.7
        },
        "positive": {
          "socialBridge": 1,
          "softRepair": 1,
          "aliveBond": 1
        },
        "negative": {
          "privateTunnel": -0.6,
          "coldCut": -0.8,
          "safeDistance": -0.7
        },
        "disc": {
          "I": 0.5
        },
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.3
        },
        "loveStyle": {
          "emotionalDepth": 0.8,
          "sharedDream": 0.5
        },
        "idealPartner": {
          "idealIntensity": 0.8,
          "idealMystery": 0.4
        },
        "enneagram": {
          "4": 0.4,
          "8": 0.2
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "loveStyle",
      "instinct",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "loveStyle",
      "instinct",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_007",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Seseorang berkata, “kau berubah,” saat kau mulai berhenti selalu tersedia. Meja di antara kalian terasa terlalu kecil.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_007_a",
        "text": "Aku berkata, “mungkin aku berubah karena dulu aku terlalu sering mengalah.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.5,
            "opposing": 0.4
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 1.2,
            "justiceSeeking": 1,
            "directEngagement": 0.4
          },
          "positive": {
            "keptSelfRespect": 1,
            "stoodForFairness": 1,
            "keptMeaning": 0.6
          },
          "negative": {
            "selfErasure": -0.8,
            "easySilence": -0.8,
            "hollowYes": -0.5
          },
          "values": {
            "autonomy": 1.1,
            "truth": 0.9,
            "justice": 0.8,
            "meaning": 0.4
          },
          "conflict": {
            "boundaryCutoff": 0.5,
            "directConfrontation": 0.7
          },
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_007_b",
        "text": "Aku bertanya, “bagian mana yang membuatmu merasa kutinggalkan?” sebelum membela diri.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.3
          },
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 1.5,
            "directEngagement": 0.4
          },
          "positive": {
            "softRepair": 1,
            "softenedEdge": 1,
            "clearWords": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "needlessSharpness": -0.8,
            "muddyMessage": -0.5
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 1.6,
            "expressive": 0.3,
            "direct": 0.5
          },
          "bigFive": {
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Agreeableness": 0.8
          },
          "conflict": {
            "negotiation": 0.5
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_007_a",
      "text": "Aku berkata, “mungkin aku berubah karena dulu aku terlalu sering mengalah.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.5,
          "opposing": 0.4
        },
        "evidence": {
          "boundarySetting": 1,
          "selfRespect": 1.2,
          "justiceSeeking": 1,
          "directEngagement": 0.4
        },
        "positive": {
          "keptSelfRespect": 1,
          "stoodForFairness": 1,
          "keptMeaning": 0.6
        },
        "negative": {
          "selfErasure": -0.8,
          "easySilence": -0.8,
          "hollowYes": -0.5
        },
        "values": {
          "autonomy": 1.1,
          "truth": 0.9,
          "justice": 0.8,
          "meaning": 0.4
        },
        "conflict": {
          "boundaryCutoff": 0.5,
          "directConfrontation": 0.7
        },
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_007_b",
      "text": "Aku bertanya, “bagian mana yang membuatmu merasa kutinggalkan?” sebelum membela diri.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.3
        },
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 1.5,
          "directEngagement": 0.4
        },
        "positive": {
          "softRepair": 1,
          "softenedEdge": 1,
          "clearWords": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "needlessSharpness": -0.8,
          "muddyMessage": -0.5
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 1.6,
          "expressive": 0.3,
          "direct": 0.5
        },
        "bigFive": {
          "Agreeableness": 0.8
        },
        "hexaco": {
          "Agreeableness": 0.8
        },
        "conflict": {
          "negotiation": 0.5
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "conflict",
      "communication",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "conflict",
      "communication",
      "coreFear",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_008",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "medium"
    },
    "prompt": "Adikmu diam di kamar setelah dimarahi. Dari luar pintu, terdengar suara kipas dan satu isakan yang ditahan.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_008_a",
        "text": "Aku mengetuk pelan dan berkata, “aku taruh makanan di sini. Aku nggak maksa kau cerita.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.3
          },
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8,
            "peaceSeeking": 1
          },
          "positive": {
            "softRepair": 1,
            "keptSafe": 1,
            "keptRoomGentle": 0.8
          },
          "negative": {
            "coldCut": -0.8,
            "ignoredBody": -0.9,
            "unspokenResentment": -0.7
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "stress": {
            "control": 0.6,
            "freeze": 0.5,
            "fawn": 0.3
          },
          "enneagram": {
            "9": 1.2
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
          },
          "defense": {
            "withdrawal": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_008_b",
        "text": "Aku masuk sebentar, duduk di lantai, dan berkata, “aku tahu rasanya disalahkan sendirian.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.3
          },
          "evidence": {
            "peopleFirst": 2,
            "repairSeeking": 0.8,
            "emotionalExpression": 0.8
          },
          "positive": {
            "softRepair": 1,
            "honestTenderness": 0.8,
            "warmPresence": 1
          },
          "negative": {
            "coldCut": -0.8,
            "floodedReaction": -0.5,
            "unseenNeed": -0.7
          },
          "relationship": {
            "repairSeeking": 1.3,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "bigFive": {
            "Neuroticism": 0.8
          },
          "hexaco": {
            "Emotionality": 0.9
          },
          "attitudinalPsyche": {
            "E_insecure": 0.5,
            "E_flexible": 0.3
          },
          "stress": {
            "collapse": 0.4,
            "freeze": 0.3
          },
          "enneagram": {
            "2": 1.0
          },
          "coreFear": {
            "unwanted": 0.7
          },
          "coreDesire": {
            "needed": 0.7
          },
          "work": {
            "helper": 0.5
          },
          "riasec": {
            "Social": 0.7
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_008_a",
      "text": "Aku mengetuk pelan dan berkata, “aku taruh makanan di sini. Aku nggak maksa kau cerita.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.3
        },
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8,
          "peaceSeeking": 1
        },
        "positive": {
          "softRepair": 1,
          "keptSafe": 1,
          "keptRoomGentle": 0.8
        },
        "negative": {
          "coldCut": -0.8,
          "ignoredBody": -0.9,
          "unspokenResentment": -0.7
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "stress": {
          "control": 0.6,
          "freeze": 0.5,
          "fawn": 0.3
        },
        "enneagram": {
          "9": 1.2
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
        },
        "defense": {
          "withdrawal": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_008_b",
      "text": "Aku masuk sebentar, duduk di lantai, dan berkata, “aku tahu rasanya disalahkan sendirian.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.3
        },
        "evidence": {
          "peopleFirst": 2,
          "repairSeeking": 0.8,
          "emotionalExpression": 0.8
        },
        "positive": {
          "softRepair": 1,
          "honestTenderness": 0.8,
          "warmPresence": 1
        },
        "negative": {
          "coldCut": -0.8,
          "floodedReaction": -0.5,
          "unseenNeed": -0.7
        },
        "relationship": {
          "repairSeeking": 1.3,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "bigFive": {
          "Neuroticism": 0.8
        },
        "hexaco": {
          "Emotionality": 0.9
        },
        "attitudinalPsyche": {
          "E_insecure": 0.5,
          "E_flexible": 0.3
        },
        "stress": {
          "collapse": 0.4,
          "freeze": 0.3
        },
        "enneagram": {
          "2": 1.0
        },
        "coreFear": {
          "unwanted": 0.7
        },
        "coreDesire": {
          "needed": 0.7
        },
        "work": {
          "helper": 0.5
        },
        "riasec": {
          "Social": 0.7
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "loveStyle",
      "communication",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "loveStyle",
      "communication",
      "coreDesire",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_009",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Pasanganmu berkata, “terserah,” tapi wajahnya jelas tidak menyerah. Piring di meja belum dibereskan.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_009_a",
        "text": "Aku berhenti mencuci piring dan berkata, “jangan pakai terserah kalau sebenarnya ada yang sakit.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.3
          },
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "justiceSeeking": 1,
            "directEngagement": 0.8
          },
          "positive": {
            "softRepair": 1,
            "stoodForFairness": 1,
            "clearWords": 0.6
          },
          "negative": {
            "coldCut": -0.8,
            "easySilence": -0.8,
            "muddyMessage": -0.5
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 1.0,
            "expressive": 0.3,
            "direct": 0.5
          },
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "values": {
            "justice": 0.8,
            "truth": 0.4
          },
          "conflict": {
            "directConfrontation": 0.7
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_009_b",
        "text": "Aku memberi jarak sebentar agar kami tidak saling melempar kalimat yang tidak bisa ditarik.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "9": 1.2,
            "5": 1.0
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
          },
          "stress": {
            "freeze": 0.5,
            "fawn": 0.3,
            "isolate": 0.7,
            "intellectualize": 0.5,
            "control": 0.6
          },
          "defense": {
            "withdrawal": 1.0,
            "intellectualization": 0.8
          },
          "positive": {
            "keptRoomGentle": 0.8,
            "protectedEnergy": 1,
            "keptSafe": 1
          },
          "negative": {
            "unspokenResentment": -0.7,
            "unreachedHeart": -0.7,
            "ignoredBody": -0.9
          },
          "evidence": {
            "peaceSeeking": 1,
            "analysisLoop": 1,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "learning": {
            "solitary": 0.6,
            "analytical": 0.5
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_009_a",
      "text": "Aku berhenti mencuci piring dan berkata, “jangan pakai terserah kalau sebenarnya ada yang sakit.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.3
        },
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "justiceSeeking": 1,
          "directEngagement": 0.8
        },
        "positive": {
          "softRepair": 1,
          "stoodForFairness": 1,
          "clearWords": 0.6
        },
        "negative": {
          "coldCut": -0.8,
          "easySilence": -0.8,
          "muddyMessage": -0.5
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 1.0,
          "expressive": 0.3,
          "direct": 0.5
        },
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "values": {
          "justice": 0.8,
          "truth": 0.4
        },
        "conflict": {
          "directConfrontation": 0.7
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_009_b",
      "text": "Aku memberi jarak sebentar agar kami tidak saling melempar kalimat yang tidak bisa ditarik.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "9": 1.2,
          "5": 1.0
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
        },
        "stress": {
          "freeze": 0.5,
          "fawn": 0.3,
          "isolate": 0.7,
          "intellectualize": 0.5,
          "control": 0.6
        },
        "defense": {
          "withdrawal": 1.0,
          "intellectualization": 0.8
        },
        "positive": {
          "keptRoomGentle": 0.8,
          "protectedEnergy": 1,
          "keptSafe": 1
        },
        "negative": {
          "unspokenResentment": -0.7,
          "unreachedHeart": -0.7,
          "ignoredBody": -0.9
        },
        "evidence": {
          "peaceSeeking": 1,
          "analysisLoop": 1,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "learning": {
          "solitary": 0.6,
          "analytical": 0.5
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "conflict",
      "communication",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "conflict",
      "communication",
      "stress",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_010",
    "kind": "forcedChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "public",
      "emotionalCharge": "medium"
    },
    "prompt": "Di ulang tahun teman, seseorang memotong ceritamu berkali-kali. Orang lain tidak sadar, tapi kau sadar.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_010_a",
        "text": "Aku menyelesaikan kalimatku dengan suara lebih tegas, tanpa meminta izin lagi.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Se": 2,
            "Ni": -0.6,
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "E": 0.6,
            "S": 1,
            "P": 0.5,
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 1.0,
            "inferior": 0.3,
            "opposing": 0.4
          },
          "evidence": {
            "actionFirst": 1,
            "directEngagement": 1.3,
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "justiceSeeking": 1
          },
          "positive": {
            "presentMove": 1,
            "keptSelfRespect": 1,
            "stoodForFairness": 1
          },
          "negative": {
            "overWaiting": -0.8,
            "selfErasure": -0.8,
            "easySilence": -0.8
          },
          "stress": {
            "fight": 0.5
          },
          "disc": {
            "D": 0.5
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.9,
            "justice": 0.8
          },
          "conflict": {
            "boundaryCutoff": 0.5,
            "directConfrontation": 0.7
          },
          "enneagram": {
            "1": 0.8,
            "8": 0.4
          },
          "moral": {
            "justiceBased": 1,
            "truthBased": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_010_b",
        "text": "Aku membiarkannya lewat, lalu memilih bicara dengan orang yang benar-benar mendengarkan.",
        "subtleMeaning": "hidden",
        "weights": {
          "enneagram": {
            "9": 1.2
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3,
            "boundaryCutoff": 0.5
          },
          "stress": {
            "freeze": 0.5,
            "fawn": 0.3,
            "control": 0.6
          },
          "defense": {
            "withdrawal": 0.5
          },
          "positive": {
            "keptRoomGentle": 0.8,
            "keptSelfRespect": 1,
            "keptSafe": 1
          },
          "negative": {
            "unspokenResentment": -0.7,
            "selfErasure": -0.8,
            "ignoredBody": -0.9
          },
          "evidence": {
            "peaceSeeking": 1,
            "boundarySetting": 1,
            "selfRespect": 0.8,
            "bodyAwareness": 1,
            "riskAvoidance": 0.8
          },
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.5,
            "opposing": 0.4
          },
          "values": {
            "autonomy": 0.7,
            "truth": 0.5
          },
          "instinct": {
            "sp": 1.5,
            "sx": -0.3
          },
          "attitudinalPsyche": {
            "F_confident": 0.7,
            "V_flexible": 0.3
          },
          "environment": {
            "privateSpace": 0.6,
            "functionalSpace": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_010_a",
      "text": "Aku menyelesaikan kalimatku dengan suara lebih tegas, tanpa meminta izin lagi.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Se": 2,
          "Ni": -0.6,
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "E": 0.6,
          "S": 1,
          "P": 0.5,
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 1.0,
          "inferior": 0.3,
          "opposing": 0.4
        },
        "evidence": {
          "actionFirst": 1,
          "directEngagement": 1.3,
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "justiceSeeking": 1
        },
        "positive": {
          "presentMove": 1,
          "keptSelfRespect": 1,
          "stoodForFairness": 1
        },
        "negative": {
          "overWaiting": -0.8,
          "selfErasure": -0.8,
          "easySilence": -0.8
        },
        "stress": {
          "fight": 0.5
        },
        "disc": {
          "D": 0.5
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.9,
          "justice": 0.8
        },
        "conflict": {
          "boundaryCutoff": 0.5,
          "directConfrontation": 0.7
        },
        "enneagram": {
          "1": 0.8,
          "8": 0.4
        },
        "moral": {
          "justiceBased": 1,
          "truthBased": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_010_b",
      "text": "Aku membiarkannya lewat, lalu memilih bicara dengan orang yang benar-benar mendengarkan.",
      "subtleMeaning": "hidden",
      "weights": {
        "enneagram": {
          "9": 1.2
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3,
          "boundaryCutoff": 0.5
        },
        "stress": {
          "freeze": 0.5,
          "fawn": 0.3,
          "control": 0.6
        },
        "defense": {
          "withdrawal": 0.5
        },
        "positive": {
          "keptRoomGentle": 0.8,
          "keptSelfRespect": 1,
          "keptSafe": 1
        },
        "negative": {
          "unspokenResentment": -0.7,
          "selfErasure": -0.8,
          "ignoredBody": -0.9
        },
        "evidence": {
          "peaceSeeking": 1,
          "boundarySetting": 1,
          "selfRespect": 0.8,
          "bodyAwareness": 1,
          "riskAvoidance": 0.8
        },
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.5,
          "opposing": 0.4
        },
        "values": {
          "autonomy": 0.7,
          "truth": 0.5
        },
        "instinct": {
          "sp": 1.5,
          "sx": -0.3
        },
        "attitudinalPsyche": {
          "F_confident": 0.7,
          "V_flexible": 0.3
        },
        "environment": {
          "privateSpace": 0.6,
          "functionalSpace": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "communication",
      "conflict",
      "relationship",
      "disc",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "communication",
      "conflict",
      "relationship",
      "disc",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_011",
    "kind": "forcedChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "private",
      "emotionalCharge": "high"
    },
    "prompt": "Orang yang dekat denganmu berkata, “aku takut kamu bosan kalau tahu semua sisi burukku.”",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_011_a",
        "text": "Aku menjawab, “aku tidak butuh kau sempurna, tapi aku butuh kau jujur saat mulai menjauh.”",
        "subtleMeaning": "hidden",
        "weights": {
          "hexaco": {
            "HonestyHumility": 1.0
          },
          "moral": {
            "truthBased": 0.8,
            "purityIntegrityBased": 0.4
          },
          "values": {
            "truth": 1.3,
            "autonomy": 0.7
          },
          "positive": {
            "cleanHands": 1,
            "softRepair": 1,
            "keptSelfRespect": 1
          },
          "negative": {
            "smoothLie": -0.8,
            "coldCut": -0.8,
            "selfErasure": -0.8
          },
          "evidence": {
            "truthSeeking": 1,
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "boundarySetting": 1,
            "selfRespect": 0.8
          },
          "cognitive": {
            "Fe": 1.5,
            "Ti": -0.5,
            "Fi": 2
          },
          "mbtiAxis": {
            "F": 2,
            "E": 0.5,
            "J": 0.3,
            "I": 0.5
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.8,
            "opposing": 0.4
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_011_b",
        "text": "Aku duduk lebih dekat dan berkata, “kita pelan-pelan. Tapi jangan hilang tanpa memberi tanda.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fe": 2,
            "Ti": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.7,
            "dominant": 0.3
          },
          "evidence": {
            "peopleFirst": 1,
            "repairSeeking": 0.8,
            "certaintySeeking": 1,
            "emotionalExpression": 0.8
          },
          "positive": {
            "softRepair": 1,
            "checkedRisk": 1,
            "honestTenderness": 0.8
          },
          "negative": {
            "coldCut": -0.8,
            "blindLeap": -0.8,
            "floodedReaction": -0.5
          },
          "relationship": {
            "repairSeeking": 0.8,
            "secureLeaning": 0.5,
            "reassuranceSeeking": 0.6
          },
          "communication": {
            "gentle": 0.7,
            "expressive": 0.3
          },
          "enneagram": {
            "6": 1.1
          },
          "coreFear": {
            "unsafe": 0.8
          },
          "coreDesire": {
            "certainty": 0.7
          },
          "decision": {
            "riskAware": 0.7,
            "consultative": 0.4
          },
          "bigFive": {
            "Neuroticism": 0.8
          },
          "hexaco": {
            "Emotionality": 0.9
          },
          "attitudinalPsyche": {
            "E_insecure": 0.5,
            "E_flexible": 0.3
          },
          "stress": {
            "collapse": 0.4,
            "freeze": 0.3
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_011_a",
      "text": "Aku menjawab, “aku tidak butuh kau sempurna, tapi aku butuh kau jujur saat mulai menjauh.”",
      "subtleMeaning": "hidden",
      "weights": {
        "hexaco": {
          "HonestyHumility": 1.0
        },
        "moral": {
          "truthBased": 0.8,
          "purityIntegrityBased": 0.4
        },
        "values": {
          "truth": 1.3,
          "autonomy": 0.7
        },
        "positive": {
          "cleanHands": 1,
          "softRepair": 1,
          "keptSelfRespect": 1
        },
        "negative": {
          "smoothLie": -0.8,
          "coldCut": -0.8,
          "selfErasure": -0.8
        },
        "evidence": {
          "truthSeeking": 1,
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "boundarySetting": 1,
          "selfRespect": 0.8
        },
        "cognitive": {
          "Fe": 1.5,
          "Ti": -0.5,
          "Fi": 2
        },
        "mbtiAxis": {
          "F": 2,
          "E": 0.5,
          "J": 0.3,
          "I": 0.5
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.8,
          "opposing": 0.4
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_011_b",
      "text": "Aku duduk lebih dekat dan berkata, “kita pelan-pelan. Tapi jangan hilang tanpa memberi tanda.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fe": 2,
          "Ti": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "E": 0.5,
          "J": 0.3
        },
        "stackRole": {
          "auxiliary": 0.7,
          "dominant": 0.3
        },
        "evidence": {
          "peopleFirst": 1,
          "repairSeeking": 0.8,
          "certaintySeeking": 1,
          "emotionalExpression": 0.8
        },
        "positive": {
          "softRepair": 1,
          "checkedRisk": 1,
          "honestTenderness": 0.8
        },
        "negative": {
          "coldCut": -0.8,
          "blindLeap": -0.8,
          "floodedReaction": -0.5
        },
        "relationship": {
          "repairSeeking": 0.8,
          "secureLeaning": 0.5,
          "reassuranceSeeking": 0.6
        },
        "communication": {
          "gentle": 0.7,
          "expressive": 0.3
        },
        "enneagram": {
          "6": 1.1
        },
        "coreFear": {
          "unsafe": 0.8
        },
        "coreDesire": {
          "certainty": 0.7
        },
        "decision": {
          "riskAware": 0.7,
          "consultative": 0.4
        },
        "bigFive": {
          "Neuroticism": 0.8
        },
        "hexaco": {
          "Emotionality": 0.9
        },
        "attitudinalPsyche": {
          "E_insecure": 0.5,
          "E_flexible": 0.3
        },
        "stress": {
          "collapse": 0.4,
          "freeze": 0.3
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "loveStyle",
      "coreFear",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "loveStyle",
      "coreFear",
      "communication",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  },
  {
    "id": "rel_012",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Ayah atau ibu mengulang nasihat yang sama. Nadanya tidak jahat, tapi tubuhmu sudah lelah mendengarnya.",
    "instruction": "Pilih sisi yang terasa lebih dekat. Kau juga boleh memilih “dua-duanya”, “tidak dua-duanya”, atau “tergantung”.",
    "options": [
      {
        "id": "rel_012_a",
        "text": "Aku berkata pelan, “aku dengar, tapi aku juga perlu dipercaya mengambil jalanku.”",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Fi": 2,
            "Fe": -0.5
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.5
          },
          "stackRole": {
            "dominant": 0.5,
            "opposing": 0.4
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 1.2,
            "directEngagement": 0.4
          },
          "positive": {
            "keptSelfRespect": 1,
            "keptMeaning": 0.6,
            "clearWords": 0.6
          },
          "negative": {
            "selfErasure": -0.8,
            "hollowYes": -0.5,
            "muddyMessage": -0.5
          },
          "values": {
            "autonomy": 1.1,
            "truth": 0.5,
            "meaning": 0.4
          },
          "conflict": {
            "boundaryCutoff": 0.5
          },
          "communication": {
            "direct": 0.5,
            "gentle": 0.3
          },
          "reliability": 0.84
        }
      },
      {
        "id": "rel_012_b",
        "text": "Aku mengangguk dulu, lalu memilih membuktikan lewat tindakan kecil daripada debat panjang.",
        "subtleMeaning": "hidden",
        "weights": {
          "cognitive": {
            "Te": 2,
            "Fi": -0.5
          },
          "mbtiAxis": {
            "T": 0.8,
            "J": 1
          },
          "stackRole": {
            "auxiliary": 0.6,
            "dominant": 0.5
          },
          "evidence": {
            "practicalRepair": 1,
            "systemFirst": 0.8,
            "peaceSeeking": 1,
            "orderSeeking": 0.8
          },
          "positive": {
            "clearNextStep": 1,
            "keptRoomGentle": 0.8,
            "keptGround": 1
          },
          "negative": {
            "looseProcess": -0.8,
            "unspokenResentment": -0.7,
            "chaoticDrift": -0.7
          },
          "work": {
            "planner": 0.8,
            "executor": 0.6
          },
          "disc": {
            "C": 0.4,
            "D": 0.4
          },
          "enneagram": {
            "9": 1.2
          },
          "coreFear": {
            "conflict": 0.7
          },
          "coreDesire": {
            "peace": 0.7
          },
          "conflict": {
            "quietWithdrawal": 0.7,
            "appeasement": 0.3
          },
          "stress": {
            "freeze": 0.5,
            "fawn": 0.3
          },
          "defense": {
            "withdrawal": 0.5
          },
          "bigFive": {
            "Conscientiousness": 0.6
          },
          "hexaco": {
            "Conscientiousness": 0.6
          },
          "values": {
            "security": 0.7
          },
          "environment": {
            "organizedSpace": 0.6,
            "familiarPlace": 0.4
          },
          "reliability": 0.84
        }
      }
    ],
    "left": {
      "id": "rel_012_a",
      "text": "Aku berkata pelan, “aku dengar, tapi aku juga perlu dipercaya mengambil jalanku.”",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Fi": 2,
          "Fe": -0.5
        },
        "mbtiAxis": {
          "F": 1,
          "I": 0.5
        },
        "stackRole": {
          "dominant": 0.5,
          "opposing": 0.4
        },
        "evidence": {
          "boundarySetting": 1,
          "selfRespect": 1.2,
          "directEngagement": 0.4
        },
        "positive": {
          "keptSelfRespect": 1,
          "keptMeaning": 0.6,
          "clearWords": 0.6
        },
        "negative": {
          "selfErasure": -0.8,
          "hollowYes": -0.5,
          "muddyMessage": -0.5
        },
        "values": {
          "autonomy": 1.1,
          "truth": 0.5,
          "meaning": 0.4
        },
        "conflict": {
          "boundaryCutoff": 0.5
        },
        "communication": {
          "direct": 0.5,
          "gentle": 0.3
        },
        "reliability": 0.84
      }
    },
    "right": {
      "id": "rel_012_b",
      "text": "Aku mengangguk dulu, lalu memilih membuktikan lewat tindakan kecil daripada debat panjang.",
      "subtleMeaning": "hidden",
      "weights": {
        "cognitive": {
          "Te": 2,
          "Fi": -0.5
        },
        "mbtiAxis": {
          "T": 0.8,
          "J": 1
        },
        "stackRole": {
          "auxiliary": 0.6,
          "dominant": 0.5
        },
        "evidence": {
          "practicalRepair": 1,
          "systemFirst": 0.8,
          "peaceSeeking": 1,
          "orderSeeking": 0.8
        },
        "positive": {
          "clearNextStep": 1,
          "keptRoomGentle": 0.8,
          "keptGround": 1
        },
        "negative": {
          "looseProcess": -0.8,
          "unspokenResentment": -0.7,
          "chaoticDrift": -0.7
        },
        "work": {
          "planner": 0.8,
          "executor": 0.6
        },
        "disc": {
          "C": 0.4,
          "D": 0.4
        },
        "enneagram": {
          "9": 1.2
        },
        "coreFear": {
          "conflict": 0.7
        },
        "coreDesire": {
          "peace": 0.7
        },
        "conflict": {
          "quietWithdrawal": 0.7,
          "appeasement": 0.3
        },
        "stress": {
          "freeze": 0.5,
          "fawn": 0.3
        },
        "defense": {
          "withdrawal": 0.5
        },
        "bigFive": {
          "Conscientiousness": 0.6
        },
        "hexaco": {
          "Conscientiousness": 0.6
        },
        "values": {
          "security": 0.7
        },
        "environment": {
          "organizedSpace": 0.6,
          "familiarPlace": 0.4
        },
        "reliability": 0.84
      }
    },
    "reliability": 0.84,
    "targetSystems": [
      "relationship",
      "communication",
      "conflict",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "relationship",
      "communication",
      "conflict",
      "values",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "forced-choice-rewrite"
  }
];
