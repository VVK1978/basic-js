const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var result = [].concat(...matrix);
  var n=0;
  for (i=0; i<=result.length ; i++) {
    if (result[i] == '^^') {
         n=n+1;
    } 
   }
   return n;
  };
