"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = strStr;

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * https://leetcode-cn.com/problems/implement-strstr/
 */
function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}