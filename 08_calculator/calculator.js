const add = function(a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
  let diff = a - b;
  return diff;
};

const sum = function(array) {
  return array.reduce((total, item) => total + item, 0);
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  let result = 1;
  for(let i = 1; i <= num; i++){
    result *= i;
  }
  return result;
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
