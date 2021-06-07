/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // [6,7,8,1,2,3,4,5]
    let start = 0
    let end = nums.length - 1

    while(start <= end) {
        const mid = start + Math.ceil((end - start) / 2)

        if(nums[mid] === target) return mid

        // 第一类 2 3 4 5 6 7 1 这种，也就是 nums[start] <= nums[mid]。此例子中就是 2 <= 5。
        // 这种情况下，前半部分有序。因此如果 nums[start] <=target<nums[mid]，则在前半部分找，否则去后半部分找。
        // 第二类 6 7 1 2 3 4 5 这种，也就是 nums[start] > nums[mid]。此例子中就是 6 > 2。
        // 这种情况下，后半部分有序。因此如果 nums[mid] <target<=nums[end]，则在后半部分找，否则去前半部分找。

        if(nums[mid] >= nums[start]){
            // target 在[start, mid]之间
            if(target >= nums[start] && target <= nums[mid]) {
                end = mid - 1
            }else {
                // target不在[start, mid]之间
                start = mid + 1
            }
        }else {
            // target 在[mid, end]之间
            if(target >= nums[mid] && target <= nums[end]) {
                start = mid + 1
            }else {
                // target不在[start, mid]之间
                end = mid - 1
            }
        }

    }

    return -1
};
// @lc code=end

