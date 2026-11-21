import { work } from "./work";
import type { WorkInfo } from "./types";

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

export function getYearsOfExperience(
  entries: Pick<WorkInfo, "from" | "to">[] = work,
  now: Date = new Date(),
): number {
  const intervals = entries
    .map(({ from, to }) => [from.getTime(), (to ?? now).getTime()] as const)
    .filter(([start, end]) => end > start)
    .sort((a, b) => a[0] - b[0]);

  let totalMs = 0;
  let currentStart: number | undefined;
  let currentEnd = 0;

  for (const [start, end] of intervals) {
    if (currentStart === undefined || start > currentEnd) {
      if (currentStart !== undefined) totalMs += currentEnd - currentStart;
      currentStart = start;
      currentEnd = end;
    } else {
      currentEnd = Math.max(currentEnd, end);
    }
  }
  if (currentStart !== undefined) totalMs += currentEnd - currentStart;

  return Math.floor(totalMs / MS_PER_YEAR);
}
