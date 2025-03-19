// Recursion in Javascript

// Q: Create an array with range of numbers
// Input: Start = 1, End = 5 ---> Output: [1, 2, 3, 4, 5]


function rangeOfNumbers(startNum, endNum) {
    if(endNum < startNum) {
        return []
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1)
        numbers.push(endNum)

        return numbers
    }
}

console.log(rangeOfNumbers(1, 5))


// Visualization

// rangeOfNumbers(1, 5) => [1, 2, 3, 4, 5]
// rangeOfNumbers(1, 4) => [1, 2, 3, 4]
// rangeOfNumbers(1, 3) => [1, 2, 3]
// rangeOfNumbers(1, 2) => [1, 2]
// rangeOfNumbers(1, 1) => [1]
// rangeOfNumbers(1, 0) => []

// console.log => print -> [1, 2, 3, 4, 5]
// Ouput: [1, 2, 3, 4, 5]