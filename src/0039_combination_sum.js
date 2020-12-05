/**
 * 39. Combination Sum
 *
 * Difficulty: Medium
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const combinations = [];

  const generate = (combination, idx, target) => {
    if (target === 0) {
      combinations.push(combination);
      return;
    } else if (idx === candidates.length) {
      return;
    }

    const candidate = candidates[idx];

    if (target - candidate >= 0) {
      generate(combination.concat(candidate), idx, target - candidate);
    }

    generate(combination, idx + 1, target);
  };

  generate([], 0, target);

  return combinations;
};
