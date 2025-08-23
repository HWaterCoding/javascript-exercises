// const findTheOldest = function(people) {
//     return people.sort((a, b) => {
//         const firstPerson = a.yearOfDeath - a.yearOfBirth;
//         const secondPerson = b.yearOfDeath - b.yearOfBirth;
//         return secondPerson - firstPerson;
//     })
// };

const getAge = function(person){
    const currentYear = new Date().getFullYear();
    if(!person.yearOfDeath){
        return currentYear - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people){
    return people.reduce((oldest, current) =>{
        const oldestAge = getAge(oldest);
        const currentAge = getAge(current);
        if(currentAge > oldestAge){
            return current;
        } else{
            return oldest;
        }
        });
}
// Do not edit below this line
module.exports = findTheOldest;
