// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. 

// For example, the input [3, 4, 1] should give 2. The input [1, 2, 0] should give 3.


// Time complexity-- O(n) where one traversal of the array is needed.
// Space Complexity: O(1) where no extra space is needed

//The missing number can be found by finding total ((n + 2) * (n + 1)) /2  and subtract total from each value.

let nums = [3,4,1,2,6];

function findMissingNum() {
    let n = nums.length;
    let total = ((n + 2) * (n + 1)) / 2;

    for (let i = 0; i < n; i++) {
      total -= nums[i];
    }
    return total;
  }

 
  console.log(findMissingNum());





