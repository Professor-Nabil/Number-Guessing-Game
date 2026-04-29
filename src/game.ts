import {
  askDifficulty,
  confirmDifficulty,
  askGuess,
  showFeedback,
  showWin,
  showLoss,
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

    // If not correct, show hint (unless it was the last chance)
    if (attempts < chances) {
      showFeedback(result, guess);
    }
  }

  if (!hasWon) {
    showLoss(targetNumber);
  }

  return { hasWon, attempts, level };
};
