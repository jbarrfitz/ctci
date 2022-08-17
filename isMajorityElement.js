const isMajorityElement = (nums, target) => {
  // return nums.length % 2 === 0
  //   ? nums[nums.length / 2] === target && nums[nums.length / 2 - 1] === target
  //   : nums[Math.floor(nums.length / 2)] === target;
  return nums.filter((num) => num === target).length > nums.length / 2;
};

console.log(isMajorityElement([2, 4, 5, 5, 5, 5, 5, 6, 6], 5));
console.log(isMajorityElement([10, 100, 101, 101], 101));
