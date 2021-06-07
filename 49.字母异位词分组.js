/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 桶排序

    // 存储26个字母，初始每个出现次数为0
    let counts = []
    
    const hashTable = {}
    for(let i=0; i<strs.length; i++) {
        const str = strs[i]
        counts = Array(26).fill(0)
        for(let j=0; j<str.length; j++) {
            counts[str[j].charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        const key = counts.join('-')
        if(!hashTable[key]) {
            hashTable[key] = [str]
        }else {
            hashTable[key].push(str)
        }
    }
    return Object.values(hashTable)
};
// @lc code=end

