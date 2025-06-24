"use client";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { gravesend, helvetica } from "@/app/font/Fonts";
import { motion, AnimatePresence } from "framer-motion";
import Sliderr from "./service/Sliderr";
import { X } from "lucide-react";

const cardData = [
  {
    id: uuidv4(),
    title1: "Game ",
    title2: "Development",
    mainImageUrl: "/content/vr-main.webp",
    smallImageUrl: "/content/vr-small.webp",
    dataAos: "fade",
  },
  {
    id: uuidv4(),
    title1: "Real Estate ",
    title2: "Metaverse",
    mainImageUrl: "/content/realEstateMain.jpg",
    smallImageUrl: "/content/realEstate-small.jpg",
    dataAos: "fade",
  },
];

const DigitalSolutions = () => {
  const [selectedImage, setSelectedImage] = useState(false);

  const handleOpen = () => {
    setSelectedImage(true);
  };

  const handleClose = () => {
    setSelectedImage(false);
  };

  return (
    <>
      {/* Heading */}
      <div className="text-center py-8 px-6" id="ourservice">
        <div>
          <h2
            className={`${gravesend.className} uppercase text-3xl md:text-6xl lg:text-7xl font-bold text-white lineHeightFullPercentage`}
            id="Headings"
          >
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
              Ideas
            </span>{" "}
            Into <br />
            Cutting-edge{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Digital Solutions
            </span>
          </h2>
        </div>{" "}
        <div>
          <p className="mt-6 lead text-gray-300 max-w-3xl mx-auto !font-light">
            Empowering businesses with innovative technology – From Software
            Development to blockchain, AI, and Immersive Experiences.
          </p>
        </div>
      </div>

      <CardComponent handleOpen={handleOpen} />

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
                <button
                  onClick={handleClose}
                  className="cursor-pointer absolute top-10 right-10 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg z-50"
                >
                  <X color="white" size={99} />
                </button>

                <Sliderr />
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      )}
    </>
  );
};

function CardComponent({ handleOpen }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  my-10 max-w-7xl mx-auto">
        {cardData &&
          cardData.map((item, index) => (
            <div key={item.id}>
              <div className="relative px-18 p-4 md:p-4  rounded-xl  max-w-lg mx-auto transition-transform hover:scale-105 duration-300">
                <div className="relative">
                  {/* Main Image */}
                  <Image
                    src={item.mainImageUrl}
                    width={400}
                    height={400}
                    alt="Game Development"
                    className="rounded-xl aspect-square object-cover w-[32rem] h-[auto] border border-[#8D8D8D] shadow-lg   hover:shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300"
                  />

                  {/* Floating Small Image */}
                  {/* <div className="absolute top-[-1.8rem] right-[-1.8rem] border-2 border-purple-500 rounded-xl overflow-hidden size-40 shadow-lg"> */}
                  <div className="absolute top-[-2.5rem] right-[-2.5rem] border-1 border-[#8D8D8D] rounded-xl overflow-hidden aspect-square size:16 md:size-40 shadow-lg m-3 hover:shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300">
                    <Image
                      src={item.smallImageUrl}
                      width={100}
                      height={100}
                      alt="VR Concept"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                {/* Text Content */}
                <div className="mt-6 text-center">
                  <h3
                    className={`text-white subheading font-semibold ${gravesend.className}`}
                  >
                    <span className="block uppercase">{item.title1}</span>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-bold uppercase">
                      {item.title2}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className=" py-4 sm:py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div>
              <div className="p-2 text-center rounded-xl w-full mx-auto transition-transform duration-300 hover:scale-105">
                <Image
                  src="/content/digitaltwin.jpg"
                  width={400}
                  height={400}
                  alt="Blockchain Web3.0"
                  className="rounded-3xl w-full aspect-3/2 object-cover 
                shadow-[0px_0px_49px_10px_#8400FF40]
                
                "
                />

                <h3
                  className={`mt-6 text-white subheading font-semibold ${gravesend.className}`}
                >
                  <span className="block">Digital</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-bold">
                    Twin
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/* // hover:-translate-y-2 */}
          <div>
            {/* Extended Reality Card */}
            <div className="p-2 text-center rounded-xl w-full mx-auto transition-transform hover:scale-105 duration-300">
              <Image
                src="/content/vr-glasses-gaming.webp"
                width={400}
                height={400}
                alt="Extended Reality"
                className="rounded-3xl aspect-3/2 w-full  object-cover 
                 shadow-[0px_0px_40px_10px_#8400FF40]
                transition-all duration-500 ease-in-out
                "
                // className="rounded-3xl aspect-3/2 w-full  object-cover hover:shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300"
              />
              <h3
                className={`mt-6 text-white subheading font-semibold ${gravesend.className}`}
              >
                <span className="block">EXTENDED</span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-bold">
                  REALITY
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" p-1 md:p-4 text-center">
          <button
            onClick={handleOpen}
            className="text-white font-semibold text-lg relative group cursor-pointer md:px-6 md:py-2 hover:text-purple-400 transition-colors duration-300"
          >
            <span
              className={`${helvetica.className} text-lg md:text-2xl block transform transition-transform duration-300 group-hover:-translate-y-1`}
            >
              View All Services
            </span>
            <span className="block w-full h-[2px] bg-white mt-1 transition-all group-hover:w-0"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default DigitalSolutions;
