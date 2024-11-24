import time

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

start_time = time.time()
fibonacci(33)
print("Python Fibonacci:", (time.time() - start_time)*1000)