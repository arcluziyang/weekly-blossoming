/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 * https://leetcode-cn.com/problems/jewels-and-stones/
 */
export default function numJewelsInStones(J, S) {
  const gems = J.split('');
  let gemNum = 0;
  gems.forEach((gem) => {
    const num = (S.split(gem)).length - 1;
    if (num) {
      gemNum += num;
    }
  });
  return gemNum;
}

