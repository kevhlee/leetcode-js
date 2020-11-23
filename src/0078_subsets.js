/**
 * 78. Subsets
 *
 * Difficulty: Medium
 *
 * Given an integer array nums, return all possible subsets (the power
 * set).
 *
 * The solution set must not contain duplicate subsets.
 *
 * Example 1:
 *  Input: nums = [1,2,3]
 *  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Example 2:
 *  Input: nums = [0]
 *  Output: [[],[0]]
 *
 * Constraints:
 *  - 1 <= nums.length <= 10
 *  - -10 <= nums[i] <= 10
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
