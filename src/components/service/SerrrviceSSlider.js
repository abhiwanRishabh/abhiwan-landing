"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./SerrrviceSSlider.module.css";
import { cn } from "@/lib/utils";
import { gravesend, helvetica } from "@/app/font/Fonts";
import { slides } from "@/components/constants/serviceSliderData";
import { CornerUpLeft, X } from "lucide-react";

export default function SerrrviceSSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  //   useEffect(() => {
  //     // Toggle body scroll based on modal state
  //     if (selectedImage) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "auto";
  //     }

  //     // Cleanup function to reset overflow when component unmounts
  //     return () => {
  //       document.body.style.overflow = "auto";
  //     };
  //   }, [selectedImage]);

  return (
    <>
      {" "}
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
              <h2
                className={`text-8xl font-extrabold text-shadow-lg/30 ${gravesend.className}`}
              >
                {slides[current].title}
              </h2>
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
              >
                <button
                  onClick={() => handleOpen(slides[current].data)}
                  className="cursor-pointer text-2xl mt-4 bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-full font-semibold"
                >
                  Explore Now
                </button>
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
              className="relative w-full max-w-[620px] h-[400px] rounded-2xl border-4  border-zinc-300  overflow-hidden  shadow-2xl bg-white/10 backdrop-blur-lg"
            >
              <Image
                src={slides[current].image}
                alt="Slide Image"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-10 flex gap-6 justify-center w-full z-20">
          <button
            onClick={prevSlide}
            className="cursor-pointer w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white text-2xl"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white text-2xl"
          >
            &#8594;
          </button>
        </div>
      </div>{" "}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full ">
                <button
                  onClick={handleClose}
                  className="cursor-pointer absolute bg-[#000] p-1  top-23 right-25  text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold shadow-lg z-50"
                >
                  <CornerUpLeft color="white" size={29} />
                </button>
                <Image
                  src={selectedImage}
                  alt="Full screen preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
