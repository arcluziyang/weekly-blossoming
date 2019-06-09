import { lengthOfLastWord } from '../src/index';

describe('最后一个单词的长度', () => {
  it('给定一个仅包含大小写字母和空格 " " 的字符串，返回其最后一个单词的长度。如果不存在最后一个单词，请返回 0 。', () => {
    expect(lengthOfLastWord('123 123   ')).toBe(3);
    expect(lengthOfLastWord(' ')).toBe(0);
  });
});
