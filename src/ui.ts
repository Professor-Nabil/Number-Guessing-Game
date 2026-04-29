import { intro, outro, note, select, isCancel, cancel } from "@clack/prompts";
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
