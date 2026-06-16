const SECTION_MESSAGES: Record<number, { title: string; subtitle: string }> = {
  40:  { title: "Kamu sudah melewati bagian pertama.",     subtitle: "Sekarang kita akan melihat cara kamu merespons pilihan dan suasana." },
  80:  { title: "Setengah lebih sudah terlewati.",          subtitle: "Bagian ini akan membawa kamu ke dinamika hubungan dan kedekatan." },
  120: { title: "Kamu sudah di lebih dari setengah jalan.", subtitle: "Sekarang kita akan menjelajahi bagaimana kamu merespons tekanan." },
  160: { title: "Hampir di bagian terdalam.",              subtitle: "Pertanyaan-pertanyaan berikut tentang nilai dan tujuan yang kamu pegang." },
  200: { title: "Bagian terakhir sebentar lagi.",          subtitle: "Ini bagian tentang cara kamu bekerja, belajar, dan bertumbuh." },
  237: { title: "Pendalaman final dimulai.",               subtitle: "Pertanyaan-pertanyaan ini memastikan gambar yang terbentuk akurat." },
};

type SectionBreakProps = {
  questionIndex: number;
  onContinue: () => void;
};

export function SectionBreak({ questionIndex, onContinue }: SectionBreakProps) {
  const msg = SECTION_MESSAGES[questionIndex];
  if (!msg) return null;

  return (
    <div className="section-break-overlay">
      <div className="section-break-card">
        <div className="section-break-dot" />
        <h2 className="section-break-title">{msg.title}</h2>
        <p className="section-break-subtitle">{msg.subtitle}</p>
        <button className="primary-button" onClick={onContinue}>Lanjutkan</button>
      </div>
    </div>
  );
}

export const SECTION_BREAK_POINTS = new Set(Object.keys(SECTION_MESSAGES).map(Number));
