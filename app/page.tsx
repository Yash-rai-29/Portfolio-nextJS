"use client";
import About from "@/components/about";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { directionalSectionVariants } from "@/lib/animations";
import { useScrollNavigation } from "@/lib/hooks";
import { links } from "@/lib/data";

export default function Home() {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  const isFirstRender = useRef(true);

  // Where the next section should start once it has mounted: at its top
  // (default) or at its bottom (when arriving by scrolling up).
  const pendingScroll = useRef<"top" | "bottom" | null>(null);

  const activeIndex = links.findIndex((link) => link.name === activeSection);
  const nextLink = links[activeIndex + 1];

  // Which way the transition should travel (1 = forward, -1 = back).
  const previousIndex = useRef(activeIndex);
  const direction = useRef<1 | -1>(1);
  if (previousIndex.current !== activeIndex) {
    direction.current = activeIndex > previousIndex.current ? 1 : -1;
    previousIndex.current = activeIndex;
  }

  const goRelative = (step: 1 | -1) => {
    const target = links[activeIndex + step];
    if (!target) return false;

    pendingScroll.current = step === 1 ? "top" : "bottom";
    setActiveSection(target.name);
    return true;
  };

  // Extra scrolling past the top or bottom of a section moves to the
  // previous or next one.
  useScrollNavigation(goRelative);

  // The page manages its own scroll position when sections change, so stop the
  // browser from restoring an old one on back/forward.
  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  // Restore the section from the URL hash on load and on back/forward.
  useEffect(() => {
    const syncFromHash = () => {
      const match = links.find((link) => link.hash === window.location.hash);
      setActiveSection(match ? match.name : "Home");
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [setActiveSection]);

  // Keep the URL in sync with the visible section.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const hash = links[activeIndex]?.hash;
    if (hash && window.location.hash !== hash) {
      window.history.pushState(null, "", hash);
    }
    if (!pendingScroll.current) pendingScroll.current = "top";
  }, [activeSection, activeIndex]);

  // Runs when the new section has mounted, so its height is known.
  const applyPendingScroll = () => {
    const target = pendingScroll.current;
    if (!target) return;
    pendingScroll.current = null;

    window.scrollTo({
      top: target === "top" ? 0 : document.documentElement.scrollHeight,
      left: 0,
      // "instant" ignores the page's smooth-scroll setting; the cast is only
      // because older TypeScript lib typings omit it.
      behavior: "instant" as ScrollBehavior,
    });
  };

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
      case "Blog":
        return <Blog key="blog" />;
      case "Contact":
        return <Contact key="contact" />;
      default:
        return <Intro key="intro" />;
    }
  };

  return (
    <main className="page-min-h flex flex-col items-center px-4">
      {/* Only one section is mounted at a time, so keep one h1 for every view. */}
      <h1 className="sr-only">Yash Rai, Software Engineer</h1>
      <AnimatePresence mode="wait" custom={direction.current}>
        <motion.div
          key={activeSection}
          custom={direction.current}
          variants={directionalSectionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onAnimationStart={(definition) => {
            if (definition === "animate") applyPendingScroll();
          }}
          className="w-full flex-1 flex flex-col items-center"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      {nextLink && (
        <motion.button
          key={nextLink.name}
          type="button"
          onClick={() => goRelative(1)}
          className="mb-10 flex flex-col items-center gap-1 rounded-full px-4 py-2 text-xs font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <span>Scroll for {nextLink.name}</span>
          <motion.span
            aria-hidden="true"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <BsChevronDown />
          </motion.span>
        </motion.button>
      )}
    </main>
  );
}
