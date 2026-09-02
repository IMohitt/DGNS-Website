import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "../../utils/cn";

type ContainerOwnProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
};

export type ContainerProps<T extends ElementType = "div"> =
  ContainerOwnProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ContainerOwnProps<T>>;

export function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component: ElementType = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}
