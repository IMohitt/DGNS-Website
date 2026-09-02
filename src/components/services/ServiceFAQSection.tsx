import type { FAQItem } from "../ui/FAQAccordion";
import { FAQAccordion } from "../ui/FAQAccordion";
import { Container } from "../common/Container";
import { JsonLd } from "../common/JsonLd";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";

type ServiceFAQSectionProps = {
  items: readonly FAQItem[];
  title?: string;
  description?: string;
};

export function ServiceFAQSection({
  items,
  title = "Frequently Asked Questions",
  description = "Clear answers to common questions about this service.",
}: ServiceFAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <Section background="white" spacing="lg" aria-labelledby="service-faq-title">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <ScrollReveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="FAQ"
              title={title}
              description={description}
              headingId="service-faq-title"
            />
          </ScrollReveal>
          <ScrollReveal variant="fade">
            <FAQAccordion items={items} />
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
