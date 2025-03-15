// Recursion in Javascript

// Q: Subsets (Backtracking Algorithm using Javascript)
// Given an integer array of nums of unique elements, return all possible subsets (the power set)
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1, 2, 3] --> Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
// Input: [0] --> Output: [[], [0]]


function subsets(nums) {
    let temp = []
    let result = []

    function recursiveSubsets(nums, i) {
        if(i === nums.length) {
            return result.push([...temp])
        }

        temp.push(nums[i])
        recursiveSubsets(nums, i + 1)
        temp.pop()
        recursiveSubsets(nums, i + 1)
    }

    recursiveSubsets(nums, 0)

    return result
}

const numbers = [1, 2, 3]

console.log(subsets(numbers))