import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import { Link, useLocation } from "react-router-dom";
import type { NavGroup } from "../../config/navigation";
import { cn } from "../../utils/cn";

type DropdownMenuProps = {
  label: string;
  overviewLabel: string;
  overviewTo: string;
  groups: NavGroup[];
  layout?: "mega" | "compact";
  align?: "left" | "right";
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

export function DropdownMenu({
  label,
  overviewLabel,
  overviewTo,
  groups,
  layout = "compact",
  align = "left",
  showGroupLabels = true,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const location = useLocation();
  const reactId = useId();
  const panelId = `nav-panel-${reactId.replaceAll(":", "")}`;
  const isActive =
    overviewTo === "/"
      ? location.pathname === "/"
      : location.pathname === overviewTo ||
        location.pathname.startsWith(`${overviewTo}/`);

  useEffect(() => {
    setIsOpen(false);
  }, [location.hash, location.pathname]);

  useEffect(
    () => () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      window.requestAnimationFrame(() => {
        rootRef.current?.querySelector<HTMLAnchorElement>("[data-dropdown-link]")?.focus();
      });
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
    }
  };

  const handlePanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
      setIsOpen(false);
    }
  };

  const openMenu = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
  };

  const scheduleClose = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      closeTimerRef.current = null;
    }, 140);
  };

  return (
    <div
      ref={rootRef}
      className="relative flex items-center"
      onBlur={handleBlur}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          "relative inline-flex min-h-11 items-center gap-1.5 rounded-md px-1 text-sm font-semibold text-white/78 transition-colors hover:text-white",
          "after:absolute after:inset-x-1 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-brand-lime after:transition-transform",
          (isActive || isOpen) && "text-white after:scale-x-100",
        )}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleKeyDown}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-label={`${label} navigation`}
            initial={{ opacity: 0, y: 8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.995 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            onKeyDown={handlePanelKeyDown}
            className={cn(
              "z-50 max-h-[calc(100dvh-6.5rem)] overflow-x-hidden overflow-y-auto overscroll-contain rounded-2xl border border-deep-green/10 bg-white p-2 text-charcoal shadow-soft",
              layout === "mega"
                ? "fixed left-6 right-6 top-[5.25rem] mx-auto max-w-[68rem] p-4"
                : "absolute top-[calc(100%+0.75rem)] w-[22rem]",
              layout === "compact" && align === "left" && "left-0",
              layout === "compact" && align === "right" && "right-0",
            )}
          >
            <div className="border-b border-deep-green/10 px-3 py-2.5">
              <Link
                data-dropdown-link
                to={overviewTo}
                onClick={() => setIsOpen(false)}
                aria-current={
                  location.pathname === overviewTo ? "page" : undefined
                }
                className={cn(
                  "inline-flex items-center gap-2 rounded-md text-sm font-bold text-deep-green transition-colors hover:text-emerald",
                  location.pathname === overviewTo && "text-emerald",
                )}
              >
                {overviewLabel}
                <span aria-hidden="true" className="text-brand-lime">
                  →
                </span>
              </Link>
            </div>

            <div
              className={cn(
                "grid gap-1 py-1",
                layout === "mega" ? "md:grid-cols-3 xl:grid-cols-5" : "grid-cols-1",
              )}
            >
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
                  <div key={group.label} className="rounded-xl p-3">
                    {showGroupLabels ? (
                      <Link
                        to={group.to}
                        onClick={() => setIsOpen(false)}
                        aria-current={isGroupActive ? "page" : undefined}
                        className={cn(
                          "mb-2 block rounded-md text-xs font-bold uppercase tracking-[0.13em] text-deep-green transition-colors hover:text-emerald",
                          isGroupActive && "text-emerald",
                        )}
                      >
                        {group.label}
                      </Link>
                    ) : null}
                    <div className="grid gap-1">
                      {group.items.map((item, itemIndex) => {
                        const isItemActive = itemIndex === activeItemIndex;

                        return (
                          <Link
                            data-dropdown-link
                            key={`${group.label}-${item.label}`}
                            to={item.to}
                            onClick={() => setIsOpen(false)}
                            aria-current={isItemActive ? "page" : undefined}
                            className={cn(
                              "rounded-lg px-2 py-2 text-sm font-medium leading-snug text-muted transition-colors hover:bg-off-white hover:text-deep-green focus-visible:bg-off-white",
                              isItemActive &&
                                "bg-[#EEF3EC] font-semibold text-deep-green",
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
