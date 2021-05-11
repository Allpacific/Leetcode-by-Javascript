/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 * 二分查找
 * 满足两个条件：
 *   1.len(left_part)=len(right_part)
 *   2.max(left_part)<=min(right_part)
 * 复杂度为O(log(min(m,n)))
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 保证用短的数组进行二分查找
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;
    while (low <= high) {
        // 1.满足第一个条件
        //     len(left_part)==len(right_part)
        // 即满足: m+n为奇数时：i+j==m-i+n-j (1)
        //        m+n为偶数时：i+j==m-i+n-j+1 (2)
        //        (1)式得 j=(m+n)/2-i
        //        (2)式得 j=(m+n+1)/2-i
        //      对于一个偶数，取整除法 n/2 == (n+1)/2
        //      所以(2)式得出的j可以取代(1)式得出的j
        // 当n>=m时  i=0~m,j=(m+n+1)/2-i
        const i = low + Math.floor((high - low) / 2);
        const j = Math.floor((m + n + 1) / 2) - i;

        const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
        const minRightA = i === m ? Infinity : nums1[i];
        const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
        const minRightB = j === n ? Infinity : nums2[j];

        // 2.满足第二个条件
        if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
            return (m + n) % 2 === 1 ? Math.max(maxLeftA, maxLeftB) :
                (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
        } else if (maxLeftA > minRightB) {
            high = i - 1;
        } else {
            low = low + 1;
        }

    }
};
// @lc code=end

