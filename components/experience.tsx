"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [openDescriptionIndex, setOpenDescriptionIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenDescriptionIndex(openDescriptionIndex === index ? null : index);
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              width: '60px', // Adjust size as needed
              height: '60px', // Adjust size as needed
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              overflow: 'hidden'
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p style={{ fontSize: '14px' }} className="font-normal !mt-0">{item.location}</p>
            {item.description && (
              <motion.button
                onClick={() => toggleDescription(index)}
                className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={{ rotate: openDescriptionIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[10px]"
                >
                  <FaChevronDown />
                </motion.span>
                {openDescriptionIndex === index ? "Hide" : "Key Contributions"}
              </motion.button>
            )}
            {item.description && (
              <motion.div
                initial={false}
                animate={{
                  height: openDescriptionIndex === index ? 'auto' : 0,
                  opacity: openDescriptionIndex === index ? 1 : 0,
                  overflow: 'hidden',
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </motion.div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
