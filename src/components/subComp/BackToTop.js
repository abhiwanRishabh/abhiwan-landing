"use client";

import { useScroll } from "@/components/hooks/useScroll";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const { isVisible, scrollToTop } = useScroll();

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 flex items-center justify-center 
          rounded-full bg-gradient-to-br from-purple-600 to-purple-800 text-white 
          shadow-[0_0_20px_rgba(168,85,247,0.6)] transition hover:scale-110 cursor-pointer"
        >
          <ArrowUp size={28} strokeWidth={3} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
