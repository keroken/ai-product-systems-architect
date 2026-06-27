import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { caseStudies } from "@/lib/content";

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        eyebrow="Case studies"
        title="Work that connects product intent to buildable systems"
        description="A portfolio structure for senior and staff-level roles: clear context, crisp systems thinking, and outcomes that show leverage across design and engineering."
      />
      <Section
        eyebrow="Portfolio narratives"
        title="Selected directions"
        description="Each case study is framed as a system, not just a screen: the operating model, reusable assets, and product decisions that make quality repeatable."
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
