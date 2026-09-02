import { tourTravelMenu, servicesMenuGroups, businessSetupMenu } from "../../config/navigation";
import { DropdownMenu } from "./DropdownMenu";
import { SiteNavLink } from "./SiteNavLink";

const tourGroups = [
  {
    label: "Explore the UAE",
    to: "/tour-travels",
    items: tourTravelMenu,
  },
];

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-5 nav:flex">
      <SiteNavLink to="/" exact>
        Home
      </SiteNavLink>
      <DropdownMenu
        label="Services"
        overviewLabel="Explore all services"
        overviewTo="/services"
        groups={servicesMenuGroups}
        layout="mega"
      />
      <DropdownMenu
        label="Business Setup"
        overviewLabel="Business setup overview"
        overviewTo="/business-setup"
        groups={businessSetupMenu}
      />
      <SiteNavLink to="/about">About Us</SiteNavLink>
      <DropdownMenu
        label="Tour & Travels"
        overviewLabel="Tour & Travels"
        overviewTo="/tour-travels"
        groups={tourGroups}
        align="right"
        showGroupLabels={false}
      />
      <SiteNavLink to="/contact">Contact Us</SiteNavLink>
    </nav>
  );
}
