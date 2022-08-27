// using a rest parameter
const removeFromArray = function(...args) {
    const arr = args[0];
    let i = 1;
    while (i < args.length) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] === args[i]) {
                arr.splice(j, 1);
            }
        }
        i++;
    }
    return arr;
};

// console.log(removeFromArray([1,2,3,4], 1, 4));
// Do not edit below this line
module.exports = removeFromArray;
