# Master Portfolio

A permanent, content-driven portfolio spanning Core CS, Full Stack, Data
Science, Data Analytics, Machine Learning, Generative AI, Cloud, DevOps,
Cybersecurity, and Blockchain.

## The core idea

Content and presentation are completely decoupled. Every project is a data
record in `src/content/projects/`, validated against a fixed schema in
`src/content/config.ts`. Every page is a template that renders whatever
records exist. **Adding a new project means adding one `.mdx` file — no
component, page, or design changes required.**

## Adding a project

1. Create `src/content/projects/your-project-slug.mdx`.
2. Fill in the frontmatter (see any existing project, or the schema in
   `src/content/config.ts`, for the required fields).
3. Write the case study body in Markdown/MDX below the frontmatter.
4. Add a cover image alongside it and reference it in `coverImage`.
5. `npm run build` — if the frontmatter doesn't match the schema, the build
   fails with a clear error before it ever reaches production.

That's it. The project automatically appears on the homepage, the Projects
grid, its domain page(s), the Skills page (its stack tags get counted in),
and as a "related project" on any other project sharing a domain or tech tag.

## Structure

See `PLAN.md` (or the original architecture writeup) for the full
architecture/UX/data-model rationale. Short version:

```
src/
├── content/        # the only folder that grows — projects, experience, certs
├── data/           # fixed taxonomy (10 domains) + site constants
├── layouts/        # BaseLayout, ProjectLayout — written once
├── components/     # design-system primitives + project/domain components
├── pages/          # fixed page set; /projects/[slug] and /domains/[domain] auto-generate
└── lib/            # derivation logic: skills aggregation, related projects
```

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # also validates all content against the schema
npm run preview   # preview the production build
```

## Deployment

This repo is named `tamanna1012.github.io`, so GitHub hosts it for free at
**https://tamanna1012.github.io** via GitHub Pages.

`.github/workflows/deploy.yml` builds and deploys automatically on every
push to `main`. One-time setup required (can't be done via git push):

1. Go to the repo's **Settings -> Pages**.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow) -- the site goes live at
   https://tamanna1012.github.io within a couple of minutes.

The static output also deploys cleanly to Vercel or Netlify if preferred
later. No backend, no database — the content directory *is* the database.
