"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowUpRight, BsCalendar3, BsClock } from "react-icons/bs";
import { SiSubstack } from "react-icons/si";
import { staggerContainer, staggerItem } from "@/lib/animations";

type BlogPost = {
  title: string;
  subtitle: string | null;
  url: string;
  coverImage: string | null;
  date: string;
  wordcount: number;
  slug: string;
  tags: string[];
};

function BlogSkeleton() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/10 animate-pulse"
        >
          <div className="aspect-video bg-gray-200 dark:bg-white/5" />
          <div className="p-5 space-y-3">
            <div className="h-3 bg-gray-200 dark:bg-white/10 rounded-full w-1/3" />
            <div className="h-5 bg-gray-200 dark:bg-white/10 rounded-lg w-4/5" />
            <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-lg w-full" />
            <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-lg w-2/3" />
            <div className="flex gap-2 pt-1">
              <div className="h-5 w-14 bg-gray-200 dark:bg-white/10 rounded-full" />
              <div className="h-5 w-16 bg-gray-200 dark:bg-white/10 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const readTime = Math.max(1, Math.round(post.wordcount / 200));
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.a
      variants={staggerItem}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-white/10 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-500/30"
    >
      {/* Cover image */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex-shrink-0">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority={index < 2}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-60">✍️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          <span className="flex items-center gap-1 px-2.5 py-1 bg-white/95 dark:bg-gray-900/95 text-xs font-semibold rounded-full text-indigo-600 dark:text-indigo-400 shadow-lg">
            Read <BsArrowUpRight className="text-[9px]" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Meta row */}
        <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-2.5">
          <span className="flex items-center gap-1.5">
            <BsCalendar3 />
            {formattedDate}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
          <span className="flex items-center gap-1.5">
            <BsClock />
            {readTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-[1.05rem] font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2 mb-2 leading-snug">
          {post.title}
        </h3>

        {/* Subtitle */}
        {post.subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed flex-1">
            {post.subtitle}
          </p>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-[0.6rem] uppercase tracking-wider bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full font-semibold border border-indigo-100 dark:border-indigo-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
}

export default function Blog() {
  const { ref } = useSectionInView("Blog", 0.3);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
        else setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="blog"
      ref={ref}
      className="mb-20 sm:mb-28 max-w-[54rem] scroll-mt-28 px-4 sm:px-0"
    >
      <SectionHeading>My Blog</SectionHeading>

      {/* Intro + Subscribe CTA */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 max-w-[36rem] mx-auto">
          I write about GCP, AI agents, data engineering, and backend
          architecture. Deep dives, tutorials, and lessons from production.
        </p>
        <a
          href="https://yashdev.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-orange-500/30 hover:-translate-y-0.5"
        >
          <SiSubstack className="text-base" />
          Subscribe on Substack
        </a>
      </motion.div>

      {/* States */}
      {loading && <BlogSkeleton />}

      {error && (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          <p className="text-5xl mb-4">📭</p>
          <p className="text-sm">
            Couldn&apos;t load posts. Visit{" "}
            <a
              href="https://yashdev.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              yashdev.substack.com
            </a>{" "}
            directly.
          </p>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <>
          <motion.div
            className="grid gap-5 sm:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </motion.div>

          {/* View all link */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://yashdev.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group"
            >
              View all posts on Substack
              <BsArrowUpRight className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </>
      )}
    </section>
  );
}
