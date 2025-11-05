import type { Level, LogEntry } from './types.js';

const LEVELS: Level[] = ['debug', 'info', 'warn', 'error', 'fatal'];
const levelMap = new Map<string, Level>([
  ['debug', 'debug'],
  ['trace', 'debug'],
  ['info', 'info'],
  ['warning', 'warn'],
  ['warn', 'warn'],
  ['error', 'error'],
  ['err', 'error'],
  ['fatal', 'fatal'],
  ['crit', 'fatal']
]);

export function normalizeLevel(s: unknown): Level {
  const v = String(s ?? '').toLowerCase();
  return levelMap.get(v) ?? 'info';
}

export function parseLine(raw: string): LogEntry | null {
  const line = raw.trim();
  if (!line) return null;

  // JSON path
  if (line.startsWith('{') || line.startsWith('[')) {
    try {
      const obj = JSON.parse(line);
      const ts = String(obj.ts ?? obj.time ?? obj.timestamp ?? new Date().toISOString());
      const level = normalizeLevel(obj.level ?? obj.severity);
      const service = obj.service ?? obj.app ?? obj.name ?? undefined;
      const message = String(obj.message ?? obj.msg ?? obj.error ?? '');
      const meta = obj.meta ?? obj.context ?? obj;
      return { ts, level, service, message, meta, raw };
    } catch {
      // fallthrough
    }
  }

  // Text path: [2025-01-01T00:00:00Z] [ERROR] service: message
  const m = line.match(/^\[?([^\]]+)\]?\s+\[?([A-Za-z]+)\]?\s+([^:]+):\s*(.*)$/);
  if (m) {
    const [, ts, lvl, svc, msg] = m;
    return {
      ts: new Date(ts).toISOString(),
      level: normalizeLevel(lvl),
      service: svc.trim(),
      message: msg,
      raw
    };
  }

  // Loose: LEVEL - message
  const m2 = line.match(/^(DEBUG|INFO|WARN|WARNING|ERROR|FATAL)\s*-\s*(.*)$/i);
  if (m2) {
    const [, lvl, msg] = m2;
    return {
      ts: new Date().toISOString(),
      level: normalizeLevel(lvl),
      message: msg,
      raw
    };
  }

  // Fallback minimal
  return {
    ts: new Date().toISOString(),
    level: 'info',
    message: line,
    raw
  };
}
