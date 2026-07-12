"use client";

import { FormEvent, useState } from "react";

import "./section-trade.css";

import { useLocale } from "@/context/LocaleContext";

export const SectionTrade = () => {
  const { dictionary } = useLocale();
  const { trade } = dictionary;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="trade" id="trade" aria-labelledby="trade-heading">
      <div className="wrap">
        <div className="trade-box reveal">
          <div>
            <div className="eyebrow">{trade.eyebrow}</div>
            <h2 id="trade-heading" className="serif">
              {trade.title}
            </h2>
            <p>{trade.desc}</p>
          </div>
          <form className="trade-form" onSubmit={handleSubmit} noValidate>
            <input type="text" placeholder={trade.form.salon} required aria-label={trade.form.salon} />
            <input type="email" placeholder={trade.form.email} required aria-label={trade.form.email} />
            <input type="text" placeholder={trade.form.city} required aria-label={trade.form.city} />
            <button type="submit" className="btn-solid">
              {submitted ? trade.form.received : trade.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
