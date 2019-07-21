import { generate } from '../src/index';

describe('杨辉三角', () => {
  it('给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。', () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
  });
});
