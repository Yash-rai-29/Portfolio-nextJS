"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import Footer from "./footer";

const formVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  },
};

const inputVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <>
      <motion.section
        id="contact"
        ref={ref}
        className="mb-16 sm:mb-20 sm:mb-28 w-[min(100%,38rem)] text-center px-4 sm:px-0"
        variants={formVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionHeading>Let's Build Together</SectionHeading>

        {/* Freelance MVP Pitch */}
        <motion.div
          className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-2xl border border-indigo-200/50 dark:border-indigo-500/20"
          variants={inputVariants}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            🚀 Got an idea? Let's build your MVP.
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            I help founders and businesses go from <span className="font-semibold text-indigo-600 dark:text-indigo-400">0 → 1</span> with
            fast, scalable MVPs. Whether it's a <span className="font-medium">backend API</span>,
            <span className="font-medium"> AI-powered agent</span>, or
            <span className="font-medium"> data pipeline</span>, I deliver production-ready solutions on GCP.
          </p>
        </motion.div>

        <motion.p
          className="text-gray-700 -mt-2 mb-6 dark:text-white/80"
          variants={inputVariants}
        >
          Reach out at{" "}
          <a
            className="underline font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            href="mailto:yashrai1224@gmail.com"
          >
            yashrai1224@gmail.com
          </a>{" "}
          or send a message below.
        </motion.p>

        <form
          className="flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <motion.input
            variants={inputVariants}
            className="h-12 sm:h-14 px-3 sm:px-4 text-sm sm:text-base rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            variants={inputVariants}
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            name="message"
            placeholder="Tell me about your project idea..."
            required
            maxLength={5000}
            whileFocus={{ scale: 1.01 }}
          />
          <motion.div variants={inputVariants}>
            <SubmitBtn />
          </motion.div>
        </form>
      </motion.section>
      <Footer />
    </>
  );
}
