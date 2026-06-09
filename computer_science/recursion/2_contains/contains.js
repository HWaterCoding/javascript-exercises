const contains = function(object, searchValue) {
    for (const key in object) {
        const current = object[key];
        if(
            current === searchValue ||
            Number.isNaN(current) && Number.isNaN(searchValue)
        ){
            return true;
        }
        if(
            typeof current === "object" &&
            current !== null
        ){
            if(contains(current, searchValue)){
                return true;
            }
        }
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
