import type { QuestionItem } from "../types";

export const TIE_BREAK_QUESTIONS: QuestionItem[] = [
  {
    "id": "tie_001",
    "kind": "forcedChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Kau menerima kabar tidak jelas saat berdiri di antrean apotek. Nomor antrean berganti, tapi pikiranmu tertahan di satu kalimat.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "tie_001_a",
        "text": "Aku tidak langsung menjawab. Aku memperhatikan siapa yang mendadak berhenti bergerak saat kalimat itu muncul.",
        "subtleMeaning": "Ni response",
        "weights": {
          "cognitive": {
            "Ni": 2.0,
            "Se": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "I": 0.4
          },
          "stackRole": {
            "dominant": 0.8,
            "opposing": 0.3
          },
          "evidence": {
            "observeFirst": 1,
            "indirectEngagement": 0.7
          },
          "positive": {
            "patientReading": 1
          },
          "negative": {
            "impulsiveAction": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "tie_001_b",
        "text": "Aku menghentikan debat dengan menunjuk masalah yang terlihat jelas di depan semua orang.",
        "subtleMeaning": "Se response",
        "weights": {
          "cognitive": {
            "Se": 2.0,
            "Ni": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "E": 0.5,
            "P": 0.4
          },
          "stackRole": {
            "dominant": 0.7,
            "inferior": 0.4
          },
          "evidence": {
            "actionFirst": 1,
            "bodyAwareness": 0.7
          },
          "positive": {
            "presentRepair": 1
          },
          "negative": {
            "distantSpeculation": -0.7
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "tie_001_a",
      "text": "Aku tidak langsung menjawab. Aku memperhatikan siapa yang mendadak berhenti bergerak saat kalimat itu muncul.",
      "subtleMeaning": "Ni response",
      "weights": {
        "cognitive": {
          "Ni": 2.0,
          "Se": -0.7
        },
        "mbtiAxis": {
          "N": 1,
          "I": 0.4
        },
        "stackRole": {
          "dominant": 0.8,
          "opposing": 0.3
        },
        "evidence": {
          "observeFirst": 1,
          "indirectEngagement": 0.7
        },
        "positive": {
          "patientReading": 1
        },
        "negative": {
          "impulsiveAction": -0.7
        },
        "reliability": 0.82
      }
    },
    "right": {
      "id": "tie_001_b",
      "text": "Aku menghentikan debat dengan menunjuk masalah yang terlihat jelas di depan semua orang.",
      "subtleMeaning": "Se response",
      "weights": {
        "cognitive": {
          "Se": 2.0,
          "Ni": -0.7
        },
        "mbtiAxis": {
          "S": 1,
          "E": 0.5,
          "P": 0.4
        },
        "stackRole": {
          "dominant": 0.7,
          "inferior": 0.4
        },
        "evidence": {
          "actionFirst": 1,
          "bodyAwareness": 0.7
        },
        "positive": {
          "presentRepair": 1
        },
        "negative": {
          "distantSpeculation": -0.7
        },
        "reliability": 0.8
      }
    }
  },
  {
    "id": "tie_002",
    "kind": "singleChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Orang dekat berubah sikap. Di meja kafe, ia tetap tersenyum, tapi gelasnya tidak pernah ia sentuh.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "tie_002_a",
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
        "id": "tie_002_b",
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
        "id": "tie_002_c",
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
        "id": "tie_002_d",
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
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "tie_003",
    "kind": "ranking",
    "context": {
      "domain": "money",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Hidup terasa tidak stabil. Di meja ada dompet, kunci rumah, chat dari seseorang, dan daftar hal yang belum dibayar.",
    "instruction": "Urutkan dari yang paling perlu diselamatkan dulu.",
    "options": [
      {
        "id": "tie_003_a",
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
        "id": "tie_003_b",
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
      },
      {
        "id": "tie_003_c",
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
        "id": "tie_003_d",
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
        "id": "tie_003_e",
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
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "tie_004",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Semua orang setuju terlalu cepat pada rencana yang menurutmu belum kuat. Spidol masih terbuka di tanganmu.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "tie_004_a",
        "text": "Aku meminta satu definisi jelas sebelum ikut menyetujui keputusan itu.",
        "subtleMeaning": "Ti response",
        "weights": {
          "cognitive": {
            "Ti": 2.0,
            "Fe": -0.7
          },
          "mbtiAxis": {
            "T": 1,
            "I": 0.4,
            "P": 0.3
          },
          "stackRole": {
            "dominant": 0.8,
            "critical": 0.3
          },
          "evidence": {
            "internalChecking": 1,
            "preciseQuestion": 0.8
          },
          "positive": {
            "cleanReasoning": 1
          },
          "negative": {
            "rushedAgreement": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "tie_004_b",
        "text": "Aku menutup chat yang berputar-putar, lalu mengirim daftar tindakan yang harus selesai malam ini.",
        "subtleMeaning": "Te response",
        "weights": {
          "cognitive": {
            "Te": 2.0,
            "Fi": -0.6
          },
          "mbtiAxis": {
            "T": 1,
            "J": 1,
            "E": 0.3
          },
          "stackRole": {
            "dominant": 0.8,
            "auxiliary": 0.5
          },
          "evidence": {
            "practicalRepair": 1,
            "actionFirst": 0.8
          },
          "positive": {
            "clearExecution": 1
          },
          "negative": {
            "unboundedDiscussion": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "tie_004_c",
        "text": "Aku bertanya pada orang yang paling diam, “kau sebenarnya keberatan di bagian mana?”",
        "subtleMeaning": "Fe response",
        "weights": {
          "cognitive": {
            "Fe": 2.0,
            "Fi": -0.6
          },
          "mbtiAxis": {
            "F": 1,
            "E": 0.5,
            "J": 0.3
          },
          "stackRole": {
            "auxiliary": 0.8,
            "opposing": 0.2
          },
          "evidence": {
            "peopleFirst": 1,
            "repairAttempt": 0.8
          },
          "positive": {
            "socialRepair": 1
          },
          "negative": {
            "privateDefiance": -0.6
          },
          "reliability": 0.82
        }
      },
      {
        "id": "tie_004_d",
        "text": "Aku menghapus balasan yang terlalu manis, lalu menulis kalimat yang lebih jujur meski lebih pendek.",
        "subtleMeaning": "Fi response",
        "weights": {
          "cognitive": {
            "Fi": 2.0,
            "Fe": -0.7
          },
          "mbtiAxis": {
            "F": 1,
            "I": 0.4
          },
          "stackRole": {
            "dominant": 0.8,
            "critical": 0.3
          },
          "evidence": {
            "boundarySetting": 1,
            "selfRespect": 0.7
          },
          "positive": {
            "innerPermission": 1
          },
          "negative": {
            "socialSurrender": -0.7
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "tie_005",
    "kind": "multiChoice",
    "context": {
      "domain": "stress",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Malam setelah kesalahan besar, kau duduk di pinggir kasur dan mendengar notifikasi masuk lagi.",
    "instruction": "Pilih maksimal 2.",
    "options": [
      {
        "id": "tie_005_a",
        "text": "Aku duduk di tepi kasur dan mendadak tidak bisa memilih apa pun, bahkan membalas pesan sederhana.",
        "subtleMeaning": "collapse",
        "weights": {
          "stress": {
            "collapse": 2,
            "perform": -0.5
          },
          "defense": {
            "numb": 1,
            "selfBlame": 0.7
          },
          "coreFear": {
            "notEnough": 1
          },
          "evidence": {
            "shameResponse": 1,
            "withdrawal": 0.7
          },
          "positive": {
            "honestLimit": 1
          },
          "negative": {
            "vanishingUnderLoad": -0.7
          },
          "reliability": 0.76
        }
      },
      {
        "id": "tie_005_b",
        "text": "Aku mencari alasan yang masuk akal dulu, karena kalau tidak, dadaku akan mengambil alih.",
        "subtleMeaning": "intellectualize",
        "weights": {
          "stress": {
            "intellectualize": 2,
            "emotionalExpression": -0.5
          },
          "defense": {
            "intellectualization": 1,
            "rationalization": 0.7
          },
          "coreFear": {
            "beingOverwhelmed": 1
          },
          "evidence": {
            "internalChecking": 1,
            "analysisLoop": 0.8
          },
          "positive": {
            "clearDistance": 1
          },
          "negative": {
            "feelingDelay": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "tie_005_c",
        "text": "Aku menghitung uang, waktu, dan orang yang bisa dihubungi sebelum membiarkan takut masuk.",
        "subtleMeaning": "control",
        "weights": {
          "stress": {
            "control": 2,
            "collapse": -0.5
          },
          "defense": {
            "perfectionism": 0.8,
            "control": 1
          },
          "coreFear": {
            "losingControl": 1
          },
          "evidence": {
            "practicalRepair": 0.8,
            "orderSeeking": 1
          },
          "positive": {
            "stabilizingMove": 1
          },
          "negative": {
            "rigidGrip": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "tie_005_d",
        "text": "Aku mengambil tas dan memilih jarak dulu daripada meledak di depan orang.",
        "subtleMeaning": "flight",
        "weights": {
          "stress": {
            "flight": 2,
            "fight": -0.4
          },
          "defense": {
            "avoidance": 1
          },
          "coreFear": {
            "beingTrapped": 1
          },
          "evidence": {
            "riskAvoidance": 0.7,
            "withdrawal": 0.8
          },
          "positive": {
            "exitAwareness": 1
          },
          "negative": {
            "unfinishedRepair": -0.8
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "relationship",
      "stress",
      "values",
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
    "id": "tie_006",
    "kind": "singleChoice",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Satu kalimat jujur bisa merusak suasana, tapi diam akan membuat orang salah terus percaya.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "tie_006_a",
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
        "id": "tie_006_b",
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
        "id": "tie_006_c",
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
        "id": "tie_006_d",
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
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "relationship",
      "stress",
      "values",
      "instinct",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  }
];
