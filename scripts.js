// start with strings, numbers and booleans

// Let's say we have an array 

// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;

// let firstName = "Eve";
// let firstName2 = firstName;
// console.log(firstName, firstName2);
// firstName = "Evgeniya";
// console.log(firstName, firstName2);

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[2] = 'Lux';

// however what happens when we update that array? 

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice(); 

// or create a new array and concat the old one in 
const team3 = [].concat(player);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const capitan = person;
capitan.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });

// We will hopefully soon see the object ...spread
// const cap3 = {...person}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const eve = {
  firstName: "Eve",
  age: 21,
  social: {
    twitter: "@eve",
    facebook: 'eve.developer'
  }
}

const dev = Object.assign({}, eve);

// not recomended way: (poor performance)
const dev2 = JSON.parse(JSON.stringify(wes));


console.log(eve);


