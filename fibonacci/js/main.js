const fibonacci = (n) => {
    if (n <= 1) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
};

console.time("JavaScript Fibonacci");
fibonacci(33);
console.timeEnd("JavaScript Fibonacci");