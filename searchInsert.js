const searchInsert = (nums, target) => {
  if (!nums.length) {
    return 0;
  }

  let left = 0;
  let right = nums.length - 1;

  if (target < nums[left]) {
    return 0;
  }

  if (target > nums[right]) {
    return right + 1;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
