"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

const navItemVariants = {
  initial: { y: -100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-white/20 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-900/80 dark:border-gray-700/50 dark:shadow-indigo-500/5"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      ></motion.div>

      <nav className="flex fixed top-[0.25rem] left-1/2 h-[3rem] -translate-x-1/2 py-1 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-screen max-w-[24rem] sm:max-w-none flex-nowrap items-center justify-center gap-1 text-[0.75rem] sm:text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:gap-5 overflow-x-auto px-2 sm:px-0">
          {links.map((link, index) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              custom={index}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-2 sm:px-3 py-2 sm:py-3 transition-all duration-300 dark:text-gray-200 relative group whitespace-nowrap",
                  {
                    "text-gray-950 dark:text-white font-semibold":
                      activeSection === link.name,
                    "hover:text-gray-950 dark:hover:text-white":
                      activeSection !== link.name,
                  }
                )}
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {/* Hover underline effect */}
                <span className={clsx(
                  "absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300",
                  activeSection === link.name ? "w-1/2" : "w-0 group-hover:w-1/3"
                )} />

                {/* Active section background pill */}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
