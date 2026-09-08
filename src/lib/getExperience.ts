import { getCollection, type CollectionEntry } from "astro:content";

export type ExperienceEntry = CollectionEntry<"experience">;

/** All experience entries, most recent first (ongoing roles sort before past ones). */
export async function getAllExperience(): Promise<ExperienceEntry[]> {
  const entries = await getCollection("experience");
  return entries.sort((a, b) => {
    const aEnd = a.data.date.ended?.valueOf() ?? Infinity;
    const bEnd = b.data.date.ended?.valueOf() ?? Infinity;
    if (aEnd !== bEnd) return bEnd - aEnd;
    return b.data.date.started.valueOf() - a.data.date.started.valueOf();
  });
}
