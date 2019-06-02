"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPalindrome3 = exports.isPalindrome2 = exports.isPalindrome1 = void 0;

/** *
 * 题目描述：https://leetcode-cn.com/problems/palindrome-number/
 * * */
// 方法一：转字符串反转后，拼接为字符串，比较两个字符串是否相等
var isPalindrome1 = function isPalindrome1(x) {
  if (x < 0) {
    return false;
  }

  if (x === 0) {
    return true;
  }

  var origin = x.toString();
  var array = origin.split('');
  var target = array.reverse().join('');
  return origin === target;
}; // 方法二：转换为字符串数组，比较对应位置上的值是否相同


exports.isPalindrome1 = isPalindrome1;

var isPalindrome2 = function isPalindrome2(x) {
  return function (s) {
    var i = 0;
    var j = s.length - 1;

    while (j >= i) {
      if (s[j] === s[i]) {
        i += 1;
        j -= 1;
      } else {
        return false;
      }
    }

    return true;
  }(x.toString());
}; // 方法三：分别用栈和队列保存每个位置上的数字，然后取出来判断是否相等 - 不在将数字转换为字符串


exports.isPalindrome2 = isPalindrome2;

var isPalindrome3 = function isPalindrome3(x) {
  if (x < 0) {
    return false;
  }

  if (x === 0) {
    return true;
  }

  var backupX = x;
  var stack = [];
  var queue = [];

  while (backupX > 0) {
    var residue = backupX % 10;
    stack.push(residue);
    queue.push(residue);
    backupX = parseInt(backupX / 10, 10);
  }

  while (stack.length > 0) {
    if (stack.pop() !== queue.shift()) {
      return false;
    }
  }

  return true;
};

exports.isPalindrome3 = isPalindrome3;