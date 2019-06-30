import {
  containsDuplicate,
} from '../src/weekly-217';

describe('检测数组是否存在重复元素', () => {
  it('检测数组是否存在重复元素', () => {
    expect(containsDuplicate([])).toBe(false);
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
