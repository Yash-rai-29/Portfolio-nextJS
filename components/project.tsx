"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  index,
  title,
  description,
  tags,
  imageUrl,
  websiteUrl,
  sourceUrl,
  mediumUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Scroll-driven entrance animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity, y }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group flex flex-col rounded-2xl overflow-hidden
        bg-white dark:bg-gray-800
        border border-black/5 dark:border-white/10
        transition-all duration-300
        ${hovered
          ? "shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-400/10 border-indigo-200/70 dark:border-indigo-500/30 -translate-y-1"
          : "shadow-sm"
        }
      `}
    >
      {/* ── Image area ── */}
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
          <Image
            src={imageUrl}
            alt={`${title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            className={`
              object-cover object-top transition-transform duration-500 ease-out
              ${hovered ? "scale-105" : "scale-100"}
            `}
          />
          {/* Gradient overlay so tags are readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Tags pinned to image bottom */}
          <ul className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((tag) => (
              <li
                key={tag}
                className="bg-black/50 backdrop-blur-sm border border-white/15 text-white text-[0.55rem] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full"
              >
                {tag}
              </li>
            ))}
            {tags.length > 4 && (
              <li className="bg-black/50 backdrop-blur-sm border border-white/15 text-white text-[0.55rem] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full">
                +{tags.length - 4}
              </li>
            )}
          </ul>
        </div>
      )}

      {/* ── Content area ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Description — flex-1 so buttons always sit at bottom */}
        <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed line-clamp-3 flex-1 mb-4">
          {description}
        </p>

        {/* ── Action buttons ── */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {/* Case Study (Medium) */}
          {mediumUrl && (
            <motion.a
              href={mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-900 dark:bg-white/10 text-white text-xs font-semibold rounded-lg hover:bg-[#00ab6c] dark:hover:bg-[#00ab6c] transition-colors duration-200"
            >
              <SiMedium className="text-sm" />
              Case Study
              <BsArrowUpRight className="text-[10px] opacity-70" />
            </motion.a>
          )}

          {/* Website */}
          {websiteUrl && (
            <motion.a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors duration-200"
            >
              <AiOutlineGlobal className="text-sm" />
              Website
            </motion.a>
          )}

          {/* Source */}
          {sourceUrl && (
            <motion.a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white text-xs font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-white/20 transition-colors duration-200"
            >
              <FaGithub className="text-sm" />
              Source
            </motion.a>
          )}

          {/* NDA badge — only when all links are absent */}
          {!mediumUrl && !websiteUrl && !sourceUrl && (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/40 text-xs font-semibold rounded-lg select-none">
              🔒 Confidential · NDA
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
