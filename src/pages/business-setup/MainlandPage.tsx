import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import heroDubai1200 from "../../assets/images/home/hero-dubai-1200.jpg";
import heroDubai768 from "../../assets/images/home/hero-dubai-768.jpg";
import heroDubai from "../../assets/images/home/hero-dubai.jpg";
import abuDhabi640 from "../../assets/images/home/location-abu-dhabi-640.jpg";
import abuDhabi from "../../assets/images/home/location-abu-dhabi.jpg";
import ajman640 from "../../assets/images/home/location-ajman-640.jpg";
import ajman from "../../assets/images/home/location-ajman.jpg";
import dubai640 from "../../assets/images/home/location-dubai-640.jpg";
import dubai from "../../assets/images/home/location-dubai.jpg";
import sharjah640 from "../../assets/images/home/location-sharjah-640.jpg";
import sharjah from "../../assets/images/home/location-sharjah.jpg";
import {
  AfterSetupServices,
  BusinessActivityCategories,
  BusinessSetupHero,
  BusinessSetupSchema,
  EmirateBenefits,
  FormationTimeline,
} from "../../components/businessSetup";
import { Container } from "../../components/common/Container";
import { PageMeta } from "../../components/common/PageMeta";
import { ResponsiveImage } from "../../components/common/ResponsiveImage";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import { ServiceFAQSection, ServiceFinalCTA } from "../../components/services";
import {
  businessSetupJourney,
  mainlandActivityCategories,
  mainlandActivityNote,
  mainlandBenefits,
  mainlandEmirates,
  mainlandFaqs,
  recurringServicesAfterSetup,
} from "../../data/businessSetup";
import { cn } from "../../utils/cn";

const pageTitle = "UAE Mainland Company Formation | DGNS Advisors";
const pageDescription =
  "Explore UAE Mainland company formation across Dubai, Abu Dhabi, Sharjah and Ajman with guidance on activities, licensing and setup requirements.";
const mainlandMessage =
  "Hello DGNS Advisors, I would like to discuss UAE Mainland company formation.";

const emirateImages = [
  { src: dubai, srcSet: `${dubai640} 640w, ${dubai} 1100w`, alt: "Dubai skyline and modern business architecture", position: "72% center" },
  { src: abuDhabi, srcSet: `${abuDhabi640} 640w, ${abuDhabi} 1100w`, alt: "Abu Dhabi institutional and contemporary architecture", position: "50% center" },
  { src: sharjah, srcSet: `${sharjah640} 640w, ${sharjah} 1100w`, alt: "Sharjah architecture representing its trading and cultural business environment", position: "47% center" },
  { src: ajman, srcSet: `${ajman640} 640w, ${ajman} 1100w`, alt: "Ajman waterfront and modern urban business setting", position: "50% center" },
] as const;

export function MainlandPage() {
  return (
    <>
      <PageMeta title={pageTitle} description={pageDescription} canonicalPath="/business-setup/mainland" />
      <BusinessSetupSchema
        name="UAE Mainland Company Formation"
        description={pageDescription}
        path="/business-setup/mainland"
      />
      <BusinessSetupHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Business Setup", to: "/business-setup" },
          { label: "Mainland" },
        ]}
        eyebrow="UAE MAINLAND"
        title="Build Your Business Across the UAE Mainland"
        description="Explore mainland company formation opportunities across Dubai, Abu Dhabi, Sharjah and Ajman with guidance tailored to your business requirements."
        ctaLabel="Discuss Mainland Setup"
        ctaMessage={mainlandMessage}
        secondaryLabel="Compare Free Zone"
        secondaryTo="/business-setup/free-zone"
        image={heroDubai}
        imageSrcSet={`${heroDubai768} 768w, ${heroDubai1200} 1200w, ${heroDubai} 1535w`}
        imageWidth={1535}
        imageHeight={1024}
        imageAlt="Wide view of Dubai business districts representing UAE Mainland opportunities"
        imagePosition="center 52%"
        layout="panorama"
        highlights={["Four Emirate options", "Commercial, professional and industrial activities"]}
      />

      <Section background="white" spacing="lg" aria-labelledby="mainland-emirates-title">
        <Container>
          <SectionHeading
            eyebrow="Choose an Emirate"
            title="Four Mainland Business Environments to Compare"
            description="Each Emirate has its own commercial character, authority framework and location considerations. Explore the option most relevant to your plans."
            headingId="mainland-emirates-title"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {mainlandEmirates.map((emirate, index) => {
              const image = emirateImages[index];
              return (
                <ScrollReveal
                  key={emirate.to}
                  delay={(index % 2) * 0.06}
                  className={cn(index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5")}
                >
                  <Link
                    to={emirate.to}
                    className="group relative block min-h-[28rem] overflow-hidden rounded-[2rem] border border-deep-green/10 bg-deep-green shadow-soft"
                  >
                    <ResponsiveImage
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 48vw, 54vw"
                      width={1100}
                      height={733}
                      alt={image.alt}
                      wrapperClassName="absolute inset-0 h-full w-full rounded-none"
                      style={{ objectPosition: image.position }}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,53,45,0.04)_20%,rgba(6,29,24,0.9)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                      <div className="flex items-end justify-between gap-5">
                        <div>
                          <p className="type-label text-brand-lime">{String(index + 1).padStart(2, "0")}</p>
                          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">{emirate.title}</h3>
                        </div>
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-lime text-deep-green transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                          <ArrowUpRight aria-hidden="true" className="size-5" />
                        </span>
                      </div>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">{emirate.description}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <EmirateBenefits
        eyebrow="Mainland Advantages"
        title="Why Businesses Consider UAE Mainland"
        description="A mainland company can support a broad operating model, but the practical benefits depend on the licence, activity and selected Emirate."
        benefits={mainlandBenefits}
        variant="bento"
        tone="dark"
      />

      <BusinessActivityCategories
        title="Explore Business Activities by Category"
        description="Start with broad activity families, then confirm the exact activity and approval pathway with the relevant authority."
        categories={mainlandActivityCategories}
        note={mainlandActivityNote}
        variant="bands"
        background="off-white"
      />

      <FormationTimeline
        eyebrow="Mainland Formation"
        title="A Structured Path From Plan to Licence"
        description="The sequence begins with the operating plan and continues through activity selection, documentation, licensing and post-setup support."
        steps={businessSetupJourney}
        variant="alternating"
      />

      <AfterSetupServices items={recurringServicesAfterSetup} />
      <ServiceFAQSection
        items={mainlandFaqs}
        title="UAE Mainland Questions"
        description="General answers about Emirate selection, operating scope, additional approvals and ongoing support."
      />
      <ServiceFinalCTA
        title="Ready to Start Your UAE Company?"
        description="Tell us about your planned business and our team can help you understand the available setup options."
        label="Get Free Consultation"
        message={mainlandMessage}
      />
    </>
  );
}
