/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode-cn.com/explore/interview/card/top-interview-quesitons-in-2018/275/string/1136/
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 */
const isPalindrome = function isPalindrome(s) {
  const originString = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();

  const length = originString.length;
  for (let i = 0; i < length; i += 1) {
    if (originString[i] !== originString[length - i - 1]) {
      return false;
    }
  }

  return true;
};

export default isPalindrome;
