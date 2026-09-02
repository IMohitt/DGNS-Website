import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { CSSProperties } from "react";
import { Container } from "../common/Container";
import { ResponsiveImage } from "../common/ResponsiveImage";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";
import { cn } from "../../utils/cn";
import {
  ServiceBreadcrumbs,
  type BreadcrumbItem,
} from "./ServiceBreadcrumbs";

export type ServiceHeroTone = "deep" | "light" | "charcoal" | "sage";

type ServiceHeroProps = {
  breadcrumbs: readonly BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaMessage: string;
  image: string;
  imageAlt: string;
  imageSrcSet?: string;
  imageSizes?: string;
  imageWidth?: number;
  imageHeight?: number;
  imagePosition?: CSSProperties["objectPosition"];
  highlights?: readonly string[];
  tone?: ServiceHeroTone;
  mediaSide?: "left" | "right";
};

export function ServiceHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaMessage,
  image,
  imageAlt,
  imageSrcSet,
  imageSizes = "(max-width: 1023px) calc(100vw - 2rem), 46vw",
  imageWidth,
  imageHeight,
  imagePosition,
  highlights = [],
  tone = "deep",
  mediaSide = "right",
}: ServiceHeroProps) {
  const reduceMotion = useReducedMotion();
  const inverse = tone === "deep" || tone === "charcoal";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        tone === "deep" && "bg-deep-green text-white",
        tone === "charcoal" && "bg-charcoal text-white",
        tone === "light" && "bg-white text-charcoal",
        tone === "sage" &&
          "bg-[linear-gradient(140deg,#F7F8F5_0%,#EDF6E6_100%)] text-charcoal",
      )}
      aria-labelledby="service-page-title"
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute -right-48 -top-56 size-[38rem] rounded-full border",
          inverse ? "border-brand-lime/10" : "border-deep-green/8",
        )}
      />
      <Container className="relative py-10 sm:py-14 lg:py-18">
        <ServiceBreadcrumbs items={breadcrumbs} inverse={inverse} />

        <div className="mt-10 grid min-w-0 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "min-w-0",
              mediaSide === "left" && "lg:order-2",
            )}
          >
            <p
              className={cn(
                "type-label",
                inverse ? "text-brand-lime" : "text-emerald",
              )}
            >
              {eyebrow}
            </p>
            <h1
              id="service-page-title"
              className={cn(
                "mt-5 max-w-4xl text-[clamp(2.75rem,5.4vw,5rem)] font-semibold leading-[1.01] tracking-[-0.052em] text-balance",
                inverse ? "text-white" : "text-deep-green",
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "mt-6 max-w-2xl text-base leading-8 sm:text-lg",
                inverse ? "text-white/68" : "text-muted",
              )}
            >
              {description}
            </p>
            <WhatsAppCTA
              label={ctaLabel}
              message={ctaMessage}
              variant={inverse ? "primary" : "dark"}
              className="mt-8 w-full sm:w-auto"
            />

            {highlights.length ? (
              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "flex items-center gap-2 text-sm font-semibold",
                      inverse ? "text-white/65" : "text-deep-green/72",
                    )}
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className={cn(
                        "size-4 shrink-0",
                        inverse ? "text-brand-lime" : "text-soft-green",
                      )}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.62,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "relative min-w-0",
              mediaSide === "left" && "lg:order-1",
            )}
          >
            <div
              aria-hidden="true"
              className={cn(
                "absolute -inset-3 rounded-[2.2rem] border",
                inverse ? "border-white/10" : "border-deep-green/10",
              )}
            />
            <ResponsiveImage
              src={image}
              srcSet={imageSrcSet}
              sizes={imageSizes}
              width={imageWidth}
              height={imageHeight}
              alt={imageAlt}
              loading="eager"
              fetchPriority="high"
              rounded="2xl"
              wrapperClassName="aspect-[4/3.55] min-h-[23rem] bg-deep-green shadow-[0_28px_70px_rgba(5,26,22,0.22)] sm:min-h-[29rem] lg:min-h-0 lg:aspect-[4/4.15]"
              style={{ objectPosition: imagePosition }}
            />
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-0 rounded-2xl",
                inverse
                  ? "bg-[linear-gradient(180deg,rgba(11,53,45,0.02),rgba(11,53,45,0.42))]"
                  : "bg-[linear-gradient(180deg,transparent_62%,rgba(11,53,45,0.15))]",
              )}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
