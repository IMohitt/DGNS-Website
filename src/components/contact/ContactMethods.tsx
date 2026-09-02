import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { siteConfig } from "../../config/siteConfig";
import { buildGoogleMapsSearchUrl } from "../../utils/maps";
import { buildWhatsAppUrl } from "../../utils/whatsapp";
import { cn } from "../../utils/cn";
import { Container } from "../common/Container";
import { ScrollReveal } from "../common/ScrollReveal";

type ContactMethod = {
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

type ContactMethodsProps = {
  whatsappMessage: string;
  headingId?: string;
};

export function ContactMethods({
  whatsappMessage,
  headingId = "contact-methods-title",
}: ContactMethodsProps) {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const methods: readonly ContactMethod[] = [
    {
      title: "WhatsApp",
      value: "Chat With DGNS",
      href: buildWhatsAppUrl(whatsappMessage),
      icon: MessageCircle,
      external: true,
    },
    {
      title: "Call",
      value: siteConfig.phone,
      href: phoneHref,
      icon: Phone,
    },
    {
      title: "Email",
      value: siteConfig.primaryEmail,
      href: `mailto:${siteConfig.primaryEmail}`,
      icon: Mail,
    },
    {
      title: "Office",
      value: siteConfig.location,
      href: buildGoogleMapsSearchUrl(),
      icon: MapPin,
      external: true,
    },
  ];

  return (
    <section
      className="border-y border-deep-green/10 bg-white"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="sr-only">
        Contact DGNS Advisors
      </h2>
      <Container>
        <div className="grid grid-cols-2 xl:grid-cols-4">
          {methods.map((method, index) => {
            const Icon = method.icon;

            return (
              <ScrollReveal
                key={method.title}
                variant="fade"
                delay={index * 0.045}
                className="min-w-0"
              >
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "group relative flex min-h-[9.5rem] min-w-0 flex-col items-start gap-3 px-3 py-5 transition-colors sm:min-h-[10rem] sm:flex-row sm:gap-4 sm:px-6 sm:py-7 xl:min-h-[11rem] xl:px-7 xl:py-8",
                    index < 2 && "border-b border-deep-green/10 xl:border-b-0",
                    index % 2 === 0 && "border-r border-deep-green/10",
                    index === 1 && "xl:border-r",
                    index === 2 && "xl:border-r",
                  )}
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-deep-green text-brand-lime transition-colors group-hover:bg-brand-lime group-hover:text-deep-green">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="type-label text-emerald">
                      {method.title}
                    </span>
                    <span className="mt-2 block break-words text-xs font-semibold leading-5 text-deep-green sm:mt-3 sm:text-sm sm:leading-6 xl:text-base">
                      {method.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="absolute right-3 top-5 size-4 shrink-0 text-emerald transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:static sm:mt-1"
                  />
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
