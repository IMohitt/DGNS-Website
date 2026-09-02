import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import type { ProcessStep } from "../../data/services";
import { cn } from "../../utils/cn";

type ServiceProcessProps = {
  title: string;
  description?: string;
  steps: readonly ProcessStep[];
  eyebrow?: string;
  tone?: "light" | "dark";
  variant?: "timeline" | "cards" | "compact";
};

export function ServiceProcess({
  title,
  description,
  steps,
  eyebrow = "Our Process",
  tone = "light",
  variant = "timeline",
}: ServiceProcessProps) {
  const reduceMotion = useReducedMotion();
  const headingId = `service-process-${useId().replaceAll(":", "")}`;
  const dark = tone === "dark";

  if (variant === "cards") {
    return (
      <Section
        background={dark ? "deep-green" : "off-white"}
        spacing="lg"
        aria-labelledby={headingId}
      >
        <Container>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            inverse={dark}
            headingId={headingId}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={(index % 3) * 0.05}>
                <article
                  className={cn(
                    "h-full rounded-card border p-6 sm:p-7",
                    dark
                      ? "border-white/10 bg-white/[0.045]"
                      : "border-deep-green/10 bg-white shadow-soft",
                  )}
                >
                  <p
                    className={cn(
                      "text-xs font-extrabold tracking-[0.14em]",
                      dark ? "text-brand-lime" : "text-emerald",
                    )}
                  >
                    {step.number}
                  </p>
                  <h3
                    className={cn(
                      "mt-8 text-xl font-semibold",
                      dark ? "text-white" : "text-deep-green",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-sm leading-7",
                      dark ? "text-white/58" : "text-muted",
                    )}
                  >
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  if (variant === "compact") {
    return (
      <Section
        background={dark ? "charcoal" : "white"}
        spacing="lg"
        aria-labelledby={headingId}
      >
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              inverse={dark}
              headingId={headingId}
            />
          </ScrollReveal>
          <div className={cn("border-t", dark ? "border-white/12" : "border-deep-green/12")}>
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                delay={(index % 3) * 0.04}
                className={cn(
                  "grid grid-cols-[3rem_1fr] gap-4 border-b py-5 sm:grid-cols-[4rem_0.75fr_1.25fr] sm:items-center",
                  dark ? "border-white/12" : "border-deep-green/12",
                )}
              >
                <span
                  className={cn(
                    "text-xs font-extrabold tracking-[0.12em]",
                    dark ? "text-brand-lime" : "text-emerald",
                  )}
                >
                  {step.number}
                </span>
                <h3 className={cn("font-semibold", dark ? "text-white" : "text-deep-green")}>
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "col-start-2 text-sm leading-6 sm:col-start-auto",
                    dark ? "text-white/55" : "text-muted",
                  )}
                >
                  {step.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section
      background={dark ? "deep-green" : "white"}
      spacing="lg"
      aria-labelledby={headingId}
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
          <div
            className={cn(
              "absolute bottom-0 left-5 top-0 w-px xl:bottom-auto xl:left-[8.33%] xl:right-[8.33%] xl:top-5 xl:h-px xl:w-auto",
              dark ? "bg-white/12" : "bg-deep-green/10",
            )}
          >
            <motion.div
              className="h-full w-full origin-top-left bg-brand-lime"
              initial={reduceMotion ? false : { scaleY: 0, scaleX: 0 }}
              whileInView={{ scaleY: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeOut" }}
            />
          </div>
          <div className="grid gap-9 xl:grid-cols-6 xl:gap-4">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                delay={index * 0.05}
                className="relative grid grid-cols-[2.5rem_1fr] gap-5 xl:block xl:text-center"
              >
                <span
                  className={cn(
                    "relative z-10 grid size-10 place-items-center rounded-full border text-xs font-extrabold",
                    dark
                      ? "border-white/16 bg-deep-green text-brand-lime"
                      : "border-deep-green/12 bg-white text-deep-green shadow-soft",
                  )}
                >
                  {step.number}
                </span>
                <div className="xl:pt-7">
                  <h3 className={cn("font-semibold", dark ? "text-white" : "text-deep-green")}>
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-6 xl:mx-auto",
                      dark ? "text-white/54" : "text-muted",
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
