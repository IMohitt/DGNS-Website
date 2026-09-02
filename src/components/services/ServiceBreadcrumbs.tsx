import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { JsonLd } from "../common/JsonLd";
import { siteConfig } from "../../config/siteConfig";
import { cn } from "../../utils/cn";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

type ServiceBreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
  inverse?: boolean;
  className?: string;
};

export function ServiceBreadcrumbs({
  items,
  inverse = false,
  className,
}: ServiceBreadcrumbsProps) {
  const { pathname } = useLocation();
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.to ?? pathname, siteConfig.website).toString(),
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className={className}>
        <ol
          className={cn(
            "flex flex-wrap items-center gap-2 text-xs font-semibold",
            inverse ? "text-white/58" : "text-muted",
          )}
        >
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? (
                  <ChevronRight aria-hidden="true" className="size-3.5 opacity-55" />
                ) : null}
                {item.to && !isCurrent ? (
                  <Link
                    to={item.to}
                    className={cn(
                      "rounded-sm transition-colors",
                      inverse
                        ? "hover:text-brand-lime"
                        : "hover:text-deep-green",
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isCurrent ? "page" : undefined}
                    className={inverse ? "text-white/82" : "text-deep-green"}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
