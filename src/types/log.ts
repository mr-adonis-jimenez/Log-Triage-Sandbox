// src/types/log.ts
export interface Log {
  timestamp: string;
  level: string;
  message: string;
  service?: string;
  traceId?: string;
}
