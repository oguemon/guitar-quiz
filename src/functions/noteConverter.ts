/** 返り値は音名を示す整数値 */
export const convertToNote = (stringPosition: number, fretPosition: number) => {
  const offset = 22 - ((stringPosition + 2) % 5) * 5;
  return (fretPosition + offset) % 12;
};

/** 返り値は音名を示す整数値 */
export const convertToFret = (stringPosition: number, note: number) => {
  const offset = 38 - ((stringPosition + 2) % 5) * 7;
  return (note + offset) % 12;
};
