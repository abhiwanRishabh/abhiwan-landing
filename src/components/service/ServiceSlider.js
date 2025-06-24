"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./SerrrviceSSlider.module.css";
import { cn } from "@/lib/utils"; // optional

const slides = [
  {
    title: "Web & App Development",
    subtitle: "Building the Future of Digital Presence",
    description:
      "We develop robust, scalable web and mobile applications for businesses.",
    image: "/content/slider/slider1.jpg",
  },
  {
    title: "VR & AR Solutions",
    subtitle: "Step Into the Future",
    description: "Immersive experiences built with cutting-edge technology.",
    image: "/content/slider/slider2.jpg",
  },
  {
    title: "Blockchain Technology",
    subtitle: "Secure and Transparent",
    description: "Building decentralized applications and smart contracts.",
    image: "/content/slider/slider3.jpg",
  },
  {
    title: "Blockchain Technology",
    subtitle: "Secure and Transparent",
    description: "Building decentralized applications and smart contracts.",
    image: "/content/slider/slider4.jpg",
  },
];

export default function ServiceSlider() {
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
          key={slides[current].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Image Row */}
        <div className="flex items-center justify-center gap-6">
          {slides.map((slide, index) => {
            const isActive = index === current;
            const isPrev =
              index === (current - 1 + slides.length) % slides.length;
            const isNext = index === (current + 1) % slides.length;

            if (isActive || isPrev || isNext) {
              return (
                <motion.div
                  key={slide.title}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{
                    scale: isActive ? 1.1 : 0.9,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "relative rounded-2xl overflow-hidden shadow-lg bg-white",
                    isActive ? "w-96 h-96" : "w-72 h-80"
                  )}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </motion.div>
              );
            }
            return null;
          })}
        </div>

        {/* Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="mt-10 text-center text-white space-y-4 px-4"
          >
            <h1 className="text-5xl font-extrabold">{slides[current].title}</h1>
            <h2 className="text-2xl font-semibold">
              {slides[current].subtitle}
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              {slides[current].description}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-6 bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-full font-semibold"
            >
              Explore Now
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 flex gap-4">
          <button onClick={prevSlide} className={styles.arrowButton}>
            &#8592;
          </button>
          <button onClick={nextSlide} className={styles.arrowButton}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
