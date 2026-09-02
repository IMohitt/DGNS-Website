import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import accountingTax from "../../assets/images/home/accounting-tax.jpg";
import { Container } from "../../components/common/Container";
import { ResponsiveImage } from "../../components/common/ResponsiveImage";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import { Button } from "../../components/ui/Button";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import { accountingItems } from "../../data/home";
import accountingTax640 from "../../assets/images/home/accounting-tax-640.jpg";
import accountingTax1000 from "../../assets/images/home/accounting-tax-1000.jpg";

const accountingMessage =
  "Hello DGNS Advisors, I would like to discuss accounting, bookkeeping and tax compliance support.";

export function AccountingTaxSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <Section
      background="soft-gradient"
      spacing="lg"
      aria-labelledby="accounting-tax-title"
      className="overflow-hidden"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <ScrollReveal variant="scale">
          <div ref={imageRef} className="relative">
            <motion.div style={reduceMotion ? undefined : { y: imageY }}>
              <ResponsiveImage
                src={accountingTax}
                srcSet={`${accountingTax640} 640w, ${accountingTax1000} 1000w, ${accountingTax} 1500w`}
                sizes="(max-width: 1023px) calc(100vw - 2rem), 44vw"
                width={1500}
                height={1000}
                alt="Accounting ledger, calculator and financial documents in a modern UAE office"
                rounded="2xl"
                wrapperClassName="aspect-[4/3.35] bg-off-white shadow-soft lg:aspect-[4/4.25]"
                className="object-[center_center]"
              />
            </motion.div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-deep-green/10 bg-white p-4 shadow-soft sm:left-auto sm:right-6 sm:w-[17rem] sm:p-5">
              <p className="type-label text-emerald">Focused support</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-deep-green">
                Accurate records and timely compliance—without distracting you from the business.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="pt-5 sm:pt-7 lg:pt-0">
          <SectionHeading
            eyebrow="Accounting & Tax"
            title="Stay Accurate. Stay Compliant. Stay Focused on Growth."
            description="Let DGNS Advisors handle the accounting and tax responsibilities while you focus on running your business."
            headingId="accounting-tax-title"
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {accountingItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-deep-green/8 bg-white/72 px-4 py-3 text-sm font-semibold text-deep-green"
              >
                <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-soft-green" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/services/accounting-bookkeeping" variant="dark">
              Accounting Services
              <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            <WhatsAppCTA
              label="Talk to an Expert"
              message={accountingMessage}
              variant="secondary"
            />
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
