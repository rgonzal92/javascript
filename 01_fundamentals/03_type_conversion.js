// type conversion
let val;

// number to string
val = String(5);

// bool to string
val = String(true);

// date to string
val = String(new Date());

// array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// string to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3]);

val = parseInt('100');
val = parseFloat('100.30');

// output
console.log(val);
console.log(typeof val);

// type cohersion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2; // becomes a string

console.log(sum);
console.log(typeof sum);
