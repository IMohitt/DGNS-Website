import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../../components/common/Container";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import { processSteps } from "../../data/home";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section background="white" spacing="lg" aria-labelledby="process-title">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A Clear Process From Consultation to Ongoing Support"
          description="A focused, transparent path that turns your requirements into practical next steps and dependable ongoing support."
          headingId="process-title"
        />

        <div className="relative mt-14 lg:mt-16">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-deep-green/10 lg:hidden">
            <motion.div
              className="h-full w-px origin-top bg-brand-lime"
              initial={reduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeOut" }}
            />
          </div>

          <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-deep-green/10 lg:block">
            <motion.div
              className="h-px w-full origin-left bg-brand-lime"
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: reduceMotion ? 0 : 1, ease: "easeOut" }}
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-7">
            {processSteps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                delay={index * 0.08}
                className="relative grid grid-cols-[3rem_1fr] gap-5 lg:block lg:text-center"
              >
                <span className="relative z-10 grid size-12 place-items-center rounded-full border border-deep-green/12 bg-white text-xs font-extrabold tracking-[0.08em] text-deep-green shadow-[0_8px_24px_rgba(11,53,45,0.08)] lg:mx-auto">
                  {step.number}
                </span>
                <div className="pt-1 lg:pt-7">
                  <h3 className="text-lg font-semibold text-deep-green">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted lg:mx-auto lg:max-w-[17rem]">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
