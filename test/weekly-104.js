import {
  maxDepth,
} from '../src/weekly-104';

describe('求二叉树的最大深度', () => {
  it('求二叉树的最大深度', () => {
    expect(maxDepth([3, 9, 20, null, null, 15, 7])).toBe(3);
    expect(maxDepth([3, 9, 20, null, null])).toBe(2);
    expect(maxDepth([3, 9, 20])).toBe(2);
  });
});
