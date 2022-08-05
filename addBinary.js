const addBinary = (a, b) => {
  let sum = '';
  let aDig = a.length - 1;
  let bDig = b.length - 1;
  let aDigValue = 0;
  let bDigValue = 0;
  let carryOver = 0;

  while (aDig >= 0 || bDig >= 0) {
    aDigValue = parseInt(a[aDig] ?? 0);
    bDigValue = parseInt(b[bDig] ?? 0);
    switch (aDigValue + bDigValue + carryOver) {
      case 3:
        sum = '1' + sum;
        carryOver = 1;
        break;
      case 2:
        sum = '0' + sum;
        carryOver = 1;
        break;
      case 1:
        sum = '1' + sum;
        carryOver = 0;
      case 0:
        sum = '0' + sum;
        carryOver = 0;
    }
    aDig -= 1;
    bDig -= 1;
  }
  if (carryOver === 1) {
    sum = '1' + sum;
  }
  return sum;
};

console.log(addBinary('1010', '1011'));
