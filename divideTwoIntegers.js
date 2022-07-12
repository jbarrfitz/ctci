const divide = (dividend, divisor) => {
  let result = 0;
  let i = 0;
  if (divisor === 0) return null;
  while (result + divisor <= dividend) {
    result += divisor;
    i++;
  }
  return i;
};

console.log(divide(10, 3));
