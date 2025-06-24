// components/XRSliderTailwind.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const XRSliderTailwind = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/vr-headset-1.jpg",
      alt: "VR Headset with purple and blue glow",
    },
    {
      id: 2,
      image: "/vr-user.jpg",
      alt: "Person using VR headset",
    },
    {
      id: 3,
      image: "/vr-headset-2.jpg",
      alt: "Modern VR headset device",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Close button */}
      <motion.button
        className="absolute top-4 right-4 w-8 h-8 text-3xl text-white bg-transparent border-none cursor-pointer z-10"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        ×
      </motion.button>

      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/vr-bg.jpg')" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-950/70 to-black/90 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center w-full h-full px-8 py-8 z-2">
        <motion.h1
          className="text-5xl md:text-6xl font-bold tracking-wider text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          EXTENDED REALITY
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-normal text-center mb-4 text-white/90"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Merging the Physical and Digital Worlds Seamlessly
        </motion.h2>

        <motion.p
          className="text-lg text-center max-w-3xl mb-8 text-white/80"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We develop Augmented, Virtual, and Mixed Reality applications for
          various industries.
        </motion.p>

        {/* Slider */}
        <div className="relative w-full flex items-center justify-center my-4 md:my-8">
          <motion.button
            className="w-12 h-12 rounded-full bg-purple-800/70 text-white flex items-center justify-center text-2xl cursor-pointer z-5 mr-4"
            onClick={prevSlide}
            aria-label="Previous slide"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(147, 51, 234, 0.9)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            &#10094;
          </motion.button>

          <div className="relative w-full max-w-5xl h-64 md:h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {slides.map((slide, index) => {
                if (index === currentSlide) {
                  return (
                    <motion.div
                      key={slide.id}
                      className="absolute top-0 left-0 w-full h-full flex justify-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="relative w-3/5 md:w-1/2 h-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(159,0,255,0.5)]"
                        whileHover={{
                          boxShadow: "0 0 40px rgba(159, 0, 255, 0.7)",
                        }}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          className="object-cover"
                          priority
                        />
                      </motion.div>
                    </motion.div>
                  );
                }
                return null;
              })}
            </AnimatePresence>
          </div>

          <motion.button
            className="w-12 h-12 rounded-full bg-purple-800/70 text-white flex items-center justify-center text-2xl cursor-pointer z-5 ml-4"
            onClick={nextSlide}
            aria-label="Next slide"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(147, 51, 234, 0.9)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            &#10095;
          </motion.button>
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-10 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full text-lg font-semibold cursor-pointer"
            whileHover={{
              y: -4,
              boxShadow: "0 0 25px rgba(147, 51, 234, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
          </motion.button>
        </motion.div>

        {/* Dots indicator */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 mx-2 rounded-full ${
                index === currentSlide
                  ? "bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.7)]"
                  : "bg-white/40"
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default XRSliderTailwind;
