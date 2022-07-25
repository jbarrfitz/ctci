const exist = (board, word) => {
  let visited = {};
  let wordInd = 0;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      visited = {};
      if (board[row][col] === word[wordInd]) {
        visited[`${row}:${col}`] = true;
        wordInd++;
        if (findWord(row, col)) {
          return true;
        } else {
          visited[`${row}:${col}`] = false;
          wordInd--;
        }
      }
    }
  }

  function findWord(row, col) {
    if (wordInd === word.length) {
      return true;
    }
    for (i of [1, -1]) {
      if (visitCell(row + i, col) || visitCell(row, col + i)) {
        return true;
      }
    }
  }

  function visitCell(rowI, colI) {
    if (!board[rowI] || !board[rowI][colI]) {
      return false;
    }
    const key = `${rowI}:${colI}`;
    const letter = board[rowI][colI];

    if (word[wordInd] === letter && !visited[key]) {
      wordInd++;
      visited[key] = true;

      if (findWord(rowI, colI)) {
        return true;
      }
      wordInd--;
      visited[key] = false;
    }
    return false;
  }
  return false;
};

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);
