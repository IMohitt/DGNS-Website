import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";

type ServiceFinalCTAProps = {
  title: string;
  description: string;
  label: string;
  message: string;
};

export function ServiceFinalCTA({
  title,
  description,
  label,
  message,
}: ServiceFinalCTAProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-charcoal py-18 text-white sm:py-24 lg:py-28"
      aria-labelledby="service-final-cta-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_115%,rgba(155,232,61,0.18),transparent_44%)]"
      />
      <Container className="relative">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="type-label text-brand-lime">Start • Manage • Grow</p>
          <h2
            id="service-final-cta-title"
            className="mt-5 text-[clamp(2.35rem,5vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-balance"
          >
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            {description}
          </p>
          <WhatsAppCTA
            label={label}
            message={message}
            variant="primary"
            className="mt-9 w-full sm:w-auto"
          />
        </ScrollReveal>
      </Container>
    </section>
  );
}
