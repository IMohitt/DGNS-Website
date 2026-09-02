import { useEffect, useState } from "react";

export const useScrolled = (threshold = 16): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let animationFrame: number | null = null;

    const updateScrolledState = () => {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > threshold);
        animationFrame = null;
      });
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [threshold]);

  return isScrolled;
};
