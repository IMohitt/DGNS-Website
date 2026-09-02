import { ArrowRight, Check, Compass } from "lucide-react";
import { Container } from "../../components/common/Container";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import { Button } from "../../components/ui/Button";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import { formationComparison, formationOptions } from "../../data/home";
import { cn } from "../../utils/cn";

const helpMessage =
  "Hello DGNS Advisors, I need help choosing between Mainland and Free Zone company formation in the UAE.";

export function BusinessSetupSection() {
  return (
    <Section background="off-white" spacing="lg" aria-labelledby="formation-title">
      <Container>
        <SectionHeading
          eyebrow="UAE Company Formation"
          title="Choose the Right Structure for Your Business"
          description="Whether your goals are focused on the UAE market or international operations, we help you understand the right company formation path."
          headingId="formation-title"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {formationOptions.map((option, index) => (
            <ScrollReveal
              key={option.title}
              variant={index === 0 ? "slide-left" : "slide-right"}
            >
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 sm:p-9 lg:min-h-[30rem] lg:p-10",
                  index === 0
                    ? "border-deep-green bg-deep-green text-white"
                    : "border-deep-green/10 bg-white text-charcoal shadow-soft",
                )}
              >
                <span
                  className={cn(
                    "type-label",
                    index === 0 ? "text-brand-lime" : "text-emerald",
                  )}
                >
                  0{index + 1} · Formation path
                </span>
                <h3
                  className={cn(
                    "mt-8 text-[clamp(2.3rem,4vw,4rem)] font-semibold leading-none tracking-[-0.05em]",
                    index === 0 ? "text-white" : "text-deep-green",
                  )}
                >
                  {option.title}
                </h3>
                <p
                  className={cn(
                    "mt-5 max-w-xl text-base leading-7",
                    index === 0 ? "text-white/64" : "text-muted",
                  )}
                >
                  {option.description}
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {option.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-6">
                      <span
                        className={cn(
                          "mt-1 grid size-5 shrink-0 place-items-center rounded-full",
                          index === 0
                            ? "bg-brand-lime text-deep-green"
                            : "bg-deep-green text-brand-lime",
                        )}
                      >
                        <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                      </span>
                      <span className={index === 0 ? "text-white/78" : "text-charcoal/76"}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  to={option.to}
                  variant={index === 0 ? "primary" : "dark"}
                  className="mt-8 w-fit lg:mt-auto"
                >
                  {option.label}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Button>

                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute -right-20 -top-20 size-52 rounded-full border",
                    index === 0 ? "border-brand-lime/10" : "border-deep-green/8",
                  )}
                />
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-5 flex flex-col items-start justify-between gap-5 rounded-card border border-deep-green/10 bg-white p-6 sm:flex-row sm:items-center sm:p-7">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-lime/18 text-deep-green">
              <Compass aria-hidden="true" className="size-5" />
            </span>
            <div>
              <p className="font-bold text-deep-green">Not sure which option fits your business?</p>
              <p className="mt-1 text-sm leading-6 text-muted">
                Share your goals and we&apos;ll help you understand the practical differences.
              </p>
            </div>
          </div>
          <WhatsAppCTA
            label="Help Me Choose"
            message={helpMessage}
            variant="dark"
            className="w-full sm:w-auto"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-8 overflow-hidden rounded-[2rem] border border-deep-green/10 bg-white shadow-soft">
          <div className="flex flex-col justify-between gap-5 border-b border-deep-green/10 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="type-label text-emerald">At a glance</p>
              <h3 className="mt-2 text-xl font-semibold text-deep-green sm:text-2xl">
                Mainland vs Free Zone
              </h3>
            </div>
            <Button to="/business-setup" variant="text" className="w-fit">
              View Full Comparison
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
          </div>

          <div>
            <div className="hidden grid-cols-[1fr_1.15fr_1.15fr] gap-6 bg-off-white px-8 py-3 text-xs font-bold uppercase tracking-[0.11em] text-muted sm:grid">
              <span>Consideration</span>
              <span>Mainland</span>
              <span>Free Zone</span>
            </div>
            {formationComparison.map((row) => (
              <div
                key={row.label}
                className="grid gap-3 border-t border-deep-green/8 px-6 py-5 first:border-0 sm:grid-cols-[1fr_1.15fr_1.15fr] sm:gap-6 sm:px-8"
              >
                <p className="text-sm font-bold text-deep-green">{row.label}</p>
                <p className="text-sm leading-6 text-muted">
                  <span className="mr-2 font-bold text-emerald sm:hidden">Mainland:</span>
                  {row.mainland}
                </p>
                <p className="text-sm leading-6 text-muted">
                  <span className="mr-2 font-bold text-emerald sm:hidden">Free Zone:</span>
                  {row.freeZone}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
