"use client";

import { useScroll } from "@/components/hooks/useScroll";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

let phoneNumber = "919599145805";

const BackToTop = () => {
  const { isVisible, scrollToTop } = useScroll();
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-8 right-8 z-40 flex">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-24 z-40 w-14 h-14 flex items-center justify-center 
          rounded-full bg-gradient-to-br from-purple-600 to-purple-800 text-white 
          shadow-[0_0_20px_rgba(168,85,247,0.6)] transition hover:scale-110 cursor-pointer"
        >
          <ArrowUp size={28} strokeWidth={3} />
        </button>
      )}
      {isVisible && (
        <Image
          src="/whatsappIcon.png"
          width={50}
          height={50}
          alt="whatsapp-icon"
          className="fixed bottom-7 right-6  cursor-pointer transition-transform hover:scale-110"
          style={{ zIndex: 41 }}
          onClick={() => {
            window.open(whatsappURL, "_blank");
          }}
        />
      )}
    </div>
  );
};

export default BackToTop;
