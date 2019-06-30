import {
  generate,
} from '../src/weekly-118';

describe('杨辉三角', () => {
  it('杨辉三角', () => {
    expect(generate(1)).toEqual([
      [1],
    ]);
    expect(generate(2)).toEqual([
      [1],
      [1, 1],
    ]);
    expect(generate(3)).toEqual(
      [
        [1],
        [1, 1],
        [1, 2, 1],
      ]);
  });
});
