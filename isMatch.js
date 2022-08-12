const isMatch = (s, p) => {
  if (!p.split('*').length - 1 && !p.split('.').length - 1) {
    return s === p;
  }
  let matchString = '';
  for (ltr = 0; ltr < s.length; s++) {}
};

console.log(isMatch('aa', 'a'));
