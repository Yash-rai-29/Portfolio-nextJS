"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// Tailwind's `md` breakpoint. The desktop nav is too wide to sit beside the
// theme toggle below this width, so the mobile bar is used instead.
const DESKTOP_MIN_WIDTH = 768;

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (name: SectionName) => {
    setActiveSection(name);
    setMobileOpen(false);
  };

  // While the menu is open: lock page scroll, close on Escape, and close if
  // the viewport grows into the desktop layout.
  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_MIN_WIDTH) setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileOpen]);

  return (
    <header>
      <motion.nav
        aria-label="Desktop navigation"
        className="
          hidden md:flex items-center
          fixed top-6 left-1/2 -translate-x-1/2
          h-[3.5rem] px-2
          rounded-full
          border border-white/50 dark:border-white/10
          bg-white/75 dark:bg-gray-950/70
          shadow-lg shadow-black/[0.04]
          backdrop-blur-xl
          z-50
        "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <ul className="flex items-center gap-1 text-[0.9rem] font-medium">
          {links.map((link, index) => {
            const isActive = activeSection === link.name;

            return (
              <motion.li
                key={link.hash}
                className="relative flex items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={link.hash}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.name);
                  }}
                  className={clsx(
                    "relative flex items-center justify-center rounded-full px-3 lg:px-4 py-2.5 whitespace-nowrap select-none transition-[color,transform] duration-200",
                    isActive
                      ? "text-indigo-700 dark:text-indigo-300"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktopActivePill"
                      className="absolute inset-0 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-400/10 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={clsx(isActive && "font-semibold")}>
                    {link.name}
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>

      <motion.div
        className="
          md:hidden fixed top-0 left-0 right-0
          h-14 px-4
          flex items-center justify-between
          bg-white/85 dark:bg-gray-950/85
          backdrop-blur-md
          border-b border-black/5 dark:border-white/10
          shadow-sm
          z-50
        "
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={activeSection}
            className="text-sm font-semibold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            {activeSection}
          </motion.span>
        </AnimatePresence>

        <motion.button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          whileTap={{ scale: 0.92 }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <HiX className="text-xl" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <HiMenuAlt3 className="text-xl" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              id="mobile-menu"
              className="
                md:hidden fixed top-14 left-0 right-0
                max-h-[calc(100vh-3.5rem)] overflow-y-auto
                bg-white/[0.98] dark:bg-gray-950/[0.98]
                backdrop-blur-lg
                border-b border-black/5 dark:border-white/10
                shadow-2xl shadow-black/10
                z-[49]
              "
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="py-2">
                {links.map((link, index) => {
                  const isActive = activeSection === link.name;

                  return (
                    <motion.li
                      key={link.hash}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.22,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.hash}
                        aria-current={isActive ? "page" : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.name);
                        }}
                        className={clsx(
                          "mx-2 flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                        )}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-indigo-500 flex-shrink-0" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div
              className="md:hidden fixed inset-0 top-14 bg-black/20 z-[48]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
