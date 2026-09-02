import { siteConfig } from "../config/siteConfig";

export const buildWhatsAppUrl = (message: string): string =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

export const openWhatsApp = (message: string): Window | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const whatsAppWindow = window.open("about:blank", "_blank");

  if (!whatsAppWindow) {
    return null;
  }

  try {
    whatsAppWindow.opener = null;
    whatsAppWindow.location.replace(buildWhatsAppUrl(message));
  } catch {
    whatsAppWindow.close();
    return null;
  }

  return whatsAppWindow;
};
