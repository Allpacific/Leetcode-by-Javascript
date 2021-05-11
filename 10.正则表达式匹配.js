/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let dp = Array(s.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(p.length + 1).fill(false)
    }

    dp[0][0] = true

    for(let col=1; col < dp[0].length; col++) {
        let ch = p.charAt(col-1)
        if(col > 1) {
            if(ch === '*') {
                dp[0][col] = dp[0][col-2]
            }else {
                dp[0][col] = false
            }
        } else {
            if(ch === '*') {
                dp[0][col] = true
            }
        }
    }

    for(let row=1; row < dp.length; row++) {
        let ch1 = s.charAt(row - 1)
        for(let col=1; col<dp[row].length; col++) {
            let ch2 = p.charAt(col - 1)
            if(ch1 === ch2 || ch2 === '.') {
                dp[row][col] = dp[row-1][col-1]
            }else if(ch2 === '*') {
                if(col > 1) {
                    if(dp[row][col-2]) {
                        dp[row][col] = true // 前面字符出现一次
                    }else {
                        let prev = p.charAt(col-2)
                        if(prev === ch1 || prev === '.') {
                            dp[row][col] = dp[row-1][col]
                        }
                    }
                }
            }
        }
    }

    return dp[s.length][p.length]
};
// @lc code=end

