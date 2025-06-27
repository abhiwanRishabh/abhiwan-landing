import React, { useState } from "react";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import { Cross, Menu, X } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { goToSection } from "./Hero";

const Navbar = () => {
  const [openSidebar, setSidebar] = useState(false);
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
      <nav className="sticky z-[999] py-2">
        <div className="py-3 px-6 flex justify-between items-center">
          <div>
            <Image
              src="/AbhiwanLogoPortfolio.png"
              alt="logo"
              width={100}
              height={100}
              className=""
            />
          </div>
          <div className="flex  items-center gap-4">
            {/* <button
              className={`${styles.nav_button} text-white uppercase py-3 px-5 font-bold rounded-full`}
            >
              Menu
            </button> */}
            <div className="hidden md:flex items-center gap-2">
              {/* <Link href="#ourservice"> */}
              <button
                onClick={() => goToSection("#ourservice")}
                className={`${styles.nav_button} text-white uppercase py-2 px-3 font-semibold rounded-full cursor-pointer text-xs`}
              >
                Our Services
              </button>
              {/* </Link> */}
              <div
                className={`${styles.white_dot} bg-[#ffffff] size-2 rounded-full`}
              ></div>
              <div
                className={`${styles.white_dot} bg-[#ffffff] size-2 rounded-full`}
              ></div>
              {/* <Link href="#aboutus"> */}
              <button
                onClick={() => goToSection("#aboutus")}
                className={`${styles.nav_button} text-white uppercase py-2 px-3 font-semibold rounded-full cursor-pointer text-xs`}
              >
                ABOUT US
              </button>
              {/* </Link> */}
            </div>

            <div className="hidden md:block w-[1px] self-stretch bg-[#842dff] me-3"></div>
            {/* <Link href="#contactus"> */}
            <button
              onClick={() => goToSection("#contactus")}
              className="bg-gradient-to-r from-[#842DFF] to-[#4F1B99] text-white uppercase py-2 px-3 font-semibold rounded-full cursor-pointer text-xs transition-colors duration-300 cursor-pointer"
            >
              Contact Us
            </button>
            {/* </Link> */}
            <div className=" md:hidden block relative">
              {openSidebar ? (
                <X
                  size={40}
                  color="#fff"
                  onClick={() => setSidebar((prev) => !prev)}
                  className="cursor-pointer"
                />
              ) : (
                <Menu
                  size={30}
                  color="#fff"
                  onClick={() => setSidebar((prev) => !prev)}
                  className="cursor-pointer"
                />
              )}

              <MenuBar openSidebar={openSidebar} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

function MenuBar({ openSidebar }) {
  return (
    <ul
      className={`w-[160px] h-auto uppercase absolute rounded-b-3xl transition-all ${
        openSidebar ? "-left-33" : `-left-[900px]`
      }`}
      style={{
        backgroundImage: "linear-gradient(180deg, #000000 0%, #400026 100%)",
        zIndex: 100,
      }}
    >
      <li
        className="text-white text-sm px-2 py-3 cursor-pointer"
        onClick={() => goToSection("#aboutus")}
      >
        About Us
      </li>
      <li
        className="text-white text-sm px-2 py-3 cursor-pointer"
        onClick={() => goToSection("#ourservice")}
      >
        Our Services
      </li>
      <li
        className="text-white text-sm px-2 py-3 cursor-pointer"
        onClick={() => goToSection("#recentProject")}
      >
        Our Portfolio
      </li>
      <li
        className="text-white text-sm px-2 py-3 cursor-pointer"
        onClick={() => goToSection("#contactus")}
      >
        Get A Quote
      </li>
    </ul>
  );
}

export default Navbar;
