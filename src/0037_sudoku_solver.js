/**
 * 37. Sudoku Solver
 *
 * Difficulty: Hard
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  solve(board, 0, 0);
};

var solve = function (board, row, col) {
  if (row >= 9) {
    return true;
  } else if (col >= 9) {
    return solve(board, row + 1, 0);
  }

  if (board[row][col] !== ".") {
    return solve(board, row, col + 1);
  }

  for (let i = 1; i <= 9; i++) {
    board[row][col] = `${i}`;

    if (isValidChoice(board, row, col) && solve(board, row, col + 1)) {
      return true;
    }

    board[row][col] = ".";
  }

  return false;
};

var isValidChoice = function (board, row, col) {
  if (board[row][col] === ".") {
    return false;
  }

  // Check row
  for (let j = 0; j < 9; j++) {
    if (j !== col && board[row][j] === board[row][col]) {
      return false;
    }
  }

  // Check column
  for (let i = 0; i < 9; i++) {
    if (i !== row && board[i][col] === board[row][col]) {
      return false;
    }
  }

  // Check subgrid
  const subgridRow = Math.floor(row / 3) * 3;
  const subgridCol = Math.floor(col / 3) * 3;

  for (let i = subgridRow; i < subgridRow + 3; i++) {
    for (let j = subgridCol; j < subgridCol + 3; j++) {
      if (row === i && col === j) {
        continue;
      }

      if (board[i][j] === board[row][col]) {
        return false;
      }
    }
  }

  return true;
};
