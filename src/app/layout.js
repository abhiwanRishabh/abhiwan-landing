import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "aos/dist/aos.css";
import BackToTop from "@/components/subComp/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Top metaverse game development companies in the USA",
  description:
    "Discover top-rated metaverse game development companies in the USA that offer digital twin, blockchain, AI, website and app development services. Explore now",
  keywords: [
    "game development companies",
    "game development company in USA",
    "metaverse development companies",
    "digital twin companies",
    "blockchain development services",
    "artificial intelligence company",
    "website and app development services",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-locator-target="vscode">
      <head>
        <link rel="icon" href="logo.svg" type="image/svg" sizes="32x32" />
        {/* <link rel="preload" as="image" href="/vrgirl.avif" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
