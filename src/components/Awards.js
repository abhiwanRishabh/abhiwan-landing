"use client";
import AOS from "aos";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gravesend, helvetica } from "@/app/font/Fonts";
import { InfiniteMarquee } from "./ui/InfiniteMarquee";

const awardsList = [
  { imageUrl: "/content/awards/award.png" },
  { imageUrl: "/content/awards/award_2.png" },
  { imageUrl: "/content/awards/award_3.png" },
  { imageUrl: "/content/awards/award_4.png" },
  { imageUrl: "/content/awards/award_5.png" },
  { imageUrl: "/content/awards/award_6.png" },
  { imageUrl: "/content/awards/award7.png" },

  // { imageUrl: "/content/awards/award8.png" },
  // { imageUrl: "/content/awards/award9.png" },
  // { imageUrl: "/content/awards/award10.png" },
  // { imageUrl: "/content/awards/award11.png" },
  // { imageUrl: "/content/awards/award12.png" },
  // { imageUrl: "/content/awards/award13.png" },
  // { imageUrl: "/content/awards/award14.png" },
  // { imageUrl: "/content/awards/award15.png" },
  // { imageUrl: "/content/awards/award16.png" },
  // { imageUrl: "/content/awards/award17.png" },
  // { imageUrl: "/content/awards/award18.png" },
  // { imageUrl: "/content/awards/award19.png" },
  // { imageUrl: "/content/awards/award20.png" },
  // { imageUrl: "/content/awards/award21.png" },
];

const Awards = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);

  const logos = [
    { name: "Vercel", color: "text-black" },
    { name: "Next.js", color: "text-gray-800" },
    { name: "React", color: "text-blue-600" },
    { name: "JavaScript", color: "text-yellow-500" },
    { name: "Tailwind", color: "text-cyan-500" },
    { name: "Node.js", color: "text-green-600" },
    { name: "MongoDB", color: "text-green-500" },
    { name: "PostgreSQL", color: "text-blue-700" },
  ];

  return (
    <>
      <div>
        <h1
          className={`text-center text-white small-heading max-w-10/12 m-auto font-bold uppercase mt-1 md:mt-12 ${gravesend.className}`}
        >
          Honored with Excellence – Recognized for Innovation
        </h1>
      </div>
      <div>
        <div className="py-12 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          {/* <InfiniteMovingCards
            items={awardsList}
            direction="left"
            speed="slow"
            // width="100%"
            width="100%"
            height="auto"
            objectFit="object-contain"
            // objectFit="object-cover"
            customClasses="aspect-square overflow-hidden flex items-center justify-center"
          /> */}
          <section className="space-y-4">
            {
              <div className="p-6">
                <InfiniteMarquee speed="normal" pauseOnHover={false}>
                  {awardsList.map((award) => (
                    <Image
                      key={award.imageUrl}
                      src={award.imageUrl}
                      alt={award?.name || "image"}
                      width={150}
                      height={150}
                      // className={`w-32 h-32 ${objectFit} `}
                      className={`w-[50px] md:w-[120px] h-auto object-contain whitespace-nowrap`}
                    />
                  ))}
                </InfiniteMarquee>
              </div>
            }
          </section>
        </div>
      </div>
    </>
  );
};

export default Awards;
