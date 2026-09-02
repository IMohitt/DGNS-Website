import { Facebook, Instagram, Linkedin, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  footerNavigation,
  type NavItem,
} from "../../config/navigation";
import { siteConfig } from "../../config/siteConfig";
import { buildGoogleMapsSearchUrl } from "../../utils/maps";
import { buildWhatsAppUrl } from "../../utils/whatsapp";
import { Container } from "../common/Container";
import { Logo } from "./Logo";

const footerDescription =
  "Business setup, accounting, VAT, corporate tax and advisory support for businesses across the UAE.";

const footerWhatsAppMessage =
  "Hello DGNS Advisors, I would like to connect with your team.";

type FooterNavigationProps = {
  title: string;
  links: readonly NavItem[];
};

const socialOptions: readonly {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: Instagram },
  { label: "Facebook", href: siteConfig.socials.facebook, icon: Facebook },
];

function SocialLinks() {
  const visibleSocials = socialOptions.filter(
    (social) => social.href.trim().length > 0,
  );

  if (!visibleSocials.length) {
    return null;
  }

  return (
    <nav aria-label="Social media" className="mt-7 flex flex-wrap gap-2">
      {visibleSocials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow ${siteConfig.shortName} on ${social.label}`}
            className="grid size-11 place-items-center rounded-full border border-white/14 text-white/72 transition-colors hover:border-brand-lime hover:text-brand-lime"
          >
            <Icon aria-hidden="true" className="size-4" />
          </a>
        );
      })}
    </nav>
  );
}

function FooterNavigation({ title, links }: FooterNavigationProps) {
  return (
    <nav aria-label={`${title} footer navigation`}>
      <h2 className="type-label text-white">{title}</h2>
      <ul className="mt-5 grid gap-2.5">
        {links.map((link) => (
          <li key={`${link.label}-${link.to}`}>
            <Link
              to={link.to}
              className="inline-flex min-h-8 items-center text-sm text-white/68 transition-colors hover:text-brand-lime"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const telephoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const whatsappHref = buildWhatsAppUrl(footerWhatsAppMessage);
  const websiteLabel = siteConfig.website
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return (
    <footer className="bg-deep-green text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {siteConfig.shortName} footer
      </h2>

      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.85fr_0.9fr_1.25fr] lg:gap-8">
          <section aria-labelledby="footer-brand-heading" className="max-w-sm">
            <h3 id="footer-brand-heading" className="sr-only">
              {siteConfig.shortName}
            </h3>
            <Logo />
            <p className="mt-5 text-sm leading-7 text-white/68">
              {footerDescription}
            </p>
            <SocialLinks />
          </section>

          <FooterNavigation
            title="Business Setup"
            links={footerNavigation.businessSetup}
          />
          <FooterNavigation
            title="Services"
            links={footerNavigation.services}
          />
          <FooterNavigation
            title="Company"
            links={footerNavigation.company}
          />

          <section aria-labelledby="footer-contact-heading">
            <h2 id="footer-contact-heading" className="type-label text-white">
              Contact
            </h2>
            <address className="mt-5 grid gap-4 text-sm not-italic leading-6 text-white/68">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                  Phone
                </p>
                <a
                  href={telephoneHref}
                  className="mt-1 inline-flex min-h-8 items-center transition-colors hover:text-brand-lime"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                  WhatsApp
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex min-h-8 items-center transition-colors hover:text-brand-lime"
                >
                  Chat with DGNS
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.primaryEmail}`}
                  className="mt-1 block break-all transition-colors hover:text-brand-lime"
                >
                  {siteConfig.primaryEmail}
                </a>
                <a
                  href={`mailto:${siteConfig.secondaryEmail}`}
                  className="mt-1 block break-all transition-colors hover:text-brand-lime"
                >
                  {siteConfig.secondaryEmail}
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/62">
                  Office
                </p>
                <a
                  href={buildGoogleMapsSearchUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block transition-colors hover:text-brand-lime"
                >
                  {siteConfig.location}
                </a>
              </div>
            </address>
          </section>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-white/52 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>
          <a
            href={siteConfig.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors hover:text-brand-lime"
          >
            {websiteLabel}
          </a>
        </Container>
      </div>
    </footer>
  );
}
