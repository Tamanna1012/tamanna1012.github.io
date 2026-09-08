import { getCollection, type CollectionEntry } from "astro:content";

export type CertificationEntry = CollectionEntry<"certifications">;

/** All certifications, most recently earned first. */
export async function getAllCertifications(): Promise<CertificationEntry[]> {
  const entries = await getCollection("certifications");
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
