const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) == true){
    for (i=0; i<= members.length-1; i++){
      if (typeof(members[i]) != 'string'){
         members.splice(i,1)
         i=i-1
   }
}
return (members.join(',').toUpperCase().replace(/\s/g,'').split(',')).sort().map(x => x[0]).join('');
} else return false;
};
