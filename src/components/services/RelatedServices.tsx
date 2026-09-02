import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import type { ServiceLink } from "../../data/services";

type RelatedServicesProps = {
  items: readonly ServiceLink[];
};

export function RelatedServices({ items }: RelatedServicesProps) {
  return (
    <Section background="off-white" spacing="md" aria-labelledby="related-services-title">
      <Container>
        <SectionHeading
          eyebrow="Connected Support"
          title="Your Business Needs More Than One Service"
          description="Explore related support that can work alongside your current requirements."
          headingId="related-services-title"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <ScrollReveal key={item.to} delay={index * 0.05}>
              <Link
                to={item.to}
                className="group flex h-full min-h-[12rem] flex-col rounded-card border border-deep-green/10 bg-white p-6 shadow-soft transition-[transform,border-color] hover:-translate-y-1 hover:border-soft-green/60 sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-xl font-semibold text-deep-green">{item.title}</h3>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-deep-green text-brand-lime transition-colors group-hover:bg-brand-lime group-hover:text-deep-green">
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
                <p className="mt-auto pt-7 text-sm leading-6 text-muted">{item.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
