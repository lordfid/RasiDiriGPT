# Rasi Diri

Rasi Diri adalah aplikasi tes tipologi dan pola diri berbasis React + TypeScript + Vite. Semua scoring berjalan lokal di browser tanpa API key dan tanpa backend.

## Status Tahap 4

Tahap ini merevisi teks pertanyaan agar tidak membocorkan sistem yang sedang diukur. Pertanyaan dan opsi diarahkan menjadi lebih natural seperti proses wawancara psikologis: situasi, tempat, benda kecil, ucapan, gestur, dan tindakan peserta tetap terlihat, sementara scoring tetap tersembunyi di balik data internal.

Isi saat ini:

- 237 pertanyaan utama
- 12 pertanyaan tie-break
- total 249 item
- scoring lokal multi-layer
- auto-save dengan localStorage
- dark/light mode
- share story via Canvas API
- simpan gambar hasil
- email hasil via mailto

## Menjalankan Project

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy ke Vercel

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## Catatan Keamanan

- Tidak memakai API key.
- Tidak memakai backend.
- Tidak memakai `.env`.
- Jangan commit file rahasia.
- Jangan masukkan `node_modules` atau `dist` ke ZIP/GitHub.

## Catatan Scoring

Scoring internal boleh berisi istilah tipologi seperti MBTI, Enneagram, HEXACO, DISC, RIASEC, Attitudinal Psyche, Socionics, dan lainnya. Namun istilah itu tidak boleh muncul di teks pertanyaan atau opsi jawaban peserta. Pertanyaan harus terasa seperti momen hidup, bukan seperti tes teori.
