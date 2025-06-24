"use client";
import AOS from "aos";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { gravesend, helvetica } from "@/app/font/Fonts";

const teamMembers = [
  {
    name: "PAWAN AGNIHOTRI",
    role: "CO-FOUNDER",
    description: "MYDNSAHGASDGSYUICHSYCJ GBHUSCGHJC BSAHJCBHJBJS HACBHJCSHBB",
    image: "/content/team/pawan.png",
  },
  {
    name: "ABHISHEK VERMA",
    role: "CO-FOUNDER",
    description: "MYDNSAHGASDGSYUICHSYCJ GBHUSCGHJ CBSAHJCBHJBJS HACBHJCSHBB",
    image: "/content/team/abhishek.png",
  },
  {
    name: "JHONNY",
    role: "PARTNER",
    description: "MYDNSAHGASDGSYUICHSYCJ GBHUSCGHJ CBSAHJCBHJBJS HACBHJCSHBB",
    image: "/content/team/jhony.png",
  },
];

export default function TeamSection() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: false,
  //     mirror: true,
  //     offset: 100,
  //     easing: "ease-in-out",
  //     anchorPlacement: "top-bottom",
  //   });
  //   AOS.refresh();

  //   return () => {
  //     AOS.refreshHard();
  //   };
  // }, []);
  return (
    <section className=" py-9 text-white text-center">
      {/* bg-[#1a002a] */}
      <div>
        <h2
          className={`text-3xl md:text-6xl lg:text-7xl font-extrabold  mb-2 uppercase tracking-wide text-transparent bg-clip-text inline-block mt-2 ${gravesend.className}`}
          style={{
            backgroundImage:
              "radial-gradient(34.58% 173.32% at 16.4% -82.56%, #120B65 0%, #2C72FF 100%)",
          }}
          id="Headings"
        >
          {/* className={`text-3xl sm:text-4xl font-bold text-transparent bg-clip-text inline-block mt-2 ${styles.animatedGradientText}`} */}
          {/* // style={{
          //   backgroundImage:
          //     "linear-gradient(90deg, #2C72FF 0%, #D227FC 50%, #2C72FF 100%)",
          // }} */}
          Our Team
        </h2>
        <p
          className={` text-gray-400 mb-10 lead   ${helvetica.className}`}
          // font-light
        >
          Meet the Minds Driving Innovation & Excellence
        </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center  items-center gap-8 px-4 max-w-7xl mx-auto">
        {teamMembers &&
          teamMembers.map((member, index) => (
            <div key={index}>
              <div
                className="group transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_20px_rgba(108,90,255,0.5)] rounded-2xl p-6 min-w-[350px] w-full border border-zinc-500"
                style={{
                  background:
                    "radial-gradient(86.85% 68.88% at 50% 31.12%, #000899 0%, #000000 100%)",
                }}
              >
                <div className="w-60 h-60 mx-auto rounded-full overflow-hidden mb-4 border border-zinc-500 ">
                  <div className="w-full h-full transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={252}
                      height={252}
                      className="object-cover w-full h-full scale-110"
                      priority={index < 3}
                    />
                  </div>
                </div>

                <h3
                  className={`text-3xl font-bold uppercase mt-15 mb-2 ${gravesend.className}`}
                >
                  {member.name}
                </h3>
                <p
                  className={`text-xl font-semibold mb-4 ${gravesend.className}`}
                >
                  {member.role}
                </p>
                {/* <p className="text-xs text-gray-300 leading-relaxed">
              {member.description}
            </p> */}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
