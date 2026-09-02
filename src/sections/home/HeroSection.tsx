import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Building2, Calculator, ShieldCheck } from "lucide-react";
import { Container } from "../../components/common/Container";
import { ResponsiveImage } from "../../components/common/ResponsiveImage";
import { Button } from "../../components/ui/Button";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import heroDubai from "../../assets/images/home/hero-dubai.jpg";
import heroDubai768 from "../../assets/images/home/hero-dubai-768.jpg";
import heroDubai1200 from "../../assets/images/home/hero-dubai-1200.jpg";

const consultationMessage =
  "Hello DGNS Advisors, I would like a free consultation regarding UAE business setup and advisory services.";

const expertise = [
  { label: "Business Setup", icon: Building2 },
  { label: "Tax Compliance", icon: ShieldCheck },
  { label: "Accounting Support", icon: Calculator },
] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const transition = (delay: number) => ({
    duration: reduceMotion ? 0 : 0.55,
    delay: reduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });
  const reveal = reduceMotion ? false : { opacity: 0, y: 18 };

  return (
    <section
      className="home-hero-grid relative isolate overflow-hidden bg-deep-green text-white"
      aria-labelledby="home-hero-title"
    >
      <div
        aria-hidden="true"
        className="absolute -right-56 -top-56 size-[38rem] rounded-full border border-brand-lime/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-16 size-[24rem] rounded-full border border-brand-lime/10"
      />

      <Container className="relative grid items-center gap-12 py-14 sm:py-18 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14 lg:py-20 nav:min-h-[calc(100svh-5.25rem)]">
        <div className="relative z-10 min-w-0 max-w-3xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition(0.04)}
            className="type-label flex items-start gap-3 text-[0.66rem] tracking-[0.11em] text-brand-lime sm:text-xs sm:tracking-[0.14em]"
          >
            <span className="mt-[0.3rem] size-1.5 shrink-0 rounded-full bg-brand-lime" />
            <span>UAE Business Setup • Accounting • Tax • Advisory</span>
          </motion.p>

          <motion.h1
            id="home-hero-title"
            initial={reveal}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.12)}
            className="mt-6 max-w-3xl text-[clamp(2.8rem,6vw,5.7rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-balance"
          >
            Build Your Business in the UAE With Confidence
          </motion.h1>

          <motion.p
            initial={reveal}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.2)}
            className="mt-7 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8"
          >
            From company formation to accounting, VAT and corporate tax, DGNS
            Advisors helps businesses start, manage and grow in the UAE with
            reliable end-to-end support.
          </motion.p>

          <motion.div
            initial={reveal}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.28)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <WhatsAppCTA
              label="Get Free Consultation"
              message={consultationMessage}
              variant="primary"
              className="w-full sm:w-auto"
            />
            <Button
              href="#services"
              variant="secondary"
              className="w-full border-white/26 text-white hover:border-white hover:bg-white hover:text-deep-green sm:w-auto"
            >
              Explore Our Services
              <ArrowDown aria-hidden="true" className="size-4" />
            </Button>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition(0.36)}
            className="mt-8 max-w-2xl text-xs font-semibold leading-6 tracking-[0.04em] text-white/62 sm:text-sm"
          >
            Business Setup <span className="px-1.5 text-brand-lime">•</span>{" "}
            Accounting <span className="px-1.5 text-brand-lime">•</span>{" "}
            Bookkeeping <span className="px-1.5 text-brand-lime">•</span> VAT{" "}
            <span className="px-1.5 text-brand-lime">•</span> Corporate Tax{" "}
            <span className="px-1.5 text-brand-lime">•</span> Advisory
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition(0.18)}
          className="relative mx-auto min-w-0 w-full max-w-[38rem] lg:mx-0 lg:ml-auto"
        >
          <div className="absolute -inset-3 rounded-[2.25rem] border border-white/10" />
          <ResponsiveImage
            src={heroDubai}
            srcSet={`${heroDubai768} 768w, ${heroDubai1200} 1200w, ${heroDubai} 1535w`}
            sizes="(max-width: 1023px) calc(100vw - 2rem), 46vw"
            width={1535}
            height={1024}
            alt="Contemporary Dubai skyline and architecture"
            loading="eager"
            fetchPriority="high"
            rounded="2xl"
            wrapperClassName="aspect-[4/4.7] bg-emerald shadow-[0_32px_80px_rgba(2,18,15,0.42)] sm:aspect-[4/4.3]"
            className="object-[54%_center]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(180deg,rgba(11,53,45,0.05)_28%,rgba(11,53,45,0.88)_100%)]"
          />

          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/12 bg-deep-green/86 p-4 shadow-soft backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
            <p className="type-label text-brand-lime">Start • Manage • Grow</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {expertise.map(({ label, icon: Icon }) => (
                <div key={label} className="min-w-0">
                  <Icon aria-hidden="true" className="mb-2 size-4 text-brand-lime" />
                  <p className="text-[0.66rem] font-semibold leading-snug text-white/74 sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
