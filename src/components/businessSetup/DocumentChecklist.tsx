import { FileCheck2 } from "lucide-react";
import { useId } from "react";
import { cn } from "../../utils/cn";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";

type DocumentChecklistProps = {
  title?: string;
  description?: string;
  items: readonly (string | { title: string; description?: string })[];
  note: string;
  tone?: "light" | "dark";
  variant?: "split" | "compact";
};

export function DocumentChecklist({
  title = "Documents That May Be Needed",
  description = "A clear document review helps the application process begin with the available information organized.",
  items,
  note,
  tone = "light",
  variant = "split",
}: DocumentChecklistProps) {
  const headingId = `document-checklist-${useId().replaceAll(":", "")}`;
  const dark = tone === "dark";

  return (
    <Section
      background={dark ? "charcoal" : "soft-gradient"}
      spacing="lg"
      aria-labelledby={headingId}
    >
      <Container
        className={cn(
          "grid gap-12 lg:gap-20",
          variant === "split" && "lg:grid-cols-[0.72fr_1.28fr]",
        )}
      >
        <ScrollReveal>
          <SectionHeading
            eyebrow="Documentation"
            title={title}
            description={description}
            inverse={dark}
            headingId={headingId}
          />
          <p
            className={cn(
              "mt-8 rounded-2xl border p-5 text-sm leading-7",
              dark
                ? "border-brand-lime/18 bg-brand-lime/[0.06] text-white/68"
                : "border-deep-green/10 bg-white/72 text-muted",
            )}
          >
            {note}
          </p>
        </ScrollReveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item, index) => {
            const title = typeof item === "string" ? item : item.title;
            const itemDescription =
              typeof item === "string" ? undefined : item.description;

            return (
              <li key={title}>
                <ScrollReveal delay={(index % 4) * 0.04} className="h-full">
                  <div
                    className={cn(
                      "flex h-full min-h-[7rem] items-start gap-4 rounded-card border p-5",
                      dark
                        ? "border-white/10 bg-white/[0.045]"
                        : "border-deep-green/10 bg-white shadow-soft",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-xl",
                        dark
                          ? "bg-brand-lime text-deep-green"
                          : "bg-deep-green text-brand-lime",
                      )}
                    >
                      <FileCheck2 aria-hidden="true" className="size-4" />
                    </span>
                    <span className="pt-1">
                      <span
                        className={cn(
                          "block text-sm font-semibold leading-6",
                          dark ? "text-white/82" : "text-deep-green/82",
                        )}
                      >
                        {title}
                      </span>
                      {itemDescription ? (
                        <span
                          className={cn(
                            "mt-2 block text-sm font-normal leading-6",
                            dark ? "text-white/58" : "text-muted",
                          )}
                        >
                          {itemDescription}
                        </span>
                      ) : null}
                    </span>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
