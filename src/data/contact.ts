import type { FAQItem } from "../components/ui/FAQAccordion";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  preferredEmirate: string;
  message: string;
};

export type ContactOption = {
  value: string;
  label: string;
};

export type QuickConsultation = {
  eyebrow: string;
  title: string;
  description: string;
  label: string;
  message: string;
};

export const contactPageTitle =
  "Contact DGNS Advisors | UAE Business Consultation";

export const contactPageDescription =
  "Contact DGNS Advisors for UAE business setup, accounting, VAT, corporate tax and advisory support. Start your consultation directly through WhatsApp.";

export const contactMessages = {
  hero: "Hello DGNS Advisors, I would like to discuss my business requirements.",
  businessSetup:
    "Hello DGNS Advisors, I am planning to start a business in the UAE and would like to discuss my setup options.",
  accountingTax:
    "Hello DGNS Advisors, I would like to discuss accounting, VAT or Corporate Tax support for my business.",
  general:
    "Hello DGNS Advisors, I would like help understanding which DGNS service is suitable for my business.",
  final:
    "Hello DGNS Advisors, I would like to discuss the next step in my UAE business journey.",
} as const;

export const contactServiceOptions = [
  { value: "UAE Business Setup", label: "UAE Business Setup" },
  {
    value: "Mainland Company Formation",
    label: "Mainland Company Formation",
  },
  {
    value: "Free Zone Company Formation",
    label: "Free Zone Company Formation",
  },
  {
    value: "Accounting & Bookkeeping",
    label: "Accounting & Bookkeeping",
  },
  { value: "VAT Services", label: "VAT Services" },
  { value: "Corporate Tax", label: "Corporate Tax" },
  { value: "Business Advisory", label: "Business Advisory" },
  { value: "Compliance Support", label: "Compliance Support" },
  { value: "Tour & Travels", label: "Tour & Travels" },
  { value: "Other", label: "Other" },
] as const satisfies readonly ContactOption[];

export const preferredEmirateOptions = [
  { value: "Dubai", label: "Dubai" },
  { value: "Abu Dhabi", label: "Abu Dhabi" },
  { value: "Sharjah", label: "Sharjah" },
  { value: "Ajman", label: "Ajman" },
  { value: "Other UAE", label: "Other UAE" },
  { value: "Not Sure", label: "Not Sure" },
] as const satisfies readonly ContactOption[];

const serviceQueryMap: Readonly<Record<string, string>> = {
  "business-setup": "UAE Business Setup",
  mainland: "Mainland Company Formation",
  "free-zone": "Free Zone Company Formation",
  accounting: "Accounting & Bookkeeping",
  vat: "VAT Services",
  "corporate-tax": "Corporate Tax",
  advisory: "Business Advisory",
  compliance: "Compliance Support",
  travel: "Tour & Travels",
};

export function getServiceFromQuery(value: string | null): string {
  if (!value) return "";

  return serviceQueryMap[value.trim().toLowerCase()] ?? "";
}

export const quickConsultations = [
  {
    eyebrow: "Company Formation",
    title: "Starting a UAE Business?",
    description:
      "Share your intended activity and operating plans so the relevant Mainland and Free Zone considerations can be reviewed.",
    label: "Discuss Business Setup",
    message: contactMessages.businessSetup,
  },
  {
    eyebrow: "Financial Compliance",
    title: "Need Accounting or Tax Support?",
    description:
      "Discuss bookkeeping, VAT or Corporate Tax requirements for a new or operating UAE business.",
    label: "Talk to an Expert",
    message: contactMessages.accountingTax,
  },
  {
    eyebrow: "General Enquiry",
    title: "Not Sure What You Need?",
    description:
      "Explain your current business stage and DGNS Advisors can help identify the most relevant support areas.",
    label: "Ask DGNS",
    message: contactMessages.general,
  },
] as const satisfies readonly QuickConsultation[];

export const contactFaqs: readonly FAQItem[] = [
  {
    question: "How can I book a consultation?",
    answer:
      "Use the contact form or any WhatsApp button on the website.",
  },
  {
    question: "Can I contact DGNS Advisors through WhatsApp?",
    answer:
      "Yes. WhatsApp is available throughout the website for direct enquiries.",
  },
  {
    question: "Can I ask about multiple services during one consultation?",
    answer:
      "Yes. Clients can discuss company setup, accounting, VAT, Corporate Tax and advisory requirements together.",
  },
  {
    question: "Can you help me choose between Mainland and Free Zone?",
    answer:
      "Yes. DGNS Advisors can review your business requirements and help you understand suitable options.",
  },
  {
    question: "Can I contact you if I am outside the UAE?",
    answer:
      "Yes. International entrepreneurs can contact DGNS Advisors to discuss UAE business setup requirements.",
  },
];

export function buildConsultationMessage(
  values: ContactFormValues,
  pageUrl: string,
): string {
  const firstName = values.firstName.trim();
  const lastName = values.lastName.trim();
  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  const email = values.email.trim();
  const phone = values.phone.trim();
  const companyName = values.companyName.trim();
  const service = values.service.trim();
  const preferredEmirate = values.preferredEmirate.trim();
  const message = values.message.trim();

  const lines = [
    "Hello DGNS Advisors,",
    "",
    "I would like a consultation.",
    "",
    `Name: ${fullName}`,
  ];

  if (email) lines.push(`Email: ${email}`);
  lines.push(`Phone: ${phone}`);
  if (companyName) lines.push(`Company: ${companyName}`);
  lines.push(`Service Required: ${service}`);
  if (preferredEmirate) {
    lines.push(`Preferred Emirate: ${preferredEmirate}`);
  }

  if (message) {
    lines.push("", "Message:", message);
  }

  lines.push("", "Page:", pageUrl);

  return lines.join("\n");
}
