import { describe, it, expect } from "vitest";
import { compareNumbers } from "../src/engine.js";

describe("Game Engine Logic", () => {
  it('should return "correct" when numbers match', () => {
    expect(compareNumbers(50, 50)).toBe("correct");
  });

  it('should return "low" when guess is smaller than target', () => {
    expect(compareNumbers(50, 25)).toBe("low");
  });

  it('should return "high" when guess is larger than target', () => {
    expect(compareNumbers(50, 75)).toBe("high");
  });
});
