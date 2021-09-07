const ftoc = function(degsF) {
  conversionC = (degsF + 459.67)/1.8 - 273.15;
 
  return Number(conversionC.toFixed(1));

};

const ctof = function(degsC) {
  conversionF = 1.8*(degsC + 273.15) - 459.67;

  return Number(conversionF.toFixed(1));

};

module.exports = {
  ftoc,
  ctof
};
