import type { ComponentProps } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

type SiteNavLinkProps = ComponentProps<typeof NavLink> & {
  exact?: boolean;
};

export function SiteNavLink({
  className,
  exact = false,
  ...props
}: SiteNavLinkProps) {
  return (
    <NavLink
      {...props}
      end={exact}
      className={({ isActive }) =>
        cn(
          "group relative inline-flex min-h-11 items-center text-sm font-semibold text-white/78 transition-colors hover:text-white",
          "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-brand-lime after:transition-transform",
          isActive && "text-white after:scale-x-100",
          typeof className === "function"
            ? className({ isActive, isPending: false, isTransitioning: false })
            : className,
        )
      }
    />
  );
}
