"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const paragraphVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <motion.div variants={containerVariants} className="space-y-4">
        <motion.p variants={paragraphVariants}>
          I'm a <span className="font-medium text-indigo-600 dark:text-indigo-400">GCP Professional Data Engineer Certified</span> software engineer
          with a B.Tech in <span className="font-medium">Computer Science & Engineering</span> from
          SR Group of Institutions (AKTU University). I specialize in building{" "}
          <span className="font-medium text-indigo-600 dark:text-indigo-400">scalable backend solutions</span>,{" "}
          <span className="font-medium">AI/ML agents</span>, and{" "}
          <span className="font-medium">data pipelines</span> on Google Cloud Platform.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          Currently, I'm a <span className="font-medium text-indigo-600 dark:text-indigo-400">Software Engineer</span> at Aviato Consulting,
          where I was awarded <span className="font-semibold text-amber-500 dark:text-amber-400">🏆 Best Employee of 2025</span>.
          I've architected 4+ MVP backend solutions using FastAPI and Python for high-growth clients including Funzy, Hellow, and Gentoo.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          My recent work focuses on <span className="font-medium text-indigo-600 dark:text-indigo-400">AI/ML agents</span> — I've engineered 3+ production-grade
          Google ADK agents on Vertex AI, including a sophisticated multi-agent system for Wesfarmers with Agent-to-Agent (A2A) communication
          that automated report generation, reducing manual documentation effort by <span className="font-semibold">70%</span>.
          I also built a RAG-based RFP Agent using Vertex AI Vector Search, improving proposal accuracy by <span className="font-semibold">60%</span>.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          Previously at Clarity, I designed a <span className="font-medium">Customer Data Platform (CDP)</span> using React.js and Node.js,
          and built real-time ETL pipelines processing <span className="font-semibold">5+ million events daily</span> using Python, Apache Beam,
          BigQuery, and Bigtable.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          My technical expertise includes{" "}
          <span className="font-medium">Python, SQL, FastAPI, Apache Beam</span>, and the full{" "}
          <span className="font-medium text-indigo-600 dark:text-indigo-400">GCP ecosystem</span> (BigQuery, Dataflow, Vertex AI, Cloud Run, Pub/Sub).
          I'm also experienced with <span className="font-medium">Gemini Pro, RAG architectures</span>, and multi-agent AI systems.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          <span className="italic">Outside of work</span>, I enjoy playing video games, watching movies, and diving into{" "}
          <span className="font-medium">technical challenges</span> as a hobby.
          I'm always exploring new AI/ML technologies and cloud architectures.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
