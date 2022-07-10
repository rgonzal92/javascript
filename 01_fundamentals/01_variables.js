// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// Init var
var greeting; // undefined
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letters, numbers, _, $
// Can not start with number
var $valid = 'John';
var _valid = 'Doe';

// Multi word vars
var firstName = 'John'; // Camel case, preferred
var first_name = 'Sara'; // Snake case
var FirstName = 'Tom'; // Pascal case
var firstname;

// let
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// const
const name = 'John';
console.log(name);
// cannot change a constant
// name = 'Steve';
// console.log(name);

const person = {
  name: 'John',
  age: 30,
};

// valid
person.name = 'Sara';
person.age = 32;

// console.log(person);

// arrays can change data
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // valid

console.log(numbers);
