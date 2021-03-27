const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator='|' ,
  }
) {
  let result = "";
  if (!repeatTimes) {
    return (result = str + addition);
  }
  for (j = 1; j < repeatTimes + 1; j++) {
    result += str;

    if (!additionRepeatTimes && addition) {
      result += addition;
    }
    for (i = 1; i < additionRepeatTimes + 1; i++) {
      if (i != additionRepeatTimes) {
        result += addition + additionSeparator;
      } else {
        result = result + addition;
      }
    }
    if (j != repeatTimes) {
      result += separator;
    } else {
      result = result;
    }
  }
  return result;
};
