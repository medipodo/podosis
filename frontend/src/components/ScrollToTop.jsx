import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on route change.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "auto" : "auto" });
  }, [pathname]);
  return null;
};

export default ScrollToTop;
