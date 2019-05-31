import { strThree } from '../src/index';

describe('实现strStr()', () => {
  it('在 haystack 字符串中找出 needle 字符串出现的第一个位置(从0开始)', () => {
    expect(strThree('123', '23')).toBe(1);
    expect(strThree('123', '4')).toBe(-1);
  });
});
