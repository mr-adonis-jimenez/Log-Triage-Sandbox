import { ParsedLog, LogLevel } from "./types";

const LOG_REGEX =
  /^(\S+)\s+(INFO|WARN|ERROR)\s+(\w+)\s+(.*)$/;

export function parseLogLine(line: string): ParsedLog | null {
  const match = line.match(LOG_REGEX);
  if (!match) return null;

  return {
    timestamp: match[1],
    level: match[2] as LogLevel,
    service: match[3],
    message: match[4],
    raw: line
  };
}
