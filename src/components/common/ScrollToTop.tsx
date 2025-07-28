// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
