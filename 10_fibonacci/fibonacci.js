const fibonacci = function(num) {
    const converted = Number(num);
    if(converted === 0){return 0};
    if(converted < 0){return "OOPS"};
    const array = [1, 1];
    for(let i = 0; i < converted - 2; i++){
        const lastValue = array[array.length - 1];
        const prevValue = array[array.length - 2];
        const sum = lastValue + prevValue;
        array.push(sum);
    }
    return array[array.length - 1];
};

fibonacci("4")

// Do not edit below this line
module.exports = fibonacci;
