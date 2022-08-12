var longestPalindrome = (s) => {
  let start = 0;
  let end = 0;
  let longestPalLen = 0;
  let longestPal = '';
  let currPalindrome = '';
  let currPalindromeLen = 0;

  for (let i = 1; i < s.length - 1; i++) {
    while (start >= 0 && end < s.length) {
      //check for even-length palindromes
      start = i - 1;
      end = i;
      if (s[start] === s[end]) {
        currPalindromeLen = end - start + 1;
        currPalindrome = s.substring(start, end + 1);
      }
      //check for odd-length palindromes
      start = i - 1;
      start = i + 1;
      if (s[start] === s[end]) {
        currPalindromeLen = end - start + 1;
        currPalindrome = s.substring(start, end + 1);
      }
      start -= 1;
      end += 1;
    }
    if (currPalindromeLen > longestPalLen) {
      longestPalLen = currPalindromeLen;
      longestPal = currPalindrome;
    }
    currPalindrome = '';
    currPalindromeLen = 0;
  }
  return currPalindrome;
};

console.log(longestPalindrome('abcba'));
