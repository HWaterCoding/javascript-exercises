const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || 
       num1 % 1 !== 0 || num2 % 1 !== 0 ||
       !Number.isInteger(num1) || !Number.isInteger(num2)
    ){
        return "ERROR";
    }
    
    let finalSum = 0;

    if(num1 <= num2){
        for(let i = num1; i <= num2; i++){
            finalSum = finalSum + i;
        }
    } else if(num1 > num2){
        for(let i = num1; i >= num2; i--){
            finalSum = finalSum + i;
        }
    }
    return finalSum
};


sumAll(2, 4);

// Do not edit below this line
module.exports = sumAll;
