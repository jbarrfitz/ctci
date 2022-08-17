const singleNumber = (nums) => {
  return nums.reduce((num, num2) => num ^ num2, nums);
};

console.log(singleNumber([4, 1, 2, 1, 2]));
