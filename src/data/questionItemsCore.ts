import type { QuestionItem } from "../types";

export const CORE_QUESTIONS: QuestionItem[] = [
  {
    "id": "core_001",
    "kind": "forcedChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Malam itu kau pulang ke rumah lama. Kipas di ruang tengah berputar pelan, gelas retak masih dipakai, dan seseorang berkata, “sudahlah, jangan bahas yang dulu.”",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_001_a",
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
        "id": "core_001_b",
        "text": "Aku berdiri lebih dulu, mengambil benda yang diperlukan, lalu bilang, “nanti kita bahas, sekarang ini dulu.”",
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
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "core_001_a",
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
      "id": "core_001_b",
      "text": "Aku berdiri lebih dulu, mengambil benda yang diperlukan, lalu bilang, “nanti kita bahas, sekarang ini dulu.”",
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
    "id": "core_002",
    "kind": "multiChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Chat grup proyek bergetar terus. File presentasi masih kosong, satu orang menulis, “yang penting kumpul dulu,” sementara dua nama lain hanya terlihat membaca.",
    "instruction": "Pilih maksimal 2 tindakan yang paling mungkin kau lakukan.",
    "options": [
      {
        "id": "core_002_a",
        "text": "Aku mengambil spidol, membagi tugas di papan, lalu bilang, “ini selesai satu-satu, jangan debat dulu.”",
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
        "id": "core_002_b",
        "text": "Aku menurunkan suaraku dan menggeser gelas ke tengah meja, supaya dua orang itu berhenti saling menikam lewat kalimat kecil.",
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
        "id": "core_002_c",
        "text": "Aku menunjuk bagian yang tidak cocok dan bertanya, “kalau itu benar, kenapa bagian ini berbeda?”",
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
        "id": "core_002_d",
        "text": "Aku menahan napas, lalu berkata pelan, “aku nggak bisa ikut kalau caranya seperti itu.”",
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
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "core_003",
    "kind": "firstReaction",
    "context": {
      "domain": "stress",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Di ruang rapat kecil, suara kursi terseret keras. Semua orang menoleh padamu setelah satu keputusan mendadak jatuh ke meja.",
    "instruction": "Pilih reaksi pertama yang paling mungkin muncul sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "core_003_a",
        "text": "Aku melihat jam, tas, dan pintu keluar, lalu langsung mengatur siapa bergerak ke mana.",
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
      },
      {
        "id": "core_003_b",
        "text": "Aku membuka catatan dan memisahkan mana fakta, mana dugaan, mana kalimat yang hanya membuat ruangan panas.",
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
        "id": "core_003_c",
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
        "id": "core_003_d",
        "text": "Aku menyimpan HP di meja, lalu menunggu satu kalimat lagi sebelum memutuskan harus bicara atau pergi.",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_004",
    "kind": "singleChoice",
    "context": {
      "domain": "romance",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Layar HP menyala pukul 23.41. Pesan dari orang itu hanya, “nggak apa-apa kok,” tapi tanda titiknya terasa lebih berat dari biasanya.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_004_a",
        "text": "Aku menatap pintu yang setengah terbuka, merasa ada bagian percakapan yang sengaja ditinggalkan di luar ruangan.",
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
        "id": "core_004_b",
        "text": "Aku mengubah cara bicara agar semua orang bisa tetap duduk tanpa merasa kalah.",
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
        "id": "core_004_c",
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
        "id": "core_004_d",
        "text": "Aku membuka dua kemungkinan jawaban di kepala, lalu bertanya, “kalau cara ini gagal, pilihan lainnya apa?”",
        "subtleMeaning": "Ne response",
        "weights": {
          "cognitive": {
            "Ne": 2.0,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryResponse": 0.7
          },
          "positive": {
            "adaptiveImagination": 1
          },
          "negative": {
            "rigidClosure": -0.7
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_005",
    "kind": "forcedChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Hujan turun saat motor berhenti di pinggir jalan. Tasmu basah, dompet tertinggal, dan orang di sebelahmu mulai panik kecil.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_005_a",
        "text": "Aku merasakan bahuku menegang, lalu memilih melakukan sesuatu yang bisa disentuh dan diselesaikan saat itu juga.",
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
      },
      {
        "id": "core_005_b",
        "text": "Aku mengingat kejadian serupa dulu, lalu mengecek bagian mana yang dulu membuat semuanya makin buruk.",
        "subtleMeaning": "Si response",
        "weights": {
          "cognitive": {
            "Si": 2.0,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "carefulContinuity": 1
          },
          "negative": {
            "noveltyRush": -0.7
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "core_005_a",
      "text": "Aku merasakan bahuku menegang, lalu memilih melakukan sesuatu yang bisa disentuh dan diselesaikan saat itu juga.",
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
    },
    "right": {
      "id": "core_005_b",
      "text": "Aku mengingat kejadian serupa dulu, lalu mengecek bagian mana yang dulu membuat semuanya makin buruk.",
      "subtleMeaning": "Si response",
      "weights": {
        "cognitive": {
          "Si": 2.0,
          "Ne": -0.7
        },
        "mbtiAxis": {
          "S": 1,
          "J": 0.6
        },
        "stackRole": {
          "dominant": 0.7,
          "tertiary": 0.4
        },
        "evidence": {
          "memoryReferencing": 1,
          "riskAvoidance": 0.5
        },
        "positive": {
          "carefulContinuity": 1
        },
        "negative": {
          "noveltyRush": -0.7
        },
        "reliability": 0.81
      }
    }
  },
  {
    "id": "core_006",
    "kind": "multiChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di kafe yang makin ramai, seorang teman membuat lelucon tentang hal yang pernah membuatmu sakit. Semua orang tertawa setengah hati.",
    "instruction": "Pilih maksimal 2 tindakan yang paling mungkin kau lakukan.",
    "options": [
      {
        "id": "core_006_a",
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
      },
      {
        "id": "core_006_b",
        "text": "Aku mengangkat tangan sedikit dan berkata, “tunggu, jangan jawab sambil marah.”",
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
        "id": "core_006_c",
        "text": "Aku menahan komentar pedas, lalu menanyakan bagian yang paling rapuh dari rencana mereka.",
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
        "id": "core_006_d",
        "text": "Aku membuat urutan kerja pendek dan memberi batas waktu untuk setiap orang.",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "core_007",
    "kind": "singleChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di meja makan, nama seseorang disebut hanya sebentar. Sendok ibu berhenti di udara, lalu ia pura-pura bertanya soal nasi.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_007_a",
        "text": "Aku pura-pura mengambil air, sambil mengingat siapa yang sejak tadi menghindari tatapan siapa.",
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
        "id": "core_007_b",
        "text": "Aku merapikan benda di meja satu per satu, karena kekacauan kecil itu membuat kepalaku sulit menerima keputusan baru.",
        "subtleMeaning": "Si response",
        "weights": {
          "cognitive": {
            "Si": 2.0,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "carefulContinuity": 1
          },
          "negative": {
            "noveltyRush": -0.7
          },
          "reliability": 0.81
        }
      },
      {
        "id": "core_007_c",
        "text": "Aku menurunkan suaraku dan menggeser gelas ke tengah meja, supaya dua orang itu berhenti saling menikam lewat kalimat kecil.",
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
        "id": "core_007_d",
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
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_008",
    "kind": "ranking",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Papan tulis penuh coretan. Tugas kelompok besok dikumpul, tapi bahan berserakan di lima chat berbeda.",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh darimu.",
    "options": [
      {
        "id": "core_008_a",
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
        "id": "core_008_b",
        "text": "Aku menunjuk bagian yang tidak cocok dan bertanya, “kalau itu benar, kenapa bagian ini berbeda?”",
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
        "id": "core_008_c",
        "text": "Aku membandingkan kalimatnya dengan apa yang pernah ia ucapkan minggu lalu.",
        "subtleMeaning": "Si response",
        "weights": {
          "cognitive": {
            "Si": 2.0,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "carefulContinuity": 1
          },
          "negative": {
            "noveltyRush": -0.7
          },
          "reliability": 0.81
        }
      },
      {
        "id": "core_008_d",
        "text": "Aku menulis beberapa jalan keluar di pinggir kertas, termasuk satu yang awalnya terdengar agak gila.",
        "subtleMeaning": "Ne response",
        "weights": {
          "cognitive": {
            "Ne": 2.0,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryResponse": 0.7
          },
          "positive": {
            "adaptiveImagination": 1
          },
          "negative": {
            "rigidClosure": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "core_008_e",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "core_009",
    "kind": "hiddenReaction",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Temanmu tiba-tiba mengajak pindah rencana malam itu juga. Lampu jalan baru menyala, dan tubuhmu bereaksi sebelum mulutmu sempat sopan.",
    "instruction": "Pilih reaksi yang mungkin tidak terlihat dari luar.",
    "options": [
      {
        "id": "core_009_a",
        "text": "Aku berdiri lebih dulu, mengambil benda yang diperlukan, lalu bilang, “nanti kita bahas, sekarang ini dulu.”",
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
      },
      {
        "id": "core_009_b",
        "text": "Aku menggeser kursi dan berkata, “kita bisa coba versi lain dulu sebelum semua orang menyerah.”",
        "subtleMeaning": "Ne response",
        "weights": {
          "cognitive": {
            "Ne": 2.0,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryResponse": 0.7
          },
          "positive": {
            "adaptiveImagination": 1
          },
          "negative": {
            "rigidClosure": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "core_009_c",
        "text": "Aku memilih tetap diam daripada ikut tertawa pada sesuatu yang terasa salah di dadaku.",
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
      },
      {
        "id": "core_009_d",
        "text": "Aku membuka catatan dan memisahkan mana fakta, mana dugaan, mana kalimat yang hanya membuat ruangan panas.",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_010",
    "kind": "singleChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Lemari lama dibuka. Ada foto yang posisinya terbalik, dan seseorang cepat-cepat menutup album sebelum kau bertanya.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_010_a",
        "text": "Aku memilih cara yang dulu pernah berhasil, lalu menyesuaikannya sedikit agar tidak mengulang luka lama.",
        "subtleMeaning": "Si response",
        "weights": {
          "cognitive": {
            "Si": 2.0,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "carefulContinuity": 1
          },
          "negative": {
            "noveltyRush": -0.7
          },
          "reliability": 0.81
        }
      },
      {
        "id": "core_010_b",
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
        "id": "core_010_c",
        "text": "Aku mengambil tasku dan berkata, “aku perlu keluar sebentar sebelum aku memaksa diri setuju.”",
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
      },
      {
        "id": "core_010_d",
        "text": "Aku mengubah cara bicara agar semua orang bisa tetap duduk tanpa merasa kalah.",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_011",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di depan loket yang antreannya memanjang, seseorang menyerahkan semua keputusan padamu karena “kau biasanya tahu harus apa.”",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_011_a",
        "text": "Aku memilih keputusan yang paling bisa dijalankan, meski tidak semua orang puas.",
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
        "id": "core_011_b",
        "text": "Aku melihat jam, tas, dan pintu keluar, lalu langsung mengatur siapa bergerak ke mana.",
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
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "core_011_a",
      "text": "Aku memilih keputusan yang paling bisa dijalankan, meski tidak semua orang puas.",
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
    "right": {
      "id": "core_011_b",
      "text": "Aku melihat jam, tas, dan pintu keluar, lalu langsung mengatur siapa bergerak ke mana.",
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
    "id": "core_012",
    "kind": "singleChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Saat nama satu orang disebut, candaan di meja tiba-tiba patah. Satu teman sibuk mengaduk es yang sudah habis.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_012_a",
        "text": "Aku menyimpan HP di meja, lalu menunggu satu kalimat lagi sebelum memutuskan harus bicara atau pergi.",
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
        "id": "core_012_b",
        "text": "Aku mencari celah kecil yang belum dicoba, meski orang lain sudah mulai menutup laptop.",
        "subtleMeaning": "Ne response",
        "weights": {
          "cognitive": {
            "Ne": 2.0,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryResponse": 0.7
          },
          "positive": {
            "adaptiveImagination": 1
          },
          "negative": {
            "rigidClosure": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "core_012_c",
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
        "id": "core_012_d",
        "text": "Aku mengangkat tangan sedikit dan berkata, “tunggu, jangan jawab sambil marah.”",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_013",
    "kind": "multiChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau sudah menjelaskan tugas itu dua kali. Orang di depanmu masih mengangguk tanpa benar-benar memegang bagiannya.",
    "instruction": "Pilih maksimal 2 tindakan yang paling mungkin kau lakukan.",
    "options": [
      {
        "id": "core_013_a",
        "text": "Aku menahan komentar pedas, lalu menanyakan bagian yang paling rapuh dari rencana mereka.",
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
        "id": "core_013_b",
        "text": "Aku mengambil spidol, membagi tugas di papan, lalu bilang, “ini selesai satu-satu, jangan debat dulu.”",
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
        "id": "core_013_c",
        "text": "Aku menurunkan suaraku dan menggeser gelas ke tengah meja, supaya dua orang itu berhenti saling menikam lewat kalimat kecil.",
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
        "id": "core_013_d",
        "text": "Aku menahan napas, lalu berkata pelan, “aku nggak bisa ikut kalau caranya seperti itu.”",
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
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "core_014",
    "kind": "singleChoice",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau masuk tempat baru sendirian. Bau cat, suara piring, dan jarak antar meja membuatmu langsung memilih cara bergerak.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_014_a",
        "text": "Aku merasakan bahuku menegang, lalu memilih melakukan sesuatu yang bisa disentuh dan diselesaikan saat itu juga.",
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
      },
      {
        "id": "core_014_b",
        "text": "Aku mengingat kejadian serupa dulu, lalu mengecek bagian mana yang dulu membuat semuanya makin buruk.",
        "subtleMeaning": "Si response",
        "weights": {
          "cognitive": {
            "Si": 2.0,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "carefulContinuity": 1
          },
          "negative": {
            "noveltyRush": -0.7
          },
          "reliability": 0.81
        }
      },
      {
        "id": "core_014_c",
        "text": "Aku membuka dua kemungkinan jawaban di kepala, lalu bertanya, “kalau cara ini gagal, pilihan lainnya apa?”",
        "subtleMeaning": "Ne response",
        "weights": {
          "cognitive": {
            "Ne": 2.0,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryResponse": 0.7
          },
          "positive": {
            "adaptiveImagination": 1
          },
          "negative": {
            "rigidClosure": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "core_014_d",
        "text": "Aku menatap pintu yang setengah terbuka, merasa ada bagian percakapan yang sengaja ditinggalkan di luar ruangan.",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_015",
    "kind": "forcedChoice",
    "context": {
      "domain": "moral",
      "pressureLevel": "high",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Ada cerita yang tidak cocok, tapi belum ada bukti. Semua orang sudah hampir percaya pada versi yang paling rapi.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_015_a",
        "text": "Aku pura-pura mengambil air, sambil mengingat siapa yang sejak tadi menghindari tatapan siapa.",
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
        "id": "core_015_b",
        "text": "Aku menunjuk bagian yang tidak cocok dan bertanya, “kalau itu benar, kenapa bagian ini berbeda?”",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "core_015_a",
      "text": "Aku pura-pura mengambil air, sambil mengingat siapa yang sejak tadi menghindari tatapan siapa.",
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
      "id": "core_015_b",
      "text": "Aku menunjuk bagian yang tidak cocok dan bertanya, “kalau itu benar, kenapa bagian ini berbeda?”",
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
    }
  },
  {
    "id": "core_016",
    "kind": "singleChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Seseorang menangis di kamar mandi kantor. Kau mendengar isaknya dari balik pintu, tapi tidak tahu apakah ia ingin ditemani.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_016_a",
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
        "id": "core_016_b",
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
      },
      {
        "id": "core_016_c",
        "text": "Aku merapikan benda di meja satu per satu, karena kekacauan kecil itu membuat kepalaku sulit menerima keputusan baru.",
        "subtleMeaning": "Si response",
        "weights": {
          "cognitive": {
            "Si": 2.0,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "carefulContinuity": 1
          },
          "negative": {
            "noveltyRush": -0.7
          },
          "reliability": 0.81
        }
      },
      {
        "id": "core_016_d",
        "text": "Aku menulis beberapa jalan keluar di pinggir kertas, termasuk satu yang awalnya terdengar agak gila.",
        "subtleMeaning": "Ne response",
        "weights": {
          "cognitive": {
            "Ne": 2.0,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryResponse": 0.7
          },
          "positive": {
            "adaptiveImagination": 1
          },
          "negative": {
            "rigidClosure": -0.7
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_017",
    "kind": "firstReaction",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Kompor menyala, air tumpah, dan kucing mengeong di dekat kaki. Di luar, seseorang mengetuk pintu berkali-kali.",
    "instruction": "Pilih reaksi pertama yang paling mungkin muncul sebelum kau sempat merapikan wajah.",
    "options": [
      {
        "id": "core_017_a",
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
      },
      {
        "id": "core_017_b",
        "text": "Aku membuat urutan kerja pendek dan memberi batas waktu untuk setiap orang.",
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
        "id": "core_017_c",
        "text": "Aku membandingkan kalimatnya dengan apa yang pernah ia ucapkan minggu lalu.",
        "subtleMeaning": "Si response",
        "weights": {
          "cognitive": {
            "Si": 2.0,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "carefulContinuity": 1
          },
          "negative": {
            "noveltyRush": -0.7
          },
          "reliability": 0.81
        }
      },
      {
        "id": "core_017_d",
        "text": "Aku membuka catatan dan memisahkan mana fakta, mana dugaan, mana kalimat yang hanya membuat ruangan panas.",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_018",
    "kind": "ranking",
    "context": {
      "domain": "identity",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di buku catatanmu ada tiga rencana hidup yang tidak bisa berjalan bersama. Satu terlihat aman, satu terasa hidup, satu membuatmu tidak bisa tidur.",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh darimu.",
    "options": [
      {
        "id": "core_018_a",
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
        "id": "core_018_b",
        "text": "Aku menggeser kursi dan berkata, “kita bisa coba versi lain dulu sebelum semua orang menyerah.”",
        "subtleMeaning": "Ne response",
        "weights": {
          "cognitive": {
            "Ne": 2.0,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryResponse": 0.7
          },
          "positive": {
            "adaptiveImagination": 1
          },
          "negative": {
            "rigidClosure": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "core_018_c",
        "text": "Aku memilih tetap diam daripada ikut tertawa pada sesuatu yang terasa salah di dadaku.",
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
      },
      {
        "id": "core_018_d",
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
        "id": "core_018_e",
        "text": "Aku memilih cara yang dulu pernah berhasil, lalu menyesuaikannya sedikit agar tidak mengulang luka lama.",
        "subtleMeaning": "Si response",
        "weights": {
          "cognitive": {
            "Si": 2.0,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "carefulContinuity": 1
          },
          "negative": {
            "noveltyRush": -0.7
          },
          "reliability": 0.81
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "core_019",
    "kind": "singleChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Temanmu bertanya, “jujur aja, aku salah nggak?” Matanya menunggu jawaban, tapi tangannya sudah mengepal di bawah meja.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_019_a",
        "text": "Aku mengambil tasku dan berkata, “aku perlu keluar sebentar sebelum aku memaksa diri setuju.”",
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
      },
      {
        "id": "core_019_b",
        "text": "Aku mengubah cara bicara agar semua orang bisa tetap duduk tanpa merasa kalah.",
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
        "id": "core_019_c",
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
        "id": "core_019_d",
        "text": "Aku memilih keputusan yang paling bisa dijalankan, meski tidak semua orang puas.",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_020",
    "kind": "hiddenReaction",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "high"
    },
    "prompt": "Rutinitas pagimu berubah karena satu pesan mendadak. Cangkir yang biasa kau pakai masih kosong di meja.",
    "instruction": "Pilih reaksi yang mungkin tidak terlihat dari luar.",
    "options": [
      {
        "id": "core_020_a",
        "text": "Aku mengingat kejadian serupa dulu, lalu mengecek bagian mana yang dulu membuat semuanya makin buruk.",
        "subtleMeaning": "Si response",
        "weights": {
          "cognitive": {
            "Si": 2.0,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "carefulContinuity": 1
          },
          "negative": {
            "noveltyRush": -0.7
          },
          "reliability": 0.81
        }
      },
      {
        "id": "core_020_b",
        "text": "Aku berdiri lebih dulu, mengambil benda yang diperlukan, lalu bilang, “nanti kita bahas, sekarang ini dulu.”",
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
      },
      {
        "id": "core_020_c",
        "text": "Aku menyimpan HP di meja, lalu menunggu satu kalimat lagi sebelum memutuskan harus bicara atau pergi.",
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
        "id": "core_020_d",
        "text": "Aku mencari celah kecil yang belum dicoba, meski orang lain sudah mulai menutup laptop.",
        "subtleMeaning": "Ne response",
        "weights": {
          "cognitive": {
            "Ne": 2.0,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryResponse": 0.7
          },
          "positive": {
            "adaptiveImagination": 1
          },
          "negative": {
            "rigidClosure": -0.7
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_021",
    "kind": "singleChoice",
    "context": {
      "domain": "family",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Dua orang bertengkar di ruang tamu. Remote TV terjatuh, dan anak kecil di sudut sofa mulai memeluk bantal.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_021_a",
        "text": "Aku mengangkat tangan sedikit dan berkata, “tunggu, jangan jawab sambil marah.”",
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
        "id": "core_021_b",
        "text": "Aku menahan komentar pedas, lalu menanyakan bagian yang paling rapuh dari rencana mereka.",
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
        "id": "core_021_c",
        "text": "Aku menahan napas, lalu berkata pelan, “aku nggak bisa ikut kalau caranya seperti itu.”",
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
      },
      {
        "id": "core_021_d",
        "text": "Aku mengambil spidol, membagi tugas di papan, lalu bilang, “ini selesai satu-satu, jangan debat dulu.”",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "core_022",
    "kind": "forcedChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Sebelum rapat dimulai, kau melihat satu angka di laporan berbeda dari versi kemarin. Semua orang sudah siap menekan tombol kirim.",
    "instruction": "Pilih yang paling dekat denganmu.",
    "options": [
      {
        "id": "core_022_a",
        "text": "Aku melihat jam, tas, dan pintu keluar, lalu langsung mengatur siapa bergerak ke mana.",
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
      },
      {
        "id": "core_022_b",
        "text": "Aku menatap pintu yang setengah terbuka, merasa ada bagian percakapan yang sengaja ditinggalkan di luar ruangan.",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "core_022_a",
      "text": "Aku melihat jam, tas, dan pintu keluar, lalu langsung mengatur siapa bergerak ke mana.",
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
    },
    "right": {
      "id": "core_022_b",
      "text": "Aku menatap pintu yang setengah terbuka, merasa ada bagian percakapan yang sengaja ditinggalkan di luar ruangan.",
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
    }
  },
  {
    "id": "core_023",
    "kind": "multiChoice",
    "context": {
      "domain": "friendship",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Di grup chat, tiga orang mengetik lalu menghapus. Satu stiker muncul, lalu tidak ada yang bicara lagi.",
    "instruction": "Pilih maksimal 2 tindakan yang paling mungkin kau lakukan.",
    "options": [
      {
        "id": "core_023_a",
        "text": "Aku menurunkan suaraku dan menggeser gelas ke tengah meja, supaya dua orang itu berhenti saling menikam lewat kalimat kecil.",
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
        "id": "core_023_b",
        "text": "Aku pura-pura mengambil air, sambil mengingat siapa yang sejak tadi menghindari tatapan siapa.",
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
        "id": "core_023_c",
        "text": "Aku membuka dua kemungkinan jawaban di kepala, lalu bertanya, “kalau cara ini gagal, pilihan lainnya apa?”",
        "subtleMeaning": "Ne response",
        "weights": {
          "cognitive": {
            "Ne": 2.0,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryResponse": 0.7
          },
          "positive": {
            "adaptiveImagination": 1
          },
          "negative": {
            "rigidClosure": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "core_023_d",
        "text": "Aku menunjuk bagian yang tidak cocok dan bertanya, “kalau itu benar, kenapa bagian ini berbeda?”",
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
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "core_024",
    "kind": "ranking",
    "context": {
      "domain": "daily",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Hari baru mulai, tapi meja penuh struk, pakaian di kursi, pesan belum dibalas, dan satu janji hampir terlupa.",
    "instruction": "Urutkan dari yang paling dekat sampai paling jauh darimu.",
    "options": [
      {
        "id": "core_024_a",
        "text": "Aku membuat urutan kerja pendek dan memberi batas waktu untuk setiap orang.",
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
        "id": "core_024_b",
        "text": "Aku merapikan benda di meja satu per satu, karena kekacauan kecil itu membuat kepalaku sulit menerima keputusan baru.",
        "subtleMeaning": "Si response",
        "weights": {
          "cognitive": {
            "Si": 2.0,
            "Ne": -0.7
          },
          "mbtiAxis": {
            "S": 1,
            "J": 0.6
          },
          "stackRole": {
            "dominant": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "memoryReferencing": 1,
            "riskAvoidance": 0.5
          },
          "positive": {
            "carefulContinuity": 1
          },
          "negative": {
            "noveltyRush": -0.7
          },
          "reliability": 0.81
        }
      },
      {
        "id": "core_024_c",
        "text": "Aku membuka catatan dan memisahkan mana fakta, mana dugaan, mana kalimat yang hanya membuat ruangan panas.",
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
        "id": "core_024_d",
        "text": "Aku menulis beberapa jalan keluar di pinggir kertas, termasuk satu yang awalnya terdengar agak gila.",
        "subtleMeaning": "Ne response",
        "weights": {
          "cognitive": {
            "Ne": 2.0,
            "Si": -0.7
          },
          "mbtiAxis": {
            "N": 1,
            "P": 0.7
          },
          "stackRole": {
            "auxiliary": 0.7,
            "tertiary": 0.4
          },
          "evidence": {
            "possibilitySeeking": 1,
            "exploratoryResponse": 0.7
          },
          "positive": {
            "adaptiveImagination": 1
          },
          "negative": {
            "rigidClosure": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "core_024_e",
        "text": "Aku merasakan bahuku menegang, lalu memilih melakukan sesuatu yang bisa disentuh dan diselesaikan saat itu juga.",
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
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "cognitive",
      "mbtiAxis",
      "stackRole",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  }
];
