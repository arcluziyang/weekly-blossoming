/** *
 * 题目描述：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/comments/
 * * */
export const removeDuplicates = function (nums) {
  let i = 0;
  for (let j = i + 1; j < nums.length; j += 1) {
    if (nums[i] !== nums[j]) {
      i += 1;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
