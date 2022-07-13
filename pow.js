const myPow = (x, n) => {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 2 === 1) {
    return myPow(x, (n - 1) / 2) ** 2 * x;
  } else {
    return myPow(x, n / 2) ** 2;
  }
};
