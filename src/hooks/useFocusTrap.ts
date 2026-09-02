import { useEffect } from "react";
import type { RefObject } from "react";

const focusableSelector = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  "object",
  "embed",
  "[contenteditable='true']",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

const getFocusableElements = (container: HTMLElement): HTMLElement[] =>
  Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(
    (element) => {
      if (
        element.getAttribute("aria-hidden") === "true" ||
        element.tabIndex < 0
      ) {
        return false;
      }

      const styles = window.getComputedStyle(element);
      return styles.display !== "none" && styles.visibility !== "hidden";
    },
  );

export const useFocusTrap = (
  containerRef: RefObject<HTMLElement | null>,
  isActive: boolean,
  returnFocusRef?: RefObject<HTMLElement | null>,
): void => {
  useEffect(() => {
    if (
      !isActive ||
      typeof document === "undefined" ||
      typeof window === "undefined"
    ) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousTabIndex = container.getAttribute("tabindex");
    const focusableElements = getFocusableElements(container);
    const initialFocus =
      container.querySelector<HTMLElement>("[data-autofocus]") ??
      focusableElements[0] ??
      container;

    if (initialFocus === container && previousTabIndex === null) {
      container.setAttribute("tabindex", "-1");
    }

    const animationFrame = window.requestAnimationFrame(() => {
      initialFocus.focus({ preventScroll: true });
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      const currentFocusableElements = getFocusableElements(container);
      if (currentFocusableElements.length === 0) {
        event.preventDefault();
        container.focus({ preventScroll: true });
        return;
      }

      const firstElement = currentFocusableElements[0];
      const lastElement =
        currentFocusableElements[currentFocusableElements.length - 1];
      const activeElement = document.activeElement;
      const focusIsInside =
        activeElement instanceof Node && container.contains(activeElement);

      if (event.shiftKey && (!focusIsInside || activeElement === firstElement)) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        (!focusIsInside || activeElement === lastElement)
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener("keydown", handleKeyDown);

      if (previousTabIndex === null) {
        container.removeAttribute("tabindex");
      } else {
        container.setAttribute("tabindex", previousTabIndex);
      }

      const returnFocusTarget = returnFocusRef?.current ?? previouslyFocused;
      if (returnFocusTarget?.isConnected) {
        returnFocusTarget.focus({ preventScroll: true });
      }
    };
  }, [containerRef, isActive, returnFocusRef]);
};
