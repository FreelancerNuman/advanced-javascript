// If any number value 0 than it will give a false boolean value
// if any string value empty, than it will give a false boolean value
// if any value null or undefined than it will give a false value
// if any value NaN than it will give a false value

// if any value have '0' , ' ', {}, [] it will give a true value.
// age = 0;

let age = ``;
console.log(age);
if (age) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}
