"use client";

import "./section-atelier.css";

import { useLocale } from "@/context/LocaleContext";

export const SectionAtelier = () => {
  const { dictionary } = useLocale();
  const { atelier } = dictionary;

  return (
    <div className="split reveal" aria-labelledby="atelier-heading">
      <div className="visual">
        <svg viewBox="0 0 300 300" fill="none" aria-hidden="true">
          <g stroke="#CBA96B" strokeWidth="1">
            <circle
              className="reveal-line"
              style={{ "--len": 340 } as React.CSSProperties}
              cx="150"
              cy="150"
              r="90"
            />
            <circle
              className="reveal-line"
              style={{ "--len": 200 } as React.CSSProperties}
              cx="150"
              cy="150"
              r="52"
            />
            <path
              className="reveal-line"
              style={{ "--len": 260 } as React.CSSProperties}
              d="M150 60 V240 M60 150 H240"
              strokeDasharray="3 6"
              opacity="0.5"
            />
          </g>
          <text x="88" y="153" fontFamily="IBM Plex Mono" fontSize="9" fill="#9AA1A6">
            {atelier.locationLabel}
          </text>
        </svg>
      </div>
      <div className="copy">
        <div className="eyebrow">{atelier.eyebrow}</div>
        <h2 id="atelier-heading" className="serif">
          {atelier.title}
          <br />
          {atelier.titleBreak}
        </h2>
        <p>{atelier.p1}</p>
        <p>{atelier.p2}</p>
        <div className="stat-row">
          {atelier.stats.map((stat) => (
            <div key={stat.label} className="stat">
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
