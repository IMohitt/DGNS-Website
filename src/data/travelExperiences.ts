import grandMosque1000 from "../assets/images/travel/abu-dhabi-sheikh-zayed-grand-mosque-1000.jpg";
import grandMosque640 from "../assets/images/travel/abu-dhabi-sheikh-zayed-grand-mosque-640.jpg";
import grandMosque from "../assets/images/travel/abu-dhabi-sheikh-zayed-grand-mosque.jpg";
import alFahidi1000 from "../assets/images/travel/dubai-al-fahidi-heritage-lane-1000.jpg";
import alFahidi640 from "../assets/images/travel/dubai-al-fahidi-heritage-lane-640.jpg";
import alFahidi from "../assets/images/travel/dubai-al-fahidi-heritage-lane.jpg";
import spa1000 from "../assets/images/travel/dubai-coastal-spa-relaxation-1000.jpg";
import spa640 from "../assets/images/travel/dubai-coastal-spa-relaxation-640.jpg";
import spa from "../assets/images/travel/dubai-coastal-spa-relaxation.jpg";
import desert1000 from "../assets/images/travel/dubai-desert-safari-dunes-1000.jpg";
import desert640 from "../assets/images/travel/dubai-desert-safari-dunes-640.jpg";
import desert from "../assets/images/travel/dubai-desert-safari-dunes.jpg";
import type { DestinationSlug, TravelImageAsset } from "./destinations";
import { destinationBySlug } from "./destinations";

export type TravelExperienceCategory =
  | "adventure"
  | "culture"
  | "city"
  | "relaxation"
  | "marine";

export type TravelExperience = {
  id: string;
  name: string;
  category: TravelExperienceCategory;
  locationSlug: DestinationSlug;
  location: string;
  image: TravelImageAsset;
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

const desertImage: TravelImageAsset = {
  src: desert,
  srcSet: `${desert640} 640w, ${desert1000} 1000w, ${desert} 1536w`,
  width: 1536,
  height: 1024,
  alt: "Golden UAE desert dunes crossed by off-road tracks",
  objectPosition: "50% center",
};

const alFahidiImage: TravelImageAsset = {
  src: alFahidi,
  srcSet: `${alFahidi640} 640w, ${alFahidi1000} 1000w, ${alFahidi} 1536w`,
  width: 1536,
  height: 1024,
  alt: "Traditional wind towers and lane in Dubai's Al Fahidi district",
  objectPosition: "50% center",
};

const spaImage: TravelImageAsset = {
  src: spa,
  srcSet: `${spa640} 640w, ${spa1000} 1000w, ${spa} 1536w`,
  width: 1536,
  height: 1024,
  alt: "Coastal wellness setting with spa towels beside the beach",
  objectPosition: "50% center",
};

const grandMosqueImage: TravelImageAsset = {
  src: grandMosque,
  srcSet: `${grandMosque640} 640w, ${grandMosque1000} 1000w, ${grandMosque} 1536w`,
  width: 1536,
  height: 1024,
  alt: "Sheikh Zayed Grand Mosque exterior in Abu Dhabi",
  objectPosition: "50% center",
};

export const travelExperienceCategories = [
  { value: "adventure", label: "Adventure" },
  { value: "culture", label: "Culture" },
  { value: "city", label: "City" },
  { value: "relaxation", label: "Relaxation" },
  { value: "marine", label: "Marine" },
] as const;

export const travelExperiences = [
  {
    id: "dubai-desert-safari",
    name: "Desert Safari",
    category: "adventure",
    locationSlug: "dubai",
    location: "Dubai",
    image: desertImage,
    shortDescription:
      "Experience dune bashing, camel rides, a BBQ dinner and live entertainment in the Dubai desert.",
    featured: true,
  },
  {
    id: "dubai-dune-buggy-quad-biking",
    name: "Dune Buggy & Quad Biking",
    category: "adventure",
    locationSlug: "dubai",
    location: "Dubai",
    image: desertImage,
    shortDescription:
      "Explore Dubai's golden dunes through a high-energy off-road experience.",
    featured: false,
  },
  {
    id: "dubai-sky-views-city-adventures",
    name: "Sky Views & City Adventures",
    category: "city",
    locationSlug: "dubai",
    location: "Dubai",
    image: imageFor("dubai"),
    shortDescription:
      "Take in Burj Khalifa views, a zipline, yacht cruise and memorable skyline experiences.",
    featured: true,
  },
  {
    id: "abu-dhabi-grand-mosque",
    name: "Sheikh Zayed Grand Mosque Visit",
    category: "culture",
    locationSlug: "abu-dhabi",
    location: "Abu Dhabi",
    image: grandMosqueImage,
    shortDescription:
      "Experience one of Abu Dhabi's defining cultural landmarks and its monumental architecture.",
    featured: true,
  },
  {
    id: "dubai-museum-future",
    name: "Museum of the Future Experience",
    category: "culture",
    locationSlug: "dubai",
    location: "Dubai",
    image: imageFor("dubai"),
    shortDescription:
      "Discover a contemporary Dubai attraction exploring innovation, Emirati culture and visions of the future.",
    featured: false,
  },
  {
    id: "dubai-al-fahidi",
    name: "Al Fahidi Historical District Tour",
    category: "culture",
    locationSlug: "dubai",
    location: "Dubai",
    image: alFahidiImage,
    shortDescription:
      "Explore traditional lanes, wind-tower architecture and a quieter view of Dubai's heritage.",
    featured: false,
  },
  {
    id: "dubai-luxury-spa",
    name: "Luxury Spa Experience",
    category: "relaxation",
    locationSlug: "dubai",
    location: "Dubai",
    image: spaImage,
    shortDescription:
      "Slow the pace with a refined wellness experience in Dubai.",
    featured: true,
  },
  {
    id: "dubai-jbr-beach",
    name: "Beachside Relaxation at JBR",
    category: "relaxation",
    locationSlug: "dubai",
    location: "Dubai",
    image: spaImage,
    shortDescription:
      "Enjoy relaxed beachside time with Dubai's urban coastline close at hand.",
    featured: false,
  },
  {
    id: "fujairah-snorkeling",
    name: "Snorkeling & Calm Waters",
    category: "marine",
    locationSlug: "fujairah",
    location: "Fujairah",
    image: imageFor("fujairah"),
    shortDescription:
      "Explore Fujairah's clear east-coast waters and calm marine scenery.",
    featured: true,
  },
] as const satisfies readonly TravelExperience[];

export const featuredExperiences = travelExperiences.filter(
  (experience) => experience.featured,
);

export const buildExperienceWhatsAppMessage = (
  experience: Pick<TravelExperience, "name" | "location">,
) =>
  `Hello DGNS Advisors,\n\nI am interested in the ${experience.name} experience in ${experience.location}.\n\nPlease share availability and details.`;
