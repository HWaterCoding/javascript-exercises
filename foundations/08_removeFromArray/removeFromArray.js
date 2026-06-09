let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3]

const removeFromArray = function(myArray, ...arg) {
    const newArray = [];
    myArray.forEach(function removeElement(element){
        if(!arg.includes(element)){
           newArray.push(element); 
        }
    }
);
    return newArray;
};

removeFromArray(myArray, 3, 6);

// Do not edit below this line
module.exports = removeFromArray;
