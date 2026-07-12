"use client";

import "./section-marquee.css";

import { Fragment } from "react";

import { useLocale } from "@/context/LocaleContext";

export const SectionMarquee = () => {
  const { dictionary } = useLocale();
  const brandLine = dictionary.marquee.brands.map((brand, index) => (
    <Fragment key={brand}>
      {index > 0 ? " · " : null}
      <b>{brand}</b>
    </Fragment>
  ));

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        <span>{brandLine}</span>
        <span>{brandLine}</span>
      </div>
    </div>
  );
};
