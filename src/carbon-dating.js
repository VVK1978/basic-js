const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || Number.parseFloat(sampleActivity) <=0 || Number.parseFloat(sampleActivity) >15) {
    return false;
  }
  n = Number.parseFloat(sampleActivity);
  if (n.toString() != sampleActivity) {
    return false;
  } else {
    var k = Math.log(2) / HALF_LIFE_PERIOD;
    t = Math.ceil(Math.log(MODERN_ACTIVITY / n) / k);
    return t;
  }
};
