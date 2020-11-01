const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  for (i=0;i<=arr.length-1;i++){
  if (arr[i] =='--discard-next') {
  newArr[i] = '-';
  newArr[i+1] = '-';
  i=i+1
  }else 
  if(arr[i] == '--discard-prev') {
  newArr[i-1]='-'
  } else
  if (arr[i] == '--double-next'){
  newArr [i] = arr[i+1]
  } else 
  if(arr[i] == '--double-prev'){
  newArr[i] = newArr[i-1]
  }else
  newArr [i] = arr[i]
  }
  return newArr.filter(x=> x!='--discard-next'&& x!='--discard-prev' && x!='--double-prev' && x!='--double-next' && x!=undefined && x!='-');
}