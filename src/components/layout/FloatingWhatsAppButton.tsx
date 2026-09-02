import { MessageCircle } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { buildWhatsAppUrl } from "../../utils/whatsapp";
import { cn } from "../../utils/cn";

const defaultWhatsAppMessage =
  "Hello DGNS Advisors, I would like to know more about your services.";

const pageWhatsAppMessages: Readonly<Record<string, string>> = {
  "/services":
    "Hello DGNS Advisors, I would like help choosing the right service for my business.",
  "/services/business-setup":
    "Hello DGNS Advisors, I would like to discuss UAE business setup and company formation.",
  "/services/accounting-bookkeeping":
    "Hello DGNS Advisors, I would like to discuss accounting and bookkeeping support for my business.",
  "/services/vat":
    "Hello DGNS Advisors, I would like to discuss VAT registration, filing or compliance support.",
  "/services/corporate-tax":
    "Hello DGNS Advisors, I would like to discuss Corporate Tax support for my business.",
  "/services/advisory":
    "Hello DGNS Advisors, I would like to discuss business and financial advisory support.",
  "/business-setup":
    "Hello DGNS Advisors, I would like guidance regarding setting up a business in the UAE.",
  "/business-setup/mainland":
    "Hello DGNS Advisors, I would like to discuss UAE Mainland company formation.",
  "/business-setup/mainland/dubai":
    "Hello DGNS Advisors, I am interested in Dubai Mainland company formation and would like a consultation.",
  "/business-setup/mainland/abu-dhabi":
    "Hello DGNS Advisors, I would like information regarding Abu Dhabi Mainland business setup.",
  "/business-setup/mainland/sharjah":
    "Hello DGNS Advisors, I would like information about Sharjah Mainland company formation.",
  "/business-setup/mainland/ajman":
    "Hello DGNS Advisors, I would like guidance regarding Ajman Mainland company formation.",
  "/business-setup/free-zone":
    "Hello DGNS Advisors, I would like help selecting and setting up a UAE Free Zone company.",
  "/about":
    "Hello DGNS Advisors, I would like to speak with your team regarding your business services.",
  "/contact":
    "Hello DGNS Advisors, I would like to discuss my business requirements.",
  "/tour-travels":
    "Hello DGNS Advisors, I would like help planning a UAE travel experience.",
  "/tour-travels/destinations":
    "Hello DGNS Advisors, I would like help planning a visit to a UAE destination.",
  "/tour-travels/experiences":
    "Hello DGNS Advisors, I would like help choosing UAE travel experiences.",
  "/tour-travels/packages":
    "Hello DGNS Advisors, I would like information about your UAE travel packages.",
};

export type FloatingWhatsAppButtonProps = {
  className?: string;
};

export function FloatingWhatsAppButton({
  className,
}: FloatingWhatsAppButtonProps) {
  const { pathname } = useLocation();
  const rootRef = useRef<HTMLDivElement>(null);
  const [isSuppressed, setIsSuppressed] = useState(false);
  const tooltipId = `whatsapp-tooltip-${useId().replaceAll(":", "")}`;
  const message = pageWhatsAppMessages[pathname] ?? defaultWhatsAppMessage;
  const shouldSuppress =
    isSuppressed || pathname === "/privacy-policy" || pathname === "/terms";

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof document === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 639px)");
    const observedElements = new Set<Element>();
    const intersectionState = new Map<Element, boolean>();
    let intersectionObserver: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const updateSuppressedState = () => {
      setIsSuppressed(
        Array.from(intersectionState.values()).some(Boolean),
      );
    };

    const stopObserving = () => {
      intersectionObserver?.disconnect();
      mutationObserver?.disconnect();
      intersectionObserver = null;
      mutationObserver = null;
      observedElements.clear();
      intersectionState.clear();
    };

    const startObserving = () => {
      stopObserving();

      if (!mobileQuery.matches) {
        setIsSuppressed(false);
        return;
      }

      intersectionObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          intersectionState.set(entry.target, entry.isIntersecting);
        }

        updateSuppressedState();
      });

      const syncTargets = () => {
        const root = rootRef.current;
        if (!root || !intersectionObserver) return;

        const nextTargets = new Set(
          Array.from(
            document.querySelectorAll(
              'form, footer, a[href^="https://wa.me/"]',
            ),
          ).filter((element) => !root.contains(element)),
        );

        for (const element of observedElements) {
          if (!nextTargets.has(element) || !element.isConnected) {
            intersectionObserver.unobserve(element);
            observedElements.delete(element);
            intersectionState.delete(element);
          }
        }

        for (const element of nextTargets) {
          if (!observedElements.has(element)) {
            observedElements.add(element);
            intersectionState.set(element, false);
            intersectionObserver.observe(element);
          }
        }

        updateSuppressedState();
      };

      syncTargets();
      mutationObserver = new MutationObserver(syncTargets);
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    };

    startObserving();
    mobileQuery.addEventListener("change", startObserving);

    return () => {
      mobileQuery.removeEventListener("change", startObserving);
      stopObserving();
    };
  }, [pathname]);

  return (
    <div
      ref={rootRef}
      aria-hidden={shouldSuppress || undefined}
      className={cn(
        "floating-whatsapp group fixed z-40 flex items-center transition-[opacity,transform] duration-200",
        shouldSuppress && "pointer-events-none translate-y-2 opacity-0",
        className,
      )}
    >
      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-charcoal px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-soft transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 sm:block"
      >
        Chat with DGNS
      </span>
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DGNS on WhatsApp"
        aria-describedby={tooltipId}
        tabIndex={shouldSuppress ? -1 : undefined}
        className="whatsapp-pulse relative inline-flex size-14 items-center justify-center rounded-full bg-brand-lime text-deep-green shadow-soft transition-transform duration-200 hover:scale-105 active:scale-95 sm:size-16"
      >
        <MessageCircle aria-hidden="true" className="size-6 sm:size-7" strokeWidth={2.2} />
      </a>
    </div>
  );
}
