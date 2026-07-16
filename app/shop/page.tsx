import type { Metadata } from "next";

import { ShopIndexPage } from "@/components/shop/ShopPages";

export const metadata: Metadata = {
  title: "Shop — Swed BarberSupply",
  description:
    "Browse clippers, trimmers, shears, salon accessories and hair products for professional barbershops.",
};

export default function ShopPage() {
  return <ShopIndexPage />;
}
