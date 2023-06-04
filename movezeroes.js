function moveZeroes(nums) {
  let nonZeroIndex = 0; // Pointer to track the index of non-zero elements
  
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If the current element is non-zero, move it to the nonZeroIndex position
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }
  
  // Fill the remaining positions with zeroes
  while (nonZeroIndex < nums.length) {
    nums[nonZeroIndex] = 0;
    nonZeroIndex++;
  }
}

// Example usage:
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]