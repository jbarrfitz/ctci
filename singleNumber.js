const singleNumber = (nums) => {
  return nums.reduce((num, num2) => num ^ num2, nums);
};

console.log();
