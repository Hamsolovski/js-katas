/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here

function min(numbers) {
    if (!numbers || numbers.length == 0)
        return null;
    else {
        let smallestNumber = numbers[0]
        for (let i = 0; i < numbers.length; i++) {
            if (smallestNumber > numbers[i])
                smallestNumber = numbers[i];
        }
        return smallestNumber;

    }
}

module.exports = min;
