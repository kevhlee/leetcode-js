/**
 * 64. Minimum Path Sum
 *
 * Difficulty: Medium
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const memo = [];

  for (let i = 0; i < m; i++) {
    memo.push([]);

    for (let j = 0; j < n; j++) {
      memo[i].push(0);
    }
  }

  memo[0][0] = grid[0][0];

  for (let i = 1; i < m; i++) {
    memo[i][0] = grid[i][0] + memo[i - 1][0];
  }
  for (let j = 1; j < n; j++) {
    memo[0][j] = grid[0][j] + memo[0][j - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      memo[i][j] = Math.min(memo[i - 1][j], memo[i][j - 1]) + grid[i][j];
    }
  }

  return memo[m - 1][n - 1];
};
