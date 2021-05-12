/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return []
    let result = []
    nums.sort((a,b) => a - b) //将nums变成升序

    // [-1,0,1,2,-1,-4]
    // [-4,-1,-1,0,1,2]
    for(let i=0; i<nums.length; i++) {
        
        // 跳过重复数字
        if(nums[i] === nums[i-1]) continue
        let left = i + 1
        let right = nums.length - 1

        while(left < right) {
            if(nums[left] + nums[right] + nums[i] === 0) {
                result.push([nums[left], nums[right], nums[i]])
                while(nums[left] === nums[left + 1]) {
                    left++
                }
                left++
                while(nums[right] === nums[right - 1]) {
                    right--
                }
                right--
                continue
            }else if (nums[left] + nums[right] + nums[i] > 0) {
                right--
            }else {
                left++
            }
        }
    }
    return result
};
// @lc code=end

