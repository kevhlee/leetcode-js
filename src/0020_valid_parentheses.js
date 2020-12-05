/**
 * 20. Valid Parentheses
 *
 * Difficulty: Easy
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let letter of s) {
    if (isLeft(letter)) {
      stack.push(letter);
    } else if (stack.length === 0 || !isMatch(stack.pop(), letter)) {
      return false;
    }
  }

  return stack.length == 0;
};

var isLeft = function (letter) {
  return letter === "(" || letter === "[" || letter === "{";
};

var isMatch = function (left, right) {
  switch (left) {
    case "(":
      return right === ")";
    case "[":
      return right === "]";
    case "{":
      return right === "}";
    default:
      return false;
  }
};
