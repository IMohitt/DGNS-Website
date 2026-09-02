import abuDhabi640 from "../assets/images/home/location-abu-dhabi-640.jpg";
import abuDhabi from "../assets/images/home/location-abu-dhabi.jpg";
import ajman640 from "../assets/images/home/location-ajman-640.jpg";
import ajman from "../assets/images/home/location-ajman.jpg";
import dubai640 from "../assets/images/home/location-dubai-640.jpg";
import dubai from "../assets/images/home/location-dubai.jpg";
import sharjah640 from "../assets/images/home/location-sharjah-640.jpg";
import sharjah from "../assets/images/home/location-sharjah.jpg";
import fujairah1000 from "../assets/images/travel/fujairah-east-coast-mountains-sea-1000.jpg";
import fujairah640 from "../assets/images/travel/fujairah-east-coast-mountains-sea-640.jpg";
import fujairah from "../assets/images/travel/fujairah-east-coast-mountains-sea.jpg";
import rasAlKhaimah1000 from "../assets/images/travel/ras-al-khaimah-hajar-mountains-1000.jpg";
import rasAlKhaimah640 from "../assets/images/travel/ras-al-khaimah-hajar-mountains-640.jpg";
import rasAlKhaimah from "../assets/images/travel/ras-al-khaimah-hajar-mountains.jpg";

export type TravelImageAsset = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  objectPosition?: string;
};

export type DestinationSlug =
  | "dubai"
  | "abu-dhabi"
  | "sharjah"
  | "ajman"
  | "ras-al-khaimah"
  | "fujairah";

export type TravelDestination = {
  slug: DestinationSlug;
  name: string;
  description: string;
  image: TravelImageAsset;
  featured: boolean;
};

export const travelDestinations = [
  {
    slug: "dubai",
    name: "Dubai",
    description:
      "Iconic architecture, modern attractions, beaches, shopping and desert experiences.",
    image: {
      src: dubai,
      srcSet: `${dubai640} 640w, ${dubai} 1100w`,
      width: 1100,
      height: 733,
      alt: "Dubai skyline and modern city architecture",
      objectPosition: "72% center",
    },
    featured: true,
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    description:
      "Culture, architecture, island attractions and premium city experiences.",
    image: {
      src: abuDhabi,
      srcSet: `${abuDhabi640} 640w, ${abuDhabi} 1100w`,
      width: 1100,
      height: 733,
      alt: "Abu Dhabi waterfront and modern skyline",
      objectPosition: "50% center",
    },
    featured: true,
  },
  {
    slug: "sharjah",
    name: "Sharjah",
    description:
      "Heritage, museums, culture and family-focused attractions.",
    image: {
      src: sharjah,
      srcSet: `${sharjah640} 640w, ${sharjah} 1100w`,
      width: 1100,
      height: 733,
      alt: "Sharjah waterfront architecture and palm-lined promenade",
      objectPosition: "46% center",
    },
    featured: true,
  },
  {
    slug: "ajman",
    name: "Ajman",
    description:
      "A relaxed coastal destination with beaches and a quieter UAE experience.",
    image: {
      src: ajman,
      srcSet: `${ajman640} 640w, ${ajman} 1100w`,
      width: 1100,
      height: 733,
      alt: "Ajman marina and coastal promenade",
      objectPosition: "50% center",
    },
    featured: true,
  },
  {
    slug: "ras-al-khaimah",
    name: "Ras Al Khaimah",
    description:
      "Mountains, outdoor adventures, resorts and dramatic landscapes.",
    image: {
      src: rasAlKhaimah,
      srcSet: `${rasAlKhaimah640} 640w, ${rasAlKhaimah1000} 1000w, ${rasAlKhaimah} 1536w`,
      width: 1536,
      height: 1024,
      alt: "Rugged Hajar Mountains in Ras Al Khaimah",
      objectPosition: "52% center",
    },
    featured: true,
  },
  {
    slug: "fujairah",
    name: "Fujairah",
    description:
      "East-coast scenery, beaches, mountains and marine experiences.",
    image: {
      src: fujairah,
      srcSet: `${fujairah640} 640w, ${fujairah1000} 1000w, ${fujairah} 1536w`,
      width: 1536,
      height: 1024,
      alt: "Fujairah east coast where mountains meet the sea",
      objectPosition: "52% center",
    },
    featured: true,
  },
] as const satisfies readonly TravelDestination[];

export const featuredDestinations = travelDestinations.filter(
  (destination) => destination.featured,
);

export const destinationBySlug = new Map(
  travelDestinations.map((destination) => [destination.slug, destination]),
);

export const buildDestinationExperiencesPath = (slug: string) =>
  `/tour-travels/experiences?destination=${encodeURIComponent(slug)}`;
