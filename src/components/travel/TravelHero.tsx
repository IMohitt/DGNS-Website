import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { TravelImageAsset } from "../../data/destinations";
import { cn } from "../../utils/cn";
import { Container } from "../common/Container";
import { ResponsiveImage } from "../common/ResponsiveImage";
import {
  ServiceBreadcrumbs,
  type BreadcrumbItem,
} from "../services/ServiceBreadcrumbs";
import { Button } from "../ui/Button";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";

export type TravelHeroVariant = "cinematic" | "editorial";

export type TravelHeroPrimaryAction = {
  label: string;
  to: string;
};

export type TravelHeroWhatsAppAction = {
  label: string;
  message: string;
};

export type TravelHeroProps = {
  breadcrumbs: readonly BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  image: TravelImageAsset;
  primaryAction?: TravelHeroPrimaryAction;
  whatsappAction?: TravelHeroWhatsAppAction;
  variant?: TravelHeroVariant;
  className?: string;
};

const heroTitleId = "travel-page-title";

export function TravelHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  image,
  primaryAction,
  whatsappAction,
  variant = "cinematic",
  className,
}: TravelHeroProps) {
  const reduceMotion = useReducedMotion();

  const actions =
    primaryAction || whatsappAction ? (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.48,
          delay: reduceMotion ? 0 : 0.16,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      >
        {primaryAction ? (
          <Button
            to={primaryAction.to}
            variant={variant === "cinematic" ? "primary" : "dark"}
            size="lg"
            className="w-full sm:w-auto"
          >
            {primaryAction.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        ) : null}
        {whatsappAction ? (
          <WhatsAppCTA
            label={whatsappAction.label}
            message={whatsappAction.message}
            variant={
              !primaryAction
                ? variant === "cinematic"
                  ? "primary"
                  : "dark"
                : "secondary"
            }
            className={cn(
              "min-h-13 w-full px-7 sm:w-auto",
              variant === "cinematic" && primaryAction &&
                "border-white/38 text-white hover:border-white hover:bg-white hover:text-deep-green",
            )}
          />
        ) : null}
      </motion.div>
    ) : null;

  const text = (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 min-w-0"
    >
      <p
        className={cn(
          "type-label",
          variant === "cinematic" ? "text-brand-lime" : "text-emerald",
        )}
      >
        {eyebrow}
      </p>
      <h1
        id={heroTitleId}
        className={cn(
          "mt-5 max-w-5xl text-[clamp(2.75rem,6vw,5.8rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-balance",
          variant === "cinematic" ? "text-white" : "text-deep-green",
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          "mt-6 max-w-2xl text-base leading-8 sm:text-lg",
          variant === "cinematic" ? "text-white/74" : "text-muted",
        )}
      >
        {description}
      </p>
      {actions}
    </motion.div>
  );

  if (variant === "editorial") {
    return (
      <section
        className={cn(
          "relative isolate overflow-hidden bg-[#F3EBDD] text-charcoal",
          className,
        )}
        aria-labelledby={heroTitleId}
      >
        <div
          aria-hidden="true"
          className="absolute -left-44 -top-56 size-[34rem] rounded-full border border-deep-green/8"
        />
        <Container className="relative py-9 sm:py-12 lg:py-18">
          <ServiceBreadcrumbs items={breadcrumbs} />
          <div className="mt-10 grid min-w-0 items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            {text}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.72,
                delay: reduceMotion ? 0 : 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-w-0 lg:translate-y-5"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2.25rem] border border-deep-green/10"
              />
              <ResponsiveImage
                src={image.src}
                srcSet={image.srcSet}
                sizes="(max-width: 1023px) calc(100vw - 2rem), 54vw"
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading="eager"
                fetchPriority="high"
                rounded="2xl"
                wrapperClassName="aspect-[4/3.35] w-full bg-deep-green shadow-[0_32px_80px_-34px_rgba(11,53,45,0.58)] sm:min-h-[28rem] lg:min-h-0 lg:aspect-[4/3.75]"
                style={{ objectPosition: image.objectPosition }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(180deg,transparent_62%,rgba(11,53,45,0.18))]"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative isolate min-h-[42rem] overflow-hidden bg-charcoal text-white sm:min-h-[46rem] lg:min-h-[50rem]",
        className,
      )}
      aria-labelledby={heroTitleId}
    >
      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <ResponsiveImage
          src={image.src}
          srcSet={image.srcSet}
          sizes="100vw"
          width={image.width}
          height={image.height}
          alt=""
          loading="eager"
          fetchPriority="high"
          rounded="none"
          wrapperClassName="h-full w-full"
          style={{ objectPosition: image.objectPosition }}
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,26,22,0.94)_0%,rgba(7,35,29,0.82)_48%,rgba(5,24,20,0.35)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,24,20,0.38)_0%,transparent_34%,rgba(5,24,20,0.58)_100%)]"
      />

      <Container className="relative flex min-h-[42rem] flex-col py-9 sm:min-h-[46rem] sm:py-12 lg:min-h-[50rem] lg:py-16">
        <ServiceBreadcrumbs items={breadcrumbs} inverse />
        <div className="flex flex-1 items-end pb-5 pt-20 sm:pb-8 lg:max-w-[72%] lg:pb-12 lg:pt-28">
          {text}
        </div>
      </Container>
    </section>
  );
}
