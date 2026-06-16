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

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
  gradient.addColorStop(0, "#24142f");
  gradient.addColorStop(0.55, "#422349");
  gradient.addColorStop(1, "#0f1b2d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1920);

  // Card background
  ctx.fillStyle = "rgba(255,255,255,0.09)";
  roundRect(ctx, 80, 160, 920, 1380, 40);
  ctx.fill();

  // Brand
  ctx.fillStyle = "#fff7ed";
  ctx.font = "700 72px system-ui, sans-serif";
  ctx.fillText("Rasi Diri", 120, 280);

  ctx.font = "400 34px system-ui, sans-serif";
  ctx.fillStyle = "#e8d7ff";
  ctx.fillText("peta kecenderungan dari momen kecilmu", 120, 335);

  // Divider
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(120, 380);
  ctx.lineTo(960, 380);
  ctx.stroke();

  // MBTI
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 108px system-ui, sans-serif";
  ctx.fillText(result.topMBTI[0]?.key ?? "—", 120, 520);

  // Enneagram + Instinct
  ctx.font = "500 44px system-ui, sans-serif";
  ctx.fillStyle = "#ffd6e7";
  ctx.fillText(`Enneagram ${result.enneagram.wing}`, 120, 600);
  ctx.fillStyle = "#c7f9ff";
  ctx.fillText(`Instinct ${result.instinctStacking.map((item) => item.key).join("/")}`, 120, 660);

  // Confidence pill background
  ctx.fillStyle = "rgba(199,249,255,0.12)";
  roundRect(ctx, 120, 690, 420, 60, 30);
  ctx.fill();
  ctx.fillStyle = "#c7f9ff";
  ctx.font = "600 30px system-ui, sans-serif";
  ctx.fillText(`Confidence ${result.confidence.score}/100 — ${result.confidence.label}`, 140, 728);

  // Summary text
  ctx.fillStyle = "#fff7ed";
  ctx.font = "400 36px system-ui, sans-serif";
  const shortSummary = result.summary.length > 280 ? `${result.summary.slice(0, 280)}...` : result.summary;
  const afterSummary = wrapText(ctx, shortSummary, 120, 810, 840, 56);

  // Top 3 scores preview
  const top3 = result.topMBTI.slice(0, 3);
  if (top3.length) {
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    roundRect(ctx, 120, afterSummary + 30, 840, 140, 20);
    ctx.fill();

    ctx.fillStyle = "#e8d7ff";
    ctx.font = "500 28px system-ui, sans-serif";
    ctx.fillText("Kecenderungan terdekat", 145, afterSummary + 68);

    top3.forEach((item, i) => {
      const bx = 145 + i * 280;
      ctx.fillStyle = i === 0 ? "#fff7ed" : "rgba(255,255,255,0.55)";
      ctx.font = i === 0 ? "700 36px system-ui, sans-serif" : "500 30px system-ui, sans-serif";
      ctx.fillText(`${item.key}`, bx, afterSummary + 118);
    });
  }

  // Footer
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "400 26px system-ui, sans-serif";
  ctx.fillText("Bukan diagnosis. Hanya interpretasi tipologi.", 120, 1680);
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.fillText(window.location.origin, 120, 1730);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Gagal membuat gambar."));
    }, "image/png");
  });
}

// Helper: rounded rectangle path
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Landscape version for Twitter/X
export async function createResultLandscapeImage(result: FinalResult): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas tidak tersedia.");

  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, "#24142f");
  gradient.addColorStop(1, "#0f1b2d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);

  // Left block
  ctx.fillStyle = "#fff7ed";
  ctx.font = "800 48px system-ui, sans-serif";
  ctx.fillText("Rasi Diri", 80, 120);

  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = "400 24px system-ui, sans-serif";
  ctx.fillText("peta kecenderungan dari momen kecilmu", 80, 162);

  ctx.fillStyle = "#ffffff";
  ctx.font = "900 120px system-ui, sans-serif";
  ctx.fillText(result.topMBTI[0]?.key ?? "—", 80, 320);

  ctx.fillStyle = "#ffd6e7";
  ctx.font = "500 36px system-ui, sans-serif";
  ctx.fillText(`Enneagram ${result.enneagram.wing}`, 80, 380);

  ctx.fillStyle = "#c7f9ff";
  ctx.font = "500 36px system-ui, sans-serif";
  ctx.fillText(`Instinct ${result.instinctStacking.map((i) => i.key).join("/")}`, 80, 430);

  // Divider
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(580, 80);
  ctx.lineTo(580, 550);
  ctx.stroke();

  // Right block: summary
  ctx.fillStyle = "#e8d7ff";
  ctx.font = "400 28px system-ui, sans-serif";
  wrapText(ctx, result.summary.slice(0, 320), 620, 120, 520, 44);

  // Confidence
  ctx.fillStyle = "rgba(199,249,255,0.12)";
  roundRect(ctx, 620, 520, 500, 54, 27);
  ctx.fill();
  ctx.fillStyle = "#c7f9ff";
  ctx.font = "600 26px system-ui, sans-serif";
  ctx.fillText(`Confidence ${result.confidence.score}/100 — ${result.confidence.label}`, 640, 554);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Gagal membuat gambar."));
    }, "image/png");
  });
}

export async function downloadStoryImage(result: FinalResult): Promise<void> {
  const blob = await createResultStoryImage(result);
  triggerDownload(blob, "rasi-diri-story.png");
}

export async function downloadLandscapeImage(result: FinalResult): Promise<void> {
  const blob = await createResultLandscapeImage(result);
  triggerDownload(blob, "rasi-diri-twitter.png");
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
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
