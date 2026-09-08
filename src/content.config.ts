import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { DOMAIN_IDS } from "./data/domains";

/**
 * PROJECTS
 * ---------
 * This is the load-bearing schema of the whole site. Every future project,
 * regardless of domain, must satisfy this exact shape. Adding a project
 * means adding one .mdx file here -- nothing else in the codebase changes.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(220),
      domains: z.array(z.enum(DOMAIN_IDS)).min(1),
      stack: z.array(z.string()).min(1),
      role: z.string(),
      status: z.enum(["completed", "in-progress", "concept"]),
      featured: z.boolean().default(false),
      date: z.object({
        started: z.coerce.date(),
        completed: z.coerce.date().optional(),
      }),
      links: z
        .object({
          repo: z.string().url().optional(),
          demo: z.string().url().optional(),
          docs: z.string().url().optional(),
          video: z.string().url().optional(),
          paper: z.string().url().optional(),
        })
        .default({}),
      coverImage: image(),
      gallery: z.array(image()).optional(),
      metrics: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .optional(),
      highlights: z.array(z.string()).min(1).max(6),
    }),
});

/**
 * EXPERIENCE
 * Internships, jobs, research assistantships -- feeds the About/Timeline pages.
 */
const experience = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    date: z.object({
      started: z.coerce.date(),
      ended: z.coerce.date().optional(), // omit = "present"
    }),
    summary: z.string(),
    domains: z.array(z.enum(DOMAIN_IDS)).optional(),
  }),
});

/**
 * CERTIFICATIONS
 */
const certifications = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/certifications" }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
    credentialUrl: z.string().url().optional(),
  }),
});

export const collections = { projects, experience, certifications };
