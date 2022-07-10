const num1 = 100;
const num2 = 50;
let val;

// simple math
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8); // 3
val = Math.ceil(2.1); // 3
val = Math.floor(2.9); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8, 2); // 64
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2); // -2
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); // 55
val = Math.random(); // random number between 0-1

// formula to generate random integers from a range (e.g., 20)
val = Math.floor(Math.random() * 20 + 1);

// output
console.log(val);
