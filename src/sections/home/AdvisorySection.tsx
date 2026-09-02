import { ArrowRight } from "lucide-react";
import { Container } from "../../components/common/Container";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { Button } from "../../components/ui/Button";
import { advisoryItems } from "../../data/home";

export function AdvisorySection() {
  return (
    <Section
      background="charcoal"
      spacing="lg"
      aria-labelledby="advisory-title"
      className="overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-72 -right-48 size-[46rem] rounded-full border border-brand-lime/8"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-44 -right-20 size-[32rem] rounded-full border border-brand-lime/8"
      />

      <Container className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
        <ScrollReveal>
          <p className="type-label text-brand-lime">Business Advisory</p>
          <h2
            id="advisory-title"
            className="mt-5 max-w-4xl text-[clamp(2.6rem,5.5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white text-balance"
          >
            Better Decisions for Stronger Business Growth
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
            We support businesses with practical structuring, financial planning,
            reporting and advisory solutions designed around their goals.
          </p>
          <Button to="/services/advisory" variant="primary" className="mt-9">
            Explore Advisory
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </ScrollReveal>

        <ScrollReveal variant="slide-right" className="border-t border-white/12">
          {advisoryItems.map((item, index) => (
            <div key={item} className="flex items-center gap-5 border-b border-white/12 py-5">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.12em] text-brand-lime/62">
                  0{index + 1}
                </span>
                <h3 className="text-base font-semibold text-white sm:text-lg">{item}</h3>
              </div>
              <span aria-hidden="true" className="ml-auto size-1.5 shrink-0 rounded-full bg-brand-lime/55" />
            </div>
          ))}
        </ScrollReveal>
      </Container>
    </Section>
  );
}
