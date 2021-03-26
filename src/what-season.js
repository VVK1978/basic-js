const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date)==='undefined') return 'Unable to determine the time of year!'
  if ( Object.prototype.toString.call(date) !='[object Date]') throw new Error('THROWN');
let getSeason = function(month){
  if ([11,0,1].includes(month)){
    return 'winter';
  }
  if ([2,3,4].includes(month)) {
    return 'spring';
  }
  if ([5,6,7,].includes(month)) {
    return 'summer';
  }
  if ([8,9,10].includes(month)) {
    return 'autumn';
  }
return false;
}
let month=date.getMonth();
return getSeason(month);
};
