"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, Variants } from "framer-motion";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

// Define the type for skillsData
type Skill = string;

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const hoverAnimationVariants: Variants = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  hover: {
    scale: 1.05,
    opacity: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

const borderAnimation = keyframes`
  0% { border-color: #ff6ec7; }
  25% { border-color: #6e6eff; }
  50% { border-color: #6effa1; }
  75% { border-color: #fffd6e; }
  100% { border-color: #ff6ec7; }
`;

const SkillItem = styled(motion.li)`
  background: white;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 16px 24px;
  transition: border-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: transparent;
    animation: ${borderAnimation} 2s linear infinite;
  }

  .dark & {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill: Skill, index: number) => (
          <SkillItem
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <motion.div
              variants={hoverAnimationVariants}
              initial="initial"
              whileHover="hover"
            >
              {skill}
            </motion.div>
          </SkillItem>
        ))}
      </ul>
    </section>
  );
}
