const id = '100';

// equal to
if (id == 100) {
  console.log(true);
} else {
  console.log(false);
}

// not equal to
if (id != 100) {
  console.log(true);
} else {
  console.log(false);
}

// equal to value and type
if (id === 100) {
  console.log(true);
} else {
  console.log(false);
}

// not equal to value and type
if (id !== 100) {
  console.log(true);
} else {
  console.log(false);
}

// test if undefined
if (typeof id !== 'undefined') {
  console.log(true);
} else {
  console.log(false);
}

// greater or less than
if (id > 200) {
  console.log(true);
} else {
  console.log(false);
}

// if else
const color = 'yellow';

if (color === 'red') {
  console.log('color is red');
} else if (color === 'blue') {
  console.log('color is blue');
} else {
  console.log(`color is not red or blue`);
}

// logical operators
const name = 'Richard';
const age = 30;

// and &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age < 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// or ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// ternary operator
console.log(id === 100 ? 'correct' : 'incorrect');

// without braces
if (id === 100) console.log('correct');
else console.log('incorrect');
