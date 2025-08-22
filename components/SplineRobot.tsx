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

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    // Surface errors in production client logs instead of failing silently
    // This helps diagnose issues specific to Vercel builds
    // eslint-disable-next-line no-console
    console.error("SplineRobot ErrorBoundary caught: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Show a tiny unobtrusive fallback so it's clear something failed
      return (
        <div
          className="pointer-events-none text-[10px] leading-tight text-red-500/80"
          style={{ width: "100%", height: "100%" }}
        >
          3D unavailable
        </div>
      );
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
  const [loaded, setLoaded] = useState(false);
  
  // Only run on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Warn if the scene doesn't load within a reasonable time in production
  useEffect(() => {
    if (!mounted || loaded) return;
    const t = setTimeout(() => {
      if (!loaded) {
        // eslint-disable-next-line no-console
        console.warn(
          "Spline scene did not load within 10s. Verify that /scene.splinecode and /whiterobo.splinecode are accessible in production, viewport >= sm (hidden on mobile), and no CSP blocks.",
        );
      }
    }, 10000);
    return () => clearTimeout(t);
  }, [mounted, loaded]);

  // Don't render anything on server
  if (!mounted) return null;
  
  return (
    <div className="fixed bottom-4 left-4 z-[900] pointer-events-none hidden sm:block" style={{ width: '150px', height: '150px' }}>
      <ErrorBoundary>
        {mounted && (
          <Spline
            scene={theme === "light" ? "/scene.splinecode" : "/whiterobo.splinecode"}
            // onLoad is emitted when the scene is fully initialized
            onLoad={() => setLoaded(true)}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </ErrorBoundary>
    </div>
  );
}
