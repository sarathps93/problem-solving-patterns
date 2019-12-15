// First pair to sum up to zero

/* 
  Implement a function called sumZero,
  which accepts a sorted array of integers. The function should find the first pair
  where the sum is zero. Return an array that includes both values that sums to zero
  or return undefined
*/

const sumZero = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
};
