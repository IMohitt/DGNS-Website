import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Factory,
  FileCheck2,
  Network,
  Route,
  Ship,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";

import sharjahImage640 from "../../assets/images/home/location-sharjah-640.jpg";
import sharjahImage from "../../assets/images/home/location-sharjah.jpg";
import {
  AfterSetupServices,
  BusinessSetupHero,
  BusinessSetupSchema,
  DocumentChecklist,
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
  recurringServicesAfterSetup,
  sharjahDocuments,
  sharjahDocumentsNote,
  sharjahFaqs,
  sharjahFormationProcess,
  sharjahIndustries,
  sharjahOpportunities,
} from "../../data/businessSetup";

const pageTitle = "Sharjah Mainland Business Setup | DGNS Advisors";
const pageDescription =
  "Plan a Sharjah Mainland business setup with guidance on trading, industrial and professional activities, licensing, documentation and ongoing compliance.";
const sharjahMessage =
  "Hello DGNS Advisors, I would like information about Sharjah Mainland company formation.";

const opportunityIcons = [Ship, Factory, Store, BriefcaseBusiness] as const;

const supportSteps = [
  {
    title: "Clarify the Operating Plan",
    description:
      "Review the intended activities, target market, premises and practical operating model before an application begins.",
    icon: Route,
  },
  {
    title: "Coordinate the Formation",
    description:
      "Support activity selection, company information, documents and relevant licensing or external-approval steps.",
    icon: FileCheck2,
  },
  {
    title: "Connect Ongoing Support",
    description:
      "Prepare the new business for organised records, tax reviews and advisory requirements after licensing.",
    icon: Network,
  },
] as const;

export function SharjahMainlandPage() {
  return (
    <>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/business-setup/mainland/sharjah"
      />
      <BusinessSetupSchema
        name="Sharjah Mainland Business Setup"
        description={pageDescription}
        path="/business-setup/mainland/sharjah"
        areaServed="Sharjah, United Arab Emirates"
      />

      <BusinessSetupHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Business Setup", to: "/business-setup" },
          { label: "Mainland", to: "/business-setup/mainland" },
          { label: "Sharjah" },
        ]}
        eyebrow="SHARJAH MAINLAND"
        title="Business Setup in Sharjah Mainland"
        description="A strategic UAE business environment for trading, manufacturing, professional services and growing enterprises."
        ctaLabel="Discuss Sharjah Setup"
        ctaMessage={sharjahMessage}
        secondaryLabel="View Mainland Overview"
        secondaryTo="/business-setup/mainland"
        image={sharjahImage}
        imageSrcSet={`${sharjahImage640} 640w, ${sharjahImage} 1100w`}
        imageWidth={1100}
        imageHeight={733}
        imageAlt="Sharjah architecture illustrating its connected trading and business environment"
        imagePosition="47% center"
        highlights={[
          "Trading and industrial context",
          "Activity, documentation and compliance guidance",
        ]}
        layout="split"
        tone="deep"
      />

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="why-sharjah-title"
        className="overflow-hidden"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Why Sharjah"
                title="A Business Environment Shaped by Trade, Making and Service"
                description="Sharjah combines access to neighbouring Emirates with an established commercial and industrial base. That makes it a useful jurisdiction to evaluate for businesses whose operating plans rely on distribution, production or local service delivery."
                headingId="why-sharjah-title"
              />
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                The final structure should follow the proposed activity, facility needs,
                customer market and any sector approvals. DGNS Advisors helps connect
                those decisions before the licensing process begins.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.08}>
              <div className="relative grid gap-3 rounded-[2rem] bg-deep-green p-5 text-white shadow-[0_28px_70px_-34px_rgba(5,26,22,0.62)] sm:p-7">
                <div aria-hidden="true" className="absolute -right-14 -top-14 size-44 rounded-full border border-brand-lime/18" />
                {[
                  ["01", "Trade", "Routes, products and customer markets"],
                  ["02", "Make", "Facilities, production and approvals"],
                  ["03", "Serve", "Professional expertise and local demand"],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="relative grid gap-3 rounded-card border border-white/10 bg-white/[0.045] p-5 sm:grid-cols-[3.25rem_0.55fr_1fr] sm:items-center sm:gap-5"
                  >
                    <span className="text-xs font-extrabold tracking-[0.14em] text-brand-lime">
                      {number}
                    </span>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm leading-6 text-white/62">{description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <Section
        background="deep-green"
        spacing="lg"
        aria-labelledby="sharjah-opportunities-title"
      >
        <Container>
          <SectionHeading
            eyebrow="Strategic Location & Opportunity"
            title="Four Practical Themes to Assess"
            description="Sharjah's commercial setting can support different operating models, provided the selected licence, facilities and approvals match the business."
            inverse
            headingId="sharjah-opportunities-title"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {sharjahOpportunities.map((opportunity, index) => {
              const Icon = opportunityIcons[index];

              return (
                <ScrollReveal
                  key={opportunity.title}
                  delay={index * 0.05}
                  className="h-full bg-deep-green"
                >
                  <article className="flex h-full min-h-[16rem] flex-col p-6 sm:p-7">
                    <span className="grid size-11 place-items-center rounded-2xl bg-brand-lime text-deep-green">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-auto pt-10 text-xl font-semibold text-white">
                      {opportunity.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/64">
                      {opportunity.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section
        background="off-white"
        spacing="lg"
        aria-labelledby="sharjah-industries-title"
      >
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Industries & Activities"
              title="An Activity Mix With Commercial and Industrial Depth"
              description="These representative categories are a starting point. Exact activities and any additional approvals must be confirmed with the relevant authorities."
              headingId="sharjah-industries-title"
            />
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {sharjahIndustries.map((industry, index) => (
              <ScrollReveal
                key={industry.title}
                delay={(index % 4) * 0.04}
                className="h-full"
              >
                <article className="group flex h-full min-h-[12rem] flex-col rounded-card border border-deep-green/10 bg-white p-6 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-extrabold tracking-[0.14em] text-emerald">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-12 bg-soft-green/60 transition-[width] group-hover:w-18" />
                  </div>
                  <h3 className="mt-auto pt-7 text-lg font-semibold text-deep-green">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {industry.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <FormationTimeline
        eyebrow="Sharjah Formation Process"
        title="Move From Operating Plan to an Organised Business Setup"
        description="A deliberate formation sequence keeps the activity, structure, premises, documents and compliance plan connected."
        steps={sharjahFormationProcess}
        variant="rail"
      />

      <ServiceDisclaimer>
        Some activities require additional premises, technical, environmental or sector approvals. Requirements should be confirmed for the proposed business before formation.
      </ServiceDisclaimer>

      <DocumentChecklist
        title="Documents That May Be Required in Sharjah"
        description="The initial review connects applicant details with the intended activity, structure and location."
        items={sharjahDocuments}
        note={sharjahDocumentsNote}
        variant="split"
        tone="dark"
      />

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="sharjah-support-title"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
            <ScrollReveal>
              <SectionHeading
                eyebrow="DGNS Support"
                title="Keep Each Formation Decision Connected"
                description="DGNS Advisors brings activity, licensing, documentation and post-setup requirements into one practical conversation."
                headingId="sharjah-support-title"
              />
              <WhatsAppCTA
                label="Discuss Sharjah Setup"
                message={sharjahMessage}
                variant="dark"
                className="mt-8 w-full sm:w-auto"
              />
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {supportSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <ScrollReveal key={step.title} delay={index * 0.05} className="h-full">
                    <article className="flex h-full min-h-[17rem] flex-col rounded-card border border-deep-green/10 bg-off-white p-6">
                      <span className="grid size-10 place-items-center rounded-xl bg-deep-green text-brand-lime">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <h3 className="mt-auto pt-9 text-lg font-semibold text-deep-green">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {step.description}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal className="mt-10">
            <div className="flex flex-col gap-5 rounded-card border border-deep-green/10 bg-[linear-gradient(110deg,#F2F7EB_0%,#FFFFFF_72%)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-deep-green text-brand-lime">
                  <Building2 aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-deep-green">
                    Compare another UAE formation route
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Review Mainland emirates or compare the operating context with a UAE Free Zone.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-bold text-emerald">
                <Link className="inline-flex items-center gap-2" to="/business-setup/mainland">
                  Mainland overview <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
                <Link className="inline-flex items-center gap-2" to="/business-setup/free-zone">
                  Free Zone overview <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <AfterSetupServices items={recurringServicesAfterSetup} />
      <ServiceFAQSection
        items={sharjahFaqs}
        title="Sharjah Mainland Questions"
        description="Practical starting points for activities, facilities, documents and ongoing compliance support."
      />
      <ServiceFinalCTA
        title="Start Planning Your Sharjah Business"
        description="Tell us about your planned activity and operating requirements so our team can help you review the appropriate Sharjah Mainland setup path."
        label="Discuss Sharjah Setup"
        message={sharjahMessage}
      />
    </>
  );
}
