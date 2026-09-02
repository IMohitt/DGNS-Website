import { Menu } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { useScrolled } from "../../hooks/useScrolled";
import { Container } from "../common/Container";
import { DesktopNavigation } from "../navigation/DesktopNavigation";
import { MobileMenu } from "../navigation/MobileMenu";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";
import { Logo } from "./Logo";

const connectMessage =
  "Hello DGNS Advisors, I would like to connect with your team.";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isScrolled = useScrolled(12);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header
        className="site-header sticky top-0 z-[80] border-b border-transparent"
        data-scrolled={isScrolled}
      >
        <Container className="flex h-[4.5rem] items-center justify-between gap-5 nav:h-[5.25rem]">
          <Logo />

          <div className="ml-auto flex items-center gap-5 nav:ml-0">
            <DesktopNavigation />
            <div className="hidden nav:block">
              <WhatsAppCTA
                label="Let's Connect"
                message={connectMessage}
                variant="primary"
                className="min-h-11 px-5"
              />
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className="grid size-12 place-items-center rounded-full border border-white/14 text-white transition-colors hover:border-brand-lime/55 hover:bg-white/6 nav:hidden"
              aria-label="Open navigation"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu aria-hidden="true" className="size-5" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        triggerRef={menuButtonRef}
      />
    </>
  );
}
