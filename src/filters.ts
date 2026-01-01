import { ParsedLog, LogLevel } from "./types";

export function filterLogs(
  logs: ParsedLog[],
  query: string,
  level?: LogLevel
): ParsedLog[] {
  return logs.filter(log => {
    const matchesText =
      log.raw.toLowerCase().includes(query.toLowerCase());
    const matchesLevel = level ? log.level === level : true;
    return matchesText && matchesLevel;
  });
}
