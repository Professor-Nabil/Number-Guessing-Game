/**
 * Generates a random integer between min and max (inclusive)
 */
export const generateTargetNumber = (
  min: number = 1,
  max: number = 100,
): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
