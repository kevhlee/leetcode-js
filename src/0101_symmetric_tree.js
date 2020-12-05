/**
 * 101. Symmetric Tree
 *
 * Difficulty: Easy
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // Corner case
  if (root === null) {
    return true;
  }

  const check = function (l, r) {
    if (l === null) {
      return r === null;
    }

    if (r !== null && l.val === r.val) {
      return check(l.left, r.right) && check(l.right, r.left);
    }

    return false;
  };

  return check(root.left, root.right);
};
