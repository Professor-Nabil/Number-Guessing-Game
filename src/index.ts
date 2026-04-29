import { displayWelcome, sayGoodbye, askPlayAgain } from "./ui.js";
import { startRound } from "./game.js";

async function main() {
  displayWelcome();

  let playing = true;

  while (playing) {
    await startRound();

    // Ask if they want to go again
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
