import { generateTargetNumber } from "./engine.js";

export const startRound = async () => {
  const targetNumber = generateTargetNumber(1, 100);

  // For now, let's just prove it works.
  // We'll remove this once the game loop is ready.
  console.log(`(Psst... the target is ${targetNumber})`);

  return targetNumber;
};
