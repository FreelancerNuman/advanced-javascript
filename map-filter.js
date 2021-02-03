const numbers = [3, 5, 6, 2, 6, 7, 9];
const output = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  output.push(result);
}

// an elegant way to solve a problem by using map
numbers.map(function (element, index, array) {
  console.log(element, index, array);
});

console.log(output);

const result = numbers.map(function (element) {
  return element * element;
});

const result = numbers.map((element) => element * element);
console.log(result);

// filter
const numbers = [43, 53, 64, 23];
const bigger = numbers.filter((x) => x > 50);
console.log(bigger);

// find
const numbers = [43, 53, 64, 23];
const smaller = numbers.find((x) => x < 50);
console.log(smaller);
