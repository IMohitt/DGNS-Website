import { AnimatePresence, MotionConfig } from "framer-motion";
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PageTransition } from "../components/common/PageTransition";
import { RouteAnnouncer } from "../components/common/RouteAnnouncer";
import { RouteNormalization } from "../components/common/RouteNormalization";
import { ScrollToTop } from "../components/common/ScrollToTop";
import { FloatingWhatsAppButton } from "../components/layout/FloatingWhatsAppButton";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export function MainLayout() {
  const location = useLocation();
  const previousPathname = useRef(location.pathname);

  useEffect(() => {
    if (previousPathname.current === location.pathname) {
      return;
    }

    previousPathname.current = location.pathname;
    if (location.hash) {
      return;
    }

    const activeAtStart = document.activeElement;
    let frameId = 0;
    let attempts = 0;

    const focusRouteContent = () => {
      const main = Array.from(
        document.querySelectorAll<HTMLElement>("main[data-route]"),
      ).find((element) => element.dataset.route === location.pathname);

      if (main) {
        const activeElement = document.activeElement;
        const userMovedFocus =
          activeElement !== document.body &&
          activeElement !== document.documentElement &&
          activeElement !== activeAtStart;

        if (!userMovedFocus) {
          main.focus({ preventScroll: true });
        }
        return;
      }

      attempts += 1;
      if (attempts < 40) {
        frameId = window.requestAnimationFrame(focusRouteContent);
      }
    };

    frameId = window.requestAnimationFrame(focusRouteContent);

    return () => window.cancelAnimationFrame(frameId);
  }, [location.hash, location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[200] -translate-y-24 rounded-full bg-brand-lime px-5 py-2 text-sm font-bold text-deep-green transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <RouteAnnouncer />
        <RouteNormalization />
        <ScrollToTop />
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition
            key={location.pathname}
            className="flex min-w-0 flex-1 flex-col"
          >
            <main
              id="main-content"
              data-route={location.pathname}
              className="min-w-0 flex-1"
              tabIndex={-1}
            >
              <Outlet />
            </main>
          </PageTransition>
        </AnimatePresence>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </MotionConfig>
  );
}
