/* 
Primitive data types - values are being accessed
Stored directly in the location the variable accesses
Stored on the stack

* String
* Number
* Boolean
* Null
* Undefined
* Symbols (ES6)

Reference data types - accessed from memory
Accessed by a reference
Objects that are stored on the heap
A pointer to a location in memory

* Arrays
* Object literals
* Functions
* Dates
* Anything else...

JavaScript is a dynamically typed language
*/

// String
const name = 'John Doe';
console.log(name);

// Number
const age = 30;
console.log(age);

// Boolean
const hasKids = true;
console.log(hasKids);

// Null
const car = null;
console.log(car);
console.log(typeof car); // outputs typeof object

// Undefined
let test;
console.log(test);

// Symbol
const sym = Symbol();
console.log(sym);

// Reference types

// Array
const hobbies = ['movies', 'music', 'games'];
console.log(hobbies);

// Object literal
const address = {
  city: 'Houston',
  state: 'TX',
};
console.log(address);

// Date
const today = new Date();
console.log(today);
