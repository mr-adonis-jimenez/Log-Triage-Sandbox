import fs from 'fs';
import readline from 'readline';
import { parseLogLine } from '../src/utils/logParser';

export async function triageLogFile(path: string) {
  const stream = fs.createReadStream(path);
  const rl = readline.createInterface({ input: stream });

  const results = new Map<string, number>();

  for await (const line of rl) {
    const event = parseLogLine(line);
    if (!event) continue;

    results.set(
      event.fingerprint,
      (results.get(event.fingerprint) ?? 0) + 1
    );
  }

  return [...results.entries()].map(([fingerprint, count]) => ({
    fingerprint,
    count,
  }));
}
