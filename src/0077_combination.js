/**
 * 77. Combinations
 *
 * Difficulty: Medium
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const combinations = [];

  const generate = (combination, idx, k) => {
    if (k === 0) {
      combinations.push(combination);
      return;
    }

    for (let i = idx; i <= n - k + 1; i++) {
      generate(combination.concat([i]), i + 1, k - 1);
    }
  };

  generate([], 1, k);

  return combinations;
};
