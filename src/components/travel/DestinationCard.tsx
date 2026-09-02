import { ArrowUpRight, MessageCircle } from "lucide-react";

import {
  buildDestinationExperiencesPath,
  type TravelDestination,
} from "../../data/destinations";
import { buildDestinationWhatsAppMessage } from "../../data/travel";
import { buildWhatsAppUrl } from "../../utils/whatsapp";
import { cn } from "../../utils/cn";
import { ResponsiveImage } from "../common/ResponsiveImage";
import { Button } from "../ui/Button";

export type DestinationCardLayout = "portrait" | "wide";

export type DestinationCardProps = {
  destination: TravelDestination;
  layout?: DestinationCardLayout;
  className?: string;
};

export function DestinationCard({
  destination,
  layout = "portrait",
  className,
}: DestinationCardProps) {
  const enquiryMessage = buildDestinationWhatsAppMessage(destination.name);

  return (
    <article
      id={`destination-${destination.slug}`}
      className={cn(
        "group relative isolate flex min-h-[34rem] overflow-hidden rounded-[2rem] bg-deep-green text-white shadow-[0_26px_70px_-36px_rgba(11,53,45,0.72)] sm:min-h-[38rem]",
        layout === "wide" && "lg:min-h-[32rem]",
        className,
      )}
    >
      <ResponsiveImage
        src={destination.image.src}
        srcSet={destination.image.srcSet}
        sizes={
          layout === "wide"
            ? "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 62vw"
            : "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 34vw"
        }
        width={destination.image.width}
        height={destination.image.height}
        alt={destination.image.alt}
        rounded="none"
        wrapperClassName="absolute inset-0 h-full w-full"
        className="transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        style={{ objectPosition: destination.image.objectPosition }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,26,22,0.02)_18%,rgba(5,26,22,0.34)_48%,rgba(5,26,22,0.97)_100%)]"
      />

      <div className="relative mt-auto w-full p-5 sm:p-7 lg:p-8">
        <p className="type-label text-brand-lime">UAE Destination</p>
        <h3 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-white">
          {destination.name}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
          {destination.description}
        </p>

        <div className="mt-6 flex flex-col gap-2 xl:flex-row xl:flex-wrap">
          <Button
            to={buildDestinationExperiencesPath(destination.slug)}
            variant="primary"
            size="sm"
            className="w-full xl:w-auto"
            aria-label={`Explore experiences in ${destination.name}`}
          >
            Explore Experiences
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Button>
          <Button
            href={buildWhatsAppUrl(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            className="w-full border-white/34 text-white hover:border-white hover:bg-white hover:text-deep-green xl:w-auto"
            aria-label={`Enquire about ${destination.name} on WhatsApp`}
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp Enquiry
          </Button>
        </div>
      </div>
    </article>
  );
}
