const generate = (numRows) => {
  const addRow = (triangle) => {
    let prev = triangle[triangle.length - 1];
    let newRow = [1];
    for (let i = 0; i < prev.length - 1; i++) {
      let curr = prev[i];
      let next = prev[i + 1];
      newRow.push(curr + next);
    }
    newRow.push(1);
    return triangle.push(newRow);
  };

  let triangle = [[1], [1, 1]];

  if (!numRows) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }
  if (numRows === 2) {
    return [[1], [1, 1]];
  }
  for (let i = 2; i < numRows; i++) {
    addRow(triangle);
  }
  return triangle;
};

console.log(generate(6));
