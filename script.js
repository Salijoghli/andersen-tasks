// number into binary

const transform = (number) => {
  if (number == 0) return 0;
  let binary = "";
  let remainder;
  while (number !== 0) {
    remainder = number % 2;
    number = Math.floor(number / 2);
    binary = remainder + binary;
  }
  return binary;
};

console.log(transform(12));
