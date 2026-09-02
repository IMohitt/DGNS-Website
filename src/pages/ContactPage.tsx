import {
  ArrowUpRight,
  ClipboardList,
  MessageCircle,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroDubai1200 from "../assets/images/home/hero-dubai-1200.jpg";
import heroDubai768 from "../assets/images/home/hero-dubai-768.jpg";
import heroDubai from "../assets/images/home/hero-dubai.jpg";
import locationDubai640 from "../assets/images/home/location-dubai-640.jpg";
import locationDubai from "../assets/images/home/location-dubai.jpg";
import {
  ContactForm,
  ContactHero,
  ContactMethods,
  OfficeLocation,
  QuickConsultationCards,
} from "../components/contact";
import { Container } from "../components/common/Container";
import { JsonLd } from "../components/common/JsonLd";
import { PageMeta } from "../components/common/PageMeta";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { Section } from "../components/common/Section";
import { SectionHeading } from "../components/common/SectionHeading";
import {
  ServiceFAQSection,
  ServiceFinalCTA,
} from "../components/services";
import { siteConfig } from "../config/siteConfig";
import {
  contactFaqs,
  contactMessages,
  contactPageDescription,
  contactPageTitle,
  quickConsultations,
} from "../data/contact";

const consultationSteps = [
  {
    number: "01",
    title: "Share the Context",
    description:
      "Tell us whether you are planning a company, managing an existing business or reviewing a compliance requirement.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Choose the Relevant Service",
    description:
      "Select business setup, accounting, VAT, Corporate Tax, advisory or another area so the enquiry is clear.",
    icon: Waypoints,
  },
  {
    number: "03",
    title: "Continue on WhatsApp",
    description:
      "The completed brief opens as a WhatsApp message, where the conversation can continue directly with DGNS Advisors.",
    icon: MessageCircle,
  },
] as const;

const contactServiceLinks = [
  { label: "Explore All Services", to: "/services" },
  { label: "UAE Business Setup", to: "/business-setup" },
  {
    label: "Accounting & Bookkeeping",
    to: "/services/accounting-bookkeeping",
  },
  { label: "VAT Services", to: "/services/vat" },
  { label: "Corporate Tax", to: "/services/corporate-tax" },
] as const;

const contactSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteConfig.website}#organization`,
  name: siteConfig.companyName,
  alternateName: siteConfig.shortName,
  url: siteConfig.website,
  telephone: siteConfig.phone,
  email: siteConfig.primaryEmail,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.locality,
    addressCountry: siteConfig.address.countryCode,
  },
  areaServed: {
    "@type": "Country",
    name: siteConfig.address.countryName,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    email: siteConfig.primaryEmail,
    contactType: "business enquiries",
    areaServed: siteConfig.address.countryCode,
  },
};

export function ContactPage() {
  return (
    <>
      <PageMeta
        title={contactPageTitle}
        description={contactPageDescription}
        canonicalPath="/contact"
      />
      <JsonLd data={contactSchema} />

      <ContactHero
        message={contactMessages.hero}
        image={heroDubai}
        imageSrcSet={`${heroDubai768} 768w, ${heroDubai1200} 1200w, ${heroDubai} 1535w`}
        imageWidth={1535}
        imageHeight={1024}
      />

      <div className="hidden lg:block">
        <ContactMethods
          whatsappMessage={contactMessages.hero}
          headingId="contact-methods-desktop-title"
        />
      </div>

      <Section
        id="consultation"
        background="soft-gradient"
        spacing="lg"
        aria-labelledby="contact-form-title"
        className="scroll-mt-24 overflow-hidden"
      >
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ScrollReveal
            variant="fade"
            className="order-1 min-w-0 lg:order-2"
          >
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal className="order-2 min-w-0 lg:order-1 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Start a Consultation"
              title="One Clear Brief. A More Useful Conversation."
              description="The form organises the essential information without asking you to repeat it when the WhatsApp conversation begins."
              headingId="consultation-guide-title"
            />

            <div className="mt-9 border-t border-deep-green/12">
              {consultationSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="grid gap-4 border-b border-deep-green/12 py-6 sm:grid-cols-[3rem_1fr]"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-deep-green text-brand-lime">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <div>
                      <span className="text-xs font-extrabold tracking-[0.14em] text-emerald">
                        {step.number}
                      </span>
                      <h3 className="mt-2 font-semibold text-deep-green">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <nav
              aria-label="Explore DGNS services before contacting us"
              className="mt-8 flex flex-wrap gap-2"
            >
              {contactServiceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-deep-green/12 bg-white px-4 py-2 text-sm font-semibold text-deep-green transition-colors hover:border-deep-green hover:bg-deep-green hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </Link>
              ))}
            </nav>
          </ScrollReveal>
        </Container>
      </Section>

      <div className="lg:hidden">
        <ContactMethods
          whatsappMessage={contactMessages.hero}
          headingId="contact-methods-mobile-title"
        />
      </div>

      <QuickConsultationCards items={quickConsultations} />

      <OfficeLocation
        image={locationDubai}
        imageSrcSet={`${locationDubai640} 640w, ${locationDubai} 1100w`}
        imageWidth={1100}
        imageHeight={733}
      />

      <ServiceFAQSection
        items={contactFaqs}
        title="Contact and Consultation Questions"
        description="Clear answers about starting a consultation, using WhatsApp and discussing more than one UAE business requirement."
      />

      <ServiceFinalCTA
        title="One Conversation Can Clarify Your Next Step"
        description="Tell us where you are in your UAE business journey and we'll help you understand the available support."
        label="Start a WhatsApp Conversation"
        message={contactMessages.final}
      />
    </>
  );
}
