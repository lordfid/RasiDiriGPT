type StartScreenProps = {
  hasProgress: boolean;
  onStart: () => void;
  onContinue: () => void;
};

export function StartScreen({ hasProgress, onStart, onContinue }: StartScreenProps) {
  return (
    <main className="screen start-screen">
      <section className="hero-card">
        <p className="eyebrow">peta kecil dari cara kau memilih</p>
        <h1>Rasi Diri</h1>
        <p className="hero-text">
          Bukan sekadar memilih tipe. Kau akan masuk ke momen rumah, chat yang menggantung,
          meja kerja yang berantakan, rasa malu, cara dicintai, dan benda-benda kecil yang diam-diam kau selamatkan.
        </p>
        <div className="hero-actions">
          <button className="primary-button" onClick={onStart}>Mulai dari awal</button>
          {hasProgress && <button className="secondary-button" onClick={onContinue}>Lanjutkan tes</button>}
        </div>
        <p className="disclaimer">
          Hasilnya adalah interpretasi tipologi, bukan diagnosis klinis. Baca sebagai kemungkinan, bukan vonis.
        </p>
      </section>
    </main>
  );
}
