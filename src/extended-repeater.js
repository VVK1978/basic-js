const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (!options.repeatTimes) {
    return (result = str + options.addition);
  }
  for (j = 1; j < options.repeatTimes + 1; j++) {
    result += str;

    if (!options.additionRepeatTimes && options.addition) {
      result += options.addition;
    }
    for (i = 1; i < options.additionRepeatTimes + 1; i++) {
      if (i != options.additionRepeatTimes) {
        result += options.addition + options.additionSeparator;
      } else {
        result = result + options.addition;
      }
    }
    if (j != options.repeatTimes) {
      result += options.separator;
    } else {
      result = result;
    }
  }
  return result;
};
