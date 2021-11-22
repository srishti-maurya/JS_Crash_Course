// variables in js

/*
 var - globally scoped
let, const - block scoped 

let - can be reassigned a value 
const - cannot be reassigned a value 
 */

let age = 30; // here const cannot be used
console.log(age);
age = 31;
console.log(age);

//datatypes in js

/*
String, Number, Boolean, null, undefined ,Symbol
*/

const name = "John";
const aged = 31;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //undefined

console.log(typeof name); //shows the datatype of variable

//concatenation
console.log("my name is " + name + " and i am " + age);
//template string
const hello = `my name is ${name} and i am ${age}`;
console.log(hello);

//string methods

const s = "hello world!";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));

const text = "technology, computers, it, code";
console.log(text.split(", "));
