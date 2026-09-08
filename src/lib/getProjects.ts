import { getCollection, type CollectionEntry } from "astro:content";
import type { DomainId } from "../data/domains";

export type ProjectEntry = CollectionEntry<"projects">;

/** All projects, newest first (by completion date, falling back to start date). */
export async function getAllProjects(): Promise<ProjectEntry[]> {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => {
    const ad = (a.data.date.completed ?? a.data.date.started).valueOf();
    const bd = (b.data.date.completed ?? b.data.date.started).valueOf();
    return bd - ad;
  });
}

export async function getFeaturedProjects(limit = 3): Promise<ProjectEntry[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.data.featured).slice(0, limit);
}

export async function getProjectsByDomain(domainId: DomainId): Promise<ProjectEntry[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.data.domains.includes(domainId));
}
