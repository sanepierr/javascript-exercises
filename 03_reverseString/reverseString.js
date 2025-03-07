const reverseString = function(string) {
    reversedLst = [];
    splitLst = string.trim().split(' ');
    for (let i of splitLst){
        prototype = [];
        for(let k = i.length - 1, j = 0; j <= k; k--){
            prototype.push(i[k]);
        }
        prototype = prototype.join('');
        reversedLst.push(prototype);
        
    }
    return String((reversedLst.reverse().join(' ')));
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
