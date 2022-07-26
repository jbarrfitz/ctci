const mergeSort = (arr) => {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  let result = [];
  let leftLen = left.length;
  let rightLen = right.length;
  let l = 0;
  let r = 0;

  while (l < leftLen && r < rightLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(
  mergeSort([1, 5, 3, 9, 2, 8, -1, -4, -76, 34, 6, 32, 12, 12, 8, 19])
);
