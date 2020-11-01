const CustomError = require("../extensions/custom-error");
let i = 1;
module.exports = class DepthCalculator {
  calculateDepth(arr) {
	let newArr = []
for (i=1; i < Infinity; i++){
	newArr = arr.flat()
if (JSON.stringify(newArr) ===JSON.stringify(arr)){
	return i
}else 
arr = newArr
}return false
}
}