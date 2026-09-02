import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, type RefObject } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  businessSetupMenu,
  servicesMenuGroups,
  tourTravelMenu,
} from "../../config/navigation";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { cn } from "../../utils/cn";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";
import { Logo } from "../layout/Logo";
import { MobileNavAccordion } from "./MobileNavAccordion";

const connectMessage =
  "Hello DGNS Advisors, I would like to connect with your team.";

const tourGroups = [
  {
    label: "Explore the UAE",
    to: "/tour-travels",
    items: tourTravelMenu,
  },
];

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

const topLevelLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useBodyScrollLock(isOpen);
  useEscapeKey(isOpen, onClose);
  useFocusTrap(panelRef, isOpen, triggerRef);

  useEffect(() => {
    if (isOpen) onClose();
    // Close only when the actual route changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[100] nav:hidden">
          <motion.button
            type="button"
            aria-label="Close navigation"
            className="absolute inset-0 h-full w-full cursor-default bg-charcoal/64 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
          />

          <motion.aside
            id="mobile-navigation"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-drawer absolute inset-y-0 right-0 flex h-[100dvh] w-[min(100%,26rem)] flex-col overflow-hidden border-l border-white/10 bg-deep-green pl-5 shadow-2xl"
          >
            <div className="flex min-h-16 shrink-0 items-center justify-between gap-4 border-b border-white/10 pr-1">
              <div id="mobile-navigation-title">
                <Logo compact />
              </div>
              <button
                data-autofocus
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="grid size-12 place-items-center rounded-full border border-white/12 text-white transition-colors hover:border-brand-lime/60 hover:bg-white/6"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 pt-3"
            >
              <NavLink
                to={topLevelLinks[0].to}
                end
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    "flex min-h-14 items-center rounded-md border-b border-white/10 text-base font-semibold text-white transition-colors",
                    isActive && "text-brand-lime",
                  )
                }
              >
                {topLevelLinks[0].label}
              </NavLink>
              <MobileNavAccordion
                label="Services"
                overviewLabel="All Services"
                overviewTo="/services"
                groups={servicesMenuGroups}
                onNavigate={onClose}
              />
              <MobileNavAccordion
                label="Business Setup"
                overviewLabel="Business Setup Overview"
                overviewTo="/business-setup"
                groups={businessSetupMenu}
                onNavigate={onClose}
              />
              <NavLink
                to={topLevelLinks[1].to}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    "flex min-h-14 items-center rounded-md border-b border-white/10 text-base font-semibold text-white transition-colors",
                    isActive && "text-brand-lime",
                  )
                }
              >
                {topLevelLinks[1].label}
              </NavLink>
              <MobileNavAccordion
                label="Tour & Travels"
                overviewLabel="Tour & Travels"
                overviewTo="/tour-travels"
                groups={tourGroups}
                onNavigate={onClose}
                showGroupLabels={false}
              />
              <NavLink
                to={topLevelLinks[2].to}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    "flex min-h-14 items-center rounded-md border-b border-white/10 text-base font-semibold text-white transition-colors",
                    isActive && "text-brand-lime",
                  )
                }
              >
                {topLevelLinks[2].label}
              </NavLink>
            </nav>

            <div className="shrink-0 border-t border-white/10 pb-1 pr-1 pt-5">
              <WhatsAppCTA
                label="Let's Connect"
                message={connectMessage}
                variant="primary"
                className="w-full justify-center"
              />
              <p className="mt-3 text-center text-xs leading-relaxed text-white/62">
                UAE business setup, tax, accounting &amp; advisory
              </p>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
