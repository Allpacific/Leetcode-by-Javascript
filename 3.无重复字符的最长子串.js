/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/*
O(n*2) 自己写的 
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0
    var maxLen = 0
    for(let i=0; i<s.length; i++) {
        var substr = new Map()
        var countLen = 1
        substr.set(s[i], i)
        for(let j = i + 1; j < s.length; j++) {
            if(substr.has(s[j])) break
            else {
                countLen++;
                substr.set(s[j], j)
            }
        }
        if(countLen > maxLen) {
            maxLen = countLen
        }
    }
    return maxLen
}; */

var lengthOfLongestSubstring = function(s) {
    var count = 0 // 记录字符数目
    var t = []
    var i = 0 // 从第i位开始
    while(i < s.length) {
        if(t.indexOf(s[i]) === -1) {
            t.push(s[i])
        }else {
            t.shift()
            continue
        }
        i++;
        count = Math.max(count, t.length)
    }
    return count
};
// @lc code=end

