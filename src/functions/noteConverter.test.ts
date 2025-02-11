import { expect, test } from 'vitest';
import { convertToFlat, convertToNote } from './noteConverter';

test('弦番号とフラット位置に基づいて音名が出る', () => {
  expect(convertToNote(6, 0)).toBe(7); // E
  expect(convertToNote(6, 1)).toBe(8); // F
  expect(convertToNote(6, 12)).toBe(7); // E
  expect(convertToNote(6, 13)).toBe(8); // F

  expect(convertToNote(5, 0)).toBe(0); // A
  expect(convertToNote(5, 1)).toBe(1); // A♯/B♭
  expect(convertToNote(5, 12)).toBe(0); // A
  expect(convertToNote(5, 13)).toBe(1); // A♯/B♭

  expect(convertToNote(4, 0)).toBe(5); // D
  expect(convertToNote(4, 1)).toBe(6); // D♯/E♭
  expect(convertToNote(4, 12)).toBe(5); // D
  expect(convertToNote(4, 13)).toBe(6); // D♯/E♭

  expect(convertToNote(3, 0)).toBe(10); // G
  expect(convertToNote(3, 1)).toBe(11); // G♯/A♭
  expect(convertToNote(3, 12)).toBe(10); // G
  expect(convertToNote(3, 13)).toBe(11); // G♯/A♭

  expect(convertToNote(2, 0)).toBe(2); // B
  expect(convertToNote(2, 1)).toBe(3); // C
  expect(convertToNote(2, 12)).toBe(2); // B
  expect(convertToNote(2, 13)).toBe(3); // C

  expect(convertToNote(1, 0)).toBe(7); // E
  expect(convertToNote(1, 1)).toBe(8); // F
  expect(convertToNote(1, 12)).toBe(7); // E
  expect(convertToNote(1, 13)).toBe(8); // F
});

test('弦番号と音名に基づいてフラット位置が出る', () => {
  expect(convertToFlat(6, 7)).toBe(0); // E
  expect(convertToFlat(6, 8)).toBe(1); // F
  expect(convertToFlat(6, 10)).toBe(3); // G
  expect(convertToFlat(6, 0)).toBe(5); // A
  expect(convertToFlat(6, 2)).toBe(7); // B
  expect(convertToFlat(6, 3)).toBe(8); // C
  expect(convertToFlat(6, 5)).toBe(10); // D

  expect(convertToFlat(5, 0)).toBe(0); // A
  expect(convertToFlat(5, 2)).toBe(2); // B
  expect(convertToFlat(5, 3)).toBe(3); // C
  expect(convertToFlat(5, 5)).toBe(5); // D
  expect(convertToFlat(5, 7)).toBe(7); // E
  expect(convertToFlat(5, 8)).toBe(8); // F
  expect(convertToFlat(5, 10)).toBe(10); // G

  expect(convertToFlat(4, 5)).toBe(0); // D
  expect(convertToFlat(4, 7)).toBe(2); // E
  expect(convertToFlat(4, 8)).toBe(3); // F
  expect(convertToFlat(4, 10)).toBe(5); // G
  expect(convertToFlat(4, 0)).toBe(7); // A
  expect(convertToFlat(4, 2)).toBe(9); // B
  expect(convertToFlat(4, 3)).toBe(10); // C

  expect(convertToFlat(3, 10)).toBe(0); // G
  expect(convertToFlat(3, 0)).toBe(2); // A
  expect(convertToFlat(3, 2)).toBe(4); // B
  expect(convertToFlat(3, 3)).toBe(5); // C
  expect(convertToFlat(3, 5)).toBe(7); // D
  expect(convertToFlat(3, 7)).toBe(9); // E
  expect(convertToFlat(3, 8)).toBe(10); // F

  expect(convertToFlat(2, 2)).toBe(0); // B
  expect(convertToFlat(2, 3)).toBe(1); // C
  expect(convertToFlat(2, 5)).toBe(3); // D
  expect(convertToFlat(2, 7)).toBe(5); // E
  expect(convertToFlat(2, 8)).toBe(6); // F
  expect(convertToFlat(2, 10)).toBe(8); // G
  expect(convertToFlat(2, 0)).toBe(10); // A

  expect(convertToFlat(1, 7)).toBe(0); // E
  expect(convertToFlat(1, 8)).toBe(1); // F
  expect(convertToFlat(1, 10)).toBe(3); // G
  expect(convertToFlat(1, 0)).toBe(5); // A
  expect(convertToFlat(1, 2)).toBe(7); // B
  expect(convertToFlat(1, 3)).toBe(8); // C
  expect(convertToFlat(1, 5)).toBe(10); // D
});
