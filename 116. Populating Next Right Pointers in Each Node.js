/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) { /* beats 97.52% */
  if (root === null) return;

  if (root.left) root.left.next = root.right;

  if (root.right) {
    root.right.next = root.next ? root.next.left : null;
  }

  connect(root.left);
  connect(root.right);
};
