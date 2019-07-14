/**
 * @param {number[][]} A
 * @return {number[][]}
 * https://leetcode-cn.com/problems/flipping-an-image/
 * 1 <= A.length = A[0].length <= 20
 * 0 <= A[i][j] <= 1
 */
export default function flipAndInvertImage(A = []) {
  const levelReverse = A.map((a) => {
    if (a && a.length) {
      return a.reverse();
    }
  });
  const imageReverse = levelReverse.map((B) => {
    const c = B.map(b => (b === 0 ? 1 : 0));
    return c;
  });
  return imageReverse;
}
