const convertToCelsius = function(temp) {
  temp_cel = (temp - 32) * 5/9;
  return Math.round(temp_cel * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let temp_fah = (temp * 9/5) + 32;
  return Math.round(temp_fah  * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
