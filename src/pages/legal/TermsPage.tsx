import { Link } from "react-router-dom";

import {
  LegalDocumentLayout,
  type LegalSection,
} from "../../components/legal";
import { siteConfig } from "../../config/siteConfig";
import { legalContentLastUpdated } from "../../data/legal";

const pageDescription =
  "Read the terms for using the DGNS Advisors website and requesting business, tax, compliance and travel information.";

const termsSections: readonly LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of These Terms",
    content: (
      <>
        <p>
          These Terms &amp; Conditions govern your use of {siteConfig.website},
          which is operated for {siteConfig.companyName}. By using this website,
          you agree to use it in accordance with these terms.
        </p>
        <p>
          If you do not agree with these terms, please stop using the website.
          Separate written terms may apply if you later engage DGNS for a specific
          service.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    title: "Website Use",
    content: (
      <>
        <p>
          You may use this website to learn about DGNS services and make genuine
          enquiries. You must not attempt to disrupt the website, gain unauthorized
          access, introduce harmful code, misrepresent your identity or use the
          website for an unlawful purpose.
        </p>
        <p>
          Website access may be changed, suspended or withdrawn when maintenance,
          security, operational or other circumstances make that reasonably
          necessary.
        </p>
      </>
    ),
  },
  {
    id: "informational-content",
    title: "Informational Content and Professional Advice",
    content: (
      <>
        <p>
          Website content is provided for general informational purposes. It does
          not replace legal, tax, accounting, regulatory, financial or other
          professional advice based on your individual circumstances.
        </p>
        <p>
          Rules, authority requirements and market information can change, and a
          short website summary may not cover every condition or exception. Seek a
          suitable individual review before making decisions or relying on a
          particular course of action.
        </p>
      </>
    ),
  },
  {
    id: "service-enquiries",
    title: "Service Enquiries and Outcomes",
    content: (
      <>
        <p>
          Sending an enquiry, opening a WhatsApp conversation or receiving initial
          information does not by itself create a formal professional engagement.
          Any scope, responsibility, fee or deliverable should be confirmed
          separately where DGNS accepts an engagement.
        </p>
        <p>
          DGNS does not guarantee licence issuance, authority approval, tax result,
          processing time, business performance or another specific outcome.
          Outcomes can depend on complete information, third-party authorities,
          eligibility, documentation and circumstances beyond the website.
        </p>
      </>
    ),
  },
  {
    id: "business-tax-compliance",
    title: "Business, Tax and Compliance Information",
    content: (
      <>
        <p>
          Information about business setup, VAT, Corporate Tax, accounting and
          compliance is general. Requirements may differ based on the entity,
          activity, jurisdiction, transactions, records and rules in force at the
          relevant time.
        </p>
        <p>
          Review the relevant facts and current requirements before submitting an
          application, filing a return, selecting a company structure or taking
          another compliance-related step. You can explore our{" "}
          <Link to="/services">service information</Link> as a starting point.
        </p>
      </>
    ),
  },
  {
    id: "travel-information",
    title: "Travel Information, Prices and Availability",
    content: (
      <>
        <p>
          Travel packages, experiences, itineraries, dates, prices and availability
          shown on this website are subject to confirmation. Inclusions, schedules,
          capacity, seasonal conditions and third-party supplier terms may change.
        </p>
        <p>
          An enquiry is not a confirmed reservation. Current details, total price,
          payment terms, cancellation conditions and any traveller-specific
          requirements should be confirmed before booking. Browse the{" "}
          <Link to="/tour-travels/packages">travel packages page</Link> or contact
          DGNS for current information.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-Party Services and Links",
    content: (
      <p>
        This website may link to WhatsApp, maps, travel suppliers, authorities or
        other independent websites and services. Those providers control their own
        content, availability and terms. A link does not make DGNS responsible for
        an independent provider&apos;s website, service or privacy practice.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          The DGNS name, branding, website design and original website materials
          may be protected by applicable intellectual-property rights. You may view
          and use the website for personal or internal business information.
        </p>
        <p>
          Do not reproduce, distribute, modify or commercially reuse protected
          website materials without permission or another lawful basis. Third-party
          names, marks and materials remain subject to their respective owners&apos;
          rights.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Availability and Limitation of Liability",
    content: (
      <>
        <p>
          DGNS aims to keep website information useful and the website available,
          but does not promise that every item will always be complete, current,
          uninterrupted or error-free.
        </p>
        <p>
          To the extent permitted by applicable law, DGNS is not responsible for
          decisions made solely from general website content, or for loss caused
          by website unavailability or an independent third-party service. Nothing
          in these terms excludes a responsibility that cannot lawfully be
          excluded.
        </p>
      </>
    ),
  },
  {
    id: "changes-and-contact",
    title: "Changes and Contact",
    content: (
      <>
        <p>
          These terms may be updated when the website, services or relevant
          practices change. The date shown at the top identifies the latest
          published revision. Continued use after an update means the revised terms
          apply to later website use.
        </p>
        <p>
          Questions can be sent to{" "}
          <a href={`mailto:${siteConfig.primaryEmail}`}>
            {siteConfig.primaryEmail}
          </a>{" "}
          or through the <Link to="/contact">Contact page</Link>.
        </p>
      </>
    ),
  },
];

const termsWhatsAppMessage =
  "Hello DGNS Advisors, I have a question about the website Terms & Conditions.";

export function TermsPage() {
  return (
    <LegalDocumentLayout
      title="Terms & Conditions"
      description={pageDescription}
      canonicalPath="/terms"
      lastUpdated={legalContentLastUpdated}
      sections={termsSections}
      whatsappMessage={termsWhatsAppMessage}
    />
  );
}
