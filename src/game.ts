import { askDifficulty, confirmDifficulty } from "./ui.js";
import { generateTargetNumber } from "./engine.js";
import { GAME_LEVELS } from "./types.js";

export const startRound = async () => {
  const level = await askDifficulty();
  confirmDifficulty(level);

  const { chances } = GAME_LEVELS[level];
  const targetNumber = generateTargetNumber(1, 100);

  // Return everything index.ts needs to run the loop later
  return {
    targetNumber,
    chances,
    level,
  };
};
