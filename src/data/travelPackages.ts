import desert1000 from "../assets/images/travel/dubai-desert-safari-dunes-1000.jpg";
import desert640 from "../assets/images/travel/dubai-desert-safari-dunes-640.jpg";
import desert from "../assets/images/travel/dubai-desert-safari-dunes.jpg";
import type { DestinationSlug, TravelImageAsset } from "./destinations";
import { destinationBySlug } from "./destinations";

export type TravelPackage = {
  id: string;
  name: string;
  locationSlug: DestinationSlug;
  location: string;
  category: "adventure" | "city" | "culture" | "coastal";
  image: TravelImageAsset;
  duration?: string;
  price?: number;
  currency?: "AED";
  priceLabel?: string;
  shortDescription: string;
  highlights?: readonly string[];
  featured: boolean;
};

const imageFor = (slug: DestinationSlug) => {
  const destination = destinationBySlug.get(slug);

  if (!destination) {
    throw new Error(`Missing travel destination image for ${slug}`);
  }

  return destination.image;
};

const dubaiDesertImage: TravelImageAsset = {
  src: desert,
  srcSet: `${desert640} 640w, ${desert1000} 1000w, ${desert} 1536w`,
  width: 1536,
  height: 1024,
  alt: "Golden desert dunes and off-road tracks near Dubai",
  objectPosition: "50% center",
};

export const travelPackages = [
  {
    id: "ras-al-khaimah",
    name: "Ras Al Khaimah",
    locationSlug: "ras-al-khaimah",
    location: "Ras Al Khaimah",
    category: "adventure",
    image: imageFor("ras-al-khaimah"),
    duration: "7 days / 6 nights",
    price: 1299,
    currency: "AED",
    priceLabel: "AED 1,299 / person",
    shortDescription:
      "A varied Emirate escape shaped by mountain scenery, desert landscapes and beach resorts.",
    highlights: ["Mountains", "Desert", "Beach resorts"],
    featured: true,
  },
  {
    id: "abu-dhabi",
    name: "Abu Dhabi",
    locationSlug: "abu-dhabi",
    location: "Abu Dhabi",
    category: "city",
    image: imageFor("abu-dhabi"),
    duration: "10 days / 9 nights",
    price: 2499,
    currency: "AED",
    priceLabel: "AED 2,499 / couple",
    shortDescription:
      "A longer city experience bringing together landmarks, culture, premium attractions and modern architecture.",
    highlights: ["Landmarks", "Culture", "Modern architecture"],
    featured: true,
  },
  {
    id: "sharjah",
    name: "Sharjah",
    locationSlug: "sharjah",
    location: "Sharjah",
    category: "culture",
    image: imageFor("sharjah"),
    duration: "8 days / 7 nights",
    price: 1799,
    currency: "AED",
    priceLabel: "AED 1,799 / person",
    shortDescription:
      "A culture-led journey through heritage, museums, art districts and family experiences.",
    highlights: ["Heritage", "Museums", "Art districts"],
    featured: false,
  },
  {
    id: "dubai-luxury-desert-adventure",
    name: "Dubai Luxury Desert Adventure",
    locationSlug: "dubai",
    location: "Dubai",
    category: "adventure",
    image: dubaiDesertImage,
    duration: "5 days / 4 nights",
    price: 1999,
    currency: "AED",
    priceLabel: "AED 1,999 / person",
    shortDescription:
      "A Dubai stay centred on the contrast between the modern city and its desert landscape.",
    highlights: ["Dubai", "Desert experience"],
    featured: true,
  },
  {
    id: "ajman",
    name: "Ajman",
    locationSlug: "ajman",
    location: "Ajman",
    category: "coastal",
    image: imageFor("ajman"),
    duration: "9 days / 8 nights",
    price: 3299,
    currency: "AED",
    priceLabel: "AED 3,299 / person",
    shortDescription:
      "A relaxed coastal stay with beaches, budget-friendly stays and cultural spots.",
    highlights: ["Relaxed beaches", "Budget-friendly stays", "Cultural spots"],
    featured: false,
  },
  {
    id: "fujairah",
    name: "Fujairah",
    locationSlug: "fujairah",
    location: "Fujairah",
    category: "coastal",
    image: imageFor("fujairah"),
    duration: "12 days / 11 nights",
    price: 2799,
    currency: "AED",
    priceLabel: "AED 2,799 / person",
    shortDescription:
      "An east-coast escape with clear waters, mountain scenery and snorkeling experiences.",
    highlights: ["East coast", "Clear waters", "Snorkeling"],
    featured: true,
  },
] as const satisfies readonly TravelPackage[];

export const featuredTravelPackages = travelPackages.filter(
  (travelPackage) => travelPackage.featured,
);

export const packageDataNote =
  "Package details, durations and prices are retained from the existing DGNS website content. Contact DGNS for current availability and confirmation.";

export const buildPackageWhatsAppMessage = (
  travelPackage: Pick<
    TravelPackage,
    "name" | "location" | "duration" | "priceLabel"
  >,
) => {
  const lines = [
    "Hello DGNS Advisors,",
    "",
    "I am interested in the following UAE travel package:",
    "",
    `Package: ${travelPackage.name}`,
    `Location: ${travelPackage.location}`,
  ];

  if (travelPackage.duration) {
    lines.push(`Duration: ${travelPackage.duration}`);
  }

  if (travelPackage.priceLabel) {
    lines.push(`Price Shown: ${travelPackage.priceLabel}`);
  }

  lines.push("", "Please share availability and further details.");
  return lines.join("\n");
};
