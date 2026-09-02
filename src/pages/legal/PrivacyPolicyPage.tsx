import { Link } from "react-router-dom";

import {
  LegalDocumentLayout,
  type LegalSection,
} from "../../components/legal";
import { siteConfig } from "../../config/siteConfig";
import { legalContentLastUpdated } from "../../data/legal";

const pageDescription =
  "Learn how DGNS Advisors handles information submitted through this website, WhatsApp enquiries, cookies, analytics and external services.";

const privacySections: readonly LegalSection[] = [
  {
    id: "about-this-policy",
    title: "About This Policy",
    content: (
      <>
        <p>
          This Privacy Policy explains how {siteConfig.companyName} ("DGNS",
          "we", "us" or "our") may handle information connected with your use
          of {siteConfig.website} and your enquiries about our services.
        </p>
        <p>
          It applies to information received through this website and the
          communication channels linked from it. A third-party service may apply
          its own privacy terms after you leave this website.
        </p>
      </>
    ),
  },
  {
    id: "information-you-provide",
    title: "Information You Voluntarily Provide",
    content: (
      <>
        <p>
          You may choose to provide information when you complete an enquiry
          form, contact us by email or phone, or continue a conversation through
          WhatsApp. Depending on the enquiry, this may include:
        </p>
        <ul>
          <li>Your name, email address and phone number.</li>
          <li>Your company, requested service or preferred UAE location.</li>
          <li>Travel dates, destination preferences and traveller numbers.</li>
          <li>The message and other information you decide to share.</li>
        </ul>
        <p>
          Please do not submit passwords, banking credentials or other sensitive
          information that is not reasonably needed for an initial enquiry.
        </p>
      </>
    ),
  },
  {
    id: "whatsapp-enquiries",
    title: "How WhatsApp Enquiries Work",
    content: (
      <>
        <p>
          The website&apos;s enquiry forms primarily prepare a WhatsApp link with a
          prefilled message. You can review that message before choosing to send
          it. Completing a form does not itself mean the message has been sent.
        </p>
        <p>
          This process does not necessarily require the form information to be
          stored on DGNS servers unless a separate form, customer-management or
          other system is integrated later. Once WhatsApp opens, your interaction
          is also governed by WhatsApp&apos;s and its provider&apos;s own terms and privacy
          practices.
        </p>
      </>
    ),
  },
  {
    id: "usage-data-and-cookies",
    title: "Website Usage Information and Cookies",
    content: (
      <>
        <p>
          Basic technical information may be processed by hosting, security or
          browser technologies needed to deliver the website, such as device,
          browser, approximate network and request information.
        </p>
        <p>
          If analytics or advertising tools are enabled, they may use cookies or
          similar technologies to help measure website use or campaign activity.
          Those tools should be configured separately and, where required,
          supported by an appropriate consent choice. The absence of a configured
          tracking service means this policy does not itself activate tracking.
        </p>
      </>
    ),
  },
  {
    id: "how-information-is-used",
    title: "How Information May Be Used",
    content: (
      <>
        <p>Information received through an enquiry may be used to:</p>
        <ul>
          <li>Respond to you and understand the assistance you requested.</li>
          <li>Coordinate a consultation or provide relevant service information.</li>
          <li>Maintain, secure and improve the website and enquiry experience.</li>
          <li>Keep appropriate business records and meet applicable obligations.</li>
        </ul>
        <p>
          The way information is handled can depend on the channel you choose and
          the services involved in your enquiry.
        </p>
      </>
    ),
  },
  {
    id: "external-services",
    title: "External Services and Third-Party Links",
    content: (
      <>
        <p>
          This website may link to or rely on external services such as WhatsApp,
          mapping providers, hosting infrastructure and other service providers.
          Information you provide directly to those services is handled under
          their own terms and privacy policies.
        </p>
        <p>
          Third-party links are provided for convenience. DGNS does not control
          the content, availability or privacy practices of independent websites
          and services.
        </p>
      </>
    ),
  },
  {
    id: "retention-and-security",
    title: "Retention and Data Security",
    content: (
      <>
        <p>
          Information received through email, WhatsApp or another integrated
          service may be kept for as long as reasonably needed to manage the
          enquiry, provide requested support, maintain appropriate records or meet
          applicable requirements.
        </p>
        <p>
          Reasonable organizational and technical safeguards can reduce risk, but
          no website, internet transmission or third-party messaging service can
          be guaranteed to be completely secure. Please choose carefully what you
          send through online channels.
        </p>
      </>
    ),
  },
  {
    id: "your-choices",
    title: "Your Choices and Questions",
    content: (
      <>
        <p>
          You can choose not to submit an online enquiry and contact us by another
          available method. You may also contact DGNS to ask about information you
          previously shared. Any request will be considered in light of the
          relevant circumstances and applicable requirements.
        </p>
        <p>
          For website enquiries, email{" "}
          <a href={`mailto:${siteConfig.primaryEmail}`}>
            {siteConfig.primaryEmail}
          </a>{" "}
          or visit the <Link to="/contact">Contact page</Link>.
        </p>
      </>
    ),
  },
  {
    id: "policy-changes",
    title: "Changes to This Policy",
    content: (
      <p>
        This Privacy Policy may be revised when the website, enquiry process or
        relevant practices change. The date shown at the top of this page
        identifies the latest published revision. Please review this page
        periodically for updates.
      </p>
    ),
  },
];

const privacyWhatsAppMessage =
  "Hello DGNS Advisors, I have a question about the website Privacy Policy.";

export function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      description={pageDescription}
      canonicalPath="/privacy-policy"
      lastUpdated={legalContentLastUpdated}
      sections={privacySections}
      whatsappMessage={privacyWhatsAppMessage}
    />
  );
}
