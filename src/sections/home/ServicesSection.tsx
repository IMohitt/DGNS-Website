import {
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  ChartNoAxesCombined,
  FileCheck2,
  Landmark,
  ReceiptText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/common/Container";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import { services } from "../../data/home";
import { cn } from "../../utils/cn";

const icons = [
  Building2,
  Landmark,
  BookOpenCheck,
  ReceiptText,
  ChartNoAxesCombined,
  FileCheck2,
] as const;

export function ServicesSection() {
  return (
    <Section id="services" background="white" spacing="lg" aria-labelledby="services-title">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Everything Your UAE Business Needs, Under One Roof"
          description="From setting up your company to managing accounting and tax compliance, DGNS Advisors supports every stage of your UAE business journey."
          headingId="services-title"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {services.map((service, index) => {
            const Icon = icons[index];
            const isDark = index === 0;
            const isTax = index === 1;

            return (
              <ScrollReveal
                key={service.title}
                delay={(index % 3) * 0.06}
                className={cn(
                  index === 0 && "lg:col-span-7",
                  index === 1 && "lg:col-span-5",
                  index > 1 && "lg:col-span-3",
                )}
              >
                <Link
                  to={service.to}
                  className={cn(
                    "group relative flex h-full min-h-[14rem] flex-col overflow-hidden rounded-card border p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 sm:min-h-[17rem] sm:p-7",
                    service.featured && "lg:min-h-[21rem] lg:p-9",
                    isDark &&
                      "border-deep-green bg-deep-green text-white shadow-soft hover:border-emerald",
                    isTax &&
                      "border-brand-lime/35 bg-[linear-gradient(145deg,#F3F8EC_0%,#FFFFFF_74%)] text-charcoal shadow-soft hover:border-brand-lime",
                    !service.featured &&
                      "border-deep-green/10 bg-off-white text-charcoal hover:border-soft-green/55 hover:shadow-soft",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-2xl",
                      isDark
                        ? "bg-brand-lime text-deep-green"
                        : "bg-deep-green text-brand-lime",
                    )}
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </span>

                  <div className="mt-auto pt-10">
                    <h3
                      className={cn(
                        "type-h3",
                        isDark ? "text-white" : "text-deep-green",
                      )}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 max-w-lg text-sm leading-6",
                        isDark ? "text-white/62" : "text-muted",
                      )}
                    >
                      {service.description}
                    </p>
                    <span
                      className={cn(
                        "mt-6 inline-flex items-center gap-2 text-sm font-bold",
                        isDark ? "text-brand-lime" : "text-emerald",
                      )}
                    >
                      Learn More
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>

                  {service.featured ? (
                    <Icon
                      aria-hidden="true"
                      className={cn(
                        "absolute -right-8 -top-8 size-40 rotate-6",
                        isDark ? "text-white/[0.035]" : "text-deep-green/[0.035]",
                      )}
                      strokeWidth={1}
                    />
                  ) : null}
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
