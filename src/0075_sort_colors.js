/**
 * 75. Sort Colors
 *
 * Difficulty: Medium
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const counts = [0, 0, 0]; // assuming there's only 3 colors

  for (let num of nums) {
    counts[num]++;
  }

  let i = 0;

  for (let color = 0; color < counts.length; color++) {
    let count = counts[color];

    while (count > 0) {
      nums[i] = color;
      i++;
      count--;
    }
  }
};
