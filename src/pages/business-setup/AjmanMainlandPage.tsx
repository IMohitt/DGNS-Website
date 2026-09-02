import {
  ArrowUpRight,
  BriefcaseBusiness,
  Compass,
  Factory,
  FileCheck2,
  Laptop,
  Network,
  Rocket,
  ShoppingBag,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

import ajmanImage640 from "../../assets/images/home/location-ajman-640.jpg";
import ajmanImage from "../../assets/images/home/location-ajman.jpg";
import {
  AfterSetupServices,
  BusinessSetupHero,
  BusinessSetupSchema,
  DocumentChecklist,
  EmirateBenefits,
  FormationTimeline,
} from "../../components/businessSetup";
import { Container } from "../../components/common/Container";
import { PageMeta } from "../../components/common/PageMeta";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import {
  ServiceDisclaimer,
  ServiceFAQSection,
  ServiceFinalCTA,
} from "../../components/services";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import {
  ajmanAdvantages,
  ajmanDocuments,
  ajmanDocumentsNote,
  ajmanFaqs,
  ajmanFormationProcess,
  ajmanSuitableBusinessTypes,
  recurringServicesAfterSetup,
} from "../../data/businessSetup";
import { cn } from "../../utils/cn";

const pageTitle = "Ajman Mainland Business Setup | DGNS Advisors";
const pageDescription =
  "Explore Ajman Mainland business setup with practical guidance on activities, company structure, licensing, documentation and post-formation compliance.";

const ajmanMessage =
  "Hello DGNS Advisors, I would like guidance regarding Ajman Mainland company formation.";

const businessStages = [
  {
    number: "01",
    label: "Start",
    title: "Shape the Business Model",
    description:
      "Define the activity, customer base and practical requirements before selecting the company structure.",
  },
  {
    number: "02",
    label: "Operate",
    title: "Build Around Real Requirements",
    description:
      "Connect licensing, premises and approvals with how the company is expected to work day to day.",
  },
  {
    number: "03",
    label: "Grow",
    title: "Prepare for Ongoing Obligations",
    description:
      "Plan suitable records, tax reviews and advisory support as the business develops.",
  },
] as const;

const businessTypeIcons: readonly LucideIcon[] = [
  Rocket,
  ShoppingBag,
  BriefcaseBusiness,
  Laptop,
  Factory,
  TrendingUp,
];

const dgnsSupport = [
  {
    number: "01",
    title: "Review the Intended Setup",
    description:
      "Discuss the activity, ownership, customer market, premises and applicant status before the formation route is selected.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Coordinate Formation Steps",
    description:
      "Organise company information and support the relevant documentation, registration and approval sequence.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Connect Post-Setup Support",
    description:
      "Help the new company establish organised accounting, tax and advisory support where relevant.",
    icon: Network,
  },
] as const;

const internalPathways = [
  {
    label: "Mainland Overview",
    to: "/business-setup/mainland",
  },
  {
    label: "Compare Free Zones",
    to: "/business-setup/free-zone",
  },
  {
    label: "UAE Business Setup",
    to: "/business-setup",
  },
] as const;

export function AjmanMainlandPage() {
  return (
    <>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/business-setup/mainland/ajman"
      />
      <BusinessSetupSchema
        name="Ajman Mainland Business Setup"
        description={pageDescription}
        path="/business-setup/mainland/ajman"
        areaServed="Ajman, United Arab Emirates"
      />

      <BusinessSetupHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Business Setup", to: "/business-setup" },
          { label: "Mainland", to: "/business-setup/mainland" },
          { label: "Ajman" },
        ]}
        eyebrow="AJMAN MAINLAND"
        title="Business Setup in Ajman Mainland"
        description="Explore an accessible UAE business environment for startups, entrepreneurs and growing companies."
        ctaLabel="Discuss Ajman Setup"
        ctaMessage={ajmanMessage}
        secondaryLabel="Explore Mainland Options"
        secondaryTo="/business-setup/mainland"
        image={ajmanImage}
        imageSrcSet={`${ajmanImage640} 640w, ${ajmanImage} 1100w`}
        imageSizes="(max-width: 1023px) calc(100vw - 2rem), 50vw"
        imageWidth={1100}
        imageHeight={733}
        imageAlt="Ajman waterfront, marina and modern buildings representing its Mainland business environment"
        imagePosition="center 52%"
        highlights={[
          "Founder and SME-focused planning",
          "Activity and structure guidance",
          "Ongoing compliance support",
        ]}
        tone="sage"
        layout="offset"
      />

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="why-ajman-mainland-title"
        className="overflow-hidden"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-20">
            <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Why Ajman"
                title="A Practical Environment for Founder-Led Growth"
                description="Ajman can be considered by entrepreneurs and growing businesses seeking a UAE Mainland base. Its suitability depends on the proposed activity, operating model, premises and authority requirements."
                headingId="why-ajman-mainland-title"
              />
              <p className="mt-7 rounded-2xl border border-deep-green/10 bg-[#EEF3EC] p-5 text-sm leading-7 text-deep-green/80">
                The decision should begin with how the company will operate, not a
                general assumption about cost, speed or approval. Each setup needs
                an activity-specific review.
              </p>
            </ScrollReveal>

            <div className="overflow-hidden rounded-[2rem] border border-deep-green/10 bg-deep-green px-5 text-white shadow-soft sm:px-8">
              <div className="border-b border-white/12 py-7 sm:py-8">
                <p className="type-label text-brand-lime">Business Environment</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  Plan Around How the Company Will Work
                </h3>
              </div>
              {businessStages.map((stage, index) => (
                <ScrollReveal
                  key={stage.label}
                  delay={index * 0.055}
                  className="grid gap-4 border-b border-white/12 py-7 last:border-0 sm:grid-cols-[3.25rem_0.58fr_1.42fr] sm:items-start sm:gap-6 sm:py-8"
                >
                  <span className="text-xs font-extrabold tracking-[0.14em] text-brand-lime">
                    {stage.number}
                  </span>
                  <div>
                    <p className="type-label text-white/54">{stage.label}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-white/66">
                    {stage.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <EmirateBenefits
        eyebrow="Key Advantages"
        title="What to Evaluate in an Ajman Mainland Setup"
        description="These practical characteristics can be useful when they align with the company's licensed activities and real operating requirements."
        benefits={ajmanAdvantages}
        variant="numbered"
        tone="light"
      />

      <Section
        background="deep-green"
        spacing="lg"
        aria-labelledby="ajman-business-types-title"
        className="overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-44 size-[32rem] rounded-full border border-brand-lime/10"
        />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Potential Business Fit"
                title="Business Types That May Consider Ajman"
                description="Ajman Mainland may be relevant to several founder-led and SME business models, provided the selected activity and operating arrangements are appropriate."
                inverse
                headingId="ajman-business-types-title"
              />
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={0.08}>
              <p className="max-w-2xl rounded-2xl border border-white/12 bg-white/[0.045] p-5 text-sm leading-7 text-white/66 lg:ml-auto">
                These categories are illustrative. Activity availability,
                combinations, premises and external approvals must be confirmed
                for the proposed business.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {ajmanSuitableBusinessTypes.map((businessType, index) => {
              const Icon = businessTypeIcons[index] ?? BriefcaseBusiness;

              return (
                <ScrollReveal
                  key={businessType.title}
                  delay={(index % 3) * 0.05}
                  className="h-full"
                >
                  <article
                    className={cn(
                      "flex h-full min-h-[14rem] flex-col rounded-card border p-6 sm:p-7",
                      index === 0
                        ? "border-brand-lime/24 bg-brand-lime/[0.09]"
                        : "border-white/10 bg-white/[0.045]",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-11 place-items-center rounded-2xl",
                        index === 0
                          ? "bg-brand-lime text-deep-green"
                          : "bg-white/8 text-brand-lime",
                      )}
                    >
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-auto pt-9 text-xl font-semibold text-white">
                      {businessType.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/64">
                      {businessType.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <FormationTimeline
        eyebrow="Formation Process"
        title="From Business Model to Ongoing Requirements"
        description="A clear formation sequence connects the intended activity with the structure, application, premises, approvals and compliance work that follows."
        steps={ajmanFormationProcess}
        variant="cards"
        tone="light"
      />
      <ServiceDisclaimer>
        Formation steps and approval requirements can vary depending on the
        activity, legal structure, applicant status, premises and relevant
        authorities.
      </ServiceDisclaimer>

      <DocumentChecklist
        title="Documents That May Support an Ajman Mainland Application"
        description="An organised review of applicant, activity and company information helps establish the relevant document pathway."
        items={ajmanDocuments}
        note={ajmanDocumentsNote}
        tone="dark"
        variant="compact"
      />

      <Section
        background="soft-gradient"
        spacing="lg"
        aria-labelledby="dgns-ajman-support-title"
      >
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <ScrollReveal className="h-full">
              <div className="flex h-full min-h-[30rem] flex-col rounded-[2rem] bg-charcoal p-7 text-white shadow-soft sm:p-9 lg:p-10">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-lime text-deep-green">
                  <Rocket aria-hidden="true" className="size-5" />
                </span>
                <p className="mt-10 type-label text-brand-lime">DGNS Support</p>
                <h2
                  id="dgns-ajman-support-title"
                  className="mt-4 text-[clamp(2rem,3.8vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-balance"
                >
                  Practical Guidance for the Business You Plan to Build
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                  DGNS Advisors helps keep formation decisions connected with the
                  documentation and recurring financial work an operating company
                  may need next.
                </p>
                <WhatsAppCTA
                  label="Discuss Ajman Setup"
                  message={ajmanMessage}
                  variant="primary"
                  className="mt-auto w-full sm:w-auto"
                />
              </div>
            </ScrollReveal>

            <div className="rounded-[2rem] border border-deep-green/10 bg-white px-6 shadow-soft sm:px-8 lg:px-10">
              {dgnsSupport.map((item, index) => {
                const Icon = item.icon;

                return (
                  <ScrollReveal
                    key={item.title}
                    delay={index * 0.05}
                    className="grid gap-4 border-b border-deep-green/12 py-7 last:border-0 sm:grid-cols-[3.25rem_0.72fr_1.28fr] sm:items-start sm:gap-6 sm:py-8"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-deep-green text-brand-lime">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <div>
                      <span className="text-xs font-extrabold tracking-[0.14em] text-emerald">
                        {item.number}
                      </span>
                      <h3 className="mt-2 font-semibold text-deep-green">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <nav
            aria-label="Related business setup paths"
            className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap"
          >
            {internalPathways.map((pathway) => (
              <Link
                key={pathway.to}
                to={pathway.to}
                className="inline-flex min-h-12 items-center justify-between gap-3 rounded-full border border-deep-green/12 bg-white px-5 py-2.5 text-sm font-semibold text-deep-green transition-[color,border-color,background-color] hover:border-deep-green hover:bg-deep-green hover:text-white sm:justify-center"
              >
                {pathway.label}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            ))}
          </nav>
        </Container>
      </Section>

      <AfterSetupServices items={recurringServicesAfterSetup} />

      <ServiceFAQSection
        items={ajmanFaqs}
        title="Ajman Mainland Questions"
        description="General guidance for founders and growing businesses considering activities, premises, documents and ongoing support in Ajman."
      />

      <ServiceFinalCTA
        title="Discuss Your Ajman Business Setup"
        description="Tell us about your planned activity and operating requirements, and our team can help you understand the relevant Ajman Mainland setup considerations."
        label="Get Free Consultation"
        message={ajmanMessage}
      />
    </>
  );
}
