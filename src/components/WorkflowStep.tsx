type WorkflowStepProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function WorkflowStep({ eyebrow, title, description }: WorkflowStepProps) {
  return (
    <div className="border-t border-black/10 pt-5 dark:border-white/10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
    </div>
  );
}
