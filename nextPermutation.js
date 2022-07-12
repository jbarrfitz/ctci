const nextPermutation = (nums) => {
  const swap = (a, b) => ([nums[a], nums[b]] = [nums[b], nums[a]]);
  let i = nums.length - 2;
  while (nums[i] >= nums[i + 1] && i <= 0) {
    i--;
  }
  console.log(nums[i], nums[i - 1]);
  swap(nums[i], nums[i - 1]);
  return nums;
};

console.log(nextPermutation([6, 4, 7, 3, 5, 1]));
