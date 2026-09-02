import {
  ArrowUpRight,
  Building2,
  Compass,
  FileCheck2,
  Globe2,
  Landmark,
  Network,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroDubai1200 from "../../assets/images/home/hero-dubai-1200.jpg";
import heroDubai768 from "../../assets/images/home/hero-dubai-768.jpg";
import heroDubai from "../../assets/images/home/hero-dubai.jpg";
import locationDubai640 from "../../assets/images/home/location-dubai-640.jpg";
import locationDubai from "../../assets/images/home/location-dubai.jpg";
import {
  AfterSetupServices,
  BusinessActivityCategories,
  BusinessSetupHero,
  BusinessSetupSchema,
  DocumentChecklist,
  EmirateBenefits,
  FormationTimeline,
} from "../../components/businessSetup";
import { Container } from "../../components/common/Container";
import { PageMeta } from "../../components/common/PageMeta";
import { ResponsiveImage } from "../../components/common/ResponsiveImage";
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
  dubaiActivityCategories,
  dubaiBenefits,
  dubaiDocuments,
  dubaiDocumentsNote,
  dubaiFaqs,
  dubaiFormationProcess,
  dubaiProcessNote,
  mainlandActivityNote,
  recurringServicesAfterSetup,
} from "../../data/businessSetup";

const pageTitle = "Dubai Mainland Company Formation | DGNS Advisors";
const pageDescription =
  "Plan a Dubai Mainland company formation with practical guidance on business activities, structure, documentation, licensing and ongoing UAE compliance.";

const heroMessage =
  "Hello DGNS Advisors, I would like to discuss Dubai Mainland company formation.";
const comparisonMessage =
  "Hello DGNS Advisors, I would like help comparing Dubai Mainland and UAE Free Zone options for my business.";
const finalMessage =
  "Hello DGNS Advisors, I am interested in Dubai Mainland company formation and would like a consultation.";

const environmentThemes = [
  {
    title: "International Connectivity",
    description:
      "Transport, communications and trade links connect Dubai with regional and international markets.",
    icon: Globe2,
  },
  {
    title: "UAE Market Context",
    description:
      "A mainland structure is commonly considered when serving customers and partners more broadly across the UAE.",
    icon: Compass,
  },
  {
    title: "Diverse Business Sectors",
    description:
      "Trade, technology, professional services, hospitality and industry all form part of Dubai's commercial landscape.",
    icon: Building2,
  },
] as const;

const dgnsSupport = [
  {
    number: "01",
    title: "Plan the Setup",
    description:
      "Review the proposed activity, ownership, customer market and practical operating requirements before selecting a structure.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Coordinate the Formation",
    description:
      "Prepare relevant company information and support registration, documentation and approval steps for the selected route.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Prepare to Operate",
    description:
      "Connect the new company with organised accounting records, tax reviews and business advisory support where relevant.",
    icon: Network,
  },
] as const;

export function DubaiMainlandPage() {
  return (
    <>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/business-setup/mainland/dubai"
      />
      <BusinessSetupSchema
        name="Dubai Mainland Company Formation"
        description={pageDescription}
        path="/business-setup/mainland/dubai"
        areaServed="Dubai, United Arab Emirates"
      />

      <BusinessSetupHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Business Setup", to: "/business-setup" },
          { label: "Mainland", to: "/business-setup/mainland" },
          { label: "Dubai" },
        ]}
        eyebrow="DUBAI MAINLAND"
        title="Mainland Business Setup in Dubai"
        description="Establish your business in one of the world's leading commercial destinations with professional guidance from planning through licensing and ongoing compliance."
        ctaLabel="Start My Dubai Business"
        ctaMessage={heroMessage}
        image={locationDubai}
        imageSrcSet={`${locationDubai640} 640w, ${locationDubai} 1100w`}
        imageSizes="100vw"
        imageWidth={1100}
        imageHeight={733}
        imageAlt="Contemporary Dubai skyline and waterfront representing Dubai Mainland business setup"
        imagePosition="center 52%"
        highlights={[
          "Activity and structure guidance",
          "Licensing and documentation support",
          "Post-setup compliance planning",
        ]}
        layout="panorama"
      />

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="why-dubai-mainland-title"
        className="overflow-hidden"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-20">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Why Dubai Mainland"
                title="A Commercial Base Built Around Connection"
                description="Dubai combines a global business environment with developed infrastructure, access to the wider UAE economy and links to international markets. A Mainland company can be a relevant route for businesses that need this operating context, provided the intended activity and approvals support it."
                headingId="why-dubai-mainland-title"
              />
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Its entrepreneurial ecosystem spans established industries and newer
                business models. The important decision is not simply to choose Dubai,
                but to align the licensed activity, company structure, premises and
                compliance plan with how the business will work in practice.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.08}>
              <div className="relative lg:pl-10">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-5 left-1 top-10 h-full w-full rounded-[2rem] bg-brand-lime/18 lg:left-5"
                />
                <ResponsiveImage
                  src={heroDubai}
                  srcSet={`${heroDubai768} 768w, ${heroDubai1200} 1200w, ${heroDubai} 1535w`}
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 52vw"
                  width={1535}
                  height={1024}
                  alt="Dubai's modern skyline illustrating its connected commercial environment"
                  wrapperClassName="relative aspect-[4/3] bg-deep-green shadow-[0_26px_70px_-32px_rgba(5,26,22,0.55)] sm:aspect-[16/10] lg:aspect-[4/3]"
                  style={{ objectPosition: "center 58%" }}
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-18 grid gap-px overflow-hidden rounded-[1.75rem] border border-deep-green/10 bg-deep-green/10 md:grid-cols-3">
            {environmentThemes.map((theme, index) => {
              const Icon = theme.icon;

              return (
                <ScrollReveal
                  key={theme.title}
                  delay={index * 0.05}
                  className="h-full bg-white"
                >
                  <article className="flex h-full min-h-[14rem] flex-col p-6 sm:p-8">
                    <span className="grid size-11 place-items-center rounded-2xl bg-deep-green text-brand-lime">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-auto pt-9 text-xl font-semibold text-deep-green">
                      {theme.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {theme.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <EmirateBenefits
        eyebrow="Key Advantages"
        title="Why Businesses Consider Dubai Mainland"
        description="Six practical characteristics to evaluate against your intended activity, market and operating requirements."
        benefits={dubaiBenefits}
        variant="bento"
      />

      <BusinessActivityCategories
        eyebrow="Business Activities"
        title="Find the Activity Category That Reflects Your Work"
        description="Dubai Mainland licences cover a wide range of sectors. These representative categories help organise the options without replacing an activity-specific authority review."
        categories={dubaiActivityCategories}
        note={mainlandActivityNote}
        variant="accordion"
        background="deep-green"
        inverse
      />

      <FormationTimeline
        eyebrow="Formation Process"
        title="A Structured Route From Activity to Compliance"
        description="The sequence keeps early formation decisions connected with documentation, approvals and the obligations that follow licensing."
        steps={dubaiFormationProcess}
        tone="light"
        variant="alternating"
      />
      <ServiceDisclaimer>{dubaiProcessNote}</ServiceDisclaimer>

      <DocumentChecklist
        title="Documents That May Support a Dubai Mainland Application"
        description="Organising the available applicant and company information early can make the authority review easier to coordinate."
        items={dubaiDocuments}
        note={dubaiDocumentsNote}
        tone="dark"
        variant="split"
      />

      <Section
        background="soft-gradient"
        spacing="lg"
        aria-labelledby="dubai-jurisdiction-choice-title"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch lg:gap-6">
            <ScrollReveal>
              <div className="h-full rounded-[2rem] border border-deep-green/10 bg-white p-6 shadow-soft sm:p-9 lg:p-10">
                <SectionHeading
                  eyebrow="Dubai Mainland vs Free Zone"
                  title="Two Paths, Different Operating Contexts"
                  description="The right route follows the activity, customer market and practical way the company needs to operate."
                  headingId="dubai-jurisdiction-choice-title"
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  <article className="rounded-card bg-deep-green p-6 text-white sm:p-7">
                    <span className="grid size-10 place-items-center rounded-xl bg-brand-lime text-deep-green">
                      <Landmark aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-8 text-xl font-semibold">Dubai Mainland</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      Commonly considered for broader local UAE operations, within
                      the company's licensed activities and applicable approvals.
                    </p>
                    <Link
                      to="/business-setup/mainland"
                      className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-brand-lime transition-colors hover:text-white"
                    >
                      Mainland overview
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </article>

                  <article className="rounded-card border border-deep-green/10 bg-off-white p-6 sm:p-7">
                    <span className="grid size-10 place-items-center rounded-xl bg-white text-emerald shadow-soft">
                      <Building2 aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-8 text-xl font-semibold text-deep-green">
                      UAE Free Zone
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      A jurisdiction-specific environment whose activities,
                      facilities and operating rules depend on the selected authority.
                    </p>
                    <Link
                      to="/business-setup/free-zone"
                      className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-emerald transition-colors hover:text-deep-green"
                    >
                      Explore Free Zones
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </article>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.08} className="h-full">
              <aside className="flex h-full min-h-[24rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-charcoal p-7 text-white sm:p-9 lg:p-10">
                <div>
                  <span className="grid size-12 place-items-center rounded-2xl border border-brand-lime/28 text-brand-lime">
                    <Scale aria-hidden="true" className="size-5" />
                  </span>
                  <p className="mt-10 type-label text-brand-lime">Compare the Fit</p>
                  <h3 className="mt-4 text-[clamp(2rem,3.2vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-balance">
                    Not Sure Which Setup Fits You?
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
                    Share how and where you plan to operate, and DGNS Advisors can
                    help you compare the practical considerations.
                  </p>
                </div>
                <WhatsAppCTA
                  label="Not Sure Which Setup Fits You?"
                  message={comparisonMessage}
                  variant="primary"
                  className="mt-8 w-full sm:w-auto"
                />
              </aside>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="dgns-dubai-support-title"
      >
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="DGNS Support"
              title="Formation Guidance That Continues Into Operations"
              description="DGNS Advisors keeps company-formation choices connected with documentation and the financial compliance work an operating business may need next."
              headingId="dgns-dubai-support-title"
            />
            <Link
              to="/business-setup"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-deep-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald"
            >
              Explore UAE Business Setup
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </ScrollReveal>

          <div className="border-t border-deep-green/12">
            {dgnsSupport.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.title}
                  delay={index * 0.05}
                  className="grid gap-5 border-b border-deep-green/12 py-7 sm:grid-cols-[3.25rem_0.7fr_1.3fr] sm:items-start sm:gap-6"
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
        </Container>
      </Section>

      <AfterSetupServices items={recurringServicesAfterSetup} />

      <ServiceFAQSection
        items={dubaiFaqs}
        title="Dubai Mainland Questions, Answered Clearly"
        description="General guidance on activities, documents, formation timing and ongoing support. Setup-specific requirements should always be confirmed."
      />

      <ServiceFinalCTA
        title="Ready to Start Your Business in Dubai?"
        description="Tell us about your intended activity and operating plans, and our team can help you understand the relevant Dubai Mainland setup requirements."
        label="Discuss My Dubai Setup"
        message={finalMessage}
      />
    </>
  );
}
