const palindromes = function (word) {
    const reversed = function(string){
        string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
        let reversedLst = []
        for (const i of string){
            reversedLst.unshift(i);
        }
        let reversedString = reversedLst.join("");
        return reversedString;
    }
    if (reversed(word).toLowerCase() === word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"")){
        
        return true;
    }
    else return false;

};
console.log(palindromes("A car, a man, a maraca."));



// Do not edit below this line
module.exports = palindromes;
