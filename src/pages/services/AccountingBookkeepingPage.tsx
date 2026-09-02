import {
  Banknote,
  BookOpenCheck,
  ChartNoAxesCombined,
  FileChartColumn,
  Files,
  ListChecks,
  RefreshCcw,
  HandCoins,
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
import accountingImage from "../../assets/images/home/accounting-tax.jpg";
import accountingImage640 from "../../assets/images/home/accounting-tax-640.jpg";
import accountingImage1000 from "../../assets/images/home/accounting-tax-1000.jpg";
import {
  accountingBenefits,
  accountingFaqs,
  accountingServices,
  accountingWorkflow,
  relatedServices,
} from "../../data/services";
import { cn } from "../../utils/cn";

const accountingMessage =
  "Hello DGNS Advisors, I would like to discuss accounting and bookkeeping services for my business.";

const icons = [
  RefreshCcw,
  Files,
  BookOpenCheck,
  FileChartColumn,
  Banknote,
  HandCoins,
  ListChecks,
  ChartNoAxesCombined,
] as const;

export function AccountingBookkeepingPage() {
  return (
    <>
      <PageMeta
        title="UAE Accounting & Bookkeeping Services | DGNS Advisors"
        description="DGNS Advisors provides monthly and annual bookkeeping, accounting records, financial statements, payable, receivable and management reporting support in the UAE."
        canonicalPath="/services/accounting-bookkeeping"
      />

      <ServiceHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Accounting & Bookkeeping", to: "/services/accounting-bookkeeping" },
        ]}
        eyebrow="Accounting & Bookkeeping"
        title="Accurate Books. Clear Financial Visibility."
        description="Reliable accounting records help businesses stay organized, understand performance and meet ongoing compliance responsibilities."
        ctaLabel="Talk to an Accounting Expert"
        ctaMessage={accountingMessage}
        image={accountingImage}
        imageSrcSet={`${accountingImage640} 640w, ${accountingImage1000} 1000w, ${accountingImage} 1500w`}
        imageWidth={1500}
        imageHeight={1000}
        imageAlt="Organized accounting ledger and financial records in a modern UAE office"
        imagePosition="center center"
        highlights={["Bookkeeping", "Financial statements", "Management reporting"]}
        tone="light"
        mediaSide="left"
      />

      <Section background="white" spacing="lg" aria-labelledby="accounting-services-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-18">
            <ScrollReveal className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="Accounting Services"
                title="Financial Records Built for Everyday Clarity"
                description="Choose recurring bookkeeping or focused accounting support based on the way your business operates and reports."
                headingId="accounting-services-title"
              />
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {accountingServices.map((service, index) => {
                const Icon = icons[index];
                return (
                  <ScrollReveal
                    key={service.title}
                    delay={(index % 2) * 0.05}
                    className={cn(service.featured && "sm:col-span-2")}
                  >
                    <article
                      className={cn(
                        "group h-full rounded-card border p-6 transition-[border-color,transform] hover:-translate-y-0.5 sm:p-7",
                        service.featured
                          ? "min-h-[17rem] border-deep-green bg-deep-green text-white shadow-soft"
                          : "min-h-[13rem] border-deep-green/10 bg-off-white hover:border-soft-green/60",
                      )}
                    >
                      <div className="flex items-start justify-between gap-5">
                        <span
                          className={cn(
                            "grid size-11 place-items-center rounded-2xl",
                            service.featured
                              ? "bg-brand-lime text-deep-green"
                              : "bg-deep-green text-brand-lime",
                          )}
                        >
                          <Icon aria-hidden="true" className="size-5" />
                        </span>
                        <span
                          className={cn(
                            "text-xs font-extrabold tracking-[0.14em]",
                            service.featured ? "text-brand-lime/80" : "text-deep-green/62",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3
                        className={cn(
                          "mt-8 text-xl font-semibold",
                          service.featured ? "text-white" : "text-deep-green",
                        )}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-3 max-w-2xl text-sm leading-7",
                          service.featured ? "text-white/60" : "text-muted",
                        )}
                      >
                        {service.description}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <ServiceProcess
        eyebrow="Accounting Workflow"
        title="How We Support Your Accounting"
        description="A consistent workflow turns source records into organized financial information and maintainable accounts."
        steps={accountingWorkflow}
        tone="dark"
        variant="compact"
      />

      <Section background="soft-gradient" spacing="lg" aria-labelledby="accounting-benefits-title">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-18">
          <ScrollReveal>
            <p className="type-label text-emerald">Why It Matters</p>
            <h2
              id="accounting-benefits-title"
              className="mt-4 max-w-3xl text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-deep-green text-balance"
            >
              Better Records Support Better Decisions
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Well-organized records give management a clearer view of balances,
              performance and the information that supports recurring compliance.
            </p>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {accountingBenefits.map((benefit, index) => (
              <ScrollReveal key={benefit} delay={(index % 2) * 0.05}>
                <div className="flex h-full min-h-[8.5rem] flex-col justify-between rounded-card border border-deep-green/10 bg-white/82 p-5 shadow-soft">
                  <span className="text-xs font-extrabold tracking-[0.12em] text-emerald">
                    0{index + 1}
                  </span>
                  <p className="mt-6 font-semibold leading-6 text-deep-green">{benefit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <RelatedServices items={relatedServices.accounting} />
      <ServiceFAQSection
        items={accountingFaqs}
        description="Answers about bookkeeping, financial statements and ongoing accounting support."
      />
      <ServiceFinalCTA
        title="Need Better Financial Visibility?"
        description="Talk to DGNS Advisors about organized bookkeeping, clear records and reporting support for your UAE business."
        label="Talk to an Accounting Expert"
        message={accountingMessage}
      />
    </>
  );
}
