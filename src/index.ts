import { displayWelcome, sayGoodbye } from "./ui.js";
import { startRound } from "./game.js";

async function main() {
  displayWelcome();

  const target = await startRound();

  sayGoodbye();
}

main().catch((err) => {
  console.error("An unexpected error occurred:", err);
  process.exit(1);
});
