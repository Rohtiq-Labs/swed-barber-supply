"use client";

import { useCallback, useEffect, useState } from "react";

import "./section-testimonials.css";

import { useLocale } from "@/context/LocaleContext";

export const SectionTestimonials = () => {
  const { dictionary } = useLocale();
  const { testimonials } = dictionary;
  const [activeIndex, setActiveIndex] = useState(0);

  const setQuote = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.quotes.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [testimonials.quotes.length]);

  const activeQuote = testimonials.quotes[activeIndex];

  return (
    <section className="testi-wrap" aria-label="Testimonials">
      <div className="testi-inner">
        <span className="quote-mark serif" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote>{activeQuote.text}</blockquote>
        <div className="testi-cite mono">{activeQuote.cite}</div>
        <div className="testi-dots" role="tablist" aria-label="Select testimonial">
          {testimonials.quotes.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Testimonial ${index + 1}`}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setQuote(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
