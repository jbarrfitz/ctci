const insert = (intervals, newInterval) => {
  let newStart = 0;
  let newEnd = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[0] > intervals[i][1]) {
      newStart = i + 1;
    } else if (newInterval[1] < intervals[i][0]) {
      continue;
    } else {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      newEnd = i + 1;
    }
  }
  intervals.splice(newStart, newEnd - newStart, newInterval);
  return intervals;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
