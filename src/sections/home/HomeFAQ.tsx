import { MessageCircleQuestion } from "lucide-react";
import { Container } from "../../components/common/Container";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import { FAQAccordion } from "../../components/ui/FAQAccordion";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import { homeFaqItems } from "../../data/home";

const faqMessage =
  "Hello DGNS Advisors, I have a question about your UAE business setup, accounting and tax services.";

export function HomeFAQ() {
  return (
    <Section background="white" spacing="lg" aria-labelledby="faq-title">
      <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <ScrollReveal className="lg:sticky lg:top-32 lg:self-start">
          <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-brand-lime/18 text-deep-green">
            <MessageCircleQuestion aria-hidden="true" className="size-5" />
          </span>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about UAE company formation, accounting and tax support."
            headingId="faq-title"
          />
          <WhatsAppCTA
            label="Ask DGNS Advisors"
            message={faqMessage}
            variant="text"
            className="mt-7"
          />
        </ScrollReveal>

        <ScrollReveal variant="fade">
          <FAQAccordion items={homeFaqItems} />
        </ScrollReveal>
      </Container>
    </Section>
  );
}
