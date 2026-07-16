import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Inter,
  Libre_Caslon_Display,
  Libre_Caslon_Text,
} from "next/font/google";

import { SiteEffects } from "@/components/layout/SiteEffects";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LocaleProvider } from "@/context/LocaleContext";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreCaslonDisplay = Libre_Caslon_Display({
  variable: "--font-libre-caslon-display",
  weight: "400",
  subsets: ["latin"],
});

const libreCaslonText = Libre_Caslon_Text({
  variable: "--font-libre-caslon-text",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swed BarberSupply — Instruments for the Trade",
  description:
    "Wholesale instruments and finishing products for professional barbers and salons, warehoused in Gothenburg.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${libreCaslonDisplay.variable} ${libreCaslonText.variable} ${ibmPlexMono.variable}`}
      >
        <LocaleProvider>
          <SiteEffects>
            <SiteHeader />
            {children}
            <SiteFooter />
          </SiteEffects>
        </LocaleProvider>
      </body>
    </html>
  );
}
