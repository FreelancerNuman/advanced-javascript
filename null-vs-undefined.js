// Those condition will show result in undefined

let fahiyan;

function add(num1, num2) {
  console.log(num1 + num2);
  return;
}
var result = add(34, 64);
console.log(result);

function add(num1, num2) {
  console.log(num1, num2);
}
var result = add(34);
console.log(result);

var objects = { name: "Fahiyan", id: 4324 };
console.log(objects.address);

// not recommended in coding
let fun = undefined;
console.log(fun);

const friends = [4, 53, 64];
console.log(friends[5]);
