const fs = require("fs");

console.time("JavaScript File I/O");
fs.readFileSync("pg100.txt", "utf8");
console.timeEnd("JavaScript File I/O");