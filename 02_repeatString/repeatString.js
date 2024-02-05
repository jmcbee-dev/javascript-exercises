const repeatString = function(str, rep) {
   if(rep < 0)  return "ERROR";

   if(rep == 0) return '';
   
   return str + repeatString(str, rep - 1);
};

// Do not edit below this line
module.exports = repeatString;
