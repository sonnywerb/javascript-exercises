const repeatString = function(string, n) {
    if (n < 0) {
        return 'ERROR'
    }
    let result = '';
    let i = 1;
    while (i <= n) {
        result += `${string}`;
        i++;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
