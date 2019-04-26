import { sum } from '../src/index';

describe('验证求和', () => {
  it('输出数组中两个数字和为target的下标', () => {
    expect(sum([1, 3, 5, 8, 9], 8)).toEqual([1, 2]);
  });
});
