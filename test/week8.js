import { toLowerCase } from '../src/index';

describe('大写转换为小写', () => {
  it('', () => {
    expect(toLowerCase('aA')).toBe('aa');
    expect(toLowerCase('ZZ')).toBe('zz');
  });
});
