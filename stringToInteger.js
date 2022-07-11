var myAtoi = function (s) {
  const signRegex = /[+-]/;
  const numRegex = /[0-9]/;
  let positive = true;
  let resultArr = [];
  let startChar = 0;
  while (
    startChar < s.length &&
    !signRegex.test(s[startChar]) &&
    !numRegex.test(s[startChar])
  ) {
    if (s[startChar] !== ' ') {
      return 0;
    }
    startChar++;
  }
  if (startChar === s.length) {
    return 0;
  }
  if (signRegex.test(s[startChar])) {
    positive = s[startChar] === '+';
    startChar++;
  }
  while (startChar < s.length && numRegex.test(s[startChar])) {
    resultArr.unshift(s[startChar]);
    startChar++;
  }
  let result = resultArr.reduce((result, item, itemIndex) => {
    return result + item * Math.pow(10, itemIndex);
  }, 0);
  result = positive ? result : result * -1;
  if (result < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else return result;
};
