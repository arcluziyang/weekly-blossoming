import { demo } from '../src/index';

describe('验证求和', () => {
  it('两个数字相加', () => {
    expect(demo(1, 2)).toBe(3);
  });
});
