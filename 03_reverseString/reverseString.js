// function will take in a string parameter
// check if the string is empty, if it is return empty string
// initialize a variable at the last character in the string
// iterate backwards through the string and append the character to a results string
// return results string
const reverseString = function(word) {
    let reversedWord = '';

    if (word === '') {
        return reversedWord;
    }

    for (i = word.length - 1; i >= 0; i--) {
        let char = word.charAt(i);
        reversedWord += char;
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
