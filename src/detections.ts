import { ParsedLog, DetectionResult } from "./types";

export function detectBruteForce(logs: ParsedLog[]): DetectionResult | null {
  const matches = logs.filter(l =>
    /invalid credentials|authentication failed/i.test(l.message)
  );

  if (matches.length < 5) return null;

  return {
    name: "Brute Force Authentication Attempts",
    severity: "HIGH",
    count: matches.length,
    mitre: {
      tactic: "Credential Access",
      technique: "Brute Force",
      techniqueId: "T1110"
    }
  };
}
