import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function RouteNormalization() {
  const { hash, pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/" || !pathname.endsWith("/")) {
      return;
    }

    navigate(
      {
        pathname: pathname.replace(/\/+$/, ""),
        search,
        hash,
      },
      { replace: true },
    );
  }, [hash, navigate, pathname, search]);

  return null;
}
