import {
  askDifficulty,
  confirmDifficulty,
  askGuess,
  showFeedback,
  showWin,
  showLoss,
  showSummary,
} from "./ui.js";
import { generateTargetNumber, compareNumbers } from "./engine.js";
import { GAME_LEVELS } from "./types.js";

export const startRound = async () => {
  const level = await askDifficulty();
  confirmDifficulty(level);

  const { chances } = GAME_LEVELS[level];
  const targetNumber = generateTargetNumber(1, 100);

  let attempts = 0;
  let hasWon = false;

  while (attempts < chances) {
    attempts++;
    const guess = await askGuess();
    const result = compareNumbers(targetNumber, guess);

    if (result === "correct") {
      showWin(attempts);
      hasWon = true;
      break;
    }

    if (attempts < chances) {
      showFeedback(result, guess);
    }
  }

  if (!hasWon) {
    showLoss(targetNumber);
  }

  showSummary(hasWon, targetNumber, attempts);

  return {
    hasWon,
    attempts,
    level,
    targetNumber,
  };
};
