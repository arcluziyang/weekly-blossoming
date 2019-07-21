/**
 * @param {number} numRows
 * @return {number[][]}
 * https://leetcode-cn.com/problems/pascals-triangle/submissions/
 */
export default function generate(numRows) {
  const arr = [];

  for (let i = 0; i < numRows; i += 1) {
    const addArr = [];
    for (let j = 0; j <= i; j += 1) {
      if (j === 0 || j === i) {
        addArr.push(1);
      } else { addArr.push(arr[i - 1][j - 1] + arr[i - 1][j]); }
    }
    arr.push(addArr);
  }
  return arr;
}
