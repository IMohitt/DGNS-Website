import {
  ArrowUpRight,
  Compass,
  FileCheck2,
  Network,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";

import abuDhabiImage640 from "../../assets/images/home/location-abu-dhabi-640.jpg";
import abuDhabiImage from "../../assets/images/home/location-abu-dhabi.jpg";
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
import {
  abuDhabiBenefits,
  abuDhabiDocuments,
  abuDhabiDocumentsNote,
  abuDhabiFaqs,
  abuDhabiFormationProcess,
  abuDhabiIndustries,
  recurringServicesAfterSetup,
} from "../../data/businessSetup";

const pageTitle = "Abu Dhabi Mainland Company Formation | DGNS Advisors";
const pageDescription =
  "Explore Abu Dhabi business setup with practical support for Mainland company formation, activities, licensing, documents and ongoing UAE compliance.";

const heroMessage =
  "Hello DGNS Advisors, I would like guidance regarding Abu Dhabi Mainland company formation.";
const finalMessage =
  "Hello DGNS Advisors, I would like information regarding Abu Dhabi Mainland business setup.";

const strategicEnvironment = [
  {
    number: "01",
    title: "Capital-City Context",
    description:
      "A business environment shaped by government institutions, established enterprises and a developing private sector.",
  },
  {
    number: "02",
    title: "Connected Infrastructure",
    description:
      "Transport, logistics and digital infrastructure support business within the UAE and connections to other markets.",
  },
  {
    number: "03",
    title: "Cross-Sector Economy",
    description:
      "Companies can assess opportunities across energy, finance, technology, industry, healthcare and professional services.",
  },
] as const;

const supportStages = [
  {
    title: "Formation Planning",
    description:
      "Review the intended activity, ownership, location needs and company structure before applications begin.",
    icon: Compass,
  },
  {
    title: "Application Coordination",
    description:
      "Organise relevant documents and help coordinate licensing and additional approvals where applicable.",
    icon: FileCheck2,
  },
  {
    title: "Operating Readiness",
    description:
      "Plan appropriate financial records, tax reviews and ongoing business support after the company is licensed.",
    icon: Network,
  },
] as const;

const processNote =
  "Formation steps can vary depending on the activity, legal structure, premises, applicant status and regulatory approvals.";
const industriesNote =
  "Activity availability and approval requirements depend on the proposed business, licensing classification and relevant authorities.";

export function AbuDhabiMainlandPage() {
  return (
    <>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/business-setup/mainland/abu-dhabi"
      />
      <BusinessSetupSchema
        name="Abu Dhabi Mainland Company Formation"
        description={pageDescription}
        path="/business-setup/mainland/abu-dhabi"
        areaServed="Abu Dhabi, United Arab Emirates"
      />

      <BusinessSetupHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Business Setup", to: "/business-setup" },
          { label: "Mainland", to: "/business-setup/mainland" },
          { label: "Abu Dhabi" },
        ]}
        eyebrow="ABU DHABI MAINLAND"
        title="Company Formation in Abu Dhabi Mainland"
        description="Explore business opportunities in the UAE capital with structured support for company setup, licensing and ongoing business compliance."
        ctaLabel="Discuss Abu Dhabi Setup"
        ctaMessage={heroMessage}
        secondaryLabel="Mainland Overview"
        secondaryTo="/business-setup/mainland"
        image={abuDhabiImage}
        imageSrcSet={`${abuDhabiImage640} 640w, ${abuDhabiImage} 1100w`}
        imageSizes="(max-width: 1023px) calc(100vw - 2rem), 48vw"
        imageWidth={1100}
        imageHeight={733}
        imageAlt="Sophisticated government and contemporary architecture in Abu Dhabi"
        imagePosition="center 48%"
        highlights={[
          "Activity and structure guidance",
          "Licensing and document support",
          "Accounting and tax continuity",
        ]}
        tone="light"
        layout="image-left"
      />

      <Section
        background="deep-green"
        spacing="lg"
        aria-labelledby="why-abu-dhabi-title"
        className="overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute -right-44 -top-44 size-[30rem] rounded-full border border-brand-lime/10"
        />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
            <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Why Abu Dhabi"
                title="A Structured Setting for Serious Business Plans"
                description="Abu Dhabi combines the institutional character of the UAE capital with established commercial infrastructure and a broadening mix of industries. Mainland formation may suit businesses that need this environment and a wider UAE operating context."
                inverse
                headingId="why-abu-dhabi-title"
              />
              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
                The appropriate setup still depends on the real activity, customer
                market, premises, legal structure and any sector approvals. Those
                factors should be reviewed together before formation begins.
              </p>
            </ScrollReveal>

            <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.035]">
              <div className="border-b border-white/12 px-6 py-5 sm:px-8">
                <p className="type-label text-brand-lime">
                  Strategic Business Environment
                </p>
              </div>
              {strategicEnvironment.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  variant="fade"
                  delay={index * 0.05}
                  className="grid gap-4 border-b border-white/12 p-6 last:border-b-0 sm:grid-cols-[4rem_0.8fr_1.2fr] sm:items-start sm:p-8"
                >
                  <span className="text-xs font-extrabold tracking-[0.14em] text-brand-lime">
                    {item.number}
                  </span>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-7 text-white/66">
                    {item.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <EmirateBenefits
        eyebrow="Key Industries"
        title="Sectors Across an Evolving Capital Economy"
        description="Representative industries help frame the opportunities available in Abu Dhabi. Each proposed activity must still be reviewed against the relevant licensing and sector requirements."
        benefits={abuDhabiIndustries}
        variant="numbered"
        tone="light"
      />
      <ServiceDisclaimer>{industriesNote}</ServiceDisclaimer>

      <EmirateBenefits
        eyebrow="Mainland Benefits"
        title="Why Businesses Consider Abu Dhabi Mainland"
        description="Practical characteristics to assess against your company's operating plan rather than universal outcomes."
        benefits={abuDhabiBenefits}
        variant="rail"
        tone="dark"
      />

      <FormationTimeline
        eyebrow="Formation Process"
        title="A Coordinated Route to Abu Dhabi Licensing"
        description="Move from the first business review through activity selection, documentation, approvals and post-formation compliance planning."
        steps={abuDhabiFormationProcess}
        tone="light"
        variant="cards"
      />
      <ServiceDisclaimer>{processNote}</ServiceDisclaimer>

      <DocumentChecklist
        title="Information and Documents to Prepare"
        description="An early review can identify the applicant, ownership, premises and activity information relevant to the proposed company."
        items={abuDhabiDocuments}
        note={abuDhabiDocumentsNote}
        tone="light"
        variant="split"
      />

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="abu-dhabi-dgns-support-title"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
            <ScrollReveal>
              <SectionHeading
                eyebrow="DGNS Support"
                title="One Advisory Thread From Setup to Operations"
                description="DGNS Advisors helps keep early formation decisions connected with documents, licensing and the ongoing financial work of an operating UAE company."
                headingId="abu-dhabi-dgns-support-title"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/business-setup/mainland"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-deep-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald"
                >
                  Mainland Overview
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  to="/business-setup/free-zone"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-emerald px-6 py-3 text-sm font-semibold text-emerald transition-colors hover:bg-emerald hover:text-white"
                >
                  Compare Free Zones
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {supportStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <ScrollReveal
                    key={stage.title}
                    delay={index * 0.05}
                    className="h-full"
                  >
                    <article className="flex h-full min-h-[17rem] flex-col rounded-card border border-deep-green/10 bg-off-white p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-4">
                        <span className="grid size-11 place-items-center rounded-2xl bg-deep-green text-brand-lime">
                          <Icon aria-hidden="true" className="size-5" />
                        </span>
                        <span className="text-xs font-extrabold tracking-[0.14em] text-emerald">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-auto pt-9 text-xl font-semibold text-deep-green">
                        {stage.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {stage.description}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal className="mt-12">
            <aside className="grid gap-6 rounded-[1.75rem] border border-deep-green/10 bg-[linear-gradient(135deg,#EEF4EA_0%,#FFFFFF_72%)] p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-deep-green text-brand-lime">
                <Waypoints aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-deep-green">
                  Requirements should be confirmed for the proposed company.
                </h3>
                <p className="mt-2 max-w-4xl text-sm leading-7 text-muted">
                  Licensing, activity, premises and approval requirements can change
                  with the structure and circumstances of each application.
                </p>
              </div>
            </aside>
          </ScrollReveal>
        </Container>
      </Section>

      <AfterSetupServices items={recurringServicesAfterSetup} />

      <ServiceFAQSection
        items={abuDhabiFaqs}
        title="Abu Dhabi Mainland Questions, Explained"
        description="General answers about activity selection, additional approvals, documents and support after formation."
      />

      <ServiceFinalCTA
        title="Explore Your Abu Dhabi Business Setup"
        description="Tell us about your planned activity, ownership and operating needs, and our team can help you understand the relevant Abu Dhabi Mainland setup options."
        label="Discuss Abu Dhabi Setup"
        message={finalMessage}
      />
    </>
  );
}
