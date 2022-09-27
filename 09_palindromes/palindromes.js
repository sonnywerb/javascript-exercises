const palindromes = function (str) {
    let start = 0;
    let end = str.length - 1;
    str = str.toUpperCase();

    while (start <= end) {
        let startLetter = str.charAt(start);
        let endLetter = str.charAt(end);
        while (!isLetter(startLetter)) {
            start++;
            startLetter = str.charAt(start);
        }
        while (!isLetter(endLetter)) {
            end--;
            endLetter = str.charAt(end);
        }
        if (str.charAt(start) !== str.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};

function isLetter(char) {
    if (char.match(/[a-zA-Z]/i)) {
        return true;
    }
}

console.log(palindromes('Racecar!'));

// Do not edit below this line
module.exports = palindromes;
