"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated with a B.Tech in{" "}
        <span className="font-medium">Computer Science & Engineering</span> from
        SR Group of Institutions, Jhansi. With a strong foundation in computer
        science, I have specialized in{" "}
        <span className="font-medium">Data Engineering</span>. My passion lies
        in building scalable data pipelines and working with{" "}
        <span className="font-medium">big data technologies</span>.
      </p>

      <p className="mb-3">
  Currently, I am working as a <span className="font-medium">Software Engineer</span> at Aviato Consulting, where I continue to hone my skills in software development and data engineering.
</p>


      <p className="mb-3">
      Previously, I have worked as a{" "}
        <span className="font-medium">Software Development Engineer Intern</span>{" "}
        at Clarity, where I developed a Customer Data Platform (CDP) web application
        that significantly improved user data management and fraud detection.
        I engineered a real-time big data pipeline using{" "}
        <span className="font-medium">Python and Apache Beam</span>, processing
        over 5 million user events daily, and implemented an ETL pipeline to
        reduce data handling costs.
      </p>

      <p className="mb-3">
        My technical proficiencies include{" "}
        <span className="font-medium">Python, SQL, and big data tools</span>{" "}
        such as Apache Beam, Pub/Sub, and Databricks. I am also skilled in
        cloud services, particularly <span className="font-medium">Google Cloud Platform (GCP)</span>, and database systems like BigQuery and Bigtable. My experience spans across
        <span className="font-medium"> developing data solutions</span> that optimize workflows and enhance system performance.
      </p>

      <p className="mb-3">
        In addition to my professional expertise, I enjoy exploring new
        technologies and continuously expanding my knowledge. Currently, I am
        looking for opportunities to apply my skills in a{" "}
        <span className="font-medium">Data Engineer role</span> where I can
        contribute to innovative projects and solve complex data problems.
      </p>

      <p>
        <span className="italic">Outside of work</span>, I have a keen interest
        in playing video games, watching movies, and diving into{" "}
        <span className="font-medium">technical challenges</span> as a hobby. 
        I am also enthusiastic about learning new skills and recently, I've been exploring{" "}
        <span className="font-medium">cloud technologies and data architecture</span>.
      </p>
    </motion.section>
  );
}
