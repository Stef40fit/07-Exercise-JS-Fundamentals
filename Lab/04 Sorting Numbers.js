function sortAlternately(arrayOfNumbers) {
    "use strict";

    // Sort the array in ascending order
    arrayOfNumbers.sort((a, b) => a - b);

    // Initialize an empty result array
    let resultArray = [];

    // Use two pointers to traverse the sorted array from both ends
    let left = 0;
    let right = arrayOfNumbers.length - 1;

    while (left <= right) {
        // Add the smaller element to the result array
        resultArray.push(arrayOfNumbers[left]);

        // If there are still elements left, add the larger element
        if (left !== right) {
            resultArray.push(arrayOfNumbers[right]);
        }

        // Move the pointers
        left++;
        right--;
    }

    return resultArray;
}

// Example usage
let inputArray = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];
let result = sortAlternately(inputArray);
console.log(result);

//solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);