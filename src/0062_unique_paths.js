/**
 * 62. Unique Paths
 *
 * Difficulty: Medium
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // Use the power of combinatorics
  return combination(m + n - 2, m - 1);
};

var combination = function (m, n) {
  return factorial(m) / (factorial(m - n) * factorial(n));
};

var factorial = function (n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
};
