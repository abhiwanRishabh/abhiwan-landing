"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { gravesend, montserrat, helvetica } from "@/app/font/Fonts";

export const HoverEffect = ({ items, className, newclassName }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-4 md:py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          //   href={item?.link}
          //   key={item?.link}
          key={item.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {/* <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription> */}
            <div
              key={item.id}
              className={`${newclassName} w-full h-full p-[2px] rounded-2xl`}
            >
              <div className="h-full p-6 rounded-2xl bg-[#1a002a] text-white">
                <div className="flex flex-col text-center ">
                  <div className="flex justify-center">
                    <div className="flex gap-1">
                      <div className="text-2xl mb-2">{item.emoji}</div>
                      <h2
                        className={`text-2xl font-extrabold uppercase tracking-wide mb-4 ${gravesend.className}`}
                      >
                        {" "}
                        {item.titlePart1}
                        <br />
                        {item.titlePart2}
                      </h2>
                    </div>
                  </div>
                  <p
                    className={`text-sm text-[#9CA8BB] leading-relaxed ${helvetica.className}`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full  overflow-hidden  border border-transparent   relative z-20",
        className
      )}
    >
      <div className="h-full relative z-50">{children}</div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
