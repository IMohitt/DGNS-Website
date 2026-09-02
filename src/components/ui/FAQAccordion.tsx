import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "../../utils/cn";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: readonly FAQItem[];
  className?: string;
  defaultOpenIndex?: number;
};

export function FAQAccordion({
  items,
  className,
  defaultOpenIndex = 0,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const baseId = useId().replaceAll(":", "");
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("border-t border-deep-green/12", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `faq-trigger-${baseId}-${index}`;
        const panelId = `faq-panel-${baseId}-${index}`;

        return (
          <div key={item.question} className="border-b border-deep-green/12">
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex min-h-20 w-full items-center justify-between gap-5 py-5 text-left text-base font-semibold leading-snug text-deep-green transition-colors hover:text-emerald sm:text-lg"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-deep-green/14 transition-colors group-hover:border-soft-green/60 group-hover:bg-brand-lime/10">
                  <Plus
                    aria-hidden="true"
                    className={cn(
                      "size-4 transition-transform duration-200",
                      isOpen && "rotate-45",
                    )}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 pr-12 text-sm leading-7 text-muted sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
