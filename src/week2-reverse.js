/**
 * 题目: https://leetcode-cn.com/problems/reverse-integer/
 * @param {number} x
 * @return {number[]}
 */
export default function reverseTwo(x) {
  //  2^31
  const n = 2 ** 31;
  // 给定最大值: 2^31-1
  const max = n - 1;
  // 给定最大值: -2^31
  const min = -n;
  const abs = Math.abs(x);
  const a = `${abs}`;
  const b = a.split('').reverse().join('');
  // 如果该值得绝对值与该值相等,那么该值为正整数
  if (abs === x) {
    if (b > max) {
      return 0;
    }
    return b;
  } else {
    if (-b < min) {
      return 0;
    }
    return -b;
  }
}
