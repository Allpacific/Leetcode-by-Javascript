/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let max = 0
    let sum = 0
    let leftMax = []
    let rightMax = []

    for(let i = 0; i<height.length; i++) {
        max = Math.max(height[i], max)
        leftMax[i] = max
    }

    max = 0

    for(let i=height.length - 1; i>=0; i--) {
        max = Math.max(height[i], max)
        rightMax[i] = max
    }

    for(let i = 0; i<height.length; i++) {
        sum = sum + Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return sum
};
// @lc code=end

