export const proficency = {
  proficient: {
    color: "var(--skill-proficient)",
  },
  intermediate: {
    color: "var(--skill-intermediate)",
  },
  familiar: {
    color: "var(--skill-familiar)",
  },
  learning: {
    color: "var(--skill-learning)",
  },
};
export type Proficency = keyof typeof proficency;
