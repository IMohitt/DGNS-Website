export const valueItems = [
  {
    title: "Start Your Business",
    description: "Company formation and licensing guidance.",
  },
  {
    title: "Stay Compliant",
    description: "VAT, corporate tax and documentation support.",
  },
  {
    title: "Keep Your Books Accurate",
    description: "Accounting and bookkeeping support.",
  },
  {
    title: "Grow With Clarity",
    description: "Business and financial advisory.",
  },
] as const;

export const services = [
  {
    title: "Business Setup",
    description:
      "Practical support for company incorporation, licensing and the right UAE structure.",
    to: "/services/business-setup",
    featured: true,
  },
  {
    title: "Corporate Tax",
    description:
      "Registration, return filing, compliance reviews and business-focused tax guidance.",
    to: "/services/corporate-tax",
    featured: true,
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Accurate records, reporting and day-to-day financial clarity for your business.",
    to: "/services/accounting-bookkeeping",
    featured: false,
  },
  {
    title: "VAT Services",
    description:
      "VAT registration, filing, deregistration and ongoing compliance support.",
    to: "/services/vat",
    featured: false,
  },
  {
    title: "Business Advisory",
    description:
      "Practical structuring, planning and reporting designed around your goals.",
    to: "/services/advisory",
    featured: false,
  },
  {
    title: "Compliance Support",
    description:
      "Timely documentation and coordinated support to keep obligations on track.",
    to: "/services",
    featured: false,
  },
] as const;

export const formationOptions = [
  {
    title: "Mainland",
    description:
      "A strong option for companies requiring broad UAE market access and flexible local operations.",
    benefits: [
      "UAE market access",
      "Broad business activity options",
      "Government and private sector opportunities",
      "Scalable operations",
    ],
    label: "Explore Mainland",
    to: "/business-setup/mainland",
  },
  {
    title: "Free Zone",
    description:
      "Ideal for many entrepreneurs and international businesses looking for streamlined sector-focused setup options.",
    benefits: [
      "Streamlined setup options",
      "International business focus",
      "Dedicated business ecosystems",
      "Flexible company structures",
    ],
    label: "Explore Free Zone",
    to: "/business-setup/free-zone",
  },
] as const;

export const formationComparison = [
  {
    label: "Market Focus",
    mainland: "UAE-wide opportunities",
    freeZone: "Sector and international focus",
  },
  {
    label: "Setup Structure",
    mainland: "Mainland licence",
    freeZone: "Free Zone licence",
  },
  {
    label: "Business Operations",
    mainland: "Flexible local operations",
    freeZone: "Aligned to the selected zone framework",
  },
  {
    label: "Best Suited For",
    mainland: "UAE market-led businesses",
    freeZone: "Entrepreneurs and international companies",
  },
] as const;

export const whyDgnsItems = [
  "Professional & Reliable Service",
  "UAE Business & Tax Compliance Support",
  "Transparent & Competitive Pricing",
  "Timely Filing & Documentation",
  "End-to-End Business Solutions",
  "Dedicated Client Support",
] as const;

export const trustPrinciples = [
  {
    title: "Clear Communication",
    description: "Straightforward updates and practical next steps.",
  },
  {
    title: "Practical Guidance",
    description: "Advice shaped around real business requirements.",
  },
  {
    title: "Consistent Support",
    description: "Reliable help beyond the initial setup process.",
  },
  {
    title: "UAE-Focused Expertise",
    description: "Support aligned with the UAE business environment.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understand business requirements, goals and preferred UAE structure.",
  },
  {
    number: "02",
    title: "Structure & Planning",
    description:
      "Guide the client through suitable formation, accounting and compliance requirements.",
  },
  {
    number: "03",
    title: "Setup & Documentation",
    description:
      "Support company setup, documentation and required processes.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Assist with bookkeeping, VAT, corporate tax, reporting and advisory.",
  },
] as const;

export const accountingItems = [
  "Accounting & Bookkeeping",
  "VAT Registration & Filing",
  "Corporate Tax Support",
  "Financial Reporting",
] as const;

export const advisoryItems = [
  "Business Structuring",
  "Financial Planning",
  "Management Reporting",
  "Business Process Solutions",
] as const;

export const regionCards = [
  {
    city: "Dubai",
    description:
      "Build your company in one of the region’s most dynamic commercial hubs.",
    to: "/business-setup/mainland/dubai",
  },
  {
    city: "Abu Dhabi",
    description:
      "Explore opportunities in the UAE capital and its diverse business economy.",
    to: "/business-setup/mainland/abu-dhabi",
  },
  {
    city: "Sharjah",
    description:
      "A strategic environment for trading, industrial and service businesses.",
    to: "/business-setup/mainland/sharjah",
  },
  {
    city: "Ajman",
    description:
      "A flexible and accessible option for startups and growing businesses.",
    to: "/business-setup/mainland/ajman",
  },
] as const;

export const homeFaqItems = [
  {
    question:
      "What is the difference between Mainland and Free Zone company formation?",
    answer:
      "Mainland and Free Zone structures differ in business operations, jurisdiction, licensing and setup considerations. The most suitable option depends on your business model and goals.",
  },
  {
    question:
      "Can DGNS Advisors help with both company setup and ongoing compliance?",
    answer:
      "Yes. DGNS Advisors supports business setup as well as accounting, bookkeeping, VAT, corporate tax and advisory requirements.",
  },
  {
    question: "Do you provide accounting and bookkeeping services?",
    answer:
      "Yes. Services include bookkeeping, accounting records, financial statements, accounts payable and receivable, and management reporting.",
  },
  {
    question: "Can you assist with UAE VAT?",
    answer:
      "Yes. DGNS Advisors provides VAT registration, return filing, deregistration, compliance and advisory support.",
  },
  {
    question: "Can you help with UAE Corporate Tax?",
    answer:
      "Yes. Corporate Tax support includes registration, return filing, compliance, advisory and business-specific review.",
  },
  {
    question: "How can I start a consultation?",
    answer:
      "Use any Get Free Consultation or WhatsApp button to contact DGNS Advisors directly.",
  },
] as const;
