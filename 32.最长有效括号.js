/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = new Array()
    let max = 0

    stack.push(-1)

    // 1. 栈中存的是符号的下标
    // 2. 当栈为空时且当前扫描到的符号是')'时，需要将这个符号入栈作为分割符
    // 3. 栈中初始化一个 -1，作为分割符
    for(let i=0;i<s.length; i++) {
        if (s == null || s.length == 0) return 0
        if(s[i] === '(') {
            stack.push(i)
        }else {
            stack.pop()
            if(stack.length === 0) {
                stack.push(i)
            }else {
                max = Math.max(max, i - stack[stack.length - 1])
            }
        }
    }
    return max
};
// @lc code=end

