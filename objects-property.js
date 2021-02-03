const students = [
  { id: 23, name: "David" },
  { id: 45, name: "Amir" },
  { id: 50, name: "Jhon" },
  { id: 33, name: "Sonny" },
];

const names = students.map((element) => element.name);
const id = students.map((element) => element.id);
const bigger = students.filter((element) => element.id > 40);
const smallest = students.find((element) => element.id < 30);
console.log(smallest);
