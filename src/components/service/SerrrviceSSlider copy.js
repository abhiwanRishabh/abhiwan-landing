"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./SerrrviceSSlider.module.css";
import { cn } from "@/lib/utils";
import { gravesend, helvetica } from "@/app/font/Fonts";

const slides = [
  {
    id: 1,
    title: "Game development",
    subtitle: "Transforming Ideas into Engaging Virtual Worlds",
    description:
      " We develop immersive and innovative gaming experiences across multiple platforms, leveraging the latest technologies in game design and development.",
    image: "/content/slider/slider1.jpg",
    backgroundImage: "/content/slider/bg1.png",
  },
  {
    id: 2,
    title: "Metaverse",
    subtitle: "Building the Future of Digital Interaction",
    description:
      " We develop fully immersive virtual environments with enhanced interactivity and real-time connectivity.",
    image: "/content/slider/slider2.jpg",
    backgroundImage: "/content/slider/bg2.png",
  },
  {
    id: 3,
    title: "Digital Twin",
    subtitle: "Bridging the Physical and Digital Worlds",
    description: " ",
    image: "/content/slider/slider3.jpg",
    backgroundImage: "/content/slider/bg3.jpg",
  },
  {
    id: 4,
    title: "Blockchain - Web 3.0",
    subtitle: "Decentralized Innovation for a Trustless Future",
    description:
      "We integrate blockchain technology to enhance security, transparency, and efficiency.",
    image: "/content/slider/slider4.png",
    backgroundImage: "/content/slider/bg4.jpg",
  },
  {
    id: 5,
    title: "Interactive services",
    subtitle: "Next-Level Engagement Through Smart Digital Experiences",
    description:
      "We create interactive solutions to enhance customer engagement and operational efficiency.",
    image: "/content/slider/slider5.jpg",
    backgroundImage: "/content/slider/bg5.jpg",
  },
  {
    id: 6,
    title: "Game art",
    subtitle: "Breathing Life into Digital Experiences",
    description:
      "Our creative team specializes in crafting high-quality visuals for games and digital content.",
    image: "/content/slider/slider6.png",
    backgroundImage: "/content/slider/bg6.png",
  },

  {
    id: 7,
    title: "Web & App Development",
    subtitle: "Building the Future of Digital Presence",
    description:
      "We develop robust, scalable web and mobile applications for businesses.",
    image: "/content/slider/slider7.jpg",
    backgroundImage: "/content/slider/bg7.png",
  },

  {
    id: 8,
    title: "AI Innovation",
    subtitle: "Empowering Businesses with Smart Automation",
    description:
      "We create AI-driven solutions for predictive analytics and automation.",
    image: "/content/slider/slider8.jpg",
    backgroundImage: "/content/slider/bg8.png",
  },
  {
    id: 9,
    title: "3d Archiviz",
    subtitle: "Immersive Virtual Designs for Real-World Applications",
    description:
      "We offer 3D visualization services to enhance architectural planning and interior design.",
    image: "/content/slider/slider9.png",
    backgroundImage: "/content/slider/bg9.png",
  },
  {
    id: 10,
    title: "Extended reality",
    subtitle: "Merging the Physical and Digital Worlds Seamlessly",
    description:
      "We develop Augmented, Virtual, and Mixed Reality applications for various industries.",
    image: "/content/slider/slider10.png",
    backgroundImage: "/content/slider/bg10.png",
  },
];

export default function SerrrviceSSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={cn(
        styles.sliderWrapper,
        "relative w-full h-screen overflow-hidden"
      )}
    >
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].backgroundImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[current].backgroundImage}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4 space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1
              className={`md:text-5xl  xl:text-8xl font-extrabold text-shadow-lg/30 ${gravesend.className}`}
            >
              {slides[current].title}
            </h1>
            <h2
              className={`text-2xl font-semibold text-shadow-lg/30  ${helvetica.className}`}
            >
              {slides[current].subtitle}
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto  text-shadow-lg/30 ${helvetica.className}`}
            >
              {slides[current].description}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer mt-4 bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-full font-semibold"
            >
              Explore Now
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Image Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <div className="relative">
              <div className="relative min-w-[620px] h-[400px] rounded-2xl border-4  border-zinc-300  overflow-hidden  shadow-2xl bg-white/10 backdrop-blur-lg">
                <Image
                  src={slides[current].image}
                  alt="Slide Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* <div className="absolute top-[50%] flex gap-6 justify-between z-40"> */}
              <div className="">
                <button
                  onClick={prevSlide}
                  className="absolute top-[50%] left-[-4rem] cursor-pointer w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white text-2xl"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextSlide}
                  className=" absolute top-[50%] right-[-4rem] cursor-pointer w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white text-2xl"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Navigation Arrows */}{" "}
      <div className="absolute top-0 flex gap-6 justify-between z-40">
        <button
          onClick={prevSlide}
          className=" cursor-pointer w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white text-2xl"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className=" cursor-pointer w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white text-2xl"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
