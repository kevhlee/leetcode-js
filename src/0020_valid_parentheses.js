/**
 * 20. Valid Parentheses
 *
 * Difficulty: Easy
 *
 * Given a string s containing just the characters '(', ')', '{', '}',
 * '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 *
 * Example 1:
 *  Input: s = "()"
 *  Output: true
 *
 * Example 2:
 *  Input: s = "()[]{}"
 *  Output: true
 *
 * Example 3:
 *  Input: s = "(]"
 *  Output: false
 *
 * Example 4:
 *  Input: s = "([)]"
 *  Output: false
 *
 * Example 5:
 *  Input: s = "{[]}"
 *  Output: true
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
