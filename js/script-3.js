// Loops vs Recursion

const numbers = [1, 2, 3, 4, 5]

// Using Loops:

// function multiply(arr) {
//     let product = 1

//     for(let i = 0; i < arr.length; i++) {
//         product *= arr[i]
//     }

//     return product
// }

// console.log(multiply(numbers))


// Using Recursion:

function multiply(arr) {
    if(arr.length <= 0) {
        return 1
    } else {
        return arr[arr.length - 1] * multiply(arr.slice(0 , arr.length - 1))
    }
}

console.log(multiply(numbers))



// Visualization of this Recursion

// First Iteration: 5 * multiply([1, 2, 3, 4])
// Second Iteration: 5* 4 * multiply([1, 2, 3])
// Third Iteration: 5 * 4 * 3 * multiply([1, 2])
// Fourth Iteration: 5 * 4 * 3 * 2 * multiply([1])
// Fifth Iteration: 5 * 4 * 3 * 2 * 1 * multiply([])
// Final Iteration: 5 * 4 * 3 * 2 * 1 * 1

// So, Result will be --> 5 x 4 x 3 x 2 x 1 x 1 = 120