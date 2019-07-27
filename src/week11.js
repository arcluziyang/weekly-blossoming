/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * https://leetcode-cn.com/problems/find-the-difference/
 */
export default function findTheDifference(s, t) {
  const sArr = s.split('');
  sArr.forEach((i) => {
    const index = t.indexOf(i);
    if (index !== -1) {
      t = t.replace(i, '');
    }
  });
  return t;
}
