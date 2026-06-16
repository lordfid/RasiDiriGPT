const SECTION_LABELS: { upTo: number; label: string }[] = [
  { upTo: 40,  label: "Bagian 1 — Inti & Cara Pikir" },
  { upTo: 80,  label: "Bagian 2 — Preferensi & Gaya" },
  { upTo: 120, label: "Bagian 3 — Relasi & Kedekatan" },
  { upTo: 160, label: "Bagian 4 — Stres & Ketahanan" },
  { upTo: 200, label: "Bagian 5 — Nilai & Tujuan" },
  { upTo: 237, label: "Bagian 6 — Kerja & Belajar" },
  { upTo: 999, label: "Bagian 7 — Pendalaman Final" },
];

function getSectionLabel(current: number): string {
  return SECTION_LABELS.find((s) => current <= s.upTo)?.label ?? "Menyelesaikan...";
}

function getMotivation(percent: number): string {
  if (percent < 15) return "Baru mulai — ambil waktu-mu.";
  if (percent < 30) return "Kamu sedang membangun gambar dirimu.";
  if (percent < 50) return "Setengah perjalanan hampir di sini.";
  if (percent < 65) return "Lebih dari setengah sudah terlewat.";
  if (percent < 80) return "Hampir di bagian paling dalam.";
  if (percent < 95) return "Sedikit lagi. Kamu hampir selesai.";
  return "Pertanyaan terakhir. Tetap jujur.";
}

type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = total ? Math.round((current / total) * 100) : 0;
  const sectionLabel = getSectionLabel(current);
  const motivation = getMotivation(percent);

  return (
    <div className="progress-wrap" aria-label={`Progress ${percent}%`}>
      <div className="progress-section-label">{sectionLabel}</div>
      <div className="progress-meta">
        <span className="progress-motivation">{motivation}</span>
        <span>{current} / {total} ({percent}%)</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
