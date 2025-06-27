"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { InfiniteMarquee } from "./InfiniteMarquee";
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  width,
  height = null,
  objectFit,
  customClasses = "",
  pauseOnHover = true,
  className,
}) => {
  // const containerRef = React.useRef(null);
  // const scrollerRef = React.useRef(null);

  // useEffect(() => {
  //   addAnimation();
  // }, []);
  // const [start, setStart] = useState(false);
  // function addAnimation() {
  //   if (containerRef.current && scrollerRef.current) {
  //     const scrollerContent = Array.from(scrollerRef.current.children);

  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true);
  //       if (scrollerRef.current) {
  //         scrollerRef.current.appendChild(duplicatedItem);
  //       }
  //     });

  //     getDirection();
  //     getSpeed();
  //     setStart(true);
  //   }
  // }
  // const getDirection = () => {
  //   if (containerRef.current) {
  //     if (direction === "left") {
  //       containerRef.current.style.setProperty(
  //         "--animation-direction",
  //         "forwards"
  //       );
  //     } else {
  //       containerRef.current.style.setProperty(
  //         "--animation-direction",
  //         "reverse"
  //       );
  //     }
  //   }
  // };
  // const getSpeed = () => {
  //   if (containerRef.current) {
  //     if (speed === "fast") {
  //       containerRef.current.style.setProperty("--animation-duration", "20s");
  //     } else if (speed === "normal") {
  //       containerRef.current.style.setProperty("--animation-duration", "40s");
  //     } else {
  //       containerRef.current.style.setProperty("--animation-duration", "80s");
  //     }
  //   }
  // };

  const getWidth = (idx) => {
    if (idx === items?.length - 1) {
      return 180;
    } else if (idx === items?.length - 2) {
      return 60;
    }
    return 100;
  };

  return (
    <div
      // ref={containerRef}
      // className={cn(
      //   "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
      //   className
      // )}
      className={cn(
        "scroller relative z-20 w-dvw overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      {/* <div
        ref={scrollerRef}
        className={cn(
          "flex align-center w-max min-w-full shrink-0 flex-nowrap gap-9  py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      > */}
      {/* <Marquee direction="right" speed={100} className="" gradient={false}> */}
      <InfiniteMarquee speed="normal" pauseOnHover>
        {items.map((item, idx) => (
          <div
            className={`relative pe-2 py-2 ${customClasses} ml-4 rounded-2xl`}
            // className={`relative w-[11rem] h-[11rem] max-w-full shrink-0 rounded-2xl`}
            key={`${idx}-${item.name}`}
          >
            {/* <p>{item.name}</p> */}
            <Image
              src={item.imageUrl}
              alt={item.name || "image"}
              width={
                item?.imageUrl === "/content/client/stripto.png"
                  ? 180
                  : getWidth(idx)
              }
              height={100}
              // className={`w-24 h-24 md:w-32 md:h-28 ${objectFit} `}
              // className={`w-full h-full object-contain `}
            />
          </div>
        ))}
      </InfiniteMarquee>

      {/* </Marquee> */}
    </div>
    // </div>
  );
};
