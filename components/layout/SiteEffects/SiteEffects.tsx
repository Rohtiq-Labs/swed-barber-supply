"use client";

import { useHeaderShrink } from "@/hooks/use-header-shrink";
import { useRevealObserver } from "@/hooks/use-reveal-observer";

type SiteEffectsProps = {
  children: React.ReactNode;
};

export const SiteEffects = ({ children }: SiteEffectsProps) => {
  useHeaderShrink();
  useRevealObserver();

  return <>{children}</>;
};
