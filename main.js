// arrays

//using constructor
const number = new Array("1,2,3,4");
console.log(number);

const fruits = ["apples", "oranges", "pears"];
console.log(fruits);
//accessing elements in array
console.log(fruits);
//added an ele
fruits[3] = "grapes";
console.log(fruits);

fruits.push("mangoes"); //adds to the last
fruits.unshift("strawberries"); //adds to the start

fruits.pop; //deletes the last ele
console.log(fruits);

console.log(Array.isArray("hello")); //checks an arr

console.log(fruits.indexOf("oranges"));

//objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person);
console.log(person.lastName, person.firstName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//destructing

const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(city);

//adding properties

person.email = "test@gmail.com";
console.log(person);
