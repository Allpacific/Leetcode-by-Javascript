/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []

    function dfs (l, r, str) {
        if(l === n && r === n) {
            return res.push(str)
        }

        // l小于r时不满足条件 剪枝
        if(l < r) {
            return
        }

        // l小于n时可以插入左括号，最多可以插入n个
        if(l < n) {
            dfs(l + 1, r, str+'(')
        }

        // r小于l时可以插入右括号
        if(r < l) {
            dfs(l, r+1, str+')')
        }
    }
    dfs(0,0,'')
    return res
};
// @lc code=end

