/**
 * 48. Rotate Image
 *
 * Difficulty: Medium
 *
 * You are given an n x n 2D matrix representing an image, rotate the
 * image by 90 degrees (clockwise).
 *
 * You have to rotate the image in-place, which means you have to
 * modify the input 2D matrix directly. DO NOT allocate another 2D
 * matrix and do the rotation.
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
