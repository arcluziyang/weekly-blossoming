import { plusOne } from '../src/index';

describe('给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一', () => {
  it('数组中每个元素只存储一个数字。', () => {
    expect(plusOne([0])).toEqual([1]);
    expect(plusOne([9])).toEqual([1, 0]);
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  });
});
