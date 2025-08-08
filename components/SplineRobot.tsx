"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/theme-context";

// Use a simplified error boundary to catch any rendering errors
class ErrorBoundary extends React.Component<
  { children: React.ReactNode }, 
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null; // Return nothing if there's an error
    }
    return this.props.children;
  }
}

// Import Spline dynamically to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => null
});

// Simple component for the actual Spline robot
export default function SplineRobot() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only run on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on server
  if (!mounted) return null;
  
  return (
    <div className="fixed bottom-4 left-4 z-[900] pointer-events-none hidden sm:block" style={{ width: '150px', height: '150px' }}>
      <ErrorBoundary>
        {mounted && (
          <Spline 
            scene={theme === "light" ? "/scene.splinecode" : "/whiterobo.splinecode"}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </ErrorBoundary>
    </div>
  );
}
