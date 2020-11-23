/**
 * A node in a singly-linked list.
 */
class ListNode {
  /**
   * Creates a new list node.
   *
   * @param {*} val - The value of the node.
   * @param {ListNode} next - The succeeding list node.
   */
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Builds a singly-linked list
 *
 * @param {*} vals - The values for building the list.
 * @returns The head of the list.
 */
function buildList(vals) {
  const nodes = vals.map((val) => new ListNode(val));

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  return nodes[0];
}

module.exports = {
  ListNode,
  buildList,
};
