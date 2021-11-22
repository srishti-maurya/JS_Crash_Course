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

//forEach, map, filter

todos.forEach((element) => {
  console.log(element.text);
});

// map returns an array
const todoText = todos.map((element) => {
  return element.text;
});
console.log(todoText);

//filter
const todoCompleted = todos
  .filter((element) => {
    return element.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todoCompleted);
