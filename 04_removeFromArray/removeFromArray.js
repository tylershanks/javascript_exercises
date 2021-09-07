
const removeFromArray = function(first, ...rest) {

    for (let i = first.length-1; i>=0; i--) {
        for (let j = rest.length-1; j>=0; j--) {
            if (first[i] === rest[j]) {
                first.splice(i, 1)
            }
        }
    }
    return first;
};



module.exports = removeFromArray;
