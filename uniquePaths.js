const uniquePaths = (m, n) => {
  if (m === 1 || n === 1) {
    return 1;
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};

console.log(uniquePaths(3, 2));
console.log(uniquePaths(5, 5));
