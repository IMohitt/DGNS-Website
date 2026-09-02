import {
  Building2,
  CheckCircle2,
  Compass,
  FileCheck2,
  Files,
  Landmark,
  ListChecks,
  Network,
  PanelsTopLeft,
  Scale,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

import businessSetupImage1000 from "../../assets/images/services/business-setup-1000.jpg";
import businessSetupImage640 from "../../assets/images/services/business-setup-640.jpg";
import businessSetupImage from "../../assets/images/services/business-setup.jpg";
import { Container } from "../../components/common/Container";
import { LegalDisclaimer } from "../../components/common/LegalDisclaimer";
import { PageMeta } from "../../components/common/PageMeta";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import {
  RelatedServices,
  ServiceFAQSection,
  ServiceFinalCTA,
  ServiceHero,
  ServiceProcess,
} from "../../components/services";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import {
  businessSetupBenefits,
  businessSetupComparison,
  businessSetupFaqs,
  businessSetupProcess,
  businessSetupServices,
  relatedServices,
} from "../../data/services";
import { cn } from "../../utils/cn";

const pageTitle = "UAE Business Setup & Company Formation | DGNS Advisors";
const pageDescription =
  "DGNS Advisors supports UAE Mainland and Free Zone company formation, business activity selection, licensing and company documentation.";

const consultationMessage =
  "Hello DGNS Advisors, I would like guidance regarding setting up a company in the UAE.";
const comparisonMessage =
  "Hello DGNS Advisors, I need help choosing between Mainland and Free Zone company formation.";

const serviceIcons: readonly LucideIcon[] = [
  Building2,
  Landmark,
  FileCheck2,
  Compass,
  Files,
];

const benefitDetails: readonly {
  description: string;
  icon: LucideIcon;
}[] = [
  {
    description:
      "Work through the setup sequence with the relevant decisions considered in a practical order.",
    icon: Waypoints,
  },
  {
    description:
      "Understand the information and documents needed for the selected company formation path.",
    icon: FileCheck2,
  },
  {
    description:
      "Compare Mainland and Free Zone considerations against your intended way of operating.",
    icon: Scale,
  },
  {
    description:
      "Review activity options that reflect what the company is intended to do in practice.",
    icon: ListChecks,
  },
  {
    description:
      "Connect the new business with bookkeeping, VAT and corporate tax support where relevant.",
    icon: PanelsTopLeft,
  },
  {
    description:
      "Coordinate company formation and ongoing business support through one advisory relationship.",
    icon: Network,
  },
];

function getServiceCardClasses(index: number) {
  return cn(
    "group relative isolate flex min-h-[17rem] flex-col overflow-hidden rounded-[1.75rem] border p-6 shadow-soft sm:p-8",
    index === 0 &&
      "border-deep-green bg-deep-green text-white lg:col-span-7 lg:row-span-2 lg:min-h-[36rem]",
    index === 1 &&
      "border-deep-green/10 bg-[linear-gradient(145deg,#EAF6E0_0%,#F7F8F5_76%)] text-charcoal lg:col-span-5",
    index === 2 &&
      "border-deep-green/10 bg-white text-charcoal lg:col-span-5",
    index === 3 &&
      "border-deep-green/10 bg-white text-charcoal lg:col-span-6",
    index === 4 &&
      "border-deep-green/10 bg-[linear-gradient(145deg,#F7F8F5_0%,#EFF4ED_100%)] text-charcoal lg:col-span-6",
  );
}

export function BusinessSetupServicePage() {
  return (
    <>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/services/business-setup"
      />

      <ServiceHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Business Setup" },
        ]}
        eyebrow="UAE COMPANY FORMATION"
        title="Start Your UAE Business With the Right Structure"
        description="From selecting the right jurisdiction and business activity to licensing and documentation, DGNS Advisors supports entrepreneurs throughout the company formation process."
        ctaLabel="Discuss My Business Setup"
        ctaMessage={consultationMessage}
        image={businessSetupImage}
        imageSrcSet={`${businessSetupImage640} 640w, ${businessSetupImage1000} 1000w, ${businessSetupImage} 1500w`}
        imageSizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), 46vw"
        imageWidth={1500}
        imageHeight={1000}
        imageAlt="Contemporary Dubai business architecture with company formation documents on a stone desk"
        imagePosition="center"
        highlights={[
          "Mainland & Free Zone guidance",
          "Licensing & documentation support",
        ]}
        tone="deep"
      />

      <Section
        background="off-white"
        spacing="lg"
        aria-labelledby="business-setup-services-title"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Company Formation Support"
                title="Choose a Setup That Fits the Business You Plan to Build"
                headingId="business-setup-services-title"
              />
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={0.08}>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Jurisdiction, licensed activity and documentation shape how a new
                company can operate. DGNS Advisors helps you review those practical
                considerations before moving through registration and licensing.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-fr">
            {businessSetupServices.map((service, index) => {
              const Icon = serviceIcons[index] ?? Building2;
              const inverse = index === 0;

              return (
                <ScrollReveal
                  key={service.title}
                  delay={(index % 3) * 0.06}
                  className={cn(
                    index === 0 && "lg:col-span-7 lg:row-span-2",
                    index === 1 && "lg:col-span-5",
                    index === 2 && "lg:col-span-5",
                    index === 3 && "lg:col-span-6",
                    index === 4 && "lg:col-span-6",
                  )}
                >
                  <article className={getServiceCardClasses(index)}>
                    <div
                      aria-hidden="true"
                      className={cn(
                        "absolute -right-16 -top-16 size-48 rounded-full border transition-transform duration-500 group-hover:scale-110",
                        inverse
                          ? "border-brand-lime/14"
                          : "border-deep-green/8",
                      )}
                    />
                    <div
                      className={cn(
                        "grid size-12 place-items-center rounded-2xl",
                        inverse
                          ? "bg-brand-lime text-deep-green"
                          : "bg-deep-green text-brand-lime",
                      )}
                    >
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                    </div>
                    <div
                      className={cn(
                        "relative flex flex-1 flex-col",
                        index === 0 && "justify-end",
                      )}
                    >
                      <p
                        className={cn(
                          "mt-10 text-xs font-extrabold tracking-[0.15em] uppercase",
                          inverse ? "text-brand-lime" : "text-emerald",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3
                        className={cn(
                          "mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-[1.7rem]",
                          inverse ? "text-white" : "text-deep-green",
                          index === 0 && "lg:text-4xl",
                        )}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-4 max-w-xl text-sm leading-7 sm:text-base",
                          inverse ? "text-white/65" : "text-muted",
                        )}
                      >
                        {service.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section
        background="charcoal"
        spacing="lg"
        className="overflow-hidden"
        aria-labelledby="setup-comparison-title"
      >
        <div
          aria-hidden="true"
          className="absolute -left-44 top-28 size-[28rem] rounded-full border border-brand-lime/8"
        />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Mainland or Free Zone"
                title="Compare the Two Common Setup Paths"
                description="The right structure starts with how and where you intend to operate. Use this comparison as a practical starting point."
                inverse
                headingId="setup-comparison-title"
              />
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={0.08}>
              <p className="max-w-2xl text-sm leading-7 text-white/58 lg:ml-auto lg:text-base">
                These are general considerations. The selected jurisdiction,
                activity and regulatory framework determine the requirements that
                apply to an individual business.
              </p>
            </ScrollReveal>
          </div>

          <div
            role="table"
            aria-label="Mainland and Free Zone company formation comparison"
            className="mt-12 overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.035]"
          >
            <div
              role="row"
              className="hidden grid-cols-[0.72fr_1fr_1fr] border-b border-white/12 bg-white/[0.055] md:grid"
            >
              <div
                role="columnheader"
                id="comparison-consideration"
                className="p-5 lg:p-6"
              >
                <span className="type-label text-white/62">Consideration</span>
              </div>
              <div
                role="columnheader"
                id="comparison-mainland"
                className="border-l border-white/12 p-5 lg:p-6"
              >
                <span className="text-lg font-semibold text-white">Mainland</span>
              </div>
              <div
                role="columnheader"
                id="comparison-free-zone"
                className="border-l border-white/12 p-5 lg:p-6"
              >
                <span className="text-lg font-semibold text-brand-lime">Free Zone</span>
              </div>
            </div>

            <div role="rowgroup" className="divide-y divide-white/10">
              {businessSetupComparison.map((row, index) => (
                <ScrollReveal
                  key={row.label}
                  role="row"
                  variant="fade"
                  delay={(index % 4) * 0.035}
                  className="grid gap-5 p-5 md:grid-cols-[0.72fr_1fr_1fr] md:gap-0 md:p-0"
                >
                  <div
                    role="rowheader"
                    id={`comparison-row-${index}`}
                    className="md:p-5 lg:p-6"
                  >
                    <p className="text-sm font-semibold text-white">{row.label}</p>
                  </div>
                  <div
                    role="cell"
                    aria-labelledby={`comparison-row-${index} comparison-mainland`}
                    className="border-white/10 md:border-l md:p-5 lg:p-6"
                  >
                    <p className="mb-1 text-[0.68rem] font-extrabold tracking-[0.14em] text-white/62 uppercase md:hidden">
                      Mainland
                    </p>
                    <p className="text-sm leading-6 text-white/62">{row.mainland}</p>
                  </div>
                  <div
                    role="cell"
                    aria-labelledby={`comparison-row-${index} comparison-free-zone`}
                    className="border-white/10 md:border-l md:p-5 lg:p-6"
                  >
                    <p className="mb-1 text-[0.68rem] font-extrabold tracking-[0.14em] text-brand-lime uppercase md:hidden">
                      Free Zone
                    </p>
                    <p className="text-sm leading-6 text-white/62">{row.freeZone}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal className="mt-6 rounded-[1.5rem] border border-brand-lime/16 bg-brand-lime/[0.07] p-5 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-7">
            <p className="max-w-4xl text-sm leading-7 text-white/68">
              Requirements and benefits can vary depending on jurisdiction,
              business activity and regulatory conditions. DGNS Advisors can review
              your specific requirements.
            </p>
            <WhatsAppCTA
              label="Help Me Choose"
              message={comparisonMessage}
              variant="primary"
              className="mt-5 w-full sm:mt-0 sm:w-auto"
            />
          </ScrollReveal>
        </Container>
      </Section>

      <ServiceProcess
        eyebrow="Formation Journey"
        title="From Idea to Company Formation"
        description="A structured sequence helps connect the business concept with the appropriate activity, jurisdiction, documentation and ongoing support."
        steps={businessSetupProcess}
        tone="light"
        variant="timeline"
      />

      <Section
        background="soft-gradient"
        spacing="lg"
        aria-labelledby="setup-benefits-title"
      >
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why Work With DGNS"
              title="Practical Support Before and After Formation"
              description="Company formation involves connected decisions. Our role is to help organize those decisions and coordinate the supporting work around them."
              headingId="setup-benefits-title"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessSetupBenefits.map((title, index) => {
              const detail = benefitDetails[index];
              const Icon = detail?.icon ?? CheckCircle2;

              return (
                <ScrollReveal key={title} delay={(index % 3) * 0.05}>
                  <article className="h-full rounded-card border border-deep-green/10 bg-white/86 p-6 shadow-soft backdrop-blur-sm sm:p-7">
                    <div className="grid size-11 place-items-center rounded-2xl bg-deep-green text-brand-lime">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-7 text-xl font-semibold text-deep-green">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {detail?.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <LegalDisclaimer title="General company formation information">
        Company formation content is general information, not individualized legal,
        tax or regulatory advice. Activities, approvals, documents, timelines and
        costs depend on the chosen jurisdiction, company structure and current
        authority requirements. Confirm the relevant details through an individual
        review before applying.
      </LegalDisclaimer>

      <RelatedServices items={relatedServices.businessSetup} />

      <ServiceFAQSection
        items={businessSetupFaqs}
        title="Questions About UAE Company Formation"
        description="General answers to common questions about choosing a setup path, licensing, documentation and support after incorporation."
      />

      <ServiceFinalCTA
        title="Ready to Start Your UAE Business?"
        description="Tell us about your intended activity and how you plan to operate. DGNS Advisors can help you review the setup considerations relevant to your requirements."
        label="Discuss My Business Setup"
        message={consultationMessage}
      />
    </>
  );
}
