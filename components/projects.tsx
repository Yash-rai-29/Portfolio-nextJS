"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-20 sm:mb-28 w-full max-w-6xl mx-auto px-4 sm:px-6"
    >
      <SectionHeading>My Projects</SectionHeading>

      {/* 2-column responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projectsData.map((project, index) => (
          <Project key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}