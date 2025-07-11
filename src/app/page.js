"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";

// Eager components
import AbhiwanTechnology from "@/components/AbhiwanTechnology";
import ClientsMarquee from "@/components/ClientsMarquee";
// import ConceptToReality from "@/components/ConceptToReality";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import ShowcaseCard from "@/components/ShowcaseCard";
import { StatsSection } from "@/components/StatsSection";
import ContactForm from "@/components/ContactForm";
import { useLazyLoadOnView } from "@/components/hooks/useLazyLoadOnView";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import TechShowcase from "@/components/TechShowcase";
import DigitalSolutions from "@/components/DigitalSolutions";
import ConceptToReality from "@/components/ConceptToReality";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import  Aos from "aos";
// Register plugins inside a client effect later for optimization

gsap.registerPlugin(ScrollToPlugin);

// Lazy components
const MainSlider = dynamic(() => import("@/components/MainSlider"), {
  ssr: false,
  loading: () => <div></div>,
});

const OurClients = dynamic(() => import("@/components/OurClients"), {
  ssr: false,
  loading: () => <div></div>,
});

const Awards = dynamic(() => import("@/components/Awards"), {
  ssr: false,
  loading: () => <div></div>,
});

const TeamSection = dynamic(() => import("@/components/TeamSection"), {
  ssr: false,
  loading: () => <div></div>,
});

// Reusable wrapper for lazy loading on viewport

export default function Home() {
  return (
    <>
      <Hero />
      <ContactForm />
      <ClientsMarquee />
      <TechShowcase />
      <DigitalSolutions />
      <div className="mt-18 lg:mt-0">
        <StatsSection />
      </div>
      <MainSlider />
      <div className="-mt-18 lg:mt-0">
        <ConceptToReality />
      </div>
      <ShowcaseCard />
      <MarqueeBanner />
      <div className="overflow-x-hidden">
        <AbhiwanTechnology />
      </div>
      <TeamSection />
      <OurClients />
      <Awards />
      <ContactUs />
      <Footer />
    </>
  );
}
