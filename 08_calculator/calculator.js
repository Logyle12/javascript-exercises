const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const total = array.reduce((runningTotal, currentValue) => runningTotal + currentValue, 0);
  return total;
};

const multiply = function(array) {
  const multiplyTotal = array.reduce((runningTotal, currentValue) => runningTotal * currentValue);
  return multiplyTotal;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let runningTotal = 1;
	for (let index = a; index >= 1; index--) {
    runningTotal *= index;
  }
  return runningTotal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
