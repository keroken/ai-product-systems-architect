"use client";

import { useMemo, useState } from "react";
import { buildWorkflowOutput } from "@/lib/content";
import { Card } from "./Card";

export function WorkflowDemo() {
  const [productIdea, setProductIdea] = useState(
    "A collaborative workspace that turns customer research into prioritized product experiments",
  );
  const output = useMemo(() => buildWorkflowOutput(productIdea), [productIdea]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <Card className="h-fit">
        <label htmlFor="product-idea" className="text-sm font-semibold text-foreground">
          Product idea
        </label>
        <textarea
          id="product-idea"
          value={productIdea}
          onChange={(event) => setProductIdea(event.target.value)}
          rows={8}
          className="mt-4 w-full resize-none rounded-md border border-black/15 bg-background p-4 text-base leading-7 text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-white/15"
          placeholder="Describe the product you want to explore..."
        />
        <p className="mt-4 text-sm leading-6 text-muted">
          This demo uses local mock logic only. It is structured so a future API route or model
          service can replace the generator without changing the presentation layer.
        </p>
      </Card>
      <div className="grid gap-4">
        {output.map((section) => (
          <Card key={section.title}>
            <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-px w-5 shrink-0 bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
