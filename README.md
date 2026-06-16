# Rasi Diri

Rasi Diri adalah aplikasi tes tipologi dan pola diri berbasis React + TypeScript + Vite.
Semua scoring berjalan lokal di browser — tanpa API key, tanpa backend, tanpa login.

## Fitur

- **249+ pertanyaan** berbasis momen hidup nyata (bukan kuis teori)
- **Scoring multi-layer** mencakup MBTI, Enneagram, Big Five, HEXACO, DISC, RIASEC, Attitudinal Psyche, Socionics, dan lebih banyak lagi
- **Auto-save** dengan localStorage — aman ditutup dan dilanjutkan kapan saja
- **Dark/light mode** — mengikuti preferensi sistem secara otomatis
- **Highlight cards** — 4 insight terkuat langsung terlihat di halaman hasil
- **Share hasil** — salin ringkasan 3 kalimat, simpan gambar story (9:16) atau landscape (16:9), bagikan ke story, atau kirim lewat email
- **Jeda antar section** — perjalanan terasa seperti wawancara bertahap
- **Tidak ada data yang dikirim ke server** — semuanya berjalan di perangkat user

## Menjalankan Project

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

## Catatan Keamanan

- Tidak memakai API key
- Tidak memakai backend
- Tidak memakai `.env`
- Jangan commit file rahasia
- File `node_modules/`, `dist/`, dan `*.tsbuildinfo` sudah di-exclude oleh `.gitignore`

## Catatan Scoring

Scoring internal boleh berisi istilah tipologi seperti MBTI, Enneagram, HEXACO, DISC, RIASEC,
Attitudinal Psyche, Socionics, dan lainnya. Namun istilah itu tidak boleh muncul di teks
pertanyaan atau opsi jawaban peserta. Pertanyaan harus terasa seperti momen hidup, bukan seperti tes teori.

---

by navouise
