import type { ComponentPropsWithoutRef } from "react";

import { cn } from "../../utils/cn";

export type SectionBackground =
  | "white"
  | "off-white"
  | "deep-green"
  | "charcoal"
  | "soft-gradient";

export type SectionSpacing = "none" | "sm" | "md" | "lg";

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  background?: SectionBackground;
  spacing?: SectionSpacing;
}

const backgroundClasses: Record<SectionBackground, string> = {
  white: "bg-white text-charcoal",
  "off-white": "bg-off-white text-charcoal",
  "deep-green": "bg-deep-green text-white",
  charcoal: "bg-charcoal text-white",
  "soft-gradient":
    "bg-[linear-gradient(135deg,#F7F8F5_0%,#FFFFFF_58%,rgba(155,232,61,0.10)_100%)] text-charcoal",
};

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-10 sm:py-12 lg:py-16",
  md: "py-14 sm:py-18 lg:py-24",
  lg: "py-18 sm:py-24 lg:py-32",
};

export function Section({
  background = "white",
  spacing = "md",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative isolate",
        backgroundClasses[background],
        spacingClasses[spacing],
        className,
      )}
      {...props}
    />
  );
}
