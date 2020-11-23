/**
 * A node in a binary tree.
 */
class TreeNode {
  /**
   * Creates a new binary tree node.
   *
   * @param {*} val - The value of the node.
   * @param {TreeNode} left - The left child node.
   * @param {TreeNode} right - The right child node.
   */
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Builds a binary tree based on a given set of values.
 *
 * @param {*} vals - The values for building the binary tree.
 * @returns The root of the tree.
 */
function buildTree(vals) {
  if (!vals) {
    return null;
  }

  const nodes = vals.map((val) => (val ? new TreeNode(val) : null));

  for (let i = 0; i < nodes.length / 2; i++) {
    if (!nodes[i]) {
      continue;
    }

    const leftIndex = 2 * i + 1;
    const rightIndex = 2 * i + 2;

    if (leftIndex < nodes.length) {
      nodes[i].left = nodes[leftIndex];
    }

    if (rightIndex < nodes.length) {
      nodes[i].right = nodes[rightIndex];
    }
  }

  return nodes[0];
}

module.exports = {
  TreeNode,
  buildTree,
};
