import {
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { siteConfig } from "../../config/siteConfig";
import {
  buildGoogleMapsEmbedUrl,
  buildGoogleMapsSearchUrl,
} from "../../utils/maps";
import { Container } from "../common/Container";
import { ResponsiveImage } from "../common/ResponsiveImage";
import { ScrollReveal } from "../common/ScrollReveal";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { Button } from "../ui/Button";

type OfficeLocationProps = {
  image: string;
  imageSrcSet: string;
  imageWidth: number;
  imageHeight: number;
};

const socialMeta: Readonly<
  Record<keyof typeof siteConfig.socials, { label: string; icon: LucideIcon }>
> = {
  linkedin: { label: "LinkedIn", icon: Linkedin },
  instagram: { label: "Instagram", icon: Instagram },
  facebook: { label: "Facebook", icon: Facebook },
};

export function OfficeLocation({
  image,
  imageSrcSet,
  imageWidth,
  imageHeight,
}: OfficeLocationProps) {
  const mapsUrl = buildGoogleMapsSearchUrl();
  const mapEmbedUrl = buildGoogleMapsEmbedUrl();
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
  const verifiedSocials = Object.entries(siteConfig.socials).filter(
    ([, href]) => Boolean(href),
  ) as Array<[keyof typeof siteConfig.socials, string]>;

  return (
    <Section
      background="off-white"
      spacing="lg"
      aria-labelledby="office-location-title"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Dubai Office"
              title="Visit / Reach DGNS Advisors"
              description="Connect with DGNS Advisors from Dubai or contact the team remotely to discuss UAE business setup, accounting, VAT, Corporate Tax or advisory support."
              headingId="office-location-title"
            />
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={0.08}>
            <p className="max-w-2xl rounded-2xl border border-deep-green/10 bg-white p-5 text-sm leading-7 text-muted lg:ml-auto">
              The location image below represents Dubai and is not presented as
              DGNS office photography. Use the live map for the configured office
              address.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <ScrollReveal className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-deep-green text-white shadow-soft">
              <div className="relative">
                <ResponsiveImage
                  src={image}
                  srcSet={imageSrcSet}
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 38vw"
                  width={imageWidth}
                  height={imageHeight}
                  alt="Dubai skyline and contemporary architecture representing the city location of DGNS Advisors"
                  wrapperClassName="aspect-[16/10] rounded-none"
                  style={{ objectPosition: "72% center" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(7,37,31,0.82)_100%)]"
                />
                <p className="absolute bottom-5 left-5 type-label text-brand-lime sm:bottom-6 sm:left-7">
                  Dubai • United Arab Emirates
                </p>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-lime text-deep-green">
                    <MapPin aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {siteConfig.companyName}
                    </h3>
                    <address className="mt-3 max-w-md text-sm leading-7 text-white/68 not-italic">
                      {siteConfig.address.display}
                    </address>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 border-t border-white/12 pt-6">
                  <a
                    href={phoneHref}
                    className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-white/76 transition-colors hover:text-brand-lime"
                  >
                    <Phone aria-hidden="true" className="size-4 text-brand-lime" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.primaryEmail}`}
                    className="inline-flex min-h-11 min-w-0 items-center gap-3 break-all text-sm font-semibold text-white/76 transition-colors hover:text-brand-lime"
                  >
                    <Mail aria-hidden="true" className="size-4 shrink-0 text-brand-lime" />
                    {siteConfig.primaryEmail}
                  </a>
                </div>

                {verifiedSocials.length ? (
                  <nav aria-label="DGNS Advisors social media" className="mt-6 flex gap-2">
                    {verifiedSocials.map(([network, href]) => {
                      const social = socialMeta[network];
                      const Icon = social.icon;

                      return (
                        <a
                          key={network}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${siteConfig.shortName} on ${social.label}`}
                          className="grid size-11 place-items-center rounded-full border border-white/14 text-white transition-colors hover:border-brand-lime hover:text-brand-lime"
                        >
                          <Icon aria-hidden="true" className="size-4" />
                        </a>
                      );
                    })}
                  </nav>
                ) : null}

                <Button
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="mt-auto w-full sm:w-auto"
                >
                  Open in Maps
                  <ExternalLink aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" delay={0.08} className="h-full">
            <div className="h-[24rem] overflow-hidden rounded-[2rem] border border-deep-green/10 bg-[#E8ECE7] shadow-soft sm:h-[31rem] lg:h-full lg:min-h-[42rem]">
              <iframe
                src={mapEmbedUrl}
                title={`Map showing ${siteConfig.shortName} at ${siteConfig.address.display}`}
                width="1200"
                height="760"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
