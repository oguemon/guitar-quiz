import { describe, expect, test, vi } from 'vitest';
import { randomN } from './random';

describe('randomN', () => {
  test('乱数の範囲が引数通りである', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0);
    expect(randomN(6)).toBe(0);
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.99999);
    expect(randomN(6)).toBe(6);

    vi.spyOn(Math, 'random').mockReturnValueOnce(0);
    expect(randomN(6, 2)).toBe(2);
    vi.spyOn(Math, 'random').mockReturnValueOnce(0.99999);
    expect(randomN(6, 2)).toBe(6);
  });

  test('乱数の最大値が最小値より大きい時以外は最小値を返す', () => {
    expect(randomN(5, 6)).toBe(6);
    expect(randomN(6, 6)).toBe(6);
  });
});
