// function declarations
function greet(firstName = 'John', lastName = 'Doe') {
  // console.log('Hello');
  return `Hello ${firstName} ${lastName}`;
}

console.log(greet('Richard'));

// function expressions
const square = function (x = 0) {
  return x * x;
};

console.log(square(8));

// immediately invokable function expressions - IIFEs
(function () {
  console.log('IIFE ran...');
})();

(function (name) {
  console.log(`Hello ${name}`);
})('Richard');

// property methods
const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
