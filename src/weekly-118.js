/** *
 * 题目描述：https://leetcode-cn.com/problems/pascals-triangle/comments/
 *
 * - 杨辉三角
 * * */
export const generate = function(numRows) {
    const arr = [];
    for (let i = 1; i <= numRows; i++) {
        const row = [];
        for (let j = 0; j < i; j++) {
            if (j == 0 || j == i - 1) {
                row.push(1);
            } else {
                row.push(arr[i - 2][j - 1] + arr[i - 2][j]);
            }
        }
        arr.push(row);
    }

    return arr;
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(3));