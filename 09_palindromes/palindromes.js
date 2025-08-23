const palindromes = function (word) {
    const nopunc = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = nopunc.split("").reverse().join("");
    if(nopunc === reversed){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
