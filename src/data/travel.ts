import { travelDestinations } from "./destinations";
import { travelExperienceCategories } from "./travelExperiences";

export const travelNavigation = [
  { label: "Overview", to: "/tour-travels" },
  { label: "Destinations", to: "/tour-travels/destinations" },
  { label: "Experiences", to: "/tour-travels/experiences" },
  { label: "Packages", to: "/tour-travels/packages" },
] as const;

export const whyExploreWithDGNS = [
  {
    title: "Personalized Guidance",
    description: "Help visitors understand available experiences.",
  },
  {
    title: "UAE-Focused Options",
    description: "Explore activities across multiple Emirates.",
  },
  {
    title: "Direct Communication",
    description: "Plan details through WhatsApp.",
  },
  {
    title: "Flexible Experience Selection",
    description: "Choose activities suited to your interests.",
  },
] as const;

export const travelPlanningSteps = [
  {
    number: "01",
    title: "Tell Us Your Plans",
    description: "Share destination, travel dates and interests.",
  },
  {
    number: "02",
    title: "Explore Options",
    description: "Review available destinations, experiences or packages.",
  },
  {
    number: "03",
    title: "Confirm Details",
    description: "Discuss availability and relevant details directly.",
  },
  {
    number: "04",
    title: "Enjoy the UAE",
    description: "Proceed once arrangements are confirmed.",
  },
] as const;

export type TravelPlannerValues = {
  name: string;
  travelDate: string;
  travelers: string;
  destination: string;
  experienceType: string;
  message: string;
};

export const travelDestinationOptions = travelDestinations.map(
  ({ slug, name }) => ({ value: slug, label: name }),
);

export const travelExperienceTypeOptions = travelExperienceCategories.map(
  ({ value, label }) => ({ value, label }),
);

const getOptionLabel = (
  options: readonly { value: string; label: string }[],
  value: string,
) => options.find((option) => option.value === value)?.label ?? value;

export const buildTravelPlannerMessage = (values: TravelPlannerValues) => {
  const lines = [
    "Hello DGNS Advisors,",
    "",
    "I would like help planning a UAE experience.",
    "",
    `Name: ${values.name.trim()}`,
  ];

  if (values.travelDate) {
    lines.push(`Travel Date: ${values.travelDate}`);
  }

  if (values.travelers.trim()) {
    lines.push(`Travelers: ${values.travelers.trim()}`);
  }

  if (values.destination) {
    lines.push(
      `Destination: ${getOptionLabel(travelDestinationOptions, values.destination)}`,
    );
  }

  if (values.experienceType) {
    lines.push(
      `Experience Type: ${getOptionLabel(travelExperienceTypeOptions, values.experienceType)}`,
    );
  }

  if (values.message.trim()) {
    lines.push("", "Message:", values.message.trim());
  }

  return lines.join("\n");
};

export const travelMessages = {
  hubHero:
    "Hello DGNS Advisors, I would like help planning a UAE travel experience.",
  hubFinal:
    "Hello DGNS Advisors, I would like help planning my UAE travel experience.",
  packages:
    "Hello DGNS Advisors, I would like information about your UAE travel packages.",
  destinations:
    "Hello DGNS Advisors, I would like help planning a visit to a UAE destination.",
  experiences:
    "Hello DGNS Advisors, I would like help choosing UAE travel experiences.",
} as const;

export const buildDestinationWhatsAppMessage = (destination: string) =>
  `Hello DGNS Advisors,\n\nI would like help planning a visit to ${destination}.\n\nPlease share available experiences and details.`;

export const travelEmptyStateMessage =
  "No matching experiences found. Try another filter or contact DGNS for assistance.";
