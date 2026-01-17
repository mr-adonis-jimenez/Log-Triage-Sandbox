// src/types/logEvent.ts
export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL';

export interface LogEvent {
  timestamp: string;
  level: LogLevel;
  source: string;
  message: string;
  fingerprint: string;
  metadata?: Record<string, unknown>;
}
