import { ChevronDown } from "lucide-react";
import { useId } from "react";

import { cn } from "../../utils/cn";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section, type SectionBackground } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";

export type BusinessActivityCategory = {
  title: string;
  description?: string;
  examples: readonly string[];
};

type BusinessActivityCategoriesProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  categories: readonly BusinessActivityCategory[];
  note?: string;
  variant?: "grid" | "accordion" | "bands";
  background?: SectionBackground;
  inverse?: boolean;
};

export function BusinessActivityCategories({
  eyebrow = "Business Activities",
  title,
  description,
  categories,
  note,
  variant = "grid",
  background = "off-white",
  inverse = false,
}: BusinessActivityCategoriesProps) {
  const headingId = `activity-categories-${useId().replaceAll(":", "")}`;

  return (
    <Section background={background} spacing="lg" aria-labelledby={headingId}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          headingId={headingId}
          inverse={inverse}
        />

        {variant === "accordion" ? (
          <div className={cn("mt-12 border-t", inverse ? "border-white/12" : "border-deep-green/12")}>
            {categories.map((category, index) => (
              <ScrollReveal key={category.title} variant="fade" delay={(index % 4) * 0.035}>
                <details className={cn("group border-b", inverse ? "border-white/12" : "border-deep-green/12")}>
                  <summary className={cn("flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden", inverse ? "text-white" : "text-deep-green")}>
                    <span className="flex items-center gap-5">
                      <span className={cn("text-xs font-extrabold tracking-[0.14em]", inverse ? "text-brand-lime" : "text-emerald")}>{String(index + 1).padStart(2, "0")}</span>
                      {category.title}
                    </span>
                    <ChevronDown aria-hidden="true" className="size-5 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="grid gap-5 pb-7 pl-0 sm:grid-cols-[0.8fr_1.2fr] sm:pl-14">
                    {category.description ? <p className={cn("text-sm leading-7", inverse ? "text-white/62" : "text-muted")}>{category.description}</p> : <span />}
                    <ul className="flex flex-wrap content-start gap-2">
                      {category.examples.map((example) => (
                        <li key={example} className={cn("rounded-full border px-3 py-1.5 text-xs font-semibold", inverse ? "border-white/14 text-white/76" : "border-deep-green/12 bg-white text-deep-green/76")}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className={cn("mt-12 grid gap-4", variant === "bands" ? "lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
            {categories.map((category, index) => (
              <ScrollReveal key={category.title} delay={(index % 3) * 0.05}>
                <article className={cn("h-full rounded-card border p-6 sm:p-7", inverse ? "border-white/10 bg-white/[0.045]" : "border-deep-green/10 bg-white shadow-soft", variant === "bands" && index === 0 && "lg:col-span-2")}>
                  <span className={cn("text-xs font-extrabold tracking-[0.14em]", inverse ? "text-brand-lime" : "text-emerald")}>{String(index + 1).padStart(2, "0")}</span>
                  <h3 className={cn("mt-7 text-xl font-semibold", inverse ? "text-white" : "text-deep-green")}>{category.title}</h3>
                  {category.description ? <p className={cn("mt-3 text-sm leading-7", inverse ? "text-white/62" : "text-muted")}>{category.description}</p> : null}
                  <ul className="mt-6 grid gap-2">
                    {category.examples.map((example) => (
                      <li key={example} className={cn("border-b py-2 text-sm font-semibold last:border-0", inverse ? "border-white/10 text-white/72" : "border-deep-green/10 text-deep-green/74")}>{example}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}

        {note ? (
          <p className={cn("mt-7 max-w-4xl rounded-2xl border px-5 py-4 text-sm leading-7", inverse ? "border-brand-lime/18 bg-brand-lime/[0.06] text-white/70" : "border-deep-green/10 bg-[#EEF3EC] text-deep-green/80")}>{note}</p>
        ) : null}
      </Container>
    </Section>
  );
}
