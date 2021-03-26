const CustomError = require("../extensions/custom-error");
let i = 1;
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr)
      ? 1 + arr.reduce((max, item) => Math.max(max, this.calculateDepth(item)),0)
      : false;
  }
};
