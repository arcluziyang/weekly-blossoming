import contractTwoSortedArr from '../src/contractTwoSortedArr';

const num1 = [1, 2, 3, 0, 0, 0];
const num2 = [1, 2, 3, 0, 0, 0];
describe('合并两个有序数组', () => {
  it('合并两个有序数组', () => {
    contractTwoSortedArr(num1, 3, [2, 5, 6], 3);
    expect(num1).toEqual([1, 2, 2, 3, 5, 6]);
    contractTwoSortedArr(num2, 2, [2, 5, 6], 2);
    expect(num2).toEqual([1, 2, 2, 5]);
  });
});
