/** 返り値は音名を示す整数値 */
export const convertToNote = (stringPosition: number, flatPosition: number) => {
  const offset = 22 - ((stringPosition + 2) % 5) * 5;
  return (flatPosition + offset) % 12;
};

/** 返り値は音名を示す整数値 */
export const convertToFlat = (stringPosition: number, note: number) => {
  const offset = 38 - ((stringPosition + 2) % 5) * 7;
  return (note + offset) % 12;
};
