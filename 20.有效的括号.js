/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length<=1) return false

    let map = new Map()
    let stack = []
    let len 

    map.set('(', ')')
    map.set('{', '}')
    map.set('[', ']')

    for(let i=0; i<s.length; i++) {
        len = stack.length
        if(map.has(s[i])) {
            stack.push(s[i])
        }else {
            if(map.get(stack[len - 1]) === s[i]) stack.pop()
            else stack.push(s[i])
        }
    }

    return stack.length === 0 ? true : false
    
};
// @lc code=end

