import difflib
from pathlib import Path

a = Path("logs/parsed/passing.log").read_text().splitlines()
b = Path("logs/parsed/failing.log").read_text().splitlines()

for line in difflib.unified_diff(a, b, lineterm=""):
    print(line)
