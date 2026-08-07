/** 1 → "01", 12 → "12" — the zero-padded numbering used across section eyebrows */
export function formatIndex(value: number): string {
  return String(value).padStart(2, "0");
}

/**
 * "2026-07-18" → "July 18, 2026".
 * Pinned to UTC so the server and the browser can't disagree by a day.
 */
export function formatLongDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
