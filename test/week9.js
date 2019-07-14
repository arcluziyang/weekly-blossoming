import { flipAndInvertImage } from '../src/index';

describe('水平翻转图像，然后反转图像并返回结果', () => {
  it('水平翻转即为逆序,反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换', () => {
    expect(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))
      .toEqual([[1, 0, 0], [0, 1, 0], [1, 1, 1]]);
    expect(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]))
      .toEqual([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]);
  });
});
