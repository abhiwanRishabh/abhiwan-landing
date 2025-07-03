"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { gravesend, helvetica } from "@/app/font/Fonts";
import { ChevronLeft, ChevronRight, CornerUpLeft, X } from "lucide-react";
const slides = [
  {
    id: 1,
    title: "Game development",
    subtitle: "Transforming Ideas into Engaging Virtual Worlds",
    description:
      " We develop immersive and innovative gaming experiences across multiple platforms, leveraging the latest technologies in game design and development.",
    image: "/content/slider/slider1.jpg",
    backgroundImage: "/content/slider/webp/bg1.webp",
    data: "/content/slider/data1.png",
  },
  {
    id: 2,
    title: "Metaverse",
    subtitle: "Building the Future of Digital Interaction",
    description:
      " We develop fully immersive virtual environments with enhanced interactivity and real-time connectivity.",
    image: "/content/slider/slider2.jpg",
    backgroundImage: "/content/slider/webp/bg2.webp",
    data: "/content/slider/data2.png",
  },
  {
    id: 3,
    title: "Digital Twin",
    subtitle: "Bridging the Physical and Digital Worlds",
    description: " ",
    image: "/content/slider/slider3.jpg",
    backgroundImage: "/content/slider/webp/bg3.webp",
    data: "/content/slider/data3.png",
  },
  {
    id: 4,
    title: "Blockchain - Web 3.0",
    subtitle: "Decentralized Innovation for a Trustless Future",
    description:
      "We integrate blockchain technology to enhance security, transparency, and efficiency.",
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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    console.log(image);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <div
        className="relative w-full h-[80dvh] md:h-screen text-white overflow-hidden px-4"
        // className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden px-4"
        style={{
          backgroundImage: `url(${slides[current].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image .5s linear",
        }}
      >
        {/* Header */}
        <div className="text-center translate-y-[100px] md:translate-y-[40px] z-10">
          <h2
            className={`${gravesend.className}  main-heading transition-all  font-bold tracking-wider uppercase`}
          >
            {slides[current].title}
          </h2>
          <p
            className={` small-subheading text-white/80 ${helvetica.className} transition-all`}
          >
            {slides[current].subtitle}
          </p>
        </div>

        {/* Slide container */}
        <div className="relative w-full  max-w-[1200px] h-[320px] flex items-center justify-end">
          {/* Left Arrow */}
          {/* <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white text-xl rounded-full w-10 h-10 flex items-center justify-center backdrop-blur z-20"
        >
          ←
        </button> */}

          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            style={{
              backgroundImage:
                "radial-gradient(50.91% 97.54% at 50% 2.46%, #A052FF 0%, #7300FF 100%)",

              borderBottom: "1px solid white",
            }}
            className="absolute top-60 2xl:top-80 right-[90%] md:left-[37%] w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative flex overflow-visible items-center justify-end translate-y-[120px] 2xl:translate-y-[200px]">
            {slides.map((img, index) => {
              let offset = index - current;
              if (offset < 0) offset += slides.length;
              const isActive = offset === 0;

              return (
                <>
                  <motion.div
                    key={img.image}
                    className={`absolute w-[300px] h-[280px] md:w-[400px] md:h-[300px]  xl:w-[600px] xl:h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border-solid border-[#999999] ${
                      isActive
                        ? "z-20 sm:scale-100 border-4 "
                        : "z-10 scale-90 opacity-60 border-1"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{
                      x: offset * 550,
                      opacity: offset < 3 ? 1 : 0,
                      scale: isActive ? 1 : 0.85,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  >
                    <div>
                      <Image
                        src={img.image}
                        alt={img.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                        priority
                      />
                    </div>
                  </motion.div>{" "}
                  {isActive && (
                    // <div className="w-full flex items-center justify-center relative">
                    <div className="cursor-pointer">
                      <button
                        onClick={() => handleOpen(img.data)}
                        className={`absolute top-[180px] sm:top-[250px] -left-[200px] md:-left-[350px] z-30 px-4 py-3 text-nowrap   text-white text-[16px] font-semibold rounded-[10px]  hover:scale-100 transition  ${helvetica.className} cursor-pointer`}
                        style={{
                          boxShadow: ` rgba(255, 255, 255, 0.33) 0px 21px 28px`,
                          backgroundImage:
                            "radial-gradient(50.91% 97.54% at 50% 2.46%, #A052FF 0%, #7300FF 100%)",
                          borderTop: "1px solid white",
                          borderBottom: "1px solid white",
                        }}
                      >
                        Explore Now
                      </button>
                    </div>
                    // </div>
                  )}
                </>
              );
            })}
          </div>

          {/* Right Arrow */}
          {/* <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white text-xl rounded-full w-10 h-10 flex items-center justify-center backdrop-blur z-20"
        >
          →
        </button> */}
          <button
            onClick={nextSlide}
            aria-label="Previous Slide"
            className="absolute right-[80%]  top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 hidden items-center justify-center text-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        {/* <div className="w-full flex items-center justify-center relative">
        <div>
          <button
            className={`absolute bottom-[-5rem] z-40 px-7 py-5 bg-gradient-to-br from-purple-500 to-purple-700  text-white text-[20px] font-semibold rounded-[20px] shadow-xl hover:scale-105 transition  ${helvetica.className}`}
            style={{
              boxShadow: ` rgb(255 255 255 / 74%) 0px 21px 28px`,
            }}
          >
            Explore Now
          </button>
        </div>
      </div> */}
        {/* Optional Close Button */}
        {/* <button className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 z-30">
        ✕
      </button> */}
      </div>{" "}
      {selectedImage && (
        <AnimatePresence>
          {
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
                    className="cursor-pointer absolute bg-neutral-300 p-1  top-[7%] right-[10%]  text-white rounded-full w-18 h-18 flex items-center justify-center text-2xl font-bold shadow-lg z-50"
                  >
                    <CornerUpLeft color="#000" size={29} />
                  </button>
                  <Image
                    src={selectedImage}
                    alt="Full screen preview"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      )}
    </>
  );
}
