"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";

const iconVariants = {
  initial: { scale: 0, rotate: -180, opacity: 0 },
  animate: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  },
  exit: {
    scale: 0,
    rotate: 180,
    opacity: 0,
    transition: { duration: 0.2 }
  },
};

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950 dark:border-gray-800 overflow-hidden"
      onClick={toggleTheme}
      whileHover={{
        scale: 1.1,
        boxShadow: theme === "light"
          ? "0 0 20px rgba(251, 191, 36, 0.4)"
          : "0 0 20px rgba(129, 140, 248, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-amber-500 text-xl"
          >
            <BsSun />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-indigo-400 text-xl"
          >
            <BsMoon />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
