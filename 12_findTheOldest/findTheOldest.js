const findTheOldest = function(people) {
   return people.reduce( (oldest, person) => {
      const oldestAge = getAge(oldest);
      const age =  getAge(person);
      return oldestAge < age ? person : oldest
   });
};

const getAge = function(person){
   return (!person.yearOfDeath ? new Date().getFullYear() : person.yearOfDeath) - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
