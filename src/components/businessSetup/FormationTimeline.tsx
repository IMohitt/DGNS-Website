import { useId } from "react";
import { cn } from "../../utils/cn";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";

export type FormationStep = {
  number: string;
  title: string;
  description: string;
};

type FormationTimelineProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: readonly FormationStep[];
  tone?: "light" | "dark";
  variant?: "rail" | "cards" | "alternating";
};

export function FormationTimeline({
  eyebrow = "Formation Process",
  title,
  description,
  steps,
  tone = "light",
  variant = "rail",
}: FormationTimelineProps) {
  const headingId = `formation-timeline-${useId().replaceAll(":", "")}`;
  const dark = tone === "dark";

  if (variant === "alternating") {
    return (
      <Section
        background={dark ? "charcoal" : "off-white"}
        spacing="lg"
        aria-labelledby={headingId}
        className="overflow-hidden"
      >
        <Container>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            inverse={dark}
            headingId={headingId}
          />
          <div className="relative mt-14">
            <span
              aria-hidden="true"
              className={cn(
                "absolute bottom-0 left-5 top-0 w-px lg:left-1/2",
                dark ? "bg-white/14" : "bg-deep-green/12",
              )}
            />
            <ol className="grid gap-4 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-5">
              {steps.map((step, index) => (
                <li
                  key={step.number}
                  className={cn(
                    "relative list-none pl-14 lg:pl-0",
                    index % 2 === 1 && "lg:translate-y-16",
                  )}
                >
                  <ScrollReveal delay={(index % 4) * 0.045}>
                    <span
                      className={cn(
                        "absolute left-0 top-6 z-10 grid size-10 place-items-center rounded-full border text-xs font-extrabold lg:left-auto",
                        index % 2 === 0 ? "lg:-right-[3.75rem]" : "lg:-left-[3.75rem]",
                        dark
                          ? "border-brand-lime/32 bg-charcoal text-brand-lime"
                          : "border-deep-green/14 bg-white text-deep-green shadow-soft",
                      )}
                    >
                      {step.number}
                    </span>
                    <article
                      className={cn(
                        "rounded-card border p-6 sm:p-7",
                        dark
                          ? "border-white/10 bg-white/[0.045]"
                          : "border-deep-green/10 bg-white shadow-soft",
                      )}
                    >
                      <h3 className={cn("text-xl font-semibold", dark ? "text-white" : "text-deep-green")}>{step.title}</h3>
                      <p className={cn("mt-3 text-sm leading-7", dark ? "text-white/62" : "text-muted")}>{step.description}</p>
                    </article>
                  </ScrollReveal>
                </li>
              ))}
            </ol>
          </div>
          <div className="h-12 lg:h-18" aria-hidden="true" />
        </Container>
      </Section>
    );
  }

  if (variant === "cards") {
    return (
      <Section background={dark ? "deep-green" : "white"} spacing="lg" aria-labelledby={headingId}>
        <Container>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            inverse={dark}
            headingId={headingId}
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.number} className="list-none">
                <ScrollReveal delay={(index % 4) * 0.045} className="h-full">
                  <article
                    className={cn(
                      "flex h-full min-h-[15rem] flex-col rounded-card border p-6 sm:p-7",
                      dark
                        ? "border-white/10 bg-white/[0.045]"
                        : "border-deep-green/10 bg-off-white",
                    )}
                  >
                    <span className={cn("text-xs font-extrabold tracking-[0.14em]", dark ? "text-brand-lime" : "text-emerald")}>{step.number}</span>
                    <h3 className={cn("mt-auto pt-10 text-xl font-semibold", dark ? "text-white" : "text-deep-green")}>{step.title}</h3>
                    <p className={cn("mt-3 text-sm leading-7", dark ? "text-white/62" : "text-muted")}>{step.description}</p>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    );
  }

  return (
    <Section background={dark ? "charcoal" : "white"} spacing="lg" aria-labelledby={headingId}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          inverse={dark}
          headingId={headingId}
        />
        <div className="relative mt-14">
          <span
            aria-hidden="true"
            className={cn(
              "absolute bottom-0 left-5 top-0 w-px sm:hidden",
              dark ? "bg-white/14" : "bg-deep-green/12",
            )}
          />
          <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.number} className="relative list-none pl-14 sm:pl-0">
                <ScrollReveal delay={(index % 4) * 0.045} className="h-full">
                  <article
                    className={cn(
                      "relative flex h-full min-h-[13.5rem] flex-col rounded-card border p-6 sm:p-7",
                      dark
                        ? "border-white/10 bg-white/[0.045]"
                        : "border-deep-green/10 bg-off-white",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute -left-14 top-0 grid size-10 place-items-center rounded-full border text-xs font-extrabold sm:static",
                        dark
                          ? "border-brand-lime/32 bg-charcoal text-brand-lime"
                          : "border-deep-green/14 bg-white text-deep-green shadow-soft",
                      )}
                    >
                      {step.number}
                    </span>
                    <h3 className={cn("mt-auto pt-8 text-lg font-semibold", dark ? "text-white" : "text-deep-green")}>{step.title}</h3>
                    <p className={cn("mt-3 text-sm leading-6", dark ? "text-white/62" : "text-muted")}>{step.description}</p>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
