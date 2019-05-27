import { singleNumberA, singleNumberB } from '../src/singleNumber';

describe('只出现一次的数字', () => {
  it('输出只出现一次的数字', () => {
    expect(singleNumberA([1, 2, 3, 1, 2, 3, 4])).toBe(4);
    expect(singleNumberB([1, 2, 3, 1, 2, 3, 4])).toBe(4);
  });

  it('不存在只出现一次的数字', () => {
    expect(singleNumberA([1, 1, 2, 2])).toBe(0);
    expect(singleNumberB([1, 1, 2, 2])).toBe(0);
  });
});
