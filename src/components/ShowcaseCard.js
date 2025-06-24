"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import styles from "./styles/ShowcaseCard.module.css";
import Image from "next/image";
import AOS from "aos";
import { motion, useInView } from "framer-motion";

export default function ShowcaseCard() {
  const videoRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // animate only once
    amount: 0.5, // 30% visible to trigger
  });

  // console.log("isInView", isInView);

  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.play();
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset to the beginning
      }
    }
  }, [isInView]);

  // const ref = useRef(null);

  return (
    <>
      {
        <div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            // className="bg-white p-8 rounded-xl shadow-md"
          >
            <div className="p-4 mt-6">
              <div
                className={`relative w-full h-[42rem] max-w-7xl mx-auto p-3  rounded-2xl ${styles.gradientBorder}`}
              >
                <div
                  className={`rounded-2xl h-full ${styles.customCard} bg-black relative overflow-hidden`}
                >
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                    muted
                    loop={false}
                    playsInline
                    preload="none"
                    ref={videoRef}
                    autoPlay={isInView}
                    // onMouseEnter={() => {
                    //   if (videoRef.current) {
                    //     videoRef.current.play();
                    //   }
                    // }}
                  >
                    <source
                      src="/content/abhiwanglowinglogo.webm"
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                  {/* 
              <div className="absolute top-4 right-4 z-10">
                <Image src="/logo.svg" alt="Logo" width={120} height={120} />
              </div> */}

                  {/* <div className="absolute bottom-4 right-4 z-10">
                <button className="group bg-[linear-gradient(180deg,#D227FC_0%,#7D1796_100%)] cursor-pointer text-white p-1 pe-3 rounded-full flex items-center gap-2 hover:scale-103 transition">
                  <span className="bg-black px-5 py-2 rounded-full">
                    Have A Look
                  </span>
                  <span className="text-black text-3xl transform transition-transform duration-300 group-hover:translate-x-2">
                    <ChevronRight />
                  </span>
                </button>
              </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      }
    </>
  );
}
