const firstName = 'Richard';
const lastName = 'Gonzalez';
const age = 30;
const str = 'Hello there, my name is Richard';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// concatenation
val = firstName + ' ' + lastName;

// append
val = 'Richard ';
val += 'Gonzalez';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// escaping
// prettier-ignore
val = 'That\'s awesome, I can\'t wait';

// length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// string indexing
val = firstName[0];

// indexOf()
val = firstName.indexOf('h'); // 3 from Richard
val = lastName.lastIndexOf('z'); // 7 from Gonzalez

// charAt()
val = firstName.charAt(3); // 'h'

// get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4); // Rich

// slice()
val = firstName.slice(0, 4); // Rich
val = firstName.slice(-3); // ard

// split()
val = str.split(' '); // space as seperator
val = tags.split(','); // comma as seperator

// replace()
val = str.replace('Richard', 'Anon');

// includes()
val = str.includes('Hello'); // true
val = str.includes('world'); // false

// output
console.log(val);
