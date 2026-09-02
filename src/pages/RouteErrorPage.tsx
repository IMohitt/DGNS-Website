import { AlertTriangle, Home } from "lucide-react";

import { Container } from "../components/common/Container";
import { PageMeta } from "../components/common/PageMeta";
import { Section } from "../components/common/Section";
import { Button } from "../components/ui/Button";
import { WhatsAppCTA } from "../components/ui/WhatsAppCTA";

const routeErrorMessage =
  "Hello DGNS Advisors, I encountered a problem while using the website and would like assistance.";

export function RouteErrorPage() {
  return (
    <>
      <PageMeta
        title="Website Error | DGNS Advisors"
        description="An unexpected website error occurred. Refresh the page or contact DGNS Advisors for assistance."
        noIndex
      />
      <Section
        background="deep-green"
        spacing="lg"
        className="brand-grid min-h-[65vh] overflow-hidden"
        aria-labelledby="route-error-title"
      >
        <Container className="flex min-h-[28rem] items-center justify-center text-center">
          <div className="max-w-2xl">
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-lime text-deep-green">
              <AlertTriangle aria-hidden="true" className="size-6" />
            </span>
            <p className="type-label mt-6 text-brand-lime">Website support</p>
            <h1
              id="route-error-title"
              className="type-h1 mt-5 text-balance text-white"
            >
              Something went wrong.
            </h1>
            <p className="type-body-large mx-auto mt-6 max-w-xl text-white/68">
              Please refresh the page or contact DGNS Advisors for assistance.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/" variant="primary">
                <Home aria-hidden="true" className="size-4" />
                Back to Home
              </Button>
              <WhatsAppCTA
                label="Contact DGNS"
                message={routeErrorMessage}
                variant="secondary"
                className="border-white/28 text-white hover:border-white hover:bg-white hover:text-deep-green"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
