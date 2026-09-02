import { Mail, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

import { siteConfig } from "../../config/siteConfig";
import { Container } from "../common/Container";
import { PageMeta } from "../common/PageMeta";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { ServiceBreadcrumbs } from "../services/ServiceBreadcrumbs";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

export interface LegalDocumentLayoutProps {
  title: string;
  description: string;
  canonicalPath: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
  whatsappMessage: string;
}

const legalDateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatLegalDate(isoDate: string) {
  return legalDateFormatter.format(new Date(`${isoDate}T00:00:00Z`));
}

export function LegalDocumentLayout({
  title,
  description,
  canonicalPath,
  lastUpdated,
  sections,
  whatsappMessage,
}: LegalDocumentLayoutProps) {
  return (
    <>
      <PageMeta
        title={title}
        description={description}
        canonicalPath={canonicalPath}
      />

      <Section
        background="deep-green"
        spacing="lg"
        className="brand-grid overflow-hidden"
        aria-labelledby="legal-page-title"
      >
        <div
          aria-hidden="true"
          className="absolute -right-32 top-10 size-[26rem] rounded-full border border-brand-lime/10"
        />
        <Container className="relative">
          <ServiceBreadcrumbs
            inverse
            items={[{ label: "Home", to: "/" }, { label: title }]}
          />

          <ScrollReveal className="mt-10 max-w-4xl">
            <p className="type-label text-brand-lime">Legal</p>
            <h1
              id="legal-page-title"
              className="type-h1 mt-5 text-balance text-white"
            >
              {title}
            </h1>
            <p className="type-body-large mt-6 max-w-3xl text-white/68">
              {description}
            </p>
            <p className="mt-7 text-sm font-semibold text-white/74">
              Last Updated:{" "}
              <time dateTime={lastUpdated}>{formatLegalDate(lastUpdated)}</time>
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      <Section background="off-white" spacing="lg">
        <Container className="grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start lg:gap-16">
          <aside className="rounded-card border border-deep-green/10 bg-white p-6 shadow-soft lg:sticky lg:top-28">
            <h2 className="text-lg font-semibold text-deep-green">
              On this page
            </h2>
            <nav aria-label={`${title} sections`} className="mt-5">
              <ol className="grid gap-1">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex min-h-10 items-start gap-3 rounded-xl px-2 py-2 text-sm leading-6 text-muted transition-colors hover:bg-[#EEF3EC] hover:text-deep-green"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-xs font-extrabold text-emerald"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article
            aria-label={title}
            className="overflow-hidden rounded-[2rem] border border-deep-green/10 bg-white px-5 shadow-soft sm:px-8 lg:px-12"
          >
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-title`}
                className="scroll-mt-28 border-b border-deep-green/10 py-9 last:border-b-0 sm:py-11"
              >
                <div className="grid gap-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6">
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-full bg-deep-green text-xs font-extrabold text-brand-lime"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2
                      id={`${section.id}-title`}
                      className="text-2xl font-semibold tracking-[-0.025em] text-deep-green sm:text-[1.7rem]"
                    >
                      {section.title}
                    </h2>
                    <div className="mt-4 grid gap-4 text-[0.975rem] leading-8 text-muted [&_a]:font-semibold [&_a]:text-emerald [&_a]:underline [&_a]:decoration-emerald/30 [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-deep-green [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
                      {section.content}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </article>
        </Container>
      </Section>

      <Section background="white" spacing="md" aria-labelledby="legal-contact-title">
        <Container>
          <div className="grid gap-8 rounded-[2rem] bg-deep-green p-6 text-white shadow-soft sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-11">
            <div>
              <p className="type-label text-brand-lime">Questions</p>
              <h2 id="legal-contact-title" className="type-h3 mt-4 text-white">
                Contact {siteConfig.shortName}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
                For questions about this document, contact {siteConfig.companyName}
                {" "}using the details below.
              </p>
              <address className="mt-5 flex flex-col gap-3 text-sm not-italic text-white/76 sm:flex-row sm:flex-wrap sm:gap-5">
                <a
                  href={`mailto:${siteConfig.primaryEmail}`}
                  className="inline-flex min-h-10 items-center gap-2 transition-colors hover:text-brand-lime"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  <span className="break-all">{siteConfig.primaryEmail}</span>
                </a>
                <span className="hidden text-white/24 sm:inline" aria-hidden="true">
                  ·
                </span>
                <span className="inline-flex min-h-10 items-center">
                  {siteConfig.location}
                </span>
              </address>
            </div>
            <WhatsAppCTA
              label="Talk to DGNS"
              message={whatsappMessage}
              icon={<MessageCircle className="size-[1.15em]" strokeWidth={2} />}
              variant="primary"
              className="w-full lg:w-auto"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
