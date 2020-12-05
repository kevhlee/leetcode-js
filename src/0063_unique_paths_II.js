/**
 * 63. Unique Paths II
 *
 * Difficulty: Medium
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const memo = createMemoGrid(obstacleGrid);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j]) {
        continue;
      }

      memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
    }
  }

  return memo[m - 1][n - 1];
};

var createMemoGrid = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const memo = [];

  for (let i = 0; i < m; i++) {
    memo.push([]);

    for (let j = 0; j < n; j++) {
      memo[i].push(0);
    }
  }

  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0]) {
      break;
    }

    memo[i][0] = 1;
  }

  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j]) {
      break;
    }

    memo[0][j] = 1;
  }

  return memo;
};
