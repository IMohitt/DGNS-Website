import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { NavGroup } from "../../config/navigation";
import { cn } from "../../utils/cn";

type MobileNavAccordionProps = {
  label: string;
  overviewLabel: string;
  overviewTo: string;
  groups: NavGroup[];
  onNavigate: () => void;
  showGroupLabels?: boolean;
};

const isExactNavTarget = (
  target: string,
  pathname: string,
  hash: string,
) => {
  const [targetPath, targetHash] = target.split("#");

  return (
    pathname === targetPath &&
    (targetHash ? hash === `#${targetHash}` : hash.length === 0)
  );
};

export function MobileNavAccordion({
  label,
  overviewLabel,
  overviewTo,
  groups,
  onNavigate,
  showGroupLabels = true,
}: MobileNavAccordionProps) {
  const location = useLocation();
  const isSectionActive =
    location.pathname === overviewTo ||
    location.pathname.startsWith(`${overviewTo}/`);
  const [isOpen, setIsOpen] = useState(isSectionActive);
  const panelId = `mobile-nav-${useId().replaceAll(":", "")}`;

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        className={cn(
          "flex min-h-14 w-full items-center justify-between gap-4 rounded-md py-2 text-left text-base font-semibold text-white transition-colors",
          isSectionActive && "text-brand-lime",
        )}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className={cn("size-5 text-brand-lime transition-transform", isOpen && "rotate-180")}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-5 pb-5 pl-3">
              <Link
                to={overviewTo}
                onClick={onNavigate}
                aria-current={
                  location.pathname === overviewTo ? "page" : undefined
                }
                className={cn(
                  "flex min-h-11 items-center rounded-md text-sm font-bold text-brand-lime",
                  location.pathname === overviewTo && "underline underline-offset-4",
                )}
              >
                {overviewLabel}
              </Link>
              {groups.map((group) => {
                const isGroupActive = isExactNavTarget(
                  group.to,
                  location.pathname,
                  location.hash,
                );
                const activeItemIndex =
                  showGroupLabels && isGroupActive
                    ? -1
                    : group.items.findIndex((item) =>
                        isExactNavTarget(
                          item.to,
                          location.pathname,
                          location.hash,
                        ),
                      );

                return (
                  <div key={group.label}>
                    {showGroupLabels ? (
                      <Link
                        to={group.to}
                        onClick={onNavigate}
                        aria-current={isGroupActive ? "page" : undefined}
                        className={cn(
                          "flex min-h-10 items-center rounded-md text-xs font-bold uppercase tracking-[0.12em] text-white/55 transition-colors hover:text-white",
                          isGroupActive && "text-white",
                        )}
                      >
                        {group.label}
                      </Link>
                    ) : null}
                    <div className="grid">
                      {group.items.map((item, itemIndex) => {
                        const isItemActive = itemIndex === activeItemIndex;

                        return (
                          <Link
                            key={`${group.label}-${item.label}`}
                            to={item.to}
                            onClick={onNavigate}
                            aria-current={isItemActive ? "page" : undefined}
                            className={cn(
                              "flex min-h-11 items-center rounded-r-md border-l border-white/12 pl-4 text-sm font-medium text-white/78 transition-colors hover:border-brand-lime hover:text-white",
                              isItemActive &&
                                "border-brand-lime bg-white/[0.06] text-white",
                            )}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
