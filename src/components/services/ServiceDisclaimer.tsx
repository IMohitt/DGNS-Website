import { Info } from "lucide-react";
import { Container } from "../common/Container";

type ServiceDisclaimerProps = {
  children: string;
};

export function ServiceDisclaimer({ children }: ServiceDisclaimerProps) {
  return (
    <aside className="border-y border-deep-green/10 bg-[#EEF3EC] py-6" aria-label="Important service information">
      <Container className="flex items-start gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-deep-green text-brand-lime">
          <Info aria-hidden="true" className="size-4" />
        </span>
        <p className="max-w-5xl text-sm leading-7 text-deep-green/72">{children}</p>
      </Container>
    </aside>
  );
}
