import { Difficulty } from "./types.js";

// Initialize with null or Infinity so any first win becomes the high score
export const highScores: Record<Difficulty, number | null> = {
  Easy: null,
  Medium: null,
  Hard: null,
};

/**
 * Updates the high score if the new attempts are lower than the existing record.
 * Returns true if a new high score was set.
 */
export const updateHighScore = (
  level: Difficulty,
  attempts: number,
): boolean => {
  const currentBest = highScores[level];

  if (currentBest === null || attempts < currentBest) {
    highScores[level] = attempts;
    return true;
  }

  return false;
};
