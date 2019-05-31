import { reverseTwo } from '../src/index';

describe('整数反转', () => {
  it('将带符号的整数上的数字进行反转', () => {
    expect(reverseTwo(-12)).toBe(-21);
    expect(reverseTwo(122)).toBe(221);
    expect(reverseTwo(1147483647)).toBe(0);
    expect(reverseTwo(-1147483647)).toBe(0);
  });
});
