/** *
 * 题目描述：https://leetcode-cn.com/problems/remove-element/
 * * */

/**
 * 方法：
 *  splice 删除数组元素
 * * */
export const removeElement = function (nums, val) {
  // 空值检测
  if (!nums || nums.length === 0) {
    return 0;
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};


let num = [3, 2, 2, 3];
console.log(removeElement(num, 3), num);

num = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(num, 2), num);

num = [2];
console.log(removeElement(num, 3), num);

num = [3, 3];
console.log(removeElement(num, 3), num);

num = [2, 3];
console.log(removeElement(num, 3), num);

num = [1];
console.log(removeElement(num, 1), num);

num = [4, 5];
console.log(removeElement(num, 4), num);
