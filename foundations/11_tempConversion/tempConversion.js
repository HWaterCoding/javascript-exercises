const convertToCelsius = function(fahrenheit) {
  temp = (fahrenheit - 32) * (5/9);
  return Number(temp.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  temp = celsius * 9 / 5 + 32;
  return Number(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
