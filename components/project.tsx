"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

const tagVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  websiteUrl,
  sourceUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        y: yProgress,
      }}
      className="group mb-6 sm:mb-12 last:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <section
        className={`
          bg-gray-100 max-w-[54rem] border border-black/5 rounded-xl overflow-hidden 
          sm:pr-8 relative sm:h-[24rem] transition-all duration-500
          sm:group-even:pl-8 dark:text-white dark:bg-white/10
          ${isHovered ? 'shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-400/5 border-indigo-200 dark:border-indigo-500/30' : ''}
        `}
        style={{
          background: isHovered
            ? `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(99, 102, 241, 0.06), transparent 40%)`
            : undefined,
        }}
      >
        <div className="pt-6 pb-8 px-6 sm:pl-10 sm:pr-1 sm:pt-12 sm:max-w-[68%] flex flex-col h-full sm:group-even:ml-[14rem] overflow-hidden relative">
          {/* Title with hover effect */}
          <motion.h3
            className="text-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h3>

          {/* Tags with staggered animation */}
          <ul className="flex flex-wrap gap-2 mt-2 mb-4">
            {tags.map((tag, index) => (
              <motion.li
                key={index}
                variants={tagVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="bg-gray-900 dark:bg-white/20 px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full font-medium hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors duration-200"
              >
                {tag}
              </motion.li>
            ))}
          </ul>

          {/* Description */}
          <div className="leading-relaxed text-gray-700 dark:text-white/70 flex-1 relative overflow-y-auto pr-2 custom-scrollbar">
            <p>{description}</p>
          </div>
        </div>

        {/* Project Image with enhanced parallax */}
        {imageUrl && (
          <motion.div
            className="absolute hidden sm:block top-10 -right-40 w-[25rem] group-even:right-[initial] group-even:-left-40"
            style={{
              x: isHovered ? (mousePosition.x - 0.5) * -20 : 0,
              y: isHovered ? (mousePosition.y - 0.5) * -10 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <Image
              src={imageUrl}
              alt={`${title} project image`}
              quality={95}
              className={`
                rounded-t-lg shadow-2xl transition-all duration-500 ease-out
                ${isHovered
                  ? 'scale-[1.08] -translate-x-6 translate-y-4 -rotate-3 group-even:translate-x-6 group-even:rotate-3'
                  : 'scale-100'
                }
              `}
            />
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className={`mt-4 flex space-x-3 px-6 pb-6 sm:absolute sm:bottom-6 ${imageUrl ? 'sm:left-10' : 'sm:left-0'} sm:space-x-4 sm:px-0 md:group-odd:ml-[36rem]`}>
          {websiteUrl && (
            <motion.a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 dark:bg-white/20 text-white text-sm rounded-lg transition-all duration-300 flex items-center gap-2 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <AiOutlineGlobal className="text-lg" />
              <span>Website</span>
            </motion.a>
          )}
          {sourceUrl && (
            <motion.a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 dark:bg-white/20 text-white text-sm rounded-lg transition-all duration-300 flex items-center gap-2 hover:bg-gray-700 dark:hover:bg-white/30 hover:shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="text-lg" />
              <span>Source</span>
            </motion.a>
          )}
        </div>
      </section>
    </motion.div>
  );
}
