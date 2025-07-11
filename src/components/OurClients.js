"use client";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import styles from "./styles/Global.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { gravesend, helvetica } from "@/app/font/Fonts";
const testimonials = [
  {
    name: "Loet de Hooge",
    image: "/content/testimonials/testimonial4.png",
    quote:
      "We can speak directly to the developers, which allows us to explain our issues clearly.",
    author: "Founder, Fabwelt",
  },
  {
    name: "Mhari Crawford",
    image: "/content/testimonials/testimonial5.png",
    quote: "They did their work well, and I am satisfied with their project.",
    author: "Property & Compliance Administrator, Savills",
  },
  {
    name: "Asaf Olshitzky",
    image: "/content/testimonials/testimonial6.png",
    quote: "What set them apart was their unwavering commitment to honesty.",
    author: "Head Coach, Life Coach",
  },
  {
    name: "Vinotha S",
    image: "/content/testimonials/testimonial1.png",
    quote:
      "Their proficiency and unwavering dedication to delivering a top-tier project were impressive.",
    author: "Infosys Technologies",
  },
  {
    name: "Amogh Lila Das",
    image: "/content/testimonials/testimonial2.png",
    quote:
      "Their attention to detail and dedication to quality stood out as truly impressive.",
    author: "VP, ISKCON DWARKA",
  },
  {
    name: "Catherine Janosky",
    image: "/content/testimonials/testimonial3.png",
    quote:
      "They consistently delivered items on time and adhered to agreed-upon milestones throughout the development process.",
    author: "CEO, Global Manufacturing Inc",
  },
  {
    name: "William Ely",
    image: "/content/testimonials/testimonial7.png",
    quote:
      "Abhiwan Technology exceeded expectations with their creativity, communication, and execution. I’m excited to collaborate on future projects.",
    author: "",
  },
  {
    name: "Jared, Marina Landings",
    image: "/content/testimonials/testimonial7.png",
    quote:
      "From day one, the Abhiwan team felt like an extension of our own. They brought sharp ideas, kept communication seamless, and executed beautifully. Already looking forward to our next project.",
    author: "",
  },
  {
    name: "Tanya, CEO & Founder, Interior Design Company",
    image: "/content/testimonials/testimonial7.png",
    quote:
      "Abhiwan Technology was responsive, detail-oriented, and easy to work with. The 3D visualizer they built significantly improved user engagement and streamlined our design process.",
    author: "",
  },
];

const OurClients = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after loaded
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // console.log("IntersectionObserverisVisible", isVisible);

  return (
    <>
      <div>
        <div className="text-center mb-3  pe-0 md:pe-6 pt-9">
          <h2
            className={`text-3xl md:text-6xl lg:text-7xl font-bold  mb-2 uppercase tracking-wide text-transparent bg-clip-text inline-block mt-2 ${gravesend.className}`}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #735BFF 0%, #0033FF 100%)",
            }}
            id="Headings"
          >
            hear it <br className="block md:hidden " />
            from our clients
          </h2>
        </div>
      </div>

      <div
        ref={ref}
        className="relative w-full px-4 pb-0 md:pb-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/content/worldmap.svg)`,
        }}
      >
        <div className="text-center ">
          <p
            className={`text-[#dddddd] lead  ${helvetica.className}  tracking-wide`}
          >
            Authentic Success Stories from Industry Leaders
          </p>
        </div>
        {isVisible && (
          <>
            <div className="relative max-w-[1680px] mx-auto py-10 md:py-20 ">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                // pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`${styles.cardBackgroundAnimation}  ${helvetica.className}  p-[2px] rounded-xl`}
                    >
                      <div
                        className="rounded-xl text-white p-6 shadow-lg min-h-[300px] flex flex-col justify-between"
                        style={{
                          background:
                            "linear-gradient(30deg, rgb(8, 72, 145) -30%, rgb(0, 0, 0) 60%, rgb(8, 72, 145) 150%) ",
                          // background:
                          //   "linear-gradient(90deg, #735BFF 0%, #0033FF 100%)",
                        }}
                      >
                        <div className="flex justify-center items-center gap-4 mb-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="rounded-full object-cover w-12 md:w-15 h-12 md:h-15"
                          />
                          {/* <h3 className="font-semibold capitalize text-3xl"> */}
                          <h3
                            className={`font-normal capitalize text-xl md:text-3xl ${helvetica.className}`}
                          >
                            {item.name}
                          </h3>
                        </div>
                        <p
                          className={` text-center text-md md:text-lg   mb-4 ${helvetica.className}`}
                        >
                          {item.quote}
                        </p>
                        <p
                          className={` text-white  text-center text-lg md:text-xl lg:text-2xl  font-normal ${helvetica.className}`}
                        >
                          {item.author}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* 
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-white z-10 cursor-pointer text-3xl px-2"></div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 text-white z-10 cursor-pointer text-3xl px-2"></div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OurClients;
