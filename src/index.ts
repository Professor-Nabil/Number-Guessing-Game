import { displayWelcome, sayGoodbye } from "./ui.js";

async function main() {
  displayWelcome();

  // We will add the game loop here in the next commit

  sayGoodbye();
}

main().catch((err) => {
  console.error("An unexpected error occurred:", err);
  process.exit(1);
});
