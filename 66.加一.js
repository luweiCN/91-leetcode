/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(Array.isArray(digits) && digits.length < 1) {
        throw new Error('必须传入不为空的数组')
    }
    let index = digits.length - 1
    let carry = 1 // 模拟+1操作，把+1的操作也当场进位处理
    while(carry != 0 || index >=0) {
        let result = digits[index] + carry
        carry = result >= 10 ? 1 : 0
        if (index >= 0) {
            digits[index] = result % 10
        } else {
            // 当数组已经遍历完了，但是还有进位，直接在数组前添加一个数字1s
            digits.unshift(1)
        }

        index--
    }
    return digits
};

// console.log(plusOne([9]))
// @lc code=end

