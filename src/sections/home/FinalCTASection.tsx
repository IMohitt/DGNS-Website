import { Phone } from "lucide-react";
import { Container } from "../../components/common/Container";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Button } from "../../components/ui/Button";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import { siteConfig } from "../../config/siteConfig";

const finalCtaMessage =
  "Hello DGNS Advisors, I would like to book a free consultation regarding my UAE business requirements.";

export function FinalCTASection() {
  const telephoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;

  return (
    <section
      className="relative isolate overflow-hidden bg-charcoal py-18 text-white sm:py-24 lg:py-28"
      aria-labelledby="final-cta-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(155,232,61,0.16),transparent_44%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
      />
      <Container className="relative">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="type-label text-brand-lime">Start • Manage • Grow</p>
          <h2
            id="final-cta-title"
            className="mt-5 text-[clamp(2.45rem,5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-balance"
          >
            Ready to Start, Manage or Grow Your UAE Business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
            Speak with DGNS Advisors and get practical guidance tailored to your
            business requirements.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppCTA
              label="Book Your Free Consultation"
              message={finalCtaMessage}
              variant="primary"
            />
            <Button
              href={telephoneHref}
              variant="secondary"
              className="border-white/28 text-white hover:border-white hover:bg-white hover:text-deep-green"
            >
              <Phone aria-hidden="true" className="size-4" />
              Call Us
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
