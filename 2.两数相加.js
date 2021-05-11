/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 === null || l2 ===null) return
    let newHead = new ListNode(0)
    let cur1 = l1
    let cur2 = l2
    let cur = newHead
    let carry = 0

    while(cur1 !== null || cur2 !== null) {
        let val1 = cur1 !== null ? cur1.val : 0;
        let val2 = cur2 !== null ? cur2.val : 0;
        let sum = val1 + val2 + carry;
        // sum除以10取余
        let newNode = new ListNode(sum % 10);
        carry = sum >= 10 ? 1 : 0;
        cur.next = newNode;
        cur = cur.next

        if (cur1 !== null) {
            cur1 = cur1.next;
        }
        if (cur2 !== null) {
            cur2 = cur2.next;
        }
    }
    if (carry > 0) {
        cur.next = new ListNode(carry);
    }
    return newHead.next
};
// @lc code=end

