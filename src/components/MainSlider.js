"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import styles from "./styles/TechShowcase.module.css";
import { gravesend, nasalization, helvetica } from "@/app/font/Fonts";


const data = [
  {
    title: "Metaverse",
    description:
      "We are more than just a tech company – we are partners in your digital transformation. Our expertise spans multiple industries, helping startups, enterprises, & enhance user engagement, & unlock new revenue streams through future-ready technology.",
    imageurl: "/content/abhiwan1.jpg",
  },
  {
    title: "AI Innovation",
    description:
      "From developing immersive metaverse ecosystems to deploying AI-driven automation solutions, we blend strategy, creativity, and technology to help businesses thrive in the digital age.",
    imageurl: "/content/mainSlider2.jpg",
  },
  {
    title: "Blockchain",
    description:
      "At Abhiwan Technology, we innovate at the intersection of metaverse, AI, and automation, creating transformative digital experiences. From building immersive virtual ecosystems to crafting intelligent automation solutions, we merge strategy, technology, and creativity to drive businesses forward.",
    imageurl: "/content/conferencestageabhiwanmockup.jpg",
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300, // Use numbers, not "%"
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween", // faster than spring
      ease: "easeOut",
      duration: 0.3,
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.3,
    },
  }),
};

export default function MainSlider() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const autoScrollRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNext = () => {
    setCurrentIndex(([prevIndex]) => [(prevIndex + 1) % data.length, 1]);
    resetAutoScroll();
  };

  const handlePrev = () => {
    setCurrentIndex(([prevIndex]) => [
      (prevIndex - 1 + data.length) % data.length,
      -1,
    ]);
    resetAutoScroll();
  };

  const resetAutoScroll = useCallback(() => {
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  }, [handleNext]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:768px)");
    if (mediaQuery.matches) {
      resetAutoScroll();
      return () => clearInterval(autoScrollRef.current);
    }
  }, [resetAutoScroll]);

  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    // });
  }, []);

  return (
    <>
      <div>
        {
          <>
            {/* <div className=" text-white py-10 px-6 relative overflow-hidden mb-6"> */}
            <div className=" text-white pt-4 md:pt-10 pb-4 md:pb-30 px-6 relative mb-6">
              <div className="flex justify-center items-center max-w-7xl mx-auto relative h-[420px] md:h-[700px] overflow-hidden lg:overflow-visible">
                {/* ------------------------ for mobile start---------------------------------- */}
                <div className="absolute top-[19%] left-1 right-1 flex justify-between items-center w-full z-20 md:hidden block">
                  {/* Left Arrow */}
                  <button
                    onClick={handlePrev}
                    className="transform translate-y-[50px] sm:translate-y-[100px] translate-x-[15px] bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={handleNext}
                    className="transform translate-y-[50px] sm:translate-y-[100px] translate-x-[-15px] bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
                {/* ------------------------ for mobile end---------------------------------- */}
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="hidden md:block absolute md:left-1.5 xl:-left-15 hover:bg-purple-800 text-white p-3 rounded-full shadow-lg transition-colors z-20 slide-arrow"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="hidden md:block  absolute md:right-1.5 xl:-right-15 hover:bg-purple-800 text-white p-3 rounded-full shadow-lg transition-colors z-20 slide-arrow"
                >
                  <ChevronRight size={24} />
                </button>

                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 flex flex-col w-full h-full"
                  >
                    <div className="w-full h-full relative">
                      <Image
                        width={800}
                        height={800}
                        src={data[currentIndex].imageurl}
                        alt={data[currentIndex].title}
                        className="w-full max-w-10/12 m-auto h-auto md:h-full aspect-3/2 object-cover"
                        priority
                      />
                      {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h2 className="text-2xl font-bold mb-2">
                      {data[currentIndex].title}
                    </h2>
                    <p className="text-base md:text-xl">
                      {data[currentIndex].description}
                    </p>
                  </div> */}
                      <div className=" p-3 px-1 md:p-6">
                        <p
                          className={`text-center text-[12px] md:text-[18px] text-[#B6B8BB]  max-w-10/12 m-auto`}
                        >
                          {data[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </>
        }
      </div>
    </>
  );
}
