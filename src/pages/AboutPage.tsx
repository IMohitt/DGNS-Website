import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Compass,
  Eye,
  FileCheck2,
  Headphones,
  Landmark,
  MessageSquareText,
  PanelsTopLeft,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Target,
  TrendingUp,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";

import accountingImage1000 from "../assets/images/home/accounting-tax-1000.jpg";
import accountingImage640 from "../assets/images/home/accounting-tax-640.jpg";
import accountingImage from "../assets/images/home/accounting-tax.jpg";
import advisoryImage1000 from "../assets/images/services/advisory-strategy-1000.jpg";
import advisoryImage640 from "../assets/images/services/advisory-strategy-640.jpg";
import advisoryImage from "../assets/images/services/advisory-strategy.jpg";
import { Container } from "../components/common/Container";
import { JsonLd } from "../components/common/JsonLd";
import { PageMeta } from "../components/common/PageMeta";
import { ResponsiveImage } from "../components/common/ResponsiveImage";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { Section } from "../components/common/Section";
import { SectionHeading } from "../components/common/SectionHeading";
import {
  ServiceBreadcrumbs,
  ServiceFinalCTA,
} from "../components/services";
import { Button } from "../components/ui/Button";
import { WhatsAppCTA } from "../components/ui/WhatsAppCTA";
import { siteConfig } from "../config/siteConfig";
import {
  aboutApproachSteps,
  aboutJourneyStages,
  aboutValues,
  whyDgnsBenefits,
} from "../data/about";
import { cn } from "../utils/cn";

const pageTitle = "About DGNS Advisors | UAE Business & Tax Advisory";
const pageDescription =
  "Learn about DGNS Advisors LLC FZ and our approach to UAE business setup, accounting, bookkeeping, VAT, corporate tax and business advisory support.";

const teamMessage =
  "Hello DGNS Advisors, I would like to speak with your team regarding your business services.";
const whyDgnsMessage =
  "Hello DGNS Advisors, I would like to learn more about how your team can support my business in the UAE.";
const finalMessage =
  "Hello DGNS Advisors, I would like to book a consultation regarding my UAE business requirements.";

const valueIcons = [
  ShieldCheck,
  BadgeCheck,
  Eye,
  BriefcaseBusiness,
  MessageSquareText,
  Target,
] as const;

const approachIcons = [ScanSearch, Compass, FileCheck2, Headphones] as const;
const journeyIcons = [Rocket, PanelsTopLeft, TrendingUp] as const;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.website}#organization`,
  name: siteConfig.companyName,
  url: siteConfig.website,
  telephone: siteConfig.phone,
  email: siteConfig.primaryEmail,
  description: pageDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.locality,
    addressCountry: siteConfig.address.countryCode,
  },
};

export function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/about"
      />
      <JsonLd data={organizationSchema} />

      <section
        className="relative isolate overflow-hidden bg-deep-green text-white"
        aria-labelledby="about-page-title"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(155,232,61,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(155,232,61,0.045)_1px,transparent_1px)] [background-size:72px_72px]"
        />
        <div
          aria-hidden="true"
          className="absolute -left-48 top-1/4 size-[34rem] rounded-full bg-soft-green/8 blur-3xl"
        />

        <Container className="relative py-10 sm:py-14 lg:py-18">
          <ServiceBreadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "About Us" }]}
            inverse
          />

          <div className="mt-10 grid min-w-0 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.56,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-w-0"
            >
              <p className="type-label text-brand-lime">ABOUT DGNS ADVISORS</p>
              <h1
                id="about-page-title"
                className="mt-5 max-w-4xl text-[clamp(2.75rem,5.6vw,5.35rem)] font-semibold leading-[1.01] tracking-[-0.052em] text-balance"
              >
                Driven by Purpose. Built on Trust.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                DGNS Advisors supports entrepreneurs and businesses across the UAE
                with company formation, accounting, bookkeeping, VAT, corporate tax
                and practical business advisory services.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppCTA
                  label="Talk to Our Team"
                  message={teamMessage}
                  variant="primary"
                  className="w-full sm:w-auto"
                />
                <Button
                  to="/services"
                  variant="secondary"
                  className="w-full border-white/36 text-white hover:border-white hover:bg-white hover:text-deep-green sm:w-auto"
                >
                  Explore Our Services
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Button>
              </div>

              <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 border-t border-white/12 pt-6">
                {["Start", "Manage", "Grow"].map((stage) => (
                  <span
                    key={stage}
                    className="text-xs font-extrabold tracking-[0.13em] text-white/66 uppercase"
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.64,
                delay: reduceMotion ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-w-0 pb-9 lg:pb-12 lg:pr-9"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-3 bottom-6 rounded-[2.2rem] border border-white/10 lg:right-6"
              />
              <ResponsiveImage
                src={advisoryImage}
                srcSet={`${advisoryImage640} 640w, ${advisoryImage1000} 1000w, ${advisoryImage} 1500w`}
                sizes="(max-width: 1023px) calc(100vw - 2rem), 52vw"
                width={1500}
                height={1000}
                alt="Strategic planning workspace with Dubai architecture in the background"
                loading="eager"
                fetchPriority="high"
                rounded="2xl"
                wrapperClassName="aspect-[4/3.7] min-h-[23rem] bg-charcoal shadow-[0_30px_80px_rgba(3,20,17,0.34)] sm:min-h-[29rem] lg:min-h-0 lg:aspect-[4/4.25]"
                style={{ objectPosition: "54% center" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-9 top-0 rounded-2xl bg-[linear-gradient(180deg,rgba(11,53,45,0.02)_44%,rgba(7,30,25,0.68)_100%)] lg:right-9 lg:bottom-12"
              />

              <div className="absolute inset-x-4 bottom-0 rounded-[1.4rem] border border-white/12 bg-charcoal/95 p-5 shadow-soft backdrop-blur-sm sm:inset-x-auto sm:left-7 sm:max-w-sm sm:p-6 lg:left-6">
                <p className="type-label text-brand-lime">
                  Start • Manage • Grow Your Business
                </p>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Your Trusted Partner for Business Setup &amp; Tax Services in
                  the UAE
                </p>
              </div>

              <div className="absolute right-0 top-10 hidden w-40 rounded-[1.35rem] border border-deep-green/10 bg-white p-5 text-deep-green shadow-soft lg:block">
                <Landmark aria-hidden="true" className="size-5 text-emerald" />
                <p className="mt-8 text-sm font-semibold leading-6">
                  UAE-focused business support
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="about-purpose-title"
        className="overflow-hidden"
      >
        <Container className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <ScrollReveal delay={0.08} className="lg:order-2">
            <SectionHeading
              eyebrow="OUR PURPOSE"
              title="Helping Businesses Start Strong and Stay Ready for Growth"
              headingId="about-purpose-title"
            />
            <div className="mt-7 space-y-5 text-base leading-8 text-muted">
              <p>
                DGNS Advisors exists to simplify the operational and compliance
                challenges businesses face when establishing and managing a company
                in the UAE.
              </p>
              <p>
                Our approach combines practical guidance, structured processes and
                ongoing support so clients can focus on building their businesses.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/business-setup" variant="dark" className="w-full sm:w-auto">
                Explore Business Setup
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Button>
              <Button to="/contact" variant="text" className="w-full sm:w-auto">
                Contact DGNS
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="slide-left"
            className="relative min-w-0 lg:order-1"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 size-48 rounded-full border border-soft-green/22"
            />
            <ResponsiveImage
              src={accountingImage}
              srcSet={`${accountingImage640} 640w, ${accountingImage1000} 1000w, ${accountingImage} 1500w`}
              sizes="(max-width: 1023px) calc(100vw - 2rem), 52vw"
              width={1500}
              height={1000}
              alt="Organised accounting workspace overlooking a Dubai business district"
              rounded="2xl"
              wrapperClassName="relative aspect-[4/3.1] bg-off-white shadow-soft sm:aspect-[16/10] lg:aspect-[4/3.7]"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] border border-white/50 bg-white/92 p-5 shadow-soft backdrop-blur-sm sm:left-auto sm:max-w-xs">
              <Waypoints aria-hidden="true" className="size-5 text-emerald" />
              <p className="mt-4 text-sm font-semibold leading-6 text-deep-green">
                Practical guidance. Structured processes. Ongoing support.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <Section
        background="off-white"
        spacing="lg"
        aria-labelledby="about-direction-title"
      >
        <Container>
          <SectionHeading
            eyebrow="Our Direction"
            title="Purpose With a Long-Term View"
            description="A clear vision and mission keep each engagement centred on useful support for businesses operating in the UAE."
            headingId="about-direction-title"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <ScrollReveal className="h-full lg:col-span-7">
              <article className="relative flex h-full min-h-[27rem] flex-col overflow-hidden rounded-[2rem] bg-deep-green p-7 text-white shadow-soft sm:p-9 lg:p-11">
                <div
                  aria-hidden="true"
                  className="absolute -right-28 -top-28 size-72 rounded-full border border-brand-lime/14"
                />
                <div className="relative flex items-center justify-between gap-5">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-lime text-deep-green">
                    <Compass aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-xs font-extrabold tracking-[0.14em] text-white/54">
                    01
                  </span>
                </div>
                <div className="relative mt-auto pt-16">
                  <p className="type-label text-brand-lime">Direction</p>
                  <h3 className="mt-4 text-[clamp(2rem,3.6vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.04em]">
                    Our Vision
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                    To become a trusted long-term advisory partner for entrepreneurs
                    and businesses operating in the UAE by delivering clear, reliable
                    and practical business support.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="h-full lg:col-span-5">
              <article className="flex h-full min-h-[27rem] flex-col rounded-[2rem] border border-deep-green/10 bg-white p-7 shadow-soft sm:p-9 lg:p-11">
                <div className="flex items-center justify-between gap-5">
                  <span className="grid size-12 place-items-center rounded-2xl bg-deep-green text-brand-lime">
                    <Waypoints aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-xs font-extrabold tracking-[0.14em] text-emerald">
                    02
                  </span>
                </div>
                <div className="mt-auto pt-16">
                  <p className="type-label text-emerald">Commitment</p>
                  <h3 className="mt-4 text-[clamp(2rem,3.2vw,3.2rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-deep-green">
                    Our Mission
                  </h3>
                  <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                    To support businesses throughout their journey — from company
                    formation and licensing to accounting, tax compliance and
                    financial advisory — through professional service and responsive
                    client support.
                  </p>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <Section
        background="charcoal"
        spacing="lg"
        aria-labelledby="about-values-title"
        className="overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(155,232,61,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(155,232,61,0.045)_1px,transparent_1px)] [background-size:64px_64px]"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="Core Values"
            title="Principles That Shape How We Work"
            description="Professional support depends on how clearly, consistently and responsibly each client engagement is handled."
            inverse
            headingId="about-values-title"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {aboutValues.map((value, index) => {
              const Icon = valueIcons[index];
              const featured = index === 0;

              return (
                <ScrollReveal
                  key={value.title}
                  delay={(index % 4) * 0.05}
                  className={cn(
                    "h-full",
                    index === 0 && "lg:col-span-8",
                    index === 1 && "lg:col-span-4",
                    index > 1 && "lg:col-span-3",
                  )}
                >
                  <article
                    className={cn(
                      "group flex h-full flex-col overflow-hidden rounded-card border p-6 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 sm:p-7",
                      index < 2 ? "min-h-[18rem]" : "min-h-[14.5rem]",
                      featured
                        ? "border-brand-lime bg-brand-lime text-deep-green"
                        : "border-white/10 bg-white/[0.045] text-white hover:border-brand-lime/30 hover:bg-white/[0.065]",
                    )}
                  >
                    <div className="flex items-center justify-between gap-5">
                      <span
                        className={cn(
                          "grid size-11 place-items-center rounded-2xl",
                          featured
                            ? "bg-deep-green text-brand-lime"
                            : "bg-brand-lime/10 text-brand-lime",
                        )}
                      >
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span
                        className={cn(
                          "text-xs font-extrabold tracking-[0.14em]",
                          featured ? "text-deep-green/78" : "text-white/54",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-auto pt-10 text-xl font-semibold sm:text-2xl">
                      {value.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-7",
                        featured ? "text-deep-green/78" : "text-white/64",
                      )}
                    >
                      {value.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section
        background="soft-gradient"
        spacing="lg"
        aria-labelledby="about-journey-title"
        className="overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute -right-48 -top-48 size-[34rem] rounded-full border border-soft-green/14"
        />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
            <SectionHeading
              eyebrow="What We Support"
              title="Support Throughout Your UAE Business Journey"
              description="Company formation connects naturally with the financial records, compliance and advisory work an operating business may need over time."
              headingId="about-journey-title"
            />
            <p
              aria-hidden="true"
              className="text-[clamp(1.7rem,4vw,3.5rem)] font-semibold leading-none tracking-[-0.045em] text-deep-green/12 lg:text-right"
            >
              Start • Manage • Grow
            </p>
          </div>

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute left-[16.666%] right-[16.666%] top-5 hidden h-px bg-deep-green/10 lg:block"
            >
              <motion.span
                className="block h-px w-full origin-left bg-soft-green/70"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  ease: "easeOut",
                }}
              />
            </div>

            <ol className="relative grid gap-5 lg:grid-cols-3">
              {aboutJourneyStages.map((stage, index) => {
                const Icon = journeyIcons[index];
                const dark = index === 0;
                const sage = index === 2;

                return (
                  <li key={stage.title} className="relative list-none">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-1/2 top-3 z-20 hidden size-4 -translate-x-1/2 rounded-full border-[3px] border-white shadow-soft lg:block",
                        dark ? "bg-brand-lime" : "bg-deep-green",
                      )}
                    />
                    <ScrollReveal
                      delay={index * 0.07}
                      className="h-full lg:pt-10"
                    >
                      <article
                        className={cn(
                          "flex h-full min-h-[31rem] flex-col rounded-[2rem] border p-7 shadow-soft sm:p-8",
                          dark && "border-deep-green bg-deep-green text-white",
                          index === 1 &&
                            "border-deep-green/10 bg-white text-charcoal",
                          sage &&
                            "border-soft-green/24 bg-[linear-gradient(145deg,#EAF5E4_0%,#FFFFFF_78%)] text-charcoal",
                        )}
                      >
                        <div className="flex items-center justify-between gap-5">
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
                              "text-xs font-extrabold tracking-[0.14em]",
                              dark ? "text-brand-lime" : "text-emerald",
                            )}
                          >
                            {stage.number}
                          </span>
                        </div>
                        <h3
                          className={cn(
                            "mt-10 text-4xl font-semibold tracking-[-0.045em]",
                            dark ? "text-white" : "text-deep-green",
                          )}
                        >
                          {stage.title}
                        </h3>
                        <ul
                          className={cn(
                            "mt-8 grid gap-3 border-t pt-7",
                            dark
                              ? "border-white/12 text-white/72"
                              : "border-deep-green/10 text-deep-green/76",
                          )}
                        >
                          {stage.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-3 text-sm font-semibold"
                            >
                              <Check
                                aria-hidden="true"
                                className={cn(
                                  "size-4 shrink-0",
                                  dark ? "text-brand-lime" : "text-emerald",
                                )}
                                strokeWidth={2.5}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={stage.to}
                          className={cn(
                            "mt-auto inline-flex min-h-11 items-center gap-2 pt-9 text-sm font-bold",
                            dark ? "text-brand-lime" : "text-emerald",
                          )}
                        >
                          {stage.cta}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-4"
                          />
                        </Link>
                      </article>
                    </ScrollReveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </Section>

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="about-approach-title"
      >
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Work With Our Clients"
            description="A structured engagement connects the immediate requirement with the practical support the business may need next."
            align="center"
            headingId="about-approach-title"
          />

          <div className="relative mt-14 lg:mt-16">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-5 top-0 w-px bg-deep-green/10 lg:hidden"
            >
              <motion.span
                className="block h-full w-px origin-top bg-soft-green"
                initial={reduceMotion ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  ease: "easeOut",
                }}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-deep-green/10 lg:block"
            >
              <motion.span
                className="block h-px w-full origin-left bg-soft-green"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{
                  duration: reduceMotion ? 0 : 1,
                  ease: "easeOut",
                }}
              />
            </div>

            <ol className="grid gap-6 lg:grid-cols-4 lg:gap-7">
              {aboutApproachSteps.map((step, index) => {
                const Icon = approachIcons[index];

                return (
                  <li
                    key={step.number}
                    className="relative list-none pl-14 lg:pl-0"
                  >
                    <ScrollReveal delay={index * 0.07} className="h-full">
                      <span className="absolute left-0 top-0 z-10 grid size-10 place-items-center rounded-full border border-deep-green/12 bg-white text-xs font-extrabold text-deep-green shadow-soft lg:static lg:mx-auto">
                        {step.number}
                      </span>
                      <article className="mt-0 h-full rounded-card border border-deep-green/10 bg-off-white p-6 lg:mt-8 lg:min-h-[17rem] lg:text-center">
                        <span className="grid size-10 place-items-center rounded-xl bg-deep-green text-brand-lime lg:mx-auto">
                          <Icon aria-hidden="true" className="size-4" />
                        </span>
                        <h3 className="mt-7 text-xl font-semibold text-deep-green">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted">
                          {step.description}
                        </p>
                      </article>
                    </ScrollReveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </Section>

      <Section
        background="deep-green"
        spacing="lg"
        aria-labelledby="about-why-dgns-title"
        className="overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_72%_38%,rgba(155,232,61,0.10),transparent_52%)]"
        />
        <Container className="relative grid gap-14 lg:grid-cols-[0.74fr_1.26fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Why DGNS"
              title="A Business Partner Beyond Company Formation"
              description="Setting up a company is only the beginning. DGNS Advisors can continue supporting businesses with accounting, tax compliance, financial reporting and business advisory services."
              inverse
              headingId="about-why-dgns-title"
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppCTA
                label="Let's Connect"
                message={whyDgnsMessage}
                variant="primary"
                className="w-full sm:w-auto"
              />
              <Button
                to="/contact"
                variant="secondary"
                className="w-full border-white/36 text-white hover:border-white hover:bg-white hover:text-deep-green sm:w-auto"
              >
                Contact DGNS
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </ScrollReveal>

          <ul className="grid border-t border-white/12 sm:grid-cols-2">
            {whyDgnsBenefits.map((benefit, index) => (
              <li
                key={benefit}
                className={cn(
                  "flex min-h-[10rem] flex-col justify-between gap-7 border-b border-white/12 py-6 sm:p-7",
                  index % 2 === 0 && "sm:border-r sm:border-white/12",
                )}
              >
                <ScrollReveal
                  delay={(index % 4) * 0.045}
                  className="flex h-full flex-col justify-between gap-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-9 place-items-center rounded-full bg-brand-lime/12 text-brand-lime">
                      <Check aria-hidden="true" className="size-4" strokeWidth={2.5} />
                    </span>
                    <span className="text-xs font-extrabold tracking-[0.14em] text-white/54">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {benefit}
                  </h3>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ServiceFinalCTA
        title="Ready to Build Your Business With the Right Support?"
        description="Speak with DGNS Advisors about your company setup, accounting, tax or advisory requirements."
        label="Book Free Consultation"
        message={finalMessage}
      />
    </>
  );
}
