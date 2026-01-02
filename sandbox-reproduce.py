import time
import random

print("Starting sandbox run...")
time.sleep(1)

if random.choice([True, False]):
    raise TimeoutError("Simulated timeout")

print("Completed successfully")
