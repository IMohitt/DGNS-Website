import { useEffect } from "react";

export const useEscapeKey = (
  isEnabled: boolean,
  onEscape: () => void,
): void => {
  useEffect(() => {
    if (!isEnabled || typeof document === "undefined") {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscape();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isEnabled, onEscape]);
};
