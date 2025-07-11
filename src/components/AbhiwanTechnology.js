"use client";
import React, { useEffect } from "react";
import styles from "./styles/AbhiwanTechnology.module.css";
import { HoverEffect } from "./ui/card-hover-effect";
import AOS from "aos";
import { gravesend, montserrat, helvetica, voltaire } from "@/app/font/Fonts";
const AbhiwanTechnology = () => {
  const cardData = [
    {
      id: 1,
      emoji: "🚀",
      titlePart1: "Future-Ready",
      titlePart2: "Technology",
      description:
        "We use the latest technology as AI, blockchain, AR/VR, metaverse, and digital twin, to create smart digital solutions. We stay ahead of trends, helping your business grow and remain competitive in the global market.",
    },
    {
      id: 2,
      emoji: "🎯",
      titlePart1: "Client-Centric",
      titlePart2: "Approach",
      description:
        "Here, your vision becomes our mission. We carefully ideate and shape each project to match your needs. We ensure smooth and precise delivery sets us apart, ensuring a standout experience every time.",
    },
    {
      id: 3,
      emoji: "🔄",
      titlePart1: "End-to-End",
      titlePart2: "Expertise",
      description:
        "From ideation to launching, we provide complete tech solutions. We offer software, games, and blockchain development services in one place. Our end-to-end game development service ensures smooth work at every stage.",
    },
    {
      id: 4,
      emoji: "💡",
      titlePart1: "Proven Track",
      titlePart2: "Record",
      description:
        "Abhiwan works for both startups and global brands. We create innovative digital products backed by a proven track record. Our high-end, high-performing solutions drive growth, efficiency, and lasting impact across diverse industries.",
    },
    {
      id: 5,
      emoji: "⏳",
      titlePart1: "Scalability &",
      titlePart2: "Performance",
      description:
        "We provide fast and reliable solutions. Whether you have a startup or an enterprise, our teams ensure high performance and flexibility to support your future growth with blockchain development services.",
    },
    {
      id: 6,
      emoji: "💼",
      titlePart1: "Industry",
      titlePart2: "Versatility",
      description:
        "Our team delivers immersive solutions for startups and global enterprises, driving innovation, scalability, and growth. We ensure impactful transformation and contribute to the long-term success and competitive edge of your business.",
    },
  ];

  const secondCardData = [
    {
      id: 1,
      title: "Powered",
      textpart1: "Innovative ",
      textpart2: "Technology",
      textcolor: "linear-gradient(94.98deg, #000000 21.7%, #757575 54.01%)",
      imgUrl: "/webp/AbhiwanTechnology1.webp",
    },
    {
      id: 2,
      title: "Social Hubs",
      textpart1: "Global  ",
      textpart2: "Connectivity",
      textcolor: " linear-gradient(276.24deg, #FFFFFF 29.29%, #999999 90.56%)",
      imgUrl: "/webp/AbhiwanTechnology2.webp",
    },
    {
      id: 3,
      title: "Virtual Reality",
      textpart1: "Seamless ",
      textpart2: "Technology",
      textcolor: " linear-gradient(276.24deg, #FFFFFF 29.29%, #999999 90.56%)",
      imgUrl: "/webp/AbhiwanTechnology3.webp",
    },
    {
      id: 4,
      title: "Metaverse",
      textpart1: "Immersive ",
      textpart2: "Experiences",
      textcolor: " linear-gradient(276.24deg, #FFFFFF 29.29%, #999999 90.56%)",
      imgUrl: "/webp/AbhiwanTechnology4.webp",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className=" py-2 max-w-[1400px] m-auto relative">
      <div>
        <div className="px-4 py-2 md:py-10 max-w-[1752px] mx-auto z-10">
          <h2
            className={`text-white text-center md:text-start main-heading font-bold uppercase ${gravesend.className}`}
          >
            Why Choose
            {/* , */}
          </h2>
          {/* <h2
            className={`text-3xl sm:text-4xl md:text-8xl font-bold text-transparent bg-clip-text inline-block mt-2 ${styles.animatedGradientText} ${gravesend.className} uppercase`}
          >
            Abhiwan 
          </h2> */}
          <h2
            className={`text-center w-full md:w-[auto] md:text-start main-heading font-bold text-transparent bg-clip-text inline-block  ${styles.animatedGradientText} ${gravesend.className} uppercase`}
          >
            Abhiwan Technology
          </h2>
        </div>
        <div className="hidden md:block">
          <h2
            className={`${styles.nonMarquee} ${voltaire.className}  absolute top-[6rem] right-[-13rem] text-[11rem]  font-bold tracking-wide capitalize z-0`}
          >
            INNOVATION
          </h2>
        </div>
      </div>
      <div className="hidden md:block">
        <p
          className={`text-[#DDDDDD] lead  px-4 max-w-[50%] ${helvetica.className}`}
        >
          Abhiwan Technology is a game development company that delivers digital
          and custom-built solutions. Our expert team focuses on quality, speed,
          and scalable end-to-end digital support, ensuring every product meets
          client needs while driving innovation and growth across various
          platforms and industries.
          <br /> Here’s why we stand out:
        </p>
      </div>
      <div className="hidden md:block">
        <div className="px-4 py-4 text-end max-w-[1752px] mx-auto">
          <h2
            className={`text-white small-heading  font-light  ${montserrat.className}`}
            style={{ fontWeight: 400 }}
          >
            Accessible Technology,
          </h2>
          <h2
            className={`small-heading  font-light text-transparent bg-clip-text inline-block mt-2  ${montserrat.className}`}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #2C72FF 0%, #D227FC 50%, #2C72FF 100%)",
              fontWeight: 400,
            }}
          >
            Anytime, Anywhere
          </h2>
        </div>
      </div>
      {/* ---------------------------------------- */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-6 p-3 md:p-4 ">
        {cardData.map((item) => (
          <div
            key={item.id}
            className={`${styles.cardBg} w-full p-[2px] rounded-2xl`}
          >
            <div className="h-full p-6 rounded-2xl bg-[#1a002a] text-white">
              <div className="flex flex-col text-center ">
                <div className="flex justify-center">
                  <div className="flex gap-1">
                    <div className="text-2xl mb-2">{item.emoji}</div>
                    <h2 className="text-2xl font-extrabold uppercase tracking-wide mb-4">
                      {item.titlePart1}
                      <br />
                      {item.titlePart2}
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-[#9CA8BB] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div data-aos="fade">
        <div className="max-w-7xl mx-auto px-8">
          <HoverEffect items={cardData} newclassName={styles.cardBg} />
        </div>{" "}
      </div>
      {/* ---------------------------------------- */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-10 max-w-[1440px] mx-auto p-4 ">
        {secondCardData.map((item, idx) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={`${idx + 2}00`}>
            <div
              className={`relative shadow-[0px_0px_13px_0px_rgba(251,0,255,0.8)] rounded-3xl w-full h-80  bg-cover bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(/content/AbhiwanTechnology${idx + 1}.jpg`,
              }}
            >
              <div className="p-4 absolute bottom-0">
                <p
                  className="text-xl  font-bold text-transparent bg-clip-text  mt-2  capitalize"
                  style={{
                    backgroundImage:
                      " linear-gradient(180deg, #2C72FF 0%, #D227FC 100%)",
                  }}
                >
                  {item.title}
                </p>
                <h6
                  className="text-2xl sm:text-3xl  font-bold text-transparent bg-clip-text  mt-2  capitalize"
                  style={{
                    backgroundImage: `${item.textcolor}`,
                  }}
                >
                  {item.textpart1} <br />
                  {item.textpart2}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className=" block md:hidden">
        {" "}
        <div>
          <div className="px-4 py-4 text-center md:text-end max-w-[1752px] mx-auto">
            <h2
              className={`text-white text-2xl sm:text-4xl  font-semibold  ${montserrat.className}`}
            >
              Accessible Technology,
            </h2>
            <h2
              className={`text-2xl sm:text-4xl  font-semibold text-transparent bg-clip-text inline-block mt-2  ${montserrat.className}`}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #2C72FF 0%, #D227FC 50%, #2C72FF 100%)",
              }}
            >
              Anytime, Anywhere
            </h2>
          </div>
        </div>
        <div>
          <p
            className={`text-[#DDDDDD] text-center lead  px-4 max-w-[1752px] mx-auto ${helvetica.className}`}
          >
            At Abhiwan Technology, we don’t just deliver solutions—we craft
            experiences that drive innovation, scalability, and success.
            <br />
            Here’s why we stand out:
          </p>
        </div>
      </div>
      <div
        className={`flex flex-nowrap h-auto snap-x scroll-pl-0  gap-7 my-10 max-w-[1752px] mx-auto p-4 ${styles.seconCardData}`}
      >
        {secondCardData.map((item, idx) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={`${idx + 2}00`}>
            <div
              className={`relative w-[320px] lg:w-[300px]  hover:shadow-[0px_0px_49px_0px_rgba(251,0,255,0.9)] rounded-3xl  h-80 bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-[1.02] overflow-hidden group`}
              style={{
                backgroundImage: `url(/webp/AbhiwanTechnology${idx + 1}.webp)`,
                boxShadow: "0px 0px 29px 0px rgba(251,0,255,0.9)",
              }}
            >
              {/* Optional overlay effect on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

              <div className="p-4 absolute bottom-0 transition-all duration-300 group-hover:translate-y-[-10px]">
                <p
                  className={`text-xl font-bold text-transparent bg-clip-text mt-2 capitalize group-hover:text-2xl transition-all duration-300 `}
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #2C72FF 0%, #D227FC 100%)",
                  }}
                >
                  {item.title}
                </p>
                <h6 className="text-2xl text-white sm:text-3xl font-bold text-transparent bg-clip-text mt-2 capitalize group-hover:text-3xl sm:group-hover:text-4xl transition-all duration-300">
                  {item.textpart1} <br />
                  {item.textpart2}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbhiwanTechnology;
