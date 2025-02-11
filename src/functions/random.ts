export const randomN = (max: number, min: number = 0) => {
  if (max <= min) return min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
