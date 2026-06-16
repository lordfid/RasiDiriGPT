import type { FinalResult } from "../types";
import { resultToPlainText } from "./resultNarration";

export function buildEmailBody(result: FinalResult): string {
  return `${resultToPlainText(result)}\n\nLink aplikasi: ${window.location.origin}`;
}

export function openEmailClient(result: FinalResult): void {
  const subject = encodeURIComponent("Hasil Rasi Diri");
  const body = encodeURIComponent(buildEmailBody(result));
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}
