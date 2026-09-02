import {
  Navigate,
  createBrowserRouter,
  type RouteObject,
  useLocation,
} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RouteErrorPage } from "./pages/RouteErrorPage";

function LegacyMainlandRedirect() {
  const { hash } = useLocation();
  const destinationByHash: Record<string, string> = {
    "#dubai": "/business-setup/mainland/dubai",
    "#abudhabi": "/business-setup/mainland/abu-dhabi",
    "#abu-dhabi": "/business-setup/mainland/abu-dhabi",
    "#sharjah": "/business-setup/mainland/sharjah",
    "#ajman": "/business-setup/mainland/ajman",
  };

  return (
    <Navigate
      replace
      to={destinationByHash[hash.toLowerCase()] ?? "/business-setup/mainland"}
    />
  );
}

const implementedServiceRoutes: RouteObject[] = [
  {
    path: "services",
    lazy: async () => {
      const { ServicesPage } = await import("./pages/services/ServicesPage");
      return { Component: ServicesPage };
    },
  },
  {
    path: "services/business-setup",
    lazy: async () => {
      const { BusinessSetupServicePage } = await import(
        "./pages/services/BusinessSetupServicePage"
      );
      return { Component: BusinessSetupServicePage };
    },
  },
  {
    path: "services/accounting-bookkeeping",
    lazy: async () => {
      const { AccountingBookkeepingPage } = await import(
        "./pages/services/AccountingBookkeepingPage"
      );
      return { Component: AccountingBookkeepingPage };
    },
  },
  {
    path: "services/vat",
    lazy: async () => {
      const { VATServicePage } = await import(
        "./pages/services/VATServicePage"
      );
      return { Component: VATServicePage };
    },
  },
  {
    path: "services/corporate-tax",
    lazy: async () => {
      const { CorporateTaxServicePage } = await import(
        "./pages/services/CorporateTaxServicePage"
      );
      return { Component: CorporateTaxServicePage };
    },
  },
  {
    path: "services/advisory",
    lazy: async () => {
      const { AdvisoryServicePage } = await import(
        "./pages/services/AdvisoryServicePage"
      );
      return { Component: AdvisoryServicePage };
    },
  },
];

const implementedBusinessSetupRoutes: RouteObject[] = [
  {
    path: "business-setup",
    lazy: async () => {
      const { BusinessSetupHubPage } = await import(
        "./pages/business-setup/BusinessSetupHubPage"
      );
      return { Component: BusinessSetupHubPage };
    },
  },
  {
    path: "business-setup/mainland",
    lazy: async () => {
      const { MainlandPage } = await import(
        "./pages/business-setup/MainlandPage"
      );
      return { Component: MainlandPage };
    },
  },
  {
    path: "business-setup/mainland/dubai",
    lazy: async () => {
      const { DubaiMainlandPage } = await import(
        "./pages/business-setup/DubaiMainlandPage"
      );
      return { Component: DubaiMainlandPage };
    },
  },
  {
    path: "business-setup/mainland/abu-dhabi",
    lazy: async () => {
      const { AbuDhabiMainlandPage } = await import(
        "./pages/business-setup/AbuDhabiMainlandPage"
      );
      return { Component: AbuDhabiMainlandPage };
    },
  },
  {
    path: "business-setup/mainland/sharjah",
    lazy: async () => {
      const { SharjahMainlandPage } = await import(
        "./pages/business-setup/SharjahMainlandPage"
      );
      return { Component: SharjahMainlandPage };
    },
  },
  {
    path: "business-setup/mainland/ajman",
    lazy: async () => {
      const { AjmanMainlandPage } = await import(
        "./pages/business-setup/AjmanMainlandPage"
      );
      return { Component: AjmanMainlandPage };
    },
  },
  {
    path: "business-setup/free-zone",
    lazy: async () => {
      const { FreeZonePage } = await import(
        "./pages/business-setup/FreeZonePage"
      );
      return { Component: FreeZonePage };
    },
  },
];

const implementedCompanyRoutes: RouteObject[] = [
  {
    path: "about",
    lazy: async () => {
      const { AboutPage } = await import("./pages/AboutPage");
      return { Component: AboutPage };
    },
  },
  {
    path: "contact",
    lazy: async () => {
      const { ContactPage } = await import("./pages/ContactPage");
      return { Component: ContactPage };
    },
  },
];

const implementedTravelRoutes: RouteObject[] = [
  {
    path: "tour-travels",
    lazy: async () => {
      const { TourTravelPage } = await import(
        "./pages/travel/TourTravelPage"
      );
      return { Component: TourTravelPage };
    },
  },
  {
    path: "tour-travels/destinations",
    lazy: async () => {
      const { DestinationsPage } = await import(
        "./pages/travel/DestinationsPage"
      );
      return { Component: DestinationsPage };
    },
  },
  {
    path: "tour-travels/experiences",
    lazy: async () => {
      const { ExperiencesPage } = await import(
        "./pages/travel/ExperiencesPage"
      );
      return { Component: ExperiencesPage };
    },
  },
  {
    path: "tour-travels/packages",
    lazy: async () => {
      const { PackagesPage } = await import(
        "./pages/travel/PackagesPage"
      );
      return { Component: PackagesPage };
    },
  },
];

const implementedLegalRoutes: RouteObject[] = [
  {
    path: "privacy-policy",
    lazy: async () => {
      const { PrivacyPolicyPage } = await import(
        "./pages/legal/PrivacyPolicyPage"
      );
      return { Component: PrivacyPolicyPage };
    },
  },
  {
    path: "terms",
    lazy: async () => {
      const { TermsPage } = await import("./pages/legal/TermsPage");
      return { Component: TermsPage };
    },
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...implementedServiceRoutes,
      ...implementedBusinessSetupRoutes,
      ...implementedCompanyRoutes,
      ...implementedTravelRoutes,
      ...implementedLegalRoutes,
      { path: "about-us", element: <Navigate replace to="/about" /> },
      { path: "contact-us", element: <Navigate replace to="/contact" /> },
      {
        path: "destinations",
        element: <Navigate replace to="/tour-travels/destinations" />,
      },
      { path: "uae-mainland", element: <LegacyMainlandRedirect /> },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
