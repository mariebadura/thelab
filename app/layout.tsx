import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/site.config";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "The Lab — the expense tracker that doesn't leave money on the table",
  description:
    "For UK solopreneurs: snap a purchase and learn if it's claimable, get nudged about allowances you're missing, and get a year-end prepared from your own data — reviewed by an accountant. Join the waitlist.",
  openGraph: {
    title: "The Lab — the expense tracker that doesn't leave money on the table",
    description:
      "Snap a purchase and learn if it's claimable, get nudged about allowances you're missing, and get an accountant-reviewed year-end from your own data. Join the waitlist for early access.",
    url: "/",
    siteName: "The Lab",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        {siteConfig.goatCounterCode && (
          <Script
            data-goatcounter={`https://${siteConfig.goatCounterCode}.goatcounter.com/count`}
            src="https://gc.zgo.at/count.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
