import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

export type SectionHeadingAlign = "left" | "center";
export type SectionHeadingLevel = "h1" | "h2" | "h3";

export interface SectionHeadingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  align?: SectionHeadingAlign;
  inverse?: boolean;
  titleAs?: SectionHeadingLevel;
  headingId?: string;
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "left",
  inverse = false,
  titleAs = "h2",
  headingId,
  className,
  ...props
}: SectionHeadingProps) {
  const Heading = titleAs;

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-bold tracking-[0.18em] uppercase sm:text-sm",
            inverse ? "text-brand-lime" : "text-emerald",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <Heading
        id={headingId}
        className={cn(
          "text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] font-semibold tracking-[-0.035em] text-balance",
          inverse ? "text-white" : "text-deep-green",
        )}
      >
        {title}
      </Heading>

      {description ? (
        <div
          className={cn(
            "mt-5 text-base leading-7 text-pretty sm:text-lg sm:leading-8",
            inverse ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
