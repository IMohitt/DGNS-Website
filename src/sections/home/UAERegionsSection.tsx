import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import abuDhabiImage from "../../assets/images/home/location-abu-dhabi.jpg";
import abuDhabiImage640 from "../../assets/images/home/location-abu-dhabi-640.jpg";
import ajmanImage from "../../assets/images/home/location-ajman.jpg";
import ajmanImage640 from "../../assets/images/home/location-ajman-640.jpg";
import dubaiImage from "../../assets/images/home/location-dubai.jpg";
import dubaiImage640 from "../../assets/images/home/location-dubai-640.jpg";
import sharjahImage from "../../assets/images/home/location-sharjah.jpg";
import sharjahImage640 from "../../assets/images/home/location-sharjah-640.jpg";
import { Container } from "../../components/common/Container";
import { ResponsiveImage } from "../../components/common/ResponsiveImage";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import { regionCards } from "../../data/home";

const images = [dubaiImage, abuDhabiImage, sharjahImage, ajmanImage] as const;
const smallImages = [
  dubaiImage640,
  abuDhabiImage640,
  sharjahImage640,
  ajmanImage640,
] as const;
const imagePositions = ["72% center", "58% center", "50% center", "50% center"] as const;

export function UAERegionsSection() {
  return (
    <Section background="off-white" spacing="lg" aria-labelledby="regions-title">
      <Container>
        <SectionHeading
          eyebrow="Mainland Company Formation"
          title="Start Your Business Across the UAE"
          description="Explore mainland formation opportunities in four of the UAE’s established commercial locations."
          headingId="regions-title"
        />

        <div className="-mx-4 mt-12 grid snap-x snap-mandatory auto-cols-[82%] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 xl:grid-cols-4">
          {regionCards.map((region, index) => (
            <ScrollReveal
              key={region.city}
              delay={(index % 4) * 0.06}
              className="min-w-0 snap-start"
            >
              <Link
                to={region.to}
                className="group relative block min-h-[23rem] overflow-hidden rounded-card bg-deep-green shadow-soft sm:min-h-[27rem]"
              >
                <ResponsiveImage
                  src={images[index]}
                  srcSet={`${smallImages[index]} 640w, ${images[index]} 1100w`}
                  sizes="(max-width: 639px) 82vw, (max-width: 1279px) calc(50vw - 2rem), 300px"
                  width={1100}
                  height={733}
                  alt={`${region.city} business district in the UAE`}
                  rounded="none"
                  wrapperClassName="absolute inset-0 h-full w-full"
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  style={{ objectPosition: imagePositions[index] }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,53,45,0.02)_28%,rgba(11,53,45,0.93)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="type-label text-brand-lime">UAE Mainland</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {region.city}
                      </h3>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/16 bg-white/8 text-white transition-colors group-hover:border-brand-lime group-hover:bg-brand-lime group-hover:text-deep-green">
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/68">{region.description}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
