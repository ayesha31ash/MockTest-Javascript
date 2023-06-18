const readline = require('readline');

function mySqrt(x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for user input
rl.question('Enter a non-negative integer: ', (answer) => {
  // Convert the input to a number
  const x = parseInt(answer);

  // Call the function and print the result
  const result = mySqrt(x);
  console.log(`Square root of ${x} is ${result}`);

  // Close the readline interface
  rl.close();
});