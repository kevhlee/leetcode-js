/**
 * 22. Generate Parentheses
 *
 * Difficulty: Medium
 *
 * Given n pairs of parentheses, write a function to generate all
 * combinations of well-formed parentheses.
 *
 * Example 1:
 *  Input: n = 3
 *  Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Example 2:
 *  Input: n = 1
 *  Output: ["()"]
 *
 * Constraints:
 *  - 1 <= n <= 8
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const combinations = [];

  const generate = (combination, leftN, rightN) => {
    if (leftN === 0 && rightN === 0) {
      combinations.push(combination);
      return;
    }

    if (leftN > 0) {
      generate(combination + "(", leftN - 1, rightN);
    }
    if (rightN > 0 && rightN > leftN) {
      generate(combination + ")", leftN, rightN - 1);
    }
  };

  generate("", n, n);

  return combinations;
};
