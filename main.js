//functions

function addNums(num1, num2) {
  return num1 + num2;
}
console.log(addNums(5, 4));

//default params
function addNums(num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}
addNums();

//arrow functions
const addNum = (num1, num2) => num1 + num2;
console.log(addNum(1, 2));
