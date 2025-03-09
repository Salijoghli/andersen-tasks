// TODO:
// Write a function add that will work like that:
// add(1,2) 3
// add(1)(2)  3

function add(number1, number2 = undefined) {
  if (number2 === undefined) return (number) => number1 + number;
  return number1 + number2;
}

console.log(add(1)(2));
console.log(add(1, 2));
