import { numJewelsInStones } from '../src/index';

describe('宝石与石头', () => {
  it('给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。', () => {
    expect(numJewelsInStones('aA', 'aAAbbb')).toBe(3);
    expect(numJewelsInStones('z', 'ZZ')).toBe(0);
  });
});
