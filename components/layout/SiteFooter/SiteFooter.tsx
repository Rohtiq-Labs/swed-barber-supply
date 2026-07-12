"use client";

import "./site-footer.css";

import { useLocale } from "@/context/LocaleContext";

export const SiteFooter = () => {
  const { dictionary } = useLocale();
  const { footer, header } = dictionary;

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo serif">{footer.brand}</div>
            <p className="foot-tagline">{footer.tagline}</p>
          </div>
          <div>
            <h5>{footer.catalogue}</h5>
            <a href="#catalogue">{header.nav.elektronik}</a>
            <a href="#catalogue">{header.nav.saxar}</a>
            <a href="#catalogue">{header.nav.salong}</a>
            <a href="#catalogue">{header.nav.produkter}</a>
          </div>
          <div>
            <h5>{footer.company}</h5>
            <a href="#">{footer.links.about}</a>
            <a href="#">{footer.links.testimonials}</a>
            <a href="#brands">{header.nav.brands}</a>
            <a href="#deals">{header.nav.deals}</a>
          </div>
          <div>
            <h5>{footer.trade}</h5>
            <a href="#trade">{footer.links.openAccount}</a>
            <a href="#">{footer.links.shipping}</a>
            <a href="#">{footer.links.contact}</a>
          </div>
          <div>
            <h5>{footer.visit}</h5>
            <p>
              {footer.address}
              <br />
              {footer.city}
            </p>
            <p>{footer.hours}</p>
            <a href="#">{footer.links.instagram}</a>
            <a href="#">{footer.links.facebook}</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{footer.copyright}</span>
          <span>{footer.legal}</span>
        </div>
      </div>
    </footer>
  );
};
