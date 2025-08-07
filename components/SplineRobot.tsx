"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/theme-context";

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function SplineRobot() {
  const { theme } = useTheme();
  
  return (
    <div className="fixed bottom-4 left-4 z-[900] pointer-events-none hidden sm:block" style={{ width: '150px', height: '150px' }}>
      <Spline 
        scene={theme === "light" ? "/scene.splinecode" : "/whiterobo.splinecode"}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
