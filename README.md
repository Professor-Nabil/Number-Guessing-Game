# 🔢 Number Guessing Game (CLI)

A modern, keyboard-driven Number Guessing Game built with **Node.js**, **TypeScript**, and **Clack**. Designed with a focus on clean code architecture and a polished terminal experience.

## 🚀 Features

- **Interactive UI**: Powered by `@clack/prompts` for a smooth, guided experience.
- **Difficulty Levels**: Choose between Easy, Medium, and Hard (affects total chances).
- **Persistent Session State**: Tracks your high scores per difficulty level.
- **Precise Timing**: Real-time tracking of how fast you can solve the puzzle.
- **Smart Hints**: Stuck? The game provides parity and range hints after 3 failed attempts.
- **Type-Safe**: Built 100% with TypeScript and validated with Zod.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript (ESM)
- **UI**: Clack, Picocolors
- **Execution**: tsx (for zero-compile development)
- **Testing**: Vitest

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/Nabil/Number-Guessing-Game.git](https://github.com/Nabil/Number-Guessing-Game.git)
   cd Number-Guessing-Game
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## 🎮 How to Play

Run the game using the following command:

```bash
npm start
```

1. **Select Difficulty**: Use your arrow keys to pick a level.
2. **Guess**: Enter a number between 1 and 100.
3. **Feedback**: The game will tell you if your guess is too high or too low.
4. **Hints**: After 3 attempts, look out for a hint appearing in yellow!
5. **Win**: Find the number and check your time/score summary.

## 🧪 Development & Testing

- **Check Types**: `npm run check`
- **Run Tests**: `npm test`
- **Dev Mode**: `npm run dev`

---

Built by **Nabil** | April 2026

[Roadmap.sh](https://roadmap.sh/projects/number-guessing-game)
