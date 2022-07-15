const rotate = (nums, k) => {
  let removed = nums.splice(nums.length - k);
  nums = [...removed, ...nums];
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
