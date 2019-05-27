/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
export function singleNumberA(nums = []) {
  let res;
  nums.forEach((number) => {
    /**
     * 异或法
     * 相同的数字经过异或运算后结果为0
     * 任何数字与0进行异或运算都是该数字本身
     * @type {number}
     */
    res ^= number;
  });

  return res;
}


/**
 * @param {number[]} nums
 * @return {number}
 */
export function singleNumberB(nums) {
  const obj = {};
  nums.forEach((num) => {
    if (obj[num]) {
      delete obj[num];
    } else {
      obj[num] = true;
    }
  });
  return Number(Object.keys(obj)[0]) || 0;
}
