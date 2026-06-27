import { Card } from "./Card";

type CaseStudyCardProps = {
  title: string;
  context: string;
  description: string;
  outcomes: string[];
};

export function CaseStudyCard({ title, context, description, outcomes }: CaseStudyCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between gap-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{context}</p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
      </div>
      <ul className="space-y-2 text-sm text-foreground">
        {outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
