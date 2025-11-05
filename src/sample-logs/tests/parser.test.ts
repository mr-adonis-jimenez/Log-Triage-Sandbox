import { describe, it, expect } from 'vitest';
import { parseLine, normalizeLevel } from '../src/parse.js';

describe('parseLine', () => {
  it('parses json', () => {
    const e = parseLine('{"ts":"2025-01-01T00:00:00Z","level":"error","message":"boom"}');
    expect(e?.level).toBe('error');
    expect(e?.message).toBe('boom');
  });
  it('parses text pattern', () => {
    const e = parseLine('[2025-01-01T00:00:00Z] [WARN] svc: hello');
    expect(e?.level).toBe('warn');
    expect(e?.service).toBe('svc');
  });
  it('fallbacks', () => {
    const e = parseLine('just a line');
    expect(e?.message).toContain('just a line');
  });
});
