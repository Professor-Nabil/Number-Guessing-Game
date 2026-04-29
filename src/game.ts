import { askDifficulty, confirmDifficulty, askGuess } from "./ui.js";
import { generateTargetNumber } from "./engine.js";
import { GAME_LEVELS } from "./types.js";

export const startRound = async () => {
  const level = await askDifficulty();
  confirmDifficulty(level);

  const { chances } = GAME_LEVELS[level];
  const targetNumber = generateTargetNumber(1, 100);

  // For testing Commit 4: Prompt for a single guess
  const userGuess = await askGuess();

  return {
    targetNumber,
    chances,
    level,
    firstGuess: userGuess, // Temporarily passing this back
  };
};
