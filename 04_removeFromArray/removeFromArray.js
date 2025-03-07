const removeFromArray = function(arr, ...extra) {
    arr = arr.filter(item => !extra.includes(item));
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
