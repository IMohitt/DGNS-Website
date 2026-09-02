import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import desertImage1000 from "../../assets/images/travel/dubai-desert-safari-dunes-1000.jpg";
import desertImage640 from "../../assets/images/travel/dubai-desert-safari-dunes-640.jpg";
import desertImage from "../../assets/images/travel/dubai-desert-safari-dunes.jpg";
import { Container } from "../../components/common/Container";
import { PageMeta } from "../../components/common/PageMeta";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import {
  ExperienceCard,
  TravelCTA,
  TravelFilters,
  TravelHero,
  TravelItemListSchema,
  TravelSubNav,
} from "../../components/travel";
import { WhatsAppCTA } from "../../components/ui/WhatsAppCTA";
import {
  travelDestinations,
  type DestinationSlug,
  type TravelImageAsset,
} from "../../data/destinations";
import { travelEmptyStateMessage, travelMessages } from "../../data/travel";
import {
  travelExperienceCategories,
  travelExperiences,
  type TravelExperienceCategory,
} from "../../data/travelExperiences";

const pageTitle = "UAE Experiences & Activities | DGNS Advisors";
const pageDescription =
  "Discover adventure, culture, city attractions and relaxing UAE experiences with DGNS Advisors.";

const heroImage: TravelImageAsset = {
  src: desertImage,
  srcSet: `${desertImage640} 640w, ${desertImage1000} 1000w, ${desertImage} 1536w`,
  width: 1536,
  height: 1024,
  alt: "Golden UAE desert dunes crossed by off-road tracks",
  objectPosition: "52% center",
};

const categoryValues = new Set<string>(
  travelExperienceCategories.map((category) => category.value),
);
const destinationValues = new Set<string>(
  travelDestinations.map((destination) => destination.slug),
);

const categoryOptions = travelExperienceCategories.map((category) => ({
  ...category,
  count: travelExperiences.filter(
    (experience) => experience.category === category.value,
  ).length,
}));

const destinationOptions = travelDestinations.map((destination) => ({
  value: destination.slug,
  label: destination.name,
  count: travelExperiences.filter(
    (experience) => experience.locationSlug === destination.slug,
  ).length,
}));

export function ExperiencesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCategory = searchParams.get("category");
  const rawDestination = searchParams.get("destination");
  const category = categoryValues.has(rawCategory ?? "")
    ? (rawCategory as TravelExperienceCategory)
    : null;
  const destination = destinationValues.has(rawDestination ?? "")
    ? (rawDestination as DestinationSlug)
    : null;

  useEffect(() => {
    const hasInvalidCategory =
      rawCategory !== null && rawCategory !== "all" && !category;
    const hasInvalidDestination =
      rawDestination !== null && rawDestination !== "all" && !destination;
    const hasExplicitAll = rawCategory === "all" || rawDestination === "all";

    if (!hasInvalidCategory && !hasInvalidDestination && !hasExplicitAll) {
      return;
    }

    const next = new URLSearchParams(searchParams);
    if (hasInvalidCategory || rawCategory === "all") next.delete("category");
    if (hasInvalidDestination || rawDestination === "all") {
      next.delete("destination");
    }
    setSearchParams(next, { replace: true });
  }, [
    category,
    destination,
    rawCategory,
    rawDestination,
    searchParams,
    setSearchParams,
  ]);

  const updateFilter = (
    key: "category" | "destination",
    value: string | null,
  ) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next, { replace: true });
  };

  const filteredExperiences = useMemo(
    () =>
      travelExperiences.filter(
        (experience) =>
          (!category || experience.category === category) &&
          (!destination || experience.locationSlug === destination),
      ),
    [category, destination],
  );

  const itemListItems = useMemo(
    () =>
      filteredExperiences.map((experience) => ({
        name: experience.name,
        url: `/tour-travels/experiences#experience-${experience.id}`,
      })),
    [filteredExperiences],
  );

  return (
    <>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/tour-travels/experiences"
      />
      {itemListItems.length ? (
        <TravelItemListSchema
          name="Visible UAE travel experiences"
          path="/tour-travels/experiences"
          items={itemListItems}
        />
      ) : null}

      <TravelSubNav />
      <TravelHero
        variant="editorial"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Tour & Travels", to: "/tour-travels" },
          { label: "Experiences" },
        ]}
        eyebrow="UAE EXPERIENCES"
        title="Choose the Experience That Matches Your Journey"
        description="Explore adventure, culture, city attractions and relaxing experiences across the UAE."
        image={heroImage}
      />

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="experience-results-title"
        className="bg-[#FCFAF5]"
      >
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="FIND YOUR EXPERIENCE"
              title="Explore by Interest and Destination"
              description="Choose one or both filters. Every enquiry continues directly through WhatsApp, where DGNS can share current details and availability."
              headingId="experience-results-title"
            />
          </ScrollReveal>

          <div className="mt-10 grid gap-7 rounded-[1.75rem] border border-[#DCCFB9] bg-[#F3EBDD] p-4 sm:p-6 lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
            <TravelFilters
              legend="Experience category"
              options={categoryOptions}
              value={category}
              onChange={(value) => updateFilter("category", value)}
              ariaControls="travel-experience-results"
            />
            <TravelFilters
              legend="Destination"
              options={destinationOptions}
              value={destination}
              onChange={(value) => updateFilter("destination", value)}
              ariaControls="travel-experience-results"
            />
          </div>

          <div
            id="travel-experience-results"
            className="mt-6"
          >
            <p
              role="status"
              aria-live="polite"
              className="text-sm font-semibold text-muted"
            >
              {filteredExperiences.length} {filteredExperiences.length === 1 ? "experience" : "experiences"}
            </p>

            {filteredExperiences.length ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredExperiences.map((experience, index) => (
                  <ScrollReveal
                    key={experience.id}
                    delay={(index % 3) * 0.04}
                    className="min-w-0"
                  >
                    <ExperienceCard experience={experience} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-[1.75rem] border border-deep-green/12 bg-white p-7 text-center sm:p-12">
                <h3 className="text-2xl font-semibold text-deep-green">
                  Nothing matches both filters yet
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
                  {travelEmptyStateMessage}
                </p>
                <WhatsAppCTA
                  label="Ask on WhatsApp"
                  message={travelMessages.experiences}
                  variant="dark"
                  className="mt-6 w-full sm:w-auto"
                />
              </div>
            )}
          </div>
        </Container>
      </Section>

      <TravelCTA
        eyebrow="PLAN YOUR EXPERIENCE"
        title="Build Your UAE Experience"
        description="Tell DGNS what interests you and ask for current experience details and availability."
        primary={{
          label: "Ask About Experiences",
          message: travelMessages.experiences,
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
