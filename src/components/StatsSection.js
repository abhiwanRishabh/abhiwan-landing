"use client";
import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import React from "react";
import AOS from "aos";
import { gravesend, nasalization, helvetica } from "@/app/font/Fonts";
import StatsComp from "./subComp/StateCounter";
export const StatsSection = () => {
  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    // });
  }, []);

  const statsData = [
    {
      id: useId(),
      number: "6 +",
      text1: "Years of",
      text2: "Innovation",
    },
    {
      id: useId(),
      number: "50%",
      text1: "Repeated",
      text2: "Clients",
    },
    {
      id: useId(),
      number: "100+",
      text1: "Tech",
      text2: "Experts",
    },
    {
      id: useId(),
      number: "600+",
      text1: "Projects",
      text2: "Delivered",
    },
  ];
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible === false) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          console.log("entry", entry);
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.2, // Adjust as needed
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, [isVisible]);
  // console.log("statsData", statsData);

  return (
    <>
      {/* for desktop */}
      <div
        className="text-center p-6 md:pt-20 md:pb-15 px-6  mx-auto"
        id="aboutus"
      >
        <div data-aos="fade-up">
          <h1
            className={`${gravesend.className} font-bold text-white leading-snug `}
            // lineHeightFullPercentage
            id="Headings"
          >
            Innovating{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,_#2C72FF_42.64%,_#D227FC_55.12%,_#4D0A76_75.69%)]">
              Digital
            </span>{" "}
            Solutions, <br />
            Transforming{" "}
            <span className="text-transparent bg-clip-text  bg-[linear-gradient(90deg,_#2C72FF_0%,_#D227FC_50%,_#2C72FF_100%)]">
              Businesses
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,_#2C72FF_42.64%,_#D227FC_55.12%,_#4D0A76_75.69%)] font-bold uppercase ">
              {/* tracking-wider */}
              Globally
            </span>
          </h1>{" "}
        </div>
      </div>
      {/* for mobile 🔽 */}
      <div className="" data-aos="fade-up">
        <div className="flex gap-3 px-12 md:hidden ">
          <div className="w-full flex align-center justify-center">
            <Image
              src="/content/globalSolution.png"
              width={400}
              height={400}
              alt="Blockchain Web3.0"
              className="my-auto rounded-3xl w-full h-[320px] aspect-4/5 object-cover shadow-[0px_4.8px_231.84px_85.2px_#FFFFFF40]"
              // aspect-2/3
            />
          </div>
          {/* stats */}
          <div className="bg-[linear-gradient(360deg,#2C72FF_-0.06%,#D227FC_53.82%,#2C72FF_100%)] p-[1px] rounded-[38px] block md:hidden ">
            <div
              // ref={sectionRef}
              className="bg-[#230029]  grid gap-2 py-6 px-1 rounded-[38px]  "
            >
              {statsData.map((item, idx) => {
                return (
                  <div className="text-center px-3 leading-3" key={item?.id}>
                    <StatsComp
                      number={`${item.number}`}
                      ftext=""
                      stext=""
                      className={`${gravesend.className} text:xl  md:text-5xl font-bold text-white`}
                    />
                    {/* <h2
                        className={`${gravesend.className} text:xl   md:text-5xl font-bold text-white`}
                      >
                        {item.number}
                      </h2> */}
                    <p
                      // className={`${helvetica.className} text-white mt-2 text-[20px]`}
                      className={`${helvetica.className}  text-nowrap mt-0 md:mt-2 text-sm md:text-3xl font-bold  text-transparent bg-clip-text`}
                      style={{
                        backgroundImage:
                          "radial-gradient(50% 167.69% at 50% 87.9%, #3625ff 0%, #2C72FF 50%)",
                      }}
                    >
                      {item.text1}
                      <br />
                      {item.text2}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <div clasName="max-w-5xl mx-auto"> */}
      {/* <div clasName="max-w-[1920px] mx-auto"> */}
      <div className="lg:max-w-full xl:max-w-10/12 px-3 mx-auto">
        {/* <div className="flex flex-col md:flex-row  gap-6   mb-20 max-w-7xl mx-auto"> */}
        <div className="flex flex-col lg:flex-row  gap-6  mb-1 md:mb-20 max-w-[1652px] mx-auto">
          <div data-aos="fade-right">
            <div className="flex-1 flex flex-col justify-between p-7 pb-4 md:p-7 h-full">
              {/* heading */}
              <div className="mb-1 md:mb-10 lg:mb-15 xl:mb-20">
                <h2
                  className={` ${nasalization.className} medium-heading text-center md:text-start text-transparent bg-clip-text !capitalize`}
                  style={{
                    backgroundImage:
                      "radial-gradient(50% 167.69% at 50% 87.9%, #120B65 0%, #2C72FF 50%)",
                  }}
                >
                  Innovating Since 2018{" "}
                </h2>
                <p
                  className={`${helvetica.className} mt-2 md:mt-5 lead text-center md:text-start  text-gray-300 tracking-[0.56px] md:tracking-wide`}
                >
                  Since 2018, Abhiwan Technologies has been at the forefront of
                  Game Development, Blockchain, AI, Web & App Development, and
                  Metaverse Solutions, delivering cutting-edge technology to
                  startups, enterprises, and global brands.
                </p>
              </div>
              {/* stats */}
              <div className="bg-[linear-gradient(90deg,#2C72FF_0%,#D227FC_70%)] p-[2px] rounded-[4vw]  hidden md:block ">
                <div
                  ref={sectionRef}
                  className="bg-[#230029]  grid grid-cols-1 md:grid-cols-4 gap-6 py-8 px-2 rounded-[4vw]  "
                >
                  {isVisible &&
                    statsData.map((item, idx) => {
                      return (
                        <>
                          <div
                            key={`${item?.id}${idx}`}
                            className="text-center"
                          >
                            {/* <h2
                              className={`${gravesend.className} text:xl md:text-5xl font-bold text-white`}
                            >
                              {item.number}
                            </h2> */}
                            <StatsComp
                              number={`${item.number}`}
                              ftext=""
                              stext=""
                              className={`${gravesend.className} text:xl md:text-2xl lg:text-4xl font-bold text-white`}
                            />
                            <p
                              // className={`${helvetica.className} text-white mt-2 text-[20px]`}
                              className={`${helvetica.className}  mt-1 md:mt-2 md:text-lg lg:text-2xl text-xs font-bold  text-transparent bg-clip-text`}
                              style={{
                                backgroundImage:
                                  "radial-gradient(50% 167.69% at 50% 87.9%, #3625ff 0%, #2C72FF 50%)",
                              }}
                            >
                              {item.text1}
                              <br />
                              {item.text2}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  {/* <div>
                    <h2
                      className={`${gravesend.className} text-5xl font-bold text-transparent bg-clip-text `}
                      style={{
                        backgroundImage:
                          "radial-gradient(50% 167.69% at 50% 87.9%, #120B65 0%, #2C72FF 50%)",
                      }}
                    >
                      600+
                    </h2>
                    <p
                      className={`${helvetica.className} text-white mt-2 text-xl font-bold`}
                    >
                      Successful Projects Delivered Globally
                    </p>
                  </div>
                  <div>
                    <h2
                      className={`${gravesend.className} text-5xl font-bold text-transparent bg-clip-text `}
                      style={{
                        backgroundImage:
                          "radial-gradient(50% 167.69% at 50% 87.9%, #120B65 0%, #2C72FF 50%)",
                      }}
                    >
                      50%
                    </h2>
                    <p
                      className={`${helvetica.className} text-white mt-2 text-xl font-bold`}
                    >
                      Repeat Clients Trusted by Industry Leaders
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="hidden md:block ">
            <div className="min-w-[470px]  ">
              <Image
                src="/content/globalSolution.png"
                width={400}
                height={400}
                alt="Blockchain Web3.0"
                className="rounded-3xl w-full  h-[36.5rem] object-cover shadow-[0px_4.8px_231.84px_85.2px_#FFFFFF40]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
