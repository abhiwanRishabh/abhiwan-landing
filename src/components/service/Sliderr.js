"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gravesend, helvetica } from "@/app/font/Fonts";

const slides = [
  {
    id: 1,
    title: "Game development",
    subtitle: "Transforming Ideas into Engaging Virtual Worlds",
    image: "/content/slider/slider1.jpg",
    backgroundImage: "/content/slider/bg1.png",
    data: "/content/slider/data1.png",
  },
  {
    id: 2,
    title: "Metaverse",
    subtitle: "Building the Future of Digital Interaction",
    image: "/content/slider/slider2.jpg",
    backgroundImage: "/content/slider/webp/bg2.webp",
    data: "/content/slider/data2.png",
  },
  {
    id: 3,
    title: "Digital Twin",
    subtitle: "Bridging the Physical and Digital Worlds",
    image: "/content/slider/slider3.jpg",
    backgroundImage: "/content/slider/webp/bg3.webp",
    data: "/content/slider/data3.png",
  },
  {
    id: 4,
    title: "Blockchain - Web 3.0",
    subtitle: "Decentralized Innovation for a Trustless Future",
    image: "/content/slider/slider4.png",
    backgroundImage: "/content/slider/webp/bg4.webp",
    data: "/content/slider/data4.png",
  },
  {
    id: 5,
    title: "Interactive services",
    subtitle: "Next-Level Engagement Through Smart Digital Experiences",
    description:
      "We create interactive solutions to enhance customer engagement and operational efficiency.",
    image: "/content/slider/slider5.jpg",
    backgroundImage: "/content/slider/webp/bg5.webp",
    data: "/content/slider/data5.png",
  },
  {
    id: 6,
    title: "Game art",
    subtitle: "Breathing Life into Digital Experiences",
    description:
      "Our creative team specializes in crafting high-quality visuals for games and digital content.",
    image: "/content/slider/slider6.png",
    backgroundImage: "/content/slider/webp/bg6.webp",
    data: "/content/slider/data6.png",
  },

  {
    id: 7,
    title: "Web & App Development",
    subtitle: "Building the Future of Digital Presence",
    description:
      "We develop robust, scalable web and mobile applications for businesses.",
    image: "/content/slider/slider7.jpg",
    backgroundImage: "/content/slider/bg7.png",
    data: "/content/slider/data7.png",
  },

  {
    id: 8,
    title: "AI Innovation",
    subtitle: "Empowering Businesses with Smart Automation",
    description:
      "We create AI-driven solutions for predictive analytics and automation.",
    image: "/content/slider/slider8.jpg",
    backgroundImage: "/content/slider/bg8.png",
    data: "/content/slider/data8.png",
  },
  {
    id: 9,
    title: "3d Archiviz",
    subtitle: "Immersive Virtual Designs for Real-World Applications",
    description:
      "We offer 3D visualization services to enhance architectural planning and interior design.",
    image: "/content/slider/slider9.png",
    backgroundImage: "/content/slider/bg9.png",
    data: "/content/slider/data9.png",
  },
  {
    id: 10,
    title: "Extended reality",
    subtitle: "Merging the Physical and Digital Worlds Seamlessly",
    description:
      "We develop Augmented, Virtual, and Mixed Reality applications for various industries.",
    image: "/content/slider/slider10.png",
    backgroundImage: "/content/slider/bg10.png",
    data: "/content/slider/data10.png",
  },
];

export default function Sliderr() {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleOpen = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const getWrappedOffset = (index) => {
    const offset = index - current;
    if (offset > totalSlides / 2) return offset - totalSlides;
    if (offset < -totalSlides / 2) return offset + totalSlides;
    return offset;
  };

  return (
    <>
      <div
        className="relative w-full h-[90vh] bg-[#1c1b29] text-white overflow-hidden"
        style={{
          backgroundImage: `url(${slides[current].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(20,20,30,0.85)",
        }}
      >
        {/* Arrows */}
        <button
          onClick={prevSlide}
          style={{
            backgroundImage:
              "radial-gradient(50.91% 97.54% at 50% 2.46%, #A052FF 0%, #7300FF 100%)",
            borderBottom: "1px solid white",
          }}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full hover:scale-110 transition-all"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          style={{
            backgroundImage:
              "radial-gradient(50.91% 97.54% at 50% 2.46%, #A052FF 0%, #7300FF 100%)",
            borderBottom: "1px solid white",
          }}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full hover:scale-110 transition-all"
        >
          <ChevronRight size={28} />
        </button>

        {/* Title */}
        <div className="text-center pt-5 overflow-hidden">
          <motion.h2
            key={slides[current].title} // key triggers animation on change
            className={`${gravesend.className} text-3xl md:text-5xl font-bold uppercase `}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {slides[current].title}
          </motion.h2>
        </div>
        <div className="text-center overflow-hidden">
          <p className={`${helvetica.className} text-white/70 text-lg mt-2`}>
            {slides[current].subtitle}
          </p>
        </div>

        {/* Slides */}
        <div className="absolute top-0 w-full flex justify-center items-center h-full overflow-visible ">
          {slides.map((img, index) => {
            const offset = getWrappedOffset(index);
            const isActive = offset === 0;
            const scale = isActive ? 1 : 0.8;
            const opacity = isActive ? 1 : 0.4;
            const zIndex = 20 - Math.abs(offset);
            const xOffset = offset * 350;

            return (
              <motion.div
                key={img.id}
                className="absolute w-[300px] md:w-[400px] h-[280px] md:h-[320px] rounded-xl overflow-hidden shadow-xl cursor-pointer"
                style={{ zIndex }}
                animate={{ x: xOffset, scale, opacity }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  fill
                  className="object-cover scale-110"
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                />

                {/* Explore Button for Center Slide */}
              </motion.div>
            );
          })}

          {slides.map((img, index) => {
            const offset = getWrappedOffset(index);
            const isActive = offset === 0;
            return (
              isActive && (
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 z-40">
                  <button
                    onClick={() => handleOpen(img.data)}
                    className={`px-5 py-3 text-white font-semibold rounded-lg transition-all hover:scale-105 ${helvetica.className}`}
                    style={{
                      backgroundImage:
                        "radial-gradient(50.91% 97.54% at 50% 2.46%, #A052FF 0%, #7300FF 100%)",
                      borderTop: "1px solid white",
                      borderBottom: "1px solid white",
                      boxShadow: "rgba(255, 255, 255, 0.33) 0px 21px 28px",
                    }}
                  >
                    Explore Now
                  </button>
                </div>
              )
            );
          })}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
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
              <button
                onClick={handleClose}
                className="absolute top-15 right-20 bg-white text-black p-2 rounded-full shadow-lg z-50"
              >
                <X size={24} />
              </button>
              <Image
                src={selectedImage}
                alt="Full screen preview"
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
