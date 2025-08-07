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

export default function Home() {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  // Ensure useActiveSectionContext() is only used on the client-side
  useEffect(() => {
    setActiveSection("Home"); // Set default active section on initial load
  }, [setActiveSection]);
  
  return (
    <main className="flex flex-col items-center px-4">
      {/* <Intro /> */}
      {/* <SectionDivider /> */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
      {/* {activeSection === "Intro" && <Intro />} */}
      {activeSection === "Home" && <Intro />}
      {activeSection === "About" && <About />}
      {activeSection === "Projects" && <Projects />}
      {activeSection === "Skills" && <Skills />}
      {activeSection === "Experience" && <Experience />}
      {activeSection === "Contact" && <Contact /> }
    </main>
  );
}
