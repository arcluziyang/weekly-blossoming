"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reverseTwo;

/**
 * 题目: https://leetcode-cn.com/problems/reverse-integer/
 * @param {number} x
 * @return {number[]}
 */
function reverseTwo(x) {
  //  2^31
  var n = Math.pow(2, 31); // 给定最大值: 2^31-1

  var max = n - 1; // 给定最大值: -2^31

  var min = -n;
  var abs = Math.abs(x);
  var a = "".concat(abs);
  var b = a.split('').reverse().join(''); // 如果该值得绝对值与该值相等,那么该值为正整数

  if (abs === x) {
    if (b > max) {
      return 0;
    }

    return Number(b);
  } else {
    if (-b < min) {
      return 0;
    }

    return -b;
  }
}