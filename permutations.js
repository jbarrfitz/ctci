const permute = (nums) => {
  let selected = [];
  let result = [];

  findPermutations(selected, nums, result);
  return result;
};
const findPermutations = (selected, nums, result) => {
  if (!nums.length) {
    result.push(selected.concat());
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    const newNum = nums[i];
    selected.push(newNum);
    nums.splice(i, 1);
    findPermutations(selected, nums, result);
    selected.pop();
    nums.splice(i, 0, newNum);
  }
};
