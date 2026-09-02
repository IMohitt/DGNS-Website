import { useEffect } from "react";

export const useBodyScrollLock = (isLocked: boolean): void => {
  useEffect(() => {
    if (!isLocked || typeof document === "undefined") {
      return;
    }

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const previousRootOverflow = documentElement.style.overflow;

    const scrollbarWidth =
      typeof window === "undefined"
        ? 0
        : Math.max(0, window.innerWidth - documentElement.clientWidth);

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    if (scrollbarWidth > 0 && typeof window !== "undefined") {
      const currentPadding =
        Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;
      body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      documentElement.style.overflow = previousRootOverflow;
    };
  }, [isLocked]);
};
