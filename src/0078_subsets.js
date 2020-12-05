/**
 * 78. Subsets
 *
 * Difficulty: Medium
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const subsets = [];

  const generate = function (candidates, subset) {
    if (candidates.length === 0) {
      subsets.push(subset);
      return;
    }

    const candidate = candidates.shift();

    generate(candidates.slice(), subset);
    generate(candidates, subset.concat([candidate]));
  };

  generate(nums, []);

  return subsets;
};
