const searchRange = (nums, target) => {
  const find = (target, nums, left = 0, right = nums.length - 1) => {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };
  let leftTarget = find(target, nums);
  if (nums[leftTarget] !== target) {
    return [-1, -1];
  }
  return [leftTarget, find(target + 1, nums, leftTarget) - 1];
};
