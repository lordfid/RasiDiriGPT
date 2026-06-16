import type { QuestionItem } from "../types";

export const WORK_QUESTIONS: QuestionItem[] = [
  {
    "id": "work_001",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Deadline dekat. Di meja ada laptop panas, catatan setengah jadi, dan instruksi dari atasan/dosen yang berubah tiga kali.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "work_001_a",
        "text": "Aku membuat urutan tiga langkah dan menaruh nama orang di samping tiap tugas.",
        "subtleMeaning": "planner",
        "weights": {
          "work": {
            "planner": 2,
            "improviser": -0.5
          },
          "learning": {
            "structured": 1
          },
          "riasec": {
            "Conventional": 1
          },
          "disc": {
            "C": 0.8
          },
          "bigFive": {
            "Conscientiousness": 1
          },
          "hexaco": {
            "Conscientiousness": 1
          },
          "attitudinalPsyche": {
            "V_confident": 0.6
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "clearPlan": 1
          },
          "negative": {
            "chaoticStart": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_001_b",
        "text": "Aku memilih bagian yang bisa dikerjakan sekarang dan mulai sebelum chat makin ramai.",
        "subtleMeaning": "executor",
        "weights": {
          "work": {
            "executor": 2,
            "researcher": -0.3
          },
          "learning": {
            "experiential": 0.8
          },
          "riasec": {
            "Realistic": 1
          },
          "disc": {
            "D": 0.8
          },
          "bigFive": {
            "Conscientiousness": 0.7
          },
          "evidence": {
            "actionFirst": 1
          },
          "positive": {
            "getsMoving": 1
          },
          "negative": {
            "endlessPreparation": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_001_c",
        "text": "Aku mencari sumber asli dan mengecek bagian yang paling sering dianggap benar padahal belum jelas.",
        "subtleMeaning": "researcher",
        "weights": {
          "work": {
            "researcher": 2,
            "executor": -0.3
          },
          "learning": {
            "analytical": 1,
            "solitary": 0.4
          },
          "riasec": {
            "Investigative": 1
          },
          "disc": {
            "C": 0.7
          },
          "bigFive": {
            "Openness": 0.7
          },
          "hexaco": {
            "Openness": 0.8
          },
          "attitudinalPsyche": {
            "L_confident": 0.8
          },
          "evidence": {
            "internalChecking": 1
          },
          "positive": {
            "deepCheck": 1
          },
          "negative": {
            "prematureAction": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_001_d",
        "text": "Aku berkata, “oke, aku ambil depan dulu, kalian pilih bagian yang sanggup selesai.”",
        "subtleMeaning": "leader",
        "weights": {
          "work": {
            "leader": 2,
            "stabilizer": -0.2
          },
          "learning": {
            "verbal": 0.6
          },
          "riasec": {
            "Enterprising": 1
          },
          "disc": {
            "D": 1
          },
          "bigFive": {
            "Extraversion": 0.7
          },
          "evidence": {
            "visibleRole": 1
          },
          "positive": {
            "takesCharge": 1
          },
          "negative": {
            "silentWaiting": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "work_002",
    "kind": "multiChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Kerja kelompok kacau. Satu orang tidak bekerja, tapi di chat ia menulis, “namaku masukin ya.”",
    "instruction": "Pilih maksimal 2 tindakan yang paling mungkin kau lakukan.",
    "options": [
      {
        "id": "work_002_a",
        "text": "Aku bertanya, “kalau bagian ini gagal, siapa yang menanggung akibatnya?”",
        "subtleMeaning": "challenger",
        "weights": {
          "work": {
            "challenger": 2,
            "helper": -0.3
          },
          "learning": {
            "experiential": 0.5
          },
          "riasec": {
            "Enterprising": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "D": 0.9
          },
          "bigFive": {
            "Extraversion": 0.4
          },
          "evidence": {
            "confrontation": 0.8
          },
          "positive": {
            "questionsWeakPlan": 1
          },
          "negative": {
            "tooEasyAgreement": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_002_b",
        "text": "Aku bertanya siapa yang paling tertinggal, lalu duduk di sampingnya sebentar.",
        "subtleMeaning": "helper",
        "weights": {
          "work": {
            "helper": 2,
            "challenger": -0.4
          },
          "learning": {
            "social": 0.7
          },
          "riasec": {
            "Social": 1
          },
          "disc": {
            "S": 0.8
          },
          "bigFive": {
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Agreeableness": 0.7
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "teamCare": 1
          },
          "negative": {
            "soloPush": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_002_c",
        "text": "Aku menunjuk arah kerja dan membuat semua orang berhenti saling tunggu.",
        "subtleMeaning": "leader",
        "weights": {
          "work": {
            "leader": 2,
            "stabilizer": -0.2
          },
          "learning": {
            "verbal": 0.6
          },
          "riasec": {
            "Enterprising": 1
          },
          "disc": {
            "D": 1
          },
          "bigFive": {
            "Extraversion": 0.7
          },
          "evidence": {
            "visibleRole": 1
          },
          "positive": {
            "takesCharge": 1
          },
          "negative": {
            "silentWaiting": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_002_d",
        "text": "Aku mengecek ulang detail terakhir, termasuk tanda baca dan angka kecil yang mudah mempermalukan kami.",
        "subtleMeaning": "refiner",
        "weights": {
          "work": {
            "refiner": 2,
            "improviser": -0.4
          },
          "learning": {
            "repetitionBased": 0.8
          },
          "riasec": {
            "Conventional": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "C": 1
          },
          "bigFive": {
            "Conscientiousness": 0.9
          },
          "evidence": {
            "orderSeeking": 0.8,
            "practicalRepair": 0.5
          },
          "positive": {
            "qualityControl": 1
          },
          "negative": {
            "roughFinish": -0.8
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "work_003",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau harus belajar skill baru dalam waktu sempit. Video tutorial terbuka, notifikasi masuk, dan kepalamu mulai penuh.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "work_003_a",
        "text": "Aku menahan diri untuk tidak menjawab sampai menemukan bagian yang benar-benar bisa diuji.",
        "subtleMeaning": "researcher",
        "weights": {
          "work": {
            "researcher": 2,
            "executor": -0.3
          },
          "learning": {
            "analytical": 1,
            "solitary": 0.4
          },
          "riasec": {
            "Investigative": 1
          },
          "disc": {
            "C": 0.7
          },
          "bigFive": {
            "Openness": 0.7
          },
          "hexaco": {
            "Openness": 0.8
          },
          "attitudinalPsyche": {
            "L_confident": 0.8
          },
          "evidence": {
            "internalChecking": 1
          },
          "positive": {
            "deepCheck": 1
          },
          "negative": {
            "prematureAction": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_003_b",
        "text": "Aku berdiri, mengambil alat yang dibutuhkan, dan mengajak satu orang bergerak dulu.",
        "subtleMeaning": "executor",
        "weights": {
          "work": {
            "executor": 2,
            "researcher": -0.3
          },
          "learning": {
            "experiential": 0.8
          },
          "riasec": {
            "Realistic": 1
          },
          "disc": {
            "D": 0.8
          },
          "bigFive": {
            "Conscientiousness": 0.7
          },
          "evidence": {
            "actionFirst": 1
          },
          "positive": {
            "getsMoving": 1
          },
          "negative": {
            "endlessPreparation": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_003_c",
        "text": "Aku membuka kalender, menghitung waktu mundur, lalu memotong bagian yang tidak mungkin selesai.",
        "subtleMeaning": "planner",
        "weights": {
          "work": {
            "planner": 2,
            "improviser": -0.5
          },
          "learning": {
            "structured": 1
          },
          "riasec": {
            "Conventional": 1
          },
          "disc": {
            "C": 0.8
          },
          "bigFive": {
            "Conscientiousness": 1
          },
          "hexaco": {
            "Conscientiousness": 1
          },
          "attitudinalPsyche": {
            "V_confident": 0.6
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "clearPlan": 1
          },
          "negative": {
            "chaoticStart": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_003_d",
        "text": "Aku menggambar versi kasar di kertas, meski belum rapi, supaya semua orang punya sesuatu untuk dibayangkan.",
        "subtleMeaning": "creator",
        "weights": {
          "work": {
            "creator": 2,
            "refiner": -0.3
          },
          "learning": {
            "exploratory": 1,
            "visual": 0.5
          },
          "riasec": {
            "Artistic": 1
          },
          "disc": {
            "I": 0.7
          },
          "bigFive": {
            "Openness": 1
          },
          "hexaco": {
            "Openness": 0.8
          },
          "evidence": {
            "noveltySeeking": 1
          },
          "positive": {
            "freshAngle": 1
          },
          "negative": {
            "overStandardized": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "work_004",
    "kind": "ranking",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Sebuah proyek baru dilempar ke meja. Tidak ada arahan jelas, hanya satu kalimat: “pokoknya harus menarik.”",
    "instruction": "Urutkan dari peran yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "work_004_a",
        "text": "Aku menawarkan sudut yang berbeda ketika semua orang hanya mengulang contoh lama.",
        "subtleMeaning": "creator",
        "weights": {
          "work": {
            "creator": 2,
            "refiner": -0.3
          },
          "learning": {
            "exploratory": 1,
            "visual": 0.5
          },
          "riasec": {
            "Artistic": 1
          },
          "disc": {
            "I": 0.7
          },
          "bigFive": {
            "Openness": 1
          },
          "hexaco": {
            "Openness": 0.8
          },
          "evidence": {
            "noveltySeeking": 1
          },
          "positive": {
            "freshAngle": 1
          },
          "negative": {
            "overStandardized": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "work_004_b",
        "text": "Aku membuat urutan tiga langkah dan menaruh nama orang di samping tiap tugas.",
        "subtleMeaning": "planner",
        "weights": {
          "work": {
            "planner": 2,
            "improviser": -0.5
          },
          "learning": {
            "structured": 1
          },
          "riasec": {
            "Conventional": 1
          },
          "disc": {
            "C": 0.8
          },
          "bigFive": {
            "Conscientiousness": 1
          },
          "hexaco": {
            "Conscientiousness": 1
          },
          "attitudinalPsyche": {
            "V_confident": 0.6
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "clearPlan": 1
          },
          "negative": {
            "chaoticStart": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_004_c",
        "text": "Aku mencari sumber asli dan mengecek bagian yang paling sering dianggap benar padahal belum jelas.",
        "subtleMeaning": "researcher",
        "weights": {
          "work": {
            "researcher": 2,
            "executor": -0.3
          },
          "learning": {
            "analytical": 1,
            "solitary": 0.4
          },
          "riasec": {
            "Investigative": 1
          },
          "disc": {
            "C": 0.7
          },
          "bigFive": {
            "Openness": 0.7
          },
          "hexaco": {
            "Openness": 0.8
          },
          "attitudinalPsyche": {
            "L_confident": 0.8
          },
          "evidence": {
            "internalChecking": 1
          },
          "positive": {
            "deepCheck": 1
          },
          "negative": {
            "prematureAction": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_004_d",
        "text": "Aku berkata, “oke, aku ambil depan dulu, kalian pilih bagian yang sanggup selesai.”",
        "subtleMeaning": "leader",
        "weights": {
          "work": {
            "leader": 2,
            "stabilizer": -0.2
          },
          "learning": {
            "verbal": 0.6
          },
          "riasec": {
            "Enterprising": 1
          },
          "disc": {
            "D": 1
          },
          "bigFive": {
            "Extraversion": 0.7
          },
          "evidence": {
            "visibleRole": 1
          },
          "positive": {
            "takesCharge": 1
          },
          "negative": {
            "silentWaiting": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_004_e",
        "text": "Aku memilih bagian yang bisa dikerjakan sekarang dan mulai sebelum chat makin ramai.",
        "subtleMeaning": "executor",
        "weights": {
          "work": {
            "executor": 2,
            "researcher": -0.3
          },
          "learning": {
            "experiential": 0.8
          },
          "riasec": {
            "Realistic": 1
          },
          "disc": {
            "D": 0.8
          },
          "bigFive": {
            "Conscientiousness": 0.7
          },
          "evidence": {
            "actionFirst": 1
          },
          "positive": {
            "getsMoving": 1
          },
          "negative": {
            "endlessPreparation": -0.7
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "work_005",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Atasan/dosen mengkritik hasilmu di depan orang lain. File masih terbuka, dan kursor berkedip seperti menunggu kau membela diri.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "work_005_a",
        "text": "Aku merapikan hasil orang lain agar terlihat satu suara, bukan tempelan panik.",
        "subtleMeaning": "refiner",
        "weights": {
          "work": {
            "refiner": 2,
            "improviser": -0.4
          },
          "learning": {
            "repetitionBased": 0.8
          },
          "riasec": {
            "Conventional": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "C": 1
          },
          "bigFive": {
            "Conscientiousness": 0.9
          },
          "evidence": {
            "orderSeeking": 0.8,
            "practicalRepair": 0.5
          },
          "positive": {
            "qualityControl": 1
          },
          "negative": {
            "roughFinish": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_005_b",
        "text": "Aku menolak setuju cepat hanya karena semua orang ingin selesai.",
        "subtleMeaning": "challenger",
        "weights": {
          "work": {
            "challenger": 2,
            "helper": -0.3
          },
          "learning": {
            "experiential": 0.5
          },
          "riasec": {
            "Enterprising": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "D": 0.9
          },
          "bigFive": {
            "Extraversion": 0.4
          },
          "evidence": {
            "confrontation": 0.8
          },
          "positive": {
            "questionsWeakPlan": 1
          },
          "negative": {
            "tooEasyAgreement": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_005_c",
        "text": "Aku membagi pekerjaan sambil memastikan orang yang diam tidak tenggelam.",
        "subtleMeaning": "helper",
        "weights": {
          "work": {
            "helper": 2,
            "challenger": -0.4
          },
          "learning": {
            "social": 0.7
          },
          "riasec": {
            "Social": 1
          },
          "disc": {
            "S": 0.8
          },
          "bigFive": {
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Agreeableness": 0.7
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "teamCare": 1
          },
          "negative": {
            "soloPush": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_005_d",
        "text": "Aku menahan diri untuk tidak menjawab sampai menemukan bagian yang benar-benar bisa diuji.",
        "subtleMeaning": "researcher",
        "weights": {
          "work": {
            "researcher": 2,
            "executor": -0.3
          },
          "learning": {
            "analytical": 1,
            "solitary": 0.4
          },
          "riasec": {
            "Investigative": 1
          },
          "disc": {
            "C": 0.7
          },
          "bigFive": {
            "Openness": 0.7
          },
          "hexaco": {
            "Openness": 0.8
          },
          "attitudinalPsyche": {
            "L_confident": 0.8
          },
          "evidence": {
            "internalChecking": 1
          },
          "positive": {
            "deepCheck": 1
          },
          "negative": {
            "prematureAction": -0.7
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "work_006",
    "kind": "forcedChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Dalam presentasi, proyektor mati. Semua orang menoleh. Waktu tinggal lima menit.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "work_006_a",
        "text": "Aku menunjuk arah kerja dan membuat semua orang berhenti saling tunggu.",
        "subtleMeaning": "leader",
        "weights": {
          "work": {
            "leader": 2,
            "stabilizer": -0.2
          },
          "learning": {
            "verbal": 0.6
          },
          "riasec": {
            "Enterprising": 1
          },
          "disc": {
            "D": 1
          },
          "bigFive": {
            "Extraversion": 0.7
          },
          "evidence": {
            "visibleRole": 1
          },
          "positive": {
            "takesCharge": 1
          },
          "negative": {
            "silentWaiting": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_006_b",
        "text": "Aku berdiri, mengambil alat yang dibutuhkan, dan mengajak satu orang bergerak dulu.",
        "subtleMeaning": "executor",
        "weights": {
          "work": {
            "executor": 2,
            "researcher": -0.3
          },
          "learning": {
            "experiential": 0.8
          },
          "riasec": {
            "Realistic": 1
          },
          "disc": {
            "D": 0.8
          },
          "bigFive": {
            "Conscientiousness": 0.7
          },
          "evidence": {
            "actionFirst": 1
          },
          "positive": {
            "getsMoving": 1
          },
          "negative": {
            "endlessPreparation": -0.7
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "work_006_a",
      "text": "Aku menunjuk arah kerja dan membuat semua orang berhenti saling tunggu.",
      "subtleMeaning": "leader",
      "weights": {
        "work": {
          "leader": 2,
          "stabilizer": -0.2
        },
        "learning": {
          "verbal": 0.6
        },
        "riasec": {
          "Enterprising": 1
        },
        "disc": {
          "D": 1
        },
        "bigFive": {
          "Extraversion": 0.7
        },
        "evidence": {
          "visibleRole": 1
        },
        "positive": {
          "takesCharge": 1
        },
        "negative": {
          "silentWaiting": -0.8
        },
        "reliability": 0.8
      }
    },
    "right": {
      "id": "work_006_b",
      "text": "Aku berdiri, mengambil alat yang dibutuhkan, dan mengajak satu orang bergerak dulu.",
      "subtleMeaning": "executor",
      "weights": {
        "work": {
          "executor": 2,
          "researcher": -0.3
        },
        "learning": {
          "experiential": 0.8
        },
        "riasec": {
          "Realistic": 1
        },
        "disc": {
          "D": 0.8
        },
        "bigFive": {
          "Conscientiousness": 0.7
        },
        "evidence": {
          "actionFirst": 1
        },
        "positive": {
          "getsMoving": 1
        },
        "negative": {
          "endlessPreparation": -0.7
        },
        "reliability": 0.8
      }
    }
  },
  {
    "id": "work_007",
    "kind": "multiChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Tugasmu menumpuk karena orang lain sering “nanti ya.” Hari ini, mereka meminta bantuan lagi.",
    "instruction": "Pilih maksimal 2 tindakan yang paling mungkin kau lakukan.",
    "options": [
      {
        "id": "work_007_a",
        "text": "Aku membuka kalender, menghitung waktu mundur, lalu memotong bagian yang tidak mungkin selesai.",
        "subtleMeaning": "planner",
        "weights": {
          "work": {
            "planner": 2,
            "improviser": -0.5
          },
          "learning": {
            "structured": 1
          },
          "riasec": {
            "Conventional": 1
          },
          "disc": {
            "C": 0.8
          },
          "bigFive": {
            "Conscientiousness": 1
          },
          "hexaco": {
            "Conscientiousness": 1
          },
          "attitudinalPsyche": {
            "V_confident": 0.6
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "clearPlan": 1
          },
          "negative": {
            "chaoticStart": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_007_b",
        "text": "Aku bertanya, “kalau bagian ini gagal, siapa yang menanggung akibatnya?”",
        "subtleMeaning": "challenger",
        "weights": {
          "work": {
            "challenger": 2,
            "helper": -0.3
          },
          "learning": {
            "experiential": 0.5
          },
          "riasec": {
            "Enterprising": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "D": 0.9
          },
          "bigFive": {
            "Extraversion": 0.4
          },
          "evidence": {
            "confrontation": 0.8
          },
          "positive": {
            "questionsWeakPlan": 1
          },
          "negative": {
            "tooEasyAgreement": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_007_c",
        "text": "Aku bertanya siapa yang paling tertinggal, lalu duduk di sampingnya sebentar.",
        "subtleMeaning": "helper",
        "weights": {
          "work": {
            "helper": 2,
            "challenger": -0.4
          },
          "learning": {
            "social": 0.7
          },
          "riasec": {
            "Social": 1
          },
          "disc": {
            "S": 0.8
          },
          "bigFive": {
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Agreeableness": 0.7
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "teamCare": 1
          },
          "negative": {
            "soloPush": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_007_d",
        "text": "Aku mengecek ulang detail terakhir, termasuk tanda baca dan angka kecil yang mudah mempermalukan kami.",
        "subtleMeaning": "refiner",
        "weights": {
          "work": {
            "refiner": 2,
            "improviser": -0.4
          },
          "learning": {
            "repetitionBased": 0.8
          },
          "riasec": {
            "Conventional": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "C": 1
          },
          "bigFive": {
            "Conscientiousness": 0.9
          },
          "evidence": {
            "orderSeeking": 0.8,
            "practicalRepair": 0.5
          },
          "positive": {
            "qualityControl": 1
          },
          "negative": {
            "roughFinish": -0.8
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "work_008",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau melihat cara lama membuat pekerjaan terus lambat. Di papan, alurnya tampak seperti benang kusut.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "work_008_a",
        "text": "Aku menggambar versi kasar di kertas, meski belum rapi, supaya semua orang punya sesuatu untuk dibayangkan.",
        "subtleMeaning": "creator",
        "weights": {
          "work": {
            "creator": 2,
            "refiner": -0.3
          },
          "learning": {
            "exploratory": 1,
            "visual": 0.5
          },
          "riasec": {
            "Artistic": 1
          },
          "disc": {
            "I": 0.7
          },
          "bigFive": {
            "Openness": 1
          },
          "hexaco": {
            "Openness": 0.8
          },
          "evidence": {
            "noveltySeeking": 1
          },
          "positive": {
            "freshAngle": 1
          },
          "negative": {
            "overStandardized": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "work_008_b",
        "text": "Aku membuat urutan tiga langkah dan menaruh nama orang di samping tiap tugas.",
        "subtleMeaning": "planner",
        "weights": {
          "work": {
            "planner": 2,
            "improviser": -0.5
          },
          "learning": {
            "structured": 1
          },
          "riasec": {
            "Conventional": 1
          },
          "disc": {
            "C": 0.8
          },
          "bigFive": {
            "Conscientiousness": 1
          },
          "hexaco": {
            "Conscientiousness": 1
          },
          "attitudinalPsyche": {
            "V_confident": 0.6
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "clearPlan": 1
          },
          "negative": {
            "chaoticStart": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_008_c",
        "text": "Aku menolak setuju cepat hanya karena semua orang ingin selesai.",
        "subtleMeaning": "challenger",
        "weights": {
          "work": {
            "challenger": 2,
            "helper": -0.3
          },
          "learning": {
            "experiential": 0.5
          },
          "riasec": {
            "Enterprising": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "D": 0.9
          },
          "bigFive": {
            "Extraversion": 0.4
          },
          "evidence": {
            "confrontation": 0.8
          },
          "positive": {
            "questionsWeakPlan": 1
          },
          "negative": {
            "tooEasyAgreement": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_008_d",
        "text": "Aku mencari sumber asli dan mengecek bagian yang paling sering dianggap benar padahal belum jelas.",
        "subtleMeaning": "researcher",
        "weights": {
          "work": {
            "researcher": 2,
            "executor": -0.3
          },
          "learning": {
            "analytical": 1,
            "solitary": 0.4
          },
          "riasec": {
            "Investigative": 1
          },
          "disc": {
            "C": 0.7
          },
          "bigFive": {
            "Openness": 0.7
          },
          "hexaco": {
            "Openness": 0.8
          },
          "attitudinalPsyche": {
            "L_confident": 0.8
          },
          "evidence": {
            "internalChecking": 1
          },
          "positive": {
            "deepCheck": 1
          },
          "negative": {
            "prematureAction": -0.7
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "work_009",
    "kind": "singleChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Materi ujian terlalu banyak. Buku terbuka, stabilo hilang, dan jam sudah menunjukkan hampir tengah malam.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "work_009_a",
        "text": "Aku membuka kalender, menghitung waktu mundur, lalu memotong bagian yang tidak mungkin selesai.",
        "subtleMeaning": "planner",
        "weights": {
          "work": {
            "planner": 2,
            "improviser": -0.5
          },
          "learning": {
            "structured": 1
          },
          "riasec": {
            "Conventional": 1
          },
          "disc": {
            "C": 0.8
          },
          "bigFive": {
            "Conscientiousness": 1
          },
          "hexaco": {
            "Conscientiousness": 1
          },
          "attitudinalPsyche": {
            "V_confident": 0.6
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "clearPlan": 1
          },
          "negative": {
            "chaoticStart": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_009_b",
        "text": "Aku menahan diri untuk tidak menjawab sampai menemukan bagian yang benar-benar bisa diuji.",
        "subtleMeaning": "researcher",
        "weights": {
          "work": {
            "researcher": 2,
            "executor": -0.3
          },
          "learning": {
            "analytical": 1,
            "solitary": 0.4
          },
          "riasec": {
            "Investigative": 1
          },
          "disc": {
            "C": 0.7
          },
          "bigFive": {
            "Openness": 0.7
          },
          "hexaco": {
            "Openness": 0.8
          },
          "attitudinalPsyche": {
            "L_confident": 0.8
          },
          "evidence": {
            "internalChecking": 1
          },
          "positive": {
            "deepCheck": 1
          },
          "negative": {
            "prematureAction": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_009_c",
        "text": "Aku merapikan hasil orang lain agar terlihat satu suara, bukan tempelan panik.",
        "subtleMeaning": "refiner",
        "weights": {
          "work": {
            "refiner": 2,
            "improviser": -0.4
          },
          "learning": {
            "repetitionBased": 0.8
          },
          "riasec": {
            "Conventional": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "C": 1
          },
          "bigFive": {
            "Conscientiousness": 0.9
          },
          "evidence": {
            "orderSeeking": 0.8,
            "practicalRepair": 0.5
          },
          "positive": {
            "qualityControl": 1
          },
          "negative": {
            "roughFinish": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_009_d",
        "text": "Aku memilih bagian yang bisa dikerjakan sekarang dan mulai sebelum chat makin ramai.",
        "subtleMeaning": "executor",
        "weights": {
          "work": {
            "executor": 2,
            "researcher": -0.3
          },
          "learning": {
            "experiential": 0.8
          },
          "riasec": {
            "Realistic": 1
          },
          "disc": {
            "D": 0.8
          },
          "bigFive": {
            "Conscientiousness": 0.7
          },
          "evidence": {
            "actionFirst": 1
          },
          "positive": {
            "getsMoving": 1
          },
          "negative": {
            "endlessPreparation": -0.7
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "work_010",
    "kind": "ranking",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Tim harus memilih peran untuk acara besok. Ada panggung, daftar tamu, alat rusak, dan tamu penting yang belum dikonfirmasi.",
    "instruction": "Urutkan dari peran yang paling dekat sampai paling jauh.",
    "options": [
      {
        "id": "work_010_a",
        "text": "Aku berkata, “oke, aku ambil depan dulu, kalian pilih bagian yang sanggup selesai.”",
        "subtleMeaning": "leader",
        "weights": {
          "work": {
            "leader": 2,
            "stabilizer": -0.2
          },
          "learning": {
            "verbal": 0.6
          },
          "riasec": {
            "Enterprising": 1
          },
          "disc": {
            "D": 1
          },
          "bigFive": {
            "Extraversion": 0.7
          },
          "evidence": {
            "visibleRole": 1
          },
          "positive": {
            "takesCharge": 1
          },
          "negative": {
            "silentWaiting": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_010_b",
        "text": "Aku membagi pekerjaan sambil memastikan orang yang diam tidak tenggelam.",
        "subtleMeaning": "helper",
        "weights": {
          "work": {
            "helper": 2,
            "challenger": -0.4
          },
          "learning": {
            "social": 0.7
          },
          "riasec": {
            "Social": 1
          },
          "disc": {
            "S": 0.8
          },
          "bigFive": {
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Agreeableness": 0.7
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "teamCare": 1
          },
          "negative": {
            "soloPush": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_010_c",
        "text": "Aku membuat urutan tiga langkah dan menaruh nama orang di samping tiap tugas.",
        "subtleMeaning": "planner",
        "weights": {
          "work": {
            "planner": 2,
            "improviser": -0.5
          },
          "learning": {
            "structured": 1
          },
          "riasec": {
            "Conventional": 1
          },
          "disc": {
            "C": 0.8
          },
          "bigFive": {
            "Conscientiousness": 1
          },
          "hexaco": {
            "Conscientiousness": 1
          },
          "attitudinalPsyche": {
            "V_confident": 0.6
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "clearPlan": 1
          },
          "negative": {
            "chaoticStart": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_010_d",
        "text": "Aku berdiri, mengambil alat yang dibutuhkan, dan mengajak satu orang bergerak dulu.",
        "subtleMeaning": "executor",
        "weights": {
          "work": {
            "executor": 2,
            "researcher": -0.3
          },
          "learning": {
            "experiential": 0.8
          },
          "riasec": {
            "Realistic": 1
          },
          "disc": {
            "D": 0.8
          },
          "bigFive": {
            "Conscientiousness": 0.7
          },
          "evidence": {
            "actionFirst": 1
          },
          "positive": {
            "getsMoving": 1
          },
          "negative": {
            "endlessPreparation": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_010_e",
        "text": "Aku menawarkan sudut yang berbeda ketika semua orang hanya mengulang contoh lama.",
        "subtleMeaning": "creator",
        "weights": {
          "work": {
            "creator": 2,
            "refiner": -0.3
          },
          "learning": {
            "exploratory": 1,
            "visual": 0.5
          },
          "riasec": {
            "Artistic": 1
          },
          "disc": {
            "I": 0.7
          },
          "bigFive": {
            "Openness": 1
          },
          "hexaco": {
            "Openness": 0.8
          },
          "evidence": {
            "noveltySeeking": 1
          },
          "positive": {
            "freshAngle": 1
          },
          "negative": {
            "overStandardized": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "rankLimit": 5
  },
  {
    "id": "work_011",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Seorang rekan membuat kesalahan, lalu diam saat klien bertanya siapa yang memegang bagian itu.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "work_011_a",
        "text": "Aku bertanya, “kalau bagian ini gagal, siapa yang menanggung akibatnya?”",
        "subtleMeaning": "challenger",
        "weights": {
          "work": {
            "challenger": 2,
            "helper": -0.3
          },
          "learning": {
            "experiential": 0.5
          },
          "riasec": {
            "Enterprising": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "D": 0.9
          },
          "bigFive": {
            "Extraversion": 0.4
          },
          "evidence": {
            "confrontation": 0.8
          },
          "positive": {
            "questionsWeakPlan": 1
          },
          "negative": {
            "tooEasyAgreement": -0.8
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_011_b",
        "text": "Aku bertanya siapa yang paling tertinggal, lalu duduk di sampingnya sebentar.",
        "subtleMeaning": "helper",
        "weights": {
          "work": {
            "helper": 2,
            "challenger": -0.4
          },
          "learning": {
            "social": 0.7
          },
          "riasec": {
            "Social": 1
          },
          "disc": {
            "S": 0.8
          },
          "bigFive": {
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Agreeableness": 0.7
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "teamCare": 1
          },
          "negative": {
            "soloPush": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_011_c",
        "text": "Aku mengecek ulang detail terakhir, termasuk tanda baca dan angka kecil yang mudah mempermalukan kami.",
        "subtleMeaning": "refiner",
        "weights": {
          "work": {
            "refiner": 2,
            "improviser": -0.4
          },
          "learning": {
            "repetitionBased": 0.8
          },
          "riasec": {
            "Conventional": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "C": 1
          },
          "bigFive": {
            "Conscientiousness": 0.9
          },
          "evidence": {
            "orderSeeking": 0.8,
            "practicalRepair": 0.5
          },
          "positive": {
            "qualityControl": 1
          },
          "negative": {
            "roughFinish": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_011_d",
        "text": "Aku menunjuk arah kerja dan membuat semua orang berhenti saling tunggu.",
        "subtleMeaning": "leader",
        "weights": {
          "work": {
            "leader": 2,
            "stabilizer": -0.2
          },
          "learning": {
            "verbal": 0.6
          },
          "riasec": {
            "Enterprising": 1
          },
          "disc": {
            "D": 1
          },
          "bigFive": {
            "Extraversion": 0.7
          },
          "evidence": {
            "visibleRole": 1
          },
          "positive": {
            "takesCharge": 1
          },
          "negative": {
            "silentWaiting": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "work_012",
    "kind": "multiChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Kau diminta mengajar teman yang tertinggal, tapi tugasmu sendiri belum selesai.",
    "instruction": "Pilih maksimal 2 tindakan yang paling mungkin kau lakukan.",
    "options": [
      {
        "id": "work_012_a",
        "text": "Aku membagi pekerjaan sambil memastikan orang yang diam tidak tenggelam.",
        "subtleMeaning": "helper",
        "weights": {
          "work": {
            "helper": 2,
            "challenger": -0.4
          },
          "learning": {
            "social": 0.7
          },
          "riasec": {
            "Social": 1
          },
          "disc": {
            "S": 0.8
          },
          "bigFive": {
            "Agreeableness": 0.8
          },
          "hexaco": {
            "Agreeableness": 0.7
          },
          "evidence": {
            "peopleFirst": 1
          },
          "positive": {
            "teamCare": 1
          },
          "negative": {
            "soloPush": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_012_b",
        "text": "Aku membuka kalender, menghitung waktu mundur, lalu memotong bagian yang tidak mungkin selesai.",
        "subtleMeaning": "planner",
        "weights": {
          "work": {
            "planner": 2,
            "improviser": -0.5
          },
          "learning": {
            "structured": 1
          },
          "riasec": {
            "Conventional": 1
          },
          "disc": {
            "C": 0.8
          },
          "bigFive": {
            "Conscientiousness": 1
          },
          "hexaco": {
            "Conscientiousness": 1
          },
          "attitudinalPsyche": {
            "V_confident": 0.6
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "clearPlan": 1
          },
          "negative": {
            "chaoticStart": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_012_c",
        "text": "Aku mencari sumber asli dan mengecek bagian yang paling sering dianggap benar padahal belum jelas.",
        "subtleMeaning": "researcher",
        "weights": {
          "work": {
            "researcher": 2,
            "executor": -0.3
          },
          "learning": {
            "analytical": 1,
            "solitary": 0.4
          },
          "riasec": {
            "Investigative": 1
          },
          "disc": {
            "C": 0.7
          },
          "bigFive": {
            "Openness": 0.7
          },
          "hexaco": {
            "Openness": 0.8
          },
          "attitudinalPsyche": {
            "L_confident": 0.8
          },
          "evidence": {
            "internalChecking": 1
          },
          "positive": {
            "deepCheck": 1
          },
          "negative": {
            "prematureAction": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_012_d",
        "text": "Aku memilih bagian yang bisa dikerjakan sekarang dan mulai sebelum chat makin ramai.",
        "subtleMeaning": "executor",
        "weights": {
          "work": {
            "executor": 2,
            "researcher": -0.3
          },
          "learning": {
            "experiential": 0.8
          },
          "riasec": {
            "Realistic": 1
          },
          "disc": {
            "D": 0.8
          },
          "bigFive": {
            "Conscientiousness": 0.7
          },
          "evidence": {
            "actionFirst": 1
          },
          "positive": {
            "getsMoving": 1
          },
          "negative": {
            "endlessPreparation": -0.7
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "minSelect": 1,
    "maxSelect": 2
  },
  {
    "id": "work_013",
    "kind": "firstReaction",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Saat interview, pewawancara bertanya, “kenapa kami harus percaya kamu bisa belajar cepat?”",
    "instruction": "Pilih jawaban pertama yang mungkin muncul.",
    "options": [
      {
        "id": "work_013_a",
        "text": "Aku menahan diri untuk tidak menjawab sampai menemukan bagian yang benar-benar bisa diuji.",
        "subtleMeaning": "researcher",
        "weights": {
          "work": {
            "researcher": 2,
            "executor": -0.3
          },
          "learning": {
            "analytical": 1,
            "solitary": 0.4
          },
          "riasec": {
            "Investigative": 1
          },
          "disc": {
            "C": 0.7
          },
          "bigFive": {
            "Openness": 0.7
          },
          "hexaco": {
            "Openness": 0.8
          },
          "attitudinalPsyche": {
            "L_confident": 0.8
          },
          "evidence": {
            "internalChecking": 1
          },
          "positive": {
            "deepCheck": 1
          },
          "negative": {
            "prematureAction": -0.7
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_013_b",
        "text": "Aku berdiri, mengambil alat yang dibutuhkan, dan mengajak satu orang bergerak dulu.",
        "subtleMeaning": "executor",
        "weights": {
          "work": {
            "executor": 2,
            "researcher": -0.3
          },
          "learning": {
            "experiential": 0.8
          },
          "riasec": {
            "Realistic": 1
          },
          "disc": {
            "D": 0.8
          },
          "bigFive": {
            "Conscientiousness": 0.7
          },
          "evidence": {
            "actionFirst": 1
          },
          "positive": {
            "getsMoving": 1
          },
          "negative": {
            "endlessPreparation": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_013_c",
        "text": "Aku menggambar versi kasar di kertas, meski belum rapi, supaya semua orang punya sesuatu untuk dibayangkan.",
        "subtleMeaning": "creator",
        "weights": {
          "work": {
            "creator": 2,
            "refiner": -0.3
          },
          "learning": {
            "exploratory": 1,
            "visual": 0.5
          },
          "riasec": {
            "Artistic": 1
          },
          "disc": {
            "I": 0.7
          },
          "bigFive": {
            "Openness": 1
          },
          "hexaco": {
            "Openness": 0.8
          },
          "evidence": {
            "noveltySeeking": 1
          },
          "positive": {
            "freshAngle": 1
          },
          "negative": {
            "overStandardized": -0.7
          },
          "reliability": 0.78
        }
      },
      {
        "id": "work_013_d",
        "text": "Aku berkata, “oke, aku ambil depan dulu, kalian pilih bagian yang sanggup selesai.”",
        "subtleMeaning": "leader",
        "weights": {
          "work": {
            "leader": 2,
            "stabilizer": -0.2
          },
          "learning": {
            "verbal": 0.6
          },
          "riasec": {
            "Enterprising": 1
          },
          "disc": {
            "D": 1
          },
          "bigFive": {
            "Extraversion": 0.7
          },
          "evidence": {
            "visibleRole": 1
          },
          "positive": {
            "takesCharge": 1
          },
          "negative": {
            "silentWaiting": -0.8
          },
          "reliability": 0.8
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "work_014",
    "kind": "singleChoice",
    "context": {
      "domain": "work",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Dokumen hampir selesai, tapi ada satu bagian yang terasa belum layak dikirim.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "work_014_a",
        "text": "Aku merapikan hasil orang lain agar terlihat satu suara, bukan tempelan panik.",
        "subtleMeaning": "refiner",
        "weights": {
          "work": {
            "refiner": 2,
            "improviser": -0.4
          },
          "learning": {
            "repetitionBased": 0.8
          },
          "riasec": {
            "Conventional": 0.8,
            "Investigative": 0.4
          },
          "disc": {
            "C": 1
          },
          "bigFive": {
            "Conscientiousness": 0.9
          },
          "evidence": {
            "orderSeeking": 0.8,
            "practicalRepair": 0.5
          },
          "positive": {
            "qualityControl": 1
          },
          "negative": {
            "roughFinish": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_014_b",
        "text": "Aku memilih bagian yang bisa dikerjakan sekarang dan mulai sebelum chat makin ramai.",
        "subtleMeaning": "executor",
        "weights": {
          "work": {
            "executor": 2,
            "researcher": -0.3
          },
          "learning": {
            "experiential": 0.8
          },
          "riasec": {
            "Realistic": 1
          },
          "disc": {
            "D": 0.8
          },
          "bigFive": {
            "Conscientiousness": 0.7
          },
          "evidence": {
            "actionFirst": 1
          },
          "positive": {
            "getsMoving": 1
          },
          "negative": {
            "endlessPreparation": -0.7
          },
          "reliability": 0.8
        }
      },
      {
        "id": "work_014_c",
        "text": "Aku membuat urutan tiga langkah dan menaruh nama orang di samping tiap tugas.",
        "subtleMeaning": "planner",
        "weights": {
          "work": {
            "planner": 2,
            "improviser": -0.5
          },
          "learning": {
            "structured": 1
          },
          "riasec": {
            "Conventional": 1
          },
          "disc": {
            "C": 0.8
          },
          "bigFive": {
            "Conscientiousness": 1
          },
          "hexaco": {
            "Conscientiousness": 1
          },
          "attitudinalPsyche": {
            "V_confident": 0.6
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "clearPlan": 1
          },
          "negative": {
            "chaoticStart": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_014_d",
        "text": "Aku mencari sumber asli dan mengecek bagian yang paling sering dianggap benar padahal belum jelas.",
        "subtleMeaning": "researcher",
        "weights": {
          "work": {
            "researcher": 2,
            "executor": -0.3
          },
          "learning": {
            "analytical": 1,
            "solitary": 0.4
          },
          "riasec": {
            "Investigative": 1
          },
          "disc": {
            "C": 0.7
          },
          "bigFive": {
            "Openness": 0.7
          },
          "hexaco": {
            "Openness": 0.8
          },
          "attitudinalPsyche": {
            "L_confident": 0.8
          },
          "evidence": {
            "internalChecking": 1
          },
          "positive": {
            "deepCheck": 1
          },
          "negative": {
            "prematureAction": -0.7
          },
          "reliability": 0.82
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2"
  },
  {
    "id": "work_015",
    "kind": "forcedChoice",
    "context": {
      "domain": "school",
      "pressureLevel": "medium",
      "socialExposure": "semiPrivate",
      "emotionalCharge": "medium"
    },
    "prompt": "Guru/dosen memberi pilihan: tugas aman yang jelas nilainya, atau proyek bebas yang hasilnya belum tentu diterima.",
    "instruction": "Pilih respons yang terasa paling mungkin bagimu.",
    "options": [
      {
        "id": "work_015_a",
        "text": "Aku membuka kalender, menghitung waktu mundur, lalu memotong bagian yang tidak mungkin selesai.",
        "subtleMeaning": "planner",
        "weights": {
          "work": {
            "planner": 2,
            "improviser": -0.5
          },
          "learning": {
            "structured": 1
          },
          "riasec": {
            "Conventional": 1
          },
          "disc": {
            "C": 0.8
          },
          "bigFive": {
            "Conscientiousness": 1
          },
          "hexaco": {
            "Conscientiousness": 1
          },
          "attitudinalPsyche": {
            "V_confident": 0.6
          },
          "evidence": {
            "orderSeeking": 1
          },
          "positive": {
            "clearPlan": 1
          },
          "negative": {
            "chaoticStart": -0.8
          },
          "reliability": 0.82
        }
      },
      {
        "id": "work_015_b",
        "text": "Aku menawarkan sudut yang berbeda ketika semua orang hanya mengulang contoh lama.",
        "subtleMeaning": "creator",
        "weights": {
          "work": {
            "creator": 2,
            "refiner": -0.3
          },
          "learning": {
            "exploratory": 1,
            "visual": 0.5
          },
          "riasec": {
            "Artistic": 1
          },
          "disc": {
            "I": 0.7
          },
          "bigFive": {
            "Openness": 1
          },
          "hexaco": {
            "Openness": 0.8
          },
          "evidence": {
            "noveltySeeking": 1
          },
          "positive": {
            "freshAngle": 1
          },
          "negative": {
            "overStandardized": -0.7
          },
          "reliability": 0.78
        }
      }
    ],
    "reliability": 0.8,
    "targetSystems": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "coverageFocus": [
      "work",
      "learning",
      "riasec",
      "disc",
      "bigFive",
      "hexaco",
      "attitudinalPsyche",
      "evidence",
      "positive",
      "negative"
    ],
    "batchTag": "tahap-2",
    "left": {
      "id": "work_015_a",
      "text": "Aku membuka kalender, menghitung waktu mundur, lalu memotong bagian yang tidak mungkin selesai.",
      "subtleMeaning": "planner",
      "weights": {
        "work": {
          "planner": 2,
          "improviser": -0.5
        },
        "learning": {
          "structured": 1
        },
        "riasec": {
          "Conventional": 1
        },
        "disc": {
          "C": 0.8
        },
        "bigFive": {
          "Conscientiousness": 1
        },
        "hexaco": {
          "Conscientiousness": 1
        },
        "attitudinalPsyche": {
          "V_confident": 0.6
        },
        "evidence": {
          "orderSeeking": 1
        },
        "positive": {
          "clearPlan": 1
        },
        "negative": {
          "chaoticStart": -0.8
        },
        "reliability": 0.82
      }
    },
    "right": {
      "id": "work_015_b",
      "text": "Aku menawarkan sudut yang berbeda ketika semua orang hanya mengulang contoh lama.",
      "subtleMeaning": "creator",
      "weights": {
        "work": {
          "creator": 2,
          "refiner": -0.3
        },
        "learning": {
          "exploratory": 1,
          "visual": 0.5
        },
        "riasec": {
          "Artistic": 1
        },
        "disc": {
          "I": 0.7
        },
        "bigFive": {
          "Openness": 1
        },
        "hexaco": {
          "Openness": 0.8
        },
        "evidence": {
          "noveltySeeking": 1
        },
        "positive": {
          "freshAngle": 1
        },
        "negative": {
          "overStandardized": -0.7
        },
        "reliability": 0.78
      }
    }
  }
];
