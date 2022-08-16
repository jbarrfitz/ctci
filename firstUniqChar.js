const firstUniqChar = (s) => {
  let charMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!charMap.has(s[i])) {
      charMap.set(s[i], i);
    } else {
      charMap.set(s[i], Number.MAX_SAFE_INTEGER);
    }
  }
  const min = Math.min(...charMap.values());
  if (min < Number.MAX_SAFE_INTEGER) {
    return min;
  } else {
    return -1;
  }
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
