import { Calculator, HelpCircle, Landmark } from "lucide-react";

import type { QuickConsultation } from "../../data/contact";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";

type QuickConsultationCardsProps = {
  items: readonly QuickConsultation[];
};

const icons = [Landmark, Calculator, HelpCircle] as const;

export function QuickConsultationCards({
  items,
}: QuickConsultationCardsProps) {
  return (
    <Section
      background="deep-green"
      spacing="lg"
      aria-labelledby="quick-consultations-title"
      className="overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -right-48 -top-48 size-[34rem] rounded-full border border-brand-lime/10"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="A Faster Starting Point"
          title="Choose the Conversation That Fits"
          description="Use one of these direct WhatsApp routes when you already know the broad area you would like to discuss."
          inverse
          headingId="quick-consultations-title"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index] ?? HelpCircle;

            return (
              <ScrollReveal
                key={item.title}
                delay={index * 0.06}
                className="h-full"
              >
                <article className="flex h-full min-h-[21rem] flex-col rounded-card border border-white/10 bg-white/[0.045] p-6 sm:p-8">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-lime text-deep-green">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <p className="mt-8 type-label text-brand-lime">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/64">
                    {item.description}
                  </p>
                  <WhatsAppCTA
                    label={item.label}
                    message={item.message}
                    variant="primary"
                    className="mt-auto w-full sm:w-auto"
                  />
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
