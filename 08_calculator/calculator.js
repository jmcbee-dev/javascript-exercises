const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {  
  return numbers.reduce( (pre, current) => pre + current, 0);
};


const multiply = function(numbers) {
  return numbers.reduce( (pre, current) => pre * current, 1);
};

const power = function(base, pow) {
	return base ** pow;
};

const factorial = function(num) {
  if(num < 0) return "ERROR";
	return (num === 0) ? 1 : num*factorial(num - 1);
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
