"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-6 sm:mb-12 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-[40rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[24rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-6 pb-8 px-6 sm:pl-10 sm:pr-6 sm:pt-12 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem] overflow-hidden relative">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <ul className="flex flex-wrap gap-2 mt-2 mb-4">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.6] px-2 py-1 text-[0.4rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="leading-relaxed text-gray-700 dark:text-white/70 flex-1 relative overflow-y-auto pr-2 custom-scrollbar">
            <p>{description}</p>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={`${title} project image`}
          quality={95}
          className="absolute hidden sm:block top-10 -right-40 w-[25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}