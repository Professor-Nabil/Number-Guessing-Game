# **Loop-Based State Machine**

## Phase 1: The Skeleton (Session 1)

_Goal: Get the basic CLI loop and random number generation working._

- [ ] **Commit 1: Basic Setup & Welcome**
  - Print the welcome message and rules.
  - Implement a basic exit command to stop the script.
- [ ] **Commit 2: Random Target Generation**
  - Logic to generate a random integer between 1 and 100.
  - Ensure the number is generated once per round.
- [ ] **Commit 3: Difficulty Selection**
  - Display difficulty menu (Easy, Medium, Hard).
  - Map the user's choice to a specific "Chances" variable.
  - Handle invalid input (e.g., user types '5' instead of 1, 2, or 3).

## Phase 2: The Core Game Loop (Session 2)

_Goal: Implement the "Guess -> Compare -> Feedback" cycle._

- [ ] **Commit 4: Basic Guessing Input**
  - Prompt the user for a number.
  - Convert input to an integer and handle non-numeric errors.
- [ ] **Commit 5: Comparison Logic**
  - Implement the `Correct`, `Too High`, and `Too Low` feedback.
  - Track the number of attempts used so far.
- [ ] **Commit 6: Win/Loss Conditions**
  - End the loop if the guess is correct (Win).
  - End the loop if attempts exceed the difficulty limit (Loss).
  - Display the final summary (correct number, total attempts).

## Phase 3: Game Longevity (Session 3)

_Goal: Adding the "More Interesting" features from the requirements._

- [ ] **Commit 7: Replayability**
  - Wrap the entire game in a "Play Again?" loop.
  - Reset the random number and attempt counter for each new round.
- [ ] **Commit 8: High Score Tracking**
  - Save the fewest attempts taken per difficulty level in memory.
  - Compare current score against the high score at the end of a win.
- [ ] **Commit 9: Timer Implementation**
  - Record the timestamp when the game starts.
  - Calculate and display the total seconds elapsed once the user wins.

## Phase 4: Refinement (Session 4)

_Goal: Final polish and "Invisible Quality."_

- [ ] **Commit 10: Hint System**
  - Add a "Hint" command or trigger (e.g., after 3 failed guesses, tell them if the number is even/odd).
- [ ] **Commit 11: CLI UX Polish**
  - Add colors to the output (Green for win, Red for loss, Yellow for hints).
  - Clear the terminal screen between rounds for a cleaner feel.
- [ ] **Commit 12: Final Documentation**
  - Create the README with instructions on how to run and play.
