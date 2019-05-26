import {
  isPalindrome1,
  isPalindrome2,
  isPalindrome3,
} from '../src/weekly-9';

describe('数字回文验证', () => {
  it('数字回文验证一', () => {
    expect(isPalindrome1(121)).toBe(true);
    expect(isPalindrome1(-121)).toBe(false);
    expect(isPalindrome1(10)).toBe(false);
    expect(isPalindrome1(222)).toBe(true);
    expect(isPalindrome1(101)).toBe(true);
    expect(isPalindrome1(-101)).toBe(false);
  });

  it('数字回文验证二', () => {
    expect(isPalindrome2(121)).toBe(true);
    expect(isPalindrome2(-121)).toBe(false);
    expect(isPalindrome2(10)).toBe(false);
    expect(isPalindrome2(222)).toBe(true);
    expect(isPalindrome2(101)).toBe(true);
    expect(isPalindrome2(-101)).toBe(false);
  });

  it('数字回文验证三', () => {
    expect(isPalindrome3(121)).toBe(true);
    expect(isPalindrome3(-121)).toBe(false);
    expect(isPalindrome3(10)).toBe(false);
    expect(isPalindrome3(222)).toBe(true);
    expect(isPalindrome3(101)).toBe(true);
    expect(isPalindrome3(-101)).toBe(false);
  });
});
