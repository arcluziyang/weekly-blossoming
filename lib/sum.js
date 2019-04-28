"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sum;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function sum() {
  var nums = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var target = arguments.length > 1 ? arguments[1] : undefined;

  for (var i = 0; i < nums.length; i += 1) {
    for (var j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}