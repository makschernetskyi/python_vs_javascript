function matrixMultiply(A, B) {
    const rowsA = A.length, colsA = A[0].length;
    const rowsB = B.length, colsB = B[0].length;
    if (colsA !== rowsB) {
        throw new Error("Matrix dimensions do not match for multiplication");
    }

    // Initialize result matrix with zeros
    const result = Array(rowsA).fill(0).map(() => Array(colsB).fill(0));
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}

// Generate large matrices
const size = 200;
const matrixA = Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => i + j)
);
const matrixB = Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => i * j)
);

// Benchmark matrix multiplication
console.time("JavaScript Matrix Multiplication");
matrixMultiply(matrixA, matrixB);
console.timeEnd("JavaScript Matrix Multiplication");
