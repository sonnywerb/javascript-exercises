/*
- initialize a sum variable
- create a loop that starts with i = start and ends when we reach the end input
- for each iteration we will add i to the sum
- return sum once we reach end of the loop
*/
const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0)
        return 'ERROR';
    if (a > b) {
        const temp = a;
        a = b;
        b = temp;
    }
    let sum = 0;
    for (i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;


/*
(1,4)
1 + 2 + 3 + 4
= 10
*/
