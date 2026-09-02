import type { FAQItem } from "../components/ui/FAQAccordion";

export type BusinessSetupLink = {
  title: string;
  description: string;
  to: string;
};

export type BusinessSetupModule = {
  title: string;
  description: string;
};

export type BusinessSetupPathway = BusinessSetupLink & {
  eyebrow: string;
  highlights: readonly string[];
  cta: string;
};

export type BusinessSetupProcessStep = BusinessSetupModule & {
  number: string;
};

export type JurisdictionComparisonRow = {
  label: string;
  mainland: string;
  freeZone: string;
};

export type ActivityCategory = BusinessSetupModule & {
  examples: readonly string[];
};

export type DocumentRequirement = BusinessSetupModule;

export type FreeZoneOption = BusinessSetupModule & {
  location: string;
};

export const businessSetupPathways = [
  {
    eyebrow: "UAE MAINLAND",
    title: "UAE Mainland",
    description:
      "Explore mainland company formation options across Dubai, Abu Dhabi, Sharjah and Ajman.",
    highlights: [
      "Broad UAE business operations",
      "Multiple licensing options",
      "Access to local UAE markets",
      "Emirate-specific setup choices",
    ],
    cta: "Explore Mainland",
    to: "/business-setup/mainland",
  },
  {
    eyebrow: "UAE FREE ZONES",
    title: "UAE Free Zone",
    description:
      "Explore Free Zone structures designed around different industries, business models and international operations.",
    highlights: [
      "Multiple UAE Free Zones",
      "Sector-focused ecosystems",
      "Streamlined setup structures",
      "International business options",
    ],
    cta: "Explore Free Zones",
    to: "/business-setup/free-zone",
  },
] as const satisfies readonly BusinessSetupPathway[];

export const businessSetupHubComparison = [
  {
    label: "Jurisdiction",
    mainland:
      "Licensed by the relevant mainland authority in the selected Emirate.",
    freeZone:
      "Licensed by the authority responsible for the selected UAE Free Zone.",
  },
  {
    label: "Typical Market Focus",
    mainland:
      "Often considered by businesses that plan to serve the wider UAE market.",
    freeZone:
      "Often considered for sector-led, international or zone-based business models.",
  },
  {
    label: "Business Operations",
    mainland:
      "Operations must remain within the scope of the mainland licence and applicable approvals.",
    freeZone:
      "Operations must follow the selected Free Zone's licence and operating framework.",
  },
  {
    label: "Office Requirements",
    mainland:
      "Premises and tenancy requirements depend on activity and licensing authority.",
    freeZone:
      "Workspace and facility options vary by Free Zone, licence and activity.",
  },
  {
    label: "Business Activities",
    mainland:
      "A broad selection may be available, subject to authority classification and approvals.",
    freeZone:
      "Activities are selected from those offered by the chosen Free Zone authority.",
  },
  {
    label: "Licensing Authority",
    mainland:
      "The applicable economic or licensing authority in the chosen Emirate.",
    freeZone: "The authority administering the selected Free Zone.",
  },
  {
    label: "Local UAE Operations",
    mainland:
      "Commonly considered when broader onshore UAE operations are a priority.",
    freeZone:
      "Local-market activity depends on the licence, location and applicable operating rules.",
  },
  {
    label: "International Operations",
    mainland:
      "International activity may be possible where it is covered by the licence and structure.",
    freeZone:
      "Many Free Zones are designed with internationally focused businesses in mind.",
  },
  {
    label: "Visa Considerations",
    mainland:
      "Eligibility and capacity depend on the company, premises and current requirements.",
    freeZone:
      "Eligibility and allocations vary by authority, facility and selected setup.",
  },
  {
    label: "Suitable Business Types",
    mainland:
      "May suit trading, services, industrial and other businesses seeking mainland operations.",
    freeZone:
      "May suit consultants, startups, traders, technology firms and internationally oriented companies.",
  },
] as const satisfies readonly JurisdictionComparisonRow[];

export const businessSetupComparisonNote =
  "Requirements vary depending on activity, jurisdiction and licensing authority.";

export const businessSetupJourney = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Understand business objectives, activities and preferred market.",
  },
  {
    number: "02",
    title: "Activity Selection",
    description: "Identify suitable licensed business activities.",
  },
  {
    number: "03",
    title: "Jurisdiction Selection",
    description: "Compare Mainland and Free Zone options.",
  },
  {
    number: "04",
    title: "Business Structure",
    description: "Review the appropriate legal/company structure.",
  },
  {
    number: "05",
    title: "Documentation",
    description: "Prepare and coordinate required documents.",
  },
  {
    number: "06",
    title: "Licensing & Registration",
    description: "Support the relevant company formation process.",
  },
  {
    number: "07",
    title: "Post-Setup Support",
    description:
      "Accounting, bookkeeping, VAT, Corporate Tax and advisory support.",
  },
] as const satisfies readonly BusinessSetupProcessStep[];

export const businessSetupHubFaqs: readonly FAQItem[] = [
  {
    question: "Should I choose Mainland or Free Zone?",
    answer:
      "The suitable route depends on your activity, target market, location, facility needs and operating plans. DGNS Advisors can help you compare the practical requirements of relevant options before you decide.",
  },
  {
    question: "How do I choose my business activity?",
    answer:
      "Your licensed activity should accurately reflect the work the company intends to perform. We can help review your plans against activity categories offered by the relevant licensing authorities.",
  },
  {
    question: "Can DGNS Advisors support licensing and registration?",
    answer:
      "Yes. DGNS Advisors can guide the setup process, coordinate documentation and support applications with the relevant authority. Requirements and approvals depend on the selected activity, structure and jurisdiction.",
  },
  {
    question: "Can you assist after the company is established?",
    answer:
      "Yes. Ongoing support is available for accounting, bookkeeping, VAT, Corporate Tax and business advisory requirements.",
  },
  {
    question: "Are company setup requirements the same across all Emirates?",
    answer:
      "No. Requirements can differ by Emirate, licensing authority, business activity, legal structure and applicant status. Each proposed setup should be reviewed on its own facts.",
  },
];

export const mainlandEmirates = [
  {
    title: "Dubai",
    description:
      "One of the region's most dynamic commercial and international business hubs.",
    to: "/business-setup/mainland/dubai",
  },
  {
    title: "Abu Dhabi",
    description:
      "The UAE capital offers a strong environment across finance, industry, technology and professional services.",
    to: "/business-setup/mainland/abu-dhabi",
  },
  {
    title: "Sharjah",
    description:
      "A strategic choice for trading, manufacturing, services and growing SMEs.",
    to: "/business-setup/mainland/sharjah",
  },
  {
    title: "Ajman",
    description:
      "An accessible option for entrepreneurs, startups and growing businesses.",
    to: "/business-setup/mainland/ajman",
  },
] as const satisfies readonly BusinessSetupLink[];

export const mainlandBenefits = [
  {
    title: "Access to UAE Markets",
    description:
      "A mainland structure is commonly considered by companies planning broader onshore UAE operations, subject to their licence and approvals.",
  },
  {
    title: "Broad Range of Activities",
    description:
      "Mainland authorities offer many commercial, professional and industrial activity categories, with availability varying by Emirate.",
  },
  {
    title: "Local Business Opportunities",
    description:
      "The structure can support relationships with UAE customers and businesses where the licensed activities permit them.",
  },
  {
    title: "Flexible Growth Potential",
    description:
      "Businesses can review additional activities, premises and operating requirements as their plans evolve.",
  },
  {
    title: "Government & Private Sector Opportunities",
    description:
      "Certain mainland businesses may pursue relevant public- and private-sector opportunities, subject to eligibility and procurement rules.",
  },
  {
    title: "Multiple Emirate Options",
    description:
      "Dubai, Abu Dhabi, Sharjah and Ajman each offer a distinct business environment and authority framework to compare.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const mainlandActivityCategories = [
  {
    title: "Commercial & Trading",
    description:
      "Activities involving goods, distribution and commercial transactions.",
    examples: ["General trading", "Retail", "Wholesale", "Import and export"],
  },
  {
    title: "Professional Services",
    description:
      "Knowledge-led and specialist services delivered to businesses or consumers.",
    examples: [
      "Consultancy",
      "Technology",
      "Marketing",
      "Design",
      "Professional services",
    ],
  },
  {
    title: "Industrial",
    description:
      "Production and operational activities that may require suitable premises and approvals.",
    examples: ["Manufacturing", "Processing", "Assembly", "Industrial activities"],
  },
  {
    title: "Hospitality & Tourism",
    description:
      "Customer-facing activities within food, accommodation and visitor services.",
    examples: ["Restaurants", "Hospitality", "Tourism services"],
  },
  {
    title: "Other Regulated Activities",
    description:
      "Specialist sectors that commonly involve an additional regulator or approval pathway.",
    examples: [
      "Healthcare",
      "Education",
      "Real estate",
      "Media",
      "Financial activities",
    ],
  },
] as const satisfies readonly ActivityCategory[];

export const mainlandActivityNote =
  "Some activities require additional approvals from relevant authorities.";

export const mainlandFaqs: readonly FAQItem[] = [
  {
    question: "What is a UAE Mainland company?",
    answer:
      "A UAE Mainland company is licensed by the relevant mainland authority in its Emirate. Its permitted activities and operations are determined by its licence, legal structure and any required external approvals.",
  },
  {
    question: "Which Emirate should I choose?",
    answer:
      "The choice should reflect your activity, customer market, location, premises, regulator and longer-term plans. DGNS Advisors can help compare Dubai, Abu Dhabi, Sharjah and Ajman against those needs.",
  },
  {
    question: "Can Mainland companies conduct business across the UAE?",
    answer:
      "Mainland structures are commonly selected for broader UAE operations, but the actual scope depends on the licensed activities and applicable federal, Emirate-level and sector requirements.",
  },
  {
    question: "Are additional approvals required for some activities?",
    answer:
      "Yes. Regulated activities may require consent or permits from relevant sector authorities in addition to the primary business licence.",
  },
  {
    question: "Can DGNS Advisors help with accounting and tax after setup?",
    answer:
      "Yes. DGNS Advisors can support ongoing bookkeeping, financial reporting, VAT, Corporate Tax and advisory requirements after formation.",
  },
];

export const dubaiBenefits = [
  {
    title: "UAE Market Access",
    description:
      "A practical route for businesses intending to operate more broadly in the UAE, within their licensed scope.",
  },
  {
    title: "Business Activity Flexibility",
    description:
      "A wide selection of activities can be considered, subject to classification and regulatory approval.",
  },
  {
    title: "Strategic Global Location",
    description:
      "Dubai connects regional markets with major international trade and travel networks.",
  },
  {
    title: "Diverse Industry Opportunities",
    description:
      "The Emirate supports established and emerging sectors across trade, services, technology and industry.",
  },
  {
    title: "Scalable Business Environment",
    description:
      "Companies can plan premises, teams and additional licensed activities around changing requirements.",
  },
  {
    title: "Professional Infrastructure",
    description:
      "Businesses benefit from developed transport, communications and professional-service ecosystems.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const dubaiActivityCategories = [
  {
    title: "Commercial",
    description: "Trading and distribution activities for specified goods.",
    examples: ["General trading", "Wholesale", "Retail", "Import and export"],
  },
  {
    title: "Professional",
    description: "Specialist and knowledge-based business services.",
    examples: ["Management consultancy", "Marketing", "Design", "Business services"],
  },
  {
    title: "Industrial",
    description:
      "Manufacturing and production activities requiring appropriate facilities and approvals.",
    examples: ["Manufacturing", "Assembly", "Processing", "Packaging"],
  },
  {
    title: "Tourism & Hospitality",
    description: "Visitor, food-service and hospitality-related activities.",
    examples: ["Travel services", "Restaurants", "Hospitality services", "Events"],
  },
  {
    title: "Technology",
    description: "Digital products, technical services and technology consultancy.",
    examples: ["Software services", "IT consultancy", "Data services", "E-commerce"],
  },
  {
    title: "Real Estate",
    description:
      "Property-related activities governed by their applicable licensing and sector rules.",
    examples: ["Brokerage", "Property management", "Real estate consultancy"],
  },
  {
    title: "Healthcare",
    description:
      "Clinical and non-clinical services that may require health-authority approval.",
    examples: ["Clinics", "Healthcare consultancy", "Medical support services"],
  },
  {
    title: "Education",
    description:
      "Learning and training activities subject to the relevant education requirements.",
    examples: ["Training institutes", "Professional education", "Learning support"],
  },
  {
    title: "Media",
    description: "Creative, production and communications activities.",
    examples: ["Content production", "Advertising", "Publishing", "Media services"],
  },
  {
    title: "Other Regulated Activities",
    description:
      "Activities that need assessment by an additional government or sector authority.",
    examples: ["Financial services", "Legal services", "Transport", "Specialist services"],
  },
] as const satisfies readonly ActivityCategory[];

export const dubaiFormationProcess = [
  {
    number: "01",
    title: "Define Business Activity",
    description: "Clarify the products or services the company intends to provide.",
  },
  {
    number: "02",
    title: "Choose Legal Structure",
    description:
      "Review a structure suited to the intended ownership and operating model.",
  },
  {
    number: "03",
    title: "Reserve / Confirm Trade Name",
    description:
      "Select a proposed name that meets the relevant naming requirements.",
  },
  {
    number: "04",
    title: "Prepare Initial Documentation",
    description:
      "Coordinate applicant, activity and company information for the proposed setup.",
  },
  {
    number: "05",
    title: "Complete Relevant Applications",
    description:
      "Prepare and submit the applicable formation forms and supporting information.",
  },
  {
    number: "06",
    title: "Obtain Required Approvals",
    description:
      "Coordinate additional authority approvals where the selected activity requires them.",
  },
  {
    number: "07",
    title: "Complete Licensing Process",
    description:
      "Complete the remaining registration and licensing requirements for the approved setup.",
  },
  {
    number: "08",
    title: "Set Up Ongoing Compliance",
    description:
      "Plan accounting records, tax obligations and recurring company requirements.",
  },
] as const satisfies readonly BusinessSetupProcessStep[];

export const dubaiProcessNote =
  "Steps can vary depending on activity, legal structure and regulatory approvals.";

export const dubaiDocuments = [
  {
    title: "Shareholder Identification Documents",
    description:
      "Identity information for the proposed shareholders and other relevant parties.",
  },
  {
    title: "Passport Copies",
    description: "Clear passport copies for relevant applicants and stakeholders.",
  },
  {
    title: "Visa / Emirates ID Where Applicable",
    description:
      "UAE residency and identification documents where relevant to the applicant.",
  },
  {
    title: "Proposed Business Name",
    description: "Preferred trade-name options for authority review.",
  },
  {
    title: "Business Activity Information",
    description: "A clear description of the company's intended operations.",
  },
  {
    title: "Company Structure Information",
    description:
      "Details of the proposed ownership, management and legal structure.",
  },
  {
    title: "Address / Office Documentation Where Required",
    description:
      "Premises or tenancy evidence where the selected licence requires it.",
  },
  {
    title: "Approvals for Regulated Activities",
    description:
      "Supporting consents or information requested by the relevant sector authority.",
  },
] as const satisfies readonly DocumentRequirement[];

export const dubaiDocumentsNote =
  "Documentation requirements vary depending on the business structure, activity and applicant status.";

export const dubaiFaqs: readonly FAQItem[] = [
  {
    question: "Why consider Dubai Mainland?",
    answer:
      "Dubai Mainland may suit businesses seeking a well-connected commercial base and broader UAE market operations. Suitability still depends on the proposed activity, customers, premises and regulatory needs.",
  },
  {
    question: "What business activities can be licensed?",
    answer:
      "Dubai offers commercial, professional, industrial and other activity categories. Availability, combinations and approval requirements must be confirmed for the proposed company.",
  },
  {
    question: "What documents may be required?",
    answer:
      "Common requirements include applicant identification, passport copies, proposed activity and structure information, trade-name choices and premises information where applicable. The final list depends on the setup.",
  },
  {
    question: "How long can Dubai company formation take?",
    answer:
      "Formation timelines depend on business activity, approvals, legal structure and document readiness.",
  },
  {
    question: "Can DGNS Advisors manage ongoing accounting and tax compliance?",
    answer:
      "Yes. DGNS Advisors can support bookkeeping, financial reporting, VAT, Corporate Tax and related advisory requirements after setup.",
  },
];

export const abuDhabiIndustries = [
  {
    title: "Finance",
    description:
      "Financial and supporting professional activities, subject to the relevant regulatory framework.",
  },
  {
    title: "Energy",
    description:
      "Energy, sustainability and related support activities within an established sector ecosystem.",
  },
  {
    title: "Technology",
    description:
      "Software, digital services, research and technology-enabled business models.",
  },
  {
    title: "Professional Services",
    description:
      "Consultancy and specialist services supporting institutions and private businesses.",
  },
  {
    title: "Healthcare",
    description:
      "Healthcare and support activities that may require sector-specific approval.",
  },
  {
    title: "Industrial",
    description:
      "Manufacturing, processing and production activity using suitable facilities.",
  },
  {
    title: "Real Estate",
    description:
      "Property-related services operating under applicable licensing and sector rules.",
  },
  {
    title: "Tourism",
    description:
      "Hospitality, events and visitor services connected to the capital's tourism economy.",
  },
  {
    title: "Logistics",
    description:
      "Transport, distribution and supply-chain activities serving local and regional trade.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const abuDhabiBenefits = [
  {
    title: "Capital-City Business Environment",
    description:
      "Operate in the UAE capital alongside public institutions, major enterprises and growing private-sector ecosystems.",
  },
  {
    title: "Established Sector Clusters",
    description:
      "Explore opportunities across finance, energy, technology, industry and professional services.",
  },
  {
    title: "Regional Connectivity",
    description:
      "Access transport, logistics and communications infrastructure connecting UAE and international markets.",
  },
  {
    title: "Mainland Operating Scope",
    description:
      "A structure frequently considered for wider UAE business activity, subject to the licence and approvals.",
  },
  {
    title: "Long-Term Planning",
    description:
      "Build a company structure around premises, team and compliance needs as the business develops.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const abuDhabiFormationProcess = [
  {
    number: "01",
    title: "Review the Business Plan",
    description:
      "Clarify the intended activity, customers and operational requirements.",
  },
  {
    number: "02",
    title: "Confirm Activity & Structure",
    description:
      "Review suitable activity classifications and a corresponding legal structure.",
  },
  {
    number: "03",
    title: "Coordinate Trade Name",
    description:
      "Prepare suitable name options for confirmation by the relevant authority.",
  },
  {
    number: "04",
    title: "Prepare Documentation",
    description:
      "Assemble applicant, ownership, premises and activity information as required.",
  },
  {
    number: "05",
    title: "Address Approvals",
    description:
      "Coordinate any additional permissions associated with regulated activities.",
  },
  {
    number: "06",
    title: "Complete Registration & Licensing",
    description:
      "Support applicable registration steps through issuance of the business licence.",
  },
  {
    number: "07",
    title: "Plan Ongoing Compliance",
    description:
      "Organise accounting, tax and recurring company obligations after formation.",
  },
] as const satisfies readonly BusinessSetupProcessStep[];

export const abuDhabiDocuments = [
  {
    title: "Applicant Identification",
    description:
      "Passport and, where applicable, UAE visa or Emirates ID details for relevant parties.",
  },
  {
    title: "Activity & Trade-Name Information",
    description:
      "The proposed licensed activities and suitable company-name options.",
  },
  {
    title: "Ownership & Management Details",
    description:
      "Information about shareholders, managers and the intended company structure.",
  },
  {
    title: "Premises Information",
    description:
      "Office, facility or tenancy documents where required for the proposed licence.",
  },
  {
    title: "Regulatory Supporting Documents",
    description:
      "Qualifications, business plans, consents or other evidence where an activity requires them.",
  },
] as const satisfies readonly DocumentRequirement[];

export const abuDhabiDocumentsNote =
  "The required documents depend on the activity, legal structure, applicant status and relevant authority approvals.";

export const abuDhabiFaqs: readonly FAQItem[] = [
  {
    question: "Why establish a Mainland company in Abu Dhabi?",
    answer:
      "Abu Dhabi offers a sophisticated capital-city environment across sectors including finance, energy, technology, industry and professional services. Whether it fits your company depends on its market and operating requirements.",
  },
  {
    question: "Which business activities are available in Abu Dhabi?",
    answer:
      "A range of commercial, professional and industrial activities may be available. The proposed activity must be checked against the relevant authority's classifications and approval requirements.",
  },
  {
    question: "Could my activity need an additional approval?",
    answer:
      "Yes. Activities in regulated fields such as healthcare, education, finance or certain industrial sectors may require approval from another authority.",
  },
  {
    question: "What information is needed to begin?",
    answer:
      "An initial review usually starts with the intended activities, ownership, applicant status, location needs and preferred company name. The final document list is setup-specific.",
  },
  {
    question: "Can DGNS Advisors provide support after formation?",
    answer:
      "Yes. Ongoing accounting, bookkeeping, VAT, Corporate Tax and advisory support can be coordinated after licensing.",
  },
];

export const sharjahOpportunities = [
  {
    title: "Connected Trading Base",
    description:
      "Sharjah's location supports businesses considering distribution and trade across the UAE and wider region.",
  },
  {
    title: "Industrial Ecosystem",
    description:
      "Established industrial areas support manufacturing, processing and related supply-chain activity.",
  },
  {
    title: "Growing SME Environment",
    description:
      "Entrepreneurs and established SMEs can evaluate structures suited to their practical operating needs.",
  },
  {
    title: "Service-Sector Potential",
    description:
      "Professional, creative and business services can serve a diverse local commercial community.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const sharjahIndustries = [
  {
    title: "Trading & Distribution",
    description:
      "Wholesale, retail, import, export and distribution activities for approved product categories.",
  },
  {
    title: "Manufacturing",
    description:
      "Production, processing and assembly activities using appropriate facilities and approvals.",
  },
  {
    title: "Professional Services",
    description:
      "Consultancy, marketing, technical and other specialist business services.",
  },
  {
    title: "Logistics",
    description:
      "Transport, warehousing and supply-chain services subject to relevant requirements.",
  },
  {
    title: "Hospitality",
    description:
      "Food, visitor and hospitality services within their applicable regulatory frameworks.",
  },
  {
    title: "Creative & Media",
    description:
      "Design, content, communications and media-related services where permitted.",
  },
  {
    title: "Education",
    description:
      "Training and learning services that may require education-sector approval.",
  },
  {
    title: "Real Estate",
    description:
      "Property services operating within applicable activity and sector rules.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const sharjahFormationProcess = [
  {
    number: "01",
    title: "Scope the Business",
    description:
      "Define intended activities, customer market and operational needs.",
  },
  {
    number: "02",
    title: "Select Activity & Structure",
    description:
      "Review suitable licensing categories and company structures.",
  },
  {
    number: "03",
    title: "Confirm Trade Name",
    description:
      "Prepare proposed names in line with applicable naming requirements.",
  },
  {
    number: "04",
    title: "Prepare Applications",
    description:
      "Coordinate formation forms and supporting applicant information.",
  },
  {
    number: "05",
    title: "Arrange Premises & Approvals",
    description:
      "Address location evidence and external consents where required.",
  },
  {
    number: "06",
    title: "Complete Licensing",
    description:
      "Support the remaining registration and licence-issuance steps.",
  },
  {
    number: "07",
    title: "Organise Business Compliance",
    description:
      "Establish appropriate records and review ongoing tax and reporting needs.",
  },
] as const satisfies readonly BusinessSetupProcessStep[];

export const sharjahDocuments = [
  {
    title: "Identity Documents",
    description:
      "Passport and, where relevant, UAE residency information for applicants.",
  },
  {
    title: "Proposed Company Details",
    description:
      "Trade-name options, activities, ownership and management information.",
  },
  {
    title: "Business Location Evidence",
    description:
      "Premises or tenancy documentation when required for the activity and licence.",
  },
  {
    title: "Activity-Specific Information",
    description:
      "Qualifications, technical details or business information requested for certain activities.",
  },
  {
    title: "External Approvals Where Applicable",
    description:
      "Permissions from relevant sector authorities for regulated activities.",
  },
] as const satisfies readonly DocumentRequirement[];

export const sharjahDocumentsNote =
  "Documentation and approval requirements vary with the activity, structure, premises and applicant status.";

export const sharjahFaqs: readonly FAQItem[] = [
  {
    question: "Which businesses may consider Sharjah Mainland?",
    answer:
      "Sharjah may be considered by trading, manufacturing, logistics, professional-service and other businesses seeking a connected UAE base. The fit depends on the activity and operating plan.",
  },
  {
    question: "Is Sharjah suitable for industrial activity?",
    answer:
      "Sharjah has an established industrial environment, but each proposed activity must be assessed for facility, environmental, technical and authority requirements.",
  },
  {
    question: "Can a Sharjah Mainland company trade across the UAE?",
    answer:
      "Mainland companies are commonly used for wider UAE operations. The permitted scope still depends on the licence, product or service, and any sector-specific rules.",
  },
  {
    question: "What documents may be needed for formation?",
    answer:
      "Requirements commonly cover applicant identity, proposed activities, company structure and premises where applicable. Additional documents may be requested for regulated activities.",
  },
  {
    question: "Does DGNS Advisors support post-setup compliance?",
    answer:
      "Yes. DGNS Advisors can assist with accounting, bookkeeping, VAT, Corporate Tax and ongoing advisory needs after the company is established.",
  },
];

export const ajmanAdvantages = [
  {
    title: "Entrepreneurial Environment",
    description:
      "An approachable business setting for founders evaluating their first UAE company or a new operating base.",
  },
  {
    title: "Mainland Market Orientation",
    description:
      "A mainland option for businesses planning UAE customer and supplier relationships within their licensed scope.",
  },
  {
    title: "Range of Activity Categories",
    description:
      "Commercial, professional and industrial activities may be considered, subject to authority approval.",
  },
  {
    title: "Practical Location Choice",
    description:
      "Ajman's position can suit businesses connected with neighbouring Emirates and regional transport routes.",
  },
  {
    title: "Room to Develop",
    description:
      "Companies can plan their structure, facilities and compliance arrangements around future operations.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const ajmanSuitableBusinessTypes = [
  {
    title: "Startups & Founder-Led Businesses",
    description:
      "New ventures seeking a mainland structure aligned with a focused operating plan.",
  },
  {
    title: "Trading Companies",
    description:
      "Businesses handling approved goods through wholesale, retail, import or export activities.",
  },
  {
    title: "Professional Services",
    description:
      "Consultants, technical specialists and business-service providers.",
  },
  {
    title: "E-commerce Businesses",
    description:
      "Online business models with suitable licensed activities and operating arrangements.",
  },
  {
    title: "Light Industrial Operations",
    description:
      "Assembly, processing or production businesses with appropriate premises and approvals.",
  },
  {
    title: "Growing SMEs",
    description:
      "Established small and medium businesses reviewing a UAE mainland base for their next stage.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const ajmanFormationProcess = [
  {
    number: "01",
    title: "Discuss Your Business Model",
    description:
      "Review activities, customers, ownership and practical operating requirements.",
  },
  {
    number: "02",
    title: "Select Activity & Structure",
    description:
      "Identify suitable activity categories and an appropriate company form.",
  },
  {
    number: "03",
    title: "Prepare Trade-Name Options",
    description:
      "Choose proposed names that can be submitted for authority review.",
  },
  {
    number: "04",
    title: "Coordinate Documents",
    description:
      "Prepare applicant, ownership and business information for the application.",
  },
  {
    number: "05",
    title: "Address Premises & Approvals",
    description:
      "Complete location and additional approval requirements where applicable.",
  },
  {
    number: "06",
    title: "Complete Registration",
    description:
      "Support the relevant formation and licensing steps with the authority.",
  },
  {
    number: "07",
    title: "Plan Ongoing Requirements",
    description:
      "Review accounting, tax and recurring compliance needs for the new business.",
  },
] as const satisfies readonly BusinessSetupProcessStep[];

export const ajmanDocuments = [
  {
    title: "Applicant Identification",
    description:
      "Passport copies and UAE residency documents where applicable.",
  },
  {
    title: "Business Activity Details",
    description:
      "A clear outline of the products or services the company will provide.",
  },
  {
    title: "Trade Name & Structure",
    description:
      "Proposed company-name options, shareholder details and management information.",
  },
  {
    title: "Premises Documentation",
    description:
      "Office, shop or facility evidence where required for the selected activity.",
  },
  {
    title: "Additional Approval Documents",
    description:
      "Supporting information required by other authorities for regulated work.",
  },
] as const satisfies readonly DocumentRequirement[];

export const ajmanDocumentsNote =
  "The final document list depends on the activity, company structure, applicant status and authority requirements.";

export const ajmanFaqs: readonly FAQItem[] = [
  {
    question: "Who may consider an Ajman Mainland company?",
    answer:
      "Ajman may suit entrepreneurs, startups, trading businesses, professional-service firms and growing SMEs whose activities and operating needs align with the Emirate's mainland framework.",
  },
  {
    question: "Which activities can be licensed in Ajman?",
    answer:
      "Commercial, professional and industrial categories may be available. A proposed activity must be checked with the relevant authority, including any additional approval requirements.",
  },
  {
    question: "Will I need business premises?",
    answer:
      "Premises requirements depend on the activity, licence and authority rules. The appropriate office or facility arrangement should be confirmed for the proposed setup.",
  },
  {
    question: "What documentation may be required?",
    answer:
      "Requirements commonly include identification, activity, ownership, trade-name and, where applicable, premises information. Regulated activities can require further documents.",
  },
  {
    question: "Can DGNS Advisors assist as the business grows?",
    answer:
      "Yes. DGNS Advisors can provide continuing accounting, bookkeeping, VAT, Corporate Tax and business advisory support.",
  },
];

export const freeZoneEducationIntro =
  "A UAE Free Zone is a defined business jurisdiction administered by its own authority. Each authority offers its own activity list, licence categories, company structures and operational requirements, so the right choice depends on what the business will actually do.";

export const freeZoneEducationPoints = [
  {
    title: "Different Authorities",
    description:
      "Each Free Zone is administered by its own authority and follows a jurisdiction-specific formation process.",
  },
  {
    title: "Different Activities",
    description:
      "Available activities and permitted combinations vary between Free Zones.",
  },
  {
    title: "Different Office Requirements",
    description:
      "Facility options and physical-space requirements depend on the authority, activity and licence.",
  },
  {
    title: "Different Package Structures",
    description:
      "Licence, facility and visa components can be structured differently by each authority.",
  },
  {
    title: "Different Industry Focus",
    description:
      "Some Free Zones build ecosystems around particular sectors, while others support a broader activity mix.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const freeZoneAudiences = [
  {
    title: "International Entrepreneurs",
    description:
      "Founders exploring a UAE base for regional or international operations.",
  },
  {
    title: "Consultants",
    description:
      "Independent and specialist advisers seeking an appropriate professional licence.",
  },
  {
    title: "Technology Companies",
    description:
      "Software, digital-product and technology-service businesses.",
  },
  {
    title: "E-commerce Businesses",
    description:
      "Online businesses whose products, fulfilment and market model fit the selected jurisdiction.",
  },
  {
    title: "Trading Companies",
    description:
      "Companies dealing in approved product categories under the relevant trading licence.",
  },
  {
    title: "Service Providers",
    description:
      "Professional and business-service companies with clearly defined activities.",
  },
  {
    title: "Startups",
    description:
      "Early-stage teams looking for an ecosystem aligned with their activity and growth plan.",
  },
  {
    title: "Holding / International Structures",
    description:
      "Structures considered for appropriate ownership or international objectives where applicable and professionally reviewed.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const freeZoneAudienceNote =
  "Suitability depends on activity and operational requirements.";

export const freeZoneBenefits = [
  {
    title: "Streamlined Setup Structures",
    description:
      "Many jurisdictions provide a coordinated authority-led formation process, with requirements varying by setup.",
  },
  {
    title: "Industry-Focused Ecosystems",
    description:
      "Selected Free Zones bring together businesses and facilities connected with particular sectors.",
  },
  {
    title: "International Business Orientation",
    description:
      "Free Zones are often considered by companies with regional or international customers and partners.",
  },
  {
    title: "Range of Facility Options",
    description:
      "Depending on the jurisdiction, options may include shared workspaces, offices, warehouses or other facilities.",
  },
  {
    title: "Multiple UAE Locations",
    description:
      "Businesses can compare jurisdictions across different Emirates and commercial environments.",
  },
  {
    title: "Various Licensing Categories",
    description:
      "Authorities may offer commercial, professional, industrial and other licences within their approved activity lists.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const freeZoneSelectionFactors = [
  {
    title: "Business Activity",
    description:
      "Confirm that the authority offers an activity matching the company's real operations.",
  },
  {
    title: "Target Market",
    description:
      "Consider where customers are located and how the business expects to serve them.",
  },
  {
    title: "Office Requirements",
    description:
      "Compare the facility types and physical-space conditions connected with the licence.",
  },
  {
    title: "Visa Requirements",
    description:
      "Review expected immigration needs against the selected setup and facility.",
  },
  {
    title: "Budget",
    description:
      "Assess the complete setup and ongoing requirements rather than a headline package alone.",
  },
  {
    title: "Location Preference",
    description:
      "Balance proximity, travel, logistics and ecosystem needs across UAE locations.",
  },
  {
    title: "Growth Plans",
    description:
      "Consider future activities, team, facilities and operating reach when comparing options.",
  },
  {
    title: "Regulatory Needs",
    description:
      "Identify any sector approvals or operating conditions that may influence jurisdiction choice.",
  },
] as const satisfies readonly BusinessSetupModule[];

export const freeZoneOptions = [
  {
    title: "IFZA",
    location: "Dubai",
    description:
      "A Dubai Free Zone option supporting a range of professional and commercial activities, subject to its current licensing framework.",
  },
  {
    title: "Abu Dhabi",
    location: "Abu Dhabi",
    description:
      "Explore Abu Dhabi Free Zone authorities and sector ecosystems against your activity, facility and market requirements.",
  },
  {
    title: "Ras Al Khaimah",
    location: "Ras Al Khaimah",
    description:
      "Compare Ras Al Khaimah Free Zone structures for suitable service, commercial and industrial business models.",
  },
  {
    title: "Sharjah",
    location: "Sharjah",
    description:
      "Consider Sharjah Free Zone options across trading, creative, service and industrial ecosystems.",
  },
  {
    title: "Ajman",
    location: "Ajman",
    description:
      "Review Ajman Free Zone structures in relation to the intended activity, operating model and longer-term plans.",
  },
] as const satisfies readonly FreeZoneOption[];

export const freeZoneFormationProcess = [
  {
    number: "01",
    title: "Understand Business Activity",
    description:
      "Clarify what the company will do, where it will operate and whom it will serve.",
  },
  {
    number: "02",
    title: "Compare Suitable Free Zones",
    description:
      "Review authorities that support the activity and practical operating requirements.",
  },
  {
    number: "03",
    title: "Select License Type",
    description:
      "Identify the licence category that reflects the proposed operations.",
  },
  {
    number: "04",
    title: "Choose Company Structure",
    description:
      "Review an appropriate structure for ownership and business objectives.",
  },
  {
    number: "05",
    title: "Prepare Documentation",
    description:
      "Coordinate applicant, activity and company information required by the authority.",
  },
  {
    number: "06",
    title: "Submit Application",
    description:
      "Complete the relevant authority forms and supporting submissions.",
  },
  {
    number: "07",
    title: "Complete Licensing",
    description:
      "Address remaining authority requirements through licence issuance.",
  },
  {
    number: "08",
    title: "Plan Post-Setup Compliance",
    description:
      "Organise accounting records, tax reviews and recurring company requirements.",
  },
] as const satisfies readonly BusinessSetupProcessStep[];

export const freeZoneFaqs: readonly FAQItem[] = [
  {
    question: "What is a UAE Free Zone?",
    answer:
      "A UAE Free Zone is a defined business jurisdiction administered by its own authority. Each authority has its own activities, licence categories, company structures and operating requirements.",
  },
  {
    question: "Which Free Zone should I choose?",
    answer:
      "The choice should be based on the business activity, target market, facility and visa needs, location, operating plans and authority requirements rather than one factor alone.",
  },
  {
    question: "Can Free Zone companies operate within the UAE?",
    answer:
      "The permitted route for activity outside a Free Zone depends on the licence, business model and applicable UAE and authority rules. The intended local-market operations should be reviewed before selecting a jurisdiction.",
  },
  {
    question: "Do Free Zones have different licensing rules?",
    answer:
      "Yes. Activity lists, licence categories, facility requirements, application procedures and ongoing obligations can differ between Free Zone authorities.",
  },
  {
    question: "Can DGNS Advisors compare Free Zones for me?",
    answer:
      "Yes. DGNS Advisors can compare relevant options around your proposed activity, operational needs and long-term goals, then support the selected formation process.",
  },
];

export const recurringServicesAfterSetup = [
  {
    title: "Accounting & Bookkeeping",
    description:
      "Keep financial records organised from the beginning with ongoing accounting and bookkeeping support.",
    to: "/services/accounting-bookkeeping",
  },
  {
    title: "VAT Services",
    description:
      "Review registration, record-keeping and filing requirements as the business begins operating.",
    to: "/services/vat",
  },
  {
    title: "Corporate Tax",
    description:
      "Establish appropriate records and support the company's UAE Corporate Tax compliance requirements.",
    to: "/services/corporate-tax",
  },
  {
    title: "Business Advisory",
    description:
      "Connect formation decisions with financial planning, reporting and practical business support.",
    to: "/services/advisory",
  },
] as const satisfies readonly BusinessSetupLink[];
