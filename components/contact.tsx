"use client";

import React, { useRef } from "react";
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
  const formRef = useRef<HTMLFormElement>(null);

  return (
    // Fills the page so the footer can sit at the bottom of the screen.
    <div className="flex w-full flex-1 flex-col items-center">
      <motion.section
        id="contact"
        ref={ref}
        className="mb-12 w-[min(100%,38rem)] text-center"
        variants={formVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SectionHeading>Let's Build Together</SectionHeading>

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
          ref={formRef}
          className="relative flex flex-col dark:text-black"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
            formRef.current?.reset();
          }}
        >
          {/* Honeypot: hidden from people, filled in by simple bots. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />
          <motion.input
            variants={inputVariants}
            className="h-12 sm:h-14 px-3 sm:px-4 text-base rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <motion.textarea
            variants={inputVariants}
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            name="message"
            placeholder="Tell me about your project idea..."
            required
            maxLength={5000}
          />
          <motion.div variants={inputVariants}>
            <SubmitBtn />
          </motion.div>
        </form>
      </motion.section>
      <Footer />
    </div>
  );
}
