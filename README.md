# Performance Comparison: JavaScript vs Python

This study compares the performance of **JavaScript (Node.js v20.17.0)** and **Python (3.12.6)** across four tasks: Fibonacci calculation (recursive), file reading (Shakespeare's works, ~5.4MB), JSON parsing, and matrix multiplication. Each task was executed five times, and the results were recorded for analysis.

**Note**: This study uses plain JavaScript and Python, without any external libraries (e.g., NumPy for Python or math.js for JavaScript). This ensures a fair comparison of pure language capabilities without leveraging C-based optimizations.

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

### Task 4: Matrix Multiplication
Matrix multiplication was performed on two square matrices of size \(128 \times 128\). This task evaluates raw computational performance for numerical operations.

| Language      | Try 1    | Try 2    | Try 3    | Try 4    | Try 5    | Average   |
|---------------|----------|----------|----------|----------|----------|-----------|
| **JavaScript**| 29.671ms | 32.257ms | 28.485ms | 29.445ms | 29.342ms | 29.84ms   |
| **Python**    | 338.45ms | 341.48ms | 337.02ms | 339.54ms | 352.16ms | 341.73ms  |

**Observation**: JavaScript was approximately **11.5 times faster** than Python in matrix multiplication.

---

## 3. Averages Summary

| Task                | JavaScript Average | Python Average | Performance Ratio (JS/Python) |
|---------------------|---------------------|----------------|-------------------------------|
| Fibonacci Calculation | 20.55ms           | 213.81ms       | **~10.4x faster**             |
| File Reading         | 9.255ms           | 17.09ms        | **~1.8x faster**              |
| JSON Parsing         | 13.27ms           | 18.12ms        | **~1.4x faster**              |
| Matrix Multiplication| 29.84ms           | 341.73ms       | **~11.5x faster**             |

---

## 4. Conclusion

1. **Fibonacci Calculation**:
   - JavaScript is significantly faster than Python in CPU-bound tasks, as evidenced by the recursive Fibonacci calculation.

2. **File Reading**:
   - JavaScript outperforms Python in file I/O tasks, handling the text file ~1.8 times faster.

3. **JSON Parsing**:
   - JavaScript maintains its advantage but with a smaller margin. Both implementations performed reasonably well.

4. **Matrix Multiplication**:
   - JavaScript shows an even greater advantage, performing matrix multiplication ~11.5 times faster than Python.

### Overall Findings
JavaScript consistently outperformed Python across all tasks in this study. Python's performance, while reasonable, is limited in raw computational and I/O-heavy tasks when using plain code. For scenarios where performance is critical, JavaScript (Node.js) is the preferred choice.

---

## 5. Environment Details

- **JavaScript**:
  - Node.js version: `v20.17.0`
  - Benchmark script: Pure JavaScript.

- **Python**:
  - Python version: `3.12.6`
  - Benchmark script: Pure Python.

