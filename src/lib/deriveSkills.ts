import { getAllProjects } from "./getProjects";

export interface SkillCount {
  name: string;
  count: number;
}

/**
 * The Skills page is NOT hand-maintained. It is computed from every
 * project's `stack` field at build time -- so it is always accurate and
 * grows automatically the moment a new project is added.
 */
export async function deriveSkills(): Promise<SkillCount[]> {
  const projects = await getAllProjects();
  const counts = new Map<string, number>();

  for (const project of projects) {
    for (const tech of project.data.stack) {
      counts.set(tech, (counts.get(tech) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/** Domain distribution -- how many projects touch each domain. Powers the homepage pillars. */
export async function deriveDomainCounts(): Promise<Map<string, number>> {
  const projects = await getAllProjects();
  const counts = new Map<string, number>();
  for (const project of projects) {
    for (const domain of project.data.domains) {
      counts.set(domain, (counts.get(domain) ?? 0) + 1);
    }
  }
  return counts;
}
