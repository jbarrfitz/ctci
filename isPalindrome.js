const isPalindrome = (s) => {
  s = s.replace(/[^A-Za-z]/gi, '').toLowerCase();
  let left;
  let right;
  if (s.length < 2) {
    return true;
  }
  if (s.length % 2 === 0) {
    left = s.length / 2 - 1;
    right = s.length / 2;
  } else {
    left = (s.length - 1) / 2 - 1;
    right = (s.length - 1) / 2 + 1;
  }
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      return false;
    }
    left--;
    right++;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(''));
