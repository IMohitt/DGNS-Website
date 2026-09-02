import {
  BookOpenCheck,
  ChartNoAxesCombined,
  ChartSpline,
  FileChartColumn,
  ShieldCheck,
  Waypoints,
  Workflow,
} from "lucide-react";
import { Container } from "../../components/common/Container";
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
import advisoryImage1000 from "../../assets/images/services/advisory-strategy-1000.jpg";
import advisoryImage640 from "../../assets/images/services/advisory-strategy-640.jpg";
import advisoryImage from "../../assets/images/services/advisory-strategy.jpg";
import {
  advisoryFaqs,
  advisoryProcess,
  advisoryServices,
  relatedServices,
} from "../../data/services";
import { cn } from "../../utils/cn";

const advisoryMessage =
  "Hello DGNS Advisors, I would like to discuss business and financial advisory services.";

const advisoryIcons = [
  Waypoints,
  ChartSpline,
  FileChartColumn,
  ShieldCheck,
  Workflow,
  BookOpenCheck,
] as const;

const decisionLenses = [
  {
    number: "01",
    title: "Frame the decision",
    description:
      "Define the business question, its context and the outcome management needs to consider.",
  },
  {
    number: "02",
    title: "Connect the information",
    description:
      "Bring relevant financial records, operating realities and compliance considerations into one view.",
  },
  {
    number: "03",
    title: "Set practical priorities",
    description:
      "Translate the analysis into sequenced actions that reflect the business and its available resources.",
  },
  {
    number: "04",
    title: "Review and adapt",
    description:
      "Use appropriate reporting to revisit progress and refine the approach as circumstances evolve.",
  },
] as const;

const signalHeights = [24, 41, 33, 57, 48, 71, 64, 86] as const;

export function AdvisoryServicePage() {
  return (
    <>
      <PageMeta
        title="Business & Financial Advisory UAE | DGNS Advisors"
        description="Practical UAE business and financial advisory for structuring, planning, reporting, compliance coordination and business process solutions."
        canonicalPath="/services/advisory"
      />

      <ServiceHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Business & Financial Advisory" },
        ]}
        eyebrow="BUSINESS & FINANCIAL ADVISORY"
        title="Better Structure. Better Visibility. Better Decisions."
        description="DGNS Advisors supports businesses with practical structuring, planning, financial reporting and business process solutions designed around their goals."
        ctaLabel="Speak With an Advisor"
        ctaMessage={advisoryMessage}
        image={advisoryImage}
        imageSrcSet={`${advisoryImage640} 640w, ${advisoryImage1000} 1000w, ${advisoryImage} 1500w`}
        imageWidth={1500}
        imageHeight={1000}
        imageAlt="Executive strategy workspace with planning documents and an architectural model in a Dubai office"
        imagePosition="50% 51%"
        tone="charcoal"
        mediaSide="left"
        highlights={[
          "Business structure",
          "Financial planning",
          "Reporting and process support",
        ]}
      />

      <Section
        background="soft-gradient"
        spacing="lg"
        aria-labelledby="advisory-overview-title"
      >
        <Container className="grid min-w-0 gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-end lg:gap-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="A Connected View"
              title="Structure, Finance and Operations Belong in the Same Conversation"
              description="Important business questions rarely sit in one function. Practical advisory considers how the company is structured, what its financial information shows, which responsibilities matter and how work moves through the business."
              headingId="advisory-overview-title"
            />
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.08}>
            <div className="rounded-[2rem] border border-deep-green/10 bg-white/85 p-6 shadow-soft backdrop-blur-sm sm:p-8">
              <ChartNoAxesCombined
                aria-hidden="true"
                className="size-7 text-emerald"
              />
              <p className="mt-7 text-xl font-semibold leading-8 tracking-[-0.025em] text-deep-green sm:text-2xl">
                The purpose is not to create more information. It is to organize
                the right information around the decisions the business needs to
                make.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-deep-green/10 pt-5 text-xs font-bold tracking-[0.12em] text-emerald uppercase sm:gap-4">
                <span>Structure</span>
                <span>Visibility</span>
                <span>Action</span>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <Section
        background="charcoal"
        spacing="lg"
        className="overflow-hidden"
        aria-labelledby="advisory-services-title"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(155,232,61,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(155,232,61,0.055)_1px,transparent_1px)] [background-size:64px_64px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-64 top-12 size-[36rem] rounded-full bg-soft-green/8 blur-3xl"
        />

        <Container className="relative grid min-w-0 gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-24">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Advisory Services"
              title="A Strategic View With Practical Next Steps"
              description="Choose focused support for a current challenge or connect several disciplines around a broader business requirement."
              headingId="advisory-services-title"
              inverse
            />

            <div
              aria-hidden="true"
              className="relative mt-10 h-40 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035]"
            >
              <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="absolute inset-x-6 bottom-5 flex h-24 items-end gap-2 sm:gap-3">
                {signalHeights.map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="flex-1 rounded-t-sm bg-[linear-gradient(180deg,rgba(155,232,61,0.62),rgba(103,200,106,0.10))]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <span className="absolute bottom-[42%] left-[12%] h-px w-[72%] -rotate-[9deg] bg-brand-lime/55" />
              <span className="absolute bottom-[52%] right-[13%] size-2 rounded-full bg-brand-lime shadow-[0_0_18px_rgba(155,232,61,0.65)]" />
            </div>
          </ScrollReveal>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {advisoryServices.map((service, index) => {
              const Icon = advisoryIcons[index];
              const wide = index === 0 || index === advisoryServices.length - 1;

              return (
                <ScrollReveal
                  key={service.title}
                  delay={(index % 3) * 0.05}
                  className={cn(wide && "sm:col-span-2")}
                >
                  <article
                    className={cn(
                      "group relative flex h-full min-h-[16rem] flex-col overflow-hidden rounded-[1.6rem] border p-6 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 sm:p-7",
                      wide
                        ? "border-brand-lime/20 bg-deep-green/80 hover:border-brand-lime/40"
                        : "border-white/10 bg-white/[0.045] hover:border-white/20 hover:bg-white/[0.065]",
                    )}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <span className="grid size-11 place-items-center rounded-xl border border-brand-lime/20 bg-brand-lime/10 text-brand-lime">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="text-xs font-extrabold tracking-[0.14em] text-white/58">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-auto max-w-xl pt-10 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">
                      {service.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <ServiceProcess
        eyebrow="Advisory Process"
        title="From Business Challenge to Practical Action"
        description="Each engagement starts with the business context and moves toward actions that can be reviewed and refined over time."
        steps={advisoryProcess}
        variant="compact"
      />

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="decision-framework-title"
      >
        <Container className="grid min-w-0 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Decision Framework"
              title="What Practical Advisory Should Help You Do"
              description="Advisory is most useful when analysis can be connected to a clear management question, an achievable course of action and an appropriate review rhythm."
              headingId="decision-framework-title"
            />
          </ScrollReveal>

          <ol className="border-t border-deep-green/12">
            {decisionLenses.map((item, index) => (
              <li key={item.number} className="list-none">
                <ScrollReveal
                  delay={index * 0.04}
                  className="grid min-w-0 grid-cols-[3rem_1fr] gap-4 border-b border-deep-green/12 py-6 sm:grid-cols-[4rem_0.75fr_1.25fr] sm:items-start sm:gap-6 sm:py-8"
                >
                  <span className="pt-1 text-xs font-extrabold tracking-[0.14em] text-emerald">
                    {item.number}
                  </span>
                  <h3 className="text-lg font-semibold text-deep-green sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="col-start-2 text-sm leading-7 text-muted sm:col-start-auto">
                    {item.description}
                  </p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <RelatedServices items={relatedServices.advisory} />

      <ServiceFAQSection
        items={advisoryFaqs}
        description="General answers about using business and financial advisory support alongside your company’s wider requirements."
      />

      <ServiceFinalCTA
        title="Ready to Make Better Business Decisions?"
        description="Share the structure, reporting or process question you are working through, and discuss the context with DGNS Advisors."
        label="Speak With an Advisor"
        message={advisoryMessage}
      />
    </>
  );
}
