import { ParsedLog } from "./types";

export function exportLogs(logs: ParsedLog[]): void {
  const content = logs.map(l => l.raw).join("\n");
  const blob = new Blob([content], { type: "text/plain" });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "filtered-logs.txt";
  a.click();

  URL.revokeObjectURL(url);
}
