import { siteConfig } from "../config/siteConfig";

export const buildGoogleMapsSearchUrl = (
  location = siteConfig.location,
): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

export const buildGoogleMapsEmbedUrl = (
  location = siteConfig.location,
): string =>
  `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
