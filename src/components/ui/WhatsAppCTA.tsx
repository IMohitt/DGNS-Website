import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";

import { buildWhatsAppUrl } from "../../utils/whatsapp";
import { Button, type ButtonVariant } from "./Button";

export interface WhatsAppCTAProps {
  label: string;
  message: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export function WhatsAppCTA({
  label,
  message,
  icon,
  variant = "primary",
  className,
}: WhatsAppCTAProps) {
  return (
    <Button
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={className}
      aria-label={`${label} on WhatsApp`}
    >
      <span aria-hidden="true" className="inline-flex shrink-0">
        {icon ?? <MessageCircle className="size-[1.15em]" strokeWidth={2} />}
      </span>
      <span>{label}</span>
    </Button>
  );
}
