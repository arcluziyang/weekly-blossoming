/**
 * @param {number[]} digits
 * @return {number[]}
 */
export default function plusOne(digits = []) {
  // 标识进位符
  let j = 1;
  const len = digits.length;
  for (let i = len - 1; i >= 0; i -= 1) {
    // 标识最后一位
    const temp = digits[i] + j;
    if (temp > 9) {
      digits[i] = 0;
    } else {
      j = 0;
      digits[i] = temp;
      break;
    }
  }
  /* 如果到第一位的j也需要进位，给该数组头部插入1 : 考虑的是[9,9]->[1,0,0]的这种情况
*/
  if (j > 0) {
    digits.unshift(1);
  }
  return digits;
}

