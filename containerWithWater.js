const maxArea = (height) => {
  let leftWall = 0;
  let rightWall = height.length - 1;
  let maxSize = 0;
  let currArea;

  while (leftWall < rightWall) {
    currArea =
      (rightWall - leftWall) * Math.min(height[leftWall], height[rightWall]);
    maxSize = Math.max(currArea, maxSize);
    height[leftWall] < height[rightWall] ? leftWall++ : rightWall--;
  }
  return maxSize;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
