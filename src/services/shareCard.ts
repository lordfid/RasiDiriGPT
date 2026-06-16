import type { FinalResult } from "../types";

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number): number {
  const words = text.split(" ");
  let line = "";
  let currentY = y;
  words.forEach((word) => {
    const test = `${line}${word} `;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line.trim(), x, currentY);
      line = `${word} `;
      currentY += lineHeight;
    } else {
      line = test;
    }
  });
  if (line) ctx.fillText(line.trim(), x, currentY);
  return currentY + lineHeight;
}

export async function createResultStoryImage(result: FinalResult): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas tidak tersedia.");

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
  gradient.addColorStop(0, "#24142f");
  gradient.addColorStop(0.55, "#422349");
  gradient.addColorStop(1, "#0f1b2d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1920);

  ctx.fillStyle = "rgba(255,255,255,0.09)";
  ctx.fillRect(80, 160, 920, 1380);

  ctx.fillStyle = "#fff7ed";
  ctx.font = "700 72px system-ui, sans-serif";
  ctx.fillText("Rasi Diri", 120, 280);

  ctx.font = "400 34px system-ui, sans-serif";
  ctx.fillStyle = "#e8d7ff";
  ctx.fillText("peta kecenderungan dari momen kecilmu", 120, 335);

  ctx.fillStyle = "#ffffff";
  ctx.font = "700 96px system-ui, sans-serif";
  ctx.fillText(result.topMBTI[0]?.key ?? "—", 120, 520);

  ctx.font = "500 42px system-ui, sans-serif";
  ctx.fillStyle = "#ffd6e7";
  ctx.fillText(`Enneagram ${result.enneagram.wing}`, 120, 600);
  ctx.fillText(`Instinct ${result.instinctStacking.map((item) => item.key).join("/")}`, 120, 660);

  ctx.fillStyle = "#fff7ed";
  ctx.font = "400 36px system-ui, sans-serif";
  const shortSummary = result.summary.length > 260 ? `${result.summary.slice(0, 260)}...` : result.summary;
  const afterSummary = wrapText(ctx, shortSummary, 120, 780, 820, 54);

  ctx.fillStyle = "#c7f9ff";
  ctx.font = "600 34px system-ui, sans-serif";
  ctx.fillText(`Confidence ${result.confidence.score}/100 — ${result.confidence.label}`, 120, afterSummary + 70);

  ctx.fillStyle = "rgba(255,255,255,0.72)";
  ctx.font = "400 28px system-ui, sans-serif";
  ctx.fillText("Bukan diagnosis. Hanya interpretasi tipologi.", 120, 1680);
  ctx.fillText(window.location.origin, 120, 1730);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Gagal membuat gambar."));
    }, "image/png");
  });
}

export async function downloadStoryImage(result: FinalResult): Promise<void> {
  const blob = await createResultStoryImage(result);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "rasi-diri-hasil.png";
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function shareStoryImage(result: FinalResult): Promise<void> {
  const blob = await createResultStoryImage(result);
  const file = new File([blob], "rasi-diri-hasil.png", { type: "image/png" });
  const nav = navigator as Navigator & { canShare?: (data: ShareData) => boolean };
  const payload = { title: "Rasi Diri", text: "Ini ringkasan hasil Rasi Diri-ku.", files: [file] } as ShareData & { files: File[] };
  if (navigator.share && (!nav.canShare || nav.canShare(payload))) {
    await navigator.share(payload);
    return;
  }
  await downloadStoryImage(result);
}
