import { displayWelcome, sayGoodbye, askPlayAgain, clearScreen } from "./ui.js";
import { startRound } from "./game.js";

async function main() {
  let playing = true;

  while (playing) {
    clearScreen();
    displayWelcome();

    await startRound();

    const wantToPlayAgain = await askPlayAgain();

    if (!wantToPlayAgain) {
      playing = false;
    }
  }

  sayGoodbye();
}

main().catch((err) => {
  console.error("An unexpected error occurred:", err);
  process.exit(1);
});
