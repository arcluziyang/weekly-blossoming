/** *
 * 题目描述：https://leetcode-cn.com/problems/longest-common-prefix/
 * * */

/**
 * 方法：
 *  1、获取第一个字符串，配置为最小前缀，配置其长度为最小前缀长度
 *  2、遍历其他字符串，检查长度，字符比较
 * * */
/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function (strs) {
  // 空值检测
  if (!strs || strs.length === 0) {
    return '';
  }

  const commonPrefix = strs.shift();
  let subIndex = commonPrefix.length;

  strs.forEach((d) => {
    if (d.length < subIndex) {
      subIndex = d.length;
    }

    for (let i = 0; i < subIndex; i += 1) {
      if (d.charAt(i) !== commonPrefix.charAt(i)) {
        if (i < subIndex) {
          subIndex = i;
          break;
        }
      }
    }
  });
  return commonPrefix.substr(0, subIndex);
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['aa', 'a']));
