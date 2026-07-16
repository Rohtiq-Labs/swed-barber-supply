"use client";

import Link from "next/link";

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
            <Link href="/shop/elektronik">{header.nav.elektronik}</Link>
            <Link href="/shop/saxar-rakning">{header.nav.saxar}</Link>
            <Link href="/shop/salongtillbehor">{header.nav.salong}</Link>
            <Link href="/shop/produkter">{header.nav.produkter}</Link>
          </div>
          <div>
            <h5>{footer.company}</h5>
            <Link href="/#atelier">{footer.links.about}</Link>
            <Link href="/brands">{header.nav.brands}</Link>
            <Link href="/shop/hot-deals">{header.nav.deals}</Link>
            <Link href="/shop">{header.nav.shop}</Link>
          </div>
          <div>
            <h5>{footer.trade}</h5>
            <Link href="/#trade">{footer.links.openAccount}</Link>
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
