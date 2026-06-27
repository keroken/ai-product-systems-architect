import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { WorkflowDemo } from "@/components/WorkflowDemo";

export default function WorkflowPage() {
  return (
    <>
      <Hero
        eyebrow="Interactive mock demo"
        title="From Product Idea to AI-Native Delivery Plan"
        description="Enter a product idea and preview the kind of structured plan an AI-native product system can produce. The demo is local, deterministic, and ready for a future API integration."
      />
      <Section
        eyebrow="Demo"
        title="Generate a clean delivery scaffold"
        description="The output covers the bridge from product thinking to design system structure, frontend architecture, assisted implementation, QA, and human decision points."
      >
        <WorkflowDemo />
      </Section>
    </>
  );
}
