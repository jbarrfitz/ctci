const longestPalindrome = (s) => {
  let longest = 0;
  let palindrome = s[0];
  for (i = 0; i < s.length - 1; i++) {
    let shift = 0;
    //find odd-length palindromes
    while (s[i - shift] === s[i + shift] && shift < s.length / 2) {
      if (shift * 2 + 1 > longest) {
        longest = shift * 2 + 1;
        palindrome = s.substring(i - shift, i + shift + 1);
      }
      shift++;
    }
    //find even-length palindromes
    let evenShift = 0;
    while (
      s[i - evenShift] === s[i + 1 + evenShift] &&
      evenShift < s.length / 2
    ) {
      if ((evenShift + 1) * 2 >= longest) {
        longest = (evenShift + 1) * 2;
        palindrome = s.substring(i - evenShift, i + 2 + evenShift);
      }
      evenShift++;
    }
  }
  return palindrome;
};

console.log(longestPalindrome('abcdcbafe'));
console.log(longestPalindrome('asecbddbceed'));
console.log(longestPalindrome('aa'));
