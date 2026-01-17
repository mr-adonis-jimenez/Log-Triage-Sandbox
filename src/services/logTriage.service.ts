import { LogEvent } from '../types/logEvent';

const WEIGHTS = {
  DEBUG: 1,
  INFO: 2,
  WARN: 5,
  ERROR: 10,
  FATAL: 20,
};

export function scoreEvent(event: LogEvent): number {
  return WEIGHTS[event.level];
}

export function triage(events: LogEvent[]) {
  return events
    .map(e => ({ ...e, score: scoreEvent(e) }))
    .sort((a, b) => b.score - a.score);
}
