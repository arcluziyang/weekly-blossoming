import {
  removeElement,
} from '../src/weekly-27';

describe('移除元素', () => {
  it('移除元素', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
  });
});
