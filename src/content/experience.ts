import { work } from "./work";
import type { EmploymentType, WorkInfo } from "./types";

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

// Counted as full-time equivalent so the headline number never overstates.
const WEIGHTS: Record<EmploymentType, number> = {
  internship: 1,
  partTime: 0.5,
  fullTime: 1,
};

export function getYearsOfExperience(
  entries: Pick<WorkInfo, "periods">[] = work,
  now: Date = new Date(),
): number {
  const totalMs = entries
    .flatMap((entry) => entry.periods)
    .reduce((sum, { type, from, to }) => {
      const end = to ? Date.UTC(to.getUTCFullYear(), to.getUTCMonth() + 1, 1) : now.getTime();
      const duration = Math.max(0, end - from.getTime());
      return sum + duration * WEIGHTS[type];
    }, 0);

  return Math.floor(totalMs / MS_PER_YEAR);
}
