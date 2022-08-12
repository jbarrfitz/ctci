const romanToInt = (s) => {
  const vals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = s.length; i > 0; i--) {
    if (vals[s[i - 1]]) {
      if (vals[s[i - 1]] >= (vals[s[i]] ?? 0)) {
        sum += vals[s[i - 1]];
        console.log('sum: (i = ' + i + '): ' + sum);
      } else {
        sum -= vals[s[i - 1]];
        console.log('sum: (i = ' + i + '): ' + sum);
      }
    } else {
      return sum;
    }
  }
  return sum;
};

console.log(romanToInt('MCMXCIV'));
