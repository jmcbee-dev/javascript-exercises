const sumAll = function(num1, num2) {
   if(num1 < 0 || num2 < 0 || 
      typeof(num1) !== 'number' || 
      typeof(num2) !== 'number' ) return "ERROR";
   
   if(num1 > num2) return sumAll(num2, num1);

   let sum = 0;
   for(; num1 <= num2; num1++) 
      sum += num1;
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
