const reverseString = function(str) {
    const letters = str;
    let finalString = ''

    for (let i = str.length-1; i >= 0; i--) {
        
        finalString += letters[i];
    }
    return finalString;
};

module.exports = reverseString;
