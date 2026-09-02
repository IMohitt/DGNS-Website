import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  ChartNoAxesCombined,
  Landmark,
  ReceiptText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/common/Container";
import { PageMeta } from "../../components/common/PageMeta";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import {
  ServiceBreadcrumbs,
  ServiceFAQSection,
  ServiceFinalCTA,
} from "../../components/services";
import { Button } from "../../components/ui/Button";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import {
  serviceHubCategories,
  serviceHubFaqs,
} from "../../data/services";
import { cn } from "../../utils/cn";

const consultationMessage =
  "Hello DGNS Advisors, I would like to discuss the services you provide for businesses in the UAE.";
const finalMessage =
  "Hello DGNS Advisors, I would like to discuss my business requirements and understand which services I need.";

const serviceIcons = [
  Building2,
  BookOpenCheck,
  ReceiptText,
  Landmark,
  ChartNoAxesCombined,
] as const;

const journey = [
  {
    number: "01",
    title: "Start",
    text: "Choose a suitable UAE company structure, activity and licensing path.",
  },
  {
    number: "02",
    title: "Operate",
    text: "Maintain accounting records and coordinate recurring VAT and tax responsibilities.",
  },
  {
    number: "03",
    title: "Grow",
    text: "Use clearer financial reporting and practical advisory support for better decisions.",
  },
] as const;

export function ServicesPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <PageMeta
        title="DGNS Advisors Services | UAE Business, Accounting & Tax"
        description="Explore integrated UAE business setup, accounting, bookkeeping, VAT, corporate tax and advisory services from DGNS Advisors."
        canonicalPath="/services"
      />

      <section
        className="relative isolate overflow-hidden bg-deep-green text-white"
        aria-labelledby="services-page-title"
      >
        <div aria-hidden="true" className="absolute inset-0 home-hero-grid opacity-75" />
        <div
          aria-hidden="true"
          className="absolute -right-64 -top-64 size-[42rem] rounded-full border border-brand-lime/10"
        />
        <Container className="relative py-10 sm:py-14 lg:py-20">
          <ServiceBreadcrumbs
            inverse
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
            ]}
          />

          <div className="mt-12 grid items-end gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.58,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="type-label text-brand-lime">Our Services</p>
              <h1
                id="services-page-title"
                className="mt-5 max-w-5xl text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-balance"
              >
                Everything Your UAE Business Needs to Start, Operate and Grow
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                DGNS Advisors provides integrated business setup, accounting,
                bookkeeping, VAT, corporate tax and advisory support for companies
                operating across the UAE.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WhatsAppCTA
                  label="Get Free Consultation"
                  message={consultationMessage}
                  variant="primary"
                />
                <Button
                  href="#service-categories"
                  variant="secondary"
                  className="border-white/28 text-white hover:border-white hover:bg-white hover:text-deep-green"
                >
                  Explore Services
                  <ArrowDown aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.62,
                delay: reduceMotion ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative grid grid-cols-2 gap-3 rounded-[2rem] border border-white/12 bg-white/[0.045] p-4 shadow-[0_30px_80px_rgba(2,18,15,0.3)] backdrop-blur-sm sm:p-5"
            >
              {serviceHubCategories.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <Link
                    key={service.to}
                    to={service.to}
                    className={cn(
                      "group min-h-[9rem] rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4 transition-colors hover:border-brand-lime/40 hover:bg-white/[0.075] sm:p-5",
                      index === 0 && "col-span-2",
                      index === 4 && "col-span-2 sm:col-span-1",
                    )}
                  >
                    <Icon aria-hidden="true" className="size-5 text-brand-lime" />
                    <p className="mt-7 max-w-[14rem] text-sm font-semibold leading-5 text-white sm:text-base">
                      {service.title}
                    </p>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </Container>
      </section>

      <Section
        id="service-categories"
        background="white"
        spacing="lg"
        aria-labelledby="service-categories-title"
        className="scroll-mt-20"
      >
        <Container>
          <SectionHeading
            eyebrow="Integrated Expertise"
            title="Five Core Services, One Coordinated View"
            description="Choose the support you need today and connect it with the services your business may need next."
            headingId="service-categories-title"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            {serviceHubCategories.map((service, index) => {
              const Icon = serviceIcons[index];
              const dark = index === 0 || index === 3;

              return (
                <ScrollReveal
                  key={service.to}
                  delay={(index % 3) * 0.05}
                  className={cn(
                    index === 0 && "lg:col-span-7",
                    index === 1 && "lg:col-span-5",
                    index === 2 && "lg:col-span-5",
                    index === 3 && "lg:col-span-7",
                    index === 4 && "lg:col-span-12",
                  )}
                >
                  <article
                    className={cn(
                      "relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[2rem] border p-7 sm:min-h-[24rem] sm:p-9 lg:min-h-[27rem]",
                      index === 4 && "lg:min-h-[22rem]",
                      dark
                        ? "border-deep-green bg-deep-green text-white"
                        : "border-deep-green/10 bg-off-white text-charcoal shadow-soft",
                    )}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <span
                        className={cn(
                          "grid size-12 place-items-center rounded-2xl",
                          dark
                            ? "bg-brand-lime text-deep-green"
                            : "bg-deep-green text-brand-lime",
                        )}
                      >
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span
                        className={cn(
                          "text-xs font-extrabold tracking-[0.15em]",
                          dark ? "text-white/58" : "text-deep-green/62",
                        )}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_0.9fr]">
                      <div>
                        <h2
                          className={cn(
                            "max-w-2xl text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-tight tracking-[-0.04em]",
                            dark ? "text-white" : "text-deep-green",
                          )}
                        >
                          {service.title}
                        </h2>
                        <p
                          className={cn(
                            "mt-4 max-w-2xl text-sm leading-7 sm:text-base",
                            dark ? "text-white/62" : "text-muted",
                          )}
                        >
                          {service.description}
                        </p>
                      </div>
                      <ul className="grid content-start gap-2">
                        {service.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className={cn(
                              "border-b py-2 text-sm font-semibold last:border-0",
                              dark
                                ? "border-white/10 text-white/74"
                                : "border-deep-green/10 text-deep-green/72",
                            )}
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={service.to}
                      aria-label={`Learn more about ${service.title}`}
                      className={cn(
                        "group mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold",
                        dark ? "text-brand-lime" : "text-emerald",
                      )}
                    >
                      Learn More
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section background="deep-green" spacing="lg" aria-labelledby="services-journey-title">
        <Container>
          <SectionHeading
            eyebrow="Start • Operate • Grow"
            title="Support That Follows the Business Journey"
            description="A coordinated service relationship makes it easier to connect company formation, financial records, compliance and decision support."
            headingId="services-journey-title"
            inverse
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {journey.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-card border border-white/10 bg-white/[0.045] p-7">
                  <p className="text-xs font-extrabold tracking-[0.14em] text-brand-lime">
                    {item.number}
                  </p>
                  <h3 className="mt-10 text-3xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/58">{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <ServiceFAQSection
        items={serviceHubFaqs}
        description="Useful starting points when deciding how DGNS Advisors can support your UAE business."
      />
      <ServiceFinalCTA
        title="Not Sure Which Service You Need?"
        description="Tell us about your business and DGNS Advisors will help you understand the most relevant services for your requirements."
        label="Talk to DGNS Advisors"
        message={finalMessage}
      />
    </>
  );
}
