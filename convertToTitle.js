const convertToTitle = (columnNumber) => {
  let result = '';
  const columnId = (columnNumber - 1).toString(26);
  for (let i = 0; i < columnNumber; i++) {
    result += String.fromCharCode(parseInt(columnId[i], 26) + 65);
  }
  return result;
};

console.log(convertToTitle(701));
