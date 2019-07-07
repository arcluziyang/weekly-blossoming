import {
  mode,
} from '../src/weekly-169';

describe('给定一个大小为n的数组，找到其中的众数', () => {
  it('众数是指数组中出现次数大于⌊ n/2 ⌋的元素。', () => {
    expect(mode([0, 2, 0])).toEqual(0);
    expect(mode([9, 6, 3, 5, 9, 9, 9, 9])).toEqual(9);
    expect(mode([9, 9])).toEqual(9);
    expect(mode([2147483647, 2147483647])).toEqual(2147483647);
  });
});
