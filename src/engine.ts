import { ComparisonResult } from "./types.js";

/**
 * Generates a random integer between min and max (inclusive)
 */
export const generateTargetNumber = (
  min: number = 1,
  max: number = 100,
): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Compares the user guess against the target number
 */
export const compareNumbers = (
  target: number,
  guess: number,
): ComparisonResult => {
  if (guess === target) return "correct";
  return guess > target ? "high" : "low";
};

/**
 * Generates a helpful hint about the target number
 */
export const getHint = (
  target: number,
  attemptCount: number,
): string | null => {
  // Only provide a hint on exactly the 3rd attempt
  if (attemptCount !== 3) return null;

  const isEven = target % 2 === 0;
  const parityHint = `The number is ${isEven ? "Even" : "Odd"}.`;

  const isTopHalf = target > 50;
  const rangeHint = `It is in the ${isTopHalf ? "upper" : "lower"} half (1-100).`;

  return `${parityHint} Also, ${rangeHint}`;
};
