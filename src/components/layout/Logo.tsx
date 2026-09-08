import { Link } from "react-router-dom";
import dgnsLogo from "../../assets/images/brand/dgns-logo-1.webp";
import { siteConfig } from "../../config/siteConfig";
import { cn } from "../../utils/cn";

export type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label={`${siteConfig.shortName} home`}
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center rounded-md",
        className,
      )}
    >
      <img
        src={dgnsLogo}
        alt=""
        aria-hidden="true"
        width="644"
        height="387"
        className={cn(
          "block w-auto object-contain",
          compact ? "h-10" : "h-14 nav:h-16",
        )}
      />
    </Link>
  );
}
