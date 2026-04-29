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
import { formatDuration } from "./utils.js";

export const startRound = async () => {
  const level = await askDifficulty();
  confirmDifficulty(level);

  const { chances } = GAME_LEVELS[level];
  const targetNumber = generateTargetNumber(1, 100);

  let attempts = 0;
  let hasWon = false;

  const startTime = performance.now();

  while (attempts < chances) {
    attempts++;
    const guess = await askGuess();
    const result = compareNumbers(targetNumber, guess);

    if (result === "correct") {
      hasWon = true;
      break;
    }

    if (attempts < chances) {
      showFeedback(result, guess);
    }
  }

  const endTime = performance.now();
  const timeString = hasWon ? formatDuration(startTime, endTime) : undefined;

  showSummary(hasWon, targetNumber, attempts, timeString);

  if (hasWon) {
    const isNewRecord = updateHighScore(level, attempts);
    if (isNewRecord) {
      showNewHighScore(attempts);
    }
  }

  return { hasWon, attempts, level };
};
