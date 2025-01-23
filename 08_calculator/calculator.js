const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const total = array.reduce((runningTotal, currentValue) => runningTotal + currentValue);
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
