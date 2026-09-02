import { JsonLd } from "../common/JsonLd";
import { siteConfig } from "../../config/siteConfig";

type BusinessSetupSchemaProps = {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
};

export function BusinessSetupSchema({
  name,
  description,
  path,
  areaServed = "United Arab Emirates",
}: BusinessSetupSchemaProps) {
  const isCountry = areaServed === "United Arab Emirates";

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${new URL(path, siteConfig.website).toString()}#service`,
        name,
        description,
        url: new URL(path, siteConfig.website).toString(),
        provider: {
          "@type": ["Organization", "ProfessionalService"],
          "@id": `${siteConfig.website}#organization`,
          name: siteConfig.companyName,
          url: siteConfig.website,
        },
        areaServed: {
          "@type": isCountry ? "Country" : "AdministrativeArea",
          name: areaServed,
        },
        serviceType: "Business setup and company formation support",
      }}
    />
  );
}
