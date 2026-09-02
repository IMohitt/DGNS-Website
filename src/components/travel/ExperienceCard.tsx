import { MapPin, MessageCircle } from "lucide-react";

import {
  buildExperienceWhatsAppMessage,
  travelExperienceCategories,
  type TravelExperience,
} from "../../data/travelExperiences";
import { cn } from "../../utils/cn";
import { buildWhatsAppUrl } from "../../utils/whatsapp";
import { ResponsiveImage } from "../common/ResponsiveImage";
import { Button } from "../ui/Button";

export type ExperienceCardProps = {
  experience: TravelExperience;
  className?: string;
};

const categoryLabels = new Map(
  travelExperienceCategories.map((category) => [category.value, category.label]),
);

export function ExperienceCard({
  experience,
  className,
}: ExperienceCardProps) {
  const categoryLabel =
    categoryLabels.get(experience.category) ?? experience.category;
  const enquiryMessage = buildExperienceWhatsAppMessage(experience);

  return (
    <article
      id={`experience-${experience.id}`}
      className={cn(
        "group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-[#DCCFB9] bg-white shadow-[0_22px_58px_-38px_rgba(11,53,45,0.48)]",
        className,
      )}
    >
      <div className="relative overflow-hidden bg-[#E8DDCA]">
        <ResponsiveImage
          src={experience.image.src}
          srcSet={experience.image.srcSet}
          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 34vw"
          width={experience.image.width}
          height={experience.image.height}
          alt={experience.image.alt}
          rounded="none"
          wrapperClassName="aspect-[16/10]"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          style={{ objectPosition: experience.image.objectPosition }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(5,26,22,0.35)_100%)]"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-deep-green/88 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
          {categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald">
          <MapPin aria-hidden="true" className="size-4 shrink-0" />
          {experience.location}
        </p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] text-deep-green">
          {experience.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted">
          {experience.shortDescription}
        </p>

        {experience.highlights?.length ? (
          <ul className="mt-5 grid gap-2 border-t border-deep-green/8 pt-5 text-sm font-semibold text-deep-green/72">
            {experience.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-soft-green"
                />
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
          aria-label={`Enquire about ${experience.name} in ${experience.location} on WhatsApp`}
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          Enquire for Details
        </Button>
      </div>
    </article>
  );
}
