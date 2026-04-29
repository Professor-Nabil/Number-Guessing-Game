export type Difficulty = "Easy" | "Medium" | "Hard";

export interface DifficultyConfig {
  chances: number;
  label: string;
}

export const GAME_LEVELS: Record<Difficulty, DifficultyConfig> = {
  Easy: { chances: 10, label: "Easy (10 chances)" },
  Medium: { chances: 5, label: "Medium (5 chances)" },
  Hard: { chances: 3, label: "Hard (3 chances)" },
};

export type ComparisonResult = "correct" | "high" | "low";
