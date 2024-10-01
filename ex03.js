// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let sum = n * (n + 1) / 2;
    let arrSum = arr.reduce((acc, curr) => acc + curr);
    return sum - arrSum;
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3