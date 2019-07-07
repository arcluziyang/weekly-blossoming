/**
 * https://leetcode-cn.com/problems/majority-element/
 */
export const mode = (nums) => {
  nums = nums.sort();
  let max = 0;
  let key;
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    if (nums[i] === key || i === 0) {
      max += 1;
      key = nums[i];
      if (max > len / 2) return key;
    } else {
      key = nums[i];
      max = 1;
    }
  }
}
