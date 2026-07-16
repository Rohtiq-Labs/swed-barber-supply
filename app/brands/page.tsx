import type { Metadata } from "next";

import { BrandsIndexPage } from "@/components/shop/ShopPages";

export const metadata: Metadata = {
  title: "Brands — Swed BarberSupply",
  description:
    "JRL, Wahl, Andis, BaByliss, MRD, RedOne, Wella and more — warehoused in Gothenburg.",
};

export default function BrandsPage() {
  return <BrandsIndexPage />;
}
