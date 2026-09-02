const address = {
  streetAddress: "Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba",
  locality: "Dubai",
  country: "UAE",
  countryCode: "AE",
  countryName: "United Arab Emirates",
  display:
    "Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE",
} as const;

const socials = {
  linkedin: "",
  instagram: "",
  facebook: "",
} as const;

const productionWebsite = "https://dgnsadvisors.ae";

const getWebsiteUrl = () => {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();

  if (!configuredUrl) {
    return productionWebsite;
  }

  try {
    const parsedUrl = new URL(configuredUrl);

    if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
      return productionWebsite;
    }

    return parsedUrl.toString().replace(/\/$/, "");
  } catch {
    return productionWebsite;
  }
};

export const siteConfig = {
  companyName: "DGNS Advisors LLC FZ",
  shortName: "DGNS Advisors",
  phone: "+971 552118257",
  whatsapp: "971552118257",
  primaryEmail: "dgnsadvisorsdxb@gmail.com",
  secondaryEmail: "info@dgnsadvisors.ae",
  address,
  location: address.display,
  website: getWebsiteUrl(),
  // Add an approved, production-quality 1200 × 630 asset path here when the
  // official DGNS social-sharing artwork is supplied (for example,
  // "/og/dgns-advisors.jpg"). PageMeta intentionally omits image tags while
  // this value is empty rather than publishing an unsuitable page crop.
  socialSharingImage: "",
  socials,
} as const;

export type SiteConfig = typeof siteConfig;
