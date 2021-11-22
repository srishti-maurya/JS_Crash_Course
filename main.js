// constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

//prototype
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

//Instantiate object
const person1 = new Person("John", "Doe", "4-3-1990");
const person2 = new Person("Mary", "Smith", "3-6-1970");

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);
