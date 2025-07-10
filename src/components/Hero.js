"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/Hero.module.css";
import Navbar from "./Navbar";
import AOS from "aos";
import { motion, useMotionValue, animate } from "framer-motion";
import {
  ChevronRight,
  MoveLeft,
  MoveRight,
  MoveUpLeft,
  MoveUpRight,
} from "lucide-react";
import { nasalization, helvetica, gravesend } from "@/app/font/Fonts";

import Image from "next/image";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Link from "next/link";
import gsap from "gsap";
import StatsComp from "./subComp/StateCounter";
import { useGSAP } from "@gsap/react";

// const StatsComp = ({ number, ftext, stext }) => {
//   return (
//     <>
//       <div className="text-center">
//         <p className="color-[#DCEEE2] text-2xl  font-bold">{number}</p>
//         <p className={`${styles.stats} text-1xl font-bold capitalize`}>
//           {ftext}
//           <br /> {stext}
//         </p>
//       </div>
//     </>
//   );
// };

export const goToSection = (section) => {
  gsap.to(window, {
    scrollTo: {
      y: section, // or you can use a pixel value like 1000
      offsetY: 0, // optional, adjust if you have fixed headers
    },
    duration: 1,
    ease: "power1",
  });
};

const RightLongBaseLine = ({ text1, text2, hrefid, iconp }) => {
  return (
    <>
      {/* <Link href={`${hrefid}`}> */}
      <div
        className={`w-[max-content] relative `}
        onClick={() => goToSection(hrefid)}
      >
        <div className=" w-[-webkit-fill-available] absolute  right-[44px]">
          <div className="flex  items-center justify-between gap-2">
            {iconp ? (
              <MoveUpLeft className="mb-4" color="#fff" size={16} />
            ) : (
              <MoveLeft className="mb-4" color="#fff" size={16} />
            )}

            <p className={`text-white text-[18px]`}>
              {text1} <br /> {text2}
            </p>
          </div>
        </div>
        <svg
          width="255"
          height="100"
          viewBox="0 0 255 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M255 31C255 31 103.703 31 95.1866 31C86.6699 31 72.1415 1 63.6248 1C55.1081 1 -5.96037e-08 1 -5.96037e-08 1"
            stroke="#842DFF"
          />
        </svg>
        {/* <Image
          src="/baseLine.svg"
          alt="line"
          width={255}
          height={255}
          className={`${styles.line} `}
        /> */}

        {/* <svg
          width="225"
          height="100"
          viewBox="0 0 515 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 5H124.216C129.52 5 134.607 7.10714 138.358 10.8579L185.642 58.1421C189.393 61.8929 194.48 64 199.784 64H514.5"
            stroke="url(#paint0_linear_403_119441)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_403_119441"
              x1="0.5"
              y1="34.5"
              x2="514.5"
              y2="34.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#842DFF" />
              <stop offset="1" stopColor="#842DFF" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
    </>
  );
};
const LeftLongBaseLine = ({ text1, text2, iconp, hrefid }) => {
  return (
    <>
      <div
        className={`w-[max-content] relative `}
        onClick={() => goToSection(hrefid)}
      >
        <div className=" w-[-webkit-fill-available] absolute  left-[12px]">
          <div className="flex  items-center justify-between ">
            <p className={`text-white text-[18px]`}>
              {text1} <br /> {text2}
            </p>
            {iconp ? (
              <MoveUpRight className="mb-4" color="#fff" size={16} />
            ) : (
              <MoveRight className="mb-4" color="#fff" size={16} />
            )}
          </div>
        </div>
        {/* <Image
          src="/baseLine.svg"
          alt="line"
          width={255}
          height={255}
          className={`${styles.line} `}
          /> */}
        <svg
          width="255"
          height="100"
          viewBox="0 0 255 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 31C0 31 151 31 159.5 31C168 31 182.5 1 191 1C199.5 1 254.5 1 254.5 1"
            stroke="#842DFF"
          />
        </svg>
      </div>
    </>
  );
};

// const nasalization = localFont({
//   src: "../app/font/nasalizationrg.ttf",
//   display: "swap",
// });

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#titleRef span",
      { opacity: 0, y: 400 },
      { opacity: 1, y: 0, duration: 2, stagger: 0.1 }
    );

    // gsap.fromTo(
    //   "#heroImage",
    //   { opacity: 0, y: 400 },
    //   { opacity: 1, duration: 2, y: 0 }
    // );
  }, {});

  return (
    <>
      <BackgroundGradientAnimation>
        <div className={`${styles.hero}`}>
          <div className={`${styles.hero_content} h-full`}>
            <div className={`${styles.blurDiv}`}></div>
            <div className={`${styles.blurDiv2}`}></div>
            <div className={`${styles.blurDiv3}`}></div>
            <Navbar />
            <div
              className={`${styles.vrGirl} h-[480px] 2xl:h-[600px] flex  w-auto m-auto  relative z-11`}
            >
              <div className="z-[999]" id={"heroImage"}>
                <Image
                  src="/vrgirl.avif"
                  alt="hero"
                  width={400}
                  height={400}
                  className="w-auto h-full"
                  priority
                  unoptimized={true}
                  // placeholder="blur"
                  // blurDataURL="/vrGirlPlaceholder.avif"
                />
              </div>
            </div>
            <div
              className="flex flex-col justify-between items-between relative z-[98] h-10/12"
              id="hero-sub-containers"
            >
              {/* heading */}
              <div className="translate-y-[40px] sm:translate-y-[100px] md:translate-y-[150px] lg:translate-0">
                {/* <div data-aos="fade-down"> */}
                <h1
                  id={"titleRef"}
                  className={`${styles.mainHeading} ${nasalization.className}   font-bold text-white uppercase text-center`}
                >
                  <span className="translate-y-[400px]">A</span>
                  <span className="translate-y-[400px]">B</span>
                  <span className="translate-y-[400px]">H</span>
                  <span className="translate-y-[400px]">I</span>
                  <span className="translate-y-[400px] italic">W</span>
                  <span className="translate-y-[400px]">A</span>
                  <span className="translate-y-[400px]">N</span>
                </h1>
                {/* </div> */}
                <p
                  className={`${styles.sabHeading} ${helvetica.className}  text-white uppercase text-center `}
                >
                  technology
                </p>
              </div>
              <div className=" px-12 pt-1 relative z-13 hidden md:block  h-[400px]">
                <div className={styles.arrowLeftSection}>
                  <RightLongBaseLine
                    text1="Our Recent "
                    text2=" Projects"
                    hrefid="#recentProject"
                    iconp={true}
                  />
                  <RightLongBaseLine
                    text1=" About Abhiwan "
                    text2=" Technology"
                    hrefid="#aboutus"
                    iconp={false}
                  />
                </div>
                <div className={styles.arrowRightSection}>
                  <LeftLongBaseLine
                    text1=" Innovative  "
                    text2=" Solutions"
                    hrefid="#ourservice"
                    iconp={true}
                  />
                  <LeftLongBaseLine
                    text1=" Get  "
                    text2=" a Quote"
                    hrefid="#contactus"
                    iconp={false}
                  />
                </div>
              </div>
              {/* bottom container */}
              <div
                className={`${styles.statsContainer} w-full hidden lg:flex justify-between items-center  pb-6 px-12`}
              >
                <div className="flex gap-7 ">
                  <div data-aos="fade-up">
                    <StatsComp number="7+" ftext="Year of" stext="Experience" />
                  </div>
                  <div data-aos="fade-up" data-aos-delay={`200`}>
                    <StatsComp number="80%" ftext="Repeat" stext="Clients" />
                  </div>
                  <div data-aos="fade-up" data-aos-delay={`400`}>
                    <StatsComp number="90+" ftext="Team" stext="Members" />
                  </div>
                  <div data-aos="fade-up" data-aos-delay={`600`}>
                    <StatsComp number="300+" ftext="Happy" stext="Clients" />
                  </div>
                </div>
                <>
                  <div className={`flex gap-4 cursor-pointer `}>
                    <div
                      className={`${styles.getStartedContrainer} cursor-pointer`}
                    >
                      <button
                        className={`${styles.getStartedBtn} text-white capitalize py-3 px-5 cursor-pointer`}
                        onClick={() => goToSection("#contactus")}
                      >
                        Get Started
                      </button>
                    </div>
                    {/* <div
                      className={`${styles.getStartedArrowContrainer} rounded-full cursor-pointer`}
                    >
                      <button
                        className={`${styles.getStartedBtnArrow} text-white self-stretch uppercase rounded-full p-2 font-bold cursor-pointer`}
                      >
                        <ChevronRight size={30} />
                      </button>
                    </div> */}
                  </div>
                </>
              </div>
            </div>
            <div
              className={`${styles.tagLine} relative z-12 ${gravesend.className}`}
            >
              <p className="text:xs md:text-1xl text-white  px-4 py-2 rounded-full capitalize">
                Your Gateway to Game Development,
                <br className="block lg:hidden " /> Blockchain, ai, and the
                metaverse
              </p>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
};

export default Hero;
