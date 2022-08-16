const intToRoman = (num) => {
  numMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = '';
  while (num > 0) {
    for (i = 0; i < Object.keys(numMap).length - 1; i++) {
      if (numMap[i] < num) {
        result = result + Object.keys(numMap)[i];
        num -= numMap[i];
        break;
      }
    }
  }
  return result;
};

console.log(intToRoman(1999));
console.log(intToRoman(1971));
