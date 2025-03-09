Create a Calculator class. The constructor accepts two numbers, if at least one is not valid, it throws an error. We do not consider Infinity and other special values of the number type to be valid numbers. Methods:
setX() - sets the first number
setY() - sets the second number

logSum() - returns the sum of the given numbers
logMul() - returns the product of the given numbers
logSub() - returns the difference of the given numbers
logDiv() - returns the quotient of the given numbers, throws an error when dividing by 0.

All methods of the second group should work correctly even if they are placed in a separate variable

const logSumRef = calculator.logSum;
console.log(logSumRef()); // still works
