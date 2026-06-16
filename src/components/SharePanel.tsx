import { useState } from "react";
import type { FinalResult } from "../types";
import { resultToPlainText, resultToThreeSentences } from "../services/resultNarration";
import { downloadStoryImage, downloadLandscapeImage, shareStoryImage } from "../services/shareCard";
import { openEmailClient } from "../services/emailResult";

type SharePanelProps = {
  result: FinalResult;
};

export function SharePanel({ result }: SharePanelProps) {
  const [message, setMessage] = useState("");

  const run = async (task: () => Promise<void> | void, success: string) => {
    try {
      await task();
      setMessage(success);
    } catch {
      setMessage("Maaf, fitur ini belum bisa dijalankan di perangkat ini.");
    }
  };

  return (
    <div className="share-panel">
      <p className="share-panel-label">Bagikan hasil</p>
      <div className="share-buttons">
        <button
          onClick={() => run(() => navigator.clipboard.writeText(resultToThreeSentences(result)), "Ringkasan 3 kalimat sudah disalin.")}
          title="Ringkasan pendek siap di-paste ke caption atau status"
        >
          Salin ringkasan
        </button>
        <button
          onClick={() => run(() => navigator.clipboard.writeText(resultToPlainText(result)), "Hasil lengkap sudah disalin.")}
          title="Salin seluruh hasil sebagai teks"
        >
          Salin hasil lengkap
        </button>
        <button onClick={() => run(() => shareStoryImage(result), "Share story diproses.")}>
          Bagikan ke story
        </button>
        <button onClick={() => run(() => downloadStoryImage(result), "Gambar story sudah dibuat.")}>
          Simpan story (9:16)
        </button>
        <button onClick={() => run(() => downloadLandscapeImage(result), "Gambar Twitter sudah dibuat.")}>
          Simpan gambar (16:9)
        </button>
        <button onClick={() => openEmailClient(result)}>
          Kirim lewat email
        </button>
      </div>
      {message && <p className="share-message">{message}</p>}
    </div>
  );
}
