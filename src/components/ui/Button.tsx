import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link, type LinkProps } from "react-router-dom";

import { cn } from "../../utils/cn";

export type ButtonVariant = "primary" | "secondary" | "dark" | "text";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonOwnProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

export type NativeButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps> & {
    to?: never;
    href?: never;
  };

export type InternalLinkButtonProps = ButtonOwnProps &
  Omit<LinkProps, keyof ButtonOwnProps | "to"> & {
    to: LinkProps["to"];
    href?: never;
    disabled?: boolean;
  };

export type ExternalLinkButtonProps = ButtonOwnProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof ButtonOwnProps | "href"
  > & {
    href: string;
    to?: never;
    disabled?: boolean;
  };

export type ButtonProps =
  | NativeButtonProps
  | InternalLinkButtonProps
  | ExternalLinkButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-lime text-charcoal shadow-[0_8px_24px_rgba(11,53,45,0.12)] hover:bg-[#A9EF55] active:bg-[#8ED92F]",
  secondary:
    "border border-emerald bg-transparent text-emerald hover:bg-emerald hover:text-white active:bg-deep-green",
  dark: "bg-deep-green text-white hover:bg-emerald active:bg-[#082A24]",
  text: "bg-transparent text-emerald hover:text-deep-green hover:underline hover:underline-offset-4",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 gap-2 px-4 py-2 text-sm",
  md: "min-h-11 gap-2 px-5 py-2.5 text-sm sm:text-base",
  lg: "min-h-13 gap-2.5 px-7 py-3 text-base",
  icon: "size-11 shrink-0 p-0",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: Pick<ButtonOwnProps, "variant" | "size" | "fullWidth" | "className">) {
  return cn(
    "inline-flex shrink-0 items-center justify-center rounded-pill font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );
}

export function Button(props: ButtonProps) {
  if ("to" in props && props.to !== undefined) {
    const {
      to,
      children,
      variant,
      size,
      fullWidth,
      className,
      disabled = false,
      onClick,
      tabIndex,
      ...linkProps
    } = props as InternalLinkButtonProps;

    return (
      <Link
        to={to}
        className={buttonStyles({ variant, size, fullWidth, className })}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : tabIndex}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href !== undefined) {
    const {
      href,
      children,
      variant,
      size,
      fullWidth,
      className,
      disabled = false,
      onClick,
      tabIndex,
      target,
      rel,
      ...anchorProps
    } = props as ExternalLinkButtonProps;

    return (
      <a
        href={href}
        className={buttonStyles({ variant, size, fullWidth, className })}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : tabIndex}
        target={target}
        rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const {
    children,
    variant,
    size,
    fullWidth,
    className,
    type = "button",
    ...buttonProps
  } = props as NativeButtonProps;

  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, fullWidth, className })}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
