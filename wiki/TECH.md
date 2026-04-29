# TECH.md | Number Guessing Game

## Language & Runtime

- **Node.js**: The core runtime.
- **TypeScript**: Used for type-safety. It ensures our "attempts" stay numbers and our "difficulty" levels stay within specific allowed strings.

## Interactive CLI Tools

Instead of the clunky built-in `readline` module, we will use:

- **[Clack](https://github.com/natemoo-re/clack)**:
  This is the best modern tool for Node.js CLIs.
  It creates beautiful, accessible prompts
  (spinners, selects, and text inputs) with very little code.

- **Picocolors**:
  For adding color to our success/error messages (lightweight and faster than Chalk).

## State & Logic

- **Simple Variables**:
  Since this is a single-session game,
  we don't need a database.
  We will use a simple object to track high scores during the session.

## Testing

- **Vitest**:
  We will use Vitest to test the core "hot/cold" logic.
  This allows us to verify the game math without having to manually play the game 50 times to see if it works.

## Build & Execution

- **tsx**: To run our TypeScript code directly during development without a slow compile step.
- **Zod**: (Optional but recommended) To validate that the user's guess is actually a number between 1 and 100.
