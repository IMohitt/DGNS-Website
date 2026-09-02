import { ArrowUpRight, CheckCircle2, Map, Waypoints } from "lucide-react";
import { Link } from "react-router-dom";

import advisoryImage1000 from "../../assets/images/services/advisory-strategy-1000.jpg";
import advisoryImage640 from "../../assets/images/services/advisory-strategy-640.jpg";
import advisoryImage from "../../assets/images/services/advisory-strategy.jpg";
import setupImage1000 from "../../assets/images/services/business-setup-1000.jpg";
import setupImage640 from "../../assets/images/services/business-setup-640.jpg";
import setupImage from "../../assets/images/services/business-setup.jpg";
import heroDubai1200 from "../../assets/images/home/hero-dubai-1200.jpg";
import heroDubai768 from "../../assets/images/home/hero-dubai-768.jpg";
import heroDubai from "../../assets/images/home/hero-dubai.jpg";
import {
  AfterSetupServices,
  BusinessSetupHero,
  BusinessSetupSchema,
  FormationTimeline,
  JurisdictionComparison,
} from "../../components/businessSetup";
import { Container } from "../../components/common/Container";
import { PageMeta } from "../../components/common/PageMeta";
import { ResponsiveImage } from "../../components/common/ResponsiveImage";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import { ServiceFAQSection, ServiceFinalCTA } from "../../components/services";
import {
  businessSetupComparisonNote,
  businessSetupHubComparison,
  businessSetupHubFaqs,
  businessSetupJourney,
  businessSetupPathways,
  recurringServicesAfterSetup,
} from "../../data/businessSetup";
import { cn } from "../../utils/cn";

const pageTitle = "UAE Company Formation Options | DGNS Advisors";
const pageDescription =
  "Compare UAE Mainland and Free Zone company formation options with practical guidance on activities, jurisdictions, licensing and documentation.";
const consultationMessage =
  "Hello DGNS Advisors, I would like guidance regarding setting up a business in the UAE.";
const comparisonMessage =
  "Hello DGNS Advisors, I need help choosing between Mainland and Free Zone company formation in the UAE.";

const pathwayImages = [
  {
    src: heroDubai,
    srcSet: `${heroDubai768} 768w, ${heroDubai1200} 1200w, ${heroDubai} 1535w`,
    width: 1535,
    height: 1024,
    alt: "Contemporary Dubai skyline and architecture representing UAE Mainland company formation",
    position: "center 52%",
  },
  {
    src: advisoryImage,
    srcSet: `${advisoryImage640} 640w, ${advisoryImage1000} 1000w, ${advisoryImage} 1500w`,
    width: 1500,
    height: 1000,
    alt: "Executive planning workspace representing the selection of a UAE Free Zone",
    position: "center",
  },
] as const;

export function BusinessSetupHubPage() {
  return (
    <>
      <PageMeta title={pageTitle} description={pageDescription} canonicalPath="/business-setup" />
      <BusinessSetupSchema
        name="UAE Business Setup and Company Formation"
        description={pageDescription}
        path="/business-setup"
      />

      <BusinessSetupHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Business Setup" }]}
        eyebrow="UAE BUSINESS SETUP"
        title="Build the Right Foundation for Your UAE Business"
        description="DGNS Advisors helps entrepreneurs and businesses understand company formation options, select suitable jurisdictions and activities, and review the setup process with clear practical guidance."
        ctaLabel="Discuss My Business Setup"
        ctaMessage={consultationMessage}
        secondaryLabel="Compare Mainland & Free Zone"
        secondaryHref="#jurisdiction-comparison"
        image={setupImage}
        imageSrcSet={`${setupImage640} 640w, ${setupImage1000} 1000w, ${setupImage} 1500w`}
        imageWidth={1500}
        imageHeight={1000}
        imageAlt="Dubai business-district architecture with a company formation folder and documents"
        imagePosition="45% center"
        highlights={["Mainland and Free Zone guidance", "Activity, structure and licensing support"]}
        layout="offset"
        tone="deep"
      />

      <Section background="white" spacing="lg" aria-labelledby="setup-pathways-title">
        <Container>
          <SectionHeading
            eyebrow="Two Formation Paths"
            title="Choose the Operating Context That Fits Your Business"
            description="Start with how the company intends to operate, where its customers are based and which authority framework supports its activities."
            headingId="setup-pathways-title"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {businessSetupPathways.map((pathway, index) => {
              const image = pathwayImages[index];
              const Icon = index === 0 ? Map : Waypoints;

              return (
                <ScrollReveal key={pathway.to} delay={index * 0.07}>
                  <article
                    className={cn(
                      "group relative flex h-full min-h-[38rem] flex-col overflow-hidden rounded-[2rem] border shadow-soft",
                      index === 0 ? "border-deep-green bg-deep-green text-white" : "border-deep-green/10 bg-off-white text-charcoal",
                    )}
                  >
                    <ResponsiveImage
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes="(max-width: 1023px) calc(100vw - 2rem), 48vw"
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                      wrapperClassName="aspect-[16/9] rounded-none"
                      style={{ objectPosition: image.position }}
                    />
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <div className="flex items-center justify-between gap-5">
                        <p className={cn("type-label", index === 0 ? "text-brand-lime" : "text-emerald")}>{pathway.eyebrow}</p>
                        <span className={cn("grid size-11 place-items-center rounded-2xl", index === 0 ? "bg-brand-lime text-deep-green" : "bg-deep-green text-brand-lime")}>
                          <Icon aria-hidden="true" className="size-5" />
                        </span>
                      </div>
                      <h3 className={cn("mt-7 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl", index === 0 ? "text-white" : "text-deep-green")}>{pathway.title}</h3>
                      <p className={cn("mt-4 text-sm leading-7 sm:text-base", index === 0 ? "text-white/66" : "text-muted")}>{pathway.description}</p>
                      <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                        {pathway.highlights.map((highlight) => (
                          <li key={highlight} className={cn("flex items-start gap-2 text-sm font-semibold", index === 0 ? "text-white/72" : "text-deep-green/74")}>
                            <CheckCircle2 aria-hidden="true" className={cn("mt-0.5 size-4 shrink-0", index === 0 ? "text-brand-lime" : "text-emerald")} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={pathway.to}
                        className={cn("mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold", index === 0 ? "text-brand-lime" : "text-emerald")}
                      >
                        {pathway.cta}
                        <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <JurisdictionComparison
        rows={businessSetupHubComparison}
        note={businessSetupComparisonNote}
        ctaLabel="Help Me Choose"
        ctaMessage={comparisonMessage}
      />

      <FormationTimeline
        eyebrow="Company Formation Journey"
        title="Your UAE Company Formation Journey"
        description="A structured review connects the business idea with its activity, jurisdiction, documents, licence and ongoing requirements."
        steps={businessSetupJourney}
        variant="rail"
      />

      <AfterSetupServices items={recurringServicesAfterSetup} />
      <ServiceFAQSection
        items={businessSetupHubFaqs}
        title="UAE Business Setup Questions"
        description="Clear starting points for comparing jurisdictions, activities, registration and support after formation."
      />
      <ServiceFinalCTA
        title="Ready to Start Your UAE Company?"
        description="Tell us about your planned business and our team can help you understand the available setup options."
        label="Get Free Consultation"
        message={consultationMessage}
      />
    </>
  );
}
