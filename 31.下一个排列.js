/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    function reverseRange(A, i, j) {
        while(i<j) {
            let temp = A[i]
            A[i] = A[j]
            A[j] = temp
            i++
            j--
        }
    }

    if(nums.length <= 1 || nums === null) return

    let i = nums.length - 2 
    
    // [3,5,1,4,2]
    // i = 3
    // 从后往前找到第一个降序的，相当于找到回溯点
    while(i>-1 && nums[i+1] <= nums[i]) i--;

    // i = 2
    // [3,5,2,4,1]
    // 如果找了i就交换
    if(i > -1) {
        let j = nums.length - 1
        // 找到从右边起第一个大于nums[i]的，并将其和nums[i]进行交换
        // 因为如果交换的数字比nums[i]还要小肯定不符合题意
        while(nums[j] <= nums[i]) j--
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    // 最后我们只需要将剩下的元素从左到右，依次填入当前最小的元素就可以保证是大于当前排列的最小值了
    // [i + 1, A.length -1]的元素进行反转
    // [3,5,2,1,4]
    reverseRange(nums, i + 1, nums.length - 1);

    return nums
};
// @lc code=end

