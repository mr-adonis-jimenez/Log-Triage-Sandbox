import crypto from 'crypto';
import { LogEvent, LogLevel } from '../types/logEvent';

const LOG_REGEX =
  /^\[(?<timestamp>.*?)\]\s+(?<level>DEBUG|INFO|WARN|ERROR|FATAL)\s+(?<source>[^:]+):\s+(?<message>.*)$/;

export function parseLogLine(line: string): LogEvent | null {
  const match = LOG_REGEX.exec(line);
  if (!match?.groups) return null;

  const { timestamp, level, source, message } = match.groups;

  const fingerprint = crypto
    .createHash('sha1')
    .update(`${level}|${source}|${message}`)
    .digest('hex');

  return {
    timestamp,
    level: level as LogLevel,
    source,
    message,
    fingerprint,
  };
}
