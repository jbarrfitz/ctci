const reverse = (x) => {
  let reverseNum = Math.abs(x).toString().split('').reverse().join('');
  if (reverseNum > 2 ** 31 - 1) return 0;
  return parseInt(reverseNum * Math.sign(x));
};

console.log(reverse(85645616));
console.log(reverse(3216548774135));
console.log(reverse(125));
