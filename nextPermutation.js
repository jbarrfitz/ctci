const nextPermutation = (nums) => {
  let i = nums.length - 2;
  let j;
  while (nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    nums.splice(
      i + 1,
      nums.length - i,
      ...nums.splice(i + 1, nums.length - 1 + 1).reverse()
    );
  } else {
    return nums.reverse();
  }
  return nums;
};

console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([1, 3, 2]));
console.log(nextPermutation([3, 2, 1]));
