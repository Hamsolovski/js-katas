/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO add your code here

function sum(numbers) {
    if (!numbers || numbers.length === 0 || numbers === null) {
        return 0
    } else {
        let sum = 0;
        for (let number of numbers) {
            if (number % 2 != 0) 
                sum += number
        } 
        return sum
    }
}

module.exports = sum;
