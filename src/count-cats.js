module.exports = function countCats(matrix) {
  throw 'Not implemented';
  let count = 0
  for (let i = 0; i < matrix.length; i++) { 
    for (let j = 0; j < matrix[i].length; j++) { 
      if (matrix[i][j] === "^^") {count++}
    } 
  }
  return count
};
