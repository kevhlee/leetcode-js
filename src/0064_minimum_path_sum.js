/**
 * 64. Minimum Path Sum
 *
 * Difficulty: Medium
 *
 * Given a m x n grid filled with non-negative numbers, find a path
 * from top left to bottom right, which minimizes the sum of all
 * numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 *
 * Example 1:
 *  Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
 *  Output: 7
 *  Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
 *
 * Example 2:
 *  Input: grid = [[1,2,3],[4,5,6]]
 *  Output: 12
 *
 * Constraints:
 *  - m == grid.length
 *  - n == grid[i].length
 *  - 1 <= m, n <= 200
 *  - 0 <= grid[i][j] <= 100
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
