/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length < 1) return []
    let len = digits.length
    let digitMap = new Map()
    digitMap.set("2", "abc")
    digitMap.set("3", "def")
    digitMap.set("4", "ghi")
    digitMap.set("5", "jkl")
    digitMap.set("6", "mno")
    digitMap.set("7", "pqrs")
    digitMap.set("8", "tuv")
    digitMap.set("9", "wxyz")
    let result = []

    // i为当前串的长度
    function generate(i, str) {
        if(i === len) {
            result.push(str)
            return
        }
        let t = digitMap.get(digits[i])
        for(let j=0; j<t.length; j++) {
            generate(i+1, str+t[j])
        }
    }
    generate(0, '')

    return result
};


// @lc code=end

