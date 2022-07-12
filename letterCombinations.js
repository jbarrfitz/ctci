const digitsToLetters = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

const letterCombinations = (digits) => {
  if (digits === '') {
    return [];
  }
  let possibleValues = digits.split('').map((value) => digitsToLetters[value]);
  let possibleCombinations = [];
  let combine = (start, result) => {
    if (result.length === digits.length) {
      possibleCombinations.push(result.join(''));
    }
    for (let i = start; i < possibleValues.length; i++) {
      for (let j = 0; j < possibleValues[i].length; j++) {
        result.push(possibleValues[i][j]);
        combine(i + 1, result);
        result.pop();
      }
    }
  };
  combine(0, []);
  return possibleCombinations;
};

console.log(letterCombinations('23'));
