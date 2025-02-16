import { expect, test } from 'vitest';
import { convertToFret, convertToNote } from './noteConverter';

test('弦番号とフレット位置に基づいて音名が出る', () => {
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

test('弦番号と音名に基づいてフレット位置が出る', () => {
  expect(convertToFret(6, 7)).toBe(0); // E
  expect(convertToFret(6, 8)).toBe(1); // F
  expect(convertToFret(6, 10)).toBe(3); // G
  expect(convertToFret(6, 0)).toBe(5); // A
  expect(convertToFret(6, 2)).toBe(7); // B
  expect(convertToFret(6, 3)).toBe(8); // C
  expect(convertToFret(6, 5)).toBe(10); // D

  expect(convertToFret(5, 0)).toBe(0); // A
  expect(convertToFret(5, 2)).toBe(2); // B
  expect(convertToFret(5, 3)).toBe(3); // C
  expect(convertToFret(5, 5)).toBe(5); // D
  expect(convertToFret(5, 7)).toBe(7); // E
  expect(convertToFret(5, 8)).toBe(8); // F
  expect(convertToFret(5, 10)).toBe(10); // G

  expect(convertToFret(4, 5)).toBe(0); // D
  expect(convertToFret(4, 7)).toBe(2); // E
  expect(convertToFret(4, 8)).toBe(3); // F
  expect(convertToFret(4, 10)).toBe(5); // G
  expect(convertToFret(4, 0)).toBe(7); // A
  expect(convertToFret(4, 2)).toBe(9); // B
  expect(convertToFret(4, 3)).toBe(10); // C

  expect(convertToFret(3, 10)).toBe(0); // G
  expect(convertToFret(3, 0)).toBe(2); // A
  expect(convertToFret(3, 2)).toBe(4); // B
  expect(convertToFret(3, 3)).toBe(5); // C
  expect(convertToFret(3, 5)).toBe(7); // D
  expect(convertToFret(3, 7)).toBe(9); // E
  expect(convertToFret(3, 8)).toBe(10); // F

  expect(convertToFret(2, 2)).toBe(0); // B
  expect(convertToFret(2, 3)).toBe(1); // C
  expect(convertToFret(2, 5)).toBe(3); // D
  expect(convertToFret(2, 7)).toBe(5); // E
  expect(convertToFret(2, 8)).toBe(6); // F
  expect(convertToFret(2, 10)).toBe(8); // G
  expect(convertToFret(2, 0)).toBe(10); // A

  expect(convertToFret(1, 7)).toBe(0); // E
  expect(convertToFret(1, 8)).toBe(1); // F
  expect(convertToFret(1, 10)).toBe(3); // G
  expect(convertToFret(1, 0)).toBe(5); // A
  expect(convertToFret(1, 2)).toBe(7); // B
  expect(convertToFret(1, 3)).toBe(8); // C
  expect(convertToFret(1, 5)).toBe(10); // D
});
