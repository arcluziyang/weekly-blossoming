/** *
 * 题目描述：https://leetcode-cn.com/problems/contains-duplicate/
 *
 * - 给定一个整数数组，判断是否存在重复元素
 * * */
export const containsDuplicate = function (nums = []) {
  if (!nums || nums.length === 0) {
    return false;
  }

  const isDuplicate = nums.some((e, i) => {
    return nums.lastIndexOf(e) > i;
  });

  return isDuplicate;
};


console.log(containsDuplicate([]));
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
