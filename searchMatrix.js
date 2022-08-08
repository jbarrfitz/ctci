const searchMatrix = (matrix, target) => {
  let totalRows = matrix.length;
  let totalCols = matrix[0].length;

  if (matrix[0][0] > target || matrix[totalRows - 1][totalCols - 1] < target) {
    return false;
  }

  let minRow = 0;
  let maxRow = totalRows - 1;
  let midRow = 0;
  let targetRow = 0;

  while (minRow < maxRow) {
    midRow = Math.floor((minRow + maxRow) / 2);
    if (
      matrix[midRow][0] <= target &&
      matrix[midRow][totalCols - 1] >= target
    ) {
      targetRow = midRow;
      break;
    } else if (matrix[midRow][totalCols - 1] < target) {
      minRow = midRow + 1;
    } else {
      maxRow = midRow - 1;
    }
  }
  let minCol = 0;
  let maxCol = matrix[targetRow].length - 1;
  while (
    minCol < maxCol ||
    (minCol === maxCol && matrix[targetRow][minCol] !== target)
  ) {
    let midCol = Math.floor((minCol + maxCol) / 2);
    if (matrix[targetRow][midCol] === target) {
      return true;
    }
    if (matrix[targetRow][midCol] > target) {
      maxCol = midCol - 1;
    } else {
      minCol = midCol + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
