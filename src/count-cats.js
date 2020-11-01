const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  var result = [].concat(...matrix);
  var n=0;
  for (i=0; i<=result.length ; i++) {
    if (result[i] == '^^') {
         n=n+1;
    } 
   }
   return n;
  };
