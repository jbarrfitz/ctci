const majorityElement = (nums) => {
  if (nums.length < 3) {
    return nums;
  }
  let firstCount = 0;
  let secondCount = 0;
  let firstCandidate;
  let secondCandidate;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== firstCandidate && nums[i] !== secondCandidate) {
      // stuff
    }
  }
};
