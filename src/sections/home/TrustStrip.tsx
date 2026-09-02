import { BookOpenCheck, BriefcaseBusiness, ShieldCheck, TrendingUp } from "lucide-react";
import { Container } from "../../components/common/Container";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { valueItems } from "../../data/home";
import { cn } from "../../utils/cn";

const icons = [BriefcaseBusiness, ShieldCheck, BookOpenCheck, TrendingUp] as const;

export function TrustStrip() {
  return (
    <section
      aria-label="How DGNS Advisors supports your business"
      className="border-b border-deep-green/8 bg-off-white"
    >
      <Container className="grid sm:grid-cols-2 lg:grid-cols-4">
        {valueItems.map((item, index) => {
          const Icon = icons[index];

          return (
            <ScrollReveal
              key={item.title}
              delay={index * 0.06}
              className={cn(
                "flex gap-4 border-b border-deep-green/8 py-7 sm:border-b-0 sm:px-5 lg:border-r lg:px-6 lg:py-8 first:pl-0 last:pr-0",
                index === 3 && "border-b-0",
                index < 2 && "sm:border-b",
                index % 2 === 0 && "sm:border-r",
                index === 3 && "lg:border-r-0",
              )}
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-deep-green text-brand-lime">
                <Icon aria-hidden="true" className="size-4.5" />
              </span>
              <div>
                <h2 className="text-sm font-bold text-deep-green">{item.title}</h2>
                <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </Container>
    </section>
  );
}
