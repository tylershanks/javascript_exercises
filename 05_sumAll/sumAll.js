const sumAll = function(firstNum, lastNum) {

    let sum = 0;

    if (firstNum < lastNum && firstNum > 0 && lastNum > 0 && typeof firstNum === 'number' && typeof lastNum === 'number') {
        for(i = firstNum; i <= lastNum; i++) {

            sum += i;
        }
    }

    else if (firstNum > lastNum && firstNum > 0 && lastNum > 0 && typeof firstNum === 'number' && typeof lastNum === 'number') {

        for(i = lastNum; i <= firstNum; i++) {

            sum += i;
        }
    }

    else {
        sum = 'ERROR';
    }
    

return sum;

};

module.exports = sumAll;
