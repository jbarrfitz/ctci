const arrangeCoins = (n) => {
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(693));
