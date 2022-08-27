// turn the arguments into an array 
// args[0] will be the input array and args[i] will be the target elements to remove
// loop through the args
// loop through the input array, if the args[i] === arr[j] then we will remove arr[j]
// return arr

// we will iterate through the arr
// if the arr[i] === element then we will remove that item from the arr
// return the arr
const removeFromArray = function(arr, element) {
    const args = Array.from(arguments);
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
