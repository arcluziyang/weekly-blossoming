import reverseString from '../src/reverseString';

const num1 = ['a','b','c'];
const num2 = ['a','b','c','d'];
describe('合并两个有序数组', () => {
  it('合并两个有序数组', () => {
    contractTwoSortedArr(num1, 3, [2, 5, 6], 3);
    expect(num1).toEqual([1, 2, 2, 3, 5, 6]);
    contractTwoSortedArr(num2, 2, [2, 5, 6], 2);
    expect(num2).toEqual([1, 2, 2, 5]);
  });
});
