import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  notFoundRouteMeta,
  routeMeta,
} from "../src/config/routeMeta.ts";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distDirectory = join(projectRoot, "dist");
const productionOrigin = "https://dgnsadvisors.ae";
const indexPath = join(distDirectory, "index.html");
const sitemapPath = join(distDirectory, "sitemap.xml");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function replaceRequired(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`Unable to update ${label} in the generated HTML shell.`);
  }

  return html.replace(pattern, replacement);
}

function setNamedMeta(html, name, content) {
  return replaceRequired(
    html,
    new RegExp(`<meta\\s+name="${name}"\\s+content="[^"]*"\\s*/>`),
    `<meta name="${name}" content="${escapeHtml(content)}" />`,
    `${name} meta`,
  );
}

function setPropertyMeta(html, property, content) {
  return replaceRequired(
    html,
    new RegExp(`<meta\\s+property="${property}"\\s+content="[^"]*"\\s*/>`),
    `<meta property="${property}" content="${escapeHtml(content)}" />`,
    `${property} meta`,
  );
}

function renderShell(template, metadata, options = {}) {
  const { canonicalPath = metadata.path, noIndex = false } = options;
  const canonicalUrl = canonicalPath
    ? new URL(canonicalPath, productionOrigin).toString()
    : null;
  let html = template;

  html = replaceRequired(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(metadata.title)}</title>`,
    "title",
  );
  html = setNamedMeta(html, "description", metadata.description);
  html = setNamedMeta(
    html,
    "robots",
    noIndex ? "noindex, nofollow" : "index, follow",
  );
  html = setNamedMeta(html, "twitter:title", metadata.title);
  html = setNamedMeta(html, "twitter:description", metadata.description);
  html = setPropertyMeta(html, "og:title", metadata.title);
  html = setPropertyMeta(html, "og:description", metadata.description);

  if (canonicalUrl) {
    html = replaceRequired(
      html,
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
      "canonical link",
    );
    html = setPropertyMeta(html, "og:url", canonicalUrl);
  } else {
    html = html
      .replace(/\s*<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, "")
      .replace(/\s*<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, "");
  }

  return html;
}

function validateRouteMetadata() {
  const paths = routeMeta.map(({ path }) => path);
  const titles = routeMeta.map(({ title }) => title);

  if (new Set(paths).size !== paths.length) {
    throw new Error("Route metadata contains duplicate paths.");
  }

  if (new Set(titles).size !== titles.length) {
    throw new Error("Route metadata contains duplicate page titles.");
  }

  for (const metadata of routeMeta) {
    if (!metadata.path.startsWith("/") || !metadata.title || !metadata.description) {
      throw new Error(`Invalid route metadata for ${metadata.path || "unknown route"}.`);
    }
  }
}

async function validateSitemap() {
  const sitemap = await readFile(sitemapPath, "utf8");
  const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    ([, url]) => new URL(url).pathname.replace(/\/$/, "") || "/",
  );
  const metadataPaths = routeMeta.map(({ path }) => path);

  if (
    sitemapPaths.length !== metadataPaths.length ||
    metadataPaths.some((path) => !sitemapPaths.includes(path))
  ) {
    throw new Error("Sitemap routes do not match the production route metadata.");
  }
}

async function writeRouteShell(relativePath, html) {
  const outputPath = join(distDirectory, relativePath, "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

validateRouteMetadata();
await validateSitemap();

const template = await readFile(indexPath, "utf8");

for (const metadata of routeMeta) {
  const html = renderShell(template, metadata);

  if (metadata.path === "/") {
    await writeFile(indexPath, html);
  } else {
    await writeRouteShell(metadata.path.slice(1), html);
  }
}

const mainlandMetadata = routeMeta.find(
  ({ path }) => path === "/business-setup/mainland",
);

if (!mainlandMetadata) {
  throw new Error("Mainland route metadata is required for the legacy shell.");
}

await writeRouteShell(
  "uae-mainland",
  renderShell(template, mainlandMetadata, {
    canonicalPath: mainlandMetadata.path,
    noIndex: true,
  }),
);

await writeFile(
  join(distDirectory, "404.html"),
  renderShell(template, notFoundRouteMeta, {
    canonicalPath: null,
    noIndex: true,
  }),
);

console.log(
  `Generated ${routeMeta.length} production route shells, one legacy shell, and 404.html.`,
);
