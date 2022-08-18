const canPermutePalindrome = (s) => {
  if (s.length < 2) {
    return true;
  }
  let letters = {};
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in letters)) {
      letters[s[i]] = true;
    } else {
      delete letters[s[i]];
    }
  }
  return Object.keys(letters).length < 2;
};

console.log(canPermutePalindrome('code'));
console.log(canPermutePalindrome('aab'));
console.log(canPermutePalindrome('carerac'));
