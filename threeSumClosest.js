const threeSumClosest = (nums, target) => {
  let sum = 0;
  let closest = nums[0] + nums[1] + nums[nums.length - 1];
  nums = nums.sort((a, b) => a - b);
  if (nums.length < 3) {
    return nums[0] + nums[1] || nums[0];
  }
  let leftBound = 0;
  let rightBound = 0;
  let lowestDiff = Number.POSITIVE_INFINITY;
  for (let firstNum = 0; firstNum < nums.length; firstNum++) {
    let firstNumTarget = target - nums[firstNum];
    let leftBound = firstNum + 1;
    for (let rightBound = nums.length - 1; rightBound >= 0; rightBound--) {
      if (leftBound === rightBound) {
        break;
      }
      sum = nums[firstNum] + nums[leftBound] + nums[rightBound];
      closest = Math.min(closest, Math.abs(sum - target));
      if (sum === target) {
        return sum;
      }
    }
    leftBound++;
    rightBound++;
  }
  return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
