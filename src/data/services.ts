import type { FAQItem } from "../components/ui/FAQAccordion";

export type ServiceLink = {
  title: string;
  description: string;
  to: string;
};

export type ServiceModule = {
  title: string;
  description: string;
};

export type ProcessStep = ServiceModule & {
  number: string;
};

export const serviceHubCategories = [
  {
    title: "Company Incorporation & Business Setup",
    description:
      "Practical guidance on jurisdiction, activities, licensing and the documentation needed to establish a UAE business.",
    highlights: [
      "Mainland company formation",
      "Free Zone company formation",
      "Registration and licensing",
      "Business activity guidance",
    ],
    to: "/services/business-setup",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Structured financial records, reporting and day-to-day bookkeeping support that keeps your business information organized.",
    highlights: [
      "Monthly and annual bookkeeping",
      "Financial statements",
      "Payable and receivable tracking",
      "Management reporting",
    ],
    to: "/services/accounting-bookkeeping",
  },
  {
    title: "VAT Services",
    description:
      "Support for VAT registration, filing, records, deregistration reviews and ongoing UAE VAT compliance requirements.",
    highlights: [
      "VAT registration",
      "VAT return filing",
      "Records and documentation",
      "VAT advisory",
    ],
    to: "/services/vat",
  },
  {
    title: "Corporate Tax",
    description:
      "Business-focused assistance with registration, financial record reviews, return preparation and ongoing corporate tax compliance.",
    highlights: [
      "Corporate tax registration",
      "Return preparation and filing",
      "Taxable income review",
      "Compliance support",
    ],
    to: "/services/corporate-tax",
  },
  {
    title: "Business & Financial Advisory",
    description:
      "Practical structuring, planning, reporting and process support designed around the realities of your business.",
    highlights: [
      "Business structuring",
      "Financial planning",
      "Management reporting",
      "Business process solutions",
    ],
    to: "/services/advisory",
  },
] as const;

export const serviceHubFaqs: readonly FAQItem[] = [
  {
    question: "Can DGNS Advisors support a business from setup onward?",
    answer:
      "Yes. Support can begin with company formation and continue through accounting, bookkeeping, VAT, corporate tax and advisory requirements.",
  },
  {
    question: "Can I combine more than one service?",
    answer:
      "Yes. Services can be coordinated around your requirements, such as combining business setup with accounting and tax compliance support.",
  },
  {
    question: "Do you work with existing UAE companies?",
    answer:
      "Yes. DGNS Advisors supports both new businesses and operating companies that need accounting, tax, compliance or advisory assistance.",
  },
  {
    question: "How do I know which service is relevant?",
    answer:
      "Share your current business stage and requirements during a consultation, and the team can help identify the most relevant areas of support.",
  },
  {
    question: "How can I start a consultation?",
    answer:
      "Use any consultation or WhatsApp button on this page to contact DGNS Advisors directly with a short summary of your requirements.",
  },
];

export const businessSetupServices: readonly ServiceModule[] = [
  {
    title: "Mainland Company Formation",
    description:
      "Support for companies looking to establish operations within UAE mainland jurisdictions.",
  },
  {
    title: "Free Zone Company Formation",
    description:
      "Guidance for entrepreneurs and international companies exploring UAE Free Zone structures.",
  },
  {
    title: "Company Registration & Licensing",
    description:
      "Support with registration procedures, licensing requirements and coordinated documentation.",
  },
  {
    title: "Business Activity Selection",
    description:
      "Help understanding suitable licensed activities based on your intended business operations.",
  },
  {
    title: "Company Documentation",
    description:
      "Practical assistance preparing and coordinating the documents required for the selected setup path.",
  },
];

export const businessSetupComparison = [
  {
    label: "Typical Market Focus",
    mainland: "Businesses serving the wider UAE market",
    freeZone: "Sector-led or international business models",
  },
  {
    label: "Business Operations",
    mainland: "Operations aligned with the relevant mainland licence",
    freeZone: "Operations aligned with the selected Free Zone framework",
  },
  {
    label: "Office Considerations",
    mainland: "Requirements depend on activity and licensing authority",
    freeZone: "Workspace options depend on the selected Free Zone",
  },
  {
    label: "Business Activities",
    mainland: "Activities approved by the relevant mainland authority",
    freeZone: "Activities offered within the chosen Free Zone",
  },
  {
    label: "Licensing Structure",
    mainland: "Issued through the applicable mainland authority",
    freeZone: "Issued by the selected Free Zone authority",
  },
  {
    label: "International Operations",
    mainland: "Possible depending on the company activity and structure",
    freeZone: "Often considered by internationally focused businesses",
  },
  {
    label: "Local UAE Operations",
    mainland: "Commonly considered for broader local market operations",
    freeZone: "Subject to the relevant zone and operating conditions",
  },
  {
    label: "Best Suited For",
    mainland: "Businesses prioritizing local UAE market flexibility",
    freeZone: "Entrepreneurs and companies seeking a zone-led ecosystem",
  },
] as const;

export const businessSetupProcess: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Business Consultation",
    description: "Understand the intended activities, ownership and operating goals.",
  },
  {
    number: "02",
    title: "Business Activity & Structure",
    description: "Review suitable activities and the practical company structure.",
  },
  {
    number: "03",
    title: "Jurisdiction Selection",
    description: "Compare relevant Mainland and Free Zone considerations.",
  },
  {
    number: "04",
    title: "Documentation & Application",
    description: "Coordinate required information and application documents.",
  },
  {
    number: "05",
    title: "Licensing & Setup Support",
    description: "Support the selected registration and licensing process.",
  },
  {
    number: "06",
    title: "Post-Setup Compliance",
    description: "Connect the new company with relevant accounting and tax support.",
  },
];

export const businessSetupBenefits = [
  "Structured Guidance",
  "Clear Documentation Support",
  "Mainland & Free Zone Options",
  "Business Activity Assistance",
  "Ongoing Accounting & Tax Support",
  "Single Advisory Partner",
] as const;

export const businessSetupFaqs: readonly FAQItem[] = [
  {
    question: "What is the difference between Mainland and Free Zone?",
    answer:
      "They differ in licensing authority, operating framework, market focus and practical setup considerations. The right option depends on the business activity and operating goals.",
  },
  {
    question: "How do I choose the right business activity?",
    answer:
      "The selected activity should reflect what the company will actually do. DGNS Advisors can help review intended operations against suitable licensing categories.",
  },
  {
    question: "Can DGNS Advisors help with licensing and documentation?",
    answer:
      "Yes. The team can support registration steps, licensing requirements and coordination of the documents relevant to the selected jurisdiction.",
  },
  {
    question: "Do you support post-incorporation accounting and tax?",
    answer:
      "Yes. Accounting, bookkeeping, VAT, corporate tax and advisory support can continue after company formation.",
  },
  {
    question: "How long does company formation take?",
    answer:
      "Timelines vary depending on jurisdiction, business activity, approvals and documentation.",
  },
];

export const accountingServices: readonly (ServiceModule & { featured?: boolean })[] = [
  {
    title: "Monthly Bookkeeping",
    description:
      "Regular transaction recording and account organization for current financial visibility.",
    featured: true,
  },
  {
    title: "Annual Bookkeeping",
    description:
      "Structured year-level organization of available financial records and transactions.",
  },
  {
    title: "Accounting Records Maintenance",
    description:
      "Consistent maintenance of ledgers and supporting financial information.",
  },
  {
    title: "Financial Statements Preparation",
    description:
      "Preparation of financial statements based on the business records provided.",
    featured: true,
  },
  {
    title: "Accounts Payable Management",
    description: "Structured tracking of supplier balances, bills and payment records.",
  },
  {
    title: "Accounts Receivable Management",
    description: "Clear tracking of customer balances, invoices and receipts.",
  },
  {
    title: "Management Accounting",
    description: "Financial information organized to support internal business decisions.",
  },
  {
    title: "Management Reporting",
    description: "Practical reports that help management review performance and position.",
  },
];

export const accountingWorkflow: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Collect Records",
    description: "Gather the available transaction and supporting records.",
  },
  {
    number: "02",
    title: "Organize Transactions",
    description: "Classify and record financial activity consistently.",
  },
  {
    number: "03",
    title: "Reconcile Accounts",
    description: "Compare ledger information with relevant account records.",
  },
  {
    number: "04",
    title: "Prepare Reports",
    description: "Build clear financial and management information.",
  },
  {
    number: "05",
    title: "Review Financial Position",
    description: "Review key balances, movements and available insights.",
  },
  {
    number: "06",
    title: "Maintain Records",
    description: "Keep the accounting records organized for ongoing needs.",
  },
];

export const accountingBenefits = [
  "Organized financial records",
  "Improved financial visibility",
  "Timely reporting",
  "Better cash-flow monitoring",
  "Structured receivable and payable tracking",
  "Easier compliance preparation",
] as const;

export const accountingFaqs: readonly FAQItem[] = [
  {
    question: "Do UAE businesses need proper accounting records?",
    answer:
      "Businesses generally need organized financial records to understand performance and support applicable reporting, VAT and corporate tax responsibilities.",
  },
  {
    question: "Can you manage monthly bookkeeping?",
    answer:
      "Yes. DGNS Advisors can support regular transaction recording, ledger maintenance and account reconciliations based on the records provided.",
  },
  {
    question: "Do you prepare financial statements?",
    answer:
      "Yes. Financial statements can be prepared using the available and appropriately maintained accounting information.",
  },
  {
    question: "Can you manage accounts payable and receivable?",
    answer:
      "Yes. Support can include structured tracking of supplier bills, customer invoices, payments, receipts and outstanding balances.",
  },
  {
    question: "Can accounting support VAT and Corporate Tax compliance?",
    answer:
      "Accurate, organized records can make VAT and corporate tax preparation clearer and help support the information needed for compliance work.",
  },
];

export const vatServices: readonly ServiceModule[] = [
  {
    title: "VAT Registration",
    description:
      "Review available business information and support the applicable registration process.",
  },
  {
    title: "VAT Return Filing",
    description:
      "Prepare and support VAT return filing using the relevant records for the tax period.",
  },
  {
    title: "VAT Deregistration",
    description:
      "Review the circumstances and support a deregistration application where applicable.",
  },
  {
    title: "VAT Compliance",
    description:
      "Practical support for recurring VAT responsibilities and record organization.",
  },
  {
    title: "VAT Advisory",
    description:
      "Business-focused guidance on VAT questions based on the available circumstances.",
  },
  {
    title: "VAT Records & Documentation",
    description:
      "Help maintain the documents and transaction records needed for VAT work.",
  },
];

export const vatProcess: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Review Business Information",
    description: "Understand the activities, turnover information and current status.",
  },
  {
    number: "02",
    title: "Assess VAT Requirement",
    description: "Consider the available information against applicable requirements.",
  },
  {
    number: "03",
    title: "Prepare Documentation",
    description: "Organize the relevant registration or filing information.",
  },
  {
    number: "04",
    title: "Support Registration / Filing",
    description: "Coordinate the appropriate submission process.",
  },
  {
    number: "05",
    title: "Maintain Compliance Records",
    description: "Keep VAT records and supporting documents organized.",
  },
  {
    number: "06",
    title: "Ongoing Advisory",
    description: "Provide continuing guidance when VAT questions arise.",
  },
];

export const vatSupportReasons = [
  "Approaching or crossing applicable registration thresholds",
  "Starting taxable business activities",
  "Needing help with return filing",
  "Missing or incomplete VAT records",
  "Restructuring business operations",
  "Requiring a VAT deregistration review",
] as const;

export const vatFaqs: readonly FAQItem[] = [
  {
    question: "What is UAE VAT?",
    answer:
      "VAT is an indirect tax applied to relevant supplies of goods and services under the UAE VAT framework. Treatment depends on the transaction and business circumstances.",
  },
  {
    question: "When might a business need VAT registration?",
    answer:
      "Registration may be required or available depending on taxable supplies, applicable thresholds and other circumstances. The business information should be reviewed individually.",
  },
  {
    question: "Can DGNS Advisors file VAT returns?",
    answer:
      "DGNS Advisors can support VAT return preparation and filing using the relevant accounting records and information provided for the tax period.",
  },
  {
    question: "Can you assist with VAT deregistration?",
    answer:
      "Yes. The team can review the available circumstances and support the deregistration process where it is applicable.",
  },
  {
    question: "Do you provide ongoing VAT advisory?",
    answer:
      "Yes. Ongoing support can cover VAT records, filing preparation and business-specific VAT questions.",
  },
];

export const corporateTaxServices: readonly ServiceModule[] = [
  {
    title: "Corporate Tax Registration",
    description:
      "Support the registration process using the company information and documents available.",
  },
  {
    title: "Corporate Tax Return Filing",
    description:
      "Assist with return preparation and filing based on the relevant financial records.",
  },
  {
    title: "Corporate Tax Compliance",
    description:
      "Help organize recurring records and information for ongoing tax responsibilities.",
  },
  {
    title: "Corporate Tax Advisory",
    description:
      "Provide practical guidance on business-specific corporate tax considerations.",
  },
  {
    title: "Taxable Income Review",
    description:
      "Review available financial information when supporting taxable income calculations.",
  },
  {
    title: "Deductible Expense Review",
    description:
      "Review recorded expenses and supporting information against applicable considerations.",
  },
];

export const corporateTaxProcess: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Business Review",
    description: "Understand the company, activities and available information.",
  },
  {
    number: "02",
    title: "Registration Assessment",
    description: "Review the current registration position and requirements.",
  },
  {
    number: "03",
    title: "Financial Record Review",
    description: "Review the accounting records relevant to the tax period.",
  },
  {
    number: "04",
    title: "Tax Calculation Support",
    description: "Support calculations using the reviewed business information.",
  },
  {
    number: "05",
    title: "Return Preparation & Filing",
    description: "Prepare and coordinate the applicable return submission.",
  },
  {
    number: "06",
    title: "Ongoing Compliance",
    description: "Maintain organized information for future tax requirements.",
  },
];

export const taxRecordPillars = [
  "Bookkeeping",
  "Transaction categorization",
  "Financial statements",
  "Supporting documents",
  "Expense records",
] as const;

export const corporateTaxFaqs: readonly FAQItem[] = [
  {
    question: "What is UAE Corporate Tax?",
    answer:
      "UAE Corporate Tax is a direct tax framework that can apply to taxable income. The treatment and obligations depend on the business and applicable rules.",
  },
  {
    question: "Can DGNS Advisors assist with registration?",
    answer:
      "Yes. DGNS Advisors can review the available company information and support the corporate tax registration process.",
  },
  {
    question: "Do you support Corporate Tax return filing?",
    answer:
      "Yes. Support can include financial record review, return preparation and filing based on the relevant business information.",
  },
  {
    question: "Why are accurate financial records important?",
    answer:
      "Clear records help support taxable income calculations, expense reviews, return preparation and the underlying documentation for tax work.",
  },
  {
    question: "Can you review deductible expenses?",
    answer:
      "DGNS Advisors can review recorded expenses and supporting information. The treatment of an expense depends on the facts and applicable tax rules.",
  },
];

export const advisoryServices: readonly ServiceModule[] = [
  {
    title: "Business Structuring & Advisory",
    description:
      "Review practical structures and operating considerations around business goals.",
  },
  {
    title: "Financial Planning",
    description:
      "Build a clearer view of financial priorities, resources and planned activity.",
  },
  {
    title: "Financial Reporting",
    description:
      "Organize useful financial information for management review and decision-making.",
  },
  {
    title: "Compliance Support",
    description:
      "Coordinate accounting and tax work alongside broader business requirements.",
  },
  {
    title: "Business Process Solutions",
    description:
      "Review workflows and identify practical opportunities for clearer processes.",
  },
  {
    title: "Accounting Solutions",
    description:
      "Connect advisory work with the financial records and reporting behind it.",
  },
];

export const advisoryProcess: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Define the business challenge, context and intended outcome.",
  },
  {
    number: "02",
    title: "Analyze",
    description: "Review the relevant financial and operational information.",
  },
  {
    number: "03",
    title: "Plan",
    description: "Set out practical priorities and a structured way forward.",
  },
  {
    number: "04",
    title: "Implement",
    description: "Support agreed actions and coordinated business processes.",
  },
  {
    number: "05",
    title: "Monitor",
    description: "Review relevant reporting and the progress of key actions.",
  },
  {
    number: "06",
    title: "Improve",
    description: "Refine the approach as the business and its needs evolve.",
  },
];

export const advisoryFaqs: readonly FAQItem[] = [
  {
    question: "What businesses can use advisory services?",
    answer:
      "Advisory support can be relevant to new or established businesses that need clearer structuring, planning, reporting or process guidance.",
  },
  {
    question: "Can DGNS Advisors help with business structuring?",
    answer:
      "Yes. The team can review intended operations and goals to discuss practical business structuring considerations.",
  },
  {
    question: "Do you support financial planning?",
    answer:
      "Yes. Financial planning support can help organize priorities, available information and forward-looking business requirements.",
  },
  {
    question: "Can you help improve financial reporting?",
    answer:
      "Yes. DGNS Advisors can help structure reporting that gives management a clearer view of relevant financial information.",
  },
  {
    question: "Can advisory services be combined with accounting support?",
    answer:
      "Yes. Combining advisory and accounting can connect decision support with the financial records and reporting behind it.",
  },
];

export const relatedServices = {
  businessSetup: [
    {
      title: "Accounting & Bookkeeping",
      description: "Establish organized records from the start.",
      to: "/services/accounting-bookkeeping",
    },
    {
      title: "VAT Services",
      description: "Review registration, filing and record requirements.",
      to: "/services/vat",
    },
    {
      title: "Corporate Tax",
      description: "Prepare for registration and ongoing compliance.",
      to: "/services/corporate-tax",
    },
  ],
  accounting: [
    {
      title: "VAT Services",
      description: "Connect bookkeeping with VAT records and filing.",
      to: "/services/vat",
    },
    {
      title: "Corporate Tax",
      description: "Use clear records to support corporate tax work.",
      to: "/services/corporate-tax",
    },
    {
      title: "Business Advisory",
      description: "Turn organized financial information into practical insight.",
      to: "/services/advisory",
    },
  ],
  vat: [
    {
      title: "Accounting & Bookkeeping",
      description: "Keep the transaction records behind VAT work organized.",
      to: "/services/accounting-bookkeeping",
    },
    {
      title: "Corporate Tax",
      description: "Coordinate VAT and corporate tax compliance support.",
      to: "/services/corporate-tax",
    },
  ],
  corporateTax: [
    {
      title: "Accounting & Bookkeeping",
      description: "Maintain the records that support tax preparation.",
      to: "/services/accounting-bookkeeping",
    },
    {
      title: "Business Advisory",
      description: "Connect compliance work with broader planning and reporting.",
      to: "/services/advisory",
    },
  ],
  advisory: [
    {
      title: "Business Setup",
      description: "Align a new company structure with its intended operations.",
      to: "/services/business-setup",
    },
    {
      title: "Accounting & Bookkeeping",
      description: "Build the financial information behind better decisions.",
      to: "/services/accounting-bookkeeping",
    },
    {
      title: "Corporate Tax",
      description: "Coordinate tax responsibilities with business planning.",
      to: "/services/corporate-tax",
    },
  ],
} satisfies Record<string, readonly ServiceLink[]>;
