import { siteConfig } from "../../config/siteConfig";
import { JsonLd } from "../common/JsonLd";

export type TravelItemListSchemaItem = {
  name: string;
  url?: string;
};

export type TravelItemListSchemaProps = {
  name: string;
  path: string;
  items: readonly TravelItemListSchemaItem[];
};

export function TravelItemListSchema({
  name,
  path,
  items,
}: TravelItemListSchemaProps) {
  const pageUrl = new URL(path, siteConfig.website).toString();
  const listId =
    name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "travel";

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${pageUrl}#${listId}-item-list`,
        name,
        url: pageUrl,
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Thing",
            name: item.name,
            url: new URL(item.url ?? `${path}#item-${index + 1}`, siteConfig.website).toString(),
          },
        })),
      }}
    />
  );
}
