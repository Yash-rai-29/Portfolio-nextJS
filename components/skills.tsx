"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, Variants } from "framer-motion";

// Animation variants for staggered entrance
const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Individual skill item with 3D tilt
function SkillItem({ skill, index }: { skill: string; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.li
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className={`
        relative bg-white dark:bg-white/10 
        border-2 border-transparent
        rounded-xl px-5 py-3 
        cursor-pointer select-none
        transition-all duration-200 ease-out
        hover:shadow-lg hover:shadow-indigo-500/20
        dark:hover:shadow-indigo-400/10
        ${isHovered ? 'animate-rainbow-border' : ''}
      `}
    >
      {/* Gradient glow effect on hover */}
      <div
        className={`
          absolute inset-0 rounded-xl 
          bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20
          opacity-0 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : ''}
        `}
      />

      {/* Skill text */}
      <span
        className="relative z-10 text-gray-800 dark:text-white/80 font-medium"
        style={{ transform: "translateZ(20px)" }}
      >
        {skill}
      </span>
    </motion.li>
  );
}

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <motion.ul
        className="flex flex-wrap justify-center gap-3 text-lg"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((skill, index) => (
          <SkillItem key={skill} skill={skill} index={index} />
        ))}
      </motion.ul>
    </section>
  );
}
