/**
 * 48. Rotate Image
 *
 * Difficulty: Medium
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place
 * instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  // Convert matrix into its transpose
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const temp = matrix[i][j];

      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row in matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      const temp = matrix[i][j];

      matrix[i][j] = matrix[i][n - (j + 1)];
      matrix[i][n - (j + 1)] = temp;
    }
  }
};
