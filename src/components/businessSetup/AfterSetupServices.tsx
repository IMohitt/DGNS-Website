import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";

export type AfterSetupService = {
  title: string;
  description: string;
  to: string;
};

type AfterSetupServicesProps = {
  items: readonly AfterSetupService[];
};

export function AfterSetupServices({ items }: AfterSetupServicesProps) {
  return (
    <Section background="off-white" spacing="md" aria-labelledby="after-setup-services-title">
      <Container>
        <SectionHeading
          eyebrow="Connected Business Support"
          title="After Your Company Is Set Up"
          description="Connect company formation with the financial records, tax support and advisory work an operating business may need next."
          headingId="after-setup-services-title"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <ScrollReveal key={item.to} delay={(index % 4) * 0.045} className="h-full">
              <Link
                to={item.to}
                className="group flex h-full min-h-[13rem] flex-col rounded-card border border-deep-green/10 bg-white p-6 shadow-soft transition-[transform,border-color] hover:-translate-y-1 hover:border-soft-green/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-extrabold tracking-[0.14em] text-emerald">{String(index + 1).padStart(2, "0")}</span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-deep-green text-brand-lime transition-colors group-hover:bg-brand-lime group-hover:text-deep-green">
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
                <h3 className="mt-7 text-lg font-semibold text-deep-green">{item.title}</h3>
                <p className="mt-auto pt-5 text-sm leading-6 text-muted">{item.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
