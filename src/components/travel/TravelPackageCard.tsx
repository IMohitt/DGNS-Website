import { Clock3, MapPin, MessageCircle } from "lucide-react";

import {
  buildPackageWhatsAppMessage,
  type TravelPackage,
} from "../../data/travelPackages";
import { cn } from "../../utils/cn";
import { buildWhatsAppUrl } from "../../utils/whatsapp";
import { ResponsiveImage } from "../common/ResponsiveImage";
import { Button } from "../ui/Button";

export type TravelPackageCardProps = {
  travelPackage: TravelPackage;
  className?: string;
};

export function TravelPackageCard({
  travelPackage,
  className,
}: TravelPackageCardProps) {
  const priceLabel =
    travelPackage.priceLabel?.trim() || "Contact for Details";
  const enquiryMessage = buildPackageWhatsAppMessage(travelPackage);

  return (
    <article
      id={`package-${travelPackage.id}`}
      className={cn(
        "group flex h-full min-w-0 flex-col overflow-hidden rounded-[2rem] border border-deep-green/12 bg-[#FCFAF5] shadow-[0_24px_64px_-40px_rgba(11,53,45,0.58)]",
        className,
      )}
    >
      <div className="relative overflow-hidden bg-deep-green">
        <ResponsiveImage
          src={travelPackage.image.src}
          srcSet={travelPackage.image.srcSet}
          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 34vw"
          width={travelPackage.image.width}
          height={travelPackage.image.height}
          alt={travelPackage.image.alt}
          rounded="none"
          wrapperClassName="aspect-[16/9]"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          style={{ objectPosition: travelPackage.image.objectPosition }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(5,26,22,0.68)_100%)]"
        />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/24 bg-deep-green/84 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md">
          <MapPin aria-hidden="true" className="size-3.5 text-brand-lime" />
          {travelPackage.location}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4 border-b border-deep-green/10 pb-5">
          <div className="min-w-0">
            <p className="type-label text-emerald">UAE Package</p>
            <h3 className="mt-3 text-[clamp(1.55rem,2.8vw,2.25rem)] font-semibold leading-tight tracking-[-0.04em] text-deep-green">
              {travelPackage.name}
            </h3>
          </div>
          <span className="shrink-0 rounded-xl bg-[#E8DDCA] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-deep-green">
            {travelPackage.category}
          </span>
        </div>

        <p className="mt-5 text-sm leading-7 text-muted">
          {travelPackage.shortDescription}
        </p>

        <div className="mt-5 grid gap-3 rounded-2xl border border-deep-green/9 bg-white p-4">
          {travelPackage.duration ? (
            <div className="flex items-center gap-3 text-sm font-semibold text-deep-green/78">
              <Clock3 aria-hidden="true" className="size-4 shrink-0 text-emerald" />
              <span>{travelPackage.duration}</span>
            </div>
          ) : null}
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted">
              Published package price
            </p>
            <p className="mt-1 text-xl font-semibold tracking-[-0.025em] text-deep-green">
              {priceLabel}
            </p>
          </div>
        </div>

        {travelPackage.highlights?.length ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {travelPackage.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-deep-green/10 bg-[#F3EBDD] px-3 py-1.5 text-xs font-semibold text-deep-green/72"
              >
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        <Button
          href={buildWhatsAppUrl(enquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          variant="dark"
          className="mt-auto w-full"
          aria-label={`Ask about the ${travelPackage.name} package on WhatsApp`}
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          Ask About This Package
        </Button>
      </div>
    </article>
  );
}
