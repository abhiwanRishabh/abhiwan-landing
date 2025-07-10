"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import styles from "./styles/TechShowcase.module.css";

const data = [
  {
    title: "Metaverse",
    description: "Seamless virtual worlds transforming digital interaction.",
    image: "/metaverse.png",
  },
  {
    title: "AI Innovation",
    description: "Intelligent automation driving the future of tech.",
    image: "/ai.png",
  },
  {
    title: "Blockchain",
    description:
      "Secure, decentralized technology revolutionizing transactions.",
    image: "/blockchain.png",
  },

  {
    title: "Blockchain",
    description:
      "Secure, decentralized technology revolutionizing transactions.",
    image: "/blockchain.png",
  },

  {
    title: "Blockchain",
    description:
      "Secure, decentralized technology revolutionizing transactions.",
    image: "/blockchain.png",
  },
];

export default function TechShowcase() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;
  const autoScrollRef = useRef(null);

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCards) % data.length);
    resetAutoScroll();
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCards + data.length) % data.length);
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
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setStartIndex((prev) => (prev + visibleCards) % data.length);
    }, 5000);
  };

  useEffect(() => {
    resetAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, []);

  return (
    <div className="min-h-screen text-white py-20 px-6 relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-wide">
          METAVERSE
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {getVisibleItems().map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ rotateX: -6, rotateY: 16 }}
            className="flex flex-col items-center text-center cursor-pointer perspective"
          >
            {/* <div className=" rounded-xl shadow-xl hover:shadow-purple-700 transition-shadow transform-style-3d"> */}
            {/* <div className="rounded-xl shadow-xl hover: transition-shadow transform-style-3d"> */}
            <div className="">
              <div
                className={`${styles.imgCard} `}
              >
                <Image
                  width={300}
                  height={200}
                  src={item.image}
                  alt={item.title}
                  className="w-72 h-72 object-contain rounded-md"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <div className="text-center mt-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-wide">
          BLOCKCHAIN
        </h2>
      </div>
    </div>
  );
}
