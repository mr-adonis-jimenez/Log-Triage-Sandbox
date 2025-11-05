import type { LogEntry, TriageRule, RuleWhere } from './types.js';

function includes<T>(val: T | T[] | undefined, x: T): boolean {
  if (val == null) return true;
  return Array.isArray(val) ? val.includes(x) : val === x;
}
function containsText(val: string | string[] | undefined, text: string): boolean {
  if (val == null) return true;
  const arr = Array.isArray(val) ? val : [val];
  const lower = text.toLowerCase();
  return arr.some((q) => lower.includes(q.toLowerCase()));
}
function matchWhere(e: LogEntry, w: RuleWhere): boolean {
  if (!includes(w.level as any, e.level)) return false;
  if (!includes(w.service as any, e.service ?? '')) return false;
  if (!containsText(w.contains, `${e.message} ${JSON.stringify(e.meta ?? {})}`)) return false;
  if (w.regex) {
    try {
      const re = new RegExp(w.regex, 'i');
      if (!re.test(e.raw)) return false;
    } catch {
      return false;
    }
  }
  return true;
}

export function applyRules(entry: LogEntry, rules: TriageRule[]): { buckets: string[]; tags: string[]; drop: boolean; elevate?: string } {
  const buckets: string[] = [];
  const tags: string[] = [];
  let drop = false;
  let elevate: string | undefined;

  for (const r of rules) {
    if (!matchWhere(entry, r.where)) continue;
    if (r.action.bucket) buckets.push(r.action.bucket);
    const add = r.action.addTag;
    if (add) Array.isArray(add) ? tags.push(...add) : tags.push(add);
    if (r.action.elevate) elevate = r.action.elevate;
    if (r.action.drop) drop = true;
  }
  return { buckets: buckets.length ? buckets : ['unassigned'], tags, drop, elevate };
}
