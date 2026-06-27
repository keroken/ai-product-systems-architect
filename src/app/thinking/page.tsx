import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { essays } from "@/lib/content";

export default function ThinkingPage() {
  return (
    <>
      <Hero
        eyebrow="Thinking"
        title="Notes on design systems, AI workflows, and product engineering"
        description="Short editorial prompts that can become essays, talks, or interview discussion points for senior product and platform roles."
      />
      <Section eyebrow="Editorial index" title="Current threads">
        <div className="grid gap-5 md:grid-cols-3">
          {essays.map((essay) => (
            <Card key={essay.title}>
              <h2 className="text-2xl font-semibold leading-tight text-foreground">{essay.title}</h2>
              <p className="mt-5 text-sm leading-7 text-muted">{essay.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
