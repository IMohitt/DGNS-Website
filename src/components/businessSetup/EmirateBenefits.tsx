import {
  Building2,
  Compass,
  Landmark,
  Network,
  PanelsTopLeft,
  Waypoints,
} from "lucide-react";
import { useId } from "react";

import { cn } from "../../utils/cn";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";

export type EmirateBenefit = {
  title: string;
  description: string;
};

type EmirateBenefitsProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  benefits: readonly EmirateBenefit[];
  variant?: "bento" | "numbered" | "rail";
  tone?: "light" | "dark";
};

const icons = [Landmark, Compass, Network, Building2, Waypoints, PanelsTopLeft] as const;

export function EmirateBenefits({
  eyebrow = "Key Advantages",
  title,
  description,
  benefits,
  variant = "bento",
  tone = "light",
}: EmirateBenefitsProps) {
  const headingId = `emirate-benefits-${useId().replaceAll(":", "")}`;
  const dark = tone === "dark";

  if (variant === "numbered") {
    return (
      <Section background={dark ? "charcoal" : "white"} spacing="lg" aria-labelledby={headingId}>
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow={eyebrow} title={title} description={description} inverse={dark} headingId={headingId} />
          </ScrollReveal>
          <div className={cn("border-t", dark ? "border-white/12" : "border-deep-green/12")}>
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={(index % 3) * 0.04} className={cn("grid gap-3 border-b py-6 sm:grid-cols-[3.5rem_0.8fr_1.2fr] sm:items-start sm:gap-5", dark ? "border-white/12" : "border-deep-green/12")}>
                <span className={cn("text-xs font-extrabold tracking-[0.14em]", dark ? "text-brand-lime" : "text-emerald")}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className={cn("font-semibold", dark ? "text-white" : "text-deep-green")}>{benefit.title}</h3>
                <p className={cn("text-sm leading-7", dark ? "text-white/62" : "text-muted")}>{benefit.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section background={dark ? "deep-green" : "off-white"} spacing="lg" aria-labelledby={headingId}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} inverse={dark} headingId={headingId} />
        <div className={cn("mt-12 grid gap-4", variant === "rail" ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-12")}>
          {benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            return (
              <ScrollReveal
                key={benefit.title}
                delay={(index % 3) * 0.05}
                className={cn(
                  variant === "bento" && index % 6 === 0 && "lg:col-span-7",
                  variant === "bento" && index % 6 === 1 && "lg:col-span-5",
                  variant === "bento" && index % 6 > 1 && "lg:col-span-3",
                )}
              >
                <article className={cn("flex h-full min-h-[15rem] flex-col rounded-card border p-6 sm:p-7", dark ? "border-white/10 bg-white/[0.045]" : "border-deep-green/10 bg-white shadow-soft")}>
                  <span className={cn("grid size-11 place-items-center rounded-2xl", dark ? "bg-brand-lime text-deep-green" : "bg-deep-green text-brand-lime")}>
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className={cn("mt-auto pt-9 text-xl font-semibold", dark ? "text-white" : "text-deep-green")}>{benefit.title}</h3>
                  <p className={cn("mt-3 text-sm leading-7", dark ? "text-white/62" : "text-muted")}>{benefit.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
