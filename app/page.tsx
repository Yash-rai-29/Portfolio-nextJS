"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionVariants } from "@/lib/animations";

export default function Home() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    setActiveSection("Home");
  }, [setActiveSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        return <Intro key="intro" />;
      case "About":
        return <About key="about" />;
      case "Projects":
        return <Projects key="projects" />;
      case "Skills":
        return <Skills key="skills" />;
      case "Experience":
        return <Experience key="experience" />;
      case "Contact":
        return <Contact key="contact" />;
      default:
        return <Intro key="intro" />;
    }
  };

  return (
    <main className="flex flex-col items-center px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full flex flex-col items-center"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
