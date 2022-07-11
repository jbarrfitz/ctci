const binarySearch = (arr, value) => {
  let searchAreaMin = 0;
  let searchAreaMax = arr.length - 1;
  let searchMidPoint = Math.floor((searchAreaMin + searchAreaMax) / 2);

  while (searchAreaMax - searchAreaMin > 1) {
    if (arr[searchMidPoint] === value) return searchMidPoint;
    if (arr[searchMidPoint] > value) {
      searchAreaMax = searchMidPoint;
      searchMidPoint = Math.floor((searchAreaMin + searchAreaMax) / 2);
    } else {
      searchAreaMin = searchMidPoint;
      searchMidPoint = Math.floor((searchAreaMin + searchAreaMax) / 2);
    }
    console.log('Min: ', searchAreaMin);
    console.log('Max: ', searchAreaMax);
    console.log('Mid: ', searchMidPoint);
  }
  return 'Value not found.';
};

console.log(binarySearch([1, 3, 5, 7, 9, 13, 14, 16], 9));
console.log(binarySearch([1, 3, 5, 7, 9, 13, 14, 16], 11));
