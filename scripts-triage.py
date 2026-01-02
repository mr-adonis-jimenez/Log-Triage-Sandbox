ERROR_SIGNATURES = {
    "timeout": ["timeout", "ETIMEDOUT"],
    "auth": ["401", "403", "unauthorized"],
    "dependency": ["ModuleNotFoundError", "ImportError"],
    "network": ["ConnectionError", "DNS", "ENOTFOUND"],
}

def triage(log_text: str):
    findings = []
    for category, signals in ERROR_SIGNATURES.items():
        if any(sig.lower() in log_text.lower() for sig in signals):
            findings.append(category)
    return findings or ["unknown"]

if __name__ == "__main__":
    import sys
    text = sys.stdin.read()
    print("Likely causes:", triage(text))
