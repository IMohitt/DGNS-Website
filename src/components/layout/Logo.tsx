import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { cn } from "../../utils/cn";

export type LogoProps = {
  className?: string;
  compact?: boolean;
};

/**
 * Accessible text-wordmark fallback used while the official DGNS logo asset is
 * unavailable. See `src/assets/README.md` before replacing it.
 */
export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${siteConfig.shortName} home`}
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center rounded-md text-white",
        className,
      )}
    >
      <span aria-hidden="true" className="inline-flex items-center">
        <span className="text-lg font-extrabold leading-none tracking-[0.15em]">
          DGNS
        </span>
        {!compact ? (
          <span className="ml-3 border-l border-brand-lime/55 pl-3 text-[0.625rem] font-bold leading-none tracking-[0.24em] text-brand-lime">
            ADVISORS
          </span>
        ) : null}
      </span>
    </Link>
  );
}
