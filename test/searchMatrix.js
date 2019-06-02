import searchMatrix from '../src/searchMatrix';

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
describe('搜索二维矩阵', () => {
  it('搜索目标值', () => {
    expect(searchMatrix(matrix, 5)).toBe(true);
    expect(searchMatrix(matrix, 20)).toBe(false);
  });
});
