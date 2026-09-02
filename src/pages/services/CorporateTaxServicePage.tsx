import {
  BadgeCheck,
  FileCheck2,
  Landmark,
  ReceiptText,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import corporateTaxImage1000 from "../../assets/images/services/corporate-tax-1000.jpg";
import corporateTaxImage640 from "../../assets/images/services/corporate-tax-640.jpg";
import corporateTaxImage from "../../assets/images/services/corporate-tax.jpg";
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
import {
  corporateTaxFaqs,
  corporateTaxProcess,
  corporateTaxServices,
  relatedServices,
  taxRecordPillars,
} from "../../data/services";

const corporateTaxMessage =
  "Hello DGNS Advisors, I would like assistance with UAE Corporate Tax.";

const corporateTaxIcons = [
  BadgeCheck,
  FileCheck2,
  ShieldCheck,
  Landmark,
  Search,
  ReceiptText,
] as const;

const taxRecordDetails = [
  "Keeps financial activity consistently organized across the relevant period.",
  "Helps distinguish the nature and business context of recorded transactions.",
  "Provides a structured view of performance, balances and the financial position.",
  "Supports the information behind recorded entries and tax preparation work.",
  "Makes recorded costs easier to review against the available business context.",
] as const;

export function CorporateTaxServicePage() {
  return (
    <>
      <PageMeta
        title="UAE Corporate Tax Services | DGNS Advisors"
        description="Get practical UAE corporate tax support from DGNS Advisors, including registration, return filing, financial record review and ongoing compliance guidance."
        canonicalPath="/services/corporate-tax"
      />

      <ServiceHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Corporate Tax" },
        ]}
        eyebrow="UAE CORPORATE TAX"
        title="Corporate Tax Compliance Made Clear"
        description="DGNS Advisors helps businesses understand and manage corporate tax registration, return filing, documentation and ongoing compliance responsibilities."
        ctaLabel="Talk to a Tax Advisor"
        ctaMessage={corporateTaxMessage}
        image={corporateTaxImage}
        imageSrcSet={`${corporateTaxImage640} 640w, ${corporateTaxImage1000} 1000w, ${corporateTaxImage} 1500w`}
        imageWidth={1500}
        imageHeight={1000}
        imageAlt="Blank financial records and an unmarked calculator in a dark executive office"
        imagePosition="center"
        highlights={[
          "Registration and filing support",
          "Financial record review",
          "Ongoing compliance guidance",
        ]}
        tone="charcoal"
        mediaSide="left"
      />

      <Section
        background="off-white"
        spacing="md"
        aria-labelledby="corporate-tax-overview-title"
      >
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Understand the Requirement"
              title="Clear Compliance Begins With the Full Business Picture"
              description="Corporate tax work connects company activities, registration status, accounting information and supporting documents. Reviewing them together creates a clearer basis for each next step."
              headingId="corporate-tax-overview-title"
            />
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={0.08}>
            <div className="rounded-[2rem] bg-deep-green p-7 text-white shadow-[0_24px_64px_-32px_rgba(5,26,22,0.62)] sm:p-9">
              <p className="type-label text-brand-lime">Working Sequence</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Register", "Review", "Prepare"].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-5"
                  >
                    <span className="text-xs font-bold text-brand-lime/75">
                      0{index + 1}
                    </span>
                    <p className="mt-7 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/62">
                The appropriate sequence can vary with the company, its records and its current compliance position.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <Section
        background="deep-green"
        spacing="lg"
        aria-labelledby="corporate-tax-services-title"
        className="overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute -left-52 top-1/2 size-[34rem] -translate-y-1/2 rounded-full border border-brand-lime/10"
        />
        <Container className="relative grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Corporate Tax Services"
              title="Coordinated Support for Each Compliance Stage"
              description="Focused assistance with registration, financial information, preparation and recurring corporate tax responsibilities."
              headingId="corporate-tax-services-title"
              inverse
            />
          </ScrollReveal>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {corporateTaxServices.map((service, index) => {
              const Icon = corporateTaxIcons[index];

              return (
                <ScrollReveal
                  key={service.title}
                  delay={(index % 2) * 0.05}
                  className="h-full bg-deep-green"
                >
                  <article className="group flex h-full min-h-[16rem] flex-col bg-white/[0.035] p-6 transition-colors hover:bg-white/[0.065] sm:p-8">
                    <div className="flex items-center justify-between gap-5">
                      <span className="grid size-11 place-items-center rounded-xl border border-white/12 text-brand-lime">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="text-xs font-bold tracking-[0.14em] text-white/58">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-auto pt-9">
                      <h3 className="text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/58">
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
        background="white"
        spacing="lg"
        aria-labelledby="tax-records-title"
      >
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Records & Readiness"
              title="Good Records Make Tax Compliance Easier"
              description="Consistent accounting information can make registration reviews, calculations, return preparation and supporting-document checks more straightforward."
              headingId="tax-records-title"
            />
            <Link
              to="/services/accounting-bookkeeping"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-deep-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald"
            >
              Accounting &amp; Bookkeeping Services
              <span aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>

          <div className="border-t border-deep-green/12">
            {taxRecordPillars.map((pillar, index) => (
              <ScrollReveal
                key={pillar}
                delay={(index % 3) * 0.04}
                className="grid gap-3 border-b border-deep-green/12 py-6 sm:grid-cols-[3.25rem_0.72fr_1.28fr] sm:items-start sm:gap-5"
              >
                <span className="text-xs font-extrabold tracking-[0.14em] text-emerald">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-deep-green">{pillar}</h3>
                <p className="text-sm leading-7 text-muted">
                  {taxRecordDetails[index]}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <ServiceProcess
        eyebrow="Our Process"
        title="A Structured Approach to Corporate Tax"
        description="A practical review sequence built around the available company information, financial records and relevant filing work."
        steps={corporateTaxProcess}
        tone="dark"
        variant="compact"
      />

      <LegalDisclaimer title="General Corporate Tax information">
        Website content is general information and is not individualized tax or
        legal advice. Corporate Tax treatment and obligations can differ based on
        the company, activities, transactions, records and the UAE rules in force.
        Individual circumstances should be reviewed before tax decisions are made.
      </LegalDisclaimer>

      <RelatedServices items={relatedServices.corporateTax} />

      <ServiceFAQSection
        items={corporateTaxFaqs}
        title="Corporate Tax Questions, Explained"
        description="General answers about registration, return filing, financial records and expense reviews."
      />

      <ServiceFinalCTA
        title="Make Corporate Tax Compliance Easier"
        description="Share your current position and DGNS Advisors can help clarify the practical registration, record or filing support relevant to your business."
        label="Talk to a Tax Advisor"
        message={corporateTaxMessage}
      />
    </>
  );
}
