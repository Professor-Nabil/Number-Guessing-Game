# File-Structure.md | Number Guessing Game

```text
.
├── src/
│   ├── index.ts          # Entry point: Orchestrates the game loop
│   ├── game.ts           # Game Controller: Manages the round flow (start to finish)
│   ├── engine.ts         # Pure Logic: Hot/Cold math and random number generation
│   ├── ui.ts             # CLI View: All Clack/Picocolors UI components and menus
│   ├── state.ts          # State Manager: Keeps track of High Scores and session data
│   ├── types.ts          # Type Definitions: Interfaces for Difficulty, Game Results, etc.
│   └── utils.ts          # Helpers: Timer calculations and number formatting
├── tests/
│   └── engine.test.ts    # Unit tests for the core logic
├── wiki/
│   ├── TODO.md
│   ├── TECH.md
│   └── File-Structure.md
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

### Detailed Responsibility Map

| File      | Responsibility                                                                         | Why it keeps index.ts clean                                                  |
| --------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| index.ts  | "The ""Brain."" It has a while(playing) loop that calls the game.ts function."         | "It doesn't care how a guess is made, only if the user wants to play again." |
| game.ts   | "Runs a single round. Handles the logic of ""Prompt -> Check -> Feedback -> Repeat.""" | "It isolates the actual gameplay from the ""Play Again"" logic."             |
| engine.ts | "Zero dependencies. Pure math functions like checkGuess(target, guess)."               | This is the only file we need to test with Vitest.                           |
| ui.ts     | "Wraps Clack calls. Functions like displayWelcome(), askDifficulty(), showResult()."   | "If you want to change colors or wording, you only edit this file."          |
| state.ts  | "A simple class or object to hold highScores (e.g., { easy: 5, medium: null })."       | Keeps logic clean so we don't pass massive objects through every function.   |
| types.ts  | Centralizes types like `type Difficulty = 'Easy'                                       | 'Medium'                                                                     |

---

### How the flow will look

1. **index.ts** calls **ui.ts** to say hello.
2. **index.ts** starts a loop.
3. **game.ts** is called. It asks **ui.ts** for difficulty.
4. **game.ts** asks **engine.ts** for a random number.
5. **game.ts** loops until win/loss, checking guesses via **engine.ts**.
6. **game.ts** updates **state.ts** if a high score is beaten.
7. **index.ts** asks **ui.ts** "Play again?". If no, it prints a final goodbye and exits.

This structure is "Easy" because every file is small
(probably under 50 lines), making it very simple to debug! Ready to initialize the project?
