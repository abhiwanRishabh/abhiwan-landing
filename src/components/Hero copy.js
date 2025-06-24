import React from "react";
import styles from "./styles/Hero.module.css";
import Navbar from "./Navbar";

import {
  ChevronRight,
  MoveLeft,
  MoveRight,
  MoveUpLeft,
  MoveUpRight,
} from "lucide-react";
import { gravesend, nasalization, helvetica } from "@/app/font/Fonts";

import Image from "next/image";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Link from "next/link";

const StatsComp = ({ number, ftext, stext }) => {
  return (
    <>
      <div className="text-center">
        <p className="color-[#DCEEE2] text-2xl  font-bold">{number}</p>
        <p className={`${styles.stats} text-1xl font-bold capitalize`}>
          {ftext}
          <br /> {stext}
        </p>
      </div>
    </>
  );
};

const RightLongBaseLine = ({ text1, text2, hrefid, iconp }) => {
  return (
    <>
      <Link href={`${hrefid}`}>
        <div className={`w-[max-content] relative`}>
          <div className=" w-[-webkit-fill-available] absolute  right-[44px] ">
            <div className="flex  items-center justify-between gap-2">
              {iconp ? (
                <MoveUpLeft className="mb-4" />
              ) : (
                <MoveLeft className="mb-4" />
              )}

              <p className={``}>
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
      </Link>
    </>
  );
};
const LeftLongBaseLine = ({ text1, text2, iconp }) => {
  return (
    <>
      <div className={`w-[max-content] relative`}>
        <div className=" w-[-webkit-fill-available] absolute  left-[12px] ">
          <div className="flex  items-center justify-between ">
            <p className={``}>
              {text1} <br /> {text2}
            </p>
            {iconp ? (
              <MoveUpRight className="mb-4" />
            ) : (
              <MoveRight className="mb-4" />
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
              className={`${styles.vrGirl} h-[42rem] flex justify-center w-full relative z-11`}
            >
              <Image
                src="/vrgirl.png"
                alt="hero"
                width={500}
                height={500}
                className="w-auto h-full"
              />
            </div>
            <div className="flex flex-col justify-between items-between relative z-10">
              {/* heading */}
              <div>
                <h1
                  className={`${styles.mainHeading} ${nasalization.className} text-6xl sm:text-6xl md:text-[16rem] font-bold text-white uppercase text-center`}
                >
                  Abhiwan
                </h1>
                <p
                  className={`${styles.sabHeading} ${helvetica.className} text:xs md:text-2xl tracking-[1.35rem]  md:tracking-[6.5rem] text-white uppercase text-center `}
                >
                  technology
                </p>
              </div>
              <div className=" px-12 relative z-20 hidden md:block">
                <div>
                  <RightLongBaseLine
                    text1=" Our Recent "
                    text2=" Projects"
                    hrefid="#recentProject"
                    iconp={true}
                  />
                  <RightLongBaseLine
                    text1=" About Abhiwan "
                    text2=" Technology"
                    hrefid="#aboutAbhiwan"
                    iconp={false}
                  />
                </div>
                <div className="flex justify-end  gap-4 hidden md:block">
                  <div>
                    <LeftLongBaseLine
                      text1=" Innovative  "
                      text2=" Solutions"
                      iconp={true}
                    />
                    <LeftLongBaseLine
                      text1=" Get  "
                      text2=" a Quote"
                      iconp={false}
                    />
                  </div>
                </div>
              </div>
              {/* bottom container */}
              <div
                className={`${styles.statsContainer} w-full flex justify-between items-center  pb-6 px-12 hidden md:block`}
              >
                <div className="flex gap-7 ">
                  <StatsComp number="6+" ftext="Year of" stext="innovation" />
                  <StatsComp number="50%" ftext="Repeat" stext="Clients" />
                  <StatsComp number="100+" ftext="Tech" stext="Experts" />
                  <StatsComp
                    number="600+"
                    ftext="Successfull"
                    stext="Projects"
                  />
                </div>
                <div className="flex gap-4 ">
                  <div className={`${styles.getStartedContrainer}`}>
                    <button
                      className={`${styles.getStartedBtn} text-white capitalize py-3 px-5 `}
                    >
                      Get Started
                    </button>
                  </div>
                  <div
                    className={`${styles.getStartedArrowContrainer} rounded-full`}
                  >
                    <button
                      className={`${styles.getStartedBtnArrow} text-white self-stretch uppercase rounded-full p-2 font-bold `}
                    >
                      <ChevronRight size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.tagLine} relative z-12 ${gravesend.className}`}
            >
              <p className="text-sm  md:text-base text-white font-semibold px-5 md:px-4 py-2 rounded-full capitalize">
                Your Gateway to Game Development,{" "}
                <br className="md:hidden block" />
                Blockchain, ai, and the metaverse
              </p>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
};

export default Hero;
