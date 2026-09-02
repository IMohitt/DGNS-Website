import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getRouteMeta, notFoundRouteMeta } from "../../config/routeMeta";

export function RouteAnnouncer() {
  const { pathname } = useLocation();
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const title = getRouteMeta(pathname)?.title ?? notFoundRouteMeta.title;
    setAnnouncement(`Navigated to ${title}`);
  }, [pathname]);

  return (
    <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {announcement}
    </p>
  );
}
