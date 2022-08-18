const isAnagram = (s, t) => {
  const ltrMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!ltrMap.has(s[i])) {
      ltrMap.set(s[i], 1);
    } else {
      ltrMap.set(s[i], ltrMap.get(s[i]) + 1);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (!ltrMap.get(t[j])) {
      return false;
    }
    ltrMap.set(t[j], ltrMap.get(t[j]) - 1);
  }
  for (let k of ltrMap.values()) {
    if (k) return false;
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('car', 'rat'));
