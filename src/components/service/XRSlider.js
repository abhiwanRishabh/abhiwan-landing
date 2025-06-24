// components/XRSlider.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./XRSlider.module.css";

const XRSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/vrgirl.png",
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

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {/* Close button */}
      <motion.button
        className={styles.closeButton}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        ×
      </motion.button>

      {/* Background image with motion */}
      <div className={styles.backgroundImage}>
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          EXTENDED REALITY
        </motion.h1>

        <motion.h2
          className={styles.subheading}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Merging the Physical and Digital Worlds Seamlessly
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We develop Augmented, Virtual, and Mixed Reality applications for
          various industries.
        </motion.p>

        {/* Slider */}
        <div className={styles.slider}>
          <motion.button
            className={styles.navButton + " " + styles.prevButton}
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

          <div className={styles.slidesContainer}>
            <AnimatePresence mode="wait">
              {slides.map((slide, index) => {
                if (index === currentSlide) {
                  return (
                    <motion.div
                      key={slide.id}
                      className={styles.slide}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className={styles.imageContainer}
                        whileHover={{
                          boxShadow: "0 0 40px rgba(159, 0, 255, 0.7)",
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          className={styles.slideImage}
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
            className={styles.navButton + " " + styles.nextButton}
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
        <div className={styles.ctaContainer}>
          <motion.button
            className={styles.exploreButton}
            whileHover={{
              y: -4,
              boxShadow: "0 0 25px rgba(147, 51, 234, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Explore Now
          </motion.button>
        </div>

        {/* Dots indicator */}
        <motion.div
          className={styles.dotsContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.activeDot : ""
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

export default XRSlider;
