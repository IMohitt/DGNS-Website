import {
  ClipboardCheck,
  FileCheck2,
  FileMinus2,
  FolderArchive,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

import vatImage1000 from "../../assets/images/services/vat-compliance-1000.jpg";
import vatImage640 from "../../assets/images/services/vat-compliance-640.jpg";
import vatImage from "../../assets/images/services/vat-compliance.jpg";
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
  relatedServices,
  vatFaqs,
  vatProcess,
  vatServices,
  vatSupportReasons,
} from "../../data/services";
import { cn } from "../../utils/cn";

const vatMessage =
  "Hello DGNS Advisors, I need assistance with UAE VAT services.";

const vatServiceIcons = [
  ClipboardCheck,
  FileCheck2,
  FileMinus2,
  ShieldCheck,
  MessageSquareText,
  FolderArchive,
] as const;

const vatCardSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-12",
] as const;

export function VATServicePage() {
  return (
    <>
      <PageMeta
        title="UAE VAT Registration & Filing Services | DGNS Advisors"
        description="Get practical UAE VAT support from DGNS Advisors, including registration, return filing, deregistration, records, compliance and advisory services."
        canonicalPath="/services/vat"
      />

      <ServiceHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "VAT Services" },
        ]}
        eyebrow="UAE VAT SERVICES"
        title="Keep Your VAT Obligations Organised"
        description="DGNS Advisors supports businesses with VAT registration, return filing, deregistration, documentation and ongoing VAT compliance."
        ctaLabel="Get VAT Guidance"
        ctaMessage={vatMessage}
        image={vatImage}
        imageSrcSet={`${vatImage640} 640w, ${vatImage1000} 1000w, ${vatImage} 1500w`}
        imageWidth={1500}
        imageHeight={1000}
        imageAlt="Blank VAT compliance folders and organized business records on a light office desk"
        imagePosition="center"
        highlights={[
          "Registration and deregistration support",
          "Return filing and record organization",
          "Ongoing business-focused guidance",
        ]}
        tone="sage"
      />

      <Section
        background="off-white"
        spacing="md"
        aria-labelledby="vat-overview-title"
      >
        <Container className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:gap-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Practical VAT Support"
              title="A Clearer Way to Manage Each VAT Responsibility"
              description="VAT work is easier to coordinate when registration status, filing information and supporting records are reviewed together."
              headingId="vat-overview-title"
            />
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.08}>
            <div className="grid overflow-hidden rounded-card border border-deep-green/10 bg-white shadow-soft sm:grid-cols-3">
              {[
                ["01", "Review", "Understand the current business and VAT position."],
                ["02", "Coordinate", "Organize information for the relevant next step."],
                ["03", "Maintain", "Keep filing records and documents structured."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="border-b border-deep-green/10 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <span className="text-xs font-extrabold tracking-[0.14em] text-emerald">
                    {number}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-deep-green">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="vat-services-title"
        className="overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute -right-40 top-20 size-96 rounded-full border border-soft-green/15"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="VAT Service Areas"
            title="Support From Registration to Ongoing Records"
            description="Choose focused support for a specific VAT requirement or coordinate several areas as your business needs evolve."
            headingId="vat-services-title"
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            {vatServices.map((service, index) => {
              const Icon = vatServiceIcons[index];
              const featured = index === 0 || index === 5;

              return (
                <ScrollReveal
                  key={service.title}
                  delay={(index % 3) * 0.05}
                  className={vatCardSpans[index]}
                >
                  <article
                    className={cn(
                      "group relative flex h-full min-h-[15rem] flex-col overflow-hidden rounded-card border p-6 transition-[transform,border-color] hover:-translate-y-1 sm:p-8",
                      featured
                        ? "border-deep-green/10 bg-[linear-gradient(140deg,#EEF5E9_0%,#FAFCF8_100%)]"
                        : "border-deep-green/10 bg-off-white",
                    )}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <span className="grid size-12 place-items-center rounded-2xl bg-deep-green text-brand-lime">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="text-xs font-bold tracking-[0.14em] text-deep-green/62">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-auto pt-10">
                      <h3 className="text-xl font-semibold text-deep-green sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
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

      <ServiceProcess
        eyebrow="Our Process"
        title="Our VAT Support Process"
        description="A structured sequence that keeps the available business information, documentation and recurring records connected."
        steps={vatProcess}
        variant="timeline"
      />

      <Section
        background="soft-gradient"
        spacing="lg"
        aria-labelledby="vat-support-reasons-title"
      >
        <Container className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="When to Review"
              title="When Might a Business Need VAT Support?"
              description="VAT support may become relevant at different stages depending on the circumstances. A review can help clarify the records or action that may be appropriate."
              headingId="vat-support-reasons-title"
            />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {vatSupportReasons.map((reason, index) => (
              <ScrollReveal
                key={reason}
                delay={(index % 2) * 0.05}
                className="h-full"
              >
                <article className="flex h-full min-h-[10.5rem] flex-col rounded-card border border-deep-green/10 bg-white p-6 shadow-soft">
                  <span className="grid size-9 place-items-center rounded-full bg-[#EEF5E9] text-xs font-extrabold text-deep-green">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-auto pt-7 font-semibold leading-7 text-deep-green">
                    {reason}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <LegalDisclaimer title="General VAT information">
        Website content is general information and is not individualized tax or
        legal advice. VAT registration, filing, deregistration and record-keeping
        requirements depend on each business and the UAE rules in force. DGNS
        Advisors can review your circumstances before you act.
      </LegalDisclaimer>

      <RelatedServices items={relatedServices.vat} />

      <ServiceFAQSection
        items={vatFaqs}
        title="UAE VAT Questions, Answered Clearly"
        description="General guidance on VAT registration, filing, deregistration and ongoing support."
      />

      <ServiceFinalCTA
        title="Need Help With UAE VAT?"
        description="Share your current VAT position and DGNS Advisors can help you review the registration, filing or record support relevant to your business."
        label="Get VAT Guidance"
        message={vatMessage}
      />
    </>
  );
}
