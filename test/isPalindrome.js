import isPalindrome from '../src/isPalindrome';

describe('回文串', () => {
  it('验证它是否是回文串', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('race a car')).toBe(false);
  });
});
