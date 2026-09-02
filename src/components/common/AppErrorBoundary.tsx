import { Component, type ErrorInfo, type ReactNode } from "react";

import { siteConfig } from "../../config/siteConfig";
import { buildWhatsAppUrl } from "../../utils/whatsapp";

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

const supportMessage =
  "Hello DGNS Advisors, I encountered a problem while using the website and would like assistance.";
const errorTitle = "Website Error | DGNS Advisors";
const errorDescription =
  "Something went wrong. Please refresh the page or contact DGNS Advisors.";

function setMetaContent(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.content = content;
}

export class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    document.title = errorTitle;
    setMetaContent("name", "description", errorDescription);
    setMetaContent("name", "robots", "noindex, nofollow");
    setMetaContent("name", "twitter:title", errorTitle);
    setMetaContent("name", "twitter:description", errorDescription);
    setMetaContent("property", "og:title", errorTitle);
    setMetaContent("property", "og:description", errorDescription);
    document.head.querySelector('link[rel="canonical"]')?.remove();
    document.head.querySelector('meta[property="og:url"]')?.remove();
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main className="grid min-h-screen place-items-center bg-deep-green px-5 py-16 text-white">
        <section
          role="alert"
          aria-labelledby="application-error-title"
          className="w-full max-w-2xl rounded-[2rem] border border-white/12 bg-white/[0.06] p-7 text-center shadow-soft sm:p-12"
        >
          <p className="type-label text-brand-lime">DGNS Advisors</p>
          <h1
            id="application-error-title"
            className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl"
          >
            Something went wrong.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/68 sm:text-lg">
            Please refresh the page or contact {siteConfig.shortName} for
            assistance.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-lime px-6 py-3 text-sm font-bold text-deep-green transition-colors hover:bg-white"
            >
              Back to Home
            </a>
            <a
              href={buildWhatsAppUrl(supportMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/28 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-brand-lime hover:text-brand-lime"
            >
              Contact DGNS
            </a>
          </div>
        </section>
      </main>
    );
  }
}
