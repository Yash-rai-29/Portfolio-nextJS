"use client";

import { useRef, useState } from "react";
import type { ProjectData } from "@/lib/types";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";

type ProjectProps = ProjectData & { index: number };

// Descriptions longer than this are clamped to three lines behind a toggle.
const CLAMP_THRESHOLD = 140;

const tagClassName =
  "bg-black/50 backdrop-blur-sm border border-white/15 text-white text-[0.65rem] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  websiteUrl,
  sourceUrl,
  caseStudyUrl,
  emptyLinksLabel = "🔒 Confidential · NDA",
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const isLong = description.length > CLAMP_THRESHOLD;

  // Scroll-driven entrance animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    // The motion wrapper owns the scroll transform. Hover styling lives on the
    // inner div so framer-motion's inline transform cannot override it.
    <motion.article ref={ref} style={{ opacity, y }} className="flex">
      <div
        className="
          group flex w-full flex-col rounded-2xl overflow-hidden
          bg-white dark:bg-gray-800
          border border-black/5 dark:border-white/10
          shadow-sm transition-all duration-300
          hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10
          hover:border-indigo-200/70 dark:hover:border-indigo-500/30 hover:-translate-y-1
        "
      >
        {/* ── Image area ── */}
        <div className="relative w-full h-48 overflow-hidden flex-shrink-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`${title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          )}
          {/* Gradient overlay so tags are readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Tags pinned to image bottom */}
          <ul className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((tag) => (
              <li key={tag} className={tagClassName}>
                {tag}
              </li>
            ))}
            {tags.length > 4 && (
              <li className={tagClassName}>+{tags.length - 4}</li>
            )}
          </ul>
        </div>

        {/* ── Content area ── */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug">
            {title}
          </h3>

          {/* Description: flex-1 so buttons always sit at bottom */}
          <div className="flex-1 mb-4">
            <p
              className={`text-sm text-gray-600 dark:text-gray-300 leading-relaxed ${
                isLong && !expanded ? "line-clamp-3" : ""
              }`}
            >
              {description}
            </p>
            {isLong && (
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
                className="mt-1 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>

          {/* ── Action buttons ── */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {caseStudyUrl && (
              <motion.a
                href={caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-900 dark:bg-white/10 text-white text-xs font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-white/20 transition-colors duration-200"
              >
                <HiDocumentText className="text-sm" />
                Case Study
                <BsArrowUpRight className="text-[10px] opacity-70" />
              </motion.a>
            )}

            {websiteUrl && (
              <motion.a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors duration-200"
              >
                <AiOutlineGlobal className="text-sm" />
                Website
              </motion.a>
            )}

            {sourceUrl && (
              <motion.a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white text-xs font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-white/20 transition-colors duration-200"
              >
                <FaGithub className="text-sm" />
                Source
              </motion.a>
            )}

            {/* Badge shown only when there are no links */}
            {!caseStudyUrl && !websiteUrl && !sourceUrl && (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/40 text-xs font-semibold rounded-lg select-none">
                {emptyLinksLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
