// Local fonts
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts
import localFont from "next/font/local";

export const nasalization = localFont({
  src: "NasalizationRg.otf",
  display: "swap",
});

export const helvetica = localFont({
  src: [
    {
      path: "./helvetica/helvetica-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./helvetica/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./helvetica/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});
export const gravesend = localFont({
  src: [
    {
      path: "./gravesend/gravesend-sans-medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./gravesend/gravesend-sans-bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./gravesend/gravesend-sans-light.ttf",
      weight: "300",
      style: "light",
    },
  ],
});

// Google fonts

import { Voltaire, Montserrat } from "next/font/google";

export const voltaire = Voltaire({
  subsets: ["latin"],
  weight: "400",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
