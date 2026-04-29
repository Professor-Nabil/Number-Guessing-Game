import {
  intro,
  outro,
  note,
  select,
  isCancel,
  cancel,
  text,
} from "@clack/prompts";
import { Difficulty } from "./types.js";
import pc from "picocolors";

export const displayWelcome = () => {
  intro(pc.bgCyan(pc.black(" NUMBER GUESSING GAME ")));
  note(
    `I'm thinking of a number between 1 and 100.\nCan you guess it before your chances run out?`,
    "Rules",
  );
};

export const sayGoodbye = () => {
  outro(pc.cyan("Thanks for playing! See you next time. 👋"));
};

export const askDifficulty = async (): Promise<Difficulty> => {
  const level = await select({
    message: "Please select the difficulty level:",
    options: [
      { value: "Easy", label: "1. Easy (10 chances)" },
      { value: "Medium", label: "2. Medium (5 chances)" },
      { value: "Hard", label: "3. Hard (3 chances)" },
    ],
  });

  if (isCancel(level)) {
    cancel("Game exited. See you!");
    process.exit(0);
  }

  return level as Difficulty;
};

export const confirmDifficulty = (level: string) => {
  note(
    `Great! You have selected the ${pc.bold(level)} difficulty level.\nLet's start the game!`,
  );
};

export const askGuess = async (): Promise<number> => {
  const guess = await text({
    message: "Enter your guess:",
    placeholder: "1-100",
    validate(value) {
      if (!value) return "Please enter a number"; // Handle the undefined/empty case
      const parsed = parseInt(value);
      if (isNaN(parsed)) return "Please enter a valid number";
      if (parsed < 1 || parsed > 100) return "Number must be between 1 and 100";
    },
  });

  if (isCancel(guess)) {
    cancel("Game exited. See you!");
    process.exit(0);
  }

  return parseInt(guess as string);
};

export const showFeedback = (result: "high" | "low", guess: number) => {
  const message =
    result === "high"
      ? `Incorrect! The number is ${pc.yellow("less")} than ${guess}.`
      : `Incorrect! The number is ${pc.yellow("greater")} than ${guess}.`;

  note(message);
};

export const showWin = (attempts: number) => {
  note(
    pc.green(
      `Congratulations! You guessed the correct number in ${attempts} attempts.`,
    ),
  );
};

export const showLoss = (target: number) => {
  note(
    pc.red(`Game Over! You've run out of chances. The number was ${target}.`),
  );
};

export const showSummary = (
  hasWon: boolean,
  target: number,
  attempts: number,
) => {
  if (hasWon) {
    note(
      `${pc.green(pc.bold("SUCCESS"))}\n` +
        `You found the number ${pc.cyan(target)}!\n` +
        `Total attempts: ${pc.yellow(attempts)}`,
      "Round Summary",
    );
  } else {
    note(
      `${pc.red(pc.bold("FAILED"))}\n` +
        `Better luck next time!\n` +
        `The correct number was: ${pc.cyan(target)}`,
      "Round Summary",
    );
  }
};
