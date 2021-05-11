/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length === 0) return ''
    let res = s[0]

    var dp = []
    // 倒着遍历简化操作  因为dp[i][...]依赖于dp[i+1][...]
    for (let i = s.length - 1; i >= 0; i--) {
        dp[i] = [];
        // dp[i][j]表示 字符串s中index从i到j的字符串
        for (let j = i; j < s.length; j++) {
            if (j - i === 0) {
                // 对角线为 只包含1个字符 的字符串 肯定是回文
                dp[i][j] = true;
            } else if (j - i === 1 && s[i] === s[j]) {
                // 对角线上方最近的一条斜线 只包含2个字符 的字符串
                // 只需判断s[i]和s[j]是否相等
                dp[i][j] = true;
            } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
                // 其余的字符串 如果是回文串的话
                // dp[i-1][j+1]也应该是回文串
                dp[i][j] = true;
            }

            if (dp[i][j] && j - i + 1 > res.length) {
                // slice(i,j) index从大于等于i开始，到小于j结束 进行截取子串
                res = s.slice(i, j + 1);
            }
        }
    }
    return res;
};
// @lc code=end

