import {
  ArrowUpRight,
  Compass,
  MapPinned,
  MessageCircleMore,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage1000 from "../../assets/images/travel/uae-travel-hero-dubai-desert-coast-1000.jpg";
import heroImage640 from "../../assets/images/travel/uae-travel-hero-dubai-desert-coast-640.jpg";
import heroImage from "../../assets/images/travel/uae-travel-hero-dubai-desert-coast.jpg";
import { Container } from "../../components/common/Container";
import { PageMeta } from "../../components/common/PageMeta";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import {
  DestinationCard,
  ExperienceCard,
  TravelCTA,
  TravelHero,
  TravelItemListSchema,
  TravelPackageCard,
  TravelPlanner,
  TravelSubNav,
} from "../../components/travel";
import { Button } from "../../components/ui/Button";
import {
  buildDestinationExperiencesPath,
  featuredDestinations,
} from "../../data/destinations";
import {
  travelMessages,
  travelPlanningSteps,
  whyExploreWithDGNS,
} from "../../data/travel";
import {
  travelExperienceCategories,
  travelExperiences,
} from "../../data/travelExperiences";
import {
  featuredTravelPackages,
  packageDataNote,
} from "../../data/travelPackages";
import { cn } from "../../utils/cn";

const pageTitle = "UAE Tours & Travel Experiences | DGNS Advisors";
const pageDescription =
  "Explore UAE destinations, activities and travel experiences with DGNS Advisors. Discover Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and Fujairah.";

const travelHeroImage = {
  src: heroImage,
  srcSet: `${heroImage640} 640w, ${heroImage1000} 1000w, ${heroImage} 1536w`,
  width: 1536,
  height: 1024,
  alt: "Dubai skyline beyond desert dunes at golden hour",
  objectPosition: "52% center",
} as const;

const destinationLayoutClasses = [
  "xl:col-span-7",
  "xl:col-span-5",
  "xl:col-span-3",
  "xl:col-span-3",
  "xl:col-span-3",
  "xl:col-span-3",
] as const;

const whyIcons = [
  Compass,
  MapPinned,
  MessageCircleMore,
  SlidersHorizontal,
] as const;

const experienceLayoutClasses = [
  "xl:col-span-2",
  "xl:col-span-2",
  "xl:col-span-2",
  "xl:col-span-3",
  "xl:col-span-3",
] as const;

const featuredCategoryExperiences = travelExperienceCategories.flatMap(
  (category) => {
    const experience = travelExperiences.find(
      (item) => item.category === category.value && item.featured,
    );

    return experience ? [experience] : [];
  },
);

const hubPackages = featuredTravelPackages.slice(0, 4);

export function TourTravelPage() {
  return (
    <>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/tour-travels"
      />
      <TravelItemListSchema
        name="Featured UAE travel destinations"
        path="/tour-travels"
        items={featuredDestinations.map((destination) => ({
          name: destination.name,
          url: buildDestinationExperiencesPath(destination.slug),
        }))}
      />
      <TravelItemListSchema
        name="Featured UAE travel packages"
        path="/tour-travels"
        items={hubPackages.map((travelPackage) => ({
          name: travelPackage.name,
          url: `/tour-travels/packages?destination=${encodeURIComponent(
            travelPackage.locationSlug,
          )}`,
        }))}
      />

      <TravelSubNav />

      <TravelHero
        variant="cinematic"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Tour & Travels" },
        ]}
        eyebrow="DISCOVER THE UAE"
        title="Experience More of the UAE"
        description="From iconic city landmarks and cultural attractions to desert adventures and coastal escapes, explore memorable experiences across the UAE with DGNS."
        image={travelHeroImage}
        primaryAction={{
          label: "Explore Experiences",
          to: "/tour-travels/experiences",
        }}
        whatsappAction={{
          label: "Plan on WhatsApp",
          message: travelMessages.hubHero,
        }}
      />

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="travel-introduction-title"
        className="overflow-hidden bg-[#f4efe7]"
      >
        <Container className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="UAE EXPERIENCES"
              title="From City Icons to Desert Adventures"
              headingId="travel-introduction-title"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="lg:pt-9">
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              DGNS Tour &amp; Travels is a dedicated travel offering for visitors
              who want a clearer way to explore the Emirates. Compare destinations
              and experience styles, then continue the planning conversation
              directly through WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Travel themes">
              {["City", "Culture", "Desert", "Coast", "Wellness"].map(
                (theme) => (
                  <span
                    key={theme}
                    className="rounded-pill border border-deep-green/12 bg-white/72 px-4 py-2 text-xs font-bold tracking-[0.12em] text-deep-green uppercase"
                  >
                    {theme}
                  </span>
                ),
              )}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="featured-destinations-title"
      >
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <ScrollReveal>
              <SectionHeading
                eyebrow="FEATURED DESTINATIONS"
                title="Six Emirates. Distinct Ways to Explore."
                description="Move between modern city icons, cultural neighbourhoods, mountain scenery and quieter coastlines."
                headingId="featured-destinations-title"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <Button
                to="/tour-travels/destinations"
                variant="text"
                className="w-fit px-0"
              >
                View All Destinations
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Button>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
            {featuredDestinations.map((destination, index) => (
              <ScrollReveal
                key={destination.slug}
                delay={(index % 3) * 0.05}
                className={cn("min-w-0", destinationLayoutClasses[index])}
              >
                <DestinationCard
                  destination={destination}
                  layout={index < 2 ? "wide" : "portrait"}
                  className="h-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        id="featured-experiences"
        background="white"
        spacing="lg"
        aria-labelledby="featured-experiences-title"
        className="scroll-mt-32 bg-[#f4efe7]"
      >
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <ScrollReveal>
              <SectionHeading
                eyebrow="EXPERIENCE CATEGORIES"
                title="Choose the Experience That Fits Your Journey"
                description="Start with an experience style and explore a representative option from the travel content already available through DGNS."
                headingId="featured-experiences-title"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <Button
                to="/tour-travels/experiences"
                variant="dark"
                className="w-full sm:w-auto"
              >
                Explore All Experiences
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Button>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
            {featuredCategoryExperiences.map((experience, index) => (
              <ScrollReveal
                key={experience.id}
                delay={(index % 3) * 0.05}
                className={cn("min-w-0", experienceLayoutClasses[index])}
              >
                <ExperienceCard experience={experience} className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="featured-packages-title"
      >
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <ScrollReveal>
              <SectionHeading
                eyebrow="FEATURED PACKAGES"
                title="Curated UAE Experiences Made Easier"
                description="Use these existing package options as a starting point, then contact DGNS for current details and availability."
                headingId="featured-packages-title"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <Button
                to="/tour-travels/packages"
                variant="dark"
                className="w-full sm:w-auto"
              >
                View All Packages
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Button>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {hubPackages.map((travelPackage, index) => (
              <ScrollReveal
                key={travelPackage.id}
                delay={(index % 4) * 0.05}
                className="min-w-0"
              >
                <TravelPackageCard
                  travelPackage={travelPackage}
                  className="h-full"
                />
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-6 max-w-4xl text-xs leading-6 text-muted">
            {packageDataNote}
          </p>
        </Container>
      </Section>

      <Section
        background="deep-green"
        spacing="lg"
        aria-labelledby="why-explore-title"
        className="overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(155,232,61,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(155,232,61,0.045)_1px,transparent_1px)] [background-size:72px_72px]"
        />
        <Container className="relative">
          <ScrollReveal>
            <SectionHeading
              eyebrow="WHY EXPLORE WITH DGNS"
              title="A Direct, Flexible Way to Start Planning"
              description="Get oriented, compare the available options and continue the details in a direct WhatsApp conversation."
              headingId="why-explore-title"
              inverse
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {whyExploreWithDGNS.map((item, index) => {
              const Icon = whyIcons[index];

              return (
                <ScrollReveal key={item.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.6rem] border border-white/12 bg-white/[0.055] p-6 backdrop-blur-sm sm:p-7">
                    <span className="grid size-11 place-items-center rounded-2xl bg-brand-lime text-deep-green">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/66">
                      {item.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="travel-process-title"
        className="bg-[#f4efe7]"
      >
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="HOW IT WORKS"
              title="A Simple Way to Start Planning"
              description="Share an idea, compare suitable options and discuss the details directly before arrangements are confirmed."
              headingId="travel-process-title"
            />
          </ScrollReveal>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-deep-green/10 bg-deep-green/10 md:grid-cols-2 xl:grid-cols-4">
            {travelPlanningSteps.map((step, index) => (
              <li key={step.number} className="min-w-0 bg-white p-6 sm:p-8">
                <ScrollReveal delay={index * 0.05}>
                  <span className="text-xs font-extrabold tracking-[0.18em] text-emerald">
                    {step.number}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-deep-green">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section
        background="white"
        spacing="lg"
        aria-label="Travel planning enquiry"
      >
        <Container>
          <TravelPlanner
            title="Tell Us What You Would Like to Explore"
            description="Share the essentials and we will prepare a WhatsApp message with your details. Review it in WhatsApp and tap Send to contact DGNS."
            className="mx-auto max-w-5xl"
          />

          <div className="mt-10 flex justify-center border-t border-deep-green/10 pt-8">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-emerald transition-colors hover:text-deep-green"
            >
              Looking for UAE Business Services?
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Container>
      </Section>

      <TravelCTA
        eyebrow="TRAVEL WITH DGNS"
        title="Ready to Explore the UAE?"
        description="Tell us what you would like to experience and DGNS can help you explore available options."
        primary={{
          label: "Plan on WhatsApp",
          message: travelMessages.hubFinal,
        }}
        secondary={{
          label: "View Packages",
          to: "/tour-travels/packages",
        }}
        tone="dark"
      />
    </>
  );
}
