/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 

    暴力法

var maxSubArray = function(nums) {
    let len = nums.length
    let max = -Infinity
    for(let i=0; i<len; i++) {
        let sum = 0
        for(let j=i; j<len; j++) {
            sum+=nums[j]
            if(sum>max) {
                max = sum
            }
        }
    }
    return max
}; */

/* 
    动态规划 
*/
/* var maxSubArray = function(nums) {
    const len = list.length
    let max = nums[0]
    for(let i=0; i<len; i++) {
        nums[i] = Math.max(0, nums[i-1]) + nums[i]
        if(nums[i] > max) {
            max = nums[i]
        }
    }
    return max
}; */
/* 
    分治法
 */
var maxSubArray = function(nums) {
    function helper(list, m, n) {
        if(m === n) return list[m]
        let sum = 0
        let lmax = -Infinity
        let rmax = -Infinity

        let mid = ((n - m) >> 1) + m
        let l = helper(list, m, mid)
        let r = helper(list, mid+1, n)
        for(let i=mid; i>=m; i--) {
            sum+=list[i]
            if(sum>lmax) lmax=sum
        }

        sum=0

        for (let i = mid + 1; i <= n; i++) {
            sum += list[i]
            if (sum > rmax) rmax = sum
        }
        
        return Math.max(l, r, lmax + rmax);
    }

    return helper(list, 0, list.length - 1)
};
// @lc code=end

