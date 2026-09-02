import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { CSSProperties } from "react";

import { Container } from "../common/Container";
import { ResponsiveImage } from "../common/ResponsiveImage";
import { ServiceBreadcrumbs, type BreadcrumbItem } from "../services";
import { Button } from "../ui/Button";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";
import { cn } from "../../utils/cn";

export type BusinessSetupHeroTone = "deep" | "charcoal" | "light" | "sage";
export type BusinessSetupHeroLayout = "split" | "image-left" | "panorama" | "offset";

type BusinessSetupHeroProps = {
  breadcrumbs: readonly BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaMessage: string;
  image: string;
  imageSrcSet?: string;
  imageSizes?: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  imagePosition?: CSSProperties["objectPosition"];
  highlights?: readonly string[];
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryTo?: string;
  tone?: BusinessSetupHeroTone;
  layout?: BusinessSetupHeroLayout;
};

export function BusinessSetupHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaMessage,
  image,
  imageSrcSet,
  imageSizes = "(max-width: 1023px) calc(100vw - 2rem), 48vw",
  imageWidth,
  imageHeight,
  imageAlt,
  imagePosition = "center",
  highlights = [],
  secondaryLabel,
  secondaryHref,
  secondaryTo,
  tone = "deep",
  layout = "split",
}: BusinessSetupHeroProps) {
  const reduceMotion = useReducedMotion();
  const inverse = tone === "deep" || tone === "charcoal" || layout === "panorama";
  const mediaLeft = layout === "image-left";

  const textContent = (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.56,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("relative z-10 min-w-0", mediaLeft && "lg:order-2")}
    >
      <p className={cn("type-label", inverse ? "text-brand-lime" : "text-emerald")}>{eyebrow}</p>
      <h1
        id="business-setup-page-title"
        className={cn(
          "mt-5 max-w-5xl text-[clamp(2.65rem,5.5vw,5.2rem)] font-semibold leading-[1.01] tracking-[-0.052em] text-balance",
          inverse ? "text-white" : "text-deep-green",
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          "mt-6 max-w-2xl text-base leading-8 sm:text-lg",
          inverse ? "text-white/70" : "text-muted",
        )}
      >
        {description}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <WhatsAppCTA
          label={ctaLabel}
          message={ctaMessage}
          variant={inverse ? "primary" : "dark"}
          className="w-full sm:w-auto"
        />
        {secondaryLabel && secondaryHref ? (
          <Button
            href={secondaryHref}
            variant="secondary"
            className={cn(
              "w-full sm:w-auto",
              inverse && "border-white/36 text-white hover:border-white hover:bg-white hover:text-deep-green",
            )}
          >
            {secondaryLabel}
            <span aria-hidden="true">↓</span>
          </Button>
        ) : null}
        {secondaryLabel && secondaryTo ? (
          <Button
            to={secondaryTo}
            variant="secondary"
            className={cn(
              "w-full sm:w-auto",
              inverse && "border-white/36 text-white hover:border-white hover:bg-white hover:text-deep-green",
            )}
          >
            {secondaryLabel}
            <span aria-hidden="true">→</span>
          </Button>
        ) : null}
      </div>

      {highlights.length ? (
        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className={cn(
                "flex items-center gap-2 text-sm font-semibold",
                inverse ? "text-white/68" : "text-deep-green/74",
              )}
            >
              <CheckCircle2
                aria-hidden="true"
                className={cn("size-4 shrink-0", inverse ? "text-brand-lime" : "text-emerald")}
              />
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.div>
  );

  if (layout === "panorama") {
    return (
      <section
        className="relative isolate overflow-hidden bg-charcoal text-white"
        aria-labelledby="business-setup-page-title"
      >
        <ResponsiveImage
          src={image}
          srcSet={imageSrcSet}
          sizes="100vw"
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
          loading="eager"
          fetchPriority="high"
          rounded="none"
          wrapperClassName="absolute inset-0 h-full w-full"
          style={{ objectPosition: imagePosition }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[rgba(8,32,27,0.86)] lg:bg-[linear-gradient(90deg,rgba(8,32,27,0.94)_0%,rgba(8,32,27,0.79)_48%,rgba(8,32,27,0.34)_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 home-hero-grid opacity-25" />
        <Container className="relative py-10 sm:py-14 lg:py-18">
          <ServiceBreadcrumbs items={breadcrumbs} inverse />
          <div className="flex min-h-[35rem] items-end pb-4 pt-20 sm:min-h-[39rem] lg:max-w-[68%] lg:pt-28">
            {textContent}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        tone === "deep" && "bg-deep-green text-white",
        tone === "charcoal" && "bg-charcoal text-white",
        tone === "light" && "bg-white text-charcoal",
        tone === "sage" && "bg-[linear-gradient(140deg,#F7F8F5_0%,#EDF6E6_100%)] text-charcoal",
      )}
      aria-labelledby="business-setup-page-title"
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute -right-48 -top-52 size-[38rem] rounded-full border",
          inverse ? "border-brand-lime/10" : "border-deep-green/8",
        )}
      />
      <Container className="relative py-10 sm:py-14 lg:py-18">
        <ServiceBreadcrumbs items={breadcrumbs} inverse={inverse} />
        <div
          className={cn(
            "mt-10 grid min-w-0 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16",
            layout === "offset" && "lg:grid-cols-[0.9fr_1.1fr] lg:gap-20",
          )}
        >
          {textContent}
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
              mediaLeft && "lg:order-1",
              layout === "offset" && "lg:translate-y-8",
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
              wrapperClassName={cn(
                "aspect-[4/3.45] min-h-[22rem] bg-deep-green shadow-[0_28px_70px_rgba(5,26,22,0.22)] sm:min-h-[28rem] lg:min-h-0",
                layout === "offset" ? "lg:aspect-[4/4.35]" : "lg:aspect-[4/4]",
              )}
              style={{ objectPosition: imagePosition }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
