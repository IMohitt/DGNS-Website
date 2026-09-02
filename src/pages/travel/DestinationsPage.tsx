import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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
  TravelCTA,
  TravelFilters,
  TravelHero,
  TravelItemListSchema,
  TravelSubNav,
} from "../../components/travel";
import {
  buildDestinationExperiencesPath,
  travelDestinations,
  type DestinationSlug,
} from "../../data/destinations";
import {
  buildDestinationWhatsAppMessage,
  travelMessages,
} from "../../data/travel";

const pageTitle = "UAE Travel Destinations | DGNS Advisors";
const pageDescription =
  "Explore travel destinations across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and Fujairah with DGNS Advisors.";

const destinationsHeroImage = {
  src: heroImage,
  srcSet: `${heroImage640} 640w, ${heroImage1000} 1000w, ${heroImage} 1536w`,
  width: 1536,
  height: 1024,
  alt: "Dubai skyline beyond UAE desert dunes at golden hour",
  objectPosition: "52% center",
} as const;

type DestinationFilter = "all" | DestinationSlug;

const isDestinationSlug = (value: string | null): value is DestinationSlug =>
  travelDestinations.some((destination) => destination.slug === value);

const destinationFilterOptions = travelDestinations.map((destination) => ({
  value: destination.slug,
  label: destination.name,
}));

export function DestinationsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const destinationParam = searchParams.get("destination");
  const activeFilter: DestinationFilter = isDestinationSlug(destinationParam)
    ? destinationParam
    : "all";
  const visibleDestinations =
    activeFilter === "all"
      ? travelDestinations
      : travelDestinations.filter(
          (destination) => destination.slug === activeFilter,
        );
  const selectedDestination =
    activeFilter === "all"
      ? undefined
      : travelDestinations.find(
          (destination) => destination.slug === activeFilter,
        );

  useEffect(() => {
    if (!destinationParam || isDestinationSlug(destinationParam)) {
      return;
    }

    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("destination");
    setSearchParams(nextParams, { replace: true });
  }, [destinationParam, searchParams, setSearchParams]);

  const updateFilter = (filter: DestinationFilter) => {
    const nextParams = new URLSearchParams(searchParams);

    if (filter === "all") {
      nextParams.delete("destination");
    } else {
      nextParams.set("destination", filter);
    }

    setSearchParams(nextParams);
  };

  return (
    <>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/tour-travels/destinations"
      />
      <TravelItemListSchema
        name="UAE travel destinations"
        path="/tour-travels/destinations"
        items={visibleDestinations.map((destination) => ({
          name: destination.name,
          url: buildDestinationExperiencesPath(destination.slug),
        }))}
      />

      <TravelSubNav />

      <TravelHero
        variant="editorial"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Tour & Travels", to: "/tour-travels" },
          { label: "Destinations" },
        ]}
        eyebrow="DESTINATIONS"
        title="Discover the UAE, One Destination at a Time"
        description="Explore cities, coastlines, cultural landmarks and outdoor escapes across the Emirates."
        image={destinationsHeroImage}
      />

      <Section
        id="destinations"
        background="white"
        spacing="lg"
        aria-labelledby="destinations-grid-title"
        className="scroll-mt-32 overflow-hidden bg-[#f4efe7]"
      >
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <ScrollReveal>
              <SectionHeading
                eyebrow="EXPLORE BY EMIRATE"
                title="Choose Where You Would Like to Go"
                description="Compare six distinct UAE destinations, then explore related experiences or start a direct WhatsApp enquiry."
                headingId="destinations-grid-title"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="min-w-0 lg:max-w-[42rem]">
              <TravelFilters
                legend="Filter destinations"
                options={destinationFilterOptions}
                value={activeFilter === "all" ? null : activeFilter}
                onChange={(filter) => updateFilter(filter ?? "all")}
                ariaControls="destination-results"
              />
            </ScrollReveal>
          </div>

          <p
            className="mt-8 text-sm font-semibold text-muted"
            role="status"
            aria-live="polite"
          >
            Showing {visibleDestinations.length}{" "}
            {visibleDestinations.length === 1 ? "destination" : "destinations"}
          </p>

          <div
            id="destination-results"
            className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {visibleDestinations.map((destination, index) => (
              <ScrollReveal
                key={destination.slug}
                delay={(index % 3) * 0.05}
                className={
                  visibleDestinations.length === 1
                    ? "min-w-0 md:col-span-2 xl:col-span-2"
                    : "min-w-0"
                }
              >
                <DestinationCard
                  destination={destination}
                  layout={
                    visibleDestinations.length === 1 ? "wide" : "portrait"
                  }
                  className="h-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <TravelCTA
        eyebrow="PLAN YOUR VISIT"
        title="Found a Destination You Like?"
        description="Tell us which Emirate you would like to explore and ask about available experiences and current details."
        primary={{
          label: "Plan My Visit",
          message: selectedDestination
            ? buildDestinationWhatsAppMessage(selectedDestination.name)
            : travelMessages.destinations,
        }}
        tone="dark"
      />
    </>
  );
}

export default DestinationsPage;
