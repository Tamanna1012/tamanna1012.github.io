import type { ProjectEntry } from "./getProjects";

/**
 * Related projects, computed from shared domains/stack -- never hand-linked.
 * Domain overlap counts more than stack overlap (a shared discipline matters
 * more than a shared library).
 */
export function deriveRelated(
  current: ProjectEntry,
  all: ProjectEntry[],
  limit = 3
): ProjectEntry[] {
  const scored = all
    .filter((p) => p.id !== current.id)
    .map((p) => {
      const domainOverlap = p.data.domains.filter((d) =>
        current.data.domains.includes(d)
      ).length;
      const stackOverlap = p.data.stack.filter((s) =>
        current.data.stack.includes(s)
      ).length;
      return { project: p, score: domainOverlap * 2 + stackOverlap };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((x) => x.project);
}
