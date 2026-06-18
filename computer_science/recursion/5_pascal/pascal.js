const pascal = function(n) {
    if(n === 1){return [1]};

    const previousRow = pascal(n - 1);

    const result = [];

    for(let i = 0; i <= previousRow.length; i++){
        const firstValue = previousRow[i - 1] ?? 0;
        const secondValue = previousRow[i] ?? 0;
        const newValue = firstValue + secondValue;
        result.push(newValue);
    }

    return result;
};
  
const firstRow = [1];
const secondRow = [0+1, 1+0];
const thirdRow = [0+1, 1+1, 1+0]; //[1, 2, 1]
const fourthRow = [0+1, 1+2, 2+1, 1+0]; //[1, 3, 3, 1]
const fifthRow = [0+1, 1+3, 3+3, 3+1, 1+0];


pascal(5); [1, 4, 6, 4, 1]
pascal(4); [0, 1, 3, 3, 1, 0]
pascal(3); [0, 1, 2, 1, 0]
pascal(2); [1, 1]
pascal(1); [1]


// Do not edit below this line
module.exports = pascal;
