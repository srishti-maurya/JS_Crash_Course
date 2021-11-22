// array of objects

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 1,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 1,
    text: "Dentist appointment",
    isCompleted: false,
  },
];
console.log(todos);

console.log(todos[1].text);

//converting to json

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loop
for (let i = 0; i <= 10; i++) {
  console.log(`For loop Number ${i}`);
}

//while loop
let i = 0;
while (i < 10) {
  console.log(`while loop Number ${i}`);
  i++;
}

//looping through an array

// for (let j = 0; j <= todos.length; j++) {
//   console.log(todos[j].text);
// }

for (let todo of todos) {
  console.log(todo.text);
}
