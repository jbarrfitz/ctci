const isPowerOfTwo = (n) => {
  return n === 1 || parseInt(n.toString(2).substring(1), 2) === 0;
};

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(17));
