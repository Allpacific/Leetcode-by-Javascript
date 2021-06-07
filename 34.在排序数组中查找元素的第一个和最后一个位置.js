/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // lower为true 寻找leftIdx 即 第一个大于等于target的位置
    // lower为false 寻找rightIdx 即 第一个大于target的位置
    function binarySearch(nums, target, lower) {
        let left = 0
        let right = nums.length - 1
        let ans = nums.length //记录target位置
        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            if(nums[mid] > target || (lower && nums[mid] >= target)) {
                right = mid - 1
                ans = mid
            }else {
                left = mid + 1
            }
        }

        return ans
    }
    let ans = [-1, -1]
    //  leftIdx 即为在数组中寻找第一个大于等于target的下标
    let leftIdx = binarySearch(nums, target, true)
    // rightIdx 即为在数组中寻找第一个大于target的下标，然后将下标减一
    let rightIdx = binarySearch(nums, target, false) - 1
    if(leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = [leftIdx, rightIdx]
    }
    return ans
};
// @lc code=end

