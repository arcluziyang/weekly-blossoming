import { findTheDifference } from '../src/index';

describe('找不同', () => {
  it('t比s多一个与其他字符都不一样的字符, 找到它 ', () => {
    expect(findTheDifference('abcd', 'abcde')).toEqual('e');
  });
});
