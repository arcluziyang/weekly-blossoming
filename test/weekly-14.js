import {
  longestCommonPrefix,
} from '../src/weekly-14';

describe('最长公共前缀', () => {
  it('最长公共前缀', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    expect(longestCommonPrefix(['aa', 'a'])).toBe('a');
  });
});
