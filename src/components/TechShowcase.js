"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  MoveUpLeft,
  MoveLeft,
  MoveRight,
  MoveUpRight,
  MoveDownLeft,
  MoveDownRight,
} from "lucide-react";
import Image from "next/image";
import styles from "./styles/TechShowcase.module.css";
import { gravesend, nasalization, helvetica } from "@/app/font/Fonts";
import { data } from "@/components/constants/techShowcaseData";
import { useLazyLoadOnView } from "./hooks/useLazyLoadOnView";

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    position: "absolute", // Add this to prevent layout jumps
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative", // Add this for centered state
  },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
    position: "absolute", // Add this for exit state
  }),
};

export default function TechShowcase() {
  const [[startIndex, direction], setStartIndex] = useState([0, 0]);
  const visibleCards = 3;
  const autoScrollRef = useRef(null);
  const { ref, isVisible } = useLazyLoadOnView();

  const handleNext = () => {
    setStartIndex(([prevIndex]) => [
      (prevIndex + visibleCards) % data.length,
      1,
    ]);
    resetAutoScroll();
  };

  const handlePrev = () => {
    setStartIndex(([prevIndex]) => [
      (prevIndex - visibleCards + data.length) % data.length,
      -1,
    ]);
    resetAutoScroll();
  };

  const getVisibleItems = () => {
    return data.slice(startIndex, startIndex + visibleCards).length ===
      visibleCards
      ? data.slice(startIndex, startIndex + visibleCards)
      : [
          ...data.slice(startIndex),
          ...data.slice(0, visibleCards - (data.length - startIndex)),
        ];
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      setStartIndex(([prevIndex]) => [
        (prevIndex + visibleCards) % data.length,
        1,
      ]);
    }, 5000);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:768px)");
    if (mediaQuery.matches) {
      resetAutoScroll();
      return () => {
        if (autoScrollRef.current) {
          clearInterval(autoScrollRef.current);
        }
      };
    }
  }, []);



  const RightLongBaseLine = ({ text1, text2, iconp }) => {
    return (
      <>
        <div className={`w-[max-content] relative`}>
          <div className=" w-[-webkit-fill-available] absolute  right-[1rem] ">
            <div className="flex  items-center gap-2">
              {iconp == "MoveUpLeft" ? (
                <MoveUpLeft className="mb-4" />
              ) : iconp == "MoveLeft" ? (
                <MoveLeft className="mb-4" />
              ) : (
                <MoveDownLeft className="mb-4" />
              )}

              {/* */}

              <p className={`text-center ms-auto`}>
                {text1} <br /> {text2}
              </p>
            </div>
          </div>
          <svg
            width="180"
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
        </div>
      </>
    );
  };
  const LeftLongBaseLine = ({ text1, text2, iconp }) => {
    return (
      <>
        <div className={`w-[max-content] relative`}>
          <div className=" w-[-webkit-fill-available] absolute  left-[1rem] ">
            <div className="flex  items-center  relative ">
              <p className={`text-center me-auto`}>
                {text1} <br /> {text2}
              </p>
              {iconp == "MoveUpRight" ? (
                <MoveUpRight className="mb-4  " />
              ) : iconp == "MoveRight" ? (
                <MoveRight className="mb-4 " />
              ) : (
                <MoveDownRight className="mb-4 " />
              )}
              {/* <MoveDownRight /> */}
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
            width="180"
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
  const CardBack = ({ leftside, rightside }) => {
    return (
      <>
        <div className="flex w-ful p-3">
          <div>
            {leftside.map((item, index) => {
              return (
                <div key={`left-${index}`}>
                  <RightLongBaseLine
                    text1={item.text1}
                    text2={item.text2}
                    iconp={item.iconp}
                  />
                </div>
              );
            })}
            {/* <RightLongBaseLine
              text1=" About Abhiwan "
              text2=" Technology"
              iconp="MoveLeft"
            />
            <RightLongBaseLine
              text1=" About Abhiwan "
              text2=" Technology"
              iconp="MoveDownLeft"
            /> */}
          </div>
          <div>
            {rightside.map((item, index) => {
              return (
                <div key={`right-${index}`}>
                  <LeftLongBaseLine
                    text1={item.text1}
                    text2={item.text2}
                    iconp={item.iconp}
                  />
                </div>
              );
            })}
            {/* <LeftLongBaseLine
              text1=" Innovative  "
              text2=" Solutions"
              iconp="MoveUpRight"
            />
            <LeftLongBaseLine
              text1=" Get  "
              text2=" a Quote"
              iconp="MoveRight"
            />
            <LeftLongBaseLine
              text1=" Get  "
              text2=" a Quote"
              iconp="MoveDownRight"
            /> */}
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      ref={ref}
      className="text-white h-full pt-[2rem] pb-[6rem] px-6 relative overflow-hidden md:overflow-hidden"
    >
      {isVisible && (
        <>
          <div className="flex relative py-[0rem]">
            {/* <div className="flex relative h-[128px] py-[9rem]"> */}
            <div >
              {/* <h2 className="h-[max-content] my-auto text-4xl md:text-7xl font-bold tracking-wide relative z-50 bg-[linear-gradient(90deg,_#FFFDFF_0%,_#999899_100%)] bg-clip-text text-transparent">
            METAVERSE
          </h1> */}
            </div>
            {/* // className={`${styles.marqueeWrapper} absolute top-0 left-0 h-[8rem]`} */}
            {/* <div
          className={`${styles.marqueeWrapper} absolute top-0 left-0 `}
        > */}
            <div
              className={`${styles.marqueeWrapper}absolute top-0 left-0 invisible `}
            >
              <h2
                className={`${styles.marquee} text-[4rem] md:text-[8rem] font-bold tracking-wide capitalize bg-amber-600`}
              >
                Ai Innovation
              </h2>
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden lg:block  absolute top-[50%] left-[50px] bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full shadow-lg transition-colors z-20 cursor-pointer"
            style={{
              backgroundImage:
                "radial-gradient(50.91% 97.54% at 50% 2.46%, #A052FF 0%, #7300FF 100%)",
              borderBottom: "1px solid white",
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden lg:block absolute top-[50%] right-[50px] transform  bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full shadow-lg transition-colors z-20 cursor-pointer"
            style={{
              backgroundImage:
                "radial-gradient(50.91% 97.54% at 50% 2.46%, #A052FF 0%, #7300FF 100%)",

              borderBottom: "1px solid white",
            }}
          >
            <ChevronRight size={24} />
          </button>

          <div
            className={`h-full grid grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto relative  ${styles.techShowcaseGrid}`}
          >
            <AnimatePresence custom={direction} mode="sync">
              {getVisibleItems().map((item, idx) => (
                <motion.div
                  key={`${startIndex}-${idx}`}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  // whileHover={{ scale: 1.05, zIndex: 10 }}
                  className={`flex flex-col items-center text-center cursor-pointer ${
                    idx === 1 && "translate-y-[100px] md:translate-y-0"
                  } ${styles.slidecard}`}
                >
                  <div className={`mainCard w-full`}>
                    {item.title == "Metaverse" && (
                      <h2
                        style={{
                          position: "absolute",
                          top: "-5rem",
                          left: "-100px",
                          zIndex: 10,
                        }}
                        className={`${gravesend.className} ${styles.mainCardTopHeading} h-[max-content] my-auto text-3xl md:text-6xl font-bold tracking-wide relative z-50 bg-[linear-gradient(90deg,_#FFFDFF_0%,_#999899_100%)] bg-clip-text text-transparent`}
                      >
                        METAVERSE
                      </h2>
                    )}
                    {item.title == "Web & App Dev" && (
                      <h2
                        style={{
                          position: "absolute",
                          top: "-5rem",
                          left: "-100px",
                          zIndex: 10,
                        }}
                        className={`${gravesend.className} ${styles.mainCardTopHeading} h-[max-content] my-auto text-3xl md:text-6xl font-bold tracking-wide relative z-50 bg-[linear-gradient(90deg,_#FFFDFF_0%,_#999899_100%)] bg-clip-text text-transparent`}
                      >
                        Development
                      </h2>
                    )}
                    {item.title == "Metaverse" && (
                      <>
                        <Image
                          src="/Ai_Innovation.webp"
                          alt="ai-innovation"
                          width={800}
                          height={300}
                          style={{
                            position: "absolute",
                            top: "-8rem",
                            left: "67rem",
                            // left: "-300%",
                            zIndex: 10,
                            scale: 1.5,
                          }}
                          className={`w-auto object-contain ${styles.top_right_OutlineText}`}
                        />
                      </>
                    )}
                    {item.title == "Web & App Dev" && (
                      <>
                        <Image
                          src="/Interactive.webp"
                          alt="ai-innovatin"
                          width={800}
                          height={300}
                          style={{
                            position: "absolute",
                            top: "-8rem",
                            right: "-67rem",
                            // left: "-300%",
                            zIndex: 10,
                          }}
                          className={`w-auto object-contain ${styles.top_right_OutlineText}`}
                        />
                      </>
                    )}
                    <div
                      className={`${styles.imgCard} relative group cursor-pointer transform-gpu hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10`}
                    >
                      <Image
                        width={200}
                        height={200}
                        src={item.imageurl}
                        alt={item.title}
                        className={`w-full h-full object-contain transition-opacity duration-300 ease-in-out ${styles.frontImage}`}
                        priority={idx === 1}
                        loading="eager"
                      />

                      {/* Overlay with blur and reduced opacity */}
                      <div className="absolute inset-0 flex justify-center items-center transition-all duration-100 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 group-hover:opacity-100">
                        {/* Blur backdrop layer */}
                        <div className="absolute inset-0 bg-neutral-900/90 backdrop-blur-[2px] transition-all duration-300 ease-in-out" />

                        {/* CardBack content - fully visible */}
                        <div className="relative z-10 transition-transform duration-300 hidden md:block group-hover:scale-50 md:group-hover:scale-50 lg:group-hover:scale-85 xl:group-hover:scale-100 scale-90 ease-[cubic-bezier(0.16,1,0.3,1)]">
                          <CardBack
                            leftside={item.backcardData.left}
                            rightside={item.backcardData.right}
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-0 w-full flex flex-col items-center justify-center">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-75 animate-ping"></span>
                          <span className="absolute inline-flex h-8 w-8 rounded-full bg-gray-100 opacity-20"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
                        </div>
                        <div className="relative h-[1rem] w-[2px] overflow-hidden mx-auto">
                          <div className="absolute inset-0 [background-image:repeating-linear-gradient(to_bottom,_#9CA3AF_0px,_#9CA3AF_10px,_transparent_10px,_transparent_20px)] [background-size:0.5px_20px] [animation:var(--animate-dash)]" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.animatedArrow}>
                      <div className="w-1/2 mx-auto z-10">
                        <div className="relative h-[6rem] w-[2px] overflow-hidden mx-auto ">
                          <div className="absolute inset-0 [background-image:repeating-linear-gradient(to_bottom,_#9CA3AF_0px,_#9CA3AF_10px,_transparent_10px,_transparent_20px)] [background-size:0.5px_20px] [animation:var(--animate-dash)]" />
                        </div>
                        <div className="flex justify-center items-center w-full h-full">
                          <ChevronDown />
                        </div>
                        <div className={styles.mainCardContent}>
                          <button className="text-white text-[10px] md:text-sm text-nowrap font-semibold px-3 py-2 border border-[#9CA8BB] rounded-full">
                            {item.title}
                          </button>
                          <p className="text-[#9CA8BB] text-[8px] md:text-xs mt-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {item.title == "Blockchain" && (
                      <h2
                        style={{
                          position: "absolute",
                          bottom: "-8rem",
                          // right: "-13rem",
                          right: "-100px",
                          zIndex: 10,
                        }}
                        className={`${gravesend.className} ${styles.mainCardBottomHeading} h-[max-content] my-auto text-3xl md:text-6xl font-bold tracking-wide relative z-50 bg-[linear-gradient(90deg,_#FFFDFF_0%,_#999899_100%)] bg-clip-text text-transparent`}
                      >
                        Blockchain
                      </h2>
                    )}

                    {item.title == "Game Design" && (
                      <h2
                        style={{
                          position: "absolute",
                          bottom: "-8rem",
                          right: "-100px",
                          // right: "-9rem",
                          zIndex: 10,
                        }}
                        className={`${gravesend.className} ${styles.mainCardBottomHeading} text-nowrap h-[max-content] my-auto text-3xl md:text-6xl font-bold tracking-wide relative z-50 bg-[linear-gradient(90deg,_#FFFDFF_0%,_#999899_100%)] bg-clip-text text-transparent`}
                      >
                        Game Art
                      </h2>
                    )}

                    {item.title == "Game Design" && (
                      <>
                        <Image
                          src="/Interactive_services.webp"
                          alt="Interactive_services"
                          width={800}
                          height={300}
                          style={{
                            position: "absolute",
                            bottom: "-8rem",
                            right: "67rem",
                            // left: "-300%",
                            zIndex: 10,
                          }}
                          className={`w-auto object-contain ${styles.bottom_left_OutlineText}`}
                        />
                      </>
                    )}


                    {item.title == "Blockchain" && (
                      <Image
                        src="/Innovation.webp"
                        alt="ai-innovatin"
                        width={800}
                        height={300}
                        style={{
                          position: "absolute",
                          bottom: "-8rem",
                          right: "72rem",
                          // left: "-300%",
                          zIndex: 10,
                        }}
                        className={`w-auto object-contain ${styles.bottom_left_OutlineText}`}
                      />
                    )}

                    
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex relative mt-[0rem]">
            <div className={`${styles.marqueeWrapper} absolute bottom-[6rem]`}>
              <h2
                className={`${styles.marquee} text-[2rem] font-bold tracking-wide capitalize`}
              >
                Ai Innovation
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// <div
//   className={`${styles.floatingImage} hidden xl:block absolute top-0`}
// >
//   <Image
//     src="/content/square.png"
//     alt="background"
//     width={400}
//     height={400}
//     className="w-[19rem] "
//   />
// </div>
