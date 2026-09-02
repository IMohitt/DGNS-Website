import { useId } from "react";

import { cn } from "../../utils/cn";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { Button } from "../ui/Button";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";

export type TravelCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primary: {
    label: string;
    message: string;
  };
  secondary?: {
    label: string;
    to: string;
  };
  tone?: "dark" | "sand";
  className?: string;
};

export function TravelCTA({
  eyebrow = "Explore the UAE",
  title,
  description,
  primary,
  secondary,
  tone = "dark",
  className,
}: TravelCTAProps) {
  const titleId = `travel-cta-${useId().replaceAll(":", "")}`;
  const inverse = tone === "dark";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden py-18 sm:py-24 lg:py-28",
        inverse
          ? "bg-charcoal text-white"
          : "border-y border-[#DCCFB9] bg-[#F3EBDD] text-charcoal",
        className,
      )}
      aria-labelledby={titleId}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0",
          inverse
            ? "bg-[radial-gradient(circle_at_50%_115%,rgba(155,232,61,0.18),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_86%_12%,rgba(103,200,106,0.16),transparent_32%)]",
        )}
      />
      <Container className="relative">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <p
            className={cn(
              "type-label",
              inverse ? "text-brand-lime" : "text-emerald",
            )}
          >
            {eyebrow}
          </p>
          <h2
            id={titleId}
            className={cn(
              "mt-5 text-[clamp(2.35rem,5vw,4.7rem)] font-semibold leading-[1.02] tracking-[-0.052em] text-balance",
              inverse ? "text-white" : "text-deep-green",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg",
              inverse ? "text-white/68" : "text-muted",
            )}
          >
            {description}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppCTA
              label={primary.label}
              message={primary.message}
              variant={inverse ? "primary" : "dark"}
              className="w-full sm:w-auto"
            />
            {secondary ? (
              <Button
                to={secondary.to}
                variant="secondary"
                className={cn(
                  "w-full sm:w-auto",
                  inverse &&
                    "border-white/34 text-white hover:border-white hover:bg-white hover:text-deep-green",
                )}
              >
                {secondary.label}
                <span aria-hidden="true">→</span>
              </Button>
            ) : null}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
