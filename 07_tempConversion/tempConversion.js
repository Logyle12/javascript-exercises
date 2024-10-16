const convertToCelsius = function(temperature) {
  temperature = (temperature - 32) * (5/9);
  return roundToDecimalPlaces(temperature, 1);
  
};

const convertToFahrenheit = function(temperature) {
  temperature = (temperature * (9/5)) + 32;
  return roundToDecimalPlaces(temperature, 1);
};

const roundToDecimalPlaces = (num, decimalPlaces) => {
  const factor = Math.pow(10, decimalPlaces); // Calculate 10 to the power of the number of decimal places
  return Math.round(num * factor) / factor; // Round and divide back
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
