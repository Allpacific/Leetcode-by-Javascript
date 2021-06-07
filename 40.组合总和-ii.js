/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    function backTrack(res, path, nums, remain, start) {
        if(remain < 0) return
        else if (remain === 0) res.push([...path])
        for(let i=start; i<nums.length; i++) {
            // 因为已经排序，所以nums[i]和num[i-1]进行比较就行
            // 跳过重复数字
            if(i > start && nums[i] === nums[i-1]) continue
            path.push(nums[i])
            backTrack(res, path, nums, remain - nums[i], i + 1)
            path.pop()
        }
    }

    let res = []
    let path = []

    backTrack(
        res,
        path,
        candidates.sort((a, b) => a - b),
        target,
        0
    )
    
    return res
};
// @lc code=end

