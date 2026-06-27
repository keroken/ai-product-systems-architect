# AI Product Systems Architect

A polished MVP portfolio for an AI Product Systems Architect: a creative designer-engineer who bridges design systems, frontend engineering, developer experience, and AI-native software development.

Core tagline:

> I design AI-native systems that connect design, engineering, and product development.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- `src` directory
- Local mock data only, with no external API integration yet
- System font stack for network-independent builds

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Run quality checks:

```bash
pnpm lint
pnpm build
```

## Project Concept

The site is an editorial, minimal, high-end portfolio aimed at senior and staff-level product, design systems, frontend platform, and AI-native software roles.

Current routes:

- `/` - positioning, capabilities, workflow overview, and selected work
- `/workflow` - interactive mock demo: “From Product Idea to AI-Native Delivery Plan”
- `/case-studies` - case study cards and portfolio narrative structure
- `/thinking` - editorial prompts for essays and talks
- `/about` - working principles and positioning

Reusable components live in `src/components`:

- `SiteHeader`
- `Hero`
- `Section`
- `Card`
- `WorkflowStep`
- `CaseStudyCard`
- `Footer`

Mock portfolio and workflow content lives in `src/lib/content.ts`.

## Next Implementation Steps

1. Replace placeholder case studies with real project narratives, metrics, constraints, and artifacts.
2. Add project detail pages under `/case-studies/[slug]`.
3. Connect the workflow demo to a typed API route once the desired AI model, prompt contract, and data boundaries are defined.
4. Add analytics, metadata per route, Open Graph images, and sitemap configuration.
5. Add automated tests for the workflow generator and route-level smoke coverage.
