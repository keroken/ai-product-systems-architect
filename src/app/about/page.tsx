import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";

const principles = [
  "Treat AI as part of the product system, not a bolt-on feature.",
  "Design components and workflows so teams can move faster without lowering judgment.",
  "Make accessibility, QA, documentation, and developer experience visible from day one.",
  "Preserve craft: strong typography, careful interaction states, and clear human ownership.",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="A designer-engineer for AI-native product organizations"
        description="I operate across product strategy, systems design, frontend architecture, and implementation workflows to help teams turn emerging AI capability into durable product quality."
      />
      <Section
        eyebrow="Working principles"
        title="The portfolio point of view"
        description="This MVP is structured around the kind of leverage senior and staff-level roles need: clearer systems, better collaboration, and stronger execution loops."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <Card key={principle}>
              <p className="text-xl font-semibold leading-snug text-foreground">{principle}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
