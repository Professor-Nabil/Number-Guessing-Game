/**
 * Calculates the difference between two timestamps in seconds
 * formatted to 1 decimal place.
 */
export const formatDuration = (start: number, end: number): string => {
  const durationInSeconds = (end - start) / 1000;
  return durationInSeconds.toFixed(1);
};
