//conditional

const x = 4;
const y = 10;

if (x === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

if (x > 5 && y > 10) {
  console.log("x is more than 5 or y is more than 10");
}

//ternary operator
const z = 10;
const color = z > 10 ? "red" : "blue";
console.log(color);

//switches
switch (color) {
  case "red":
    console.log("color is red");
    break;

  case "blue":
    console.log("color is blue");
    break;

  default:
    console.log("color is not blue or red");
    break;
}
