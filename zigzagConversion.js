const zigZagConversion = (s, numRows) => {
  const totalDiff = numRows * 2 - 2;
  if (!s || s.length <= numRows || numRows < 2) {
    return s;
  }
  let result = '';
  let upDiff = totalDiff;
  let downDiff = totalDiff - upDiff;
  for (let currRow = 0; currRow < numRows; currRow++) {
    currChar = downDiff / 2;
    let isGoingUp = true;
    while (currChar < s.length) {
      result = result.concat(s[currChar]);
      if (currRow === 0 || currRow === numRows - 1) {
        currChar += totalDiff;
      } else {
        currChar = isGoingUp ? currChar + upDiff : currChar + downDiff;
        isGoingUp = !isGoingUp;
      }
    }
    upDiff -= 2;
    downDiff = totalDiff - upDiff;
  }
  return result;
};

console.log(zigZagConversion('JERRYISOBVIOUSLYHERE', 4));
