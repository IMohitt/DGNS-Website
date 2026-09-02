import { Info } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "../../utils/cn";
import { Container } from "./Container";

export interface LegalDisclaimerProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function LegalDisclaimer({
  children,
  title = "Important information",
  className,
}: LegalDisclaimerProps) {
  return (
    <aside
      aria-label={title}
      className={cn(
        "border-y border-deep-green/10 bg-[#EEF3EC] py-6",
        className,
      )}
    >
      <Container className="flex items-start gap-4">
        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-deep-green text-brand-lime">
          <Info aria-hidden="true" className="size-4" />
        </span>
        <div className="max-w-5xl">
          <p className="text-xs font-bold tracking-[0.12em] text-deep-green uppercase">
            {title}
          </p>
          <div className="mt-1 text-sm leading-7 text-deep-green/72">
            {children}
          </div>
        </div>
      </Container>
    </aside>
  );
}
