import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SectionAtelier } from "@/components/sections/SectionAtelier";
import { SectionBestsellers } from "@/components/sections/SectionBestsellers";
import { SectionBrands } from "@/components/sections/SectionBrands";
import { SectionCatalogue } from "@/components/sections/SectionCatalogue";
import { SectionHero } from "@/components/sections/SectionHero";
import { SectionMarquee } from "@/components/sections/SectionMarquee";
import { SectionPillars } from "@/components/sections/SectionPillars";
import { SectionTestimonials } from "@/components/sections/SectionTestimonials";
import { SectionTrade } from "@/components/sections/SectionTrade";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <SectionHero />
        <SectionMarquee />
        <SectionCatalogue />
        <SectionBestsellers />
        <SectionAtelier />
        <SectionBrands />
        <SectionPillars />
        <SectionTestimonials />
        <SectionTrade />
      </main>
      <SiteFooter />
    </>
  );
}
