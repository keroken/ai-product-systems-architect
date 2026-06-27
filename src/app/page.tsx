import { Card } from '@/components/Card';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { WorkflowStep } from '@/components/WorkflowStep';
import { capabilities, caseStudies, workflowSteps } from '@/lib/content';

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Senior/staff portfolio"
        title="Kenichi Shinagawa"
        description="AI Product Systems Architect bridging design systems, frontend engineering, developer experience, and AI-native software development."
        primaryHref="/workflow"
        primaryLabel="Explore workflow demo"
        secondaryHref="/case-studies"
        secondaryLabel="View case studies"
      />
      <Section
        eyebrow="Positioning"
        title="Systems thinking for teams shipping with AI"
        description="The work sits between product taste, implementation detail, and operational clarity: the place where strong product organizations turn ambiguity into repeatable delivery."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <Card key={capability}>
              <p className="text-lg font-semibold leading-snug text-foreground">
                {capability}
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Workflow" title="From product idea to delivery system">
        <div className="grid gap-8 md:grid-cols-3">
          {workflowSteps.map((step) => (
            <WorkflowStep key={step.title} {...step} />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Selected work"
        title="Case-study directions"
        description="Polished placeholders for senior-level portfolio narratives, ready to replace with real project detail when available."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </Section>
    </>
  );
}
