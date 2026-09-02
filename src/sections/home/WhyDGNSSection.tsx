import {
  BadgeCheck,
  CircleDollarSign,
  ClipboardCheck,
  FileClock,
  Handshake,
  Headphones,
  MessageSquareText,
  Route,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Container } from "../../components/common/Container";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import { trustPrinciples, whyDgnsItems } from "../../data/home";

const advisorMessage =
  "Hello DGNS Advisors, I would like to speak with an advisor about your UAE business services.";

const reasonIcons = [
  BadgeCheck,
  ShieldCheck,
  CircleDollarSign,
  FileClock,
  Route,
  Headphones,
] as const;

const trustIcons = [MessageSquareText, Target, Handshake, ClipboardCheck] as const;

export function WhyDGNSSection() {
  return (
    <Section background="deep-green" spacing="lg" aria-labelledby="why-dgns-title">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_35%,rgba(155,232,61,0.09),transparent_48%)]"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Why DGNS"
              title="Professional Support From Setup to Compliance"
              description="A coordinated team for the practical work that keeps your UAE business moving—from structure and documentation to accurate reporting and ongoing support."
              headingId="why-dgns-title"
              inverse
            />
            <WhatsAppCTA
              label="Talk to an Advisor"
              message={advisorMessage}
              variant="primary"
              className="mt-8 w-full sm:w-auto"
            />
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {whyDgnsItems.map((item, index) => {
              const Icon = reasonIcons[index];

              return (
                <ScrollReveal key={item} delay={(index % 2) * 0.06}>
                  <article className="group flex h-full min-h-[8.5rem] flex-col justify-between rounded-card border border-white/10 bg-white/[0.045] p-5 transition-colors hover:border-brand-lime/28 hover:bg-white/[0.065] sm:min-h-[10.5rem] sm:p-6">
                    <Icon aria-hidden="true" className="size-5 text-brand-lime" />
                    <h3 className="mt-7 max-w-[16rem] text-base font-semibold leading-snug text-white sm:text-lg">
                      {item}
                    </h3>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal className="mt-16 border-t border-white/12 pt-10 lg:mt-20 lg:pt-12">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <div>
              <p className="type-label text-brand-lime">How we build trust</p>
              <h3 className="mt-3 max-w-xl text-[clamp(1.7rem,3vw,2.55rem)] font-semibold leading-tight tracking-[-0.035em] text-white text-balance">
                Built Around Professional Service and Long-Term Support
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {trustPrinciples.map((principle, index) => {
                const Icon = trustIcons[index];

                return (
                  <div key={principle.title} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-lime/12 text-brand-lime">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{principle.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-white/52">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
