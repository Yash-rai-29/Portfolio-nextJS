"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const paragraphVariants = {
  initial: { opacity: 0, y: 25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 sm:mb-28 max-w-[46rem] text-center leading-7 sm:leading-8 text-sm sm:text-base"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <motion.div variants={containerVariants} className="space-y-4">
        <motion.p variants={paragraphVariants}>
          I'm a software engineer and cloud/AI systems builder with a B.Tech in{" "}
          <span className="font-medium">Computer Science & Engineering</span> from
          SR Group of Institutions (AKTU University). I operate at the intersection
          of <span className="font-medium text-indigo-600 dark:text-indigo-400">enterprise cloud data engineering</span> and{" "}
          <span className="font-medium text-indigo-600 dark:text-indigo-400">frontier AI systems</span>,
          holding both the <span className="font-medium text-blue-600 dark:text-blue-400">GCP Professional Data Engineer</span> and{" "}
          <span className="font-medium text-purple-600 dark:text-purple-400">Claude Certified Architect – Professional (CCAR-P)</span> certifications.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          Currently, I'm a <span className="font-medium text-indigo-600 dark:text-indigo-400">Software Engineer</span> at Aviato Consulting,
          where I was recognized with the <span className="font-semibold text-amber-500 dark:text-amber-400">🏆 Best Employee of 2025</span> award.
          I've architected 4+ production MVP backend solutions using FastAPI and Python for high-growth clients (Funzy, Hellow, Gentoo), integrating 7+ core third-party services including Auth0, Stripe, Mailchimp, Mixpanel, and Google APIs into high-availability microservices on Cloud Run.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          My core focus is on <span className="font-medium text-indigo-600 dark:text-indigo-400">AI/ML agentic systems</span> and LLM architectures.
          I've engineered 3+ production-grade agents on Vertex AI and Claude, including an Agent-to-Agent (A2A) orchestration system for Wesfarmers that automated report generation and slashed manual documentation overhead by <span className="font-semibold">70%</span>.
          I also built an enterprise RAG-based RFP Agent using Vertex AI Vector Search, accelerating proposal turnaround and boosting response accuracy by <span className="font-semibold">60%</span>.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          Previously at Clarity, I developed a full-stack <span className="font-medium">Customer Data Platform (CDP)</span> using React.js and Node.js,
          and engineered real-time ETL pipelines processing over <span className="font-semibold">5+ million events daily</span> from Pub/Sub to BigQuery and Bigtable using Apache Beam on Dataflow with sub-second retrieval latency.
        </motion.p>

        <motion.p variants={paragraphVariants}>
          My technical foundation spans{" "}
          <span className="font-medium">Python, SQL, FastAPI, Apache Beam</span>, the full{" "}
          <span className="font-medium text-indigo-600 dark:text-indigo-400">GCP ecosystem</span> (BigQuery, Dataflow, Vertex AI, Cloud Run, Pub/Sub),
          and modern LLM frameworks (<span className="font-medium">Claude, Gemini Pro, RAG architectures, Multi-Agent Systems</span>).
        </motion.p>

        <motion.p variants={paragraphVariants}>
          <span className="italic">Outside of engineering</span>, I enjoy playing video games, watching movies, and tackling{" "}
          <span className="font-medium">technical challenges</span> as a passion.
          I'm always eager to explore emerging agentic workflows, autonomous reasoning systems, and resilient cloud architectures.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
