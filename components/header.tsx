"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileOpen(false);
  };

  return (
    <header>
      {/*
        ── DESKTOP PILL NAV ──────────────────────────────────────────────────
        Single element: pill styling + content inside.
        Previously the pill was a separate empty div (w-auto → 0 width = invisible).
        Now the pill auto-sizes from its own children.
        z-50 is explicit on this fixed element (the outer <header> z-index
        does NOT propagate to fixed descendants — they form their own stacking context).
      */}
      <motion.nav
        aria-label="Desktop navigation"
        className="
          hidden sm:flex items-center
          fixed top-6 left-1/2 -translate-x-1/2
          h-[3.25rem] px-2
          rounded-full
          border border-white/40 dark:border-black/40
          bg-white/80 dark:bg-gray-950/80
          shadow-lg shadow-black/[0.03]
          backdrop-blur-md
          z-50
          overflow-visible
        "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <ul className="flex items-center text-[0.82rem] font-medium text-gray-500 dark:text-gray-400">
          {links.map((link, index) => (
            <motion.li
              key={link.hash}
              className="relative flex items-center justify-center overflow-visible"
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
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.name);
                }}
                className={clsx(
                  "relative flex items-center justify-center px-3 py-2.5 rounded-full whitespace-nowrap select-none transition-colors duration-200",
                  activeSection === link.name
                    ? "text-gray-950 dark:text-white font-semibold"
                    : "hover:text-gray-800 dark:hover:text-gray-100"
                )}
              >
                {link.name}

                {/* Sliding background pill — springs between active items */}
                {activeSection === link.name && (
                  <motion.span
                    layoutId="desktopActivePill"
                    className="absolute inset-0 rounded-full bg-gray-100 dark:bg-white/10 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              {/*
                Active dot — lives in <li>, NOT inside <Link>.
                Centered via left-0 right-0 mx-auto (no transform needed).
                Positioned at -bottom-2 so it sits just below the pill edge.
                layoutId animates it across items in the same coordinate space.
              */}
              {activeSection === link.name && (
                <motion.span
                  layoutId="desktopActiveDot"
                  className="absolute -bottom-2 left-0 right-0 mx-auto w-1.5 h-1.5 rounded-full bg-indigo-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/*
        ── MOBILE TOP BAR ────────────────────────────────────────────────────
        h-14 frosted bar with current section label + hamburger.
        z-50 keeps it above all page content.
      */}
      <motion.div
        className="
          sm:hidden fixed top-0 left-0 right-0
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
        {/* Animated section label */}
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

        {/* Hamburger — rotates between open/close icons */}
        <motion.button
          onClick={() => setMobileOpen((o) => !o)}
          className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          whileTap={{ scale: 0.92 }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
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

      {/*
        ── MOBILE DROPDOWN ───────────────────────────────────────────────────
        z-[49] — below the top bar (z-50) but above page content.
        Overlay at z-[48] dims the page and closes the menu on tap.
      */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="
                sm:hidden fixed top-14 left-0 right-0
                bg-white/[0.98] dark:bg-gray-950/[0.98]
                backdrop-blur-lg
                border-b border-black/5 dark:border-white/10
                shadow-2xl shadow-black/10
                overflow-hidden
                z-[49]
              "
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="py-2">
                {links.map((link, index) => (
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
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.name);
                      }}
                      className={clsx(
                        "flex items-center justify-between px-6 py-3.5 text-sm font-medium transition-colors",
                        activeSection === link.name
                          ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-500/10"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                      )}
                    >
                      {link.name}
                      {activeSection === link.name && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tap-outside overlay */}
            <motion.div
              className="sm:hidden fixed inset-0 top-14 bg-black/20 z-[48]"
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
