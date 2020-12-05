/**
 * 22. Generate Parentheses
 *
 * Difficulty: Medium
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
