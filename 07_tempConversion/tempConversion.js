const convertToCelsius = function(temperature) {
  temperature = (temperature - 32) * (5/9);
  return roundToDecimalPlaces(temperature, 1);
  
};

const convertToFahrenheit = function(temperature) {
  temperature = (temperature * (9/5)) + 32;
  return roundToDecimalPlaces(temperature, 1);
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
