const nextPermutation = (nums) => {
  let i = nums.length - 1;
  do {
    i--;
  } while (nums[i] >= nums[i - 1] && i >= 1);
  let temp = nums[i + 1];
  nums[i + 1] = nums[i];
  nums[i] = temp;
  for (let j = i + 2; nums[i] >= nums[j]; j++) {
    [nums[(i, j)]] = [nums[(j, i)]];
  }
  return nums;
};

console.log(nextPermutation([6, 4, 7, 3, 5, 1]));
