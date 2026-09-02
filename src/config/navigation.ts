export interface NavItem {
  label: string;
  to: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  to: string;
  items: NavItem[];
}

export const servicesMenuGroups: NavGroup[] = [
  {
    label: "Business Setup",
    to: "/services/business-setup",
    items: [
      {
        label: "Company Incorporation",
        to: "/services/business-setup",
      },
      {
        label: "Mainland Formation",
        to: "/business-setup/mainland",
      },
      {
        label: "Free Zone Formation",
        to: "/business-setup/free-zone",
      },
      {
        label: "Licensing & Registration",
        to: "/services/business-setup",
      },
    ],
  },
  {
    label: "Accounting",
    to: "/services/accounting-bookkeeping",
    items: [
      {
        label: "Accounting & Bookkeeping",
        to: "/services/accounting-bookkeeping",
      },
      {
        label: "Financial Statements",
        to: "/services/accounting-bookkeeping",
      },
      {
        label: "Management Reporting",
        to: "/services/accounting-bookkeeping",
      },
    ],
  },
  {
    label: "VAT",
    to: "/services/vat",
    items: [
      { label: "VAT Registration", to: "/services/vat" },
      { label: "VAT Return Filing", to: "/services/vat" },
      { label: "VAT Compliance", to: "/services/vat" },
    ],
  },
  {
    label: "Corporate Tax",
    to: "/services/corporate-tax",
    items: [
      {
        label: "Corporate Tax Registration",
        to: "/services/corporate-tax",
      },
      {
        label: "Corporate Tax Return Filing",
        to: "/services/corporate-tax",
      },
      {
        label: "Corporate Tax Advisory",
        to: "/services/corporate-tax",
      },
    ],
  },
  {
    label: "Advisory",
    to: "/services/advisory",
    items: [
      { label: "Business Structuring", to: "/services/advisory" },
      { label: "Financial Planning", to: "/services/advisory" },
      { label: "Compliance Support", to: "/services/advisory" },
    ],
  },
];

export const businessSetupMenu: NavGroup[] = [
  {
    label: "Mainland",
    to: "/business-setup/mainland",
    items: [
      { label: "Dubai", to: "/business-setup/mainland/dubai" },
      { label: "Abu Dhabi", to: "/business-setup/mainland/abu-dhabi" },
      { label: "Sharjah", to: "/business-setup/mainland/sharjah" },
      { label: "Ajman", to: "/business-setup/mainland/ajman" },
    ],
  },
  {
    label: "Free Zone",
    to: "/business-setup/free-zone",
    items: [
      { label: "IFZA", to: "/business-setup/free-zone#ifza" },
      {
        label: "Abu Dhabi",
        to: "/business-setup/free-zone#abu-dhabi",
      },
      {
        label: "Ras Al Khaimah",
        to: "/business-setup/free-zone#ras-al-khaimah",
      },
      { label: "Sharjah", to: "/business-setup/free-zone#sharjah" },
      { label: "Ajman", to: "/business-setup/free-zone#ajman" },
    ],
  },
];

export const tourTravelMenu: NavItem[] = [
  { label: "Destinations", to: "/tour-travels/destinations" },
  { label: "Experiences", to: "/tour-travels/experiences" },
  { label: "Packages", to: "/tour-travels/packages" },
];

export interface FooterNavigation {
  businessSetup: NavItem[];
  services: NavItem[];
  company: NavItem[];
}

export const footerNavigation: FooterNavigation = {
  businessSetup: [
    { label: "Mainland", to: "/business-setup/mainland" },
    { label: "Free Zone", to: "/business-setup/free-zone" },
    { label: "Dubai", to: "/business-setup/mainland/dubai" },
    { label: "Abu Dhabi", to: "/business-setup/mainland/abu-dhabi" },
    { label: "Sharjah", to: "/business-setup/mainland/sharjah" },
    { label: "Ajman", to: "/business-setup/mainland/ajman" },
  ],
  services: [
    { label: "Business Setup", to: "/services/business-setup" },
    {
      label: "Accounting & Bookkeeping",
      to: "/services/accounting-bookkeeping",
    },
    { label: "VAT", to: "/services/vat" },
    { label: "Corporate Tax", to: "/services/corporate-tax" },
    { label: "Advisory", to: "/services/advisory" },
  ],
  company: [
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    { label: "Tour & Travels", to: "/tour-travels" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms", to: "/terms" },
  ],
};
