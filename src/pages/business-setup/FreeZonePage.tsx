import {
  Building2,
  Check,
  MapPinned,
  ScanSearch,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";

import businessSetupImage1000 from "../../assets/images/services/business-setup-1000.jpg";
import businessSetupImage640 from "../../assets/images/services/business-setup-640.jpg";
import businessSetupImage from "../../assets/images/services/business-setup.jpg";
import {
  AfterSetupServices,
  BusinessSetupHero,
  BusinessSetupSchema,
  EmirateBenefits,
  FormationTimeline,
} from "../../components/businessSetup";
import { Container } from "../../components/common/Container";
import { LegalDisclaimer } from "../../components/common/LegalDisclaimer";
import { PageMeta } from "../../components/common/PageMeta";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import {
  ServiceFAQSection,
  ServiceFinalCTA,
} from "../../components/services";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import {
  freeZoneAudienceNote,
  freeZoneAudiences,
  freeZoneBenefits,
  freeZoneEducationIntro,
  freeZoneEducationPoints,
  freeZoneFaqs,
  freeZoneFormationProcess,
  freeZoneOptions,
  freeZoneSelectionFactors,
  recurringServicesAfterSetup,
} from "../../data/businessSetup";
import { cn } from "../../utils/cn";

const pageDescription =
  "Compare UAE Free Zone company formation options by activity, location, facility, visa and operating requirements with practical guidance from DGNS Advisors.";

const heroMessage =
  "Hello DGNS Advisors, I would like guidance regarding UAE Free Zone company formation.";

const selectionMessage =
  "Hello DGNS Advisors, I would like help selecting a suitable UAE Free Zone for my business.";

const comparisonMessage =
  "Hello DGNS Advisors, I would like to compare Mainland and Free Zone options for my business.";

const finalMessage =
  "Hello DGNS Advisors, I would like help selecting and setting up a UAE Free Zone company.";

const optionIds = [
  "ifza",
  "abu-dhabi",
  "ras-al-khaimah",
  "sharjah",
  "ajman",
] as const;

const selectionIcons = [
  ScanSearch,
  Target,
  Building2,
  Users,
  WalletCards,
  MapPinned,
  TrendingUp,
  ShieldCheck,
] as const;

export function FreeZonePage() {
  return (
    <>
      <PageMeta
        title="UAE Free Zone Company Formation | DGNS Advisors"
        description={pageDescription}
        canonicalPath="/business-setup/free-zone"
      />
      <BusinessSetupSchema
        name="UAE Free Zone Company Formation Support"
        description={pageDescription}
        path="/business-setup/free-zone"
      />

      <BusinessSetupHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Business Setup", to: "/business-setup" },
          { label: "Free Zone" },
        ]}
        eyebrow="UAE FREE ZONES"
        title="Find the Right UAE Free Zone for Your Business"
        description="DGNS Advisors helps entrepreneurs compare Free Zone structures based on business activity, location, operational requirements and long-term goals."
        ctaLabel="Discuss My Free Zone Setup"
        ctaMessage={heroMessage}
        secondaryLabel="How We Compare Free Zones"
        secondaryHref="#free-zone-selection"
        image={businessSetupImage}
        imageSrcSet={`${businessSetupImage640} 640w, ${businessSetupImage1000} 1000w, ${businessSetupImage} 1500w`}
        imageWidth={1500}
        imageHeight={1000}
        imageAlt="Blank company formation documents in a contemporary UAE business setting"
        imagePosition="45% center"
        highlights={[
          "Activity-led comparison",
          "Multiple UAE locations",
          "Post-setup compliance planning",
        ]}
        tone="charcoal"
        layout="image-left"
      />

      <Section
        background="soft-gradient"
        spacing="lg"
        aria-labelledby="free-zone-education-title"
        className="overflow-hidden"
      >
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Free Zone Fundamentals"
              title="What Is a UAE Free Zone?"
              description={freeZoneEducationIntro}
              headingId="free-zone-education-title"
            />
            <p className="mt-8 rounded-2xl border border-deep-green/10 bg-white/72 p-5 text-sm leading-7 text-muted">
              The jurisdiction should be reviewed against the company&apos;s real
              activities and intended operating model before an application is
              made.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {freeZoneEducationPoints.map((point, index) => (
              <ScrollReveal
                key={point.title}
                delay={(index % 3) * 0.05}
                className={cn(
                  "h-full",
                  index === 0 && "lg:col-span-7",
                  index === 1 && "lg:col-span-5",
                  index > 1 && "lg:col-span-4",
                )}
              >
                <article className="flex h-full min-h-[15rem] flex-col rounded-card border border-deep-green/10 bg-white p-6 shadow-soft sm:p-7">
                  <span className="text-xs font-extrabold tracking-[0.14em] text-emerald">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-auto pt-10 text-xl font-semibold text-deep-green">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {point.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        background="deep-green"
        spacing="lg"
        aria-labelledby="free-zone-options-title"
        className="overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(155,232,61,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(155,232,61,0.055)_1px,transparent_1px)] [background-size:64px_64px]"
        />
        <Container className="relative grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Locations to Compare"
              title="Free Zone Options Across the UAE"
              description="These are useful starting points for comparison. The suitable authority and structure still depend on the activity, facility, market and regulatory requirements."
              inverse
              headingId="free-zone-options-title"
            />
            <nav
              aria-label="Jump to a Free Zone option"
              className="mt-8 flex flex-wrap gap-2"
            >
              {freeZoneOptions.map((option, index) => (
                <a
                  key={option.title}
                  href={`#${optionIds[index]}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-white/14 px-4 py-2 text-xs font-semibold text-white/74 transition-colors hover:border-brand-lime hover:text-brand-lime"
                >
                  {option.title}
                </a>
              ))}
            </nav>
          </ScrollReveal>

          <div className="border-t border-white/12">
            {freeZoneOptions.map((option, index) => (
              <ScrollReveal
                key={option.title}
                variant="fade"
                delay={(index % 3) * 0.04}
              >
                <article
                  id={optionIds[index]}
                  className="grid scroll-mt-28 gap-4 border-b border-white/12 py-7 sm:grid-cols-[3.5rem_0.72fr_1.28fr] sm:items-start sm:gap-6 sm:py-8"
                >
                  <span className="text-xs font-extrabold tracking-[0.14em] text-brand-lime">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="type-label text-white/54">{option.location}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                      {option.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-7 text-white/66">
                    {option.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        background="off-white"
        spacing="lg"
        aria-labelledby="free-zone-audiences-title"
      >
        <Container>
          <SectionHeading
            eyebrow="Potential Fit"
            title="Who May Consider Free Zone Setup?"
            description="Free Zone structures can support a range of founder-led, specialist and internationally oriented models when the jurisdiction fits the intended operations."
            headingId="free-zone-audiences-title"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {freeZoneAudiences.map((audience, index) => (
              <ScrollReveal
                key={audience.title}
                delay={(index % 4) * 0.045}
                className="h-full"
              >
                <article className="flex h-full min-h-[13.5rem] flex-col rounded-card border border-deep-green/10 bg-white p-6 shadow-soft">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-extrabold tracking-[0.14em] text-emerald">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="grid size-8 place-items-center rounded-full bg-brand-lime/20 text-deep-green">
                      <Check aria-hidden="true" className="size-4" strokeWidth={2.5} />
                    </span>
                  </div>
                  <h3 className="mt-auto pt-8 text-lg font-semibold text-deep-green">
                    {audience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {audience.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-7 max-w-3xl rounded-2xl border border-deep-green/10 bg-[#EEF3EC] px-5 py-4 text-sm font-semibold leading-7 text-deep-green/76">
            {freeZoneAudienceNote}
          </p>
        </Container>
      </Section>

      <EmirateBenefits
        eyebrow="Potential Advantages"
        title="Why Businesses Consider UAE Free Zones"
        description="The practical benefits differ between authorities, licence types and facilities. These are factors to assess, not universal outcomes."
        benefits={freeZoneBenefits}
        variant="numbered"
      />

      <Section
        id="free-zone-selection"
        background="charcoal"
        spacing="lg"
        aria-labelledby="free-zone-selection-title"
        className="scroll-mt-20 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute -right-64 top-12 size-[38rem] rounded-full bg-soft-green/8 blur-3xl"
        />
        <Container className="relative grid gap-14 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Selection Framework"
              title="How We Help You Choose a Free Zone"
              description="A useful comparison connects jurisdiction details with how the business expects to operate now and as it develops."
              inverse
              headingId="free-zone-selection-title"
            />
            <WhatsAppCTA
              label="Recommend a Free Zone"
              message={selectionMessage}
              variant="primary"
              className="mt-8 w-full sm:w-auto"
            />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {freeZoneSelectionFactors.map((factor, index) => {
              const Icon = selectionIcons[index];

              return (
                <ScrollReveal
                  key={factor.title}
                  delay={(index % 4) * 0.045}
                  className="h-full"
                >
                  <article className="group flex h-full min-h-[14.5rem] flex-col rounded-card border border-white/10 bg-white/[0.045] p-6 transition-colors hover:border-brand-lime/30 hover:bg-white/[0.065] sm:p-7">
                    <div className="flex items-center justify-between gap-5">
                      <span className="grid size-11 place-items-center rounded-xl border border-brand-lime/20 bg-brand-lime/10 text-brand-lime">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="text-xs font-extrabold tracking-[0.14em] text-white/54">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-auto pt-9 text-xl font-semibold text-white">
                      {factor.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">
                      {factor.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <FormationTimeline
        eyebrow="From Comparison to Compliance"
        title="Your UAE Free Zone Formation Journey"
        description="A structured process keeps the activity, jurisdiction, application and post-setup requirements connected."
        steps={freeZoneFormationProcess}
        variant="alternating"
      />

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="free-zone-mainland-title"
      >
        <Container>
          <ScrollReveal className="relative overflow-hidden rounded-[2rem] bg-deep-green p-6 text-white shadow-soft sm:p-9 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-28 -top-28 size-72 rounded-full border border-brand-lime/10"
            />
            <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16">
              <div>
                <p className="type-label text-brand-lime">Compare the Context</p>
                <h2
                  id="free-zone-mainland-title"
                  className="mt-5 text-[clamp(2.15rem,4vw,3.8rem)] font-semibold leading-[1.07] tracking-[-0.04em] text-balance"
                >
                  Mainland or Free Zone? The Right Choice Depends on Your
                  Business.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                  Consider the intended market, licensed activity, operating
                  location, facilities and future plans together before choosing
                  a jurisdiction.
                </p>
              </div>

              <div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    to="/business-setup/mainland"
                    className="rounded-card border border-white/12 bg-white/[0.045] p-5 transition-colors hover:border-brand-lime/34"
                  >
                    <span className="type-label text-brand-lime">Mainland</span>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      Commonly considered for broader local UAE operations,
                      within the company&apos;s licence and approvals.
                    </p>
                  </Link>
                  <Link
                    to="/business-setup"
                    className="rounded-card border border-brand-lime/24 bg-brand-lime/[0.07] p-5 transition-colors hover:border-brand-lime/50"
                  >
                    <span className="type-label text-brand-lime">Compare Paths</span>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      Review the full Mainland and Free Zone comparison on the
                      Business Setup hub.
                    </p>
                  </Link>
                </div>
                <WhatsAppCTA
                  label="Compare My Options"
                  message={comparisonMessage}
                  variant="primary"
                  className="mt-6 w-full sm:w-auto"
                />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <AfterSetupServices items={recurringServicesAfterSetup} />

      <LegalDisclaimer title="General Free Zone information">
        Free Zone eligibility, licence features, facilities, visa options,
        timelines and costs vary by authority, activity and current requirements.
        This page is general information and does not replace an individual legal,
        tax or regulatory review. Confirm the relevant requirements and
        availability before applying.
      </LegalDisclaimer>

      <ServiceFAQSection
        items={freeZoneFaqs}
        title="UAE Free Zone Questions, Answered"
        description="Practical answers about jurisdiction selection, licensing differences and operating considerations."
      />

      <ServiceFinalCTA
        title="Find the Right Free Zone for Your Business"
        description="Tell us about your activity, target market and operating needs so our team can help you compare suitable UAE Free Zone options."
        label="Get Free Consultation"
        message={finalMessage}
      />
    </>
  );
}
