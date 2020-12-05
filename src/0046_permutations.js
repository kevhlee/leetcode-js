/**
 * 46. Permutations
 *
 * Difficulty: Medium
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const permutations = [];

  const generate = (candidates, permutation) => {
    if (candidates.length === 0) {
      permutations.push(permutation);
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      generate(
        candidates.slice(0, i).concat(candidates.slice(i + 1)),
        permutation.concat([candidates[i]])
      );
    }
  };

  generate(nums, []);

  return permutations;
};
