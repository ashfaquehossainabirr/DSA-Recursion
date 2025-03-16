// Recursion in Javascript

// Q: Create a recursive function for factorial(n) --> "n can be any number"
// (n = 5) --> factorial(5) => 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
    if(n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))


//==> Visualization

// factorial(5)
// return --> 5 * factorial(4)
// return --> 5 * 4 * factorial(3)
// return --> 5 * 4 * 3 * factorial(2)
// return --> 5 * 4 * 3 * 2 * factorial(1)
// return --> 5 * 4 * 3 * 2 * 1 * factorial(0)
// return --> 5 * 4 * 3 * 2 * 1 * 1
// Output = 120