import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import heroImage1000 from "../../assets/images/travel/fujairah-east-coast-mountains-sea-1000.jpg";
import heroImage640 from "../../assets/images/travel/fujairah-east-coast-mountains-sea-640.jpg";
import heroImage from "../../assets/images/travel/fujairah-east-coast-mountains-sea.jpg";
import { Container } from "../../components/common/Container";
import { LegalDisclaimer } from "../../components/common/LegalDisclaimer";
import { PageMeta } from "../../components/common/PageMeta";
import { ScrollReveal } from "../../components/common/ScrollReveal";
import { Section } from "../../components/common/Section";
import { SectionHeading } from "../../components/common/SectionHeading";
import {
  TravelCTA,
  TravelFilters,
  TravelHero,
  TravelItemListSchema,
  TravelPackageCard,
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
  packageDataNote,
  travelPackages,
  type TravelPackage,
} from "../../data/travelPackages";

const pageTitle = "UAE Tour Packages & Experiences | DGNS Advisors";
const pageDescription =
  "Browse available UAE travel packages and contact DGNS Advisors directly for experience details, planning and availability.";

const heroImageAsset: TravelImageAsset = {
  src: heroImage,
  srcSet: `${heroImage640} 640w, ${heroImage1000} 1000w, ${heroImage} 1536w`,
  width: 1536,
  height: 1024,
  alt: "Fujairah east coast where mountains meet the sea",
  objectPosition: "54% center",
};

const destinationValues = new Set<string>(
  travelDestinations.map((destination) => destination.slug),
);
const packageCategoryOptions = [
  { value: "adventure", label: "Adventure" },
  { value: "city", label: "City" },
  { value: "culture", label: "Culture" },
  { value: "coastal", label: "Coastal" },
] as const;
const categoryValues = new Set<string>(
  packageCategoryOptions.map((category) => category.value),
);

const destinationOptions = travelDestinations.map((destination) => ({
  value: destination.slug,
  label: destination.name,
  count: travelPackages.filter(
    (travelPackage) => travelPackage.locationSlug === destination.slug,
  ).length,
}));

export function PackagesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawDestination = searchParams.get("destination");
  const rawCategory = searchParams.get("category");
  const destination = destinationValues.has(rawDestination ?? "")
    ? (rawDestination as DestinationSlug)
    : null;
  const category = categoryValues.has(rawCategory ?? "")
    ? (rawCategory as TravelPackage["category"])
    : null;

  useEffect(() => {
    const hasInvalidDestination =
      rawDestination !== null && rawDestination !== "all" && !destination;
    const hasInvalidCategory =
      rawCategory !== null && rawCategory !== "all" && !category;
    const hasExplicitAll = rawDestination === "all" || rawCategory === "all";

    if (!hasInvalidDestination && !hasInvalidCategory && !hasExplicitAll) {
      return;
    }

    const next = new URLSearchParams(searchParams);
    if (hasInvalidDestination || rawDestination === "all") {
      next.delete("destination");
    }
    if (hasInvalidCategory || rawCategory === "all") {
      next.delete("category");
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
    key: "destination" | "category",
    value: string | null,
  ) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next, { replace: true });
  };

  const filteredPackages = useMemo(
    () =>
      travelPackages.filter(
        (travelPackage) =>
          (!destination || travelPackage.locationSlug === destination) &&
          (!category || travelPackage.category === category),
      ),
    [category, destination],
  );

  const itemListItems = useMemo(
    () =>
      filteredPackages.map((travelPackage) => ({
        name: travelPackage.name,
        url: `/tour-travels/packages#package-${travelPackage.id}`,
      })),
    [filteredPackages],
  );

  return (
    <>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/tour-travels/packages"
      />
      {itemListItems.length ? (
        <TravelItemListSchema
          name="Visible UAE travel packages"
          path="/tour-travels/packages"
          items={itemListItems}
        />
      ) : null}

      <TravelSubNav />
      <TravelHero
        variant="editorial"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Tour & Travels", to: "/tour-travels" },
          { label: "Packages" },
        ]}
        eyebrow="TRAVEL PACKAGES"
        title="Curated UAE Experiences Made Easier"
        description="Browse available UAE travel experiences and contact DGNS directly for package details, availability and planning support."
        image={heroImageAsset}
        whatsappAction={{
          label: "Ask About a Package",
          message: travelMessages.packages,
        }}
      />

      <Section
        background="white"
        spacing="lg"
        aria-labelledby="package-results-title"
        className="bg-[#FCFAF5]"
      >
        <Container>
          <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <ScrollReveal>
              <SectionHeading
                eyebrow="AVAILABLE PACKAGES"
                title="Choose a Starting Point for Your UAE Journey"
                description="These package names, durations and published prices are retained from existing DGNS website content. Enquire directly for current availability and details."
                headingId="package-results-title"
              />
            </ScrollReveal>
            <div className="grid gap-6 rounded-[1.75rem] border border-[#DCCFB9] bg-[#F3EBDD] p-4 sm:p-6">
              <TravelFilters
                legend="Filter packages by destination"
                options={destinationOptions}
                value={destination}
                onChange={(value) => updateFilter("destination", value)}
                ariaControls="travel-package-results"
              />
              <TravelFilters
                legend="Filter packages by category"
                options={packageCategoryOptions}
                value={category}
                onChange={(value) => updateFilter("category", value)}
                ariaControls="travel-package-results"
              />
            </div>
          </div>

          <div
            id="travel-package-results"
            className="mt-10"
          >
            <p
              role="status"
              aria-live="polite"
              className="text-sm font-semibold text-muted"
            >
              {filteredPackages.length} {filteredPackages.length === 1 ? "package" : "packages"}
            </p>

            {filteredPackages.length ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredPackages.map((travelPackage, index) => (
                  <ScrollReveal
                    key={travelPackage.id}
                    delay={(index % 3) * 0.04}
                    className="min-w-0"
                  >
                    <TravelPackageCard travelPackage={travelPackage} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-[1.75rem] border border-deep-green/12 bg-white p-7 text-center sm:p-12">
                <h3 className="text-2xl font-semibold text-deep-green">
                  No packages match this filter yet
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
                  {travelEmptyStateMessage}
                </p>
                <WhatsAppCTA
                  label="Ask on WhatsApp"
                  message={travelMessages.packages}
                  variant="dark"
                  className="mt-6 w-full sm:w-auto"
                />
              </div>
            )}
          </div>

          <p className="mt-8 max-w-4xl text-xs leading-6 text-muted">
            {packageDataNote}
          </p>
        </Container>
      </Section>

      <LegalDisclaimer title="Package details and availability">
        Package information, published prices and availability are subject to
        confirmation. Inclusions, schedules, capacity and third-party supplier
        terms may vary. DGNS will confirm the current details and applicable terms
        before a booking is made.
      </LegalDisclaimer>

      <TravelCTA
        eyebrow="PACKAGE GUIDANCE"
        title="Need Help Choosing a Package?"
        description="Tell DGNS what you would like to experience and ask for current package details and availability."
        primary={{ label: "Talk to DGNS", message: travelMessages.packages }}
        secondary={{
          label: "Explore Experiences",
          to: "/tour-travels/experiences",
        }}
        tone="dark"
      />
    </>
  );
}
