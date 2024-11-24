import time

start_time = time.time()
with open("pg100.txt", "r") as file:
    data = file.read()
print("Python File I/O:", f"{(time.time() - start_time)*1000}ms")