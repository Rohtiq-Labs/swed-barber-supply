"use client";

import "./section-catalogue.css";

import { useLocale } from "@/context/LocaleContext";

const LedgerArrow = () => (
  <svg
    className="ledger-arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <path d="M6 18L18 6M18 6H8M18 6V16" />
  </svg>
);

export const SectionCatalogue = () => {
  const { dictionary } = useLocale();
  const { catalogue } = dictionary;

  return (
    <section className="section" id="catalogue" aria-labelledby="catalogue-heading">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">{catalogue.eyebrow}</div>
            <h2 id="catalogue-heading" className="serif reveal">
              {catalogue.title} <br />
              {catalogue.titleBreak}
            </h2>
          </div>
          <p className="desc reveal">{catalogue.desc}</p>
        </div>

        <div className="ledger reveal">
          {catalogue.rows.map((row, index) => (
            <div
              key={row.num}
              className="ledger-row"
              id={index === 4 ? "deals" : undefined}
              role="link"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  window.location.hash = "#";
                }
              }}
              onClick={() => {
                window.location.hash = "#";
              }}
            >
              <span className="ledger-num mono">{row.num}</span>
              <span className="ledger-title serif">{row.title}</span>
              <span className="ledger-sub">{row.sub}</span>
              <span className="ledger-count mono">{row.count}</span>
              <LedgerArrow />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
