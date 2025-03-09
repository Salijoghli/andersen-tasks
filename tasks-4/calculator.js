const isValid = (number) => isNaN(number) || isFinite(number);

class Calculator {
  #x;
  #y;

  constructor(x, y) {
    if (!isValid(x) || !isValid(y)) {
      throw new Error("Invalid number(s)");
    }
    this.#x = x;
    this.#y = y;
  }

  setX(x) {
    if (!isValid(x)) {
      throw new Error("x isn't a number");
    }
    this.#x = x;
  }

  setY(y) {
    if (!isValid(y)) {
      throw new Error("y isn't a number");
    }
    this.#y = y;
  }

  logSum = () => this.#x + this.#y;

  logSub = () => this.#x - this.#y;

  logMul = () => this.#x * this.#y;

  logDiv = () => {
    if (this.#y === 0) {
      throw new Error("You can't divide by zero");
    }
    return this.#x / this.#y;
  };
}

const myCalc = new Calculator(1, 23);

myCalc.setX(11);

const logSumRef = myCalc.logSum;
const logDivRef = myCalc.logDiv;

console.log(myCalc.logSum());
console.log(logSumRef());
console.log(logDivRef());
