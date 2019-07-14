import reverseString from '../src/reverseString';

describe('反转字符串', () => {
  it('空数据', () => {
    expect(reverseString([])).toEqual([]);
  });
  it('奇数长度', () => {
    expect(reverseString(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
  });
  it('偶数长度', () => {
    expect(reverseString(['a', 'b', 'c', 'd'])).toEqual(['d', 'c', 'b', 'a']);
  });
});
