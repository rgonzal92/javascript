// for loop
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite');
    continue;
  }

  if (i === 5) {
    console.log('stop the loop');
    break;
  }

  console.log(`Number: ${i}`);
}

// while loop
let i = 0;
while (i < 10) {
  console.log('Number ' + i);
  i++;
}

// do while
i = 0;
do {
  console.log(`Number ${i}`);
  i++;
} while (i < 10);

// loop through array
const cars = ['ford', 'chevy', 'toyota', 'honda'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// preferred
cars.forEach(function (car, index, array) {
  console.log(`${index}: ${car}`);
  console.log(array);
});

// map
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 100,
};

// for in
for (let x in user) {
  console.log(`${x}: ${user[x]}`);
}
