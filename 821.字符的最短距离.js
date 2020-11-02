/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    const result = new Array(S.length)
    for (i = 0; i < S.length; i++) {
        result[i] = 1000000
        if (S[i] === C) {
            result[i] = 0
            continue
        }
        for (let j = i - 1; j >= 0; j--) {
            if (S[j] === C) {
                result[i] = i - j
                break
            }
        }
        for (let j = i + 1; j < S.length; j++) {
            if (S[j] === C) {
                result[i] = Math.min(result[i], j - i)
                break
            }
        }
    }
    return result
};
// @lc code=end

