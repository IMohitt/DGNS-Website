import {
  useEffect,
  useState,
  type ImgHTMLAttributes,
  type SyntheticEvent,
} from "react";

import { cn } from "../../utils/cn";

export type ImageFit = "cover" | "contain";
export type ImageRadius = "none" | "md" | "lg" | "xl" | "2xl";

export interface ResponsiveImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "alt" | "src"> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  fit?: ImageFit;
  rounded?: ImageRadius;
  wrapperClassName?: string;
}

const fitClasses: Record<ImageFit, string> = {
  cover: "object-cover",
  contain: "object-contain",
};

const radiusClasses: Record<ImageRadius, string> = {
  none: "rounded-none",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

export function ResponsiveImage({
  src,
  alt,
  fallbackSrc,
  fit = "cover",
  rounded = "xl",
  loading = "lazy",
  decoding = "async",
  wrapperClassName,
  className,
  onError,
  ...props
}: ResponsiveImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setFailed(false);
  }, [src]);

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    onError?.(event);

    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      return;
    }

    setFailed(true);
  };

  if (failed) {
    return (
      <span
        role="img"
        aria-label={`${alt}. Image unavailable.`}
        className={cn(
          "flex min-h-40 w-full items-center justify-center overflow-hidden bg-[#E8ECE7] text-muted",
          radiusClasses[rounded],
          wrapperClassName,
        )}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-8"
        >
          <path d="m3 3 18 18M10.6 10.6 5 16h11m2-2V5H5v7m9-3h.01" />
        </svg>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "block overflow-hidden",
        radiusClasses[rounded],
        wrapperClassName,
      )}
    >
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onError={handleError}
        className={cn("block h-full w-full", fitClasses[fit], className)}
        {...props}
      />
    </span>
  );
}
