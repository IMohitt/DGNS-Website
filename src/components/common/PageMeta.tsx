import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { siteConfig } from "../../config/siteConfig";

export interface PageMetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
  noIndex?: boolean;
  image?: string;
  imageAlt?: string;
  openGraphType?: "website" | "article";
}

function getOrCreateMeta(name: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.append(element);
  }

  return element;
}

function getOrCreatePropertyMeta(property: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.append(element);
  }

  return element;
}

function removePropertyMeta(property: string) {
  document.head
    .querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
    ?.remove();
}

function removeNamedMeta(name: string) {
  document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.remove();
}

function normalizePath(path: string) {
  if (path === "/") return path;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.replace(/\/+$/, "");
}

function toAbsoluteUrl(value: string) {
  return new URL(value, siteConfig.website).toString();
}

function getOrCreateCanonicalLink() {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.append(element);
  }

  return element;
}

export function PageMeta({
  title,
  description,
  canonicalPath,
  noIndex = false,
  image,
  imageAlt,
  openGraphType = "website",
}: PageMetaProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageTitle = title.includes(siteConfig.shortName)
      ? title
      : `${title} | ${siteConfig.shortName}`;
    const canonicalUrl = toAbsoluteUrl(
      normalizePath(canonicalPath ?? pathname),
    );
    const socialImage = image || siteConfig.socialSharingImage;

    document.title = pageTitle;
    getOrCreateMeta("description").content = description;
    getOrCreateMeta("robots").content = noIndex
      ? "noindex, nofollow"
      : "index, follow";
    getOrCreateCanonicalLink().href = canonicalUrl;

    getOrCreatePropertyMeta("og:title").content = pageTitle;
    getOrCreatePropertyMeta("og:description").content = description;
    getOrCreatePropertyMeta("og:type").content = openGraphType;
    getOrCreatePropertyMeta("og:url").content = canonicalUrl;
    getOrCreatePropertyMeta("og:site_name").content = siteConfig.shortName;
    getOrCreatePropertyMeta("og:locale").content = "en_AE";

    getOrCreateMeta("twitter:card").content = "summary_large_image";
    getOrCreateMeta("twitter:title").content = pageTitle;
    getOrCreateMeta("twitter:description").content = description;

    if (socialImage) {
      const absoluteImageUrl = toAbsoluteUrl(socialImage);
      const resolvedImageAlt =
        imageAlt || `${siteConfig.shortName} — UAE business advisory`;

      getOrCreatePropertyMeta("og:image").content = absoluteImageUrl;
      getOrCreatePropertyMeta("og:image:alt").content = resolvedImageAlt;
      getOrCreateMeta("twitter:image").content = absoluteImageUrl;
      getOrCreateMeta("twitter:image:alt").content = resolvedImageAlt;
    } else {
      removePropertyMeta("og:image");
      removePropertyMeta("og:image:alt");
      removeNamedMeta("twitter:image");
      removeNamedMeta("twitter:image:alt");
    }
  }, [
    canonicalPath,
    description,
    image,
    imageAlt,
    noIndex,
    openGraphType,
    pathname,
    title,
  ]);

  return null;
}
