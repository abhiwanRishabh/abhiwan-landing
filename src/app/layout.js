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
  title: "Abhiwan",
  description: "Abhiwan",
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
