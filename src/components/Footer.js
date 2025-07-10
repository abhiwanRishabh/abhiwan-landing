"use client";
import styles from "./styles/Footer.module.css";
import { gravesend, nasalization, helvetica } from "@/app/font/Fonts";
import gsap from "gsap";
import {
  Instagram,
  Linkedin,
  Youtube,
  //   Behance,
  //   Telegram,
  Twitter,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  Home,
  Info,
  Layers,
  FolderOpen,
  Text,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const goToSection = (section) => {
    gsap.to(window, {
      scrollTo: {
        y: section, // or you can use a pixel value like 1000
        offsetY: 0, // optional, adjust if you have fixed headers
      },
      duration: 1,
      ease: "power1",
    });
  };

  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #000000 0%, #202020 100%)",
        }}
      >
        <section className=" text-white">
          <div className="flex relative py-[3rem] px-4 rounded-md z-50">
            {/* <h2
            className={`text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 uppercase ${styles.animatedGradientText}`}
          > */}
            <div className="text-center w-[fit-content] mx-auto d-flex justify-center  z-10">
              {/* bg-[#000000] */}
              <div>
                <h2
                  className={`${gravesend.className} small-heading font-extrabold text-transparent bg-clip-text uppercase inline-block ${styles.animatedTextGradientText}`}
                  // id="Headings"
                >
                  Start Your Journey With A <br />
                  Free Project Estimate!
                </h2>
              </div>
              <p
                className={`text-white mt-2 text-lg md:text-4xl font-semibold tracking-wide ${gravesend.className}`}
              >
                <a href="mailto:sales@abhiwan.com" className="hover:underline">
                  SALES@ABHIWAN.COM
                </a>
              </p>
            </div>
            <div
              className={`${styles.marqueeWrapper} absolute top-0 left-0 py-[3rem] hidden md:block`}
              // className={`${styles.marqueeWrapper} absolute top-0 left-0 h-[8rem]`}
            >
              <h2
                className={`${styles.marquee} text-9xl font-bold tracking-wide capitalize`}
              >
                REACH US OUT
              </h2>
            </div>
          </div>
        </section>
        <footer className=" text-white py-10 px-6 md:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:justify-items-center gap-10">
            {/* About Section */}
            <div className={` ${helvetica.className}`}>
              <Image
                width={100}
                height={100}
                src="/footarLogo.png"
                className="w-[200px] h-auto object-contain mb-3"
                alt="abhiwan_logo"
              />
              <p className="text-md">
                Expert in game design, development, testing, and marketing,
                along with AI, AR/VR, blockchain, gamification, and app
                development.
              </p>
              <p className="mt-4 text-md">
                We craft cutting-edge digital experiences for businesses
                worldwide.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className={` ${helvetica.className}`}>
              <h3 className="font-semibold  text-lg mb-4 text-purple-500">
                QUICK NAVIGATION
              </h3>
              <ul className="space-y-2 text-md">
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => goToSection("home")}
                >
                  <Home size={16} /> Home
                </li>
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => goToSection("#aboutus")}
                >
                  <Info size={16} /> About Us
                </li>
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => goToSection("#ourservice")}
                >
                  <Layers size={16} /> Services
                </li>
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => goToSection("#recentProject")}
                >
                  <FolderOpen size={16} /> Portfolio
                </li>
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => goToSection("#contactus")}
                >
                  <MessageSquare size={16} /> Contact Us
                </li>
                <Link href="/blogs">
                  <li className="flex items-center gap-2 cursor-pointer">
                    <Text size={16} /> Blogs
                  </li>
                </Link>
              </ul>
            </div>

            {/* Global Headquarters */}
            <div className={` ${helvetica.className}`}>
              <h3 className="font-semibold mb-4 text-purple-500 flex items-center gap-2 text-lg">
                <Globe size={18} /> GLOBAL HEADQUARTERS
              </h3>
              <ul className="text-md space-y-2">
                <li className="text-lg">
                  <strong className="uppercase">United States</strong>
                  <br /> 711 S Glendora Ave, West Covina, CA
                </li>
                <li className="text-[#cbcbcb]">
                  <strong className="uppercase">India</strong> <br />
                  Iconic Corenthum Tower, Noida, Sector-62
                </li>
                <li className="text-[#cbcbcb]">
                  <strong className="uppercase">Dubai</strong>
                  <br /> Ontario Tower, Dubai, UAE
                </li>
                <li className="text-[#cbcbcb]">
                  <strong className="uppercase">United Kingdom</strong>
                  <br /> 86-90 Paul Street, London EC2A 4NE
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className={` ${helvetica.className}`}>
              <h3 className="font-semibold mb-4 text-purple-500 text-lg">
                CONTACT US
              </h3>
              <p className="text-md flex items-center gap-2">
                <Phone size={16} /> <strong>US Sales:</strong> +1 951-521-3487
              </p>
              <p className="text-md flex items-center gap-2">
                <Phone size={16} /> <strong>India Sales:</strong> +91 -
                9599145805
              </p>
              <p className="text-md flex items-center gap-2 mb-6">
                <Mail size={16} /> <strong>Mail Us:</strong> Sales@abhiwan.com
              </p>
              <h3 className="font-semibold mb-3">FOLLOW US</h3>
              <div className="flex gap-4 text-white">
                <a href="https://www.instagram.com/abhiwantechnology/">
                  <Instagram size={20} className="cursor-pointer" />
                </a>
                <a href="https://x.com/AbhiwanTechnol1">
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    strokeWidth={2}
                    fill="#fff"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/abhiwantechnology/">
                  <Linkedin size={20} className="cursor-pointer" />
                </a>
                {/* <Behance size={20} /> */}
                {/* <Telegram size={20} /> */}
                <a href="https://www.youtube.com/@abhiwantechnology">
                  <Youtube size={20} className="cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </footer>

        <div>
          <p className="p-2 text-center text-sm text-[#2C2C2C] bg-[linear-gradient(90deg,#D9D9D9_0%,#737373_100%)]">
            © All Rights Reserved by Abhiwan Technology 2025-26
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
