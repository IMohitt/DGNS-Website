import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.slice(1));
      let frameId = 0;
      let attempts = 0;

      const moveToTarget = () => {
        const target = document.getElementById(targetId);

        if (target) {
          if (!target.hasAttribute("tabindex")) {
            target.tabIndex = -1;
          }

          target.scrollIntoView({ block: "start" });
          target.focus({ preventScroll: true });
          return;
        }

        attempts += 1;
        if (attempts < 40) {
          frameId = window.requestAnimationFrame(moveToTarget);
          return;
        }

        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      };

      frameId = window.requestAnimationFrame(moveToTarget);

      return () => window.cancelAnimationFrame(frameId);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [hash, pathname]);

  return null;
}
