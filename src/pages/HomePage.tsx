import { JsonLd } from "../components/common/JsonLd";
import { PageMeta } from "../components/common/PageMeta";
import { siteConfig } from "../config/siteConfig";
import {
  AccountingTaxSection,
  AdvisorySection,
  BusinessSetupSection,
  FinalCTASection,
  HeroSection,
  HomeFAQ,
  ProcessSection,
  ServicesSection,
  TrustStrip,
  UAERegionsSection,
  WhyDGNSSection,
} from "../sections/home";

const homepageTitle =
  "DGNS Advisors | UAE Business Setup, Accounting & Tax Services";
const homepageDescription =
  "DGNS Advisors provides UAE business setup, accounting, bookkeeping, VAT, corporate tax and advisory services for companies across the UAE.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteConfig.website}#organization`,
  name: siteConfig.companyName,
  alternateName: siteConfig.shortName,
  url: siteConfig.website,
  telephone: siteConfig.phone,
  email: siteConfig.primaryEmail,
  description: homepageDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.locality,
    addressCountry: siteConfig.address.countryCode,
  },
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  knowsAbout: [
    "UAE company formation",
    "Mainland company formation",
    "Free Zone company formation",
    "Accounting and bookkeeping",
    "VAT services",
    "Corporate tax",
    "Business advisory",
  ],
};

export function HomePage() {
  return (
    <>
      <PageMeta
        title={homepageTitle}
        description={homepageDescription}
        canonicalPath="/"
      />
      <JsonLd data={organizationSchema} />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <BusinessSetupSection />
      <WhyDGNSSection />
      <ProcessSection />
      <AccountingTaxSection />
      <AdvisorySection />
      <UAERegionsSection />
      <HomeFAQ />
      <FinalCTASection />
    </>
  );
}
