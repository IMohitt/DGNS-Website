import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { Container } from "../common/Container";
import { ResponsiveImage } from "../common/ResponsiveImage";
import { ServiceBreadcrumbs } from "../services/ServiceBreadcrumbs";
import { Button } from "../ui/Button";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";

type ContactHeroProps = {
  message: string;
  image: string;
  imageSrcSet: string;
  imageWidth: number;
  imageHeight: number;
};

export function ContactHero({
  message,
  image,
  imageSrcSet,
  imageWidth,
  imageHeight,
}: ContactHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-deep-green text-white"
      aria-labelledby="contact-page-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(155,232,61,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(155,232,61,0.055)_1px,transparent_1px)] [background-size:68px_68px]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-52 top-28 size-[34rem] rounded-full border border-brand-lime/10"
      />

      <Container className="relative py-10 sm:py-14 lg:py-18">
        <ServiceBreadcrumbs
          items={[{ label: "Home", to: "/" }, { label: "Contact" }]}
          inverse
        />

        <div className="mt-10 grid min-w-0 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.56,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 min-w-0"
          >
            <p className="type-label text-brand-lime">CONTACT DGNS ADVISORS</p>
            <h1
              id="contact-page-title"
              className="mt-5 max-w-4xl text-[clamp(2.65rem,5.5vw,5.15rem)] font-semibold leading-[1.01] tracking-[-0.052em] text-balance"
            >
              Let&apos;s Build Something Successful Together
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Whether you are planning a UAE company, need accounting support, or
              want help with VAT or corporate tax, our team is ready to understand
              your requirements.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppCTA
                label="Chat on WhatsApp"
                message={message}
                variant="primary"
                className="w-full sm:w-auto"
              />
              <Button
                href="#consultation"
                variant="secondary"
                className="w-full border-white/34 text-white hover:border-white hover:bg-white hover:text-deep-green sm:w-auto"
              >
                Use Consultation Form
                <ArrowDown aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.64,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden min-w-0 pb-5 pl-0 sm:block sm:pl-5 lg:pb-8"
          >
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-5 top-5 rounded-[2.2rem] border border-brand-lime/18 bg-brand-lime/[0.07]"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-charcoal shadow-[0_28px_80px_rgba(3,20,17,0.32)]">
              <ResponsiveImage
                src={image}
                srcSet={imageSrcSet}
                sizes="(max-width: 1023px) calc(100vw - 2rem), 52vw"
                width={imageWidth}
                height={imageHeight}
                alt="Contemporary Dubai skyline representing DGNS Advisors' UAE business location"
                loading="eager"
                fetchPriority="high"
                rounded="none"
                wrapperClassName="aspect-[16/9] sm:aspect-[16/11] lg:aspect-[4/3.6]"
                style={{ objectPosition: "center 54%" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,29,24,0.78)_100%)]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 sm:p-8">
                <div>
                  <p className="type-label text-brand-lime">Dubai • UAE</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/72">
                    Business setup, accounting, tax and advisory support in one
                    conversation.
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-white/18 bg-white/10 text-brand-lime"
                >
                  ↗
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
