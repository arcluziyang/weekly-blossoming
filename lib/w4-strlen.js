"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = lengthOfLastWord;

/**
 * https://leetcode-cn.com/problems/length-of-last-word/
 * @param {string}
 * @return {number}
 */
function lengthOfLastWord(s) {
  var a = s.trim().split('');
  var emptyIndex;
  a.forEach(function (b, index) {
    if (b === ' ') {
      emptyIndex = index;
    }
  });
  var c; // 如果字符串内有空格或只有一个空格

  if (emptyIndex) {
    c = a.slice(emptyIndex + 1);
  } else {
    c = a;
  }

  return c.length;
}