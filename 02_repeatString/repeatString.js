const repeatString = function(string, number) {

    if (number >= 0) {
        finalString = string.repeat(number);
    }
    else (
        finalString = "ERROR"
    )

    return finalString;

};

module.exports = repeatString;
