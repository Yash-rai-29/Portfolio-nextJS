"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { VscPassFilled } from "react-icons/vsc";
import { FaGithubSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaCloudArrowDown } from "react-icons/fa6";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] p-4"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <Image
              src="/DP.jpg"
              alt="Yash Rai portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-lg sm:text-xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <span className="font-bold">Hello, I'm Yash Rai.</span> I'm a{" "}
        <span className="font-bold">Data Engineer</span> specializing in{" "}
        <span className="font-bold">scalable data pipeline development</span>{" "}
        and <span className="font-bold">big data technologies</span>. I have
        experience in optimizing data workflows, enhancing system performance,
        and reducing operational costs. My focus is on leveraging cutting-edge
        tools to efficiently manage and process large datasets.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-gray-300 dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <FaCloudArrowDown className="opacity-60 group-hover:translate-x-1 transition" />
        </a>

        <Link
          href="https://topmate.io/yash_rai" target="_blank"
          rel="noopener noreferrer"
          className="group bg-blue-600 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-700 active:scale-105 transition"
        >
          1:1 Talk{" "}
          <VscPassFilled className="opacity-70 transition" />
        </Link>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-4 mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/yashrai1224"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Yash-rai-29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
          href="https://www.instagram.com/yashrai_29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-gray-300 dark:bg-white/10 dark:text-white/60"
          href="https://twitter.com/YashRai1224"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </motion.div>
    </section>
  );
}
