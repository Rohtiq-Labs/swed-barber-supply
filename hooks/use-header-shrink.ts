"use client";

import { useEffect } from "react";

export const useHeaderShrink = (headerId = "siteHeader"): void => {
  useEffect(() => {
    const header = document.getElementById(headerId);

    if (!header) {
      return;
    }

    const handleScroll = () => {
      header.classList.toggle("shrink", window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerId]);
};
