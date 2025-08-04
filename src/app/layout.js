import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
        <link rel="icon" href="favicon.svg" type="image/svg" sizes="32x32" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="8a2z9w3spPHmAkyXNTaynQcy6sWgz52Vu6PTfhv-ZwY"
        />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NQVW84QMGJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NQVW84QMGJ');
          `}
        </Script>
        <Script id="gtm-init" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TW5H9G9W');
  `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BackToTop />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TW5H9G9W"
            height="0"
            width="0"
            style={{display :'none', visibility: "hidden"}}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
