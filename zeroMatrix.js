const zeroMatrix = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let matrixMap = new Map();

  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrixMap.set(i, j);
      }
    }
  }
  for (let [key, value] of matrixMap.entries()) {
    for (let r = 0; r < cols; r++) {
      matrix[r][value] = 0;
    }
    for (let c = 0; c < rows; c++) {
      matrix[key][c] = 0;
    }
  }
  return matrix;
};

let m1 = [
  [1, 2, 0],
  [4, 5, 6],
  [0, 8, 9],
];

let m2 = [
  [0, 0, 2],
  [1, 5, 5],
  [0, 2, 7],
];

console.log(JSON.stringify(zeroMatrix(m1)));
console.log(JSON.stringify(zeroMatrix(m2)));
