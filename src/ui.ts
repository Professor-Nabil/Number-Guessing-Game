import { intro, outro, note } from "@clack/prompts";
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
