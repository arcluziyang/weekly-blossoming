/**
 * https://leetcode-cn.com/problems/length-of-last-word/
 * @param {string}
 * @return {number}
 */
export default function lengthOfLastWord(s) {
  const a = s.trim().split('');
  let emptyIndex;
  a.forEach((b, index) => {
    if (b === ' ') {
      emptyIndex = index;
    }
  });
  let c;
  // 如果字符串内有空格或只有一个空格
  if (emptyIndex) {
    c = a.slice(emptyIndex + 1);
  } else {
    c = a;
  }
  return c.length;
}
