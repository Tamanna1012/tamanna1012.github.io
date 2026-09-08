/**
 * The fixed identity taxonomy. Every project is tagged into 1+ of these.
 * This list is deliberately closed -- it should almost never change.
 * Extending it (rare) automatically regenerates every downstream page
 * (domain pillar, filter chip, /domains/[domain] route).
 */

export const DOMAIN_IDS = [
  "core-cs",
  "full-stack",
  "data-science",
  "data-analytics",
  "machine-learning",
  "generative-ai",
  "cloud",
  "devops",
  "cybersecurity",
  "blockchain",
] as const;

export type DomainId = (typeof DOMAIN_IDS)[number];

export interface DomainMeta {
  id: DomainId;
  label: string;
  short: string;
  description: string;
  color: string; // CSS custom property value (hex), used for badges/chips
}

export const DOMAINS: Record<DomainId, DomainMeta> = {
  "core-cs": {
    id: "core-cs",
    label: "Core Computer Science",
    short: "Core CS",
    description: "Algorithms, data structures, compilers, operating systems -- the fundamentals underneath everything else.",
    color: "#4B5563",
  },
  "full-stack": {
    id: "full-stack",
    label: "Full Stack Development",
    short: "Full Stack",
    description: "End-to-end web applications -- frontend, backend, APIs, databases.",
    color: "#2563EB",
  },
  "data-science": {
    id: "data-science",
    label: "Data Science",
    short: "Data Science",
    description: "Extracting structured insight from raw data using statistical and computational methods.",
    color: "#7C3AED",
  },
  "data-analytics": {
    id: "data-analytics",
    label: "Data Analytics",
    short: "Analytics",
    description: "Dashboards, reporting, and decision-support built on top of real data.",
    color: "#0891B2",
  },
  "machine-learning": {
    id: "machine-learning",
    label: "Machine Learning",
    short: "ML",
    description: "Models trained on data to predict, classify, or optimize.",
    color: "#DB2777",
  },
  "generative-ai": {
    id: "generative-ai",
    label: "Generative AI",
    short: "GenAI",
    description: "LLM-powered applications, agents, RAG systems, and prompt-driven tooling.",
    color: "#EA580C",
  },
  cloud: {
    id: "cloud",
    label: "Cloud",
    short: "Cloud",
    description: "Deployment, infrastructure, and managed services on cloud platforms.",
    color: "#0284C7",
  },
  devops: {
    id: "devops",
    label: "DevOps",
    short: "DevOps",
    description: "CI/CD, containerization, automation, and infrastructure-as-code.",
    color: "#059669",
  },
  cybersecurity: {
    id: "cybersecurity",
    label: "Cybersecurity",
    short: "Security",
    description: "Security analysis, defensive tooling, and secure-by-design engineering.",
    color: "#DC2626",
  },
  blockchain: {
    id: "blockchain",
    label: "Blockchain",
    short: "Blockchain",
    description: "Smart contracts, decentralized applications, and distributed-ledger systems.",
    color: "#7C2D12",
  },
};

export const DOMAIN_LIST: DomainMeta[] = DOMAIN_IDS.map((id) => DOMAINS[id]);
