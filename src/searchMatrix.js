/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
export default function searchMatrix(matrix, target) {
  let result = false;
  matrix.forEach((array) => {
    if (result) {
      return;
    }
    const first = array[0];
    const end = array[array.length - 1];
    if (target < first || target > end) {
      return;
    }

    result = array.includes(target);
  });

  return result;
};
