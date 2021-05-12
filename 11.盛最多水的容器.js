/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
/* 
    自己做的(超时！！！！！！)
    暴力方法 O(n^2)
*/
/* var maxArea = function(height) {
    let max = 0
    for(i=0; i<height.length; i++) {
        for(j=i+1; j<height.length; j++) {
            let res = Math.abs(i - j) * Math.min(height[i], height[j])
            if(res > max) {
                max = res
            }
        }
    }

    return max
}; */

/* 
    双指针法
*/
var maxArea = function(height) {
    if(!height || height.length <= 1) return 0

    let leftPos = 0
    let rightPos = height.length - 1
    let max = 0
    while(leftPos < rightPos) {
        let area = Math.abs(leftPos - rightPos) * Math.min(height[leftPos], height[rightPos])

        if(area > max) {
            max = area
        }

        if(height[leftPos] < height[rightPos]) {
            leftPos++
        }else {
            rightPos--
        }
    }

    return max
};
// @lc code=end

