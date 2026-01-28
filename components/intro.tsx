"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaCloudArrowDown } from "react-icons/fa6";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
  float,
  pulse
} from "@/lib/animations";

const socialIconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.15,
    y: -3,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  },
  tap: { scale: 0.95 }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
    transition: { type: "spring", stiffness: 400, damping: 17 }
  },
  tap: { scale: 0.98 }
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 sm:mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] px-3 sm:p-4 pt-24 sm:pt-4"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Floating Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.6,
            }}
            className="animate-float-slow"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse scale-110"></div>
              <Image
                src="/yash.jpg"
                alt="Yash Rai portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl relative z-10"
              />
            </div>
          </motion.div>

          {/* Animated Wave Emoji */}
          <motion.span
            className="absolute bottom-0 right-0 text-2xl sm:text-4xl"
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.3,
              duration: 0.6,
            }}
            whileHover={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
              transition: { duration: 0.8 }
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Staggered Text Reveal */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="mb-10 mt-4 px-4"
      >
        {/* GCP Certification Badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 dark:from-blue-500/20 dark:to-green-500/20 rounded-full border border-blue-200 dark:border-blue-500/30"
        >
          <span className="text-base sm:text-lg">🎓</span>
          <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">GCP Professional Data Engineer Certified</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl font-medium !leading-[1.5]"
        >
          <span className="font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text">
            Hello, I'm Yash Rai.
          </span>{" "}
          I'm a{" "}
          <span className="font-bold text-indigo-600 dark:text-indigo-400">Software Engineer</span> specializing in{" "}
          <span className="font-bold">scalable backend solutions</span>,{" "}
          <span className="font-bold">AI/ML agents</span>, and{" "}
          <span className="font-bold">data pipelines</span>. I help startups and businesses build
          production-grade systems on Google Cloud Platform.
        </motion.h1>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
      >
        <motion.div
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base flex items-center gap-2 rounded-full outline-none transition-all btn-glow dark:bg-gray-800"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>

        <motion.a
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="group bg-white px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base flex items-center gap-2 rounded-full outline-none cursor-pointer border border-gray-300 dark:bg-white/10 dark:border-white/20"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <FaCloudArrowDown className="opacity-60 group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300" />
        </motion.a>
      </motion.div>

      {/* Social Icons with Enhanced Hover */}
      <motion.div
        className="flex items-center justify-center gap-2 sm:gap-4 mt-5 sm:mt-6 flex-wrap"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
        }}
      >
        {[
          { href: "https://linkedin.com/in/yashrai1224", Icon: BsLinkedin, label: "LinkedIn" },
          { href: "https://github.com/Yash-rai-29", Icon: FaGithubSquare, label: "GitHub" },
          { href: "https://yashdev.substack.com", Icon: SiSubstack, label: "Newsletter" },
          { href: "https://www.instagram.com/yashrai_29", Icon: FaInstagram, label: "Instagram" },
          { href: "https://twitter.com/YashRai1224", Icon: FaTwitter, label: "Twitter" },
        ].map(({ href, Icon, label }, index) => (
          <motion.a
            key={label}
            variants={socialIconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="relative group bg-white p-3 sm:p-4 text-gray-700 flex items-center gap-2 text-lg sm:text-[1.35rem] rounded-full cursor-pointer border border-gray-300 hover:text-indigo-600 hover:border-indigo-300 dark:bg-white/10 dark:text-white/60 dark:hover:text-indigo-400 dark:hover:border-indigo-400/50 dark:border-white/20 transition-colors duration-300"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gray-800 dark:bg-gray-700 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section >
  );
}
