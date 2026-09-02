export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  eyebrow?: string;
}

export const routeMeta: RouteMeta[] = [
  {
    path: "/",
    title: "DGNS Advisors | UAE Business Setup, Accounting & Tax Services",
    description:
      "DGNS Advisors provides UAE business setup, accounting, bookkeeping, VAT, corporate tax and advisory services for companies across the UAE.",
    eyebrow: "DGNS Advisors",
  },
  {
    path: "/services",
    title: "DGNS Advisors Services | UAE Business, Accounting & Tax",
    description:
      "Explore integrated UAE business setup, accounting, bookkeeping, VAT, corporate tax and advisory services from DGNS Advisors.",
    eyebrow: "Our Services",
  },
  {
    path: "/services/business-setup",
    title: "UAE Business Setup & Company Formation | DGNS Advisors",
    description:
      "DGNS Advisors supports UAE Mainland and Free Zone company formation, business activity selection, licensing and company documentation.",
    eyebrow: "Business Setup",
  },
  {
    path: "/services/accounting-bookkeeping",
    title: "UAE Accounting & Bookkeeping Services | DGNS Advisors",
    description:
      "DGNS Advisors provides monthly and annual bookkeeping, accounting records, financial statements, payable, receivable and management reporting support in the UAE.",
    eyebrow: "Accounting",
  },
  {
    path: "/services/vat",
    title: "UAE VAT Registration & Filing Services | DGNS Advisors",
    description:
      "Get practical UAE VAT support from DGNS Advisors, including registration, return filing, deregistration, records, compliance and advisory services.",
    eyebrow: "VAT Services",
  },
  {
    path: "/services/corporate-tax",
    title: "UAE Corporate Tax Services | DGNS Advisors",
    description:
      "Get practical UAE corporate tax support from DGNS Advisors, including registration, return filing, financial record review and ongoing compliance guidance.",
    eyebrow: "Corporate Tax",
  },
  {
    path: "/services/advisory",
    title: "Business & Financial Advisory UAE | DGNS Advisors",
    description:
      "Practical UAE business and financial advisory for structuring, planning, reporting, compliance coordination and business process solutions.",
    eyebrow: "Advisory",
  },
  {
    path: "/business-setup",
    title: "UAE Company Formation Options | DGNS Advisors",
    description:
      "Compare UAE Mainland and Free Zone company formation options with practical guidance on activities, jurisdictions, licensing and documentation.",
    eyebrow: "UAE Business Setup",
  },
  {
    path: "/business-setup/mainland",
    title: "UAE Mainland Company Formation | DGNS Advisors",
    description:
      "Explore UAE Mainland company formation across Dubai, Abu Dhabi, Sharjah and Ajman with guidance on activities, licensing and setup requirements.",
    eyebrow: "Mainland Formation",
  },
  {
    path: "/business-setup/mainland/dubai",
    title: "Dubai Mainland Company Formation | DGNS Advisors",
    description:
      "Plan a Dubai Mainland company formation with practical guidance on business activities, structure, documentation, licensing and ongoing UAE compliance.",
    eyebrow: "Dubai",
  },
  {
    path: "/business-setup/mainland/abu-dhabi",
    title: "Abu Dhabi Mainland Company Formation | DGNS Advisors",
    description:
      "Explore Abu Dhabi business setup with practical support for Mainland company formation, activities, licensing, documents and ongoing UAE compliance.",
    eyebrow: "Abu Dhabi",
  },
  {
    path: "/business-setup/mainland/sharjah",
    title: "Sharjah Mainland Business Setup | DGNS Advisors",
    description:
      "Plan a Sharjah Mainland business setup with guidance on trading, industrial and professional activities, licensing, documentation and ongoing compliance.",
    eyebrow: "Sharjah",
  },
  {
    path: "/business-setup/mainland/ajman",
    title: "Ajman Mainland Business Setup | DGNS Advisors",
    description:
      "Explore Ajman Mainland business setup with practical guidance on activities, company structure, licensing, documentation and post-formation compliance.",
    eyebrow: "Ajman",
  },
  {
    path: "/business-setup/free-zone",
    title: "UAE Free Zone Company Formation | DGNS Advisors",
    description:
      "Compare UAE Free Zone company formation options by activity, location, facility, visa and operating requirements with practical guidance from DGNS Advisors.",
    eyebrow: "Free Zone Formation",
  },
  {
    path: "/about",
    title: "About DGNS Advisors | UAE Business & Tax Advisory",
    description:
      "Learn about DGNS Advisors LLC FZ and our approach to UAE business setup, accounting, bookkeeping, VAT, corporate tax and business advisory support.",
    eyebrow: "About DGNS",
  },
  {
    path: "/contact",
    title: "Contact DGNS Advisors | UAE Business Consultation",
    description:
      "Contact DGNS Advisors for UAE business setup, accounting, VAT, corporate tax and advisory support. Start your consultation directly through WhatsApp.",
    eyebrow: "Contact Us",
  },
  {
    path: "/tour-travels",
    title: "UAE Tours & Travel Experiences | DGNS Advisors",
    description:
      "Explore UAE destinations, activities and travel experiences with DGNS Advisors. Discover Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and Fujairah.",
    eyebrow: "Tour & Travels",
  },
  {
    path: "/tour-travels/destinations",
    title: "UAE Travel Destinations | DGNS Advisors",
    description:
      "Explore travel destinations across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and Fujairah with DGNS Advisors.",
    eyebrow: "Destinations",
  },
  {
    path: "/tour-travels/packages",
    title: "UAE Tour Packages & Experiences | DGNS Advisors",
    description:
      "Browse available UAE travel packages and contact DGNS Advisors directly for experience details, planning and availability.",
    eyebrow: "Travel Packages",
  },
  {
    path: "/tour-travels/experiences",
    title: "UAE Experiences & Activities | DGNS Advisors",
    description:
      "Discover adventure, culture, city attractions and relaxing UAE experiences with DGNS Advisors.",
    eyebrow: "UAE Experiences",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | DGNS Advisors",
    description:
      "Learn how DGNS Advisors handles information submitted through this website, WhatsApp enquiries, cookies, analytics and external services.",
    eyebrow: "Legal",
  },
  {
    path: "/terms",
    title: "Terms & Conditions | DGNS Advisors",
    description:
      "Read the terms for using the DGNS Advisors website and requesting business, tax, compliance and travel information.",
    eyebrow: "Legal",
  },
];

export const notFoundRouteMeta: RouteMeta = {
  path: "*",
  title: "Page Not Found | DGNS Advisors",
  description: "The page you're looking for may have moved or no longer exists.",
  eyebrow: "404",
};

export const getRouteMeta = (pathname: string): RouteMeta | undefined =>
  routeMeta.find((metadata) => metadata.path === pathname);
