import { useState } from "react";
import type { FinalResult } from "../types";
import { resultToPlainText } from "../services/resultNarration";
import { downloadStoryImage, shareStoryImage } from "../services/shareCard";
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
      <button onClick={() => run(() => navigator.clipboard.writeText(resultToPlainText(result)), "Hasil sudah disalin.")}>Salin hasil</button>
      <button onClick={() => run(() => downloadStoryImage(result), "Gambar hasil sudah dibuat.")}>Simpan gambar hasil</button>
      <button onClick={() => run(() => shareStoryImage(result), "Share story diproses.")}>Bagikan ke story</button>
      <button onClick={() => openEmailClient(result)}>Kirim lewat email</button>
      {message && <p className="share-message">{message}</p>}
    </div>
  );
}
