import { useId } from "react";
import { cn } from "../../utils/cn";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";

export type JurisdictionComparisonRow = {
  label: string;
  mainland: string;
  freeZone: string;
};

type JurisdictionComparisonProps = {
  title?: string;
  description?: string;
  rows: readonly JurisdictionComparisonRow[];
  note: string;
  ctaLabel: string;
  ctaMessage: string;
  compact?: boolean;
};

export function JurisdictionComparison({
  title = "Mainland and Free Zone, Side by Side",
  description = "Compare the operating context and practical requirements before choosing a company formation path.",
  rows,
  note,
  ctaLabel,
  ctaMessage,
  compact = false,
}: JurisdictionComparisonProps) {
  const headingId = `jurisdiction-comparison-${useId().replaceAll(":", "")}`;

  return (
    <Section
      id="jurisdiction-comparison"
      background="charcoal"
      spacing="lg"
      aria-labelledby={headingId}
      className="scroll-mt-20 overflow-hidden"
    >
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Mainland or Free Zone"
            title={title}
            description={description}
            inverse
            headingId={headingId}
          />
        </ScrollReveal>

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.035]">
          <dl className="divide-y divide-white/10 md:hidden" aria-label="Mainland and Free Zone comparison">
            {rows.map((row) => (
              <div key={row.label} className="p-5">
                <dt className="pb-5 text-sm font-semibold text-white">{row.label}</dt>
                <dd className="pb-5 text-sm leading-6 text-white/66">
                  <span className="mb-1 block text-[0.68rem] font-extrabold tracking-[0.14em] text-white/64 uppercase">Mainland</span>
                  {row.mainland}
                </dd>
                <dd className="text-sm leading-6 text-white/66">
                  <span className="mb-1 block text-[0.68rem] font-extrabold tracking-[0.14em] text-brand-lime uppercase">Free Zone</span>
                  {row.freeZone}
                </dd>
              </div>
            ))}
          </dl>
          <table className="hidden w-full border-collapse text-left md:table" aria-label="Mainland and Free Zone comparison">
            <thead className="bg-white/[0.055]">
              <tr>
                <th scope="col" className="w-[26%] p-5 text-xs font-extrabold tracking-[0.14em] text-white/68 uppercase lg:p-6">Consideration</th>
                <th scope="col" className="w-[37%] border-l border-white/12 p-5 text-lg font-semibold text-white lg:p-6">Mainland</th>
                <th scope="col" className="w-[37%] border-l border-white/12 p-5 text-lg font-semibold text-brand-lime lg:p-6">Free Zone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className="p-5 text-sm font-semibold text-white lg:p-6">{row.label}</th>
                  <td className="border-l border-white/10 p-5 text-sm leading-6 text-white/66 lg:p-6">
                    {row.mainland}
                  </td>
                  <td className="border-l border-white/10 p-5 text-sm leading-6 text-white/66 lg:p-6">
                    {row.freeZone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ScrollReveal className={cn("mt-6 rounded-[1.5rem] border border-brand-lime/18 bg-brand-lime/[0.07] p-5 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-7", compact && "lg:mx-auto lg:max-w-5xl")}>
          <div>
            <p className="text-sm font-semibold text-white">Still Not Sure?</p>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-white/68">{note}</p>
          </div>
          <WhatsAppCTA label={ctaLabel} message={ctaMessage} variant="primary" className="mt-5 w-full sm:mt-0 sm:w-auto" />
        </ScrollReveal>
      </Container>
    </Section>
  );
}
