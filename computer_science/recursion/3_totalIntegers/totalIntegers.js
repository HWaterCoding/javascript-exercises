const totalIntegers = function(items){
    
    if(!Array.isArray(items) && (typeof items !== "object" || items === null)) {
        return undefined
    }

    function countInts(items){
        if(Array.isArray(items)){
            let sum = 0;
            for(const item of items){
                if(typeof item === "number" && item % 1 === 0){
                    sum++;
                }
                else{
                    sum += countInts(item);
                }
            }
            return sum;
        } 
    
        if (typeof items === 'object' 
            && items !== null 
            && !Array.isArray(items)
        ){
            let sum = 0;
            for(const key in items){
                const current = items[key];
                if(typeof current === "number" && current % 1 === 0){
                    sum++;
                }
                else{
                    sum += countInts(current);
                }
            }
            return sum;
        }

        return 0;
    }
    
    return countInts(items);
};
  
// Do not edit below this line
module.exports = totalIntegers;

