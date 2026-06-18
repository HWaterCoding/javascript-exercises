const permutations = function(arr) {
    if(arr.length === 0){return [[]]};
    if(arr.length === 1){return [arr]};

    const firstNum = arr[0];
    const restOfArr = arr.slice(1);

    const smallerPerms = permutations(restOfArr);

    const allPerms = [];

    for(const perm of smallerPerms){
        for(let i = 0; i <= perm.length; i++){
            const newPerm = [
                ...perm.slice(0, i),
                firstNum,
                ...perm.slice(i)
            ]
            allPerms.push(newPerm);
        }
    }
    return allPerms;
};
  
// Do not edit below this line
module.exports = permutations;