import {
  intro,
  outro,
  note,
  select,
  isCancel,
  cancel,
  text,
  confirm,
} from "@clack/prompts";
import { Difficulty } from "./types.js";
import pc from "picocolors";
import { highScores } from "./state.js";

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
  timeTaken?: string,
) => {
  if (hasWon) {
    let message =
      `You found the number ${pc.cyan(target)}!\n` +
      `Total attempts: ${pc.yellow(attempts)}`;

    if (timeTaken) {
      message += `\nTime taken: ${pc.magenta(timeTaken + " seconds")}`;
    }

    note(message, pc.green(pc.bold("SUCCESS")));
  } else {
    note(
      `Better luck next time!\nThe correct number was: ${pc.cyan(target)}`,
      pc.red(pc.bold("FAILED")),
    );
  }
};

export const askPlayAgain = async (): Promise<boolean> => {
  const choice = await confirm({
    message: "Do you want to play another round?",
    initialValue: true,
  });

  if (isCancel(choice)) return false;

  return choice as boolean;
};

export const showNewHighScore = (attempts: number) => {
  note(pc.magenta(pc.bold(`🏆 NEW HIGH SCORE! Only ${attempts} attempts! `)));
};

// Optional: Add a function to show current bests at the start
export const displayHighScores = (scores: typeof highScores) => {
  const lines = Object.entries(scores)
    .map(([level, score]) => `${level}: ${score ?? "No record yet"}`)
    .join("\n");

  note(lines, "Current High Scores");
};

export const showHint = (hint: string) => {
  note(pc.blue(hint), "💡 Hint");
};
