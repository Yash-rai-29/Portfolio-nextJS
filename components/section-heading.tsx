"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const headingVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
};

const underlineVariants = {
  initial: { scaleX: 0, originX: 0 },
  animate: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
  },
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-8 text-center"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2
        variants={headingVariants}
        className="text-3xl font-medium capitalize inline-block relative"
      >
        {children}
        {/* Animated Gradient Underline */}
        <motion.span
          variants={underlineVariants}
          className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
        />
      </motion.h2>
    </motion.div>
  );
}
