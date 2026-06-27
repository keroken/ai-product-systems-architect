export const navItems = [
  { href: "/", label: "Index" },
  { href: "/workflow", label: "Workflow" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/thinking", label: "Thinking" },
  { href: "/about", label: "About" },
];

export const capabilities = [
  "AI-native product strategy",
  "Design systems architecture",
  "Frontend platform engineering",
  "Developer experience",
  "Human-in-the-loop workflows",
  "Accessibility and QA systems",
];

export const workflowSteps = [
  {
    eyebrow: "01",
    title: "Frame the product system",
    description:
      "Translate ambiguous product intent into audience, value, risk, UX assumptions, and delivery constraints.",
  },
  {
    eyebrow: "02",
    title: "Design the operating model",
    description:
      "Map components, tokens, content states, implementation paths, and the decision points that stay human-owned.",
  },
  {
    eyebrow: "03",
    title: "Ship with AI-assisted rigor",
    description:
      "Use AI to accelerate scaffolding, variants, tests, and documentation while preserving review, taste, and accountability.",
  },
];

export const caseStudies = [
  {
    title: "AI-Native Design System",
    context: "Platform team modernization",
    description:
      "Designed a component and token model that let product squads generate consistent UI faster without losing craft.",
    outcomes: ["Reusable UX patterns", "Token governance", "AI-ready component specs"],
  },
  {
    title: "Developer Experience Blueprint",
    context: "Frontend engineering enablement",
    description:
      "Created a delivery workflow for prompts, code review, testing, and documentation across a growing product surface.",
    outcomes: ["Faster onboarding", "Clear review gates", "Shared implementation language"],
  },
  {
    title: "Product Concept to MVP",
    context: "0-to-1 product exploration",
    description:
      "Turned a loosely defined AI product idea into a scoped architecture, UX narrative, and buildable release plan.",
    outcomes: ["Sharper product brief", "MVP route map", "Accessible delivery checklist"],
  },
];

export const essays = [
  {
    title: "AI tools are strongest when the system around them is designed",
    description:
      "A short note on why prompts, components, tokens, tests, and team rituals should be treated as one product surface.",
  },
  {
    title: "Design systems need implementation literacy",
    description:
      "High-end product quality comes from connecting visual decisions to code constraints early, not polishing late.",
  },
  {
    title: "The next DX frontier is human judgment",
    description:
      "AI can produce more output than teams can responsibly review. The best workflows make judgment visible.",
  },
];

export type WorkflowOutput = {
  title: string;
  items: string[];
};

export function buildWorkflowOutput(productIdea: string): WorkflowOutput[] {
  const idea = productIdea.trim() || "an AI-powered product workspace";

  return [
    {
      title: "Product brief",
      items: [
        `${idea} helps a focused user group move from unclear intent to a concrete next action.`,
        "The MVP should prove value through one memorable workflow before expanding into a broader platform.",
      ],
    },
    {
      title: "UX assumptions",
      items: [
        "Users need clear states: draft, reviewed, approved, and shipped.",
        "The interface should make AI confidence, source material, and required human review visible.",
      ],
    },
    {
      title: "Component map",
      items: [
        "Idea intake form, output summary, decision log, checklist panel, review status, and export actions.",
        "Shared primitives: page shell, section header, card, badge, form control, and empty state.",
      ],
    },
    {
      title: "Design system tokens",
      items: [
        "Use semantic color tokens for surface, foreground, border, muted, accent, success, and warning states.",
        "Define spacing, type scale, radius, focus, and elevation tokens before composing feature screens.",
      ],
    },
    {
      title: "Frontend architecture",
      items: [
        "Start with App Router routes, server-rendered content, typed mock data, and isolated client components for interaction.",
        "Keep future API integration behind a small service boundary so the UI contract remains stable.",
      ],
    },
    {
      title: "AI-assisted implementation workflow",
      items: [
        "Generate first-pass component variants from product and design constraints, then review for quality and accessibility.",
        "Use AI for test scaffolds, copy alternatives, documentation drafts, and edge-case exploration.",
      ],
    },
    {
      title: "QA and accessibility checklist",
      items: [
        "Verify keyboard flow, focus states, contrast, responsive wrapping, loading states, and empty states.",
        "Run lint, build, route smoke tests, and manual review across light and dark system preferences.",
      ],
    },
    {
      title: "Human decision points",
      items: [
        "Approve the target user, MVP promise, risk threshold, data boundaries, and launch quality bar.",
        "Review any AI-generated plan before it becomes a product commitment or engineering task.",
      ],
    },
  ];
}
