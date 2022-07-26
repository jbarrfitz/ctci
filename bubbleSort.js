const bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let checked;
  do {
    checked = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        checked = true;
      }
    }
  } while (checked);
  return inputArr;
};

console.log(bubbleSort([0, 56, 23, 53, 45, 67, 12, -1, 24, 62, 81, 16, 46]));
