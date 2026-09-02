import { NavLink } from "react-router-dom";

import { travelNavigation } from "../../data/travel";
import { cn } from "../../utils/cn";
import { Container } from "../common/Container";

export type TravelSubNavProps = {
  className?: string;
};

export function TravelSubNav({ className }: TravelSubNavProps) {
  return (
    <div
      className={cn(
        "sticky top-[4.5rem] z-[70] border-b border-deep-green/10 bg-[#F3EBDD]/95 shadow-[0_12px_32px_-28px_rgba(11,53,45,0.65)] backdrop-blur-xl nav:top-[5.25rem]",
        className,
      )}
    >
      <Container>
        <nav
          aria-label="Tour and Travels navigation"
          className="-mx-2 overflow-x-auto overscroll-x-contain px-2 py-2 [scrollbar-width:none] sm:-mx-3 sm:px-3 [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex min-w-max items-center gap-1">
            {travelNavigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/tour-travels"}
                  className={({ isActive }) =>
                    cn(
                      "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-semibold text-deep-green/68 transition-[color,background-color,box-shadow] hover:bg-white/70 hover:text-deep-green",
                      isActive &&
                        "bg-deep-green text-white shadow-[0_8px_20px_-14px_rgba(11,53,45,0.7)] hover:bg-deep-green hover:text-white",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
}
