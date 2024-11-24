import time

def matrix_multiply(A, B):
    rows_A, cols_A = len(A), len(A[0])
    rows_B, cols_B = len(B), len(B[0])
    if cols_A != rows_B:
        raise ValueError("Matrix dimensions do not match for multiplication")

    # Initialize result matrix with zeros
    result = [[0] * cols_B for _ in range(rows_A)]
    for i in range(rows_A):
        for j in range(cols_B):
            for k in range(cols_A):
                result[i][j] += A[i][k] * B[k][j]
    return result

# Generate large matrices
size = 200
matrix_A = [[i + j for j in range(size)] for i in range(size)]
matrix_B = [[i * j for j in range(size)] for i in range(size)]

# Benchmark matrix multiplication
start_time = time.time()
matrix_multiply(matrix_A, matrix_B)
print(f"Python Matrix Multiplication: {(time.time() - start_time) * 1000:.2f} ms")
