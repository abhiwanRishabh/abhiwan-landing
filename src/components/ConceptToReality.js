"use client";
import React, { useEffect, useId, useState } from "react";
import styles from "./styles/ConceptToReality.module.css";
import Image from "next/image";
import AOS from "aos";
import { gravesend, helvetica } from "@/app/font/Fonts";
import { motion, AnimatePresence } from "framer-motion";
import { CornerUpLeft, X } from "lucide-react";
const projects = [
  {
    id: "7dfdcf0f-2cce-4de2-ad2b-6846dce6f4ba",
    title: "The Kundli Pro",
    image: "/content/projects/kundlipro.png",
    secondImg: "/content/projects/kundliproH.png",
    description: "The Most Trusted & Insightful Astrology App",
    // boxShadow: "shadow-[0px_0px_100.8px_0px_#008FFF]",
    appStore: true,
    googlePlay: true,
    dataAos: "fade",
  },
  {
    id: "ac999e19-3364-4b23-bc3b-97e1148cc0c8",
    title: "CocaCola",
    image: "/content/projects/cocacola.png",
    secondImg: "/content/projects/cocacolaH.png",
    description: "Wanna be a movie star? Partnered with Box Office!",
    // boxShadow: "shadow-[0px_4px_138.8px_71px_#FF060640]",
    appStore: false,
    googlePlay: false,
    dataAos: "fade",
  },
  {
    id: "ca0908f0-03e3-4072-bf8e-5aa79c4bb2b7",
    title: "Battle Saga",
    image: "/content/projects/battlesaga.png",
    secondImg: "/content/projects/BattleSagaH.png",
    description:
      "Battle Saga is a Clash of Clan inspired game on Binance Smart Chain",
    // boxShadow: "shadow-[0px_4px_131.7px_17px_#2A37A6BD]",
    // box-shadow: 0px 4px 131.7px 17px #2A37A6BD;
    appStore: true,
    googlePlay: true,
    dataAos: "fade",
  },
];
const projectsSecondRow = [
  {
    id: "1d0a1941-450e-49c2-9fa3-87abf0d8aec0",
    title: "Voxel",
    image: "/content/projects/Voxel.png",
    secondImg: "/content/projects/voxelcasestudy.png",
    description: "voxel",
    // boxShadow: "shadow-[0px_4px_131.7px_17px_#2A37A6BD]",
    appStore: true,
    googlePlay: true,
    dataAos: "fade",
  },
  {
    id: "deb21f98-4572-4e11-b394-388f7b0fd8f9",
    title: "diamondHook",
    image: "/content/projects/diamondHook.png",
    secondImg: "/content/projects/diamondHookcasestudy.png",
    description: "diamondHook",
    // boxShadow: "shadow-[0px_4px_131.7px_17px_#2A37A6BD]",
    appStore: false,
    googlePlay: false,
    dataAos: "fade",
  },
  {
    id: "b5426440-b39b-4bc1-b18c-5fcc6cf205a4",
    title: "Marina",
    image: "/content/projects/marina.png",
    secondImg: "/content/projects/Marine.png",
    description:
      "Battle Saga is a Clash of Clan inspired game on Binance Smart Chain",
    // boxShadow: "shadow-[0px_0px_100.8px_0px_#008FFF]",
    // box-shadow: 0px 4px 131.7px 17px #2A37A6BD;
    appStore: true,
    googlePlay: true,
    dataAos: "fade-",
  },
];

const projectlanscape = [
  {
    id: "a69c2bcb-d754-4a20-b06a-7e4cb84606f1",
    title: "penguin cart",
    image: "/content/projects/penguincart.png",
    secondImg: "/content/projects/penguinKartsH.png",
    // boxShadow: " shadow-[0px_4px_93.3px_0px_#02E3F8]",
    dataAos: "fade",
  },
  {
    id: "b74983c9-fa26-4352-a91f-9ab5a4fe39df",
    title: "ohzi",
    image: "/content/projects/ohzi.png",
    secondImg: "/content/projects/ohziH.png",
    // boxShadow: "shadow-[0px_4px_126.5px_0px_#000000CF]",
    dataAos: "fade",
  },
];

const useDisableBodyScroll = (isActive) => {
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isActive]);
};

const ConceptToReality = () => {
  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    // });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  useDisableBodyScroll(!!selectedImage);

  const handleOpen = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div>
        <div
          className={` text-center px-4 py-10 w-[fit-content] mx-auto`}
          id="recentProject"
        >
          <h2
            className={`${gravesend.className} text-white !main-heading font-bold `}
            id="Headings"
          >
            FROM CONCEPT TO REALITY,
            {/* className={`${gravesend.className} text-3xl sm:text-4xl font-bold text-transparent bg-clip-text inline-block mt-2 ${styles.animatedGradientText}`} */}
            {/* // style={{
            //   backgroundImage:
            //     "linear-gradient(90deg, #2C72FF 0%, #D227FC 50%, #2C72FF 100%)",
            // }} */}
            <span
              className={` text-transparent bg-clip-text block  ${styles.animatedGradientText}`}
            >
              SEE WHAT WE’VE BUILT
            </span>
          </h2>
          <div className="w-[77%] h-[2px] mx-auto mt-2 relative overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-full h-full ${styles.animatedUnderline} `}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-6 px-4 py-12">
        {projects &&
          projects.map((project, index) => (
            <div key={project.title}>
              <div className=" rounded-2xl  w-full shadow-lg transition-transform hover:scale-105 duration-300">
                {/* <button
                onClick={() => handleOpen(project.image)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                View Image
              </button> */}
                <div
                  className={`${project?.boxShadow ?? ''}  h-[34rem] overflow-hidden rounded-2xl cursor-pointer`}
                  onClick={() => handleOpen(project.secondImg)}
                >
                  <Image
                    width={400}
                    height={400}
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover rounded-2xl`}
                    loading="lazy"
                    // className={`rounded-2xl object-cover w-full h-full border border-[#8D8D8D] shadow-[${project.boxShadow}] hover:shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300`}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-6 p-3 md:p-4 ">
        {projectlanscape.map((item, idx) => {
          return (
            <div
              key={item.title}
              // data-aos={item.dataAos}
              onClick={() => handleOpen(item.secondImg)}
            >
              <Image
                width={400}
                height={400}
                src={item.image}
                alt={item.title}
                className={`cursor-pointer w-full h-70 md:h-96 rounded-[2.1rem] ${item.boxShadow}  transition-transform hover:scale-105 duration-300`}
              />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-6 px-4 py-12">
        {projectsSecondRow.map((project, index) => (
          <div key={project.title} data-aos={project.dataAos}>
            <div className=" rounded-2xl  w-full shadow-lg transition-transform hover:scale-105 duration-300">
              {/* <button
                onClick={() => handleOpen(project.image)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                View Image
              </button> */}
              <div
                className={`${project.boxShadow ?? ''}  h-[34rem] overflow-hidden rounded-2xl cursor-pointer`}
                onClick={() => handleOpen(project.secondImg)}
              >
                <Image
                  width={400}
                  height={400}
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover rounded-2xl`}
                  // className={`rounded-2xl object-cover w-full h-full border border-[#8D8D8D] shadow-[${project.boxShadow}] hover:shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="relative z-10"> */}
      {selectedImage && (
        <AnimatePresence>
          {(
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
                {/* <button
                onClick={handleClose}
                className="cursor-pointer bg-neutral-300 absolute top-[6%] right-1/10  text-white rounded-full w-13 h-13 flex items-center justify-center text-2xl font-bold drop-shadow-xl/50 z-50"
              >
                <X color="#000" size={29} />
              </button> */}
                <button
                  onClick={handleClose}
                  className="cursor-pointer bg-neutral-300 absolute top-[5%] right-[5%]  text-white rounded-full w-13 h-13 flex items-center justify-center text-2xl font-bold drop-shadow-xl/50 z-50"
                >
                  <X color="#000" size={29} />
                </button>
                <div className="relative w-[100%] m-auto h-[85%] ">
                  <Image
                    src={selectedImage}
                    alt="Full screen preview"
                    fill
                    className="object-contain p-4 w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* </div> */}
    </>
  );
};

export default ConceptToReality;
