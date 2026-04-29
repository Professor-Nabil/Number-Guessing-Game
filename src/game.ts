import {
  askDifficulty,
  confirmDifficulty,
  askGuess,
  showFeedback,
  showWin,
  showLoss,
  showSummary,
  showNewHighScore,
} from "./ui.js";
import { updateHighScore } from "./state.js";
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

  showSummary(hasWon, targetNumber, attempts);

  if (hasWon) {
    const isNewRecord = updateHighScore(level, attempts);
    if (isNewRecord) {
      showNewHighScore(attempts);
    }
  }

  return {
    hasWon,
    attempts,
    level,
    targetNumber,
  };
};
