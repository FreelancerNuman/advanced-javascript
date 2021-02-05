// scope is limitation of variable to in dom(o.p)
let bonus = 20;

function add(first, second) {
  // we can access bonus variable from anywhere
  const result = first + second + bonus;
  if (result > 9) {
    const mood = "happy";
    console.log(mood);
  }
  return result;
}

const output = add(5, 8);
// we can't access result from outside
// console.log(result);
console.log(output);
