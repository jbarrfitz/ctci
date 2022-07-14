var solution = function (isBadVersion) {
  return function (n) {
    let right = n;
    let left = 0;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let version = isBadVersion(mid);
      if (version !== isBadVersion(mid + 1)) {
        return mid + 1;
      } else if (!version) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  };
};
