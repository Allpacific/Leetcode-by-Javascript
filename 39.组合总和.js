/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    function backtrack (res, path, nums, remain, start) {
        if(remain < 0) return
        else if (remain === 0) return res.push([...path])
        for(let i=start; i<nums.length; i++) {
            path.push(nums[i])
            backtrack(res, path, nums, remain - nums[i], i)// 数字可以重复使用， i + 1代表不可以重复利用
            path.pop()
        }
    }

    let res = []
    let path = []
    backtrack(
        res,
        path,
        candidates.sort((a, b) => a - b), // 提高效率
        target,
        0
    )
    return res
};
// @lc code=end

