"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./styles/ContactForm.module.css";
import {
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Copy,
  SendHorizontal,
  X,
} from "lucide-react";
import {
  gravesend,
  montserrat,
  helvetica,
  nasalization,
} from "@/app/font/Fonts";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsOpen(true);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50 p-4">
      {/* <div className="relative bg-gradient-to-br from-[#25003e] to-[#4c0073] p-6 text-white rounded-2xl w-full max-w-6xl shadow-2xl overflow-y-auto max-h-[95vh]"> */}
      <div
        className={`${styles.bgimg} relative bg-cover bg-center p-8 rounded-3xl w-full max-w-5xl shadow-2xl flex flex-col lg:flex-row justify-between gap-6`}
        // style={{ backgroundImage: 'url(/background-pattern.jpg)' }}
      >
        {" "}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-[#ff00c3] cursor-pointer"
        >
          <X size={32} />
        </button>
        {/* Left section */}
        <div className="flex flex-col justify-between w-full lg:w-1/2 gap-4">
          <div className={` `}>
            <h2
              className={` text-4xl font-bold leading-tight mb-4 ${gravesend.className}`}
            >
              LEVEL UP YOUR
              <br /> ONLINE EXPERIENCE
            </h2>
            <p
              className={`text-[20px] tracking-[2px]  mb-6 text-capitalize  ${helvetica.className}`}
            >
              Fill out the form to discover tailored solutions and opportunities
              that will help you succeed.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <button
                className={` ${helvetica.className} px-4 py-2  rounded-lg flex items-center gap-2 border border-[#ff00c3] bg-[#3a005e] text-white shadow-md`}
              >
                <Phone size={22} className="text-pink-300" />
                +91 - 9599145805
              </button>
              {/* <div className="flex gap-3 text-xl">
                <Facebook
                  className="hover:text-[#ff00c3] cursor-pointer"
                  size={24}
                />
                <Instagram
                  className="hover:text-[#ff00c3] cursor-pointer"
                  size={18}
                />
                <Twitter
                  className="hover:text-[#ff00c3] cursor-pointer"
                  size={18}
                />
              </div> */}
              <div className="flex gap-3 text-xl">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <div
                    key={i}
                    className="text-white hover:bg-[#b135cc] hover:text-white p-2 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                  >
                    <Icon size={28} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/astronaut.png"
              alt="Astronaut"
              width={300}
              height={300}
            />
          </div>
        </div>
        {/* Right section - form */}
        <div className=" w-full lg:w-1/2">
          <div className="  w-full mb-3">
            <Image
              className="justify-self-center"
              src="/abhiwan.png"
              alt="Astronaut"
              width={300}
              height={300}
            />
          </div>
          <div
            className={`bg-gradient-to-br from-[#9e00ff] to-[#ff00c3] rounded-2xl p-6`}
          >
            <div className="flex items-center justify-between text-sm mb-2">
              <span className={`${gravesend.className}`}>DROP A LINE</span>
              <button className={`${gravesend.className}  flex`}>
                COPY EMAIL <Copy size={18} className="ms-2" />
              </button>
            </div>
            <h2
              className={`${gravesend.className} text-3xl text-center font-bold mt-4 mb-8 bg-gradient-to-r from-[#4D0A76] to-[#120B65] bg-clip-text text-transparent`}
            >
              SALES@ABHIWAN.COM
            </h2>

            <form className="flex flex-col gap-4 ">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="NAME *"
                  className={`${gravesend.className} w-full flex-1 bg-transparent border-b border-white placeholder-white focus:outline-none`}
                  required
                />
                <input
                  type="email"
                  placeholder="EMAIL *"
                  className={`${gravesend.className} w-full flex-1 bg-transparent border-b border-white placeholder-white focus:outline-none`}
                  required
                />
              </div>
              <textarea
                rows="4"
                placeholder="MESSAGE"
                className={`${gravesend.className} bg-transparent border-b border-white placeholder-white focus:outline-none`}
              ></textarea>
              <div className="w-full mt-4">
                <button
                  type="submit"
                  className="justify-self-center bg-[#4d0072] hover:bg-[#620099] text-white py-4 px-5 rounded-xl w-fit flex items-center gap-2 text-sm shadow-md cursor-pointer"
                >
                  <SendHorizontal size={14} /> Send Message
                </button>
              </div>
            </form>
          </div>
          <div
            className={`text-center w-full text-[44px] font-bold mt-6 ${gravesend.className}`}
          >
            SIGN UP TO GET <br />
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r from-[#8F5BFF] via-[#FF00C7] to-[#5FC5FF] text-[44px] tracking-widest ${nasalization.className}`}
            >
              STARTED
            </span>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
