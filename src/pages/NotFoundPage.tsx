import { ArrowLeft } from "lucide-react";
import { Container } from "../components/common/Container";
import { PageMeta } from "../components/common/PageMeta";
import { Section } from "../components/common/Section";
import { Button } from "../components/ui/Button";
import { WhatsAppCTA } from "../components/ui/WhatsAppCTA";
import { notFoundRouteMeta } from "../config/routeMeta";

const notFoundWhatsAppMessage =
  "Hello DGNS Advisors, I need help finding information on your website.";

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title={notFoundRouteMeta.title}
        description={notFoundRouteMeta.description}
        noIndex
      />
      <Section
        background="deep-green"
        spacing="lg"
        className="brand-grid min-h-[65vh] overflow-hidden"
        aria-labelledby="not-found-title"
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 top-1/2 size-[26rem] -translate-y-1/2 rounded-full border border-brand-lime/10"
        />
        <div
          aria-hidden="true"
          className="absolute -left-16 bottom-10 size-52 rounded-full border border-white/8"
        />
        <Container className="relative flex min-h-[28rem] items-center justify-center text-center">
          <div className="max-w-3xl">
            <p className="text-[clamp(5rem,16vw,10rem)] font-semibold leading-none tracking-[-0.07em] text-brand-lime/16">
              404
            </p>
            <p className="type-label -mt-4 text-brand-lime sm:-mt-7">
              Page not found
            </p>
            <h1
              id="not-found-title"
              className="type-h1 mt-5 text-balance text-white"
            >
              Looks Like This Page Took a Detour
            </h1>
            <p className="type-body-large mx-auto mt-6 max-w-xl text-white/68">
              The page you&apos;re looking for may have moved or no longer exists.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <Button
                to="/"
                variant="secondary"
                className="border-white/28 text-white hover:border-white hover:bg-white hover:text-deep-green"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                Back to Home
              </Button>
              <WhatsAppCTA
                label="Talk to DGNS"
                message={notFoundWhatsAppMessage}
                variant="primary"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
