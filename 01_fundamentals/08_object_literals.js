const person = {
  firstName: 'Richard',
  lastName: 'Gonzalez',
  age: 30,
  email: 'richard@local',
  hobbies: ['video games', 'programming'],
  address: {
    city: 'Houston',
    state: 'TX',
  },
  getBirthYear: function () {
    return 2022 - this.age; // must use this keyword to access object
  },
};

let val;

val = person;

// get specific value
val = person.firstName; // preferred
val = person['firstName'];
val = person.age;
val = person.email;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
