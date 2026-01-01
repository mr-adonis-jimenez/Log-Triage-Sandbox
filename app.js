let logs = [];

document.getElementById("logFile").addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    logs = reader.result.split("\n");
    renderLogs();
  };
  reader.readAsText(file);
});

function renderLogs() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const level = document.getElementById("levelFilter").value;

  const filtered = logs.filter(line => {
    const matchesText = line.toLowerCase().includes(query);
    const matchesLevel = level ? line.includes(level) : true;
    return matchesText && matchesLevel;
  });

  document.getElementById("logOutput").textContent =
    filtered.join("\n");
}

function detectErrors() {
  const errorCounts = {};

  logs.forEach(line => {
    if (line.includes("ERROR")) {
      const msg = line.split("ERROR")[1]?.trim();
      errorCounts[msg] = (errorCounts[msg] || 0) + 1;
    }
  });

  return errorCounts;
}

const regexLibrary = [
  {
    name: "Auth Failures",
    pattern: /authentication failed|invalid credentials/i,
    severity: "MEDIUM"
  },
  {
    name: "Payment Timeouts",
    pattern: /timeout|gateway timeout/i,
    severity: "HIGH"
  },
  {
    name: "SQL Errors",
    pattern: /sql error|syntax error|constraint failed/i,
    severity: "HIGH"
  }
];

function applyRegexLibrary() {
  return logs.flatMap(line =>
    regexLibrary
      .filter(rule => rule.pattern.test(line))
      .map(rule => ({
        rule: rule.name,
        severity: rule.severity,
        log: line
      }))
  );
}

function parseLogLine(line) {
  const match = line.match(
    /^(\S+)\s+(INFO|WARN|ERROR)\s+(\w+)\s+(.*)$/
  );

  if (!match) return null;

  return {
    timestamp: match[1],
    level: match[2],
    service: match[3],
    message: match[4]
  };
}

function runParserTests() {
  const tests = [
    {
      input: "2025-01-02T14:32:11Z ERROR AuthService Login failed",
      expectedLevel: "ERROR"
    },
    {
      input: "INVALID LOG LINE",
      expected: null
    }
  ];

  tests.forEach((test, i) => {
    const result = parseLogLine(test.input);
    console.assert(
      test.expected ? result?.level === test.expectedLevel : result === null,
      `Test ${i + 1} failed`
    );
  });

  console.log("Parser tests complete");
}

function exportFilteredLogs(filteredLogs) {
  const blob = new Blob([filteredLogs.join("\n")], {
    type: "text/plain"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "filtered-logs.txt";
  a.click();
  URL.revokeObjectURL(url);
}

function detectSecurityEvents() {
  const events = [];

  const authFailures = logs.filter(l =>
    /authentication failed|invalid credentials/i.test(l)
  );

  if (authFailures.length >= 5) {
    events.push({
      type: "Brute Force Suspected",
      count: authFailures.length,
      severity: "HIGH"
    });
  }

  const sqlErrors = logs.filter(l =>
    /sql error|syntax error/i.test(l)
  );

  if (sqlErrors.length > 0) {
    events.push({
      type: "SQL Error Activity",
      count: sqlErrors.length,
      severity: "MEDIUM"
    });
  }

  return events;
}

function renderSecuritySummary() {
  const events = detectSecurityEvents();
  const output = events
    .map(e => `${e.severity}: ${e.type} (${e.count})`)
    .join("\n");

  document.getElementById("securityOutput").textContent =
    output || "No security events detected";
}

const mitreMappings = [
  {
    name: "Brute Force Authentication Attempts",
    tactic: "Credential Access",
    technique: "Brute Force",
    techniqueId: "T1110",
    patterns: [/authentication failed/i, /invalid credentials/i]
  },
  {
    name: "SQL Injection Indicators",
    tactic: "Initial Access",
    technique: "SQL Injection",
    techniqueId: "T1190",
    patterns: [/sql error/i, /syntax error/i]
  },
  {
    name: "Service Exhaustion / Timeouts",
    tactic: "Impact",
    technique: "Resource Exhaustion",
    techniqueId: "T1499",
    patterns: [/timeout/i, /service unavailable/i]
  }
];

function detectMitreEvents() {
  const events = [];

  mitreMappings.forEach(mapping => {
    const matches = logs.filter(line =>
      mapping.patterns.some(p => p.test(line))
    );

    if (matches.length > 0) {
      events.push({
        name: mapping.name,
        tactic: mapping.tactic,
        technique: mapping.technique,
        techniqueId: mapping.techniqueId,
        count: matches.length
      });
    }
  });

  return events;
}

function renderMitreSummary() {
  const events = detectMitreEvents();

  const output = events.map(e =>
    `${e.tactic} → ${e.technique} (${e.techniqueId})
Occurrences: ${e.count}`
  ).join("\n\n");

  document.getElementById("mitreOutput").textContent =
    output || "No MITRE-mapped activity detected";
}

const severityWeights = {
  INFO: 1,
  WARN: 3,
  ERROR: 5
};

const tacticWeights = {
  "Credential Access": 5,
  "Initial Access": 4,
  "Impact": 3
};

function calculateSeverityScore(event) {
  const base = event.count * 2;
  const tacticScore = tacticWeights[event.tactic] || 1;

  return base + tacticScore;
}

function classifySeverity(score) {
  if (score >= 15) return "CRITICAL";
  if (score >= 10) return "HIGH";
  if (score >= 5) return "MEDIUM";
  return "LOW";
}

function buildThreatSummary() {
  return detectMitreEvents().map(event => {
    const score = calculateSeverityScore(event);
    return {
      ...event,
      score,
      severity: classifySeverity(score)
    };
  });
}

function renderThreatSummary() {
  const threats = buildThreatSummary();

  const output = threats.map(t =>
    `[${t.severity}] ${t.name}
MITRE: ${t.tactic} → ${t.technique} (${t.techniqueId})
Occurrences: ${t.count}
Score: ${t.score}`
  ).join("\n\n");

  document.getElementById("threatOutput").textContent =
    output || "No threats detected";
}
