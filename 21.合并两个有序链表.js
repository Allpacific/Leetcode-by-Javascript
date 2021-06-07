/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
/**
 * 
 * 自己写的迭代方法
 */
// var mergeTwoLists = function(l1, l2) {
//     if(l1 === null) return l2
//     if(l2 === null) return l1
    
//     let mergeList = new ListNode(0)
//     let p = mergeList
//     while(l1 !== null && l2 !== null) {
//         if(l1.val <= l2.val) {
//             p.next = l1
//             l1 = l1.next
//         }else {
//             p.next = l2
//             l2 = l2.next 
//         }
//         p = p.next
//     }

//     p.next = l1 === null ? l2 : l1
//     return mergeList.next
// };
/**
 * 
 * 
 * 递归方法
 * 
 */
const mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
      return l2;
    }
    if (l2 === null) {
      return l1;
    }
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  };
// @lc code=end

