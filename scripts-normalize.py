import re
import sys

NOISE_PATTERNS = [
    r"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}",
    r"::debug::.*",
]

def normalize(line: str) -> str:
    for pattern in NOISE_PATTERNS:
        line = re.sub(pattern, "<TS>", line)
    return line.strip()

if __name__ == "__main__":
    for line in sys.stdin:
        print(normalize(line))
