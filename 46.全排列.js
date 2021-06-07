/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function backTrack(res, path, nums) {
        if(path.length === nums.length) return res.push([...path])
        for(let i=0; i<nums.length; i++) {
            if(path.includes(nums[i])) continue
            path.push(nums[i])
            backTrack(res, path, nums)
            path.pop()
        }
    }
    let res = []
    let path = []
    backTrack(res, path, nums)
    return res
};
// @lc code=end

