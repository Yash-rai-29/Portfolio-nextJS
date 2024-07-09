import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 bottom-0 px-4 py-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Yash Rai. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Personal portfolio website for Yash Rai, built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, and Framer Motion. Hosted on Vercel.
      </p>
    </footer>
  );
}
