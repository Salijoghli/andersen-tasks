// number into binary
const transform = (number) => {
  if (number == 0) return 0;
  let binary = "";
  let remainder = 0;
  while (number !== 0) {
    remainder = number % 2;
    number = Math.floor(number / 2);
    binary = remainder + binary;
  }
  return binary;
};

const number = document.querySelector("input");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(transform(number.value));
});
