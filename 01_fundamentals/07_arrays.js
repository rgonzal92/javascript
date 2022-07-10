// create arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// get array length
val = numbers.length; // 7

// check if array
val = Array.isArray(numbers); // true

// get single element
val = numbers[0]; // first element
val = numbers[3]; // fourth element

// replace an element
numbers[2] = 100;

// find index of value
val = numbers.indexOf(36); // 5

// mutating arrays
numbers.push(250); // append an element
numbers.unshift(120); // insert at the beginning
numbers.pop(); // remove last element
numbers.shift(); // remove first element
numbers.splice(1, 3); // start, delete count
numbers.reverse(); // reverse array

// concatenate array
val = numbers.concat(numbers2);

// sort array
val = fruit.sort();
// error: sorts by first element of each number
val = numbers.sort();

// use the compare function to fix numbers.sort()
// smallest to largest
val = numbers.sort(function (x, y) {
  return x - y;
});

// reverse sort [largest to smallest]
val = numbers.sort(function (x, y) {
  return y - x;
});

// find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
