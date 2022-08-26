const repeatString = function(string, n) {
    // create a variable to hold the string
    // loop n times and on each iteration we append the string to the variable
    // return the string
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
