# Performance Comparison: JavaScript vs Python

This study compares the performance of **JavaScript (Node.js v20.17.0)** and **Python (3.12.6)** across three tasks: Fibonacci calculation (recursive), file reading (Shakespeare's works, ~5.4MB), and JSON parsing. Each task was executed five times, and the results were recorded for analysis.

---

## 1. Hypothesis

It is hypothesized that Python is overperformed by JavaScript in various tasks.

---

## 2. Tasks and Benchmarks

### Task 1: Fibonacci Calculation (Recursive)
A recursive Fibonacci function was used to calculate the 30th Fibonacci number. Recursive implementations highlight raw CPU-bound performance.

| Language      | Try 1    | Try 2    | Try 3    | Try 4    | Try 5    | Average   |
|---------------|----------|----------|----------|----------|----------|-----------|
| **JavaScript**| 21.978ms | 21.978ms | 20.1ms   | 19.226ms | 19.477ms | 20.55ms   |
| **Python**    | 214.126ms| 207.010ms| 214.091ms| 220.466ms| 211.350ms| 213.81ms  |

**Observation**: JavaScript was approximately **10 times faster** than Python in this CPU-bound task.

---

### Task 2: File Reading
Both languages read Shakespeare's complete works (5.4MB text file). This task evaluates I/O performance.

| Language      | Try 1    | Try 2    | Try 3    | Try 4    | Try 5    | Average   |
|---------------|----------|----------|----------|----------|----------|-----------|
| **JavaScript**| 9.312ms  | 9.16ms   | 9.278ms  | 9.701ms  | 8.824ms  | 9.255ms   |
| **Python**    | 15.539ms | 19.755ms | 21.368ms | 13.361ms | 15.431ms | 17.09ms   |

**Observation**: JavaScript was approximately **1.8 times faster** than Python in file I/O operations.

---

### Task 3: JSON Parsing
A large JSON object (~100,000 key-value pairs) was parsed in both languages. This task evaluates string processing and parsing efficiency.

| Language      | Try 1    | Try 2    | Try 3    | Try 4    | Try 5    | Average   |
|---------------|----------|----------|----------|----------|----------|-----------|
| **JavaScript**| 13.234ms | 13.188ms | 13.284ms | 13.241ms | 13.424ms | 13.27ms   |
| **Python**    | 20.040ms | 16.490ms | 15.250ms | 18.780ms | 20.030ms | 18.12ms   |

**Observation**: JavaScript was approximately **1.4 times faster** than Python in JSON parsing.

---

## 3. Averages Summary

| Task                | JavaScript Average | Python Average | Performance Ratio (JS/Python) |
|---------------------|---------------------|----------------|-------------------------------|
| Fibonacci Calculation | 20.55ms           | 213.81ms       | **~10.4x faster**             |
| File Reading         | 9.255ms           | 17.09ms        | **~1.8x faster**              |
| JSON Parsing         | 13.27ms           | 18.12ms        | **~1.4x faster**              |

---

## 4. Conclusion

1. **Fibonacci Calculation**:
   - JavaScript is significantly faster than Python in CPU-bound tasks.

2. **File Reading**:
   - JavaScript outperforms Python in file I/O tasks, handling the text file ~1.8 times faster.

3. **JSON Parsing**:
   - JavaScript maintains its advantage but with a smaller margin. Both implementations performed well in this task.

### Overall Findings
JavaScript is generally faster than Python across all measured tasks. Python's performance is still reasonable and sufficient for many applications, especially where development speed and simplicity are prioritized, however when performance is the key priority Javascript should be chosen over Python.

---

## 5. Environment Details

- **JavaScript**:
  - Node.js version: `v20.17.0`
  - Benchmark script: Pure JavaScript.

- **Python**:
  - Python version: `3.12.6`
  - Benchmark script: Pure Python.

