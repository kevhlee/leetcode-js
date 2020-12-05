/**
 * 206. Reverse Linked List
 *
 * Difficulty: Easy
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let reversedHead = null;

  while (head != null) {
    const nextNode = head.next;

    head.next = reversedHead;
    reversedHead = head;

    head = nextNode;
  }

  return reversedHead;
};
